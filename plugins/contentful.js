import { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN } from "@/lib/constants";
const contentful = require("contentful");

export default contentful.createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN
});
