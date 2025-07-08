import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LoadingProvider } from '../context/LoadingContext';

export default function Layout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'; 

  return (
    <SafeAreaProvider>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <LoadingProvider>
          <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <Stack screenOptions={{ headerShown: false }} />
            <StatusBar
              style={isDark ? 'light' : 'dark'}
              translucent
              backgroundColor="transparent"
            />
          </SafeAreaView>
        </LoadingProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
