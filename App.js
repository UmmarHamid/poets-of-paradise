import React from "react";
import { ThemeProvider } from "react-native-elements";
import "./config/firebase";

import RootNavigation from "./src/navigation";
export default function App({ navigation }) {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
