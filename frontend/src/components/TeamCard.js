import React from "react";

const TeamCard = () => {
  return (
    <div className="bg-white w-72 h-96 px-10 py-2 m-2 teamCard">
      <div className="my-2 flex w-100 justify-center">
        <img
          src=""
          alt=""
          srcset=""
          className="w-40 h-40 bg-purple rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">Mayur Sehgal</h2>
        <h3 className="text-sm font-bold text-purple">FOUNDER</h3>
        <p className="text-grey">
          This is example of makeing a good place for me.
        </p>
        <div>
          <ul className="flex space-x-2">
            <li className="w-8 h-8 justify-center items-center flex">f</li>
            <li className="w-8 h-8 justify-center items-center flex">i</li>
            <li className="w-8 h-8 justify-center items-center flex">t</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
