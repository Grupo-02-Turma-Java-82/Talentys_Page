import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="flex justify-between items-center bg-oxford-blue text-white px-6 py-4">
      <a href="#" onClick={handleNavClick}>
        <h1 className="font-bold text-2xl">Talentys</h1>
      </a>

      <div className="hidden md:flex justify-center items-center gap-6">
        <a
          className="text-base text-gray-300 font-medium hover:underline cursor-pointer"
          href="#features"
        >
          Funcionalidades
        </a>
        <a
          className="text-base text-gray-300 font-medium hover:underline cursor-pointer"
          href="#demonstration"
        >
          Demonstração
        </a>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="hover:bg-gray-600 transition-colors cursor-pointer focus-visible:ring-offset-0 focus-visible:ring-1"
            >
              <Menu className="h-8 w-8 text-white hover:bg-black" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-oxford-blue text-white border-l-0 w-[300px] flex flex-col"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl text-white text-left">
                Navegação
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4 bg-slate-700" />

            <div className="flex flex-col gap-3 flex-1 px-4">
              <SheetClose asChild>
                <a
                  href="#features"
                  onClick={handleNavClick}
                  className="text-lg text-gray-300 font-medium rounded-md p-2 -ml-2 hover:bg-slate-700 transition-colors"
                >
                  Funcionalidades
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#demonstration"
                  onClick={handleNavClick}
                  className="text-lg text-gray-300 font-medium rounded-md p-2 -ml-2 hover:bg-slate-700 transition-colors"
                >
                  Demonstração
                </a>
              </SheetClose>
            </div>

            <SheetFooter>
              <a
                href="https://github.com/Grupo-02-Turma-Java-82/Talentys_Page"
                target="_blank"
              >
                <Button type="button" variant="secondary" className="w-full">
                  Entrar em Contato
                </Button>
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
