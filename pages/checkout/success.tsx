import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/payStyle";

type PaymentSuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PaymentSuccess"
>;

export const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({
  route,
  navigation,
}) => {
  const { total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Payment Successful!</Text>
      <Text style={styles.totalText}>Total Paid: R{total.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.homeButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
