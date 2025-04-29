import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router"; // sayfalar arası yönlendirme

export default function ExploreScreen() {
  const router = useRouter();

  // Yeni oyun kısmı eklenecek
  const sections = [
    { id: "1", title: "1. React Native Kurulumu" },
    { id: "2", title: "2. React Native Nedir?" },
    { id: "3", title: "3. Temel Kodlama Bilgileri" },
    { id: "4", title: "4. Projeyi Telefonda Görüntüleme" },
    { id: "5", title: "5. Çoktan Seçmeli Sorular" }, // yeni oyun bölümü
  ];

  const goToSection = (id: string) => {
    if (id === "1") router.push("/learn/1");
    else if (id === "2") router.push("/learn/2");
    else if (id === "3") router.push("/learn/3");
    else if (id === "4") router.push("/learn/4");
    else if (id === "5") router.push("/learn/5"); // oyun ekranına yönlendirme
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öğrenme Aşamaları</Text>
      {sections.map((section) => (
        <Pressable
          key={section.id}
          onPress={() => goToSection(section.id)}
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: pressed ? "#e0e0e0" : "#f5f5f5" },
          ]}
        >
          <Text style={styles.cardText}>{section.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
  },
});
