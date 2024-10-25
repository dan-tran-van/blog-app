import { authSDK } from "./auth.sdk";
import { blogSDK } from "./blog.sdk";

export const api = {
  blog: blogSDK,
  auth: authSDK,
};
