import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getTokenThunk } from "../store/slice/token";

const Options =()=>{
    const token = useSelector(state => state.token)
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const logout =async()=> {
        await AsyncStorage.removeItem("userToken")
        await AsyncStorage.removeItem("userData")
        dispatch( getTokenThunk() )
    }
    return(
        <>
        <View>
           {token&&<Button title="Logout" onPress={logout()}/>}
            <Button title="Purchase" onPress={()=>navigate.navigate("Purchase")}/>
            <Button title="Login" onPress={()=>navigate.navigate("Login")}/>
            <Button title="register" onPress={()=>navigate.navigate("Register")}/>
            
        </View>
        </>
    )
}
export default Options;