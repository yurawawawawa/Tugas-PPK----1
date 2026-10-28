import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text accessibilityRole="header" style={styles.heading}>
                Hai, nama kamu siapa?
              </Text>
            </View>

            {/* Dua foto landscape berdampingan menggunakan Flexbox. */}
            <View style={styles.gallery}>
              <View style={styles.photoCard}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto1.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Pemandangan pegunungan dengan lembah dan pepohonan hijau"
                  />
                </View>
                <View style={styles.caption}>
                  <Text style={styles.captionLabel}>Caption:</Text>
                  <Text style={styles.captionTitle}>Pegunungan</Text>
                  <Text style={styles.captionText}>
                    Pemandangan gunung dan lembah hijau. Suasana alam yang tenang
                    membuat pikiran terasa lebih segar.
                  </Text>
                </View>
              </View>

              <View style={styles.photoCard}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto2.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Pantai berpasir putih dan ombak laut saat senja"
                  />
                </View>
                <View style={styles.caption}>
                  <Text style={styles.captionLabel}>Caption:</Text>
                  <Text style={styles.captionTitle}>Pantai</Text>
                  <Text style={styles.captionText}>
                    Pemandangan pantai saat senja. Ombak kecil dan langit yang
                    hangat menjadi teman untuk menikmati sore.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  header: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A1A7B3',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 24,
  },
  heading: {
    color: '#121849',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  gallery: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'stretch',
  },
  photoCard: {
    flex: 1,
    minWidth: 0,
  },
  imageFrame: {
    aspectRatio: 4 / 3,
    borderWidth: 1,
    borderColor: '#B8BECA',
    backgroundColor: '#EEF0F4',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  caption: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#C9CED7',
    padding: 12,
    marginTop: 12,
  },
  captionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  captionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#121849',
    marginBottom: 8,
  },
  captionText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#333842',
  },
});
