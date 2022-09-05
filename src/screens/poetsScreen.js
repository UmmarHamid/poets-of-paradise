import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import CardContainer from "../components/CardContainer";
import MainContainerView from "../components/MainContainerView";
import { getDatabase, ref, onValue } from "firebase/database";
import { Colors } from "../themes/colors";

const db = getDatabase();
const dbReference = ref(db, "poets/");

const PoetsScreen = () => {
  const [poets, setPoets] = useState(null);

  useEffect(() => {
    onValue(dbReference, (snapshot) => {
      const data = snapshot.val();
      setPoets(() => {
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
      {!poets && <ActivityIndicator size="large" color={Colors.DEEP_TEAL} />}
      <FlatList
        numColumns={2}
        style={styles.listStyles}
        data={poets}
        renderItem={renderItem}
        keyExtractor={(poet) => poet.id}
      ></FlatList>
    </MainContainerView>
  );
};

export default PoetsScreen;

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
