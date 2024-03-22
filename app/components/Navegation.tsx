import { Tag } from "../lib/interface";
import { client } from "../lib/sanity";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

React.useState;

const Navigation = async () => {
  const tags: Tag[] = await getAllTags();
  return (
    <Command className="w-[250px]">
      <CommandInput placeholder="Realiza tu busqueda..." />
      <CommandList>
        <CommandEmpty>No hay resultados.</CommandEmpty>
        <CommandGroup heading="Menú">
          <Link href="/">
            <CommandItem className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 ">
              Inicio
            </CommandItem>
          </Link>
          <Link href="/blog">
            <CommandItem className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 ">
              Todas las publicaciones
            </CommandItem>
          </Link>
        </CommandGroup>
        <CommandGroup heading="Tags">
          {tags?.length > 0 &&
            tags?.map((tag) => (
              <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                <CommandItem className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 ">
                  #{tag.name}
                </CommandItem>
              </Link>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Navigation;
