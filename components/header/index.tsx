import React, { useState, useLayoutEffect } from "react";
import MobileHeader from "./mobile";
import PcHeader from "./pc";

export type Size = {
  height: number;
  width: number;
};
const Header = () => {
  const [windowSize, setWidowSize] = useState<Size>({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const windowInnerSize: Size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    setWidowSize(windowInnerSize);

    const changeWindowSize = () => {
      setWidowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", changeWindowSize);

    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);
  const windowSizeLimit = 600;
  return (
    <>
      {windowSize.width > windowSizeLimit ? (
        <PcHeader />
      ) : (
        <div className="sticky top-0 z-50">
          <MobileHeader />
        </div>
      )}
    </>
  );
};

export default Header;
