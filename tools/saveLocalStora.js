import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveLocalStora = async (data)=>{

    await AsyncStorage.setItem("userToken", data.token);
    await AsyncStorage.setItem("userData", JSON.stringify(data.user))
}
export default saveLocalStora;