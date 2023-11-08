import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setChangeValue } from '../store/slice/token';
import saveLocalStora from "../tools/saveLocalStora"

const Login = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigation()
  const onSubmit = (data) => {
     axios
      .post("https://ecommerce-api-l3eo.onrender.com/users/login", data)
      .then(resp=>{saveLocalStora(resp.data), dispatch(setChangeValue()), navigate.navigate("Home")})
      .catch(error=>Alert.alert("Failed to log in",error?.response?.status==401?"Invalid Credentials":"There was an error in the connection"))
  };
  useEffect(()=>{
    register('email', { required: "Please enter your Email" })
    register('password', { required: "Please enter your password" })
  },[register])

  
  return (
  <>
    <View>
        <TextInput
          placeholder="Email"
          onChangeText={text=> setValue("email", text)}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        {errors?.email && <Text>{errors.email.message}</Text>}
        
        <TextInput
          placeholder="Password"
          onChangeText={text=> setValue("password", text)}
          secureTextEntry
        />
        {errors?.password && <Text>{errors.password.message}</Text>}
        
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
    <Text onPress={()=>navigate.navigate("Register")}>You don't have an account</Text>
  </>
    
  );
}

export default Login;
