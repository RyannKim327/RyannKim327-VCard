import SetTitle from "../utils/title";
import { motion } from "framer-motion";

const Contacts = () => {
  SetTitle("Reach me out", "contacts");
  const longitude = 121.60355963623054;
  const latitude = 13.928109212658477;
  const locationName = "United Landing Homeowners Association Phase 1";
  const location = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56562.28002960655!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i3000!2i1800!4f13.1!3m3!1m2!1s0x33bd4b578caf4ccd%3A0x2be1e905c862fe1!2s${encodeURIComponent(locationName)}!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sen!`;

  return (
    <motion.div
      initial={{
        boxSizing: "border-box",
        marginTop: "100%",
      }}
      animate={{
        marginTop: 0,
      }}
      className="w-full h-full box-border p-2"
    >
      <iframe
        className="w-full box-border aspect-[16/3] rounded-md"
        src={location}
      ></iframe>
    </motion.div>
  );
};

export default Contacts;
