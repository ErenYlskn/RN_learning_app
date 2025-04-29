import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Learn4() {
  useEffect(() => {
    AsyncStorage.setItem("seviye", "4. Seviyede: Uygulamayı Çalıştırıyor");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projeyi Telefonda Görüntüleme</Text>
      <Text style={styles.content}>
        React Native ile geliştirdiğiniz uygulamayı, bilgisayarınızda çalıştırmakla yetinmek yerine, telefonunuzda da test etmek çok önemlidir. Böylece kullanıcı deneyimini gerçek bir cihazda gözlemleyebilir ve uygulamanızın performansını değerlendirebilirsiniz.
      </Text>
      <Text style={styles.content}>
        **Expo ile Telefonunuzda Uygulama Görüntüleme**:
      </Text>
      <Text style={styles.content}>
        Eğer Expo kullanıyorsanız, uygulamanızı telefonunuzda görüntülemek için birkaç kolay adım bulunmaktadır. Expo, React Native projelerini hızlıca geliştirmeyi ve test etmeyi sağlayan güçlü bir araçtır.
      </Text>
      <Text style={styles.content}>
        1. **Expo Go Uygulamasını İndirin**:
      </Text>
      <Text style={styles.content}>
        İlk adım olarak, telefonunuzda Expo Go uygulamasını indirmeniz gerekiyor. Expo Go, Expo projelerinizi mobil cihazınızda test etmenizi sağlayan ücretsiz bir uygulamadır. Expo Go’yu iOS cihazınızdan [App Store](https://apps.apple.com/us/app/expo-go/id982107779) üzerinden, Android cihazınızdan ise [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) üzerinden indirebilirsiniz.
      </Text>
      <Text style={styles.content}>
        2. **QR Kodu Taratın**:
      </Text>
      <Text style={styles.content}>
        Expo Go uygulamasını telefonunuza yükledikten sonra, bilgisayarınızda uygulamanızı çalıştırmanız gerekiyor. Komut satırında şu komutu girin:
      </Text>
      <Text style={styles.content}>
        ```bash
        expo start
        ```
      </Text>
      <Text style={styles.content}>
        Bu komut, projeyi başlatır ve genellikle terminalde bir QR kodu görüntülenir. QR kodu, Expo Go uygulamanızda taratarak, uygulamanızı telefonunuzda görüntüleyebilirsiniz.
      </Text>
      <Text style={styles.content}>
        3. **Geliştirme Sunucusuna Bağlanın**:
      </Text>
      <Text style={styles.content}>
        QR kodunu tarattıktan sonra, Expo Go uygulaması telefonunuza bağlanacak ve uygulamanız otomatik olarak telefonunuzda açılacaktır. Bu sayede bilgisayarınızda yaptığınız değişiklikler anında telefonunuzda da görüntülenebilir.
      </Text>
      <Text style={styles.content}>
        **Alternatif Yöntemler**:
      </Text>
      <Text style={styles.content}>
        Expo Go dışında, React Native CLI kullanıyorsanız, telefonunuzda uygulamanızı test etmek için birkaç farklı yöntem kullanabilirsiniz. Aşağıda bu yöntemlerden bahsediyorum:
      </Text>
      <Text style={styles.content}>
        1. **Android Cihazında Uygulama Görüntüleme**:
      </Text>
      <Text style={styles.content}>
        Eğer Android cihaz kullanıyorsanız, USB ile bilgisayarınıza bağlayıp, şu komutu çalıştırarak uygulamanızı doğrudan cihazınıza yükleyebilirsiniz:
      </Text>
      <Text style={styles.content}>
        ```bash
        npx react-native run-android
        ```
      </Text>
      <Text style={styles.content}>
        Bu komut, uygulamanızı Android cihazınıza yükler ve başlatır.
      </Text>
      <Text style={styles.content}>
        2. **iOS Cihazında Uygulama Görüntüleme**:
      </Text>
      <Text style={styles.content}>
        Eğer bir macOS cihazına sahipseniz ve iOS uygulaması geliştirmek istiyorsanız, uygulamanızı Xcode üzerinden çalıştırabilirsiniz. Terminalde şu komutu kullanarak uygulamanızı iOS cihazınızda çalıştırabilirsiniz:
      </Text>
      <Text style={styles.content}>
        ```bash
        npx react-native run-ios
        ```
      </Text>
      <Text style={styles.content}>
        Bu komut, iOS simulator üzerinde veya bağlı bir iOS cihazında uygulamanızı başlatacaktır.
      </Text>
      <Text style={styles.content}>
        **Uygulamanızı Telefonunuzda Test Etmek İçin İpuçları**:
      </Text>
      <Text style={styles.content}>
        - **Canlı Yenileme (Live Reloading)**: React Native, yazdığınız her kodu anında telefonunuzda görmek için "Live Reload" özelliği sunar. Bu sayede, her değişiklikten sonra uygulamayı yeniden başlatmanıza gerek kalmaz.
      </Text>
      <Text style={styles.content}>
        - **Hata Ayıklama (Debugging)**: Uygulamanızı telefonunuzda test ederken, hata ayıklama araçlarından faydalanabilirsiniz. Chrome üzerinden uzaktan hata ayıklama yapabilir veya React Developer Tools gibi araçları kullanarak, uygulamanızın içindeki durumu izleyebilirsiniz.
      </Text>
      <Text style={styles.content}>
        - **Performans Testleri**: Uygulamanızın performansını gerçek cihazda test etmek önemlidir. Bu sayede, emülatör veya simulatorda karşılaşılmayan sorunları daha hızlı tespit edebilirsiniz.
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://youtu.be/qZN7rlmoPZk")}>
        YouTube: Telefonunuzda Uygulama Görüntüleme Videosu
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#000" },
  content: { fontSize: 16, marginBottom: 20, color: "#000" },
  link: { fontSize: 16, color: "blue", textDecorationLine: "underline" },
});
