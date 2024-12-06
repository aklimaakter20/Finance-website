import React from "react";
import { Button } from "@nextui-org/button";
import DebitCardImg from "../assets/DebitcardImg.png";
function DebitCard() {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
          <div className="text-center sm:text-start mx-auto font-bold leading-tight text-2xl lg:text-3xl">
            <h2>Wern Debit Card</h2>
            <p className="text-secondary font-normal text-sm lg:text-base w-full max-w-[480px] py-3 sm:py-6">
              More than just a card, its a bridge to a new financial
              experience. Embrace the simplicity and security of spending your
              Cardano with the Wern Card.
            </p>
            <div>
            <Button variant="solid" radius="full" size="lg" color="primary" className="font-semibold text-sm mt-5 mb-4">Create New Card</Button>
            <p className="text-primary text-sm mt-2">Will be available soon</p>
          </div>
          </div>
          
          <img className="w-1/2" src={DebitCardImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default DebitCard;
