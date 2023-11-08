import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListProductThunk, setAddCardThunk } from "../store/slice/cartList"
import { ScrollView, Text, View } from "react-native"

const ShoppingCart =()=>{
    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cartList)
    useEffect(()=>{
        dispatch( getListProductThunk() )
    },[])

    const incrementArt = artCart => {
        dispatch (modifyQuantityProduct(artCart.id,artCart.quantity+1))
    }

    const decrementArt = artCart => {
        if(artCart.quantity > 1) {
            dispatch (modifyQuantityProduct(artCart.id,artCart.quantity-1))
        }
    }
    return(
        <ScrollView>
            {cartList.map(print => (
                <View key={print.id}>
                   <Text>{print.title}</Text> 
                </View>
            ))}
        </ScrollView>
    )
}
export default ShoppingCart;