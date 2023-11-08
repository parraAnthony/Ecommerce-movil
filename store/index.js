import { configureStore } from '@reduxjs/toolkit'
import articles from './slice/articles'
import token from './slice/token'
import purchase from "./slice/purchase"
import cartList from './slice/cartList'
import articleDetails from './slice/articleDetails'

export default configureStore({
  reducer: {
        articles,
        token,
        purchase,
        cartList,
        articleDetails,
	}
})