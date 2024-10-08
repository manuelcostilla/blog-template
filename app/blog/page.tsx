import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Navigation from "../components/Navegation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const revalidate = 30; // revalida cada casi 30 seg

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      tags
  }`;

  const data = await client.fetch(query);

  return data;
}

async function Blog() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <div className="lg:absolute lg:left-0 lg:top-21 mt-5 flex justify-center items-center">
        <Navigation />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {data.map((post, idx) => (
          <Card key={idx} className="w-full ">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="imagen"
              width={400}
              height={400}
              className=" rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className=" text-lg text-balance text-center line-clamp-2">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-balance text-sm text-center mb-2">
                {post.smallDescription}
              </p>
              <Button className="w-full mt-7" asChild>
                <Link href={`/blog/${post.currentSlug}`}> leer mas</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Blog;
