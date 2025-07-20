import AddBlog from "@/app/Components/AddBlog";

export function generateMetadata() {
  return {
    title: "add blog.",
    description: "this is page for add blog.",
    openGraph: {
      title: `add blog. social media`,
      description: `this is page for add blog. social media`,
    },
  };
}

export default function AddBlogPage() {
  return (
    <div className="shadow shadow-gray-200 border border-gray-200 rounded-sm m-2.5 p-2.5">
      <AddBlog />
    </div>
  );
}
