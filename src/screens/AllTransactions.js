import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import Transactions from "../components/home/Transactions";

const AllTransactions = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={tw`border-b border-gray-200`}>
                <HomeHeader />
            </View>
            <ScrollView >
             <Transactions/>
            </ScrollView>
        </SafeAreaView>


    )
}
export default AllTransactions