import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

export default function Product_1() {
  return (
    <SafeAreaView style={styles.Container}>
      <Image
        source={{
          uri: 'https://www.segatoys.co.jp/sonic/images/related/related_goods_shadow01.jpg',
        }}
        style={{ width: 350, height: 300 }}
      />
      <Text style={styles.ShadowDesc}>Shadow Plushie</Text>
      <Text style={styles.ShadowPrice}>R$250</Text>
      <Button
        title="Adicionar ao carrinho"
        color="#3D80E7"
        onPress={() => Alert.alert('Adicionado com sucesso!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  ShadowDesc: {
    fontSize: 45,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },

  ShadowPrice: {
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'georgia',
    color: '#1F35AA',
    marginBottom: 10,
  },
});
