import { StyleSheet, Text, View, TextInput, Button,ScrollView, Image } from 'react-native';
import FaleWithWe from '../images/a.jpg'

export default function FaleConosc({navigation}) {
    const [nome, setNome] = useState = ("");
    const [email, setEmail] = useState = ("");
    const [mensagem, setMensagem] = useState = ("");
  return (
    <View style={styles.container}>
        <Text style={styles.loginTitle}>Fale Conosco</Text>
        <Image style = {styles.img} source={FaleWithWe}/>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Nome'
            placeholderTextColor={'#000'}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={'#000'}
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder='Mensagem'
            placeholderTextColor={'#000'}
            value={mensagem}
            onChangeText={setMensagem}
            />
        </View>
        <View>
            <Text style = {styles.text}>Olá {nome}, seu email é {email} e a mensagem enviada foi: {mensagem}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'white',
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
    width:'100px',
    height: '100px'
  },
  text:{
    fontSize:15,
    fontWeight:'500'
  }
});