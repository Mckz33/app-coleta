import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [valp, partida] = useState("");
  const [valr1, rota1] = useState("");
  const [valr2, rota2] = useState("");
  const Separator = () => <View style={styles.separator} />;

  const Botoes = () => {
    <Button
      title="Iniciar Navegação"
      color="#006400"
      onPress={() => Alert.alert("Rotas marcadas com sucesso!")}
    />;
  };

  return (
    <View style={styles.screen}>
      <Image
        source={require("./assets/mapa.png")}
        style={styles.backgroundImage}
      />

      <View>
        <Text style={styles.text}>Selecione um Rota</Text>

        <Picker
          selectedValue={valp}
          onValueChange={(value, index) => partida(value)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Ponto de Partida" value="" />
          <Picker.Item label="Rio de janeiro" value="Opção 1" />
        </Picker>
        <Separator />
        <Picker
          selectedValue={valr1}
          onValueChange={(value1, index) => rota1(value1)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Ponto de Coleta 1" value="" />
          <Picker.Item label="Lapa" value="Opção 1" />
        </Picker>
        <Separator />
        <Picker
          selectedValue={valr2}
          onValueChange={(value2, index) => rota2(value2)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Ponto de Coleta 2" value="" />
          <Picker.Item label="Santa Tereza" value="Opção 1" />
        </Picker>
        <Separator />

        <View style={styles.box}>
          <View style={styles.detalhes}>
            <View style={styles.ajustesBox}>
              <Text style={styles.fontSize}>29 Min </Text>
            </View>
            <View style={styles.ajustesBox}>
              <Text>Icone</Text>
            </View>
          </View>

          <View style={styles.detalhes}>
            <View style={styles.ajustesBox}>
              <Text>14:00</Text>
            </View>
            <View style={styles.ajustesBox}>
              <Text>Icone</Text>
            </View>
          </View>

          <View style={styles.detalhes}>
            <View style={styles.ajustesBox}>
              <Text>Detalhes</Text>
            </View>
            <View style={styles.ajustesBox}>
              <Text>9,3 KM</Text>
            </View>
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.detalhes}>
            <View style={styles.ajustesBox}>
              <Text style={styles.fontSizeBox1}>29 Min</Text>
            </View>
            <View style={styles.ajustesBox}>
              <Text>5,3 KM</Text>
            </View>
          </View>
          <View style={styles.detalhes}>
            <View style={styles.ajustesBox}>
              <Text>14:05</Text>
            </View>
          </View>
        </View>

        <Button
          title="Iniciar Navegação"
          color="#2B463C"
          onPress={() => Alert.alert("Rotas marcadas com sucesso!")}
        />
        <View style={styles.container}>
          <View style={styles.espaco}>
            <Button
              title="Editar"
              color="#2B463C"
              onPress={() => Alert.alert("Rotas marcadas com sucesso!")}
            />
          </View>
          <View style={styles.espaco}>
            <Button
              title="Salvar"
              color="#2B463C"
              onPress={() => Alert.alert("Rotas marcadas com sucesso!")}
            />
          </View>
          <View style={styles.espaco}>
            <Button
              title="Compartilhar"
              color="#2B463C"
              onPress={() => Alert.alert("Rotas marcadas com sucesso!")}
            />
          </View>
        </View>
      </View>

      <View style={styles.menu}>{/* MENU AQUI */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#688F4E", // Define o fundo como transparente para a imagem de fundo ser visível
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    width: 300,
    textAlign: "center",
  },
  title: {
    width: 300,
    textAlign: "center",
  },
  picker: {
    fontSize: 30,
    marginVertical: 10,
    width: 300,

    borderWidth: 1,
    borderColor: "#666",
    textShadowRadius: 10,
  },
  texto: {
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%", // Preenche a largura da tela
    height: "100%", // Preenche a altura da tela
  },
  botao: {
    color: "#2B463C",
  },
  botao1: {
    color: "#2B463C",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  espaco: {
    margin: 5,
  },
  box: {
    height: 100,
    borderRadius: 20,
    backgroundColor: "#F0F8FF",
    marginBottom: 10,
  },
  box1: {
    height: 50,
    borderRadius: 20,
    backgroundColor: "#F0F8FF",
    marginBottom: 10,
  },
  detalhes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  fontSize: {
    fontSize: 30,
  },
  fontSizeBox1: {
    fontSize: 20,
  },
  fontSizeDetalhes: {
    fontSize: 10,
  },
  ajustesBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    backgroundColor: "#2B463C",
    width: 400,
    height: 60,
  },
});
