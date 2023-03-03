import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";





const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="about" className="pt-10 pb-24">
        {/* ROW 1 */}
      {/* HEADER SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-Roboto font-semibold text-6xl mb-5">
            ABOUT <span className="text-purple-blue">US</span>
          </p>
          <LineGradient width="w-2/3" />
        </motion.div>
      </div>

      {/* SUSAN SHOWALTER */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center mt-16 gap-32">
        {/* WORK EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-4xl">Hey, I'm Susan Showalter.</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
              A Commercial Real Estate Broker.
              </p>
            </div>
            </div>
          <p className="mt-10">
          As the Owner/Qualifying Broker of Commercial Brokerage LLC I possess experience in all sectors of Real Estate including Retail, Office, Industrial, Apartment, Investment, as well as Residential and Commercial Development. In the past I've specialized in assisting National and Regional Retailers such as McDonalds, Smith's, Dollar Tree, Cracker Barrel, Papa Murphy's, Taco Del Ma, Subway, and many gas station brands in identifying target markets and specific sites to provide them with the best possible representation in the market to maximize sales revenue.
          </p>
          <p className="mt-10">
            Email: susan@commercialbrokeragellc.com
          </p>
          <p className="mt-10">
          Phone: 505-828-9188
          </p>
          <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/susan-showalter-9731591a/?original_referer="
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      
    </div>
        </motion.div>
{/* IMAGE SECTION */}
        
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
{/* ROW 2 */}
{/* RONALD KRISE */}
{/* WORK EXPERIENCE */}
<motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-4xl">Hey, I'm Ronald Krise.</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
              An Associate Real Estate Broker.
              </p>
            </div>
            </div>
          <p className="mt-10">
          As an Associate Broker of Commercial Brokerage LLC I possess 25 years of experience involved in Commercial Real Estate. With the assistance of Commercial Brokerage, we can help you find the best option available for your needs.
          </p>
          <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ronald-krise-601ba547"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      
    </div>
        </motion.div>
{/* IMAGE SECTION */}
        
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
 
 
          
    </section>
  );
};

export default About;
