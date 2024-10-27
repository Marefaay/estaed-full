import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.output.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import windmillTheme from "./windmillTheme";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom"; // Import Router

ReactDOM.render(
  <Router> {/* Wrap App with Router */}
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences theme={windmillTheme}>
          <App />
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </Router>,
  document.getElementById("root")
);
