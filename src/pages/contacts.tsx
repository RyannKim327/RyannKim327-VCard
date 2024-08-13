import SetTitle from "../utils/title";
import { motion } from "framer-motion";

const input = (type: string, name: string, placeholder: string) => {
  return (
    <div className="m-2 w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent w-full box-border outline-none border-gray-700 border-2 border-solid rounded-md focus:border-white p-4"
      />
    </div>
  );
};

const Contacts = () => {
  SetTitle("Reach me out", "contacts");
  const longitude = 121.60355963623054;
  const latitude = 13.928109212658477;
  const locationName = "United Landing Homeowners Association Phase 1";
  const location = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56562.28002960655!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i3000!2i1800!4f13.1!3m3!1m2!1s0x33bd4b578caf4ccd%3A0x2be1e905c862fe1!2s${encodeURIComponent(locationName)}!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sen!`;

  return (
    <div className="w-full h-full box-border p-2">
      <motion.div
        initial={{
          boxSizing: "border-box",
          marginTop: "100%",
        }}
        animate={{
          marginTop: 0,
        }}
        className="w-full box-border"
      >
        <iframe
          className="w-full box-border aspect-[16/3] rounded-md grayscale invert"
          src={location}
          title={locationName}
          referrerPolicy=""
          loading="lazy"
          allowFullScreen={false}
        />
      </motion.div>

      <form action="" method="POST" className="w-full box-border">
        <h1 className="text-xl pl-6 spartan mt-4">Contact Form</h1>
        <div className="flex flex-col w-full border-box">
          <div className="flex flex-row w-full">
            {input("email", "email", "Email")}
            {input("text", "name", "Full Name")}
          </div>
          <div className="m-2">
            <textarea
              className="w-full box-border outline-none rounded-md bg-transparent p-4 border-2 border-gray-700 border-solid focus:border-white resize-none"
              placeholder="Test"
              name="content"
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              className="px-4 py-2 border-gray-700 border-2 border-solid rounded-lg mr-2 text-lg"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
