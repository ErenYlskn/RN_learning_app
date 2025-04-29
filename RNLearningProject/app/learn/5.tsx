import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

export default function Learn5() {
  const questions = [
    {
      question: "React Native'de hangi hook, bileşenin durumunu yönetmek için kullanılır?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer",
      ],
      correctAnswer: "useState",
    },
    {
      question: "React Native'de UI güncellemeleri için hangi hook kullanılır?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useRef",
      ],
      correctAnswer: "useEffect",
    },
    {
      question: "React Native ile hangi platformlar için uygulama geliştirebiliriz?",
      options: [
        "Sadece Android",
        "Sadece iOS",
        "Android ve iOS",
        "Web",
      ],
      correctAnswer: "Android ve iOS",
    },
    {
      question: "React Native'de bir bileşeni dışa aktarmak için hangi komut kullanılır?",
      options: [
        "export default",
        "module.exports",
        "require()",
        "export",
      ],
      correctAnswer: "export default",
    },
    {
      question: "React Native'de hangi bileşen, kullanıcı arayüzü oluşturmak için kullanılır?",
      options: [
        "View",
        "Text",
        "Button",
        "Image",
      ],
      correctAnswer: "View",
    },
    {
      question: "React Native ile hangi platformda uygulama geliştirmek için Expo kullanılır?",
      options: [
        "Android",
        "iOS",
        "Android ve iOS",
        "Web",
      ],
      correctAnswer: "Android ve iOS",
    },
    {
      question: "React Native'de veri yönetimi için hangi kitaplık yaygın olarak kullanılır?",
      options: [
        "Redux",
        "MobX",
        "Context API",
        "Axios",
      ],
      correctAnswer: "Redux",
    },
    {
      question: "React Native'de stil vermek için hangi kitaplık kullanılır?",
      options: [
        "StyleSheet",
        "CSS",
        "styled-components",
        "Material UI",
      ],
      correctAnswer: "StyleSheet",
    },
    {
      question: "React Native'de hangi komut, bir uygulamanın geliştirilmiş sürümünü oluşturur?",
      options: [
        "npm run build",
        "expo build",
        "react-native build",
        "npm start",
      ],
      correctAnswer: "expo build",
    },
    {
      question: "React Native'de hangi özellik, verileri yönetmek için kullanılır?",
      options: [
        "State",
        "Props",
        "Context",
        "Event",
      ],
      correctAnswer: "State",
    },
    // Kod soruları (Bu kod ne işe yarar?)
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`console.log('Hello World')`",
      options: [
        "Ekrana 'Hello World' yazdırır",
        "Bir web sayfasını başlatır",
        "Bir hata mesajı gösterir",
        "Uygulamayı kapatır",
      ],
      correctAnswer: "Ekrana 'Hello World' yazdırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const a = 10; console.log(a)`",
      options: [
        "a değişkenini 10 olarak tanımlar ve konsola yazdırır",
        "Bir hata mesajı gösterir",
        "Bir string değişkeni oluşturur",
        "Bir döngü başlatır",
      ],
      correctAnswer: "a değişkenini 10 olarak tanımlar ve konsola yazdırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const numbers = [1, 2, 3]; const doubled = numbers.map(num => num * 2);`",
      options: [
        "numbers dizisinin elemanlarını ikiyle çarpar ve yeni bir dizi döndürür",
        "numbers dizisini sıralar",
        "numbers dizisini tersine çevirir",
        "numbers dizisinde elemanları çıkarır",
      ],
      correctAnswer: "numbers dizisinin elemanlarını ikiyle çarpar ve yeni bir dizi döndürür",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const greeting = 'Hello'; console.log(greeting + ' World!')`",
      options: [
        "greeting değişkeni ile 'World!' stringini birleştirir ve konsola yazdırır",
        "greeting'i ekranda gösterir",
        "Bir fonksiyon başlatır",
        "Bir dizi oluşturur",
      ],
      correctAnswer: "greeting değişkeni ile 'World!' stringini birleştirir ve konsola yazdırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const obj = { name: 'John', age: 30 }; console.log(obj.name)`",
      options: [
        "obj nesnesinin 'name' özelliğini konsola yazdırır",
        "obj nesnesini ekrana yazdırır",
        "obj nesnesinde 'age' özelliğini artırır",
        "obj nesnesini bir diziye dönüştürür",
      ],
      correctAnswer: "obj nesnesinin 'name' özelliğini konsola yazdırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const isEven = num => num % 2 === 0;`",
      options: [
        "Bir sayının çift olup olmadığını kontrol eder",
        "Bir sayının tek olup olmadığını kontrol eder",
        "Bir sayıyı iki katına çıkarır",
        "Bir sayıyı ekrana yazdırır",
      ],
      correctAnswer: "Bir sayının çift olup olmadığını kontrol eder",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`let count = 0; count++`",
      options: [
        "count değişkenini 1 artırır",
        "count değişkenini 1 azaltır",
        "count değişkenini 0 yapar",
        "count değişkenini ekrana yazdırır",
      ],
      correctAnswer: "count değişkenini 1 artırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`function greet(name) { return 'Hello ' + name; }`",
      options: [
        "Bir kişiye selam verir",
        "Bir kişiyi tanımlar",
        "Bir fonksiyon başlatır",
        "Bir sayı toplar",
      ],
      correctAnswer: "Bir kişiye selam verir",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`const isActive = true; if (isActive) { console.log('Active'); }`",
      options: [
        "isActive true olduğu için 'Active' yazdırır",
        "isActive false olduğu için 'Active' yazdırır",
        "isActive değerini değiştirir",
        "isActive'i ekrana yazdırır",
      ],
      correctAnswer: "isActive true olduğu için 'Active' yazdırır",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`let result = 5 + 5 * 2;`",
      options: [
        "5 + 5 * 2 işlemini yapar, sonucu 15 olarak döndürür",
        "5 + 5 * 2 işlemiyle 10 döndürür",
        "5 + 5 * 2 işlemiyle 20 döndürür",
        "Bir fonksiyon oluşturur",
      ],
      correctAnswer: "5 + 5 * 2 işlemini yapar, sonucu 15 olarak döndürür",
    },
    {
      question: "Aşağıdaki kod ne işe yarar?\n\n`let x = 10; let y = 5; let result = x / y;`",
      options: [
        "x değişkenini y değişkenine böler ve sonucu result'a atar",
        "x ve y'yi toplar",
        "x ve y'yi çıkarır",
        "x ve y'yi çarpar",
      ],
      correctAnswer: "x değişkenini y değişkenine böler ve sonucu result'a atar",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // Soruyu kontrol et
  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      Alert.alert("Tebrikler!", "Doğru cevap!");
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      Alert.alert("Hata", "Yanlış cevap, tekrar deneyin.");
    }

    // Sonraki soruya geç
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert(
        "Quiz Tamamlandı",
        `Sonuçlarınız:\nDoğru Cevaplar: ${score + 1}\nYanlış Cevaplar: ${incorrectAnswers}`
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Quiz</Text>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>

      {questions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Puan: {score}</Text>
        <Text style={styles.scoreText}>Yanlış Cevaplar: {incorrectAnswers}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  question: { fontSize: 18, marginBottom: 20 },
  optionButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: { fontSize: 16 },
  scoreContainer: { marginTop: 20, alignItems: "center" },
  scoreText: { fontSize: 18, fontWeight: "bold" },
});
