import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // TODO
    {
      text: "🧰 考证笔记",
      icon: "",
      prefix: "/certificates/",
      link: "",
      collapsible: true,
      children: [
        "hcia-datacom"
      ]
    },
    {
      text: "🔡 编程语言",
      icon: "",
      prefix: "/programming/",
      link: "",
      collapsible: true,
      children: [
        "java"
      ]
    }
  ],
});
