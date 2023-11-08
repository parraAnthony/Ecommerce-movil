import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesThunk } from "../store/slice/articles";
import { getOneArticleThunk } from "../store/slice/articleDetails";

const Home =()=>{
    const navigation = useNavigation()
    const articles =useSelector(state=> state.articles)
    const dispatch = useDispatch()
    const getOneArticle = id => {
        dispatch( getOneArticleThunk(id))
        
    }
    useEffect(()=>{
        dispatch(getArticlesThunk())
    },[])

    return(
        <ScrollView>
            <View>
                {articles?.map(print=>
                    (
                        <Text key={print.id}>
                            {print.title}
                            <TouchableOpacity onPress={()=>{getOneArticle(print.id),navigation.navigate("ProductDetails")}}>
                                    <Text>que lo que</Text>
                            </TouchableOpacity>
                        </Text>
                    )
                )}
            </View>
        </ScrollView>
    )
}
export default Home;