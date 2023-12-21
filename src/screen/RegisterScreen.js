import {
  StyleSheet,
  Text,
  View,
  Image,
  onChangeText,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const RegisterScreen = ({ navigation }) => {
  const [country, setCountry] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [eyeIconColor, setEyeIconColor] = useState("black"); 
  const [eyeColor, setEyeColor] = useState("black");

  const showPassword = () => {
    setShow(!show);
    setEyeIconColor(show ? "black" : "green");
  };
  const confirm = () => {
    setShowConfirm(!showConfirm);
    setEyeColor(showConfirm ? "black" : "green");
  };

  const saveData = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User Created Successfully");

        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6F7FB",
      }}
    >
      <ScrollView 
      contentContainerStyle={{ paddingVertical: 10 }}
     >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              marginTop: 40,
            }}
            source={require("../Imagess/70522341-d529-44ce-8b5d-5dff7b84a28f.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            margin: 20,
            textAlign: "center",
          }}
        >
          Sign up
        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            // margin: 10,
          }}
        >
          <TextInput
            style={{
              width: 300,
              backgroundColor: "white",
              marginLeft: 10,
            }}
            label={"Country"}
            onChangeText={(Text) => setCountry(Text)}
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
            onChangeText={(Text) => setEmail(Text)}
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
            // margin: 10,
          }}
        >
          <TextInput
            style={{
              width: 300,
              backgroundColor: "white",
              marginLeft: 10,
            }}
            label={"Password"}
            onChangeText={(Text) => setPassword(Text)}
            underlineColor="transparent"
            secureTextEntry={!show}
          />
          <TouchableOpacity onPress={showPassword}>
            <Image
              style={{
                flexDirection: "row",
                tintColor: eyeIconColor,
              }}
              source={require("../Imagess/eye.png")}
            />
          </TouchableOpacity>
        </View>
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
            label={"Confirm Password"}
            onChangeText={(Text) => setConfirmPassword(Text)}
            underlineColor="transparent"
            secureTextEntry={!showConfirm}
          />
          <TouchableOpacity onPress={confirm}>
            <Image
              style={{
                flexDirection: "row",
                tintColor: eyeColor,
              }}
              source={require("../Imagess/eye.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => saveData()}
            style={{
              backgroundColor: "#FF0F88",
              height: 45,
              width: 350,
              padding: 10,
              margin: 25,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                width: 100,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <View style={{}}>
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
              top: 10,
              width: 170,
              backgroundColor: "white",
              marginRight: 180,
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
                }}
                source={require("../Imagess/Googlee.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              height: 60,
              borderRadius: 10,
              width: 170,
              bottom: 50,
              marginLeft: 190,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                  alignItems: "center",
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
                bottom: 40,
                marginRight: 40,
              }}
            >
              Already a user?
            </Text>
          </View>
          <View
          style={{
            marginLeft: 150,
            alignContent:'center',
            bottom:63,

          }}
        >
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate('LoginScreen');
           }}>
            <Text
              style={{
                color: "#FF0F88",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
