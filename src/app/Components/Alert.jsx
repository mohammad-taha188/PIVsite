"use client";
export default function Alert({ title, color, textColor }) {
  console.log(title);
  return (
    <div className="flex w-full justify-center items-center">
      <div
        className={`bg-${color} text-${textColor} rounded-sm px-5 py-2 fixed top-2 left-2 right-2 
          flex justify-between items-center`}
      >
        {title}
        <img
          src="/icon/plus.svg"
          alt=""
          className="w-7 h-7 m-0 p-0 rotate-45"
          onClick={(e) => {
            e.target.parentNode.parentNode.remove;
          }}
        />
      </div>
    </div>
  );
}
