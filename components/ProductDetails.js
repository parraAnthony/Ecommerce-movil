import { Text, View } from "react-native"
import { useSelector } from "react-redux"

const ProductDetails =()=>{
    const article = useSelector(state => state.articleDetails)
    return(
        <View>
            <Text>{article.title}</Text>
        </View>
    )
}
export default ProductDetails