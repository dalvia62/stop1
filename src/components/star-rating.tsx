import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  className?: string;
  size?: number;
};

export function StarRating({ rating, className, size = 5 }: StarRatingProps) {
  const totalStars = 5;
  const starSizeClass = `h-${size} w-${size}`;

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: totalStars }, (_, i) => (
        <Star
          key={i}
          className={cn(
            starSizeClass,
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'
          )}
        />
      ))}
    </div>
  );
}
