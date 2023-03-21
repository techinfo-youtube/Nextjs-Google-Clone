import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex justify-end p-3 pr-5 text-sm items-center space-x-4">
      <Link href={`https://mail.google.com`} className="hover:underline">
        Gmail
      </Link>
      <Link href={`https://image.google.com`} className="hover:underline">
        Images
      </Link>
      <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
      <button className="bg-blue-600 text-white px-6 py-2 font-bold rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
        Sign in
      </button>
    </div>
  );
};

export default Header;
