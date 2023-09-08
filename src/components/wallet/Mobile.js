import { useState } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import tw from 'twrnc';
import SheduleWithDraw from "./SheduleWithDraw";


const Mobile = () => {


    return (
        <>
            <View>
                <View style={tw`flex-row p-2 m-2 bg-gray-100`}>
                    <Image source={require('../../../assets/airtel.png')} style={tw`w-10 h-10`} />
                    <View>
                        <Text style={tw`ml-5`}>
                            Airtel
                        </Text>
                        <Text style={tw`ml-5 text-xs text-gray-500`}>
                            Airtel Money
                        </Text>
                    </View>
                </View >

                <View style={tw`flex-row p-2 m-2`}>
                    <Image source={require('../../../assets/mtn.jpeg')} style={tw`w-10 h-10`} />
                    <View>
                        <Text style={tw`ml-5`}>
                            MTN
                        </Text>
                        <Text style={tw`ml-5 text-xs text-gray-500`}>
                            Momo Money
                        </Text>
                    </View>
                </View >
                <Text style={tw`ml-5 mt-5`}>
                    Phone Number
                </Text>
                <TextInput
                    placeholder="Phone Number"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />

                <Text style={tw`ml-5 mt-5`}>
                    Enter Amount
                </Text>
                <TextInput
                    placeholder="Amount"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />
                <Text style={tw`ml-5 mt-5`}>
                    Receiver's Name
                </Text>
                <TextInput
                    placeholder="Enter Name"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />

<SheduleWithDraw/>
            </View>

        </>
    )
}

export default Mobile