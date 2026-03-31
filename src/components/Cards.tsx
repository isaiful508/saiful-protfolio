import React, { useState } from "react";

const Card = ({ idx, offset, isPinned, handleClick }: any) => {
  return (
    <div
      onClick={() => handleClick(idx)}
      data-idx={idx}
      className={`absolute h-[200px] w-[200px] border border-black cursor-pointer transition-colors ${
        isPinned ? "bg-green-300 z-10" : "bg-blue-300 hover:bg-purple-500 hover:z-[100]"
      }`}
      style={{
        top: `${offset}px`,
        left: `${offset}px`,
      }}
    />
  );
};

const StackedCards = ({ experiences }) => {
  const [pinnedCard, setPinnedCard] = useState(undefined);

  const handleClick = (idx) => {
    setPinnedCard(prev => (prev === idx ? undefined : idx));
  };

  return (
    <div className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px]">
      {experiences.map((exp, idx) => (
        <Card
          key={idx}
          exp={exp}
          idx={idx}
          isPinned={idx === pinnedCard}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default StackedCards;
