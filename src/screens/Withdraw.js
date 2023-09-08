import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from 'twrnc';
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";


const Withdraw = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={tw`border-b border-gray-200`}>
                <HomeHeader />
            </View>
            <ScrollView >
                <View>
                    <Text style={tw`font-medium  text-xl m-5`}>
                        Withdraw Money
                    </Text>

                    <Text style={tw`m-5`}>
                        Enter Amount
                    </Text>
                    <TextInput
                        placeholder="Enter Amount"
                        style={tw`bg-gray-100 py-3 pl-5 mx-5 mt-2 border border-gray-200 rounded-md`}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Success2')}
                        style={tw`bg-[#149A1A] m-5 p-2 rounded-md`}
                    >
                        <Text style={tw`text-white text-center font-bold text-lg`}>Withdraw</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 550, backgroundColor: '#fff' }}>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
export default Withdraw