import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPin from "./screens/ForgotPin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";
import Support from "./screens/Support";
import Buses from "./screens/Buses";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function TabNav() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#149A1A',
    
            labelStyle: {
              fontSize: 12,
              fontWeight: 'medium',
            },
          }} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color}) => <Feather name="home" size={24} color={color} />, headerShown: false
            }} />
            <Tab.Screen name="Wallet"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="wallet-outline" size={24} color={color} />,
                    
                }}
                component={Wallet} />
            <Tab.Screen name="Buses"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="bus" size={24} color={color} />
                }}
                component={Buses} />
            <Tab.Screen name="Support"
                options={{
                    tabBarIcon: ({color}) => <MaterialIcons name="support-agent" size={24} color={color} />
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
            <Stack.Screen  name="Home" component={TabNav} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <>
            <NavigationContainer>
                <StackNav/>
                {/* <TabNav /> */}
            </NavigationContainer>
        </>
    )
}