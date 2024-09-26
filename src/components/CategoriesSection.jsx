import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategoriesSection = () => {
  const title = "Product Categories";
const {categories} = useCategoryStore();

  return (
    <section id="category-section" className="px-5">
      <Container>
      <p className="text-2xl text-gray-500 mb-3">{title}</p>
      <div className="flex overflow-scroll  category-button-group ">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
          />
        ))}
      </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
