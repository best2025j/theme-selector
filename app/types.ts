// app/types.ts
import { StaticImageData } from "next/image";

export interface Theme {
  name: string;
  image: StaticImageData;
  isDefault?: boolean;
}

export interface ThemeSelectorProps {
  selectedTheme: Theme;
  setSelectedTheme: (theme: Theme) => void; // Properly typed setter function
  onClose: () => void;
}
