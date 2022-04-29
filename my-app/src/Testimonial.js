import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = ({
  id,
  name,
  image,
  text,
  order,
  testimonialIndex,
  index,
  length,
}) => {
  const [readMore, setReadMore] = useState(false);

  let position = "nextSlide";

  if (testimonialIndex === index) {
    position = "activeSlide";
  }

  if (
    testimonialIndex === index - 1 ||
    (index === 0 && testimonialIndex === length - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <article className={`testimonial ${position}`}>
      <FaQuoteRight className="icon" />
      <div className="testimonial__img">
        <img src={image} alt={name} />
        <div className="img-overlay"></div>
      </div>
      <div className="testimonial__text">
        <h3>{name}</h3>
        <p>
          {readMore ? `${text} ` : `${text.substring(0, 70)}... `}
          <button
            type="button"
            className="btn btn--text"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <p className="testimonial__products">{order.join(" ,")}</p>
      </div>
    </article>
  );
};

export default Testimonial;
