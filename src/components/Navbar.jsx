import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const current = searchParams.get("search") || "";
    setQuery(current);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(query ? `/?search=${encodeURIComponent(query)}` : "/");
  };

  return (
    <div className="flex justify-between m-5">
      <div className="flex items-center gap-2">
        <img src="/hamburger.svg" alt="hamburger" className="h-10" />
        <div className="font-bold text-2xl mr-2">Medium</div>
        <form onSubmit={handleSubmit} className="pr-2 w-full max-w-xs">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-300 w-full rounded-md p-[4px] pl-2"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="flex items-center md:gap-3">
        <div className="mr-2">
          <img src="/write.svg" alt="" className="h-6" />
        </div>
        <div className="text-xl mr-1">Write</div>
        <div className="flex items-center gap-5 hidden md:block md:flex">
          <div className="text-xl text-white bg-green-600 flex items-center pb-1 px-2 rounded-3xl">
            sign up
          </div>
          <div className="text-xl">sign in</div>
        </div>
        <div>
          <img src="/user-profile.svg" alt="user profile" className="h-12" />
        </div>
      </div>
    </div>
  );
};
