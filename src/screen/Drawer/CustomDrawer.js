import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView style={{backgroundColor:'#FFFFFF'}}>
            <View style={{ backgroundColor: '#ffecf6', }}>
                <TouchableOpacity  >
                    <View
                        style={{
                            alignItems: 'flex-end',
                            paddingRight: 20,
                            paddingTop: 10
                        }}
                       
                    >
                       
                    </View>
                </TouchableOpacity>


                <View style={{ alignItems: 'center', padding: 30, }}>
                    <TouchableOpacity>
                      
                    </TouchableOpacity>
                    <Text style={{ color: '#212529', fontSize: 20 }}>Welcome!</Text>
                    <Text style={{ color: '#5C128C', fontSize: 22 }}>Jessica Rhodes</Text>
                </View>
            </View>

            <View>
                <DrawerItem
                    label="Home"
                    labelStyle={styles.DrawerMenuText}
                    onPress={() => {
                        props.navigation.navigate('HomeScreen')
                        // alert()
                    }}

                />
            </View>
            <View>
                <DrawerItem
                    label="Login"
                    labelStyle={styles.DrawerMenuText}
                    onPress={() => {
                        props.navigation.navigate('LoginScreen')
                    }}

                />
            </View>
            <View>
                <DrawerItem
                    label="Signup"
                    labelStyle={styles.DrawerMenuText}
                    onPress={() => {
                        props.navigation.navigate('RegisterScreen')
                    }}

                />
            </View>
            <View>
                <DrawerItem
                    label="Profile"
                    labelStyle={styles.DrawerMenuText}
                    onPress={() => {
                        props.navigation.navigate('Profile')
                    }}

                />
            </View>

            <View style={{ position: 'relative', right: 10, marginTop: 35 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                  
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                     
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25, gap: 10, borderTopWidth: .5, borderColor: '#707070', paddingTop: 15, paddingBottom: 15 }}>
                       
                        <Text style={{ color: '#FF0F88', fontSize: 20, fontWeight: 'bold' }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    DrawerMenuText: {
        fontSize: 20
    }
})