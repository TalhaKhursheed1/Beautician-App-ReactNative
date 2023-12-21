import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const Order = () => {
  const navigation = useNavigation();
    const route = useRoute();
    const {
        beauticianName,
        serviceName,
        price,
        rating,
        star,
        image,
        timeSlot,
      } = route.params;
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
          onPress={() => navigation.goBack("Book")}
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
          Order Preview
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
      <Text style={{
        margin:15,
        fontSize:18,
        fontWeight:'600',
      }}>
        Beautician
      </Text>
      <View
          style={{
            width: 350,
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            height: 114,
            borderRadius: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
        <Image
          source={image}
        />
          <Text
            style={{
              margin: 10,
              paddingLeft: 5,
              fontSize:18,
              fontWeight:'600',
              width:200,
            }}
          >
            {beauticianName}
          </Text>
        <Image style={{
          position:'relative',
         right:60,
          margin:15,
        }}
          source={star}
        />
        <Text style={{
          position:'absolute',
          right:5,
          margin:15,
          
        }}>
          {rating}
        </Text>
        
         
        </View>
       
          <Text style={{
            margin:15,
            fontSize:18,
            fontWeight:'600',
            
          }}>
            Date and Time
          </Text>
        <View  style={{
            width: 350,
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            height: 60,
            borderRadius: 10,
            marginTop: 10,
            flexDirection: "row",
            }}
            >
            <View style={{
              justifyContent:"space-around",
              flexDirection:'row',
              alignSelf:'center',
              paddingLeft:20,
            }}>
            <Image 
              source={require('../Imagess/clock.png')}
            />
            <Text style={{
                fontSize:17,
            }}>
              {timeSlot}
            </Text>
            </View>
            

        </View>
        <Text
          style={{
            margin: 15,
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          Services
        </Text>
        <View
          style={{
            width: 350,
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            height: 90,
            borderRadius: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              margin: 10,
              paddingLeft: 5,
              color: "grey",
            }}
          >
            {serviceName}
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 60,
              left: 20,
              fontWeight: "700",
            }}
          >
            € {price}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF0F88",
              width: "100%",
              height: 50,
              alignSelf: "center",
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
              top:85,
            }}
          onPress={()=>{
            navigation.navigate("Payment")}}
          
          >
            <Text
              style={{
                margin: 10,
                color: "white",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>

      </View>
  
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})