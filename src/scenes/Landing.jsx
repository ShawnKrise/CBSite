import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from 'typewriter-effect';


const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-white before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-50 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl font-Inter font-extrabold z-10 text-center md:text-start">COMMERCIAL BROKERAGE LLC </h1>

          <h1 className="text-4xl font-Roboto z-10 text-center md:text-start mt-4 ">
              <span>
              <Typewriter
                 options={{
                 strings: ['Retail Experience.', 'Office Experience.', 'Industrial Experience.', 'Apartment Experience.','Investment Experience.', 'Residential Experience.', 'Commercial Experience.'],
                autoStart: true,
                 loop: true,
              }}
              />
            </span>
             </h1>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-purple-blue text-white rounded-sm py-7 px-14 font-bold text-5xl
              hover:bg-dark-purple-blue hover:text-white transition duration-500 text-center"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            CONTACT US
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-2 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons/>
        </motion.div>
      </div>
    </section>
  );
};


export default Landing;
