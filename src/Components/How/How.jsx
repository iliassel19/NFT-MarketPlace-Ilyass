import React from "react";
import Container from "../UI/Container";
import HowStep from "./HowStep";
import { howSteps } from "../../data/data";
const How = () => {
  return (
    <section id="how">
      <Container>
        <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-2">
          How it works
        </h2>
        <p className="text-base lg:text-[18px] capitalize text-white opacity-80">
          Find out how to get started
        </p>
        <div className="grid gap-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 md:mt-16 mt-10">
          {howSteps.map((step, i) => (
            <HowStep
              key={`${i} step`}
              icon={step.icon}
              text={step.text}
              heading={step.heading}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default How;
