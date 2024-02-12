import { useContext } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card, Chip, Icon, Surface, Text } from "react-native-paper";

import Style from "../styles/Style";

import {
  DeleteWorkoutsContext,
  SettingsContext,
  ThemeContext,
  WorkoutsContext,
} from "../contexts/Contexts";

export default function ListWorkoutView() {
  // Contexts
  const { workouts } = useContext(WorkoutsContext);
  const { units } = useContext(SettingsContext);
  const { selectedIds, setSelectedIds } = useContext(DeleteWorkoutsContext);

  const { isDarkModeOn } = useContext(ThemeContext);

  const formatDate = (date) => {
    // Convert string date to date obj
    newDateObject = new Date(date);

    let formattedDate =
      newDateObject.getDate() +
      "." +
      Number(newDateObject.getMonth() + 1) +
      "." +
      newDateObject.getFullYear();

    return formattedDate;
  };

  // Sort workouts by creating new dateobject "dateObject"
  // compaire the dates to return either negative or positive value
  const workoutsSortedByDate = workouts
    .map((obj) => {
      return { ...obj, dateObject: new Date(obj.date) };
    })
    .sort((a, b) => b.dateObject - a.dateObject);

  // Render workout items in cards
  const renderWorkoutItems = ({ item }) => {
    // Find icon name from workout objects
    const LeftContent = (props) => (
      <Icon {...props} source={item.icon} style={Style.exerciseIcon} />
    );
    const RightContent = () => (
      <Card.Content style={Style.exerciseCardContentRight}>
        {item.exerciseLocation === "outdoors" ? (
          <Text variant="titleMedium">
            {units.value === "km"
              ? item.distance + " km"
              : (item.distance / 1.609344).toFixed(2) + " miles"}
          </Text>
        ) : (
          <Text variant="titleMedium">{item.numOfSets + " sets"}</Text>
        )}
        <Text variant="titleMedium">{ConvetMinutesToHours(item.duration)}</Text>
      </Card.Content>
    );

    return (
      <Card
        mode="elevated"
        elevation={selectedIds.includes(item.id) ? 5 : 0}
        style={[
          Style.exerciseCard,
          { borderColor: isDarkModeOn ? "#ffffff" : "#000000" },
        ]}
        onLongPress={() => {
          if (selectedIds.includes(item.id)) {
            setSelectedIds((prevIds) =>
              prevIds.filter((itemId) => itemId !== item.id)
            );
          } else {
            setSelectedIds((prevIds) => [...prevIds, item.id]);
          }
        }}
      >
        <Card.Title
          title={item.selectedSport}
          subtitle={formatDate(item.date)}
          left={LeftContent}
          right={RightContent}
        />
      </Card>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={Style.listWorkoutViewContainer}>
        <View style={Style.exerciseChipView}>
          <Chip
            icon={(p) => <Icon {...p} source={"tree"} size={25} />}
            style={Style.exerciseChip}
          >
            <Text style={Style.exerciseChipText}>
              {CalculateTotalDistance(workouts, units.value)}
            </Text>
          </Chip>
          <Chip
            icon={(p) => <Icon {...p} source={"dumbbell"} size={25} />}
            style={Style.exerciseChip}
          >
            <Text style={Style.exerciseChipText}>
              {CalculateTotalSets(workouts)}
            </Text>
          </Chip>
          <Chip
            icon={(p) => <Icon {...p} source={"home"} size={25} />}
            style={Style.exerciseChip}
          >
            <Text style={Style.exerciseChipText}>
              {CalculateTotalTimeSpent(workouts)}
            </Text>
          </Chip>
        </View>
        <View style={Style.workoutsFlatlist}>
          <FlatList
            data={workoutsSortedByDate}
            renderItem={renderWorkoutItems}
            keyExtractor={(item) => item.id}
            extraData={selectedIds}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const CalculateTotalDistance = (workoutsArray, units) => {
  const totalDistance = workoutsArray
    // Filter outdoor locations and calculate total distance
    .filter(
      (locationOutdoors) => locationOutdoors.exerciseLocation === "outdoors"
    )
    .reduce((result, { distance }) => (result += Number(distance)), 0);
  return units === "km"
    ? totalDistance + " km"
    : (totalDistance / 1.609344).toFixed(2) + " mi";
};

const CalculateTotalSets = (workoutsArray) => {
  const totalSets = workoutsArray
    // Filter gym workouts and calculate total sets
    .filter((locationGym) => locationGym.exerciseLocation === "gym")
    .reduce((result, { numOfSets }) => (result += Number(numOfSets)), 0);

  return totalSets + " sets";
};

const ConvetMinutesToHours = (minutes) => {
  return Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
};

const CalculateTotalTimeSpent = (workoutsArray) => {
  // Calculate total time spent at home
  const totalTimeSpentAtHome = workoutsArray
    .filter((locationHome) => locationHome.exerciseLocation === "home")
    .reduce((result, { duration }) => (result += Number(duration)), 0);

  return (
    Math.floor(totalTimeSpentAtHome / 60) +
    " h " +
    (totalTimeSpentAtHome % 60) +
    " min"
  );
};
