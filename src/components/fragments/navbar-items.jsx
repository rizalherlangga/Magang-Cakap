"use client";

import {
  BriefcaseBusiness,
  CircleUserRound,
  LibraryBig,
  LogOut,
  Store,
  UserCog,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function NavbarItems() {
  return (
    <div className="flex md:items-center md:flex-row flex-col gap-4">
      <Sheet>
        <Button className="bg-primary rounded-xl">
          <Store />
          <span>Beli</span>
        </Button>
        <Button variant="ghost">
          <LibraryBig />
          <span>Kursus Saya</span>
        </Button>
        <Button size="icon" variant="ghost">
          <BriefcaseBusiness />
          <span>Karier</span>
        </Button>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <CircleUserRound />
            <span>Profil</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as Rifz</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
          // onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
