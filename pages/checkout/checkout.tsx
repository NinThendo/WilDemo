import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/payStyle";

type PaymentDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PaymentDetails"
>;

export const PaymentDetailsScreen: React.FC<PaymentDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { total } = route.params;
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [loading, setLoading] = useState(false);

  const simulatePayment = (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const handlePayNow = async () => {
    if (!cardNumber || !expiry || !cvc || !cardholder) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      await simulatePayment();
      navigation.navigate("PaymentSuccess", { total });
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expiry}
            onChangeText={setExpiry}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="CVC"
            keyboardType="numeric"
            value={cvc}
            onChangeText={setCvc}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={cardholder}
          onChangeText={setCardholder}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Total to Pay</Text>
        <Text style={styles.totalText}>R{total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayNow}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.payButtonText}>Pay Now</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
