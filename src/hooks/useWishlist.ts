import { useState, useEffect } from "react";
import { Wish } from "@/types/wish";

const STORAGE_KEY = "wishlist-data";

export const useWishlist = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  // Load wishes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setWishes(parsed);
      }
    } catch (error) {
      console.error("Failed to load wishes from localStorage:", error);
    }
  }, []);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (error) {
      console.error("Failed to save wishes to localStorage:", error);
    }
  }, [wishes]);

  const addWish = (itemName: string, reason: string) => {
    const newWish: Wish = {
      id: crypto.randomUUID(),
      itemName,
      reason,
      timestamp: new Date().toISOString(),
      isDone: false,
    };
    setWishes((prev) => [newWish, ...prev]);
  };

  const toggleWish = (id: string) => {
    setWishes((prev) =>
      prev.map((wish) =>
        wish.id === id ? { ...wish, isDone: !wish.isDone } : wish
      )
    );
  };

  const deleteWish = (id: string) => {
    setWishes((prev) => prev.filter((wish) => wish.id !== id));
  };

  return {
    wishes,
    addWish,
    toggleWish,
    deleteWish,
  };
};
