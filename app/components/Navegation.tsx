import { Tag } from "../lib/interface";
import { client } from "../lib/sanity";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
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

const Navigation = async () => {
  const tags: Tag[] = await getAllTags();
  console.log(tags, "tags");
  return (
    <Command>
      <CommandInput placeholder="realiza tu busqueda..." />
      <CommandList>
        <CommandEmpty>No hay resultados.</CommandEmpty>
        <CommandGroup heading="tags">
          {tags?.length > 0 &&
            tags?.map((tag) => (
              <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                <CommandItem className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
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
