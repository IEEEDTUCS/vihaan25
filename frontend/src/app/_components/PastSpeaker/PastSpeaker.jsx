"use-client";
import Image from "next/image";

export default function PastSpeaker({
  name,
  title,
  about,
  linkedin,
  url,
  isActive,
}) {
  return (
    <>
      <div className="group relative h-[300px] w-[300px]">
        <Image src={url} width={300} height={300} />
        <div
          className={`absolute  h-[300px] w-[300px] duration-300  bg-amber-300 p-8 "group-hover:top-0 group-hover:opacity-100" ${
            isActive ? "opacity-100 top-0" : "opacity-0 top-[100%]"
          } pointer-events-none flex flex-col gap-4`}
        >
          <div>{name}</div>
          <div>{title}</div>
          <hr></hr>
          <div>{about}</div>
          <a href={linkedin}>
            <Image src="past-speaker/linkedin.png" width={30} height={30} />
          </a>
        </div>
      </div>
    </>
  );
}
