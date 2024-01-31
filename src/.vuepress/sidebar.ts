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
    }
  ],
});
