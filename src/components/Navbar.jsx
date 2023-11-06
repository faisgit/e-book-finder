import React from "react";
import Logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-2xl px-4 sticky top-0 z-30">
      <a className=" btn rounded-full p-0 mr-3 " href="/" >
        <img src={Logo} alt="" className="h-12 w-12 rounded-full" />
      </a>
      <h1 className="normal-case text-xl">E-Book Finder</h1>
    </div>
  );
}
