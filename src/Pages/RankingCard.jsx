import React from "react";
import { Link } from "react-router-dom";
const RankingCard = (props) => {
  return (
    <Link
      to={`/rankings/${props.id}`}
      className="col-start-1 col-end-[-1] block mt-4">
      <article className=" grid grid-cols-[44px_2.5fr_1fr] md:grid-cols-[44px_2.5fr_repeat(2,1fr)] xl:grid-cols-[44px_2.5fr_repeat(3,1fr)] items-center rounded-3xl bg-bgSec py-3 md:px-6 px-4">
        <div className="w-6 h-6 grid place-content-center bg-bg rounded-full">
          <p className="text-[14px] text-captionc font-space">{props.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={props.profil}
            className="md:w-12 md:h-12 w-10 h-10"
          />
          <h2 className="text-base lg:text-h5 ml-2 text-white font-work capitalize">
            {props.user}
          </h2>
        </div>
        <p className="text-[#00aa00] font-space text-[14px] xl:block hidden">
          +1.41%
        </p>
        <p className="font-space text-white text-[14px] md:block hidden">602</p>
        <h3 className="font-space text-white text-[14px]">12.4 ETH</h3>
      </article>
    </Link>
  );
};

export default RankingCard;
