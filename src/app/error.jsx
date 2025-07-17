"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800 px-4 m-4 rounded-sm shadow shadow-red-900">
      <h1 className="text-4xl font-bold ">😞 you have an error 😞</h1>
      <p className="text-lg mb-4">
        {error?.message || "مشکلی در بارگذاری صفحه پیش آمده است."}
      </p>
      <button onClick={() => reset()} className="btn btn-red">
        try again
      </button>
    </div>
  );
}
