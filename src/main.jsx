import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsProvider from "../src/context/ProjectsProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </StrictMode>
  </Router>,
);
