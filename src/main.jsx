import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsProvider from "./context/ProjectsProvider.jsx"; // تأكد من المسار
import { HashRouter as Router } from "react-router-dom"; // استخدم الـ HashRouter
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </Router>
  </StrictMode>,
);
