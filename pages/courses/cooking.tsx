/* import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";

type CourseDetailPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Course1Detail" | "Course2Detail" | "Course3Detail"
>;

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  route,
}) => {
  // You would typically fetch this data based on the route params
  const courseInfo = {
    title: "Course Title",
    description: "This is a detailed description of the course.",
    topics: [
      "Topic 1: Introduction",
      "Topic 2: Core Concepts",
      "Topic 3: Advanced Techniques",
      "Topic 4: Practical Applications",
    ],
    duration: "8 weeks",
    level: "Intermediate",
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../images/course-detail.jpg")}
        style={styles.courseImage}
      />
      <Text style={styles.title}>{courseInfo.title}</Text>
      <Text style={styles.description}>{courseInfo.description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Duration: {courseInfo.duration}</Text>
        <Text style={styles.infoText}>Level: {courseInfo.level}</Text>
      </View>
      <Text style={styles.sectionTitle}>Course Topics:</Text>
      {courseInfo.topics.map((topic, index) => (
        <Text key={index} style={styles.topicText}>
          • {topic}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  topicText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CourseDetailPage;
*/
