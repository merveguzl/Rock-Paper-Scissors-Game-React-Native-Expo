import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const width = Dimensions.get("window").width;

const Game = () => {
    const [random, setRandom] = useState(0);
    const [selected, setSelected] = useState("");
    const [score, setScore] = useState(0);
    const [control, setControl] = useState(false);
    const [final, setFinal] = useState("");

    const onRandom = (select) =>{
        var randomtemp = Math.floor(Math.random() * 3) + 1;
        setRandom(randomtemp)
        setSelected(select)
        switch (select) {
            case randomtemp:
                setFinal("Berabere")
                break;
            case 1:
                if(randomtemp === 2){
                    setScore(score+1)
                    setFinal("Kazandınız")
                }
                else{
                    setScore(score-1)
                    setFinal("Kaybettiniz")
                }
            break;
            case 2:
                if(randomtemp === 1){
                    setScore(score-1)
                    setFinal("Kaybettiniz")
                }
                else{
                    setScore(score+1)
                    setFinal("Kazandınız")
                }
            break;
            case 3:
                if(randomtemp === 2){
                    setScore(score-1)
                    setFinal("Kaybettiniz")
                }
                else{
                    setScore(score+1)
                    setFinal("Kazandınız")
                }
            break;
        }
        setControl(true)
    }

    return (
      <View style={styles.container} >
          <View style={styles.scoreContainer} >
              <Text>
                  Score : {score}
              </Text>
          </View>
          {control === false ? (
            <>
                <View style={styles.circle} />
                <TouchableOpacity style={[styles.button, styles.buttonPaper]} 
                    onPress={()=>onRandom(1)}
                >
                    <Image source={require("../assets/hi.png")} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonRock]} 
                    onPress={()=>onRandom(2)}
                >
                   <Image source={require("../assets/fist.png")} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonScissor]} 
                    onPress={()=>onRandom(3)}
                >
                   <Image source={require("../assets/hand-gesture.png")} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
            </>
          ):(
            <>
                <View style={[styles.button,{top:200, left:20}]}>
                    <Image source={ selected === 1 ? require("../assets/hi.png") : (selected === 2 ? require("../assets/fist.png") : require("../assets/hand-gesture.png"))} 
                        style={styles.image} resizeMode="contain" 
                    />
                </View>
                <View style={[styles.button,{top:200, right:20}]}>
                    <Image source={ random === 1 ? require("../assets/hi.png") : (random === 2 ? require("../assets/fist.png") : require("../assets/hand-gesture.png"))} 
                        style={styles.image} resizeMode="contain" 
                    />
                </View>
                <Text style={styles.final} >
                    {final}
                </Text>
                <TouchableOpacity style={styles.buttonFinal} onPress={()=>setControl(false)} >
                    <Text style={{color:'#fff', fontWeight:'700'}} >
                        Tekrar Deneyin
                    </Text>
                </TouchableOpacity>
            </>
          )}
          
      </View>
    );
}

export default Game

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#151A35',
    },
    image:{
      width:60,
      height:60,
      borderRadius:45,
      resizeMode:"contain" 
    },
    button:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'#ffff',
        position:'absolute',
        alignItems:"center",
        justifyContent:"center"
    },
    buttonPaper: {
        top:200,
        left:(width-100)/2
    },
    buttonRock:{
        right:20,
        top:400
    },
    buttonScissor:{
        top:400,
        left:20
    },
    scoreContainer:{
        top:100,
        width:100,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    final:{
        top:400,
        color:'#ffff',
        position:'absolute',
        width:'100%',
        textAlign:"center",
        fontSize:20
    },
    buttonFinal:{
        height:50,
        width:300,
        backgroundColor:"#BC10A1",
        top:500,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        left:(width-300)/2
    }
  });