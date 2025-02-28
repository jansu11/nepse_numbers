import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="pt-36">
      <div className="flex items-center gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">
          Testimonials
        </h2>
        <p className="max-w-md">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <TestimonialsCard />
    </section>
  );
};

export default Testimonials;
