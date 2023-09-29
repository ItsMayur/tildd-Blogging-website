import React from "react";

export const BlogMini = () => {
  const gotoBlog = () => {
    console.log("gone");
  };

  return (
    <div
      className="w-4/6 w-4/5 h-48 my-5 space-y-5 flex justify-center flex-col px-10  rounded-xl blogMini"
      onClick={gotoBlog()}
    >
      <div>
        <h2 className="text-xl font-bold ">How to make a good blog</h2>
      </div>
      <div>
        <p className="">
          If you are a Cricket fan, then you must remember the IND vs. NZ 2019
          World Cup, where Hotstar made a world record of 25M+ live streamers
          watching that match with a smooth watching experience and almost zero
          downtime.
        </p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
          TAGS
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>Code</li>
            <li>make</li>
            <li>Easy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
