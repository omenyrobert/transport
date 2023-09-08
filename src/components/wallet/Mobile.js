import { useState } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import tw from 'twrnc';
import CheckBox from "expo-checkbox";
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

const Mobile = () => {

    const [instant, setInstant] = useState(false)

    const [site, setSite] = useState(false)

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const openDate = () => {
      setOpen(true)
    }

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

                <View style={tw`flex-row justify-between m-5`}>
                    <View style={tw`flex-row`}>
                        <CheckBox value={instant}
                            onValueChange={() => setInstant(!instant)}
                            color={instant ? "#149A1A" : undefined} />
                        <Text style={tw`ml-5`}>Instant</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <CheckBox value={site}
                            onValueChange={() => setSite(!site)}
                            color={site ? "#149A1A" : undefined} />
                        <Text style={tw`ml-5`}>on Site</Text>
                    </View>
                </View>


                <Text style={tw`ml-5 mt-5`}>
                    Set Date
                </Text>
                <TouchableOpacity style={tw`bg-gray-100 px-5 flex-row justify-between pt-3 rounded-md m-5 h-14 border border-gray-200`} onPress={openDate}>
                    <Text>Choose Date</Text>
                    <MaterialIcons name="date-range" size={24} color="black" />
                </TouchableOpacity>
                {open ? <DateTimePicker mode="date" value={new Date()} /> : null}


                <TouchableOpacity
                    style={tw`bg-[#149A1A] m-5 p-2 rounded-md`}
                >
                    <Text style={tw`text-white text-center font-bold text-lg`}>Send</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default Mobile