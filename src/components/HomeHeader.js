
import { View, Image, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { useNavigation } from "@react-navigation/native";
const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row px-3 pb-5 pt-8 justify-between`} >
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/navlogo.png')} style={{ width: 150, height: 40 }} />
      </TouchableOpacity>


      {/* Profile Avatar */}
      <TouchableOpacity onPress={() => navigation.navigate('About')}>

        <View style={tw`bg-amber-600  rounded-full h-8 w-8 pl-2`}>
          <Text style={tw`text-white font-bold text-xl`} >O</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
