import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import gsap from "gsap";
import App from "./App.jsx";
import "./index.css";
import { useEffect, useRef } from "react";

function Loader() {
  const loaderRef = useRef(null);
  const loaderTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(loaderRef.current.querySelectorAll("h3"), {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    tl.to(loaderRef.current.querySelectorAll("h3"), {
      opacity: 0,
      y: -10,
      duration: 1,
      stagger: 0.2,
    });

    tl.to(loaderRef.current, {
      opacity: 0,
    });

    tl.to(loaderRef.current, {
      display: "none",
    });
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div style={{ display: "flex", gap: "0.5rem", overflow: "hidden" }}>
        <h3>Brainstorm,</h3>
        <h3>Create,</h3>
        <h3>Execute</h3>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Loader />
    <App />
  </BrowserRouter>
);
