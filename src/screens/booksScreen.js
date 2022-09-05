import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import CardContainer from "../components/CardContainer";
import MainContainerView from "../components/MainContainerView";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const dbReference = ref(db, "books/");

const BookScreen = () => {
  const [books, setbooks] = useState(null);

  useEffect(() => {
    onValue(dbReference, (snapshot) => {
      const data = snapshot.val();
      setbooks(() => {
        return data.filter((item) => {
          return item != undefined;
        });
      });
    });
  }, []);

  const Item = ({ title }) => {
    return (
      <View style={styles.cardWrapper}>
        <CardContainer style={styles.card}>
          <Text>{title}</Text>
        </CardContainer>
      </View>
    );
  };
  const renderItem = ({ item }) => <Item title={item.name} />;
  return (
    <MainContainerView>
      <FlatList
        numColumns={2}
        style={styles.listStyles}
        data={books}
        renderItem={renderItem}
        keyExtractor={(book) => book.id}
      ></FlatList>
    </MainContainerView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  listStyles: {
    flex: 1,
  },
  cardWrapper: {
    justifyContent: "space-between",
    minHeight: 200,
    width: "50%",
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
});
