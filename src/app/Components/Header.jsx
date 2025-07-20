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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
