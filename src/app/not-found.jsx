import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 m-4 rounded-sm shadow shadow-gray-300">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">this is page not found</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        home
      </Link>
    </div>
  );
}
