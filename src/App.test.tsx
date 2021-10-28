import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { setImmediate } from "timers";

function Comp() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      document.title = value;
      console.log("set title");
    }, 1000);
  });

  return (
    <input
      data-testid="myInput"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

it("blah", async () => {
  render(<Comp />);

  for (let i = 0; i < 10000; i++) {
    const input = screen.getByTestId("myInput");
    userEvent.clear(input);
    userEvent.type(input, "The quick brown fox jumps over the lazy dog.");

    await new Promise((resolve) => setImmediate(resolve));
  }
});
