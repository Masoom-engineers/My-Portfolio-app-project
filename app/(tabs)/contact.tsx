import { View, Text, StyleSheet, useColorScheme, Linking, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? '#0e0e0e' : '#fefefe';
  const textColor = isDark ? '#ffffff' : '#111111';
  const cardColor = isDark ? '#1c1c1e' : '#ffffff';
  const iconColor = isDark ? '#ccc' : '#444';

  const contactItems = [
    {
      icon: 'mail-outline',
      label: 'Email',
      value: 'nirajy940@gmail.com',
      onPress: () => Linking.openURL('mailto:nirajy940@gmail.com'),
    },
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: '@nirajyadav',
      onPress: () => Linking.openURL('https://github.com/Masoom-engineers'),
    },
    {
      icon: 'logo-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/niraj-yadav-5444641a2/',
      onPress: () => Linking.openURL('https://www.linkedin.com/in/niraj-yadav-5444641a2/'),
    },
  ];

  return (
      <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
      }}>
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.heading, { color: textColor }]}>📞 Get in Touch</Text>

      {contactItems.map((item, index) => (
        <TouchableOpacity key={index} style={[styles.card, { backgroundColor: cardColor }]} onPress={item.onPress}>
          <Ionicons name={item.icon as any} size={24} color={iconColor} style={styles.icon} />
          <View>
            <Text style={[styles.label, { color: textColor }]}>{item.label}</Text>
            <Text style={[styles.value, { color: iconColor }]}>{item.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    maxWidth: 400,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    marginTop: 2,
  },
});
