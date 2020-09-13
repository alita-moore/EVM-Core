import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {test, expect, it} from "enzyme";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})

it("runs test", () => {
  expect(1).toBe(1)
});
