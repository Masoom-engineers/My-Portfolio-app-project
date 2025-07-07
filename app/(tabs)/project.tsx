import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProjectsScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const projects = [
    'Portfolio App (this one!)',
    'To-Do List App',
    'Weather App using API',
    'E-commerce App',
    'Lead & Order Management Web App',
    'Social Media App',
    'Fitness Tracker App',
    'Blogging Platform',
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDark ? '#111' : '#f9f9f9' }]}>
      <Text style={[styles.heading, { color: isDark ? '#fff' : '#000' }]}>
        🚀 My Projects
      </Text>

      <View style={styles.list}>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Ionicons name="rocket-outline" size={20} color={isDark ? '#4ade80' : '#2f855a'} />
            <Text style={[styles.projectText, { color: isDark ? '#ddd' : '#333' }]}>
              {project}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    gap: 16, // Requires React Native 0.71+ or use marginBottom instead
  },
  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // Optional: or use marginRight
    marginBottom: 12,
  },
  projectText: {
    fontSize: 18,
    flexShrink: 1,
  },
});
