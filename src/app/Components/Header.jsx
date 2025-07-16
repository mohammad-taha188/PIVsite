import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="">
        <Link href={`/`}>
          <h1 className="text-2xl font-sans font-bold">Blog</h1>
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
}
