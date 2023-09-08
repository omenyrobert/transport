import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { Feather, FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import SheduleWithDraw from "./SheduleWithDraw";


const Bank = () => {
    return (
        <>
            <View>
                <Text style={tw`ml-5 mt-5`}>
                    Bank Account Name
                </Text>
                <TextInput
                    placeholder="Account Name"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />
                <Text style={tw`ml-5 mt-5`}>
                    Select Bank
                </Text>
                <TextInput
                    placeholder="Account Name"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />
                <Text style={tw`ml-5 mt-5`}>
                    Amount
                </Text>
                <TextInput
                    placeholder="Amount"
                    style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                />
                <SheduleWithDraw />
            </View>
        </>
    )
}
export default Bank;

