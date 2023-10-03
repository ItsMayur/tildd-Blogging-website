import React from "react";

const ContactCard = () => {
  return (
    <div className="h-screen flex justify-center items-center text-white ">
      <div className="bg-purple w-4/6 h-4/6 max-md:h-11/12 max-md:w-11/12 flex justify-center teamCard items-center space-x-24 max-md:space-x-5 max-sm:flex-col">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-5xl">Contact</h2>
          </div>
          <div>
            <ul className="font-bold space-y-2 list-disc pl-5 max-md:list-none max-md:pl-0">
              <li>tilddforme@gmail.com</li>
              <li>+91 8557095867</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center space-y-2 max-sm:space-y-6">
            <img
              src="/img/LogoFooter.jpg"
              alt=""
              className="w-32 max-sm:hidden"
            />
            <h2 className=" text-xl max-md:text-sm">
              Enabling Dreams, Fueling Ambitions
            </h2>
            <div className="p-1.5 border-white border-2">
              <img
                src="/img/tilddQR.png"
                alt=""
                className="h-32 w-32 max-sm:w-50 max-sm:h-50 bg-white border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
