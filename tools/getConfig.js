import AsyncStorage from "@react-native-async-storage/async-storage";


const getConfig = async() => { 
   return {  
    headers: { Authorization: `Bearer ${await AsyncStorage.getItem("userToken")}` }
    }
};
export default getConfig;