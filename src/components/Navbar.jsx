import React from "react";

const Navbar = () => {
  return (
    <div>
    <div className="flex justify-between items-center  mt-5">
      <div className="text-red-600 font-bold ml-5 text-xl">BookUsNow</div>
      <div className="flex ">
        <button className="bg-black  p-2 rounded-lg text-clip text-xl w-1/2 text-white mr-5">
          Categories
        </button>
        <input
          type="text"
          className="bg-white border-gray-400 border focus:outline-none px-4 py-2 rounded-md"
          placeholder="DJI Phantom"
        />
      </div>
      <div className="flex ">
        <button className="text-lg mr-10">♥ Favorites</button>
        <button className="mr-5  border-gray-400 border focus:outline-none px-4 py-2 rounded-md">Sign In</button>
      </div>
    </div>
    <br />
    <div className="flex mx-5 text-gray-800 justify-between items-center">
      <div>
        <h1 className="text-lg">Mumbai, India</h1>
      </div>
      <div className="flex mr-5 items-center">
        <ul className="list-none text-[18px] flex gap-4">
          <li>Live shows</li>
          <li>Movies</li>
          <li>Streams</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
      <div></div>
    </div>
    </div>
  );
};

export default Navbar;
