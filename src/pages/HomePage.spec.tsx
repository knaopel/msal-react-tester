import { render, screen } from "@testing-library/react";
import { MsalProvider } from "@azure/msal-react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./HomePage";

import { MsalReactTester } from "msal-react-tester";

describe("Home Page", () => {
  let msalTester: MsalReactTester;

  beforeEach(() => {
    msalTester = new MsalReactTester();
    msalTester.spyMsal();
  });

  afterEach(() => {
    msalTester.resetSpyMsal();
  });

  it.todo("renders correctly when user is logged out.");
});
