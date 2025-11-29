import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface WishFormProps {
  onAddWish: (itemName: string, reason: string) => void;
}

export const WishForm = ({ onAddWish }: WishFormProps) => {
  const [itemName, setItemName] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim() && reason.trim()) {
      onAddWish(itemName.trim(), reason.trim());
      setItemName("");
      setReason("");
    }
  };

  return (
    <Card className="border-border shadow-[var(--shadow-card)] bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-3xl">
          <Sparkles className="text-primary" size={32} />
          Add a New Wish
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemName" className="text-base font-medium">
              What do you wish for?
            </Label>
            <Input
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., New camera"
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason" className="text-base font-medium">
              Why is this important to you?
            </Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., To capture memories of my travels"
              required
              rows={3}
              className="text-base resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full text-base font-semibold h-12 shadow-[var(--shadow-soft)] hover:shadow-lg transition-shadow"
          >
            Add to Wishlist
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
