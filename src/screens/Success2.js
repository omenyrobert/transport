import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
const Success2 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={tw`border-b border-gray-200`}>
                <HomeHeader />
            </View>
            <ScrollView >
                <View>
                    <Text style={tw`font-medium text-center text-xl m-5`}>
                        Money Successfully Withdrawn
                    </Text>


                    <AntDesign style={tw`text-center my-10`} name="checkcircle" size={96} color="#149A1A" />
                    <Text style={tw`text-lg text-gray-500 text-center m-5`}>
                        250,000 withdran
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AllTransactions')}
                        style={tw`bg-[#149A1A] m-5 p-2 rounded-md`}
                    >
                        <Text style={tw`text-white text-center font-bold text-lg`}>Transactions</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 350, backgroundColor: '#fff' }}>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
export default Success2