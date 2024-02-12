import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./components/Navigation";

import {
  SelectedIdsContext,
  SportSelectionContext,
  WorkoutsContext,
  SettingsContext,
  ThemeContext,
} from "./contexts/Contexts";

import { darkColors, lightColors } from "./styles/ColorScheme";

import { WorkoutData } from "./data/WorkoutsData";
import { DistanceUnitsData } from "./data/DistanceUnitsData";

const lightColorsScheme = {
  ...MD3LightTheme,
  colors: lightColors.colors,
};

const darkColorsScheme = {
  ...MD3DarkTheme,
  colors: darkColors.colors,
};

export default function App() {
  const [units, setUnits] = useState(DistanceUnitsData[[0]]);
  const [workouts, setWorkouts] = useState(WorkoutData);
  const [selectedSport, setSelectedSports] = useState("");
  const [icon, setSelectedIcon] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const theme = isDarkModeOn === true ? darkColorsScheme : lightColorsScheme;

  return (
    <ThemeContext.Provider value={{ isDarkModeOn, setIsDarkModeOn }}>
      <SelectedIdsContext.Provider value={{ selectedIds, setSelectedIds }}>
        <SettingsContext.Provider value={{ units, setUnits }}>
          <SportSelectionContext.Provider
            value={{ selectedSport, setSelectedSports, icon, setSelectedIcon }}
          >
            <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
              <PaperProvider theme={theme}>
                <SafeAreaProvider>
                  <Navigation />
                  <StatusBar style="auto" />
                </SafeAreaProvider>
              </PaperProvider>
            </WorkoutsContext.Provider>
          </SportSelectionContext.Provider>
        </SettingsContext.Provider>
      </SelectedIdsContext.Provider>
    </ThemeContext.Provider>
  );
}
