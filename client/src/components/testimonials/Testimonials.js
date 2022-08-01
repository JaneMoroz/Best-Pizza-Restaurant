import React, { useState } from "react";
import { testimonials } from "../../data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "../../icons";
import Testimonial from "./Testimonial";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > testimonials.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = testimonials.length - 1;
      }
      return index;
    });
  };

  return (
    <div className="testimonials">
      <div className="testimonials__inner">
        {testimonials.map((testimonial, testimonialIndex) => {
          const length = testimonials.length;
          return (
            <Testimonial
              key={testimonial.id}
              {...testimonial}
              testimonialIndex={testimonialIndex}
              index={index}
              length={length}
            />
          );
        })}
        <button
          type="button"
          className="btn btn--icon left"
          onClick={prevSlide}
          aria-label="previous"
        >
          <FaArrowCircleLeft className="icon" />
        </button>
        <button
          type="button"
          className="btn btn--icon right"
          onClick={nextSlide}
          aria-label="next"
        >
          <FaArrowCircleRight className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
