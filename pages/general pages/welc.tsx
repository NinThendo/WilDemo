import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/homeStyle";
import { ItemSelectionScreen } from "../checkout/pay";

type HomePageProps = NativeStackScreenProps<RootStackParamList, "HomePage">;

type PageSummary = {
  title: string;
  summary: string;
  hasButton?: boolean;
  buttonText?: string;
  navigateTo?: keyof RootStackParamList;
};

// Mock data for page summaries
const pageSummaries: PageSummary[] = [
  { title: "About Us", summary: "Learn about our mission and values." },
  {
    title: "Services",
    summary: "Explore the services we offer to empower the nation.",
  },
  { title: "Projects", summary: "View our ongoing and completed projects." },
  { title: "Contact", summary: "Get in touch with us for more information." },
  {
    title: "Item Selection",
    summary: "Choose items for your order.",
    hasButton: true,
    buttonText: "Go to Item Selection",
    navigateTo: "ItemSelection",
  },
];

export const HomePage = ({ navigation }: HomePageProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          source={require("../../images/logo.jpeg")}
          style={styles.headerImage}
        />
      ),
    });
  }, [navigation]);

  const handleNavigation = (ItemSelection: keyof RootStackParamList) => {
    navigation.navigate("ItemSelection");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome to Empowering the Nation</Text>

      <Text style={styles.subheading}>Quick Page Summaries</Text>
      <View style={styles.summaryGrid}>
        {pageSummaries.map((page, index) => (
          <View key={index} style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>{page.title}</Text>
            <Text style={styles.summaryText}>{page.summary}</Text>
            {page.hasButton && page.navigateTo && (
              <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => handleNavigation(page.navigateTo!)}
              >
                <Text style={styles.navigationButtonText}>
                  {page.buttonText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;
