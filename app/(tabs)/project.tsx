import { ScrollView, View, Text, StyleSheet, useColorScheme, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProjectsScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? '#111' : '#f9f9f9';
  const cardBg = isDark ? '#1f1f1f' : '#fff';
  const textColor = isDark ? '#ddd' : '#222';
  const headingColor = isDark ? '#fff' : '#000';
  const iconColor = isDark ? '#4ade80' : '#2f855a';

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
      <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
      }}>
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.heading, { color: headingColor }]}>🚀 My Projects</Text>

      <View style={styles.cardContainer}>
        {projects.map((project, index) => (
          <View key={index} style={[styles.card, { backgroundColor: cardBg }]}>
            <Ionicons name="rocket-outline" size={20} color={iconColor} />
            <Text style={[styles.cardText, { color: textColor }]}>{project}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
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
    marginBottom: 24,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12, // React Native >= 0.71+, use margin if needed
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    margin: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    marginLeft: 8,
    flexShrink: 1,
  },
});
