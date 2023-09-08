import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import tw from 'twrnc';
const logourl = require('../../assets/logo.png')


const SignUp = ({ navigation }) => {

    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    return (
        <View>
            <View style={tw`text-white h-1/4 p-5 bg-[#149A1A]`}>
                <Image source={logourl} style={tw`mt-10  w-38 ml-[30%] h-28`} />
            </View>
            <View style={tw`rounded-t-3xl -mt-10 bg-white p-5 h-full`}>
                <Text style={tw`text-2xl font-bold mt-2`}>SignUp</Text>

                <Text style={tw`mt-2`}>Phone Number</Text>
                <TextInput
                    placeholder="Eg 07****"
                    style={tw`bg-gray-100 p-3 my-2 rounded-md`}
                    onChangeText={setPhone}
                    value={phone}
                />
                <Text style={tw`mt-5`}>Enter Code</Text>
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
                <Text style={tw`mt-5`}>Confirm Pin</Text>
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
                    <Text style={tw`text-white text-center font-bold text-lg`}>Signup</Text>
                </TouchableOpacity>
                <View style={tw`mt-1 flex-row justify-between`}>
                    <View></View>
                    <Text onPress={() => navigation.navigate('Login')} style={tw`font-semibold text-lg text-[#149A1A]`}>Login</Text>
                </View>
            </View>

        </View>
    )
}
export default SignUp