import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#0b0b10", panel: "#12121a", violet: "#9275ff" } } },
  plugins: []
};
export default config;
