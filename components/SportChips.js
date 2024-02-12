import { useContext } from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

import Style from "../styles/Style";

import { SportSelectionContext } from "../contexts/Contexts";
import { WorkoutsOptionsData } from "../data/WorkoutsOptionsData";

const SportChips = ({ location }) => {
  // Contexts
  const { selectedSport, setSelectedSports, setSelectedIcon } = useContext(
    SportSelectionContext
  );

  // Which Cards to show
  let content;

  // Workout options data
  let workouts = WorkoutsOptionsData;

  // Add sport type and icon to context
  const AddSport = (sportType, selectedicon) => {
    setSelectedSports(sportType);
    setSelectedIcon(selectedicon);
  };

  switch (location) {
    case "outdoors":
      return (content = workouts
        .filter((workout) => workout.location === "outdoors")
        .map((option) => (
          <View key={option.id}>
            <Chip
              style={Style.sportChip}
              mode="outlined"
              onPress={() => AddSport(option.workout, option.icon)}
              selected={selectedSport === option.workout}
            >
              {option.workout}
            </Chip>
          </View>
        )));

    case "gym":
      return (content = workouts
        .filter((workout) => workout.location === "gym")
        .map((option) => (
          <View key={option.id}>
            <Chip
              style={Style.sportChip}
              mode="outlined"
              onPress={() => AddSport(option.workout, option.icon)}
              selected={selectedSport === option.workout}
            >
              {option.workout}
            </Chip>
          </View>
        )));

    case "home":
      return (content = workouts
        .filter((workout) => workout.location === "home")
        .map((option) => (
          <View key={option.id}>
            <Chip
              style={Style.sportChip}
              mode="outlined"
              onPress={() => AddSport(option.workout, option.icon)}
              selected={selectedSport === option.workout}
            >
              {option.workout}
            </Chip>
          </View>
        )));
  }

  return <View>{content}</View>;
};
export default SportChips;
