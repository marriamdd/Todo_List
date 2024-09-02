export default function AddTask() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-[34.3rem] xl:w-[57rem] shadow-custom h-[4.8rem] rounded-[0.8rem] px-[1rem] py-[1.4rem] gap-[1rem]">
        <img
          className="w-[24px] h-[24px]"
          src="/assets/task_icons/lets-icons_add-round.svg"
          alt="plus"
        />
        <span className="text-[1.6rem] font-[400] text-textColor  leading-[2.4rem]">
          Add a task
        </span>
      </div>
    </div>
  );
}
