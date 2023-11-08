import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../store/slice/purchase";

const Purchase =()=>{
    const dispatch = useDispatch()
    const purchase = useSelector(state => state.cartList)
    useEffect(()=>{
        dispatch( getPurchase() )
    },[])
    return (
        <ScrollView>
            {purchase.map(print => (
                <View key={print.id}>
                    {print.title}
                </View>
            ))}
        </ScrollView>
    )
}
export default Purchase;