import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Me from "./../assets/img/profile.jpg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const goto = (url: string) => {
  if (url) {
    const w = window.open(url, "_black");
    if (w) {
      w.focus();
    }
  }
};

const li = (icon: IconProp, info: string, url: string) => {
  const styles = {
    boxShadow:
      "1px 1px 3px #333333, 1px 1px 3px inset rgba(255, 255, 255, 0.1)",
  };
  return (
    <li
      onClick={() => {
        goto(url);
      }}
      className={`${url === "" ? "hidden md:flex" : "flex"} items-center mx-2 my-2 justify-start font-bold text-slate-500 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white ${url !== "" ? "cursor-pointer" : ""}`}
    >
      <FontAwesomeIcon
        className="md:text-2xl rounded-md aspect-square p-2 box-border"
        style={styles}
        icon={icon ?? ""}
      />
      <span className="mx-2 hidden md:block">{info ?? ""}</span>
    </li>
  );
};

const Left = () => {
  return (
    <div className="left bg-transparent flex md:flex-col sm:justify-between md:box-border md:items-center py-2 m-3 md:py-3 px-3 rounded-[5px] custom-shadow dark:border-l dark:border-t dark:border-l-solid dark:border-t-solid dark:border-l-slate-600 dark:border-t-slate-600 rounded">
      <div className="flex md:flex-col items-center">
        <img
          src={Me}
          className="aspect-square w-2/12 md:w-5/12 sm:mt-0 md:mt-10 rounded-md md:mb-6 mr-3 md:mr-0"
          alt="Ryann Kim Sesgundo"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg md:text-2xl font-bold spartan">
            Ryann Kim Sesgundo
          </h1>
          <h3 className="flex courier-prime text-sm md:text-sm justify-center w-fit md:bg-[rgba(0,0,0,0.2)] md:dark:bg-[rgba(255,255,255,0.1)] px-2 rounded-md">
            A newbie developer
          </h3>
        </div>
      </div>
      <ul className="md:mt-10 flex md:block w-full box-border overflow-x-scroll md:overflow-hidden">
        {li(faEnvelope, "weryses19@gmail.com", "")}
        {li(faPhone, "0985 *** 7231", "")}
        {li(faNpm, "~ryannkim327", "https://www.npmjs.com/~ryannkim327")}
        {li(faFacebook, "@MPOP.ph", "https://facebook.com/MPOP.ph")}
        {li(faGithub, "@RyannKim327", "https://github.com/RyannKim327")}
      </ul>
    </div>
  );
};

export default Left;
