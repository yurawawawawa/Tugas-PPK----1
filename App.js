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
                  <Text style={styles.captionTitle}>Pegunungan</Text>
                  <Text style={styles.captionText}>
                    Foto ini menampilkan deretan pegunungan dengan puncak
                    bersalju, lembah yang luas, dan pepohonan hijau. Langit biru
                    serta awan putih terlihat di bagian atas, sementara hutan
                    memenuhi lereng di bagian depan. Perpaduan warna dan bentuk
                    alam membuat pemandangan terlihat sejuk dan asri.
                  </Text>
                </View>
              </View>

              <View style={[styles.photoCard, styles.secondCard]}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto2.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Ombak di pantai berpasir putih saat senja"
                  />
                </View>
                <View style={styles.caption}>
                  <Text style={styles.captionTitle}>Pantai</Text>
                  <Text style={styles.captionText}>
                    Foto ini menampilkan pantai berpasir putih dengan air laut
                    yang jernih. Ombak kecil terlihat menyapu garis pantai,
                    sementara cahaya matahari memberi warna keemasan pada pasir
                    dan permukaan air. Di dekat cakrawala, langit tampak hangat
                    dengan awan yang mendapat pantulan cahaya matahari.
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  photoCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#FFFEFA',
    padding: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8E5DB',
  },
  secondCard: {
    marginTop: 26,
  },
  imageFrame: {
    aspectRatio: 0.72,
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
    textAlign: 'justify',
    color: '#85877E',
    marginTop: 4,
  },
});
