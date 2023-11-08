import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const articles = createSlice({
	name: 'articles',
    initialState:[],
    reducers: {
        setArticles: (state, action) => {
            return action.payload;
        },
    }
})

export const getArticlesThunk =()=>(dispatch)=>{

    axios
        .get("https://ecommerce-api-l3eo.onrender.com/products")
        .then(resp => dispatch(setArticles(resp.data)))
        .catch(error => Alert.alert("We're sorry, we are experiencing technical issues. Please try again later."))
}

export const filterArticlesByCategoryThunk = (id) => (dispatch) => {

    axios
    .get(`https://ecommerce-api-l3eo.onrender.com/products?categoryId=${id}`)
    .then(resp => dispatch(setArticles(resp.data)))
    .catch(error => console.error(error))

}

export const searchArticlesThunk = (searchTerm) => (dispatch) => {

    
    axios
        .get(`https://ecommerce-api-l3eo.onrender.com/products?title=${searchTerm}`)
        .then(resp => {
            dispatch(setArticles(resp.data));
        })
        .catch(error => {
            console.error(error);
        })

};

export const { setArticles } = articles.actions;

export default articles.reducer;