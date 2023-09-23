"use client";
import React from "react";
import { WORK_EXP } from "@/constants";
import { BiLinkExternal } from "react-icons/bi";

export const WorkExp: React.FC = () => {
  return (
    <>
      {WORK_EXP.map((item) => (
        <div
          key={item.id}
          className="p-4 mt-6 flex flex-wrap lg:flex lg:justify-between"
        >
          <div className="w-96">
            <h2>{item.position} </h2>
            <span>
              <a
                href={item.linkorg}
                target="_blank"
                className="flex text-blue-500 underline"
              >
                {item.company}
                <BiLinkExternal />
              </a>
            </span>
            <span className="text-gray-500">
              ({item.start} - {item.end})
            </span>
          </div>
          <div className="w-auto flex flex-wrap lg:w-1/2">
            <p className="text-sm">{item.description}</p>
            {typeof item.Link !== "undefined" && !!item.Link.length && (
              <div className="flex-center flex-wrap gap-4 text-sm">
                {item.Link.map((tag: any) => (
                  <a
                    key={tag.title}
                    href={tag.url}
                    target="_blank"
                    className="p-2 text-blue-500 underline flex"
                  >
                    {tag.title} <BiLinkExternal />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
