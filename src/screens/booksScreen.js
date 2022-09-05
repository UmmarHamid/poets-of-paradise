import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import CardContainer from "../components/CardContainer";
import MainContainerView from "../components/MainContainerView";

const BooksScreen = () => {
  return (
    <MainContainerView>
      <ScrollView>
        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Book 1</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Book 2</Text>
          </CardContainer>
        </View>

        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Book 3</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Book 4</Text>
          </CardContainer>
        </View>
        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Book 5</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Book 6</Text>
          </CardContainer>
        </View>

        <View style={styles.cardrow}>
          <CardContainer style={styles.card}>
            <Text>Book 7</Text>
          </CardContainer>

          <CardContainer style={styles.card}>
            <Text>Book 8</Text>
          </CardContainer>
        </View>
      </ScrollView>
    </MainContainerView>
  );
};

export default BooksScreen;

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
