import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { setConfig } from "next/config";

// Initialize Enzyme for Jest and StoryBook
Enzyme.configure({ adapter: new Adapter() });

// Load NextJS Config
setConfig({
  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
  },
});
