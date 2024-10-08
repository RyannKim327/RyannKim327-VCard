import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Index from "../pages";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import Experience from "../pages/experiences";
import Projects from "../pages/projects";
import Header from "./header";

const Right = () => {
  return (
    <div className="flex flex-col bg-transparent right m-3 rounded-[5px] overflow-hidden custom-shadow dark:border-l dark:border-t dark:border-l-solid dark:border-t-solid dark:border-l-slate-600 dark:border-t-slate-600 rounded">
      <Header />
      <div className="flex box-border w-full h-full overflow-hidden items-center justify-center">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Right;
