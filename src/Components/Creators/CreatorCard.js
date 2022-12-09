import React from "react";
import Card from "../../UI/Card";

const CreatorCard = (props) => {
  return (
    <Card className="group transition-colors hover:bg-cta">
      <div className="w-full h-full flex flex-col items-center py-4 relative cursor-pointer">
        <p className="bg-bg font-space text-captionc text-caption w-5 h-5 rounded-full grid place-content-center absolute left-4 transition-colors group-hover:bg-cta-h group-hover:text-white">
          {props.id}
        </p>
        <img
          src={props.profil}
          alt={`${props.user} profil.`}
          className="w-24 h-24"
        />
        <h4 className="text-[18px] text-white font-work mt-3 mb-2">
          {props.user}
        </h4>
        <p className="text-captionc font-work text-[14px]">
          Total sales: <span className="text-white font-space">34.53 ETH</span>
        </p>
      </div>
    </Card>
  );
};

export default CreatorCard;
