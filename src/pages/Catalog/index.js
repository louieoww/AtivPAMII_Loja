import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product_1')}>
        <Image
          source={{
            uri: 'https://www.segatoys.co.jp/sonic/images/related/related_goods_shadow01.jpg',
          }}
          style={{ width: 200, height: 200, marginTop: 20, borderRadius: 10 }}
        />
      </TouchableOpacity>
      <Text style={styles.Shadow}>Shadow Plushie</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Product_2')}>
        <Image
          source={{
            uri: 'https://www.segatoys.co.jp/sonic/images/related/related_goods_img11.webp',
          }}
          style={{ width: 200, height: 200, marginTop: 20, borderRadius: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.Sonic}>Sonic Plushie</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  Shadow: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },

  Sonic: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
});
