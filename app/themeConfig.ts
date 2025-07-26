// app/themeConfig.ts
import frame1 from "../public/event-planner/bg.png";
import frame2 from "../public/event-planner/download.jpeg";
import frame3 from "../public/event-planner/image2.png";

export const themeConfigs = [
  { name: "Default", image: frame1, isDefault: true },
  { name: "Classic Blue", image: frame2 },
  { name: "Soft Pink", image: frame3 },
] as const;

export const defaultTheme = themeConfigs[0];
