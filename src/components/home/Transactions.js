import { View, Text, SafeAreaView } from "react-native"
import tw from 'twrnc';
import { Feather, FontAwesome } from '@expo/vector-icons';

const Transactions = () => {

    const trans = [
        {
            id: 1,
            type: 'Withdrawal',
            amount: '350,000',
            sub: 1,
            account: '+256 756 8976 578',
            cat: 'Airtel Money',
            date: '22nd June 2023'
        },
        {
            id: 2,
            type: 'Sent Money',
            amount: '50,000',
            sub: 1,
            account: '+256 776 8976 578',
            cat: 'Mobile Money',
            date: '3rd Dec 2023'
        },
        {
            id: 3,
            type: 'Received Cash',
            amount: '1,050,000',
            sub: 2,
            account: 'ABSA Bank',
            cat: 'Bank Transfer',
            date: '3rd Aug 2023'
        },
        {
            id: 4,
            type: 'Cash Top up',
            amount: '90,000',
            account: '+256 776 8976 578',
            cat: 'Equity Bank',
            sub: 2,
            date: '22nd June 2023'
        },
        {
            id: 5,
            type: 'Withdrawal',
            amount: '750,000',
            account: '+256 776 8976 578',
            cat: 'Centinary Bank',
            sub: 2,
            date: '22nd June 2023'
        },
        {
            id: 6,
            type: 'Received Cash',
            amount: '350,000',
            account: '+256 776 8976 578',
            cat: 'Airtel Money',
            sub: 1,
            date: '22nd June 2023'
        },
        {
            id: 7,
            type: 'Withdrawal',
            amount: '950,000',
            account: '+256 776 8976 578',
            cat: 'Airtel Money',
            sub: 1,
            date: '22nd June 2023'
        },
        {
            id: 8,
            type: 'Reversed',
            amount: '150,000',
            account: '+256 776 8976 578',
            cat: 'Airtel Money',
            sub: 1,
            date: '22nd June 2023'
        },
        {
            id: 9,
            type: 'Withdrawal',
            amount: '350,000',
            account: '+256 776 8976 578',
            cat: 'Airtel Money',
            sub: 1,
            date: '22nd June 2023'
        },
    ]

    return (

        <View>
            <Text style={tw`font-medium ml-5 mt-8 text-xl`}>
            Transactions
            </Text>
            {trans.map((item) => {
                return (
                    <View key={item.id} style={tw`p-3 rounded-md border-b border-gray-200 mx-5 my-2`}>
                        <View style={tw`flex-row justify-between`}>
                            <View style={tw`flex-row`}>
                                <View style={tw`mt-1`}>
                                    {item.sub === 1 ? <Feather name="smartphone" size={24} color="black" /> : <FontAwesome name="cc-mastercard" size={24} color="black" />}
                                </View>
                                <View style={tw`ml-2`}>
                                    <Text style={tw`text-lg font-medium -mt-1`}>
                                        {item.type}
                                    </Text>
                                    <Text style={tw`text-gray-500 -mt-1`}>
                                        {item.date}
                                    </Text>
                                </View>


                            </View>
                            <View>
                                <Text style={tw`text-2xl font-bold text-[#149A1A]`}>
                                    {item.amount}
                                </Text>
                            </View>

                        </View>
                        <View style={tw`flex-row mt-5`}>
                            <Text>
                                {item.account}
                            </Text>
                            <Text style={tw`ml-5 py-1 px-2 rounded text-gray-700 bg-gray-100`}>
                                {item.cat}
                            </Text>
                        </View>

                    </View>
                )
            })}
            <View style={{ height: 100 }}>

            </View>
        </View>

    )
}
export default Transactions