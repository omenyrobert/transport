import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';


const Banner = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={tw`rounded-lg flex-row p-3 bg-[#149A1A] m-5`}>
                <View style={tw`w-7/12`}>
                    <View style={tw`flex-row`}>
                        <View>
                            <Entypo name="briefcase" style={tw`mt-3`} size={36} color="black" />
                        </View>
                        <View style={tw`ml-3`}>
                            <Text style={tw`text-2xl font-bold text-white`}>2,500,000</Text>
                            <Text style={tw`text-white`}>Current Balance</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={tw`border-white border mt-5 w-28 rounded p-2`}>
                        <Text style={tw`text-white text-center`} >Withdraw</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`w-5/12 border-l-2 border-white p-2`}>
                    <TouchableOpacity style={tw`bg-white rounded p-2 mt-8`}>
                        <Text style={tw`text-center`}>Send Money</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={tw`flex-row m-5 justify-between`}>
                <TouchableOpacity style={tw`border-gray-200 border w-28 rounded p-2`}>
                    <Text style={tw`text-[#149A1A] text-center`} >Book A Bus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-[#149A1A] w-28 rounded p-2`}>
                    <Text style={tw`text-white text-center`} >Withdraw</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`border-gray-200 border w-28 rounded p-2`}>
                    <Text style={tw`text-[#149A1A] text-center`} >Transaction</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Banner;