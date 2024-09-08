import cardPaterns from "./cardPaterns.json";
import LoginStaticCard from "./loginStaticCard.jsx";

const Pattern = () => {
  return (
    <div className="hidden xl:block gap-x-[5px] gap-y-[10px] columns-3 overflow-hidden xl:min-w-[496px] justify-self-start">
      {cardPaterns.map((item, index) => {
        const gradientStyle = {
          background: item.gradient, // Apply the linear-gradient from JSON
          color: item.textColor,
        };

        return (
          <LoginStaticCard
            key={index}
            tags={item.tags}
            gradientStyle={gradientStyle} // Pass the gradientStyle prop
            textColor={item.textColor}
            title={item.title}
            activeBulletsNum={item.activeBulletsNum}
            attentionText={item.attentionText}
            toDo={item.toDo}
          />
        );
      })}
    </div>
  );
};

export default Pattern;
