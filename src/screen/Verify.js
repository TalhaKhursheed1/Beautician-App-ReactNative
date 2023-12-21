import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from "react-native-paper";
import React from 'react'


const Verify = ({navigation}) => {
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
            marginTop: 60,
          }}
          source={require("../Imagess/70522341-d529-44ce-8b5d-5dff7b84a28f.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          margin: 35,
          textAlign: "center",
          
        }}

      >
        Verify phone
      </Text>
      <View style={{
        backgroundColor:'white',
        flexDirection:'row',
        marginRight: 10,
        marginLeft :  10 ,
        borderRadius:15,
      }}>
        <TextInput
        style={{
          marginLeft:20,
          width:300,
          backgroundColor:'white',
        }}
          label={"Country"}
          underlineColor='transparent'
        />
      </View>
      <View style={{
        backgroundColor:'white',
        flexDirection:'row',
        marginRight: 10,
        marginLeft :  10 ,
        borderRadius:15,
        margin:15,
      }}>
        <TextInput
        style={{
          marginLeft:20,
          width:300,
          backgroundColor:'white',
        }}
          label={"Mobile Number"}
          underlineColor='transparent'
        />
      </View>

    
      <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>{
              navigation.navigate('OTP')
            }}
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
              Continue
            </Text>
          </TouchableOpacity>
      </View>
       
       
      


     
    </ScrollView>
  </View> 
      
  );
};

export default Verify

const styles = StyleSheet.create({})