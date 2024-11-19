import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="flex h-16 items-center justify-between px-4 md:px-4">
        <Link href="/">LOGO</Link>
        <Sheet>
          <Button></Button>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
