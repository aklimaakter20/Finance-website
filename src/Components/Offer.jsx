import React from "react";
import Icon1 from "../assets/security.png";
import Icon2 from "../assets/ramp.png";
import Icon3 from "../assets/analytics.png";

function Offer() {
  const OfferList = [
    {
      title: "Cardano Debit-Cards",
      description:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
      icon: Icon1,
    },
    {
      title: "Cardano Debit-Cards",
      description:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
      icon: Icon2,
    },
    {
      title: "Cardano Debit-Cards",
      description:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
      icon: Icon3,
    },
  ];
  return (
    <section className="mt-20">
                <h2 className="font-bold text-center leading-tight text-2xl lg:text-3xl text-white py-10">What do we offer?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            OfferList.map((item)=> (
                <div className="flex gap-4">
                    <div className="bg-[#3D3F54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-3/5">
                        <img className="h-6 w-6" src={item.icon} alt="" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold pb-2">{item.title}</h4>
                        <p className="text-secondary text-sm">{item.description}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  );
}

export default Offer;
