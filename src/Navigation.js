import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPin from "./screens/ForgotPin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Wallet from "./screens/Sent";
import Support from "./screens/Support";
import Buses from "./screens/Buses";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Received from "./screens/Received";
import Send from "./screens/Send";
import About from "./screens/About";
import Success from "./screens/Success";
import Withdraw from "./screens/Withdraw";
import Success2 from "./screens/Success2";
import AllTransactions from "./screens/AllTransactions";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function TabNav() {
    return (
        <Tab.Navigator screenOptions={{
            activeTintColor: '#149A1A',

            labelStyle: {
                fontSize: 12,
                fontWeight: 'medium',
            },
        }} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />, headerShown: false
            }} />
            <Tab.Screen name="Sent"
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={24} color={color} />, headerShown: false

                }}
                component={Wallet} />
            <Tab.Screen name="Received"
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="receipt-long" size={24} color={color} />, headerShown: false
                }}
                component={Received} />

            <Tab.Screen name="Support"
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="support-agent" size={24} color={color} />, headerShown: false
                }}
                component={Support} />
        </Tab.Navigator>
    )
}

function StackNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPin" component={ForgotPin} />
            <Stack.Screen name="Send" component={Send} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="TabNav" component={TabNav} />
            <Stack.Screen name="Success" component={Success} />
            <Stack.Screen name="Success2" component={Success2} />
            <Stack.Screen name="Withdraw" component={Withdraw} />
            <Stack.Screen name="AllTransactions" component={AllTransactions}/>
            
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <>
            <NavigationContainer>
                <StackNav />
                {/* <TabNav /> */}
            </NavigationContainer>
        </>
    )
}