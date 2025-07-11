import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SkillsScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? '#0d0d0d' : '#fefefe';
  const textColor = isDark ? '#ffffff' : '#111111';
  const subTextColor = isDark ? '#aaaaaa' : '#555555';
  const badgeBg = isDark ? '#1f2937' : '#e5e7eb';
  const badgeText = isDark ? '#f9fafb' : '#1f2937';

  const skills = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'Firebase',
    'Git & GitHub',
    'REST APIs',
    'Tailwind CSS',
    'Redux Toolkit',
    'Expo SDK',
    'React Navigation',
    'Next.js',
    'React.js',
  ];

  return (

      <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
      }}>
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.title, { color: textColor }]}>🧠 My Skills</Text>
      <Text style={[styles.subtitle, { color: subTextColor }]}>
        Tools & tech I work with to build scalable and beautiful apps
      </Text>

      <View style={styles.grid}>
        {skills.map((skill, index) => (
          <View key={index} style={[styles.badge, { backgroundColor: badgeBg }]}>
            <Text style={[styles.badgeText, { color: badgeText }]}>{skill}</Text>
          </View>
        ))}
      </View>

      <Text style={[styles.footerNote, { color: subTextColor }]}>
        💪 Always learning and adding new skills!
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 320,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10, // Supported in React Native 0.71+
  },
  badge: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50, // More pill-like
    margin: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footerNote: {
    marginTop: 30,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    maxWidth: 300,
  },
});
