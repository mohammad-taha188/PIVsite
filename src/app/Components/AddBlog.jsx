"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { supabaseAPI, supabaseURL } from "./supaBase";
import { useRouter } from "next/navigation";
import Alert from "./Alert";

export default function AddBlog() {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let [url, setUrl] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [isCompleted, setIsCompleted] = useState("loading");
  const [clicked, setClicked] = useState(false);
  let route = useRouter();

  const supabase = createClient(supabaseURL, supabaseAPI);

  function generateID() {
    const now = Date.now(); // زمان حال به صورت میلی‌ثانیه
    const random = Math.floor(Math.random() * 100000); // عدد رندوم بین 0 تا 99999
    return `${now}-${random}`;
  }

  async function imageHandler(e) {
    const file = e.target.files[0];
    setLoading(true);
    const res = await fetch(
      `/api/upload?filename=${generateID()}_${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );

    if (!res.ok) {
      const text = await res.text();
      setError(text);
      return;
    }

    const data = await res.json();
    setUrl(data.url);
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {isCompleted == "false" && (
        <div className="bg-red-500 px-2 py-1 rounded-sm text-white">
          pleace complate
        </div>
      )}
      {error && (
        <Alert
          title={`you have an error` || error}
          color="red-500"
          textColor="white"
        />
      )}
      <input
        type="text"
        placeholder="title..."
        className="border border-gray-200 focus:outline-gray-400 rounded-sm px-2 py-1"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="description..."
        className="border border-gray-200 focus:outline-gray-400 rounded-sm px-2 py-1 resize-none w-[50%] h-40"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <label
        htmlFor="img"
        className="border border-gray-200 focus:outline-gray-400 rounded-sm px-2 py-1 hover:cursor-pointer"
      >
        pleace choose a image
      </label>
      <input
        type="file"
        id="img"
        className="hidden"
        onChange={(e) => {
          imageHandler(e);
        }}
      />
      {url && <h2 className="">image added</h2>}
      {loading && <div className="">loading</div>}
      <button
        className="btn btn-green"
        disabled={clicked}
        onClick={async () => {
          if (title && desc && url) {
            setClicked(true);
            const { data, error } = await supabase.from("blogs").insert([
              {
                id: generateID(),
                title: title,
                desc: desc,
                userID: 1,
                imageURL: url,
              },
            ]);

            if (error) {
              setError(error);
            } else {
              console.log(data);
              setIsCompleted("true");
              route.replace("/");
            }
          } else {
            setIsCompleted("false");
          }
        }}
      >
        add blog
      </button>
    </div>
  );
}
