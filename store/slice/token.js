import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const token = createSlice({
	name: 'token',
    initialState: false,
    reducers: {
        setChangeValue: (state, actions)=>{
            return actions.payload
            
        }
    }
})
export const getTokenThunk = () => async(dispatch) =>{
    const token = await AsyncStorage.getItem("userToken")
    if(token){
        dispatch( setChangeValue(true))
    }else{
        dispatch( setChangeValue(false))
    }

}

export const { setChangeValue } = token.actions;

export default token.reducer;