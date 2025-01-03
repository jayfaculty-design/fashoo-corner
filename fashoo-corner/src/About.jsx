import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col  gap-10 items-center p-10"
      >
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl font-semibold text-black text-center">
            about
          </h1>
          <p className="text-center text-oranges">
            Welcome to Fashoo Corner, your ultimate destination for discovering
            the latest trends and timeless classics in fashion. We believe that
            style is a form of self-expression and empowerment, and our mission
            is to help you embrace your unique aesthetic. Whether you're
            shopping for bold statement pieces, everyday essentials, or curated
            collections from emerging designers, Fashoo Corner is here to make
            your fashion journey seamless and enjoyable.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl font-semibold text-black text-center">
            our vision
          </h1>
          <p className="text-center text-oranges">
            To create a vibrant community where fashion lovers can connect,
            express themselves, and access diverse, high-quality fashion options
            tailored to their lifestyles.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl font-semibold text-black text-center">
            what we offer
          </h1>
          <div className="flex flex-col gap-8">
            <p className="text-oranges">
              <span className="font-bold">Trendy Collections:</span> Stay ahead
              of the curve with our carefully selected fashion lines.
            </p>
            <p className="text-oranges">
              <span className="font-bold">Personalized Shopping:</span> Find
              outfits that suit your style and preferences effortlessly.
            </p>
            <p className="text-oranges">
              <span className="font-bold">Seamless Experience:</span> Enjoy easy
              navigation, secure checkout, and fast delivery.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-semibold text-black text-center">
            our promise
          </h1>
          <p className="text-center text-oranges">
            We’re committed to providing a fashion marketplace that values
            quality, sustainability, and customer satisfaction. At Fashoo
            Corner, every piece tells a story, and we’re here to help you tell
            yours.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default About;
