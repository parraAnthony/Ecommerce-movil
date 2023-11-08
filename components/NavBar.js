import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTokenThunk, setChangeValue } from '../store/slice/token';

const NavBar = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const loginUser = useSelector(state => state.token)
    useEffect(()=>{
      dispatch( getTokenThunk() )
    },[loginUser])

    const styles = StyleSheet.create({
        navBar: {
        flex: 0.18,
        backgroundColor: "#325d88",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    
        }
    })
    return (
      <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>navigation.navigate("Options")}>
            <Icon name="bars" size={30} color="#900" />
        </TouchableOpacity>
        {loginUser&&
        //Logged-in user
        <TouchableOpacity onPress={()=>navigation.navigate("ShoppingCart")}>
            <Icon name="shopping-cart" size={30} color="#900" style={{ transform: [{ scaleX: -1 }] }}/>
        </TouchableOpacity>
        }
        {!loginUser&&
        //Non-logged in user
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Icon name="sign-in" size={30} color="#900" />
        </TouchableOpacity>
        }
      </View>
    );
  };


export default NavBar