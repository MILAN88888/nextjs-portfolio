import React from "react";
import { EDU_EXP } from "@/constants";
import { BiLinkExternal } from "react-icons/bi";

export const Education: React.FC = () => {
  return (
    <>
      {EDU_EXP.map((item) => (
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
                {item.from}
                <BiLinkExternal />
              </a>
            </span>
            <span className="text-gray-500">
              ({item.start} - {item.end})
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
