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
            <Text accessibilityRole="header" style={styles.heading}>
              Hai, Arga
            </Text>

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
                  <Text style={styles.captionTitle}>Setinggi mimpi</Text>
                  <Text style={styles.captionText}>
                    Puncak gunung menjulang di antara awan, sementara pepohonan
                    hijau memenuhi lembah di bawahnya. Pemandangan ini memberi
                    ruang untuk berhenti sejenak dan menikmati ketenangan alam.
                    Setiap perjalanan mengingatkan bahwa mimpi besar dimulai dari
                    langkah kecil.
                  </Text>
                </View>
              </View>

              <View style={styles.photoCard}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto2.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Ombak di pantai berpasir putih saat senja"
                  />
                </View>
                <View style={styles.caption}>
                  <Text style={styles.captionTitle}>Seluas cerita</Text>
                  <Text style={styles.captionText}>
                    Cahaya senja memantul di permukaan laut dan menyapu pasir
                    dengan warna keemasan. Ombak kecil datang silih berganti,
                    menghadirkan suasana yang hangat dan menenangkan. Di tepi
                    pantai, hari yang panjang terasa lebih ringan saat dinikmati
                    perlahan, tanpa perlu terburu-buru.
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
    backgroundColor: '#F6F3EB',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 32,
  },
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    letterSpacing: -1.8,
    color: '#263E33',
    marginBottom: 28,
  },
  gallery: {
    flexDirection: 'column',
    gap: 24,
  },
  photoCard: {
    width: '100%',
    backgroundColor: '#FFFEFA',
    padding: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8E5DB',
  },
  imageFrame: {
    aspectRatio: 16 / 9,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor: '#DFE4D9',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  caption: {
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 10,
  },
  captionTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: '#314B3F',
    letterSpacing: -0.4,
  },
  captionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#85877E',
    marginTop: 4,
  },
});
