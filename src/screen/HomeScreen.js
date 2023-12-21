{
  /* {
        show ? <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    /> 
    : null
    }
     */
}
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";

const HomeScreen = () => {
  let catagories = [
    {
      id: "1",
      name: "Face",
      image: require("../Imagess/facial.png"),
      color: "#D7E8D6",
    },
    {
      id: "2",
      name: "Hair Care",
      image: require("../Imagess/haircare.png"),
      color: "#FADCDC",
    },
    {
      id: "3",
      name: "Makeup",
      image: require("../Imagess/makeup.png"),
      color: "#D0F1EF",
    },
    {
      id: "4",
      name: "Manicure",
      image: require("../Imagess/manicure.png"),
      color: "#EADDF5",
    },
  ];

  let Beauticians = [
    {
      id: 1,
      name: "Ben Johnson",
      image: require("../Imagess/Mask.png"),
      star: require("../Imagess/star.png"),
      rating: "5.0",
      category: "Manicure",
    },
    {
      id: 2,
      name: "Ben Johnson",
      image: require("../Imagess/Mask2.png"),
      star: require("../Imagess/star.png"),
      rating: "5.0",
      category: "Face",
    },
    {
      id: 3,
      name: "Ben Johnson",
      image: require("../Imagess/Mask3.png"),
      star: require("../Imagess/star.png"),
      rating: "5.0",
      category: "Makeup",
    },
  ];
  let services = [
    {
      id: 1,
      product: "Full Hand + Mid Arms Waxing",
      price: "3,000 - 5,000",
      offer: "2 Beauticians",
    },
    {
      id: 2,
      product: "Extra Polisher (Bridal)",
      price: "2,000 - 3,000",
      offer: "2 Beauticians",
    },
    {
      id: 3,
      product: "Only Streaks (No Base)",
      price: "6,000 - 9,000",
      offer: "2 Beauticians",
    },
    {
      id: 4,
      product: "Full Hand + Mid Arms Waxing",
      price: "3,000 - 5,000",
      offer: "2 Beauticians",
    },
    {
      id: 5,
      product: "Only Streaks (No Base)",
      price: "2,000 - 3,000",
      offer: "2 Beauticians",
    },
  ];
  let deals = [
    {
      id: 1,
      name: "Signature Mehandi",
      price: "10,000",
      image: require("../Imagess/Mehandi.png"),
    },
    {
      id: 2,
      name: "Junior Artist",
      price: "25,000",
      image: require("../Imagess/Artist.png"),
    },
  ];

  const [filter, setFilter] = useState(false);

  const [sliderValue, setSliderValue] = useState(0);
  // const isSliderAtExtreme = sliderValue === 100 || sliderValue === null;
  const isSliderAtLow = sliderValue === null || sliderValue === 0;
  const isSliderAtMid = sliderValue === null || sliderValue === 40;
  const isSliderAt = sliderValue === 40 || sliderValue === 100;

  const textStyles = StyleSheet.create({
    lightText: {
      color: "gray",
      // Change this to the color you want for light text
    },
  });

  const [onClick, setOnClick] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Services");
  const [show, setShow] = useState(false);
  const [cross, setCross] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    { label: "Face care" },
    { label: "Makeup" },
    { label: "Manicure" },
    { label: "HairCare" },
    { label: "Facial" },
  ];

  const servicesData = [
    {
      service: "Full Hand + Mid Arms Waxing",
      beauticians: [
        {
          name: "Ben johnson",
          rating: 4.8,
          image: require("../Imagess/Mask6.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 100,

          // Add more details as needed
        },
        {
          name: "John Smith",
          rating: 4.5,
          image: require("../Imagess/Mask5.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 80,
          // Add more details as needed
        },
        {
          name: "Ave Beoton",
          rating: 4.9,
          image: require("../Imagess/Mask7.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 100,
          // Add more details as needed
        },
      ],
    },
    {
      service: "Extra Polisher (Bridal)",
      beauticians: [
        {
          name: "John Smith",
          rating: 4.8,
          image: require("../Imagess/Mask5.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 80,
          // Add more details as needed
        },
        {
          name: "Sophia Starck",
          rating: 4.9,
          image: require("../Imagess/Mask4.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 100,
        },
      ],
    },
    {
      service: "Only Streaks (No Base)",
      beauticians: [
        {
          name: "John Smith",
          rating: 4.8,
          image: require("../Imagess/Mask5.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 80,
        },
        {
          name: "Ave Beoton",
          rating: 4.9,
          image: require("../Imagess/Mask7.png"),
          book: "Book Now",
          star: require("../Imagess/star.png"),
          price: 100,
          // Add more details as needed
        },
      ],
    },
    // Add more services and their associated beauticians
  ];

  // Function to navigate to ServiceScreen when a service is clicked
  const navigateToServiceScreen = (serviceName) => {
    navigation.navigate("Services", { service: serviceName, servicesData });
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
            top: 22,
          }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={require("../Imagess/Menu.png")}
          />
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
          Home
        </Text>
        {/* <DrawerNavigator/> */}
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
          backgroundColor: "#F4F6FA",

          borderTopLeftRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View>
          <TextInput
            style={{
              height: 50,
              width: 270,
              margin: 15,
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
            label={"  Search by Area/Services"}
            underlineColor="transparent"
          />
          <Image
            style={{
              bottom: 58,
              margin: 10,
              marginLeft: 20,
            }}
            source={require("../Imagess/search.png")}
          />
        </View>
        <View
          style={{
            bottom: 100,
            marginHorizontal: 300,
            backgroundColor: "#FFFFFF",
            width: 50,
            height: 50,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity onPress={() => setFilter(true)}>
            <Image
              style={{
                height: 20,
                width: 20,
                margin: 13,
              }}
              source={require("../Imagess/filter.png")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 80,
            paddingBottom: 100,
          }}
          style={{
            bottom: 90,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              bottom: 90,
              padding: 10,
            }}
          >
            Catagories
          </Text>

          <View style={{}}>
            <FlatList
              style={{
                bottom: 90,
              }}
              data={catagories}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: item.color,
                    margin: 5,
                    marginLeft: 10,
                    width: 110,
                    padding: 10,
                    height: 100,
                    borderRadius: 10,
                    borderTopEndRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      top: 10,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{
                        height: 45,
                        width: 35,
                      }}
                      source={item.image}
                    />
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        color: "grey",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              bottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                margin: 10,
                padding: 10,
              }}
            >
              Nearby Beauticians
            </Text>
            <View
              style={{
                bottom: 45,
                marginHorizontal: 330,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("../Imagess/map.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                style={{
                  bottom: 40,
                  height: 230,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
                data={Beauticians}
                horizontal={true}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      margin: 5,

                      width: 160,
                      padding: 10,
                      height: 220,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{
                        width: 150,
                        height: 140,
                        borderTopLeftRadius: 15,
                        borderTopEndRadius: 15,
                      }}
                      source={item.image}
                    />
                    <View
                      style={{
                        backgroundColor: "#ffff",
                        width: 150,
                        height: 200,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "500",
                          margin: 10,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Image
                        style={{
                          marginLeft: 10,
                        }}
                        source={item.star}
                      />

                      <Text
                        style={{
                          bottom: 20,
                          margin: 5,
                          marginLeft: 30,
                          color: "grey",
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View
              style={{
                bottom: 25,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Services
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  alignSelf: "flex-end",
                  bottom: 15,
                }}
              >
                <Text
                  style={{
                    color: "#FF0F88",
                    fontSize: 14,
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 380,
                backgroundColor: "#FFFFFF",
                alignSelf: "center",
                height: 290,
                borderRadius: 25,
                flexDirection: "row",
                bottom: 20,
              }}
            >
              <FlatList
                data={services}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity
                      style={{
                        width: 350,
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 90,
                        borderRadius: 10,
                        marginTop: 10,
                        flexDirection: "row",
                      }}
                      onPress={() => {
                        navigateToServiceScreen(item.product);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#5C128C",
                          fontWeight: "500",
                          padding: 5,
                          paddingLeft: 16,
                          width: 200,
                        }}
                      >
                        {item.product}
                      </Text>
                      <View
                        style={{
                          top: 37,
                          right: 180,
                        }}
                      >
                        <Text
                          style={{
                            color: "grey",
                          }}
                        >
                          Price
                        </Text>
                      </View>
                      <View
                        style={{
                          margin: 5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            top: 15,
                            fontSize: 14,
                          }}
                        >
                          RS. {item.price}
                        </Text>

                        <Text
                          style={{
                            color: "#FF0F88",
                            margin: 5,
                            top: 20,
                          }}
                        >
                          {item.offer}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            right: 235,
                          }}
                        >
                          <Text
                            style={{
                              color: "grey",
                            }}
                          >
                            Offered By:
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
            <Modal
              style={{
                width: "100%",
                marginLeft: 0,
                marginBottom: 0,
              }}
              isVisible={filter}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 500,
                  backgroundColor: "white",
                  width: "100%",
                  borderTopLeftRadius: 20,
                  borderTopEndRadius: 20,
                  shadowOpacity: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "500",
                    margin: 15,
                    paddingLeft: 10,
                  }}
                >
                  Filter
                </Text>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      alignSelf: "flex-end",
                      bottom: 40,
                    }}
                    onPress={() => {
                      setFilter(false);
                    }}
                  >
                    <Image
                      style={{
                        margin: 15,
                      }}
                      source={require("../Imagess/cross.png")}
                    />
                  </TouchableOpacity>

                  {show ? (
                    <Calendar
                      onDayPress={(day) => {
                        setSelected(day.dateString);
                        setShow(false);
                      }}
                      markedDates={{
                        [selected]: {
                          selected: true,
                          disableTouchEvent: true,
                          selectedDotColor: "orange",
                        },
                      }}
                    />
                  ) : null}
                  <View
                    style={{
                      bottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "grey",
                        paddingLeft: 5,
                        margin: 10,
                      }}
                    >
                      Distance
                    </Text>
                  </View>
                  <View
                    style={{
                      bottom: 10,
                    }}
                  >
                    <Slider
                      style={{ width: 350, height: 40, alignSelf: "center" }}
                      minimumValue={0}
                      maximumValue={100}
                      value={sliderValue}
                      onValueChange={(value) => setSliderValue(value)}
                      step={1}
                      minimumTrackTintColor="#5C128C"
                      thumbTintColor={
                        sliderValue === 0
                          ? "#fff"
                          : sliderValue === 40
                          ? "#FF0F88"
                          : sliderValue === 100
                          ? "#FF0F88"
                          : "#ffff"
                      }
                    />

                    <Text
                      style={{
                        textAlign: "left",
                        paddingLeft: 10,
                        top: 5,
                      }}
                    >
                      {isSliderAtLow ? `${sliderValue}KM` : null}
                    </Text>

                    <Text
                      style={[
                        styles.text,
                        isSliderAt ? "grey" : textStyles.lightText,
                        { textAlign: "center", marginRight: 55, bottom: 10 },
                      ]}
                    >
                      {isSliderAtMid ? `${sliderValue}KM` : null}
                      {/* {sliderValue ==0 ? null : "40"}      */}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        isSliderAt ? "grey" : textStyles.lightText,
                        { textAlign: "right", marginEnd: 20, bottom: 25 },
                      ]}
                    >
                      {sliderValue == 40 ? null : ""}
                      {sliderValue}KM
                    </Text>
                  </View>
                  <View
                    style={{
                      bottom: 20,
                      margin: 5,
                      borderRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopEndRadius: 10,
                      borderWidth: 0.5,
                      marginLeft: 20,
                      marginRight: 20,
                      borderColor: "grey",
                    }}
                  >
                    <TouchableOpacity onPress={() => setOnClick(true)}>
                      <Text
                        style={{
                          flexDirection: "row",
                          width: "90%",
                          height: 40,
                          color: "grey",
                          marginTop: 5,
                          padding: 10,
                          alignSelf: "center",
                          alignItems: "center",
                        }}
                      >
                        {selectedValue}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      alignSelf: "flex-end",
                      bottom: 50,
                      right: 30,
                    }}
                  >
                    <TouchableOpacity>
                      <Image source={require("../Imagess/down.png")} />
                    </TouchableOpacity>
                  </View>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={onClick}
                    onRequestClose={() => {
                      setOnClick(false);
                    }}
                  >
                    <TouchableWithoutFeedback onPress={() => setOnClick(false)}>
                      <View
                        style={{
                          width: "115%",
                          right: 20,
                          flex: 1,
                          top: 145,

                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                      />
                    </TouchableWithoutFeedback>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        maxHeight: "60%",
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderRadius: 20,
                      }}
                    >
                      <ScrollView>
                        {options.map((option, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              padding: 20,
                              borderBottomWidth: 1,
                              margin: 5,
                              borderBottomColor: "#ccc",
                            }}
                            onPress={() => {
                              setSelectedValue(option.label);
                              setOnClick(false);
                            }}
                          >
                            <Text>{option.label}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </Modal>

                  <View
                    style={{
                      bottom: 20,
                      margin: 15,
                      borderRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopEndRadius: 10,
                      borderWidth: 0.5,
                      marginLeft: 20,
                      marginRight: 20,
                      borderColor: "grey",
                    }}
                  >
                    <Text
                      style={{
                        flexDirection: "row",
                        width: "90%",
                        height: 40,
                        color: "grey",
                        marginTop: 5,
                        padding: 10,
                        alignSelf: "center",
                        alignItems: "center",
                      }}
                    >
                      Availability
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      alignSelf: "flex-end",
                      bottom: 70,
                      right: 30,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setShow(true);
                      }}
                    >
                      <Image source={require("../Imagess/calendar.png")} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 50,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#5C128C",
                        fontSize: 20,
                        fontWeight: "bold",
                        width: 150,
                      }}
                    >
                      Clear Filter
                    </Text>
                    <TouchableOpacity onPress={() => setFilter(false)}>
                      <View
                        style={{
                          backgroundColor: "#FF0F88",
                          padding: 10,
                          borderRadius: 10,
                          width: 165,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 20,
                            textAlign: "center",
                          }}
                        >
                          Apply
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
