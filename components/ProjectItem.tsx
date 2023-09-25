'use client';
import Link from "next/link";
import Image from "next/image";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { PROJECT_LIST } from "@/constants/";

export function ProjectItem() {

  return (
    <>
      {PROJECT_LIST.map((item) => (
        <div key={item.id} className="bg-gray-100 dark:bg-gray-200 text-black dark:text-white rounded-lg">
          <figure>
            <div className="w-full">
              <Image
                className="project-image"
                src={item.images}
                alt={item.title}
                width={450}
                height={100}
                priority
              />
            </div>
          </figure>

          <div className="py-6 text-center flex flex-col gap-10">
            <header className="flex items-center justify-start flex-col gap-3">
              <h3 className="xl:text-2xl font-semi-bold sm:text-xl title">{item.title}</h3>
              <div className="w-72 xl:w-96 text-justify h-56 overflow-y-auto pr-2">
			  <p className="font-light dark:text-black">{item.description}</p>
			  </div>
            </header>

            <footer className="flex flex-col gap-10">
              {!!item.stack.length && (
                <div className="flex justify-center flex-wrap xl:flex xl:justify-center xl:flex-wrap gap-4">
                  {item.stack.map((tag: any) => (
                    <span
                      key={tag}
                      className="mx-2 p-2 text-sm leading-normal rounded border-2 bg-gray-200 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-5 flex-row justify-center">
                {item.repoUrl && (
                  <Link
                    href={item.repoUrl}
                    target="_blank"
                    className="icon-link-btn"
                    title="Go to Github repository"
                  >
                    <VscSourceControl />
                  </Link>
                )}
                {item.liveUrl && (
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    className="icon-link-btn"
                    title="Go to live address"
                  >
                    <FiExternalLink />
                  </Link>
                )}
              </div>
            </footer>
          </div>
        </div>
      ))}
    </>
  );
}
