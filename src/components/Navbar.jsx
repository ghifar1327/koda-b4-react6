import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between m-5">
      <div className="flex justifay-center items-center gap">
        <div>
          <img src="/hamburger.svg" alt="hamburger" className="h-10" />
        </div>
        <div className="font-bold text-2xl mr-2">Medium</div>
        <div className="pr-2">
          <input
            type="text"
            className="bg-gray-300 w-25 w-[100%] rounded-md p-[1px] pl-1"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center md:gap-3">
        <div className="mr-2">
          <img src="/write.svg" alt="" className="h-6" />
        </div>
        <div className="text-xl mr-1">Write</div>
        <div className="flex items-center gap-5 hidden md:block md:flex">
          <div className="text-xl bg-green-600 flex items-center pb-1 px-2 rounded-3xl">sign up</div>
          <div className="text-xl">sign in</div>
        </div>
        <div>
          <img
            src="/user-profile.svg"
            alt="user profile"
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};
