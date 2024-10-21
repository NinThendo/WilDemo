import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/payStyle";

type ItemSelectionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ItemSelection"
>;

type Item = {
  id: number;
  name: string;
  price: number;
};

export const ItemSelectionScreen: React.FC<ItemSelectionScreenProps> = ({
  navigation,
}) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const items: Item[] = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
    { id: 4, name: "Item 4", price: 25 },
    { id: 5, name: "Item 5", price: 30 },
    { id: 6, name: "Item 6", price: 35 },
    { id: 7, name: "Item 7", price: 40 },
  ];

  useEffect(() => {
    calculateTotal();
  }, [selectedItems]);

  const toggleItem = (item: Item) => {
    const index = selectedItems.findIndex((i) => i.id === item.id);
    if (index > -1) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const calculateTotal = () => {
    const newSubtotal = selectedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
    let discountRate = 0;

    if (selectedItems.length === 2) {
      discountRate = 0.05;
    } else if (selectedItems.length === 3) {
      discountRate = 0.1;
    } else if (selectedItems.length >= 4) {
      discountRate = 0.15;
    }

    const newDiscount = newSubtotal * discountRate;
    const newTotal = newSubtotal - newDiscount;

    setSubtotal(newSubtotal);
    setDiscount(newDiscount);
    setTotal(newTotal);
  };

  const handleCheckout = () => {
    navigation.navigate("PaymentDetails", { total });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Select Items</Text>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.itemOption,
              selectedItems.some((i) => i.id === item.id) &&
                styles.selectedItem,
            ]}
            onPress={() => toggleItem(item)}
          >
            <Text style={styles.itemOptionText}>
              {item.name} - R{item.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>R{subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Discount</Text>
          <Text style={styles.summaryText}>-R{discount.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryTotalText}>R{total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
        disabled={selectedItems.length === 0}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
