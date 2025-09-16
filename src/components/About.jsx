import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import globalteam from "../assets/globaltem.svg";
import { FaStar } from "react-icons/fa";
import ourBussines1 from "../assets/aboutUs/ourBussines1.png";
import ourBussines2 from "../assets/aboutUs/ourBussines2.png";
import whyChooseUs1 from "../assets/aboutUs/whyChooseUs1.png";
import whyChooseUs2 from "../assets/aboutUs/whyChooseUs2.png";
import whoWeAre1 from "../assets/aboutUs/whoWeAre1.png";
import whoWeAre2 from "../assets/aboutUs/whoWeAre2.png";

import { FaRegCircleCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3, // Trigger when 30% is visible
  });

  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="flex items-center justify-center gap-4 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <BsArrowRight size={24} className="text-colortext" />
          </motion.div>
          <h3 className="text-colortext text-sm md:text-xl">About Company</h3>
        </div>
        <p className="text-3xl md:text-5xl text-center py-3 font-semibold leading-[1.2]">
          Our Main Goal is to Deliver Creative Video Production <br /> & Editing Solutions to Local & Global
          Clients
        </p>
        <p className=" w-full text-sm md:text-base font-light text-gray-300 md:w-2/3 mx-auto text-center">
          At Branding Hunks, we strive to produce high-quality video content that tells powerful
          stories, engages audiences, and builds impactful connections. Our mission is to help
          businesses, brands, and creators communicate their vision through compelling visuals,
          seamless editing, and innovative production techniques.
        </p>

        <div className="mt-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }} // Start from left and hidden
            whileInView={{ scale: 1, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <img src={globalteam} alt="" />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 mt-8">
          {/* left */}
          <motion.div
            initial={{ x: -200, opacity: 0 }} // Start from left and hidden
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-8"
          >
            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-sm text-gray-400 mt-3">
                Our mission is to empower businesses and individuals by creating engaging video content
                that captures attention, drives emotions, and inspires action. From corporate films and
                commercials to social media videos, event highlights, and brand stories — we ensure every
                frame delivers value.
              </p>
            </div>

            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
              {[
                "Creative Experts – A passionate team of filmmakers, editors, and storytellers.",
                "Tailored Content – Customized video solutions to match your brand identity and goals.",
                "High-Quality Output – Advanced editing tools, cinematic visuals, and professional finishing.",
                "Proven Success – Trusted by clients across industries for impactful video campaigns."
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex mt-2 items-center gap-x-3 text-sm text-gray-400"
                >
                  <FaStar className="text-orange-400" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">Who we are</h3>
              <p className="text-sm text-gray-400 mt-3">
                We are a team of creative professionals driven by the art of storytelling through video. At
                Branding Hunks, we blend creativity with technology to deliver visually stunning and
                emotionally engaging videos. Whether you need promotional videos, ads, YouTube content,
                reels, or full-scale production, we bring your ideas to life with perfection and passion.
              </p>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ x: 200, opacity: 0 }} // Start from left and hidden
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex gap-6 justify-center"
          >
            <div className="flex flex-col   gap-4 ">
              {[ourBussines1, whyChooseUs1, whoWeAre1].map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt=""
                    className="rounded-lg w-full h-full object-fit† shadow"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col  gap-4 mt-12">
              {[ourBussines2, whyChooseUs2, whoWeAre2].map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt=""
                    className="rounded-lg w-full h-full object-fit shadow"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* featured section */}

        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-12  items-center justify-around  mt-44 overflow-x-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaRegCircleCheck size={24} className="text-orange-400" />
            <h3 className="outline-text-gray text-9xl text-gray-800 font-semibold my-2 min-w-[250px]">
              {inView && <CountUp end={250} duration={2} />}
            </h3>
            <p className="text-lg uppercase text-gray-300">project</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaRegCircleCheck size={24} className="text-orange-400" />
            <h3 className="text-9xl font-semibold text-orange-400 my-2 min-w-[250px] ">
              {inView && <CountUp end={125} duration={2} />}
            </h3>
            <p className="text-lg uppercase text-gray-300">Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaRegCircleCheck size={24} className="text-orange-400" />
            <h3 className="outline-text-gray text-gray-400 text-9xl font-semibold my-2 min-w-[250px]">
              {inView && <CountUp end={20} duration={2} />}+
            </h3>
            <p className="text-lg uppercase text-gray-300">Exprets</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
