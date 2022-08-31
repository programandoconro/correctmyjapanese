import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import Link from "next/link";
import Hamburger from "./hamburger";
import ButtonLogout from "../ui/buttonLogout";
import { useAppSelector } from "../../redux/hooks";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const user = useAppSelector((state) => state.auth.user.name);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeOnClickOut = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current?.contains(e.target as HTMLDivElement)
    ) {
      setOpen(false);
    }
  };
  useLayoutEffect(() => {
    document.addEventListener("mousedown", closeOnClickOut);
    return () => {
      document.removeEventListener("mousedown", closeOnClickOut);
    };
  }, []);

  const Menu = () => {
    if (open) {
      return (
        <div className="absolute overflow-y-auto whitespace-pre w-[300px] z-10 p-4 shadow-2xl transition border border-slate-600 bg-slate-800 text-white">
          <Link href={"/user"}>
            <div className="p-3 select-none hover:bg-slate-600">
              <div className="h-full text-lg italic font-extralight">
                {user}
              </div>
            </div>
          </Link>
          <hr className="mt-1 mb-1" />
          <div className="flex justify-between">
            <Link href={"/"}>
              <div className="p-3  select-none hover:bg-slate-600 cursor-pointer w-full">
                <div className="h-full text-lg">Dashboard</div>
              </div>
            </Link>
          </div>
          <div className="flex justify-between">
            <Link href={"/student"}>
              <div className="p-3  select-none hover:bg-slate-600 cursor-pointer w-full">
                <div className="h-full text-lg">New writing</div>
              </div>
            </Link>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="px-4 pt-2 flex justify-end h-10">
            <ButtonLogout />
          </div>
        </div>
      );
    }
    return <></>;
  };
  return (
    <nav className="mx-2">
      <div>
        <Hamburger handleClick={handleClick} open={open} />
      </div>
      <div ref={menuRef} className="flex justify-end">
        <Menu />
      </div>
    </nav>
  );
}
