import GetBlog from "./Components/GetBlog";

export function generateMetadata() {
  return {
    title: "blog.",
    description: "this is my blog.",
    openGraph: {
      title: `blog. social media`,
      description: `this is my blog. social media`,
    },
  };
}

export default async function Home({ searchParams }) {
  let search = await searchParams?.search?.toLowerCase();

  return (
    <div className="">
      <GetBlog search={search} />
    </div>
  );
}
