import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function AboutScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? '#0d0d0d' : '#f0f0f0';
  const textColor = isDark ? '#ffffff' : '#111111';
  const subTextColor = isDark ? '#bbbbbb' : '#555555';
  const cardColor = isDark ? '#1a1a1a' : '#ffffff';

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  }, []);

  const openLink = (url: string) => Linking.openURL(url);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: bgColor,
      }}
    >
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: cardColor,
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          {/* Avatar with gradient ring */}
          <LinearGradient
            colors={['#10b981', '#3b82f6']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.avatarRing}
          >
            <Image
              source={{ uri: 'https://electronicspices.com/uploads/brand/1738236935daly.png' }}
              style={styles.avatar}
            />
          </LinearGradient>

          {/* Name & Role */}
          <Text style={[styles.name, { color: textColor }]}>Niraj Yadav</Text>
          <Text style={[styles.role, { color: subTextColor }]}>
            React Native & Front-End Developer
          </Text>

          {/* Bio */}
          <Text style={[styles.bio, { color: subTextColor }]}>
            I'm a self-motivated developer with experience in cross-platform apps and clean UI/UX.
            Passionate about React Native, Tailwind CSS, TypeScript, and frontend engineering.
          </Text>

          {/* Social Icons */}
          <View style={styles.socialRow}>
            <Pressable onPress={() => openLink('https://github.com/nirajy940')}>
              <Ionicons name="logo-github" size={26} color={isDark ? '#ccc' : '#333'} style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => openLink('https://linkedin.com/in/nirajyadav')}>
              <Ionicons name="logo-linkedin" size={26} color="#0077b5" style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => openLink('mailto:nirajy940@gmail.com')}>
              <Ionicons name="mail-outline" size={26} color={isDark ? '#ccc' : '#333'} style={styles.icon} />
            </Pressable>
          </View>

          {/* Resume Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: isDark ? '#4ade80' : '#10b981',
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={() => openLink('https://drive.google.com/file/d/your-resume-link/view')}
          >
            <Text style={styles.buttonText}>📄 Download Resume</Text>
          </Pressable>

          {/* Education Table */}
          <Text style={[styles.sectionTitle, { color: textColor }]}>🎓 Education</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCol, { color: textColor }]}>Qualification</Text>
              <Text style={[styles.tableCol, { color: textColor }]}>Board/University</Text>
              <Text style={[styles.tableCol, { color: textColor }]}>Year</Text>
            </View>
            {[
              ['10th (High School)', 'UP Board', '2013'],
              ['12th (Intermediate)', 'UP Board', '2015'],
              ['ITI (Electrician)', 'Govt. ITI Chandauli', '2016-2018'],
              ['B.Tech (CSE)', 'AKTU', '2018-2022'],
            ].map(([q, b, y], idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{q}</Text>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{b}</Text>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{y}</Text>
              </View>
            ))}
          </View>

          {/* Certification Table */}
          <Text style={[styles.sectionTitle, { color: textColor }]}>📜 Certifications</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCol, { color: textColor }]}>Course</Text>
              <Text style={[styles.tableCol, { color: textColor }]}>Platform</Text>
              <Text style={[styles.tableCol, { color: textColor }]}>Year</Text>
            </View>
            {[
              ['React Native Developer', 'Udemy', '2023'],
              ['Hackathon Finalist', 'SIH', '2022'],
              ['Top Contributor', 'GitHub', '2023'],
            ].map(([c, p, y], idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{c}</Text>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{p}</Text>
                <Text style={[styles.tableCol, { color: subTextColor }]}>{y}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  avatarRing: {
    padding: 4,
    borderRadius: 999,
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
    maxWidth: 320,
  },
  socialRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  tableCol: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
  },
});
