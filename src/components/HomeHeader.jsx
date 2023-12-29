import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
export const HomeHeader = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center gap-3 px-3 py-2 mb-10">
          <li className="link link-hover text-sm ">Gmail</li>
          <li className="link link-hover text-sm ">Images</li>
          <li>
            {" "}
            <button className=" btn btn-ghost btn-circle">
              <AppsIcon />
            </button>{" "}
          </li>
          <li className="avatar w-10 btn btn-ghost btn-circle py-0 ">
            <div className="w-24 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
