import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Neo WIKI",
  description: "学习整理",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
