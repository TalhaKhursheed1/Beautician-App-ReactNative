import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Confirmation = () => {
    const navigation= useNavigation();
  return (
    <View  style={{
        flex: 1,
        backgroundColor: "#5C128C",
      }}>
       <View
        style={{
          padding: 15,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            top: 26,
          }}
          onPress={() => navigation.navigate("Payment")}
        >
          <Image style={{}} source={require("../Imagess/backbutton.png")} />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            height: 40,
            fontSize: 25,
            margin: 10,
            padding: 10,
            width: 270,
            fontWeight: "500",
          }}
        >
          Booking Confirmation
        </Text>
      </View>
      <View
          style={{
            backgroundColor: "#F6F7FB",
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopEndRadius: 20,
          }}
        >
        <View style={{
            flex:1,
            alignItems:'center',
            top:'30%',
            
        }}>
        <Image
            source={require('../Imagess/Booking.png')}
        />
            <Text style={{
                fontSize:20,
                fontWeight:'500',
                margin:10,
                width:250,
                textAlign:'center',
            }}>
            Your booking has been confirmed!
            </Text>
            <Text style={{
                color:'grey',
                margin:10,
            }}>
            Thank you for using our services.
            </Text>
            <TouchableOpacity style={{
                top:60,
                borderRadius:15,
                backgroundColor:'#FF0F88',
                width:150,
                height:50,  
            }}
            onPress={()=>{
                navigation.navigate('HomeScreen')
            }}
            >
                <Text style={{
                    textAlign:'center',
                    padding:15,
                    fontSize:17,
                    color:'white',
                }}>
                    Go to Home
                </Text>
            </TouchableOpacity>
        </View>

        </View>

      
    </View>
  )
}

export default Confirmation

const styles = StyleSheet.create({})