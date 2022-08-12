import React, { useState } from "react";
import { FaQuoteRight } from "../../utils/icons";

const Testimonial = ({
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
    <figure
      className={`testimonial ${position}`}
      data-testid={`testimonial-${testimonialIndex}`}
    >
      <FaQuoteRight className="icon" />
      <div className="testimonial__img">
        <img src={image} alt={name} />
        <div className="img-overlay"></div>
      </div>
      <blockquote className="testimonial__text">
        <figcaption>{name}</figcaption>
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
      </blockquote>
    </figure>
  );
};

export default Testimonial;
