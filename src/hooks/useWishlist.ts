import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Wish } from "@/types/wish";
import { toast } from "sonner";

export const useWishlist = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch wishes from Supabase
  const fetchWishes = async () => {
    try {
      const { data, error } = await supabase
        .from("wishes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setWishes(data || []);
    } catch (error) {
      console.error("Error fetching wishes:", error);
      toast.error("Failed to load wishes");
    } finally {
      setIsLoading(false);
    }
  };

  // Load wishes on mount
  useEffect(() => {
    fetchWishes();
  }, []);

  const addWish = async (itemName: string, reason: string) => {
    try {
      const { data, error } = await supabase
        .from("wishes")
        .insert({
          item_name: itemName,
          reason: reason,
        })
        .select()
        .single();

      if (error) throw error;

      setWishes((prev) => [data, ...prev]);
      toast.success("Wish added successfully!");
    } catch (error) {
      console.error("Error adding wish:", error);
      toast.error("Failed to add wish");
    }
  };

  const toggleWish = async (id: string) => {
    try {
      const wish = wishes.find((w) => w.id === id);
      if (!wish) return;

      const { error } = await supabase
        .from("wishes")
        .update({ is_done: !wish.is_done })
        .eq("id", id);

      if (error) throw error;

      setWishes((prev) =>
        prev.map((w) => (w.id === id ? { ...w, is_done: !w.is_done } : w))
      );
      toast.success(wish.is_done ? "Marked as pending" : "Marked as done");
    } catch (error) {
      console.error("Error toggling wish:", error);
      toast.error("Failed to update wish");
    }
  };

  const deleteWish = async (id: string) => {
    try {
      const { error } = await supabase.from("wishes").delete().eq("id", id);

      if (error) throw error;

      setWishes((prev) => prev.filter((w) => w.id !== id));
      toast.success("Wish deleted");
    } catch (error) {
      console.error("Error deleting wish:", error);
      toast.error("Failed to delete wish");
    }
  };

  return {
    wishes,
    isLoading,
    addWish,
    toggleWish,
    deleteWish,
  };
};
