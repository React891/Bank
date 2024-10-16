"use client";
import React, { Dispatch, SetStateAction } from "react";
import { BiSolidHome } from "react-icons/bi";
import { TbSortDescending } from "react-icons/tb";
import Link from "next/link";
import SmallerLink from "./SmallerLink";

type Props = {
  name: string;
  url: string;
  icon: any;
};

export default function LinkTypeA({
  name,
  url,
  icon,
}: Props) {
  return (
    <div className="text-white">
        <Link href={url} className="">
          <div className=" flex relative bg-blue-600 w-full items-center p-3 rounded-md shadow-md gap-2">
            {icon}
            <p className="text-sm">{name}</p>
          </div>
        </Link>
    </div>
  );
}
