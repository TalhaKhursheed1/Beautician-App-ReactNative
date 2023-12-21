import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'


const Signup = ({navigation}) => {
  return (
    <View>
    <ImageBackground  blurRadius={6}
        style={{
        height: 700,
        width: 420,
        
      }}
      source={{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4d28jx0H5sOk0f8tu5T2bMRcqXsnv_Xg60nyXdJAiYnkBoH86zzvfaJOqc0A_uC2gGvA&usqp=CAU",
      }}>
    
    <TouchableOpacity style={{
       marginLeft:30,
      marginRight:70,
      borderRadius:20,
      borderWidth:1,
      marginTop:250,
      backgroundColor:'blue',
     
     
      
    }} onPress={()=> navigation.navigate('RegisterScreen')}>
    <Text style={{
        fontSize:20,
        color:'white',
        textAlign:'center',
        margin:20, 
        

      }}
      >Signup Here </Text>
    </TouchableOpacity>

    

    </ImageBackground>  
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})