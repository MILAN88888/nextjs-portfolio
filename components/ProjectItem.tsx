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
        <div key={item.id}>
          <figure>
            <div className="aspect-[12/9.2] w-full">
              <Image
                className="project-image"
                src={item.images}
                alt={item.title}
                width={400}
                height={100}
                priority
              />
            </div>
          </figure>

          <div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
            <header className="flex-1 flex items-center justify-start flex-col gap-3">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="leading-7 font-light">{item.description}</p>
            </header>

            <footer className="flex flex-col gap-10">
              {!!item.stack.length && (
                <div className="flex-center flex-wrap gap-4">
                  {item.stack.map((tag: any) => (
                    <span
                      key={tag}
                      className="mx-2 p-2 text-sm leading-normal rounded border-2 border-cyan-200"
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
