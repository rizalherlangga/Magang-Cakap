import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import NavbarItems from "../fragments/navbar-items";
import { InputContent } from "../ui/input-content";
import { DialogTitle } from "@radix-ui/react-dialog";

export const HeaderTemplate = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background shadow-md">
      <section className=" flex flex-col max-w-7xl mx-auto px-4 md:px-4 ">
        <div className="flex  gap-4 h-16 items-center justify-between ">
          <Link href="/">
            <img
              className=" max-w-28 w-28"
              src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/svg/cakap-logo.svg"
              alt="Cakap Logo"
            />
          </Link>
          <div className="md:hidden w-full">
            <InputContent />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden w-14" variant="outline" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs md:hidden">
              <DialogTitle>
                <span className="sr-only">Menu</span>
              </DialogTitle>
              <NavbarItems />
            </SheetContent>
          </Sheet>

          <div className="hidden w-full max-w-xl md:block">
            {<InputContent />}
          </div>

          <div className="hidden md:block">
            <NavbarItems />
          </div>
        </div>
      </section>
    </div>
  );
};
