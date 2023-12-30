import React from "react";

const SearchResult = () => {
  return (
    <div>
      <a className="flex gap-3 items-center">
        <div className=" w-7 h-7 py-0 ">
            <img src="https://i.pravatar.cc/300" className="rounded-full" />
        </div>
        <div>
          <h6>Wikipedia</h6>
          <p className="text-sm">https://en.wikipedia.org</p>
        </div>
      </a>

      <div className="w-auto">
        <a href="https://www.google.com" target="_blank" className=" text-blue-800 hover:underline text-lg font-semibold">Wikipedia</a>
        <p className="text-sm md:w-[40rem]">Instagram is an American photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with </p>
      </div>
    </div>
  );
};

export default SearchResult;
