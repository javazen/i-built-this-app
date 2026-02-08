"use client";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { downvoteProductAction, upvoteProductAction } from "@/lib/products/product-actions";

export default function VotingButtons({
  hasVoted,
  voteCount,
  productId
}: {
  hasVoted: boolean;
  voteCount: number;
  productId: number
}) {
  const handleUpvote = async () => {
    const result = await upvoteProductAction(productId);
    console.log("upvote result", result);
  };
  const handleDownvote = async () => {
    const result = await downvoteProductAction(productId);
    console.log("downvote result", result);
  };
  return (
    <div
      className="flex flex-col items-center gap-1 shrink-0"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        className={cn("h-8 w-8 text-primary hover:bg-primary/20",
          hasVoted ? "opacity-50 cursor-not-allowed" : "text-destructive"
        )}
      >
        <ChevronUpIcon className="size-5" />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        {voteCount}
      </span>
      <Button
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        className={cn("h-8 w-8 text-primary hover:bg-primary/20",
          hasVoted ? "opacity-50 cursor-not-allowed" : "text-destructive"
        )}
      >
        <ChevronDownIcon className="size-5 text-destructive" />
      </Button>
    </div>
  );
} 