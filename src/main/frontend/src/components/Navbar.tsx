import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import type { Tab } from "../App";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Parallel.svg";

type Theme = "light" | "dark";
type NavbarProps = {
  tabs: Tab[];
};

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    console.log(theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="navbar">
      <div className="navbar-start">
        <img
          className="cursor-pointer hover:shadow-md invert max-w-2xs max-h-25"
          src={logo}
          onClick={() => handleNavigate("/")}
        ></img>
      </div>
      <div className="navbar-center">
        <div className="tabs tab-box" role="tablist"></div>
        {tabs.map((tab) => (
          <a
            className="tab gap-1"
            role="tab"
            onClick={() => handleNavigate(tab.path)}
          >
            <FontAwesomeIcon icon={tab.icon} />
            {tab.label}
          </a>
        ))}
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <FontAwesomeIcon size="xl" icon={faSun} />
          ) : (
            <FontAwesomeIcon size="xl" icon={faMoon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
