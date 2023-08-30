
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

const HomeHeader = () => {
  return (
    <View style={tw`flex-row px-3 pb-5 pt-8 justify-between`} >
      {/* Logo */}
      <Image source={require('../../assets/navlogo.png')} style={{ width: 150, height: 40 }} />

      {/* Profile Avatar */}
      <View style={tw`bg-amber-600  rounded-full h-8 w-8 pl-2`}>
        <Text style={tw`text-white font-bold text-xl`} >O</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
