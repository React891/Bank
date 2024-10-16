"use client";
import React, { Dispatch, SetStateAction } from "react";
import SmallerLink from "./SmallerLink";
import { FaSortDown } from "react-icons/fa6";

type Props = {
  name: string;
  icon: any;
  links: string[][];
  track: number
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function LinkTypeB({
  name,
  track,
  icon,
  links,
  active,
  setActive,
}: Props) {
  return (
    <div
      onClick={() => {
        if (active !== track) {
          setActive(track);
        } else {
          setActive(-1);
        }
      }}
      className="text-white"
    >
      <div className=" flex relative cursor-pointer bg-blue-600 w-full items-center p-3 rounded-md shadow-md gap-2">
        {icon}
        <p className="text-sm">{name}</p>
        <FaSortDown  className={`absolute right-3 duration-300 top-1/2 -translate-y-1/2 ${active === track?'-rotate-180': 'rotate-0'}`}/>
      </div>
      <div
        className={` grid overflow-hidden duration-300 ${
          active !== track ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="flex flex-col overflow-hidden">
          <SmallerLink links={links} />
        </div>
      </div>
    </div>
  );
}
