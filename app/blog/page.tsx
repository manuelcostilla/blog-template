import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { simpleBlogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const revalidate = 30; // revalida cada casi 30 seg

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDesc,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

async function Blog() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
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
              {post.smallDesc}
            </p>
            <Button className="w-full mt-7" asChild>
              <Link href={`/blog/${post.currentSlug}`}> leer mas</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Blog;
