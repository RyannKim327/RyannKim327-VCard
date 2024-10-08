import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faJava, faLinux } from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faGear,
  faStairs,
  faVirus,
  faComments,
  faRobot,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import SetTitle from "../utils/title";

const divs = (icon: IconProp, title: string, year: number, exp: string[]) => {
  const s = {
    boxShadow:
      "1px 1px 3px rgba(0, 0, 0, 0.5), 1px 1px 3px inset rgba(255, 255, 255, 0.1)",
  };
  return (
    <fieldset
      style={s}
      className="my-2 w-full box-border rounded-md text-balance"
    >
      <legend
        style={s}
        className="flex bg-[#fbfff4] dark:bg-[#31363f] items-center m-[25px] px-4 rounded-md"
      >
        <FontAwesomeIcon icon={icon ?? ""} className="pr-4 aspect-square" />
        <div className="flex flex-col">
          <h1>{title}</h1>
          <h3 className="text-sm">{year}</h3>
        </div>
      </legend>
      {exp.map((str, i) => {
        return (
          <p className="px-4 pb-2">
            {i + 1}. {str}
          </p>
        );
      })}
    </fieldset>
  );
};

const Experiences = () => {
  SetTitle("My Experiences", "experiences");
  return (
    <motion.div
      initial={{
        boxSizing: "border-box",
        marginTop: "100%",
        position: "absolute",
      }}
      animate={{
        marginTop: 0,
        position: "static",
      }}
      className="flex flex-col overflow-x-hidden overflow-y-scroll w-full h-full box-border my-4 p-4"
    >
      {divs(faStairs, "Where everything starts", 2016, [
        "First step to HTML",
        "Initiated to Learn the basics of Python Programming",
        "Get confused how to access to the internet",
      ])}
      {divs(faGear, "Android Modification", 2017, [
        "Griding with Smali and XML for android modification",
        "Started to learn how to reconfigure an application",
        "Exploring the fundamentals of web development",
        "Game cheating and resource modification",
        "Learn more about Python 2",
        "Mentorship about android modification",
      ])}
      {divs(faJava, "Android Development", 2018, [
        "Initiated to learn about android development",
        "Released my first android application (web view)",
        "Initiated to practice Cascading Style Sheet for web designs",
      ])}
      {divs(faServer, "Road to backend", 2019, [
        "Initiated to learn MySQL and PHP",
        "Started to learn the fundamentals of Javascript",
        "Learned how to create a desktop application with Java",
      ])}
      {divs(faVirus, "Griding in Pandemic Era", 2020, [
        "Initiated to Developed my First Keyboard Application [Sulat Baybayin]",
        "Initiated the development and deployment of Sulat Baybayin Website",
        "Initiation and Release of El Filibusterismo App",
        "Relased of the first forum site",
      ])}
      {divs(faComments, "Let's have a talk", 2021, [
        "Joined in IT Groups and Community",
        "Enhancement of Communication Skills",
        "Collaboration by mentoring with different students",
        "Initiation of Development for Front-end Editor",
        "Joined as an Intern",
      ])}
      {divs(faRobot, "Road to AI and Automation [I Shall Return Era]", 2022, [
        "Last released for Front-end Editor",
        "Initiation for FacebookBot programs",
        "Started to Grind with NodeJS",
        "Created my first NPM Project with Lester Navarra",
        "Learned the basics of web scraping",
        "Learned how to create restapi",
        "Connect the Front-end Editor into its backend",
        "Go Back to college",
      ])}
      {divs(faLinux, "Escaped from my comfort zone", 2023, [
        "Started to use Linux Distro through Virtual Machine",
        "Learned how to dual boot with Linux distro and Windows",
        "Troubleshoot with bootable drive [Pop! OS error]",
        "Initiated to Study Django",
        "Initiated to Study ReactJs",
        "Initiation of Project AI Haibara",
      ])}
      {divs(faScrewdriverWrench, "Redevelopment", 2024, [
        "Creation of my portfolio",
        "Portfolio migration from HTML, CSS, Javascript to ReactJS Typescript and TailwindCSS",
        "Cleaned installation of Debian based Distro",
        "Cleaned installation of Arch Linux based Distro",
        "Environment Installation (Hyprland x Hyprdots with waybar)",
      ])}
    </motion.div>
  );
};

export default Experiences;
