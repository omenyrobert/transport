import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";

const logourl = require('../../assets/logo.png')

const Login = () => {
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const navigation = useNavigation();
    return (
        <View>
            <View style={tw`text-white h-1/3 p-5 bg-[#149A1A]`}>
                <Image source={logourl} style={tw`mt-32 w-38 ml-[30%] h-28`} />
            </View>
            <View style={tw`rounded-t-3xl -mt-10 bg-white p-5 h-full`}>
                <Text style={tw`text-2xl font-bold mt-10`}>Login</Text>

                <Text style={tw`mt-8`}>Phone Number</Text>
                <TextInput
                    placeholder="Eg 07****"
                    style={tw`bg-gray-100 p-3 my-2 rounded-md`}
                    onChangeText={setPhone}
                    value={phone}
                />
                <Text style={tw`mt-5`}>Pin</Text>
                <TextInput
                    placeholder="4 digits * * * *"
                    style={tw`bg-gray-100 p-3 my-2 rounded-md`}
                    onChangeText={setPin}
                    value={pin}
                />
                <TouchableOpacity

                    style={tw`bg-[#149A1A] mt-2 p-2 rounded-md`}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={tw`text-white text-center font-bold text-lg`}>Login</Text>
                </TouchableOpacity>
                <View style={tw`mt-5 flex-row justify-between`}>
                    <Text onPress={() => navigation.navigate('SignUp')} style={tw`font-semibold text-lg`}>Signup</Text>
                    <Text onPress={() => navigation.navigate('ForgotPin')} style={tw`font-semibold text-lg text-[#149A1A]`}>Forgot pin?</Text>
                </View>
            </View>

        </View>
    )
}

export default Login;