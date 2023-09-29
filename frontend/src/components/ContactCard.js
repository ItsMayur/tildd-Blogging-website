import React from "react";

const ContactCard = () => {
  return (
    <div className="h-screen flex justify-center items-center text-white">
      <div className="bg-purple w-4/6 h-4/6 flex justify-center teamCard items-center space-x-24">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-5xl">Contact</h2>
          </div>
          <div>
            <p>themailoftildd@gmail.com</p>
            <p>+91 8557095867</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center space-y-2">
            <img src="/img/LogoFooter.jpg" alt="" className="w-32" />
            <h2 className=" text-xl">Enabling Dreams, Fueling Ambitions</h2>
            <div className="p-1.5 border-white border-2">
              <img
                src="/img/tilddQR.png"
                alt=""
                className="h-32 w-32 bg-white border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;