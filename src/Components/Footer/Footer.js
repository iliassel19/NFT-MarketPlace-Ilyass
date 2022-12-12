import React from "react";
import Container from "../../UI/Container";
import Form from "../../UI/Form";
const Footer = () => {
  return (
    <footer className="bg-bgSec">
      <Container className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr_1fr_1.5fr] lg:items-start lg:justify-between">
        <div className="">
          <button className="mb-4">
            <img src="./Icons/Logo.svg" alt="Logo Icon." />
          </button>
          <p className="font-work text-base text-white opacity-80 mb-4">
            NFT marketplace UI created with Anima for Figma
          </p>
          <div>
            <p className="font-work text-base text-white opacity-80 mb-4">
              Join our community
            </p>
            <ul className="flex items-center gap-2">
              <li className="opacity-40">
                <button>
                  <img src="./Icons/DiscordLogo.svg" />
                </button>
              </li>

              <li className="opacity-40">
                <button>
                  <img src="./Icons/YoutubeLogo.svg" />
                </button>
              </li>
              <li className="opacity-40">
                <button>
                  <img src="./Icons/TwitterLogo.svg" />
                </button>
              </li>

              <li className="opacity-40">
                <button>
                  <img src="./Icons/InstagramLogo.svg" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-white text-[18px] font-semibold font-space mdtext-h5 mb-6">
            Explore
          </h3>
          <ul className="flex flex-col items-start gap-4">
            <li className="text-base text-white font-work opacity-75">
              <button>Marketplace</button>
            </li>
            <li className="text-base text-white font-work opacity-75">
              <button>Ranking</button>
            </li>
            <li className="text-base text-white font-work opacity-75">
              <button>Connect a wallet</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-space text-[18px] font-semibold md:text-h5 ">
            Join Our Weekly Digest
          </h3>
          <p className="font-work text-base text-white opacity-80">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <Form />
        </div>
        <div className="col-span-3 pt-4 border-t border-captionc">
          <p className="text-base text-captionc font-work">
            &copy; NFT Market. Use this template freely.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
