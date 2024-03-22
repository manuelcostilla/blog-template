import Link from "next/link";
import { ModeToggle } from "./toggle";

function NavBar() {
  return (
    <>
      <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto p-4">
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">Acerca de</Link>
        <ModeToggle />
      </nav>
    </>
  );
}

export default NavBar;
