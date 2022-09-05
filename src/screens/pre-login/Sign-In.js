import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../themes/colors";

const auth = getAuth();

const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign in to get started!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={600}
        style={[
          styles.footer,
          {
            backgroundColor: "#ffffff",
          },
        ]}
      >
        {!!value.error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{value.error}</Text>
          </View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: "#333333",
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            value={value.email}
            style={[
              styles.textInput,
              {
                color: "#333333",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              color: "#333333",
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#333333" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            value={value.password}
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "#333333",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={signIn}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    marginVertical: 10,
  },
  errorText: {
    color: Colors.HEART_RED,
  },
});
export default SignInScreen;
