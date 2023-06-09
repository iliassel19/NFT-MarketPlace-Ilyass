import React from "react";

const PageHeader = ({ heading, subheading }) => {
  return (
    <>
      <h1 className="text-h4 md:text-h3 xl:text-h2 font-semibold tracking-[0.015em] mb-6 text-white font-work leading-none">
        {heading}
      </h1>
      <p className="md:text-base xl:text-[22px] capitalize opacity-80 text-white leading-snug font-work mb-12">
        {subheading}
      </p>
    </>
  );
};

export default PageHeader;
