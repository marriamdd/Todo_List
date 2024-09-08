import PropTypes from "prop-types";

const listCyrcle = (
  <svg
    width="9"
    height="10"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4.77865" cy="4.82712" r="4.20907" fill="#D9D9D9" />
  </svg>
);

const CardDemo = ({
  tags,
  gradient,

  textColor,
  title,
  activeBulletsNum,
  attentionText,
  toDo,
}) => {
  const bullets = Array.from({ length: 20 });
  const activeBullets = Array.from({ length: activeBulletsNum });

  return (
    <div
      className="w-[162px] py-[1rem] rounded-[12px] overflow-hidden pl-[12px] mb-[10px] relative"
      style={{
        color: textColor,
        background: gradient,
      }}
    >
      <div className="flex gap-[5px] mb-[8px]">
        {tags?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] px-[3.21px] py-[6.42px] rounded-[12px]"
          >
            <p className="text-[11px] text-[#F77E7E]">{item}</p>
          </div>
        ))}
      </div>

      <h2 className="text-[11px] leading-[14px] mb-[8px]">{title}</h2>

      <div className="flex flex-col mb-[8px]">
        <p className="text-[8.42px] leading-[10.19px] mb-[4px]">Progress</p>

        <div className="flex relative">
          <div className="flex absolute">
            {bullets.map((_, index) => (
              <div
                key={index}
                className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9] mx-[1px]"
              ></div>
            ))}
          </div>

          <div className="flex absolute">
            {activeBullets.map((_, index) => (
              <div
                key={index}
                className="w-[8px] h-[8px] rounded-full bg-[#FFFFFF] mx-[1px]"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {attentionText && (
        <p className="mt-[9px] text-[8px] leading-[10px] mb-[8px]">
          {attentionText}
        </p>
      )}

      {toDo && (
        <div>
          <p className="text-[11px] leading-[14px] mb-[4px]">To Do</p>

          <ul className="list-disc list-outside pl-[1rem]">
            {toDo.map((item, index) => (
              <li key={index} className="flex gap-[3px] items-center mb-[4px]">
                {listCyrcle}
                <p className="text-[8px] leading-[10px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

CardDemo.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  gradient: PropTypes.string.isRequired,

  textColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  activeBulletsNum: PropTypes.number.isRequired,
  attentionText: PropTypes.string,
  toDo: PropTypes.arrayOf(PropTypes.string),
};

export default CardDemo;
