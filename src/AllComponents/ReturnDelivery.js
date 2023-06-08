import React from "react";
import { TbTruckReturn } from "react-icons/tb";

export const ReturnDelivery = () => {
  return (
    <div className="return-delivery delivery-item-box d-flex m-r-1rem">
      <div className="my-page-icon">
        <TbTruckReturn className="delivery-icon" />
      </div>
      <div className="return-delivery-deatil">
        <h4 className="return-delivery-title">Return Delivery</h4>
        <p className="return-delivery-dis">Free 30 days return delivery</p>
      </div>
    </div>
  );
};
