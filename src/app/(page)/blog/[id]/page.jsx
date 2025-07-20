import Back from "@/app/Components/Back";
import { supabaseAPI, supabaseURL } from "@/app/Components/supaBase";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

export async function generateMetadata({ params }) {
  let { id } = await params;

  const supabase = createClient(supabaseURL, supabaseAPI);

  let { data } = await supabase.from("blogs").select("*");

  let thisBlog = await data?.find((blog) => blog?.id == id);

  return {
    title: thisBlog?.title,
    description: thisBlog?.description,
    openGraph: {
      title: `${thisBlog?.title} social media`,
      description: `${thisBlog?.description} social media`,
    },
  };
}

export default async function BlogPage({ params }) {
  let { id } = await params;

  const supabase = createClient(supabaseURL, supabaseAPI);

  let { data, error } = await supabase.from("blogs").select("*");

  let thisBlog = data?.find((blog) => blog?.id == id);

  return (
    thisBlog && (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-10 mb-20">
        <Back />
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 drop-shadow-md">
            {thisBlog?.title}
          </h2>

          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={thisBlog?.imageURL}
            alt={thisBlog?.title}
            className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 rounded-3xl shadow-lg object-cover"
          ></Image>
          <p className="whitespace-pre-line text-gray-700 text-lg leading-relaxed border border-gray-200 rounded-lg px-4 py-2 shadow-inner bg-gray-50">
            {thisBlog?.desc}
          </p>
        </div>
      </div>
    )
  );
}
