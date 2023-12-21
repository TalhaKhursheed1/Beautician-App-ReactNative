import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";


const Book = () => {
  const route = useRoute();
  const { beauticianName, serviceName, price, rating, star, image } =
    route.params;
  const nav = useNavigation();
  const [click, setClick] = useState(null);
  let Time = [
    {
      id: "1",
      time: " 10:00 AM",
    },
    {
      id: "2",
      time: " 11:00 AM",
    },
    {
      id: "3",
      time: " 12:00 PM",
    },
    {
      id: "4",
      time: " 1:00 PM",
    },
    {
      id: "5",
      time: " 2:00 PM",
    },
    {
      id: "6",
      time: " 3:00 PM",
    },
    {
      id: "7",
      time: " 4:00 PM",
    },
    {
      id: "8",
      time: " 5:00 PM",
    },
    {
      id: "9",
      time: " 6:00 PM",
    },
    {
      id: "10",
      time: " 7:00 PM",
    },
    {
      id: "11",
      time: " 8:00 PM",
    },
    {
      id: "12",
      time: " 9:00 PM",
    },
  ];

  const handleTimeSelection = (id) => {
    setClick(id === click ? null : id);
  };

  const orderPreview = (orderDetails) => {
    // Replace "Order" with the actual name of your Order screen
    nav.navigate("Order", orderDetails);
  };

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
          onPress={() => nav.goBack("Services")}
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
          {beauticianName}
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
        <Text
          style={{
            margin: 10,
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Available Slots
        </Text>
        <View>
          <FlatList
            data={Time}
            numColumns={3}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={[
                    styles.timeButton,
                    click === item.id && styles.selectedTime,
                  ]}
                  onPress={() => handleTimeSelection(item.id)}
                >
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {item.time}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text
          style={{
            margin: 10,
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
              backgroundColor: "#5C128C",
              justifyContent: "center",
              top: 10,
              margin: 40,
              alignSelf: "center",
              width: 200,
              height: 40,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              + Add more Services
            </Text>
          </TouchableOpacity>
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
              bottom: 10,
            }}
            onPress={() =>
              orderPreview({
                beauticianName,
                serviceName,
                price,
                rating,
                star,
                image,
                // Add rating from selected beautician
                timeSlot: Time.find((item) => item.id === click)?.time, 
              })
            }
          >
            <Text
              style={{
                margin: 10,
                color: "white",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Proceed to Order Preview
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  timeButton: {
    backgroundColor: "#ffff",
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  selectedTime: {
    backgroundColor: "#FF0F88", // Change to the color you want when selected
  },
});
