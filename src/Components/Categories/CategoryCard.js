import React from "react";
import Card from "../../UI/Card";
const CategoryCard = (props) => {
  console.log(props.icon);
  return (
    <Card className="" key={props.key}>
      <div className="w-full relative shadow-lg">
        <img
          src={props.img}
          alt={`${props.category} NFT`}
          className="h-full w-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-bg bg-opacity-10 backdrop-blur-sm">
          <img src={props.icon} alt={`${props.iconAlt} icon`} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-[18px] text-white font-work capitalize">
          {props.category}
        </h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
