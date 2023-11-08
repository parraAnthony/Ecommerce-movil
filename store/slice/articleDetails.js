import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const articleDetails = createSlice({
		name: 'articleDetails',
    initialState: [],
    reducers: {
        setValue: (state, actions)=>{
            return actions.payload
        }
    }
})
export const getOneArticleThunk = id => dispatch =>{
    axios
    .get(`https://ecommerce-api-l3eo.onrender.com/products/${id}`)
    .then((resp) => {
        dispatch(setValue(resp.data))
    })
    .catch((error) => Alert.alert(""))
}

export const { setValue } = articleDetails.actions;

export default articleDetails.reducer;