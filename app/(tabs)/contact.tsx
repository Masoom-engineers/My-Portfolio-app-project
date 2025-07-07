import { View, Text, StyleSheet, useColorScheme, Linking, TouchableOpacity } from 'react-native';
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
      value: 'niraj@example.com',
      onPress: () => Linking.openURL('mailto:niraj@example.com'),
    },
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: '@nirajyadav',
      onPress: () => Linking.openURL('https://github.com/nirajyadav'),
    },
    {
      icon: 'logo-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/nirajyadav',
      onPress: () => Linking.openURL('https://www.linkedin.com/in/nirajyadav'),
    },
  ];

  return (
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
