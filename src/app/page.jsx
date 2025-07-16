import GetBlog from "./Components/GetBlog";

export default async function Home({ searchParams }) {
  let search = await searchParams?.search?.toLowerCase();

  return (
    <div className="">
      <GetBlog search={search} />
    </div>
  );
}
