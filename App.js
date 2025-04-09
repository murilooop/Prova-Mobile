import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login.js';
import Estoque from './screens/Estoque.js';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FaleConosco from './screens/FeleConosco.js'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Drawera() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Estoque" component={Estoque} />
      <Drawer.Screen name="FaleConosco" component={FaleConosco} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Estoki" component={Drawera}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
