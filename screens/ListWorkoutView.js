import { useContext } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card, Chip, Icon, Text } from "react-native-paper";

import Style from "../styles/Style";

import {
  SelectedIdsContext,
  SettingsContext,
  ThemeContext,
  WorkoutsContext,
} from "../contexts/Contexts";

import {
  CalculateTotalDistance,
  CalculateTotalSets,
  CalculateTotalTimeSpent,
  ConvetMinutesToHours,
  FormatDate,
} from "../functions/HelperFunctions";

import { darkColors, lightColors } from "../styles/ColorScheme";

export default function ListWorkoutView() {
  // Contexts
  const { workouts } = useContext(WorkoutsContext);
  const { units } = useContext(SettingsContext);
  const { selectedIds, setSelectedIds } = useContext(SelectedIdsContext);
  const { isDarkModeOn } = useContext(ThemeContext);

  // Sort workouts by creating new dateobject "dateObject"
  // compaire the dates to return either negative or positive value
  const WorkoutsSortedByDate = workouts
    .map((obj) => {
      return { ...obj, dateObject: new Date(obj.date) };
    })
    .sort((a, b) => b.dateObject - a.dateObject);

  // Render workout items in cards
  const RenderWorkoutItems = ({ item }) => {
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
          {
            borderColor: isDarkModeOn
              ? darkColors.colors.primary
              : lightColors.colors.primary,
          },
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
          subtitle={FormatDate(item.date)}
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
            data={WorkoutsSortedByDate}
            renderItem={RenderWorkoutItems}
            keyExtractor={(item) => item.id}
            extraData={selectedIds}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
