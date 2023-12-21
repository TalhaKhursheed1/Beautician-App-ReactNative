import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow(!show);
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User Login successfully");

        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Enter a valid Email");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6F7FB",
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              marginTop: 50,
            }}
            source={require("../Imagess/70522341-d529-44ce-8b5d-5dff7b84a28f.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            margin: 30,
            paddingLeft:50,
           
          }}
        >
          Login
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            margin: 10,
          }}
        >
          <TextInput
            style={{
              width: 300,
              backgroundColor: "white",
              marginLeft: 10,
            }}
            label={"Mobile Number"}
            onChangeText={(Number) => setEmail(Number)}
            underlineColor="transparent"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            margin: 5,
          }}
        >
          <TextInput
            style={{
              width: 300,
              backgroundColor: "white",
              marginLeft: 10,
            }}
            label={"Password"}
            secureTextEntry={!show}
            onChangeText={(Text) => setPassword(Text)}
            underlineColor="transparent"
          />
          <TouchableOpacity onPress={showPassword}>
            <Image
              style={{
                flexDirection: "row",
              }}
              source={require("../Imagess/eye.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            left: 120,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              width: 210,
            }}
            onPress={() => resetPassword()}
          >
            <Text
              style={{
                color: "purple",
                textAlign: "center",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              padding: 10,
              width: 350,
              borderRadius: 15,
              backgroundColor: "#FF0F88",
              height: 50,
            }}
            onPress={() => login()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                padding: 5,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            top: 70,
          }}
        >
          <Text
            style={{
              color: "grey",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            - or login with -
          </Text>
        </View>

        <View
          style={{
            top: 80,
            width: 170,
            backgroundColor: "white",
            marginLeft: 10,
            height: 60,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              left: 50,
              alignSelf: "center",
              borderRadius: 5,
            }}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 10,
                marginRight: 50,
              }}
              source={require("../Imagess/Googlee.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginLeft: 10,
            height: 60,
            borderRadius: 10,
            width: 170,
            margin: 10,
            marginLeft: 190,
            top: 10,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              left: 50,
              alignSelf: "center",
            }}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 10,
                marginRight: 90,
              }}
              source={require("../Imagess/drawable-xhdpi/facebook.png")}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
              marginRight: 40,
            }}
          >
            New user?
          </Text>
        </View>
        <View
          style={{
            width: 90,
            bottom: 20,
            marginLeft: 200,
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 110,
              bottom: 4,
            }}
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Text
              style={{
                color: "#FF0F88",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
