import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface WishlistItem {
  id: string;
  title: string;
  image: string;
  price: string;
  location: string;
}

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedWishlist = localStorage.getItem("hotel-wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const addToWishlist = (item: WishlistItem) => {
    const isAlreadyInWishlist = wishlist.some(w => w.id === item.id);
    
    if (isAlreadyInWishlist) {
      toast({
        title: "Already in Wishlist",
        description: `${item.title} is already in your wishlist.`,
      });
      return;
    }

    const newWishlist = [...wishlist, item];
    setWishlist(newWishlist);
    localStorage.setItem("hotel-wishlist", JSON.stringify(newWishlist));
    
    toast({
      title: "Added to Wishlist",
      description: `${item.title} has been added to your wishlist.`,
    });
  };

  const removeFromWishlist = (id: string) => {
    const newWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(newWishlist);
    localStorage.setItem("hotel-wishlist", JSON.stringify(newWishlist));
    
    toast({
      title: "Removed from Wishlist",
      description: "Suite has been removed from your wishlist.",
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("hotel-wishlist");
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  };
};