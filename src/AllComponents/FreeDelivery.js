import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

export const FreeDelivery = () => {
  return (
    <div className="free-delivery delivery-item-box d-flex m-r-1rem ">
      <div className="my-page-icon">
        <CiDeliveryTruck className="delivery-icon" />
      </div>
      <div className="free-delivery-deatil">
        <h4 className="free-delivery-title">Free Delivery</h4>
        <p className="free-delivery-dis">Enter postal code for free delivery</p>
      </div>
    </div>
  );
};
