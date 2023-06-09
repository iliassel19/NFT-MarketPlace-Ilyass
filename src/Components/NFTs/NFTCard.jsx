import React from "react";
import Card from "../UI/Card";
import { card } from "../../utils/motion";
import { Link } from "react-router-dom";
const NFTCard = (props) => {
  return (
    <Link
      className="block"
      to={`/marketplace/${props.nft}`}>
      <article id={props.nft}>
        <Card
          className={`${
            props?.className ? props.className : ""
          } cursor-pointer transition-transform hover:scale-105`}
          variants={card(props.i, 0.2)}
          whileInView="show">
          <img
            src={props.img}
            alt={`${props.title} NFT.`}
            className="w-full h-[304px] object-cover"
          />
          <div className="py-4 px-6">
            <h3 className="text-h5 text-white font-work font-medium capitalize mb-3">
              {props.title}
            </h3>
            <div className="flex items-center gap-3 mb-6 xl:mb-8">
              <img
                src={props.profil}
                alt={`${props.name} user profil`}
                className="w-6 h-6"
              />
              <p className="text-base font-space text-white font-normal">
                {props.name}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-space text-caption text-captionc font-normal">
                  Price
                </p>
                <p className="font-space text-base text-white font-normal">
                  1.63 ETH
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-space text-caption text-captionc font-normal">
                  Highest Bid
                </p>
                <p className="font-space text-base text-white font-normal">
                  0.33 wETH
                </p>
              </div>
            </div>
          </div>
        </Card>
      </article>
    </Link>
  );
};

export default NFTCard;
