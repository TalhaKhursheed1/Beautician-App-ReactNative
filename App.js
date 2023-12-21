// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer'
// // import Signup from './src/screen/Signup';
// import LoginScreen from './src/screen/LoginScreen';
// import HomeScreen from './src/screen/HomeScreen';
// import RegisterScreen from './src/screen/RegisterScreen';
// import Payment from './src/screen/Payment';
// import Practice from './src/screen/Practice';
// import Splash from './src/screen/Splash';
// import Verify from './src/screen/Verify';
// import OTP from './src/screen/OTP';
// import Parent from './src/screen/Parent';
// import DrawerNavigator from './src/screen/Drawer/DrawerNavigator';
// import Profile from './src/screen/Drawer/Profile';
// import { createStackNavigator } from '@react-navigation/stack';



// export default function App() {
//   const Stack = createStackNavigator();
//   const Drawer = createDrawerNavigator();
 
//   return (
//     <NavigationContainer>
     
//       <Stack.Navigator  screenOptions={{headerShown: false}}> 
      
//       <Stack.Screen
//         name="Parent" component={Parent}/>
//       <Stack.Screen
//         name="HomeScreen" component={HomeScreen}/>
//       <Stack.Screen
//         name="Splash" component={Splash}/>
//         <Stack.Screen
//         name="Verify" component={Verify}/> 
//         <Stack.Screen
//         name="OTP" component={OTP}/> 
       

//       <Stack.Screen
//         // name="Signup" component={Signup}/>
//         //  <Stack.Screen
//         name="LoginScreen" component={LoginScreen}/>
//          <Stack.Screen
//         name="RegisterScreen" component={RegisterScreen}/>
//          {/* <Stack.Screen
//         name="HomeScreen" component={HomeScreen}/> */}
//          <Stack.Screen
//         name="Payment" component={Payment}/>
//           <Stack.Screen
//         name="Practice" component={Practice}/>
    
       
   
    
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// }
// // // function DrawerNavigator() {
// // //   return (
// // //     <Drawer.Navigator initialRouteName="Home">
// // //       <Drawer.Screen name="Home" component={HomeScreen} />
// // //       <Drawer.Screen name="Profile" component={Profile} />
// // //       {/* Add other drawer screens as needed */}
// // //     </Drawer.Navigator>
// // //   );
// // // }

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const HomeStack = () => {
//   return (
//     <Stack.Navigator  screenOptions={{headerShown: false}}> 
      
//       <Stack.Screen screenOptions={{headerShown: true}}
//       name="HomeScreen" component={HomeScreen}/>

//       <Stack.Screen
//       name="Parent" component={Parent}/>
//     <Stack.Screen
//       name="Splash" component={Splash}/>
//       <Stack.Screen
//       name="Verify" component={Verify}/> 
//       <Stack.Screen
//       name="OTP" component={OTP}/> 
//     <Stack.Screen
//       // name="Signup" component={Signup}/>
//       //  <Stack.Screen
//       name="LoginScreen" component={LoginScreen}/>
//        <Stack.Screen
//       name="RegisterScreen" component={RegisterScreen}/>
//        {/* <Stack.Screen
//       name="HomeScreen" component={HomeScreen}/> */}
//        <Stack.Screen
//       name="Payment" component={Payment}/>
//         <Stack.Screen
//       name="Practice" component={Practice}/>
  
     
 
  
//     </Stack.Navigator>
//   );
//   }
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
//         <Drawer.Screen
//           name="StackNav"
//           options={{ headerShown: false }}
//           component={HomeStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// const HomeStack = () => (
//   <Stack.Navigator screenOptions={{headerShown:false}}>
//     {/* <Stack.Screen 
//       name="HomeScreen" component={HomeScreen} options={{headerShown: true}} />
//     <Stack.Screen name="Parent" component={Parent} />
//     <Stack.Screen name="Splash" component={Splash} />
//     <Stack.Screen name="Verify" component={Verify} />
//     <Stack.Screen name="OTP" component={OTP} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//     <Stack.Screen name="Payment" component={Payment} />
//     <Stack.Screen name="Practice" component={Practice} />
//     <Stack.Screen name="Custom" component={CustomDrawer} />
//     <Stack.Screen name="Profile" component={Profile} /> */}
//   </Stack.Navigator>
// );
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
// import Signup from './src/screen/Signup';
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import Payment from './src/screen/Payment';
import Practice from './src/screen/Practice';
import Splash from './src/screen/Splash';
import Verify from './src/screen/Verify';
import OTP from './src/screen/OTP';
import Parent from './src/screen/Parent';
import Profile from './src/screen/Drawer/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './src/screen/Drawer/CustomDrawer';
import Services from './src/screen/Services';
import Book from './src/screen/Book';
import Order from './src/screen/Order';
import Confirmation from './src/screen/Confirmation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen} />
      <Stack.Screen
        name="Profile"
        options={{}}
        component={Profile} />
    </Stack.Navigator>
  );
};


export default function App() {
  return (

    <NavigationContainer>

      <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <CustomDrawer {...props} />}>
        <Stack.Screen 
      name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Parent" component={Parent} />
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Verify" component={Verify} />
    <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="Practice" component={Practice} />
    <Stack.Screen name="Custom" component={CustomDrawer} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Services" component={Services} />
    <Stack.Screen name="Book" component={Book} />
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="Confirmation" component={Confirmation} />

        <Drawer.Screen
          name="StackNav"
          options={{ headerShown: false }}
          component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

