import React from "react";
import Container from "../UI/Container";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import { heading } from "../../utils/motion";
import { categories } from "../../data/data";
const Categories = () => {
  return (
    <section id="categories">
      <Container>
        <h2 className="text-h4 lg:text-h3 text-white font-work font-semibold mb-6">
          {Array.from("Browse Categories").map((letter, i) => (
            <motion.span
              variants={heading}
              custom={i}
              key={i}
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
              whileInView="show">
              {letter}
            </motion.span>
          ))}
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] min-[900px]:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              img={category.img}
              icon={category.icon}
              category={category.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
