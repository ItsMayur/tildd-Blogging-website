import Link from "next/link";
import React from "react";

export const BlogMini = (props) => {
  const Tags = props.tags || ["NO TAGS"];
  console.log(Tags);
  const iteratedTags = Tags.map((tag) => {
    return <li>{tag}</li>;
  });

  return (
    <Link
      className="w-4/6 w-4/5 h-48 my-5 space-y-2 flex justify-center flex-col px-10  rounded-xl blogMini"
      href={props.url}
    >
      <div>
        <h2 className="text-xl font-bold ">{props.title}</h2>
      </div>
      <div>
        <p className="">{props.discription}</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
          TAGS
        </div>
        <div>
          <ul className="flex space-x-10">{iteratedTags}</ul>
        </div>
      </div>
    </Link>
  );
};
