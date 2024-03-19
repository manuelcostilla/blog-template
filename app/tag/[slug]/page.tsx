import Navigation from "@/app/components/Navegation";
import PostComponent from "@/app/components/postComponent";
import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import React from "react";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "blog" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    smallDescription,
    titleImage,
    slug,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);
  return (
    <>
      <div className="absolute left-0 top-21 mt-5  ">
        <Navigation />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </>
  );
};

export default page;
