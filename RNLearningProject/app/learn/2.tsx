import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Learn2() {
  useEffect(() => {
    AsyncStorage.setItem("seviye", "2. Seviyede: Tanımı Öğreniyor");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Nedir?</Text>
      <Text style={styles.content}>
        React Native, JavaScript ile mobil uygulama geliştirmenizi sağlayan bir framework’tür. Hem iOS hem Android için uygulama oluşturabilirsiniz. Facebook tarafından geliştirilmiş olan React Native, açık kaynaklı bir platformdur. Bu, uygulama geliştirenlerin yazılımın kaynağına erişebileceği ve onu kendi ihtiyaçlarına göre değiştirebileceği anlamına gelir.
      </Text>
      <Text style={styles.content}>
        React Native, **yerel mobil uygulamalar** oluşturmak için kullanılan, geliştirilmiş ve modern bir framework’tür. Başlangıçta sadece iOS platformunda çalışıyordu, ancak zamanla Android desteği de eklenmiştir. React Native, temel olarak React kütüphanesini kullanarak mobil uygulamalar geliştirmenizi sağlar. Bu kütüphane, kullanıcı arayüzlerini (UI) oluşturmayı kolaylaştırır ve geliştiricilerin hızlıca uygulama geliştirmelerini sağlar.
      </Text>
      <Text style={styles.content}>
        React Native, uygulamanızın görsel arayüzünü yerel bileşenlerle oluşturur. Bu, geleneksel mobil uygulama geliştirme yöntemlerinin aksine, uygulamanın performansını artırır. React Native ile yazdığınız uygulamalar, doğrudan cihazın işletim sistemine (iOS veya Android) bağlanarak daha hızlı çalışır.
      </Text>
      <Text style={styles.content}>
        React Native kullanarak, tek bir yazılım koduyla **hem iOS hem Android** cihazlar için mobil uygulamalar geliştirebilirsiniz. Bu özellik, geliştirme sürecini hızlandırır ve maliyetleri önemli ölçüde düşürür. Bunun dışında, React Native sayesinde **geliştirme süreci daha verimli** olur çünkü çok büyük kod değişiklikleri yapmadan uygulamanızı her iki platformda da test edebilirsiniz.
      </Text>
      <Text style={styles.content}>
        React Native, geliştiricilerin JavaScript bilgisiyle mobil uygulamalar oluşturabilmesini sağlar. JavaScript'in gücü sayesinde, React Native'e geleneksel mobil uygulama dillerine (Swift veya Java) kıyasla daha hızlı bir şekilde hakim olabilirsiniz. Ayrıca, geliştiriciler React Native'i, web geliştirme deneyimi olan kişiler için daha tanıdık ve kolay öğrenilebilir kılmak adına kullanabilirler.
      </Text>
      <Text style={styles.content}>
        **React Native’in avantajları**:
      </Text>
      <Text style={styles.content}>
        1. <Text style={styles.bold}>Tek bir kod tabanı ile her iki platformda uygulama geliştirebilirsiniz</Text>. Bu, hem zaman hem de maliyet açısından büyük bir avantaj sağlar.
      </Text>
      <Text style={styles.content}>
        2. <Text style={styles.bold}>Canlı yenileme (Live Reload) özelliği</Text> sayesinde, kodda yapılan değişiklikler anında cihazda görüntülenebilir.
      </Text>
      <Text style={styles.content}>
        3. <Text style={styles.bold}>Açık kaynaklıdır</Text>, yani topluluk tarafından sürekli geliştirilen bir kütüphanedir.
      </Text>
      <Text style={styles.content}>
        4. <Text style={styles.bold}>Esnekliği ile tanınır</Text>, kullanıcılar farklı platformlar için kolayca özelleştirme yapabilir.
      </Text>
      <Text style={styles.content}>
        React Native kullanarak mobil uygulama geliştirmeye başlamak için aşağıdaki araçlara ihtiyacınız olacak:
      </Text>
      <Text style={styles.content}>
        1. <Text style={styles.bold}>Node.js:</Text> React Native geliştirme ortamı için Node.js gereklidir. Bu, JavaScript kodunu çalıştırmak için gerekli olan bir ortamdır. Node.js’i [buradan indirebilirsiniz](https://nodejs.org/).
      </Text>
      <Text style={styles.content}>
        2. <Text style={styles.bold}>Expo CLI veya React Native CLI:</Text> Expo, React Native projelerini hızlıca başlatmak için kullanılan bir araçtır. React Native CLI ise daha özelleştirilebilir projeler oluşturmanıza olanak tanır. Expo ile başlamak daha kolay olabilir, ancak daha derinlemesine özelleştirme yapmak isterseniz React Native CLI’yi tercih edebilirsiniz.
      </Text>
      <Text style={styles.content}>
        3. <Text style={styles.bold}>Editör (VS Code):</Text> Visual Studio Code, React Native uygulamaları geliştirmek için en yaygın kullanılan editördür. Kod yazarken faydalı özellikler ve eklentiler sunar.
      </Text>
      <Text style={styles.content}>
        4. <Text style={styles.bold}>Emülatörler (Android Studio veya Xcode):</Text> Android ve iOS için emülatörler kullanarak, uygulamanızı geliştirme aşamasında test edebilirsiniz.
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=0-S5a0eXPoc")}>
        YouTube: Kurulum Videosu
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" }, // Arka planı beyaz yap
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#000" },
  content: { fontSize: 16, marginBottom: 20, color: "#000" }, // Yazı rengi siyah
  link: { fontSize: 16, color: "blue", textDecorationLine: "underline" },
  bold: { fontWeight: "bold" },
});
