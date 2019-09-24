import React from "react";
import { storiesOf } from "@storybook/react";
import Container from ".";
import { action } from "@storybook/addon-actions";

let sso = {
  getJWT: () => ({
    getClaim: (x: string) => "Dummy user"
  }),
  isLoggedIn: () => true,
  logout: action("logout")
};

storiesOf("AllbinBar", module).add("Container", () => (
  <Container
    sso={sso}
    open={true}
    onClose={action("onClose")}
    onDashboard={action("onDashboard")}
    title="Anslag"
    current_version="v1.0.1"
    show_about_btn={true}
    show_help_btn={true}
    tool_info={["dummy tool information 1", "dummy tool information 2"]}
  />
));
