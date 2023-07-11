"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OwnProps {}

type Props = OwnProps;

export const NavbarAction: FunctionComponent<Props> = (props) => {
  return (
    <>
      {/*<Link href={"/pricing"}>*/}
      <div>
        <Button
          onClick={() => {
            signIn("google");
          }}
          variant={"secondary"}
          size={"sm"}
          className={"mr-4 px-4"}
        >
          Sign In
        </Button>
        {/*</Link>*/}
        <Link href={"/pricing"}>
          <Button variant={"default"} size={"sm"} className={"mr-4 px-4"}>
            Get Ticket
          </Button>
        </Link>
      </div>
    </>
  );
};
