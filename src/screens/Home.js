import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HomeHeader from "../components/HomeHeader"
import Banner from "../components/home/Banner"
import Withdraws from "../components/home/Withraws"
import Transactions from "../components/home/Transactions"

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <HomeHeader />
            <ScrollView>
                <Banner />
                <Withdraws />
                <Transactions />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home