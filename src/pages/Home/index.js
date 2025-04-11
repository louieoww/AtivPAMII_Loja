import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.TitleHome}>Bem vindo(a) ao Sonic Plushie Store!</Text>
      <Image
        style={styles.HomeImage}
        source={{
          uri: 'https://www.segatoys.co.jp/sonic/images/goods/goods_limited.webp',
        }}
      />
      <Button
        title="Ir para Catálogo"
        color="#3D80E7"
        onPress={() => navigation.navigate('Catalog')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TitleHome: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 25,
    textAlign: 'center',
    color: '#1A3762',
  },

  HomeImage: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20
  },
});
