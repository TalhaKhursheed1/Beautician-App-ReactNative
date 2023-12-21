// import React from 'react';
// import { View, Text } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// function Payment() {
//   const route = useRoute();
//   const { selectedItems, totalBill } = route.params;

//   return (
//     <View style={{
//        width: 350,
//               backgroundColor: 'white',
//               alignSelf: 'center',
//               height: 140,
//               borderRadius: 10,
//               marginTop: 10,
//               flexDirection: '',

//     }}>
//       <Text style={{
//         fontSize:20,
//         textAlign:'center',
//         fontWeight:'700',
//         padding:10,
//         margin:10,
//         backgroundColor:'blue',
//         color:'white',

//       }}
//       >Review Your Order
//       </Text>
//       {selectedItems.map((item, index) => (

//         <Text key={index}
//         style={{
//             fontSize:20,
//             fontWeight:'bold',

//         }}>
//           Brand: {item.name}
//         </Text>

//       ))}
//       <Text style={{
//                 fontSize:20,
//                 fontWeight:'bold',
//                 marginLeft:10,
//       }}

//       >Total Bill:
//       </Text>
//       <Text style={{
//         color:'green',
//         fontSize:20,
//         marginLeft:20,
//       }}>
//       {totalBill}RS
//       </Text>

//     </View>
//   );
// }

// export default Payment;
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5C128C",
      }}
    >
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
          onPress={() => navigation.goBack("Order")}
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
          Payment Options
        </Text>
      </View>
      <ScrollView
        style={{
          height: 500,
          width: 375,
        }}
      >
        <View
          style={{
            backgroundColor: "#F6F7FB",
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopEndRadius: 20,
          }}
        >
          <Text
            style={{
              margin: 15,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Your Address and Contact No.
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
              label={"Cell Number"}
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
              label={"Address"}
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
              label={"City"}
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
              label={"Postal Code"}
              underlineColor="transparent"
            />
          </View>
          <Text
            style={{
              margin: 15,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Payment Options
          </Text>

          <View
            style={{
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 25,
                backgroundColor: "white",
                height: 40,
                width: 70,
              }}
            >
              <Text
                style={{
                  color: "#5C128C",
                  padding: 10,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Cash
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingLeft: 100,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 25,
                backgroundColor: "white",
                height: 40,
                width: 150,
                backgroundColor: "#5C128C",
                bottom: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  padding: 10,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Bank Transfer
              </Text>
            </TouchableOpacity>
          </View>
         <View style={{
          bottom:20,
         }}>
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
              label={"Card Holder's Name"}
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
              label={"Credit/Debit Card Number"}
              underlineColor="transparent"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              marginRight: 10,
              margin: 5,
            }}
          >
            <TextInput
              style={{
                width: 170,
                backgroundColor: "white",
                marginLeft: 5,
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              label={"Expiry"}
              underlineColor="transparent"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              bottom: 65,
              paddingLeft: 180,
              borderRadius: 25,
              marginLeft: 5,
              marginRight: 10,
              margin: 5,
            }}
          >
            <TextInput
              style={{
                width: 170,
                backgroundColor: "white",
                marginLeft: 10,
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              label={"CVV"}
              underlineColor="transparent"
            />
          </View>
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
              }}
              onPress={() => {
                navigation.navigate("Confirmation");
              }}
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
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
