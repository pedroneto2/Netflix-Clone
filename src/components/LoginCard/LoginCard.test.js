import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LoginCard from "./LoginCard";

describe("LoginCard Component", () => {
  const fakeContext = {};
  const textProps = {
    signin: "Sign In",
    passwordText: "Password",
    signinBtn: "Log In",
    rememberMe: "Remember-me",
    help: "Need help?",
    emailText: "Email",
    emailError: "Please insert a valid email.",
    passwordError: "Your password must be between 4 and 60 chracters.",
    hide: "HIDE",
    show: "SHOW",
  };

  test("Should display static texts and do not display loading-spinner if loading is falsy", () => {
    render(
      <BrowserRouter>
        <LoginCard
          {...textProps}
          testContext={fakeContext}
          textContext={{ loading: true }}
        />
      </BrowserRouter>
    );
    Object.values(textProps).forEach((text, index) => {
      if (index > 5) return;
      const textRegex = new RegExp(text, "i");
      const linkElement = screen.getAllByText(textRegex);
      expect(linkElement.length).toBeGreaterThan(0);
      //look for spinner
      const loginBtn = screen.queryByText("Loading...", { selector: "span" });
      expect(loginBtn).not.toBeInTheDocument();
    });
  });

  test("Should display errors-helping-texts properly", () => {
    render(
      <BrowserRouter>
        <LoginCard {...textProps} testContext={fakeContext} />
      </BrowserRouter>
    );
    const inputFields = screen.getAllByText("", { selector: "input" });
    const outField = screen.getByText("Sign In");
    userEvent.click(inputFields[0]); // click email field
    userEvent.click(inputFields[1]); // click password field
    expect(
      screen.getByText("Please insert a valid email.")
    ).toBeInTheDocument();
    userEvent.click(outField); // click outside input fields
    expect(
      screen.getByText("Your password must be between 4 and 60 chracters.")
    ).toBeInTheDocument();

    // do not display msg error if email field is properly filled
    userEvent.type(inputFields[0], "admin@admin.com");
    expect(
      screen.queryByText("Please insert a valid email.")
    ).not.toBeInTheDocument();
    userEvent.clear(inputFields[0]); //clean email input

    //display msg error if it is an invalid email
    userEvent.type(inputFields[0], "admin.com");
    expect(
      screen.queryByText("Please insert a valid email.")
    ).toBeInTheDocument();
    userEvent.clear(inputFields[0]); //clean email input

    //display msg error if the password has less than 4 characters
    userEvent.type(inputFields[1], "adm");
    expect(
      screen.queryByText("Your password must be between 4 and 60 chracters.")
    ).toBeInTheDocument();
    userEvent.clear(inputFields[1]); //clean password input

    // do not display msg error if password field is properly filled
    userEvent.type(inputFields[1], "admin");
    expect(
      screen.queryByText("Your password must be between 4 and 60 chracters.")
    ).not.toBeInTheDocument();
    userEvent.clear(inputFields[1]); //clean password input

    //display msg error if the password has more than 60 characters
    userEvent.type(
      inputFields[1],
      "abcdefghijklmnopqrstuvwxzy1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    );
    expect(
      screen.queryByText("Your password must be between 4 and 60 chracters.")
    ).toBeInTheDocument();
    userEvent.clear(inputFields[1]); //clean password input
  });

  test("SHOW/HIDE-password-feature should behave properly", () => {
    render(
      <BrowserRouter>
        <LoginCard {...textProps} testContext={fakeContext} />
      </BrowserRouter>
    );
    //before click SHOW button (button displaying SHOW)
    let showBtn = screen.queryByText("SHOW", { selector: "button" });
    let emailField = screen.getAllByText("", { selector: "input" })[1];
    expect(showBtn).toBeInTheDocument();
    expect(emailField).toHaveProperty("type", "password"); // should hide password
    expect(emailField).not.toHaveProperty("type", "text"); // should NOT show password

    userEvent.click(showBtn);
    showBtn = screen.queryByText("SHOW", { selector: "button" }); // look for SHOW button again

    //after click SHOW button (button displaying HIDE)
    let hideBtn = screen.queryByText("HIDE", { selector: "button" });
    expect(showBtn).not.toBeInTheDocument();
    expect(hideBtn).toBeInTheDocument();
    emailField = screen.getAllByText("", { selector: "input" })[1]; // refresh email field
    expect(emailField).toHaveProperty("type", "text"); // should show password
    expect(emailField).not.toHaveProperty("type", "password"); // should NOT hide password
  });

  test("Should display spinner if loading is truthy", () => {
    render(
      <BrowserRouter>
        <LoginCard {...textProps} testContext={{ loading: true }} />
      </BrowserRouter>
    );
    const loginBtn = screen.getByText("Loading...", { selector: "span" });
    expect(loginBtn).toBeInTheDocument();
  });
});
