import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Learn1() {
  useEffect(() => {
    AsyncStorage.setItem("seviye", "1. Seviyede: Kurulumu Öğreniyor");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Kurulumu</Text>
      <Text style={styles.content}>
        React Native, mobil uygulamalar geliştirmek için kullanılan popüler bir framework'tür. 
        Başlangıç yapmak için bazı araçlara ihtiyacımız var:
      </Text>
      <Text style={styles.content}>
        1. <Text style={styles.bold}>Node.js:</Text> React Native projelerini çalıştırabilmek için Node.js kurulu olmalıdır. Node.js, JavaScript çalıştırmak için gerekli olan bir runtime ortamıdır. [Node.js İndir](https://nodejs.org/)
      </Text>
      <Text style={styles.content}>
        2. <Text style={styles.bold}>Expo CLI:</Text> React Native uygulamalarını hızlıca geliştirebilmek için Expo kullanabilirsiniz. Expo CLI, uygulamanızı hızlıca başlatmanızı sağlar. Expo'yu yüklemek için terminal üzerinden şu komutu kullanabilirsiniz:
      </Text>
      <View style={styles.codeContainer}>
        <Text style={styles.code}>npm install -g expo-cli</Text>
      </View>
      <Text style={styles.content}>
        3. <Text style={styles.bold}>Editör:</Text> VS Code veya herhangi bir metin editörü kullanabilirsiniz. Ancak VS Code, React Native geliştirmek için popüler bir tercihtir. [VS Code İndir](https://code.visualstudio.com/)
      </Text>
      <Text style={styles.content}>
        4. <Text style={styles.bold}>Android Studio (isteğe bağlı):</Text> Eğer Android cihazlar için geliştirme yapmak istiyorsanız, Android Studio'yu indirmeniz gerekebilir. Android Studio, Android emülatörleri ve cihazlar üzerinde test yapmanızı sağlar. [Android Studio İndir](https://developer.android.com/studio)
      </Text>
      <Text style={styles.content}>
        Bu araçları kurduktan sonra, Expo CLI kullanarak yeni bir React Native projesi başlatabilirsiniz. Aşağıdaki komutla yeni bir proje oluşturabilirsiniz:
      </Text>
      <View style={styles.codeContainer}>
        <Text style={styles.code}>expo init MyNewProject</Text>
      </View>
      <Text style={styles.link} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=0-S5a0eXPoc")}>
        YouTube: Kurulum Videosu
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" }, // Arka planı beyaz yap
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#000" },
  content: { fontSize: 16, marginBottom: 20, color: "#000" }, // Yazı rengi koyu siyah
  link: { fontSize: 16, color: "blue", textDecorationLine: "underline" },
  bold: { fontWeight: "bold" },
  codeContainer: {
    backgroundColor: "#f0f0f0",  // Kod kutusunun arka planı gri
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1, // Kenarlık ekleyelim
    borderColor: "#ddd",
  },
  code: {
    fontFamily: "monospace",  // Monospace kullanıyoruz
    fontSize: 16,
    color: "#000",  // Kod yazıları siyah
  },
});
