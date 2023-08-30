import { View, Text,ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HomeHeader from "../components/HomeHeader"
import Banner from "../components/home/Banner"
import Withdraws from "../components/home/Withraws"
import HomeBuses from "../components/home/homeBuses"

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView>
                <HomeHeader />
                <Banner/>
                <Withdraws/>
                <HomeBuses/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home