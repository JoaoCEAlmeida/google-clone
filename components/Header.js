import { useState, useEffect } from "react";

import Avatar from "./Avatar";

import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
    </header>
  );
};

export default Header;
