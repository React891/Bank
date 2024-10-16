import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { AiOutlineWifi } from "react-icons/ai";

export default function CreditCard() {
  return (
    <div className="flex flex-col justify-between h-56 w-96 card p-5">
      <div className="flex font-semibold mb-2 justify-between items-center">
        <span>Chase Bank</span>
        <span>Credit Card</span>
      </div>
      <div className="flex justify-between mb-2 items-center w-full overflow-hidden ">
        <img src="chip.png" className="h-8" alt="" />
        <AiOutlineWifi className="rotate-90 text-2xl" />
      </div>
      <div className="">
        <p className="text-lg font-bold"> 4000 0566 5566 5556</p>
        <p className="text-sm">5434</p>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="text-[9px] font-light">
              <p>VALID</p>
              <p>THRU</p>
            </div>
            <TiArrowSortedUp className="text-xl rotate-90" />
          </div>
          <p className={`text-lg font-semibold`}>01/80</p>
        </div>
      </div>
      <p className="uppercase font-semibold">Tony Cordiela Johnson</p>
    </div>
  );
}
