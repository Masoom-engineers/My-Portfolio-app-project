import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  Linking,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
    <View style={[styles.container, { backgroundColor: bgColor }]}>
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
        {/* Gradient Avatar Ring */}
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

        <Text style={[styles.name, { color: textColor }]}>Niraj Yadav</Text>
        <Text style={[styles.role, { color: subTextColor }]}>
          React Native & Front-End Developer
        </Text>

        <Text style={[styles.bio, { color: subTextColor }]}>
          I build scalable, delightful mobile experiences using React Native, TypeScript, and Tailwind. Focused on clean code and seamless UI/UX.
        </Text>

        {/* Social Icons with Links */}
        <View style={styles.socialRow}>
          <Pressable onPress={() => openLink('https://github.com/yourusername')}>
            <Ionicons name="logo-github" size={26} color={isDark ? '#ccc' : '#333'} style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => openLink('https://linkedin.com/in/yourprofile')}>
            <Ionicons name="logo-linkedin" size={26} color="#0077b5" style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => openLink('mailto:you@example.com')}>
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
          onPress={() => openLink('https://your-resume-link.com')}
        >
          <Text style={styles.buttonText}>📄 Download Resume</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 28,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    marginBottom: 20,
    lineHeight: 22,
    maxWidth: 300,
  },
  socialRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
