import React from "react";
import { ReadMoreLess } from "../ReadMore";

interface DynamicBoxProps {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const DynamicBox: React.FC<DynamicBoxProps> = ({ expand, setExpand }) => {
  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div
      className={`transition-all duration-500 grid gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ${
        expand ? "h-[1200px] grid-rows-3" : "h-[800px] grid-rows-2"
      }`}
    >
      <div
        className={`bg-white rounded-xl p-5 text-black lg:col-span-2 col-span-1 ${
          expand ? "row-span-2" : "row-span-1"
        }`}
      >
        <div> Get to know me better!</div>
        <ReadMoreLess
          description=" My name is Joshua. Living in New York City. Currently a senior at City Tech. Aiming for my Bachelor's Degree in Computer Software Development. When I'm not caught up in ..."
          more="my busy schoolwork. I spend time reading, watching youtube, lifting weights, and creating projects. And of course, the occasional binge-watching on Netflix, napping, or video games."
        />
      </div>

      <div className="bg-white rounded-xl p-5 text-black col-span-2">
        <div>Box 2</div>
      </div>

      <div className="bg-white rounded-xl p-5 text-black col-span-1">box2</div>
      <div className="bg-white rounded-xl p-5 text-black">box3</div>
      <div className="bg-white rounded-xl p-5 text-black col-span-1">box4</div>
      <div className="bg-white rounded-xl p-5 text-black col-span-1">box5</div>
      <div className="bg-white rounded-xl p-5 text-black col-span-1">box6</div>
      <div className="bg-white rounded-xl p-5 text-black col-span-1">box7</div>
    </div>
  );
};

export default DynamicBox;
