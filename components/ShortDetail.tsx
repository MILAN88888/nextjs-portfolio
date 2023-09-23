"use client";
import React from "react";
import { ExtraMediaConnect } from "@/components/ExtraMediaConnect";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";

export const ShortDetail: React.FC = () => {
  return (
    <div>
      <div className="p-12">
        <ul className="flex itmes-center gap-5">
          <li>
            <span className="text-2xl md:text-3xl lg:text-4xl title">
              Milan Kumar Chaudhary
            </span>
          </li>
        </ul>
        <ul className="flex itmes-center gap-5">
          <li>
            <span className="bold text-white-500 dark:text-gray-500">
              Sarawal-6, Nawalparasi
              <br />
              chaudharymilan996@gmail.com
              <br />
              +977-9807445408
            </span>
          </li>
        </ul>
      </div>
      <span className="ml-12">Connect with me:</span>
      <div className="ml-12 mt-6 mb-6">
        <ExtraMediaConnect />
      </div>
      <div className="bg-teal-500 text-white py-2 px-4 rounded-lg font-bold text-2xl inline-block title mx-12">
        <Link href="/file/milan-cv.pdf">
          <span className="flex">
            Download CV
            <BsDownload />
          </span>
        </Link>
      </div>
    </div>
  );
};
