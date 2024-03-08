import Link from "next/link";
import { ModeToggle } from "./toggle";

function NavBar() {
  return (
    <>
      <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto p-4">
        <Link href="/">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="/about">about</Link>
        <ModeToggle />
      </nav>
    </>
  );
}

export default NavBar;
