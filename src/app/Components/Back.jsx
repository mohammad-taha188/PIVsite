"use client";

export default function Back() {
  return (
    <button
      className="btn m-0 p-0 inline mx-2"
      onClick={() => {
        history.back();
      }}
    >
      <img src="/icon/back.svg" alt="" className=" w-7 h-7" />
    </button>
  );
}
