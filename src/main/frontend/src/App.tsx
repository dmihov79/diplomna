import { type JSX } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  faHome,
  type IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

export type Tab = {
  label: string;
  icon: IconDefinition;
  path: string;
  element: JSX.Element;
};

function App() {
  const tabs = [
    {
      label: "Home",
      icon: faHome,
      path: "/home",
      element: <HomePage />,
    },
    {
      label: "Test1",
      icon: faHome,
      path: "/test1",
      element: <HomePage />,
    },
    {
      label: "Test2",
      icon: faHome,
      path: "/test2",
      element: <HomePage />,
    },
    {
      label: "Test3",
      icon: faHome,
      path: "/test3",
      element: <HomePage />,
    },
  ];

  return (
    <BrowserRouter>
      <div className="h-screen w-full transition-colors">
        <Navbar tabs={tabs}></Navbar>
        <div>
          <Routes>
            <Route element={<HomePage />} path="/" />
            {tabs.map((tab) => (
              <Route
                key={tab.label}
                element={tab.element}
                path={tab.path}
              ></Route>
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
