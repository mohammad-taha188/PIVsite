"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";



export default function Search() {
  let [search, setSearch] = useState("");
  let input = useRef();
  let router = useRouter();

  function searchHandler(search) {
    if (search) {
      router.push(`/?search=${search}`);
    } else {
      router.push(`/`);
    }
  }

  return (
    <div className="flex w-[90%] gap-3 justify-center mx-auto my-2">
      <input
        type="text"
        placeholder="Search blog..."
        className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        ref={input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchHandler(search);
          }
        }}
      />
      <button
        className="bg-yellow-400 text-white font-serif rounded-lg px-6 py-2 shadow-md hover:bg-yellow-500 active:scale-95 transition-transform duration-150"
        onClick={() => searchHandler(search)}
      >
        Search
      </button>
    </div>
  );
}
