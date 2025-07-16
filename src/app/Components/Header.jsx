import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="">
        <Link href={`/`}>
          <h1 className="text-2xl font-sans font-bold">Blog</h1>
        </Link>
      </div>
      <div className="">
        <Link href={`/add-blog`}>
          <button className="btn m-0 p-0 inline mx-2 ">
            <img src="/icon/plus.svg" alt="" className="w-7 h-7 m-0 p-0" />
          </button>
        </Link>
      </div>
    </div>
  );
}
