import React from 'react';
import { Image,View,StyleSheet} from 'react-native';

function ViewImageScreen(props) {
    return (
       <View style={styles.container}>
           <View style={styles.close}></View>
           <View style={styles.delete}></View>
        <Image resizeMode="contain" style={styles.imagetwo} source={require("../../assets/chair.jpg")}></Image>
        </View>)
    };
const styles = StyleSheet.create({
    imagetwo:{
        height:"100%",
        width:"100%"
    },
   container:{
       backgroundColor:"#000",
       flex:1,
   },
       close:{
           width:50,
           height:50,
           backgroundColor:"#fc5c65",
           position:"absolute",
           top:40,
           left:30,
           
       },
       delete:{
        width:50,
        height:50,
        backgroundColor:"#4ecdc4",
        position:"absolute",
        top:40,
        right:30,

    }

})
export default ViewImageScreen ;