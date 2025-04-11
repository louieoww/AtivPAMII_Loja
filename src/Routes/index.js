import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/index';
import Catalog from '../pages/Catalog/index';
import Product_1 from '../pages/Product_1/index';
import Product_2 from '../pages/Product_2/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Product_1" component={Product_1} />
       <Stack.Screen name="Product_2" component={Product_2} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
