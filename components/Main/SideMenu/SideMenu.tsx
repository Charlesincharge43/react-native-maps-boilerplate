import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

export const SideMenu = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 100}}>
        <Text>
          Profile Placeholder
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
