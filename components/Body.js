import { useRef } from "react";

import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";

const Body = () => {
  const router = useRouter();

  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault(); //prevent page reload

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow px-2">
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
        <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
      </div>
      <div className="flex flex-col sm:flex-row  w-1/2 space-y-2 sm:space-y-0 justify-center mt-8 mb-8 sm:space-x-4">
        <button onClick={search} className="button">
          Google Search
        </button>
        <button onClick={search} className="button">
          I'm feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
