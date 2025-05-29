import React, { useState } from 'react';
import AstralBackground from '@/components/AstralBackground';
import BookQuote from '@/components/BookQuote';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { quotes } from '@/data/quoteData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const currentQuote = quotes[currentQuoteIndex];

  const goToPrevious = () => {
    setCurrentQuoteIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentQuoteIndex((prevIndex) => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <AstralBackground />
      
      <div className="min-h-screen flex flex-col items-center justify-between px-2 sm:px-4 py-4 sm:py-8">
        <Header />
        
        <div className="flex-1 w-full max-w-full sm:max-w-xl md:max-w-4xl flex items-center justify-center py-8">
          <div className="relative w-full">
            {/* Navigation buttons for larger screens */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
              <Button 
                onClick={goToPrevious}
                variant="ghost" 
                size="icon" 
                className="rounded-full w-12 h-12 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
              <Button 
                onClick={goToNext}
                variant="ghost" 
                size="icon" 
                className="rounded-full w-12 h-12 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            
            {/* Book quote card */}
            <BookQuote
              key={currentQuote.id}
              id={currentQuote.id}
              quote={currentQuote.quote}
              author={currentQuote.author}
              book={currentQuote.book}
              className="animate-scale-up"
            />
          </div>
        </div>
        
        {/* Mobile navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <Button 
            onClick={goToPrevious}
            variant="outline" 
            className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
          >
            <ChevronRight className="w-5 h-5 ml-2" />
            قبلی
          </Button>
          
          <Button 
            onClick={goToNext}
            variant="outline" 
            className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
          >
            بعدی
            <ChevronLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
