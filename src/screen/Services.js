import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Services = ({ route }) => {
  const { service, servicesData } = route.params;

  // Find the selected service's data from the servicesData array
  const selectedService = servicesData.filter(
    (item) => item.service === service
  );

  // Extract beauticians associated with the selected service
  let beauticians = [];
  if (selectedService.length > 0) {
    beauticians = selectedService[0].beauticians;
  }

  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(beauticians);


  const navigateToBook = (beautician) => {
    // Replace "CartScreen" with the actual name of your cart screen
    navigation.navigate("Book", {
      beauticianName: beautician.name,
      serviceName: service,
      price: beautician.price,
      rating:beautician.rating,
      star: beautician.star,
      image: beautician.image
    });
  };

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
          onPress={() => navigation.goBack("HomeScreen")}
        >
          <Image source={require("../Imagess/backbutton.png")} />
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
          Service Details
        </Text>
        <TouchableOpacity
          style={{
            top: 30,
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require("../Imagess/cart.png")}
          />
        </TouchableOpacity>
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
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 20,
            margin: 10,
          }}
        >
          {service}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            margin: 10,
            paddingRight: 10,
          }}
          onPress={() => {
            setToggle(!toggle);
          }}
        >
          <Image source={require("../Imagess/Sort.png")} />
        </TouchableOpacity>

        <Text style={{ paddingLeft: 15 }}>
          {beauticians.length} Beauticians
        </Text>

        <FlatList
          data={beauticians}
          renderItem={({ item }) => (
            <View
              style={{
                width: 350,
                backgroundColor: "#ffff",
                alignSelf: "center",
                height: 115,
                borderRadius: 15,
                marginTop: 15,
                flexDirection: "row",
              }}
            >
              <Image source={item.image} />
              <Text style={{ fontSize: 20, fontWeight: "500", width: 150 }}>
                {item.name}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  top: 75,
                  left: 120,
                  color: "#FF0F88",
                  fontWeight: "500",
                  fontSize: 20,
                }}
              >
                € {item.price}
              </Text>

              <View
                style={{
                  left: 30,
                  padding: 10,
                }}
              >
                <Image source={item.star} />
              </View>
              <Text
                style={{
                  left: 15,
                  margin: 8,
                  color: "grey",
                }}
              >
                {item.rating}
              </Text>
              <TouchableOpacity
                style={{
                  right: 10,
                  top: 70,
                  position: "absolute",
                  borderRadius: 5,
                  borderColor: "#5C128C",
                  borderWidth: 1,
                  height: 30,
                  width: 100,
                }}
                onPress={() => {
                  navigateToBook(item);
                }}
              >
                <Text
                  style={{
                    color: "#5C128C",
                    fontSize: 18,
                    textAlign: "center",
                    padding: 3,
                  }}
                >
                  {item.book}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
        {toggle ? (
          <View
            style={{
              width: 200,
              backgroundColor: "#ffff",
              alignSelf: "flex-end",
              height: 150,
              borderRadius: 10,
              top: 45,
              right: 22,
              shadowOpacity: 0.5,
              shadowColor: "grey",
              position: "absolute",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                let tempList = data.sort((a, b) =>
                  a.title > b.title ? 1 : -1
                );
                setData(tempList);
                setToggle(false);
              }}
            >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                let tempList = data.sort((a, b) => a.price - b.price);
                setData(tempList);
                setToggle(false);
              }}
            >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                Sort by Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                let tempList = data.sort((a, b) => b.rating - a.rating);
                setData(tempList);
                setToggle(false);
              }}
            >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                Sort by Rating
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
