import { StyleSheet, Text, View,Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Slider from "@react-native-community/slider";


const Filter = () => {
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
  
  return (
    <View>
      <Modal
              visible={filter}
              transparent={true}
              animationType="slide"
              style={{}}
            >
            <View style={{
                 
                 

            }} />
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex:1,
                  backgroundColor:'rgba(0,0,0,0.5)'
                  
                  
                }}
              >
                <View
                  style={{
                    borderTopLeftRadius: 25,
                    borderTopEndRadius: 25,
                    width: "100%",
                    height: 400,
                    backgroundColor: "#ffff",
                    
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
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
                        bottom: 50,
                      }}
                      onPress={() => setFilter(false)}
                    >
                      <Image
                        style={{
                          margin: 15,
                        }}
                        source={require("../Imagess/cross.png")}
                      />
                    </TouchableOpacity>
                    <View style={{}}>
                      <Text
                        style={{
                          color: "grey",
                          paddingLeft: 20,
                        }}
                      >
                        Distance
                      </Text>
                    </View>

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
                    {/* <Text style={{
                       textAlign:'left',
                       paddingLeft:10,
                    }}>
                      {isSliderAtLow ? sliderValue: null }
                    </Text>


                    <Text style={{
                      textAlign:'right',
                      margin:4,
                    }}>
                              {isSliderAtExtreme ? sliderValue: null }
                    </Text>
                     */}
                    {/* <Text style={{
                      textAlign:'left',
                      bottom:20,
                    }}> {
                      sliderValue ==0 ? 0 : null
                    }{sliderValue}KM</Text> */}

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
                        { textAlign: "center", marginRight: 55,  bottom: 10, },
                        
                      ]}
                    >
                     {isSliderAtMid ? `${sliderValue}KM` : null}
                     {/* {sliderValue ==0 ? null : "40"}      */}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        isSliderAt ? "grey" : textStyles.lightText,
                        { textAlign: "right", marginEnd:20, bottom:25,},
                      ]}
                    >
                    {sliderValue ==40 ? null : ""}
                      {sliderValue}KM
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({})