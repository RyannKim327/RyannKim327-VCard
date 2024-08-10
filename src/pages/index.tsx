import { Link } from "react-router-dom";
import SetTitle from "../utils/title";

const Index = () => {
  SetTitle("I am Ryann Kim Sesgundo", "index");
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl roboto-slab">I am Ryann Kim Sesgundo</h1>
      <h3 className="text-lg roboto-slab">An android and web developer</h3>

      <p className="mt-10 text-sm">Want to see some of my projects?</p>
      <Link
        to="/projects"
        className="rounded-full border-[1px] border-solid border-white px-4 m-2 shadow-[0_0_0.75rem] shadow-black hover:bg-white hover:text-black hover:shadow-white"
      >
        Projects
      </Link>
    </div>
  );
};

export default Index;
