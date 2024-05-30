import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../../components/screens/homeScreen";
import OrderHistoryScreen from "../../components/screens/orderHistoryScreen";
import OrderDetails from "../../components/screens/orderDetails";

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen
          name=" "
          component={HomeScreen}
          options={{
            drawerLabel: "Home",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#FA4A0C",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "700",
            },
          }}
        />
        <Drawer.Screen
          name="Order History"
          component={OrderHistoryScreen}
          options={{
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#FA4A0C",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "700",
            },
          }}
        />
        <Drawer.Screen
          name="Order Details"
          component={OrderDetails}
          options={{
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#FA4A0C",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "700",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
