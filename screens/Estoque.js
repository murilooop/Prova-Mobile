
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import Tenis1 from '../images/tenis1.jpg';
import Tenis2 from '../images/tenis2.jpg';
import Tenis3 from '../images/tenis3.jpg';
import Tenis4 from '../images/tenis4.jpg';
import Tenis5 from '../images/tenis5.jpg';
import { useState } from 'react';



export default function Estoque() {
    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador(contador+1);
    }
    function Diminuir(){
        if(contador > 0){
            setContador(contador-1);
        } 
    }

  return (
   
        <View style = {styles.container}>
        <ScrollView>
            <Text style={styles.loginTitle}>Estoque</Text>
            <View style={styles.line}>
                <View style = {styles.images}>
                    <Image style = {styles.img} source={Tenis1}/>
                    <Text style = {styles.text}>Tenis Adidas</Text>
                    <Text style = {styles.subtext}>Branco, 40</Text>
                    <View>
                    <View style={styles.buttonView}>
                        <Button 
                        title='+'
                        onPress={Aumentar}
                        ></Button>
                        <Button
                        title='-'
                        onPress={Diminuir}
                        ></Button>
                    </View>
            </View>
                </View>
                <View style = {styles.images}>
                    <Image style = {styles.img} source={Tenis2}/>
                    <Text style = {styles.text}>Tenis Adidas</Text>
                    <Text style = {styles.subtext}>Azul, 38</Text>
                    <View style={styles.buttonView}>
                        <Button 
                        title='+'
                        onPress={Aumentar}
                        ></Button>
                        <Button
                        title='-'
                        onPress={Diminuir}
                        ></Button>
                    </View>
                </View>
            </View>
            <View style={styles.line}>
                <View style = {styles.images}>
                    <Image style = {styles.img} source={Tenis3}/>
                    <Text style = {styles.text}>Tenis Adidas</Text>
                    <Text style = {styles.subtext}>Rosa, 24</Text>
                    <View style={styles.buttonView}>
                        <Button 
                        title='+'
                        onPress={Aumentar}
                        ></Button>
                        <Button
                        title='-'
                        onPress={Diminuir}
                        ></Button>
                    </View>
                    
                </View>
                <View style = {styles.images}>
                    <Image style = {styles.img} source={Tenis4}/>
                    <Text style = {styles.text}>Tenis Adidas</Text>
                    <Text style = {styles.subtext}>Preto, 27</Text>
                    <View style={styles.buttonView}>
                        <Button 
                        title='+'
                        onPress={Aumentar}
                        ></Button>
                        <Button
                        title='-'
                        onPress={Diminuir}
                        ></Button>
                    </View>
                </View>
            </View>
            <View style={styles.line}>
                <View style = {styles.images}>
                    <Image style = {styles.img} source={Tenis5}/>
                    <Text style = {styles.text}>Tenis Adidas</Text>
                    <Text style = {styles.subtext}>Preto, 33</Text>
                    <View style={styles.buttonView}>
                        <Button 
                        title='+'
                        onPress={Aumentar}
                        ></Button>
                        <Button
                        title='-'
                        onPress={Diminuir}
                        ></Button>
                    </View>
                </View>
            </View>
            <View>
                <Text style = {styles.counter}>Quantidade: {contador}</Text>
            </View>
        </ScrollView>
        </View>
    
  );
}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    gap:'30px'
  },
  loginTitle:{
    color:"#000",
    fontSize:50,
  },
  input:{
    borderWidth: 1,
    padding: 10,
  },
  img:{
    width: '100px',
    height:'100px'
  },
  line:{
    flexDirection:'row',
  },
  buttonView:{
    justifyContent:'center',
    flexDirection:'row'
  },
  text:{
    fontSize:20,
  },
  subtext:{
    fontSize:15,
  },
  images:{
    padding:'10px'
  },
  counter:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'900'
  }
});