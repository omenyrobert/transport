import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from 'twrnc';
import { Feather, FontAwesome } from '@expo/vector-icons';
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";
import Mobile from "../components/wallet/Mobile";
import Bank from "../components/wallet/Bank";

const Send = () => {

    const [mobile, setMobile] = useState(false);
    const [bank, setBank] = useState(false);

    const openBank = () => {
        setBank(true);
        setMobile(false);
    }

    const openMobile = () => {
        setBank(false);
        setMobile(true);
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={tw`border-b border-gray-200`}>
                <HomeHeader />
            </View>
            <ScrollView >
                <View>
                    <Text style={tw`font-medium ml-5 text-xl mt-5`}>
                        Send Money
                    </Text>
                    <View style={tw`bg-white mt-2`}>
                        <TouchableOpacity onPress={openMobile} style={tw`p-3 rounded-md border-b border-gray-200 mx-5 my-2`}>

                            <View style={tw`flex-row`}>
                                <View style={tw`mt-1`}>
                                    <Feather name="smartphone" size={24} color="black" />
                                </View>
                                <View style={tw`ml-2`}>
                                    <Text style={tw`text-lg font-medium -mt-1`}>
                                        Mobile Money
                                    </Text>
                                    <Text style={tw`text-gray-500 -mt-1`}>
                                        Airtel Money & MTN Momo
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={openBank} style={tw`p-3 rounded-md border-b border-gray-200 mx-5 my-2`}>

                            <View style={tw`flex-row`}>
                                <View style={tw`mt-1`}>

                                    <FontAwesome name="cc-mastercard" size={24} color="black" />
                                </View>
                                <View style={tw`ml-2`}>
                                    <Text style={tw`text-lg font-medium -mt-1`}>
                                        Bank Transfer
                                    </Text>
                                    <Text style={tw`text-gray-500 -mt-1`}>
                                        Visa Card, Master Card, Debit Card ect
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        {mobile ?
                            <Mobile />
                            : null}


                        {bank ?          <Bank />
                            : null}



                    </View>
                </View>
                <View style={{ height: 150, backgroundColor: '#fff' }}>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
export default Send