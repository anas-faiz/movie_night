import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./utils/UserProvider.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appstore.js";
import { AuthProvider } from "./utils/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
    <BrowserRouter>
    <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
    </AuthProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
);
