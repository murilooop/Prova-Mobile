import { StyleSheet, Text, View, TextInput, Button,ScrollView } from 'react-native';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.loginTitle}>Login</Text>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={'#000'}
            />
            <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor={'#000'}
            />
        </View>
        <Button
        onPress={() => navigation.navigate('Estoki')}
        title='Entrar'
        ></Button>
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
    
  }
});