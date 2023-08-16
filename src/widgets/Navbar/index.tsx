import Link from "next/link";

import Button from "@/components/Button";
import NavLink from "./NavLink";
import Wrapper from "@/components/Wrapper";

export default function Navbar() {
  return (
    <Wrapper>
      <nav className="flex justify-between bg-white rounded-2xl mt-5 p-5">
        <div className="flex items-center">
          <h1 className="font-medium text-4xl">Brand</h1>
        </div>
        <div className="flex gap-x-10">
          <ul className="flex gap-x-10 items-center">
            <NavLink>
              <Link href={"/"}>Home</Link>
            </NavLink>
            <NavLink>
              <Link href={"/#about"}>About Me</Link>
            </NavLink>
            <NavLink>
              <Link href={"/#Projects"}>Projects</Link>
            </NavLink>
          </ul>
          <Button>Get in touch</Button>
        </div>
      </nav>
    </Wrapper>
  );
}
