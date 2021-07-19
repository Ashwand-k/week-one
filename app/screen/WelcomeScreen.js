import React from 'react';
import { ImageBackground,StyleSheet,View,Image,Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../../assets/background.jpg")}>
            <View style={styles.logoandtext}>
            <Image style={styles.logocss} source={require("../../assets/logo-red.png")}></Image>
            <Text>Sell wat you dont need</Text>
            </View>
<View style={styles.login}></View>
<View style={styles.register}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    login:{
        width:'100%',
        height:60,
        backgroundColor:'#fc5c65'
    },
    register:{
        width:'100%',
        height:60,
        backgroundColor:'#4ecdc4'
    },
    logocss:{
        width:100,
        height:100,
       alignItems:'center'
       
    },
    logoandtext:{
       
        position:"absolute",
        top:80,
       
    }
})

export default WelcomeScreen;