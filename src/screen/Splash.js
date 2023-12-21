import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(()=>{
      setTimeout(()=>{
      navigation.navigate('LoginScreen');
      },3000);

  },[]);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
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

      <View>
        <Text
          style={{
            fontSize: 17,
            marginTop: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginLeft: 60,
            width: 250,
          }}
        >
          A smarter way to take care of your beauty anytime, anywhere
        </Text>
      </View>
      <View>
        <Image
          style={{
            marginTop: 117,
            position: "absolute",
          }}
          source={require("../Imagess/Haircut.png")}
        />
        <Image
          style={{
            top: 117,
          }}
          source={require("../Imagess/path.png")}
        />
        <Text style={{
            color:'white',
            top:50,
            textAlign:'center',
        }}>
            POWERED BY
        </Text>
        <Text style={{
            fontSize:23,
            fontWeight:'bold',
            color:'white',
            textAlign:'center',
            top:50,
        }}>
        Aesthetech
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  // container: {
  //     flex:1,
  //     justifyContent:'center',
  //     alignItems: 'center',
  //     marginLeft: 20,
  //     marginTop: 280,
  // },
  // logo:{
  //     fontSize: 30,
  //     fontWeight: '900',
  //     color: 'black',
  //     // backgroundColor:'purple',
  // },
});
