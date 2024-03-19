import { Button } from "@/components/ui/button";
import { HoverCardDemo } from "./Xlink";
import Link from "next/link";

function HomePageText() {
  return (
    <>
      <div className="flex flex-col items-center h-[250px] w-[600px] mt-8">
        <p className="text-black text-xl text-balance dark:text-gray-50">
          <span className="block text-2xl text-black dark:text-slate-100 dark:font-semibold ">
            Hola! soy Manuel Costilla{" "}
            <span className="dark:text-cyan-200 text-cyan-700 font-bold">
              Desarrollador Web Fullstack
            </span>
          </span>
          en este blog estaré hablando de temas que me resulten interesantes y
          aportando mi opinión, presentando nuevos proyectos que esté realizando
          y explicando el por qué de la elección de cada tecnología.
          <span className="block">
            ¡Espero que disfrutes de una buena experiencia y si gustas podemos
            compartir opiniones en <HoverCardDemo />! ❤️
          </span>
        </p>
        <Button
          className="mt-5 w-full text-xl  font-semibold text-black dark:text-white"
          asChild
        >
          <Link
            href="https://manuelcostilla-gamedev-webdev.netlify.app/"
            target="_blank"
          >
            Conoce más sobre mí
          </Link>
        </Button>
      </div>
    </>
  );
}

export default HomePageText;
