import Link from "next/link";
import React, { useState } from "react";

export const BlogMini = (props) => {
  const [Tags, setTags] = useState();
  console.log(Tags);
  const iteratedTags = () => {
    setTags(props.tags);
    if (Tags) {
      Tags.map((tag, key) => {
        return <li key={key}>{tag}</li>;
      });
    } else {
      return <li>NO TAGS</li>;
    }
  };
  return (
    <Link
      className="w-5/6  max-md:w-11/12 h-48 max-md:h-80 my-5 space-y-2 max-sm:h-11/12 max-sm:px-5 max-sm:rounded-none max-sm:w-screen flex justify-center flex-col px-10  rounded-xl blogMini"
      href={props.url}
    >
      <div>
        <h2 className="text-lg font-bold ">{props.title}</h2>
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
