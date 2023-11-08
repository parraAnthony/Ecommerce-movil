import { Button, TextInput, View, Text, Alert } from "react-native";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import axios from "axios";

const Register =()=>{
    const {register, handleSubmit,setValue, formState: { errors } }= useForm();
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const onSubmit = (data) =>{
        axios
            .post("https://ecommerce-api-l3eo.onrender.com/users", data)
            .then(resp=>navigate.navigate("Login"))
            .catch(error=>Alert.alert("Failed to log in","There was an error in the connection"))
    }
    useEffect(()=>{
        register("firstName", {required:"Please enter your first name"})
        register("lastName", {required:"Please enter your last name"})
        register("email", {required:"Please enter your email"})
        register("phone", {required:"Please enter your phone"})
        register("password", {required:"Please enter your password"})
    },[register])
    return(
    <>
        <View>
            <TextInput
                placeholder="First name"
                onChangeText={text=>setValue("firstName", text)}
            />
            {errors?.firstName &&
            <Text>{errors?.firstName.message}</Text>
            }
            <TextInput
                placeholder="Last name"
                onChangeText={text=>setValue("lastName", text)}
            />
            {errors?.lastName &&
            <Text>{errors?.lastName.message}</Text>
            }
            <TextInput
                placeholder="Email"
                onChangeText={text=>setValue("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {errors?.email &&
            <Text>{errors?.email.message}</Text>
            }
            <TextInput
                placeholder="Phone"
                onChangeText={text=>setValue("phone", text)}
            />
            {errors?.phone &&
            <Text>{errors?.phone.message}</Text>
            }
            <TextInput
                placeholder="Password"
                onChangeText={text=>setValue("password", text)}
                secureTextEntry
            />
            {errors?.password &&
            <Text>{errors?.password.message}</Text>
            }
            <Button
                title="Register"
                onPress={handleSubmit(onSubmit)}
            ></Button>
        </View>
        <Text onPress={()=>navigate.navigate("Login")}>Login</Text>
    </>)
}
export default Register;