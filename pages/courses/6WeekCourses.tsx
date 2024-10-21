import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList, RootStackParamList } from "../../type/types";
import { styles } from "../../styles/courseNavStyle";

type Props = DrawerScreenProps<DrawerParamList, "SixWeekCourses">;

export const SixWeekCoursesScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToPage = (pageName: keyof RootStackParamList) => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>6 Week Courses</Text>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToPage("Child")}
        >
          <Text style={styles.buttonText}>Child Care</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToPage("Cook")}
        >
          <Text style={styles.buttonText}>Cooking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToPage("FirstAid")}
        >
          <Text style={styles.buttonText}>First Aid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToPage("Garden")}
        >
          <Text style={styles.buttonText}>Gardening</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.itemSelectionButton}
        onPress={() => navigateToPage("ItemSelection")}
      >
        <Text style={styles.buttonText}>View All Courses</Text>
      </TouchableOpacity>
    </View>
  );
};
