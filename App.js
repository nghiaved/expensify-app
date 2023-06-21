import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import AddTripScreen from './screens/AddTripScreen';
import TripExpensesScreen from './screens/TripExpensesScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AddTrip" component={AddTripScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TripExpenses" component={TripExpensesScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AddExpense" component={AddExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
