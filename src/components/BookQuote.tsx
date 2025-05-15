
import React, { useState } from 'react';
import { Heart, ThumbsDown, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export type BookQuoteProps = {
  id: string;
  quote: string;
  author: string;
  book: string;
  className?: string;
};

const BookQuote: React.FC<BookQuoteProps> = ({ id, quote, author, book, className }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
    
    if (!liked) {
      toast.success('پسندیده شد!');
    }
  };
  
  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
    
    if (!disliked) {
      toast.info('نپسندیده شد');
    }
  };
  
  const handleSave = () => {
    setSaved(!saved);
    
    if (!saved) {
      toast.success('ذخیره شد!');
    } else {
      toast.info('از ذخیره خارج شد');
    }
  };
  
  return (
    <div 
      className={cn(
        'glass-card p-8 sm:p-10 rounded-2xl flex flex-col max-w-[600px] w-full mx-auto animate-fade-in',
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(140deg, rgba(255,255,255,0.05) 0%, rgba(155,135,245,0.05) 100%)'
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-6 mb-8">
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-center leading-relaxed text-white tracking-wide">
          "{quote}"
        </p>
        
        <div className="mt-2 text-center">
          <p className="text-lg sm:text-xl text-astral-purple font-medium mb-1">{author}</p>
          <p className="text-sm sm:text-base text-gray-400 italic">{book}</p>
        </div>
      </div>
      
      <div className="flex justify-between border-t border-white/10 pt-6 mt-2">
        <button 
          onClick={handleLike}
          className={cn(
            "flex items-center gap-2 px-6 py-2 rounded-md transition-all",
            liked ? "text-astral-purple" : "text-white/70 hover:text-white"
          )}
        >
          <Heart className={cn(
            "w-5 h-5 transition-all", 
            liked ? "fill-astral-purple" : "fill-transparent"
          )} />
          <span>پسندیدن</span>
        </button>
        
        <button 
          onClick={handleDislike}
          className={cn(
            "flex items-center gap-2 px-6 py-2 rounded-md transition-all",
            disliked ? "text-astral-blue" : "text-white/70 hover:text-white"
          )}
        >
          <ThumbsDown className={cn(
            "w-5 h-5 transition-all", 
            disliked ? "text-astral-blue" : "text-white/70"
          )} />
          <span>نپسندیدن</span>
        </button>
        
        <button 
          onClick={handleSave}
          className={cn(
            "flex items-center gap-2 px-6 py-2 rounded-md transition-all",
            saved ? "text-astral-sky-blue" : "text-white/70 hover:text-white"
          )}
        >
          <Bookmark className={cn(
            "w-5 h-5 transition-all", 
            saved ? "fill-astral-sky-blue text-astral-sky-blue" : "fill-transparent"
          )} />
          <span>ذخیره</span>
        </button>
      </div>
    </div>
  );
};

export default BookQuote;
