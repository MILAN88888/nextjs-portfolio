import React from "react";
import { TECH_LIST } from "@/constants";
export const Tech: React.FC = () => {
  return (
    <>
      <p className="text-2xl mb-10 lg:text-2xl lg:mb-10">
        I work with the following technologies and tools:
      </p>
      <div className="flex flex-col lg:flex lg:flex-row lg:gap-x-20">
        {TECH_LIST.map((tech, index) => {
          return (
            <div
              key={tech.category}
              className="flex flex-col gap-4 flex-1 mt-4 md:flex-auto"
            >
              <h3 className="text-2xl font-bold">{tech.category}</h3>
              <div className="flex items-center flex-wrap gap-x-5 gap-y-8">
                {tech.items.map((item) => (
                  <div key={item.name} className="group relative flex">
                    <span role="img">{item.icon}</span>
                    <span
                      className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
