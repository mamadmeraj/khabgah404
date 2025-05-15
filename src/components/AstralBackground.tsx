
import React from 'react';

const AstralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-astral-bg" />
      
      {/* Animated glow spots */}
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-astral-purple/10 blur-[80px] rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-astral-blue/10 blur-[100px] rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[5%] right-[5%] w-[20%] h-[20%] bg-astral-purple/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Star field */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[15%]" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[25%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[15%] left-[50%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[30%] left-[70%]" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[85%]" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[10%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[60%] left-[30%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[75%] left-[50%]" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[80%] left-[65%]" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[85%] left-[90%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[5%] left-[80%]" />
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[90%] left-[20%]" />
      </div>
    </div>
  );
};

export default AstralBackground;
