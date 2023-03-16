import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication
} from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";
import { MsalProvider } from "@azure/msal-react";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// Instantiate MSAL-Browser
const pca = new PublicClientApplication(msalConfig);

// Account selection login is appdependant.Adjust as needed.
const accounts = pca.getAllAccounts();
if (accounts.length > 0) {
  pca.setActiveAccount(accounts[0]);
}

pca.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    pca.setActiveAccount(account);
  }
});

root.render(
  <StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </StrictMode>
);
