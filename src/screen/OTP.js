import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const OTP = ({navigation}) => {
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
        <Text style={{
            fontSize : 18,
            width:250,
            marginLeft:50,
            textAlign:'center',
            color:'grey',
            
        }}>
            We have Sent the OTP on your Mobile Number +31 1234 123
        </Text>
       <View style={{
        flexDirection:'row',
        top:20,
       }}>
        <TextInput
            style={{
                height:80,
                width:80,
                margin:5,
                backgroundColor:'white',
                borderRadius:10,
                borderTopEndRadius:10,
                borderTopLeftRadius:10,
            }}
            
            underlineColor='transparent'
            keyboardType='number-pad'  
            maxLength={1}
            
           
        />
        <TextInput
            style={{
                height:80,
                width:80,
                margin:5,
                backgroundColor:'white',
                borderRadius:10,
                borderTopEndRadius:10,
                borderTopLeftRadius:10,
            }}
            
            underlineColor='transparent'
            keyboardType='number-pad'  
            maxLength={1}
           
        />
         <TextInput
            style={{
                height:80,
                width:80,
                margin:5,
                backgroundColor:'white',
                borderRadius:10,
                borderTopEndRadius:10,
                borderTopLeftRadius:10,
            }}
            
            underlineColor='transparent'
            keyboardType='number-pad'  
            maxLength={1}
           
        />
         <TextInput
            style={{
                height:80,
                width:80,
                margin:5,
                backgroundColor:'white',
                borderRadius:10,
                borderTopEndRadius:10,
                borderTopLeftRadius:10,
            }}
            
            underlineColor='transparent'
            keyboardType='number-pad'  
            maxLength={1}
           
        />
        
       </View>
       <View
          style={{
            alignItems: "center",
            marginTop:50,
          }}
        >
          <TouchableOpacity
            onPress={() =>{
              navigation.navigate('Details')
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
                width: 200,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
             Verify and Continue
            </Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={{
            fontSize:20,
            textAlign:'center',
        }}>
            Didn't Receive the code ?
        </Text>
      </View>
      <View>
        <TouchableOpacity>
            <Text style={{
                fontSize:20,
                fontWeight:'500',
                textAlign:'center',
                color:'#FF0F88',
            }}>
                Resend
            </Text>
        </TouchableOpacity>
      </View>

      </ScrollView>
      </View>
  )
}

export default OTP

const styles = StyleSheet.create({})