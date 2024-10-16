import Link from "next/link";

type Props = {
  links: string[][] | undefined;
};
export default function SmallerLink({ links }: Props) {
  return (
    <div className="flex pt-2 flex-col gap-1 overflow-hidden">
      {links?.map((el) => (
        <Link
          href={el[1]}
          className="rounded-md px-4 py-3 bg-emerald-500 cursor-pointer hover:text-white duration-300 text-[15px]"
        >
          {el[0]}
        </Link>
      ))}
    </div>
  );
}
