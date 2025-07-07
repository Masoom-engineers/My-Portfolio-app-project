import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          👋 Hi, I'm Niraj Yadav
        </Text>

        <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#444' }]}>
          React Native Developer | Front-end Engineer
        </Text>

        <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#000' }]}>
          💼 Tech Stack
        </Text>

        <Text style={[styles.skills, { color: isDark ? '#ccc' : '#333' }]}>
          • React Native{'\n'}
          • React.js / Next.js{'\n'}
          • JavaScript / TypeScript{'\n'}
          • PHP / Laravel / WordPress{'\n'}
          • REST APIs / Git / GitHub{'\n'}
          • Tailwind CSS / UI/UX Design{'\n'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  skills: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
});
