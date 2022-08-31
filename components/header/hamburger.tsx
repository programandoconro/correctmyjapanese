import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

export default function HamburgerMenu(props: {
  handleClick: () => void;
  open: boolean;
}) {
  const { handleClick, open } = props;
  const [hover, setHover] = useState("orange");
  const [isHover, setIsHover] = useState(false);
  const setBackground = (): string => {
    return open ? "gray" : hover;
  };
  const Bread = (props: { bg: string }) => {
    return (
      <span
        style={{ background: setBackground() }}
        className="block w-8 h-0.5 mr-1 pb-1"
      ></span>
    );
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHover(false);
    }, 50);
  };
  useLayoutEffect(() => {
    isHover ? setHover("gray") : setHover("orange");
  }, [isHover]);
  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHover(true);
    }, 50);
  };
  const Hamburger = () => {
    return (
      <div className="cursor-pointer w-10">
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-10 select-none flex w-10 flex-col gap-2 transition duration-150 justify-center"
        >
          <Bread bg={setBackground()} />
          <Bread bg={setBackground()} />
          <Bread bg={setBackground()} />
        </div>
      </div>
    );
  };
  const CloseButton = () => {
    return (
      <div className="w-10">
        <div
          onClick={handleClick}
          className="h-10 font-bold select-none text-3xl text-gray-400 w-10 justify-center flex"
        >
          X
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-12 h-16 items-center">
      <div className="col-span-8 relative"></div>
      <div className="flex justify-end items-center gap-4 col-span-4">
        {!open ? <Hamburger /> : <CloseButton />}
      </div>
    </div>
  );
}
