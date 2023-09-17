"use client";
import React from "react";
import {
  BsDownload,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter
} from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import Link from "next/link";

export const ShortDetail = () => {
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
            </span>
          </li>
        </ul>
      </div>
      <span className="ml-12">Connect with me:</span>
      <ul className="flex items-center gap-5 p-12">
        <li key="facebook">
          <a
            href={""}
            target="_blank"
            aria-label="facebook"
            title="facebook"
            className="text-2xl"
          >
            <BsFacebook />
          </a>
        </li>
        <li key="Instagram">
          <a
            href={""}
            target="_blank"
            aria-label="Instagram"
            title="Instagram"
            className="text-2xl"
          >
            <BsInstagram />
          </a>
        </li>
        <li key="twitter">
          <a
            href={""}
            target="_blank"
            aria-label="twitter"
            title="twitter"
            className="text-2xl"
          >
            <BsTwitter />
          </a>
        </li>
        <li key="Hackerrank">
          <a
            href={""}
            target="_blank"
            aria-label="Hackerrank"
            title="Hackerrank"
            className="text-2xl"
          >
            <FaHackerrank />
          </a>
        </li>
      </ul>
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
