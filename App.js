import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import Register from "./components/Register"
import Login from "./components/Login"
import store from "./store"
import NavBar from './components/NavBar';
import ProductDetails from "./components/ProductDetails";
import Purchase from "./components/Purchase";
import ShoppingCart from './components/ShoppingCart';
import Options from './components/Options';

export default function App() {
  const Stack = createNativeStackNavigator()
  
  return (
    <Provider store={store}>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <NavBar/>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name='ShoppingCart' component={ShoppingCart}/>
          <Stack.Screen name='Purchase' component={Purchase}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails}/>
          <Stack.Screen name='Options' component={Options}/>
        </Stack.Navigator>
      </NavigationContainer>      
    </Provider>
    
  );
}

