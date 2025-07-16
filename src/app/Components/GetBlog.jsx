import Link from "next/link";
import Search from "./Search";

export let data = [
  {
    id: 1,
    title: "dota 2",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://miro.medium.com/v2/resize:fit:1400/1*bjX2HdOx9RyFecPCbmOl4w.jpeg",
  },
  {
    id: 2,
    title: "minecraft",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh1SbrEYbA6fnBoHSFEtE-eElUlYb9pAH9brLKH6Cs1vvCWgHunNyqqmsvID0lawMXmWJT2tuIhMDw_5296MVYptbw27XhKALyZl8uwfs",
  },
  {
    id: 3,
    title: "GTA1",
    userID: 1,
    desc: "it's a game",
    imageURL: "https://i.ytimg.com/vi/ahOIJNLLtkI/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "GTA2",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://static.wikia.nocookie.net/gtawiki/images/b/b4/GTA2_PC_screenshot.jpg",
  },
  {
    id: 5,
    title: "GTA3",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/250px-GTA3boxcover.jpg",
  },
  {
    id: 6,
    title: "GTA4",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/fa/b/b7/Grand_Theft_Auto_IV_cover.jpg",
  },
  {
    id: 7,
    title: "GTA5",
    userID: 1,
    desc: "it's a game",
    imageURL: "https://clouddeck.app/images/blog/gta-5-geforce-now/gta-5.png",
  },
  {
    id: 8,
    title: "dark souls",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://www.tarastrofimov.com/wp-content/uploads/2022/07/dark_souls_remastered_header_2.jpg",
  },
  {
    id: 9,
    title: "cs2",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/cs2/maps/dust2_back_plat_s2.jpg",
  },
  {
    id: 10,
    title: "warzone",
    userID: 1,
    desc: "it's a game",
    imageURL:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/54bd6a40eb3759aca46966aadd4c4d0d84b2713e/header.jpg",
  },
  // {
  //   id: 11,
  //   title: "fortnite",
  //   userID: 1,
  //   desc: "it's a game",
  //   imageURL: "/fortnite.jpg",
  // },
  // {
  //   id: 12,
  //   title: "AOT",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/AOT.jpg",
  // },
  // {
  //   id: 13,
  //   title: "naruto",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/naruto.jpg",
  // },
  // {
  //   id: 14,
  //   title: "death note",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/death note.jpg",
  // },
  // {
  //   id: 15,
  //   title: "one piece",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/one piece.jpg",
  // },
  // {
  //   id: 16,
  //   title: "Bleach",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/Bleach.jpg",
  // },
  // {
  //   id: 17,
  //   title: "MHA",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/MHA.jpg",
  // },
  // {
  //   id: 18,
  //   title: "HXH",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/HXH.jpg",
  // },
  // {
  //   id: 19,
  //   title: "inuyasha",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/inuyasha.jpg",
  // },
  // {
  //   id: 20,
  //   title: "jojo",
  //   userID: 1,
  //   desc: "it's a anime",
  //   imageURL: "/jojo.jpg",
  // },
];

export default async function GetBlog({ search }) {
  let searchParams = search;

  return (
    <div className="">
      <Search />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3.5 p-4 justify-center">
        {searchParams
          ? data
              .filter((data) =>
                data.title.toLowerCase().includes(searchParams.toLowerCase())
              )
              .map((blog) => {
                return (
                  <Link
                    href={`/blog/${blog.id}`}
                    key={blog.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-md transition duration-300 hover:shadow-lg hover:scale-[1.02] bg-white"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={blog.imageURL}
                        alt={blog.title}
                        className="h-full w-full object-contain object-top group-hover:scale-105 transition-transform duration-300 rounded-sm"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200">
                        {blog.title}
                      </h2>
                    </div>
                  </Link>
                );
              })
          : data.map((blog) => {
              return (
                <Link
                  href={`/blog/${blog.id}`}
                  key={blog.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-md transition duration-300 hover:shadow-lg hover:scale-[1.02] bg-white"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={blog.imageURL}
                      alt={blog.title}
                      className="h-full w-full object-contain object-top group-hover:scale-105 transition-transform duration-300 rounded-sm"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200">
                      {blog.title}
                    </h2>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
