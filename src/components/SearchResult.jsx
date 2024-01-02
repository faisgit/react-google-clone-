import React from "react";

const SearchResult = ({ result }) => {
  const { title, displayLink, snippet, link, pagemap, cacheId } = result;
  const imageUrl = pagemap?.cse_thumbnail?.[0]?.src;
  return (
    <div key={cacheId}>
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        <div className=" w-7 h-7 py-0 ">
          {imageUrl && <img src={imageUrl} className="rounded-full" />}
          {!imageUrl && (
            <img src="https://i.pravatar.cc/300" className="rounded-full" />
          )}
        </div>
        <div>
          <h6 className="font-semibold text-sm">{title}</h6>
          <p className="text-sm">{displayLink}</p>
        </div>
      </div>

      <div className="w-auto">
        <a
          href={link}
          target="_blank"
          className=" text-blue-800 hover:underline text-lg font-semibold"
        >
          {title}
        </a>
        <p className="text-sm md:w-[40rem]">{snippet}</p>
      </div>
    </div>
  );
};

export default SearchResult;
