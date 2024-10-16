"use client";
import { BiSolidHome } from "react-icons/bi";
import { useState } from "react";
import LinkTypeA from "./LinkTypeA";
import LinkTypeB from "./LinkTypeB";

export default function Nav() {
  const [active, setActive] = useState(-1);
  return (
    <div className="px-4 flex flex-col gap-2 pt-10 font-semibold">
      <LinkTypeA name="Dashboard" url="contact" icon={<BiSolidHome />} />
      <LinkTypeB
        name="Accounts"
        track={0}
        active={active}
        setActive={setActive}
        icon={<BiSolidHome />}
        links={[
          ["Create New Account", "new"],
          ["Approve KYC", "current"],
          ["Approve Deposit", "old"],
          ["Update Users Account", "current"],
          ["Upload User Profile Image", "current"],
          ["View User Accounts", "current"],
          ["Change User Status", "current"],
          ["Pending Accounts", "current"],
        ]}
      />
      <LinkTypeA name="Credit Cards" url="contact" icon={<BiSolidHome />} />
      <LinkTypeA name="Loans" url="contact" icon={<BiSolidHome />} />
      <LinkTypeB
        name="Transfers"
        track={3}
        active={active}
        setActive={setActive}
        icon={<BiSolidHome />}
        links={[
          ["Transfer Status", "new"],
          ["Add Transfer", "old"],
        ]}
      />
      <LinkTypeB
        name="Messages & Inbox"
        track={4}
        active={active}
        setActive={setActive}
        icon={<BiSolidHome />}
        links={[
          ["View Tickets", "new"],
          ["View & Compose Message", "old"],
        ]}
      />
      <LinkTypeB
        name="Transactions"
        track={5}
        active={active}
        setActive={setActive}
        icon={<BiSolidHome />}
        links={[
          ["DR/CR Transaction History", "new"],
          ["Transfer Records & Status", "old"],
        ]}
      />
      <LinkTypeA name="Settings" url="contact" icon={<BiSolidHome />} />
      <LinkTypeA name="Sign out" url="contact" icon={<BiSolidHome />} />
    </div>
  );
}
