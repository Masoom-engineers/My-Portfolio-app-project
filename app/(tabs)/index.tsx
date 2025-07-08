import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function HomeScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "#0f172a" : "#f8fafc";
  const textColor = isDark ? "#f1f5f9" : "#0f172a";
  const subTextColor = isDark ? "#94a3b8" : "#475569";
  const cardColor = isDark ? "#1e293b" : "#ffffff";

  const techStack = {
    "Front-end": [
      "React Native",
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    "Back-end": ["Laravel", "PHP"],
    "CMS / Tools": ["WordPress", "REST APIs", "Git", "GitHub"],
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bgColor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <LinearGradient
        colors={isDark ? ["#0f172a", "#1e293b"] : ["#f8fafc", "#e2e8f0"]}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Animated.View
            style={[
              styles.card,
              { backgroundColor: cardColor, opacity: fadeAnim },
            ]}
          >
            <Image
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5603AQF2yRYEZhCM9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727014134631?e=1757548800&v=beta&t=caI7LMzz6FNXME0gHZRSr3m9-9v6ExnUwTkXgz8k25I",
              }}
              style={styles.avatar}
            />
            <Text style={[styles.name, { color: textColor }]}>
              👋 Niraj Yadav
            </Text>
            <Text style={[styles.role, { color: subTextColor }]}>
              Full Stack Developer | React Native Enthusiast | UI/UX Designer
            </Text>

            <Text style={[styles.sectionTitle, { color: textColor }]}>
              💼 Tech Stack
            </Text>
            {Object.entries(techStack).map(([category, techs], idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={[styles.tableHeader, { color: subTextColor }]}>
                  {category}
                </Text>
                <View style={styles.rowItems}>
                  {techs.map((item, index) => (
                    <View key={index} style={styles.itemBox}>
                      <Text style={[styles.itemText, { color: textColor }]}>
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  card: {
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#3b82f6",
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  tableRow: {
    marginBottom: 12,
    alignSelf: "stretch",
  },
  tableHeader: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  rowItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  itemBox: {
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  itemText: {
    fontSize: 13,
  },
});
