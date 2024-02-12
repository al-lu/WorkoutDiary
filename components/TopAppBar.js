import { useContext, useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

import { SelectedIdsContext, WorkoutsContext } from "../contexts/Contexts";

function TopAppBar({ route, options }) {
  // Contexts
  const { workouts, setWorkouts } = useContext(WorkoutsContext);
  const { selectedIds, setSelectedIds } = useContext(SelectedIdsContext);

  // States
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // Delete selected workouts by returning a filtered array of workouts
  // that doesn't contain ids that were marked for removal
  const DeleteWorkout = (idsToRemove) => {
    const updateWorkouts = workouts.filter((workout) => {
      return !idsToRemove.includes(workout.id);
    });

    setWorkouts(updateWorkouts);
    setSelectedIds([]);
  };

  const title = getHeaderTitle(options, route.name);

  // Disable delete button if selectedIds has no lenght -> Nothing to remove
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item
          disabled={Object.keys(selectedIds).length ? false : true}
          onPress={() => DeleteWorkout(selectedIds)}
          title="Delete"
        />
      </Menu>
    </Appbar.Header>
  );
}

export default TopAppBar;
