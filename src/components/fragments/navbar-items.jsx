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
    <div className="flex md:items-center md:flex-row flex-col items-start max-md:gap-4 ">
      <Button className=" md:rounded-xl ">
        <Store />
        <span>Beli</span>
      </Button>
      <Button variant="ghost">
        <LibraryBig />
        <span>Kursus Saya</span>
      </Button>
      <Button variant="ghost">
        <BriefcaseBusiness />
        <span>Karier</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <CircleUserRound />
            <span>Profil</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-48">
          <DropdownMenuLabel>Logged in as Rifz</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
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
