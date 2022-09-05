import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MainContainerView from "../components/MainContainerView";
import CardContainer from "../components/CardContainer";

const HomeScreen = () => {
  return (
    <MainContainerView>
      <CardContainer style={styles.card}>
        <View style={styles.subcontainer}>
          <Text>HomePage</Text>
        </View>
      </CardContainer>
    </MainContainerView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    height: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
});
