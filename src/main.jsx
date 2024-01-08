import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Index from "./pages/index";
import Settings from "./pages/settings";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Index />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
    </Routes>
  </Router>
);
