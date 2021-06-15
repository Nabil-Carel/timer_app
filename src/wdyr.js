/** @jsxImportSource @welldone-software/why-did-you-render */
import React from "react";
const whyDidYouRender = require("@welldone-software/why-did-you-render");
if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    include: [/A-za-z/],
    trackAllPureComponents: true,
  });
}
