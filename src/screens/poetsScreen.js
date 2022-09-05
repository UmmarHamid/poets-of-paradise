import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import CardContainer from "../components/CardContainer";
import MainContainerView from "../components/MainContainerView";

const PoetsScreen = () => {
  // const getPoetsList = () => {
  //   firebase.database().ref("Poets");
  // };
  // console.debug(getPoetsList());
  return (
    <MainContainerView>
      <ScrollView>
        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            {/* <Text>{getPoetsList()}</Text> */}
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Poet 2</Text>
          </CardContainer>
        </View>

        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Poet 3</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Poet 4</Text>
          </CardContainer>
        </View>
        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Poet 5</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Poet 6</Text>
          </CardContainer>
        </View>

        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Poet 7</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Poet 8</Text>
          </CardContainer>
        </View>
      </ScrollView>
    </MainContainerView>
  );
};

export default PoetsScreen;

const styles = StyleSheet.create({
  cardrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 200,
  },

  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
