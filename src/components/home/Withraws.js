import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";


const Withdraws = () => {
    const navigation = useNavigation();
    const withdraws = [
        {
            id: 1,
            type: 'Airtel Money',
            amount: '250,000',
            date: '8th Aug 2023',
            account: '+256 7475 78904'
        },
        {
            id: 2,
            type: 'Momo Money',
            amount: '250,000',
            date: '28th Sep 2023',
            account: '+256 78878 8907'
        },
        {
            id: 3,
            type: 'Bank Transfer',
            amount: '1,250,000',
            date: '11th Dec 2023',
            account: 'Equity Bank'
        },
        {
            id: 4,
            type: 'Airtel Money',
            amount: '250,000',
            date: '8th Aug 2023',
            account: '+256 78878 8907'
        },
        {
            id: 5,
            type: 'Bank Transfer',
            amount: '3,050,000',
            account: 'ABSA Bank',
            date: '10th Nov 2023'
        }
    ]
    return (
        <>
            <Text style={tw`font-medium ml-5 text-xl`}>
                Pending Withdrawals
            </Text>
            <View style={tw`mx-5`}>
                <ScrollView horizontal contentContainerStyle={StyleSheet.container}>
                    {withdraws.map((item) => {
                        return (

                            <View key={item.id} style={tw`flex-row m-1 w-60 border h-28 border-gray-200 rounded-md`}>
                                <View style={tw`bg-gray-100 w-[40%]  p-3 flex justify-center`}>
                                    <Text style={tw`font-bold text-center`}>
                                        {item.type}
                                    </Text>
                                </View>
                                <View style={tw`w-[60%] p-2`}>
                                    <Text style={tw`text-2xl font-medium text-[#149A1A]`}>
                                        {item.amount}
                                    </Text>
                                    <Text style={tw`mt-2 text-[15px]`}>
                                        {item.account}
                                    </Text>
                                    <Text style={tw`text-gray-400 text-sm`} >
                                        {item.date}
                                    </Text>

                                </View>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Horizontal layout

    },
});

export default Withdraws;