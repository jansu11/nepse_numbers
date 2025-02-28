import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="pt-36">
      <div className="flex items-center gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">
          Contact Us
        </h2>
        <p className="max-w-xs">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
