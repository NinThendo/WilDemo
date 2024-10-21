import React from "react";

import { DrawerScreenProps as RNDrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps as RNStackScreenProps } from "@react-navigation/stack";

export type DrawerParamList = {
  Home: undefined;
  News: undefined;
  SixWeekCourses: undefined;
  Courses2: undefined;
  Contact: undefined;
};

export type RootStackParamList = {
  Drawer: DrawerParamList;
  HomePage: undefined;
  SignUpScreen: undefined;
  Notifications: undefined;
  OtherPage1: undefined;
  OtherPage2: undefined;
  Child: undefined;
  Cook: undefined;
  FirstAid: undefined;
  Garden: undefined;
  Landscaping: undefined;
  Life: undefined;
  Sewing: undefined;
  checkout: undefined;
  ItemSelection: undefined;
  PaymentDetails: { total: number };
  PaymentSuccess: { total: number };
};

export type DrawerScreenProps<T extends keyof DrawerParamList> =
  RNDrawerScreenProps<DrawerParamList, T>;
export type StackScreenProps<T extends keyof RootStackParamList> =
  RNStackScreenProps<RootStackParamList, T>;
