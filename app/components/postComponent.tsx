import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Post } from "../lib/interface";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div>
      <Card>
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
            <Link href={`/blog/${post?.slug?.current}`}>leer más</Link>
          </Button>
        </CardContent>

        <CardFooter>
          {post?.tags?.map((tag) => (
            <span
              key={tag?._id}
              className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
            >
              {tag?.name}
            </span>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostComponent;
