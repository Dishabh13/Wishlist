import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface WishCardProps {
  id: string;
  itemName: string;
  reason: string;
  timestamp: string;
  isDone: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const WishCard = ({
  id,
  itemName,
  reason,
  timestamp,
  isDone,
  onToggle,
  onDelete,
}: WishCardProps) => {
  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      className={cn(
        "border-border shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg",
        isDone && "opacity-60"
      )}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 space-y-2">
            <h3
              className={cn(
                "text-2xl font-serif font-semibold leading-tight",
                isDone && "line-through text-muted-foreground"
              )}
            >
              {itemName}
            </h3>
            <p
              className={cn(
                "text-base leading-relaxed",
                isDone ? "text-muted-foreground" : "text-foreground/80"
              )}
            >
              {reason}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-sm text-muted-foreground">
                Added {formattedDate}
              </span>
              {isDone && (
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  <Check size={14} />
                  Completed
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => onToggle(id)}
              size="icon"
              variant={isDone ? "secondary" : "default"}
              className="h-10 w-10"
              aria-label={isDone ? "Mark as pending" : "Mark as done"}
            >
              {isDone ? <RotateCcw size={18} /> : <Check size={18} />}
            </Button>
            <Button
              onClick={() => onDelete(id)}
              size="icon"
              variant="destructive"
              className="h-10 w-10"
              aria-label="Delete wish"
            >
              <X size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
