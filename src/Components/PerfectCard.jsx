import React from "react";
import { Button } from "@nextui-org/button";
import PerfectCardImg from "../assets/PerfectCardImg.png";

function PerfectCard() {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
        <img className="w-1/2 " src={PerfectCardImg} alt="" />

          <div className="text-center sm:text-start mx-auto font-bold leading-tight text-2xl lg:text-3xl">
            <h2>Find the Perfect Card for You</h2>
            <p className="text-secondary font-normal text-sm lg:text-base w-full max-w-[600px] py-3 sm:py-6">
            Unlocking the Power of Crypto, Both Virtually and Physically
            Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.
            </p>
            <div>
            <Button variant="solid" radius="full" size="lg" color="primary" className="font-semibold text-sm mt-5 mb-4">Learn More</Button>
            
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PerfectCard;
