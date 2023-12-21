import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Practice = () => {
  const [name, setName]= useState('Talha');  
  const [change, setChange]=useState(null);
  const update=()=>{
    setName('Name Updated: ALI')
  } 
  const changeName=()=>{
    if (name==true) {
      setName(false);setChange("Name changed: Talha");
    }
  else{
    setName(true);
  }
  }
  return (
    <View>
      <Text style={{
        fontSize:20,
        padding:10,
      }}>
        {name}
      </Text>
      <Text style={{
        fontSize:20,
        padding:10,
      }}>
        {change}
      </Text>
      <TouchableOpacity style={{
        backgroundColor:'blue',
        alignContent:'center',
        padding:10,
        marginTop:20,
      }}
      onPress={()=>{
        update()
      }}
      >
        <Text style={{
          color:'white',
          textAlign:'center',
        }}>
          Update name
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:'red',
        alignContent:'center',
        padding:10,
        marginTop:20,
      }}
      onPress={()=>{
        changeName()
      }}
      >
        <Text style={{
          color:'white',
          textAlign:'center',
        }}>
          Change name
        </Text>
      </TouchableOpacity> 
           <Info/>
           
    </View>
  )
}

const Info=()=>{
  const [count, setCount]= useState(0);
  const [data, setData]= useState(100);


        return(
          <View>
            <Text style={{
        fontSize:20,
        padding:10,
      }}>
              {count}
            </Text>
            <Text style={{
        fontSize:20,
        padding:10,
      }}>
              {data}
            </Text>
            <TouchableOpacity style={{
              backgroundColor:'green',
              alignContent:'center',
        padding:10,
        marginTop:20,

            }}
            
            onPress={()=>{
              setCount(count+1)
            }}
            >
              <Text style={{
                 color:'white',
          textAlign:'center',
              }}>
                  Update count
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor:'yellow',
              alignContent:'center',
              padding:10,
              marginTop:20,

            }}
            
            onPress={()=>{
              setData(data+1)
            }}
            >
              <Text style={{
                 color:'black',
          textAlign:'center',
              }}>
                  Update Data
              </Text>
            </TouchableOpacity>
            <Hook info={{data, count}}/>
          </View>
        )
}

const Hook=(props)=>{
 useEffect(()=>{
            console.warn('Data is updated')
 },[props.info.data])
 useEffect(()=>{
  console.warn('count is updated')
},[props.info.count])

        return(
          <View>
           <Text style={{
            fontSize:25,
            textAlign:'center',
            margin:10,
            color:'blue'           }}>
                User Component
           </Text>
           <Text>
            Data: {props.info.data}
           </Text>
           <Text>
            Count: {props.info.count}
           </Text>
          <Radio/>
          </View>
        )
}
const Radio=()=>{
        <TouchableOpacity>
          <View>
            <Text style={{
              fontSize:20,
            }}>
              Radio 1
            </Text>
          </View>
        </TouchableOpacity>
}

export default Practice

const styles = StyleSheet.create({})