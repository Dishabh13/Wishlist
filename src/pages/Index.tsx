import { WishForm } from "@/components/WishForm";
import { WishCard } from "@/components/WishCard";
import { EmptyState } from "@/components/EmptyState";
import { useWishlist } from "@/hooks/useWishlist";

const Index = () => {
  const { wishes, addWish, toggleWish, deleteWish } = useWishlist();

  const pendingWishes = wishes.filter((wish) => !wish.isDone);
  const completedWishes = wishes.filter((wish) => wish.isDone);

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-3 mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-[var(--gradient-warm)] bg-clip-text text-transparent">
            My Wishlist
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A place to capture your dreams, goals, and aspirations
          </p>
        </header>

        {/* Add Wish Form */}
        <WishForm onAddWish={addWish} />

        {/* Wishlist Display */}
        <div className="space-y-6">
          {wishes.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {pendingWishes.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
                    Pending Wishes
                    <span className="text-base font-sans font-normal text-muted-foreground">
                      ({pendingWishes.length})
                    </span>
                  </h2>
                  <div className="space-y-3">
                    {pendingWishes.map((wish) => (
                      <WishCard
                        key={wish.id}
                        {...wish}
                        onToggle={toggleWish}
                        onDelete={deleteWish}
                      />
                    ))}
                  </div>
                </section>
              )}

              {completedWishes.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
                    Completed Wishes
                    <span className="text-base font-sans font-normal text-muted-foreground">
                      ({completedWishes.length})
                    </span>
                  </h2>
                  <div className="space-y-3">
                    {completedWishes.map((wish) => (
                      <WishCard
                        key={wish.id}
                        {...wish}
                        onToggle={toggleWish}
                        onDelete={deleteWish}
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
