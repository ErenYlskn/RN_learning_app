import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [seviye, setSeviye] = useState<string | null>(null);

  useEffect(() => {
    const getLastLevel = async () => {
      const stored = await AsyncStorage.getItem("seviye");
      if (stored) setSeviye(stored);
    };
    getLastLevel();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profilim</Text>
      <Text style={styles.text}>Ad: Eren Yılışkan</Text>
      <Text style={styles.text}>Doğum Tarihi: 03.10.2003</Text>
      <Text style={styles.text}>Bölüm: Yazılım Mühendisliği Öğrencisi</Text>
      <Text style={styles.text}>Üniversite: Samsun Üniversitesi</Text>
      <Text style={styles.text}>E-posta: eren@gmail.com</Text>

      <View style={styles.levelContainer}>
        <Text style={styles.levelTitle}>En Son Eğitim Seviyesi</Text>
        <Text style={styles.levelValue}>
          {seviye ? seviye : "Henüz eğitim aşamasına başlanmadı."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  levelContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  levelTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  levelValue: { fontSize: 16 },
});
