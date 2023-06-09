import React, { useState } from "react";
import { creators } from "../data/data";
import RankingCard from "./RankingCard";
import Container from "../Components/UI/Container";
import PageHeader from "../Components/UI/PageHeader";
const Rankings = () => {
  const [isActive, setIsActive] = useState("today");
  return (
    <main>
      <Container>
        <PageHeader
          heading="Top Creators"
          subheading="Check out top ranking NFT artists on the NFT Marketplace."
        />

        <div className="mt-16">
          <nav className="grid grid-cols-4">
            <button
              className={` text-baseflg:ont-wh5xt-[20px] font-semibold pb-2 ${
                isActive == "today"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("today");
              }}>
              <span className="font-work text-base lg:text-h5 font-semibold hidden md:block">
                Today
              </span>
              <span className="font-work text-base lg:text-h5 font-semibold block md:hidden">
                1d
              </span>
            </button>
            <button
              className={` text-baseflg:ont-wh5xt-[20px] font-semibold pb-2 ${
                isActive == "week"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("week");
              }}>
              <span className="font-work text-base lg:text-h5 font-semibold hidden md:block">
                This Week
              </span>
              <span className="font-work text-base lg:text-h5 font-semibold block md:hidden">
                7d
              </span>
            </button>
            <button
              className={` text-baseflg:ont-wh5xt-[20px] font-semibold pb-2 ${
                isActive == "month"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("month");
              }}>
              <span className="font-work text-base lg:text-h5 font-semibold hidden md:block">
                This Month
              </span>
              <span className="font-work text-base lg:text-h5 font-semibold block md:hidden">
                30d
              </span>
            </button>
            <button
              className={`pb-2 ${
                isActive == "all"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("all");
              }}>
              <span className="font-work text-base lg:text-h5 font-semibold hidden md:block">
                All Time
              </span>
              <span className="font-work text-base lg:text-h5 font-semibold block md:hidden">
                All
              </span>
            </button>
          </nav>
          <div className="mt-12">
            <div className="border-[2px] border-bgSec rounded-full px-6 py-2 grid grid-cols-[44px_2.5fr_1fr] md:grid-cols-[44px_2.5fr_repeat(2,1fr)] xl:grid-cols-[44px_2.5fr_repeat(3,1fr)] items-center col-start-1 col-end-[-1]">
              <span className="text-captionc">#</span>
              <p className="text-[14px] font-space text-captionc">Artist</p>
              <p className="text-[14px] font-space text-captionc hidden md:block">
                Change
              </p>
              <p className="text-[14px] font-space text-captionc hidden xl:block">
                NFTs Sold
              </p>
              <p className="text-[14px] font-space text-captionc">Volume</p>
            </div>

            {creators.map((creator) => (
              <RankingCard
                key={creator.name}
                id={creator.id}
                profil={creator.profil}
                user={creator.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Rankings;
