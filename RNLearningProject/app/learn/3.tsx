import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Learn3() {
  useEffect(() => {
    AsyncStorage.setItem("seviye", "3. Seviyede: Kodlamayı Öğreniyor");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Temel Kodlama Bilgileri</Text>
      <Text style={styles.content}>
        React Native, mobil uygulamalar geliştirmek için kullanılan güçlü bir framework’tür. React Native kullanmaya başlamadan önce, JavaScript ve React konularında temel bilgi sahibi olmanız faydalı olacaktır. Şimdi, React Native'in temel bileşenleri hakkında konuşalım.
      </Text>
      <Text style={styles.content}>
        **React Native Temel Bileşenleri**:
      </Text>
      <Text style={styles.content}>
        1. <Text style={styles.bold}>View:</Text> React Native’deki en temel yapı taşıdır. Uygulamanızda her şey bir View içinde yer alır. View, bir konteyner gibi çalışarak, diğer bileşenleri yerleştirebilmenizi sağlar. Aynı zamanda stil ekleyip, düzenlemeler yapabilirsiniz.
      </Text>
      <Text style={styles.content}>
        2. <Text style={styles.bold}>Text:</Text> Kullanıcıya metin göstermek için kullanılır. Text bileşeni, özellikle etkileşimli metinler ve açıklamalar için idealdir. Ayrıca, yazının rengini, fontunu, boyutunu değiştirebilirsiniz.
      </Text>
      <Text style={styles.content}>
        3. <Text style={styles.bold}>StyleSheet:</Text> React Native’de stil oluşturmak için kullanılan bir nesnedir. Her bileşen için ayrı stil tanımlamaları yapabilirsiniz. Genelde, bileşenlerin görsel düzenlerini tanımlamak için StyleSheet kullanılır. 
      </Text>
      <Text style={styles.content}>
        **React Native'de Hook’lar**:
      </Text>
      <Text style={styles.content}>
        React Native'de fonksiyonel bileşenler kullanılır. Fonksiyonel bileşenlerde durum yönetimi ve yan etkiler için <Text style={styles.bold}>hook'lar</Text> kullanılır. En yaygın kullanılan hook'lar şunlardır:
      </Text>
      <Text style={styles.content}>
        1. <Text style={styles.bold}>useState:</Text> Durum (state) yönetimi için kullanılır. Bu hook, bileşenin içinde veri saklamak için kullanılır. Örneğin, bir kullanıcının girdiği verileri tutmak için kullanabilirsiniz.
      </Text>
      <Text style={styles.content}>
        2. <Text style={styles.bold}>useEffect:</Text> Yan etkileri yönetmek için kullanılır. Genellikle, bileşen render edildiğinde veya güncellendiğinde bir işlem yapmak isterseniz, `useEffect` kullanılır. Örneğin, veri çekme veya API isteği gibi işlemler bu hook ile yapılır.
      </Text>
      <Text style={styles.content}>
        3. <Text style={styles.bold}>useContext:</Text> Uygulamanın farklı bileşenlerinde ortak bir veriyi paylaşmak için kullanılır. Bu hook sayesinde, props ile veri geçişini azaltabilirsiniz.
      </Text>
      <Text style={styles.content}>
        **State ve Props Arasındaki Farklar**:
      </Text>
      <Text style={styles.content}>
        - **State**: Bileşenin içinde tutulan verilerdir. State, bileşenin içinde dinamik olarak değişebilir. Örneğin, bir sayfa yüklenirken kullanıcı verisi çekiliyor olabilir ve bu veri güncellendikçe state değişir.
      </Text>
      <Text style={styles.content}>
        - **Props**: Bileşenler arasında veri paylaşmak için kullanılır. Props, bir bileşenin dışarıdan aldığı verilerdir. Props değiştirilemez (immutable). Genellikle üst bileşenden alt bileşenlere veri geçişi için kullanılır.
      </Text>
      <Text style={styles.content}>
        **Temel React Native Yapısı**:
      </Text>
      <Text style={styles.content}>
        React Native uygulamanızda, genellikle şu yapı kullanılır:
      </Text>
      <Text style={styles.content}>
        - **App.js**: Uygulamanın giriş noktasıdır. Bu dosya, uygulamanın temel yapısını ve yönlendirme (navigation) sistemini tanımlar.
      </Text>
      <Text style={styles.content}>
        - **Bileşenler (Components)**: Uygulamanın her bir işlevsel kısmı, bağımsız bileşenler olarak yazılır. Bileşenler, ekranın farklı kısımlarını temsil eder.
      </Text>
      <Text style={styles.content}>
        - **Navigation**: Uygulama içinde farklı sayfalar arasında geçişi sağlayan yapıdır. React Navigation, sayfalar arası geçişleri yönetmek için yaygın olarak kullanılır.
      </Text>
      <Text style={styles.content}>
        **React Native ve JSX**:
      </Text>
      <Text style={styles.content}>
        React Native, JSX (JavaScript XML) kullanarak bileşenlerinizi tanımlar. JSX, JavaScript içinde HTML benzeri bir yapı kullanmanıza olanak tanır. Ancak, React Native’de HTML etiketleri yerine, özel bileşenler (View, Text gibi) kullanılır.
      </Text>
      <Text style={styles.content}>
        JSX, JavaScript fonksiyonlarını ve bileşenleri tanımlamak için kullanılan bir sözdizimidir. JSX ile yazılmış bileşenler daha okunabilir ve anlaşılır hale gelir. JSX, JavaScript ile DOM manipülasyonlarını birleştirerek, bileşenler arası etkileşimi kolaylaştırır.
      </Text>
      <Text style={styles.content}>
        **React Native İle Hızlı Başlangıç**:
      </Text>
      <Text style={styles.content}>
        React Native ile geliştirme yapmaya başlamak için, Node.js, React Native CLI veya Expo CLI gibi araçlara ihtiyacınız olacak. Bu araçları kurduktan sonra, uygulama geliştirmeye başlayabilirsiniz. İlk uygulamanızı geliştirmek için aşağıdaki adımları izleyebilirsiniz:
      </Text>
      <Text style={styles.content}>
        1. **Yeni bir proje başlatın**: `npx react-native init ProjeAdı` komutunu kullanarak yeni bir React Native projesi başlatabilirsiniz.
      </Text>
      <Text style={styles.content}>
        2. **Uygulamanızı çalıştırın**: `npx react-native run-android` veya `npx react-native run-ios` komutlarıyla uygulamanızı Android veya iOS cihazında çalıştırabilirsiniz.
      </Text>
      <Text style={styles.content}>
        3. **Yazılımınızı geliştirin**: React Native ile her iki platformda da aynı kodla geliştirme yapabilirsiniz. Güncellemeleri hemen görmek için canlı yenilemeyi (Live Reload) kullanabilirsiniz.
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=qSRrxpdMpVc")}>
        YouTube: Temel Kodlama Videosu
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#000" },
  content: { fontSize: 16, marginBottom: 20, color: "#000" },
  link: { fontSize: 16, color: "blue", textDecorationLine: "underline" },
  bold: { fontWeight: "bold" },
});
