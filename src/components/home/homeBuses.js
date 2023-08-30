import { useState } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";


const HomeBuses = () => {
    const navigation = useNavigation();
    const buses = [
        {
            id: 1,
            name: 'YY Coaches',
            contacts: '+256 7897 7895',
            location: 'Old Kampala',
            photo: 'https://media.istockphoto.com/id/474691228/photo/bus-on-a-street.jpg?s=612x612&w=0&k=20&c=fHvqfqvJwi1t48EQOsEwcrlfpKB-MdYax-YWeeuk33A=',
        },
        {
            id: 2,
            name: 'KK Coaches',
            contacts: '+256 7897 7895',
            location: 'Old Kampala',
            photo: 'https://media.istockphoto.com/id/864211984/photo/shuttle-bus.jpg?s=612x612&w=0&k=20&c=4RacuHEzby-Yk4mhs5rJnIGbLr-SrdG14ZAqMAsvvpA=',
        },
        {
            id: 3,
            name: 'Mash Poa',
            contacts: '+256 7897 7895',
            location: 'Old Kampala',
            photo: 'https://media.istockphoto.com/id/176431523/photo/white-bus.jpg?s=612x612&w=0&k=20&c=WgUa4ULPHizEEuJ96tcTwBHMkX4sHEM3N8FGrLv2r-Q=',
        },
        {
            id: 4,
            name: 'Gaa Gaa',
            contacts: '+256 7897 7895',
            location: 'Old Kampala',
            photo: 'https://media.istockphoto.com/id/1151385437/photo/trolley-bus-on-the-street-of-the-city.jpg?s=612x612&w=0&k=20&c=xBbEGR6DU4NHyPrJYFRKDEVaVKQSsjRDiJfLu5lLJfI=',
        },
        {
            id: 5,
            name: 'YY Coaches',
            contacts: '+256 7897 7895',
            location: 'Old Kampala',
            photo: 'https://media.istockphoto.com/id/826350462/photo/bus-in-glasgow.jpg?s=612x612&w=0&k=20&c=iglKcB4Qca7FefFTLL7H5Y2sxpOWiEB7R6iuVJqK1qw=',
        }

    ]
    return (
        <>
            <Text style={tw`font-medium ml-5 mt-5 text-xl`}>
                Buses Available
            </Text>
            <View style={tw`mx-2 mt-2`}>

                {buses.map((item) => {
                    return (

                        <View style={tw`flex-row  m-2 border h-28 border-gray-200 rounded-md`}>
                            <View style={tw`bg-gray-100 w-1/2  p-1 flex justify-center`}>
                                <Image source={{ uri: item.photo }} style={tw`h-full w-full object-cover`} />

                            </View>

                            <View style={tw`w-1/2 p-2`}>

                                <Text style={tw`text-xl font-semibold`}>
                                    {item.name}
                                </Text>
                                <Text style={tw`text-lg mt-2`}>
                                    {item.contacts}
                                </Text>
                                <Text>
                                    {item.location}
                                </Text>
                            </View>

                        </View>
                    )
                })}


            </View>
        </>
    )
}


export default HomeBuses;