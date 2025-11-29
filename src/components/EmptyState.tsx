import { Heart } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-6">
        <Heart className="text-primary" size={48} />
      </div>
      <h3 className="mb-2 text-2xl font-serif font-semibold">
        Your wishlist is empty
      </h3>
      <p className="text-muted-foreground max-w-md">
        Start adding your wishes above! Whether it's something you want to buy,
        achieve, or experience - capture it here.
      </p>
    </div>
  );
};
