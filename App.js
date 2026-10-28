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
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <View style={styles.brandMarkInner} />
              </View>
              <Text style={styles.brandName}>ruang cerita</Text>
              <Text style={styles.edition}>VOL. 01</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>SEBUAH PERKENALAN</Text>
              <Text accessibilityRole="header" style={styles.heading}>
                Hai, nama kamu siapa?
              </Text>
              <Text style={styles.subtitle}>
                Ini adalah galeri foto pertamaku.
                {'\n'}Mari berkenalan lewat dua cerita kecil.
              </Text>
            </View>

            <View style={styles.galleryHeading}>
              <Text accessibilityRole="header" style={styles.galleryTitle}>
                Sudut favoritku
              </Text>
              <View style={styles.countBadge}>
                <View style={styles.dot} />
                <Text style={styles.countText}>2 foto</Text>
              </View>
            </View>

            {/* Flexbox row membuat kedua foto selalu berdampingan. */}
            <View style={styles.gallery}>
              <View style={styles.photoCard}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto1.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Puncak pegunungan yang disinari matahari"
                  />
                  <View style={styles.photoNumber}>
                    <Text style={styles.photoNumberText}>01</Text>
                  </View>
                </View>
                <View style={styles.caption}>
                  <Text style={styles.photoCategory}>PEGUNUNGAN</Text>
                  <Text style={styles.photoTitle}>Setinggi mimpi</Text>
                  <Text style={styles.photoDescription}>Tenang di ketinggian.</Text>
                </View>
              </View>

              <View style={[styles.photoCard, styles.secondCard]}>
                <View style={styles.imageFrame}>
                  <Image
                    source={require('./assets/foto2.jpg')}
                    style={styles.photo}
                    resizeMode="cover"
                    accessibilityLabel="Pantai berpasir putih dengan laut biru dan pohon kelapa"
                  />
                  <View style={styles.photoNumber}>
                    <Text style={styles.photoNumberText}>02</Text>
                  </View>
                </View>
                <View style={styles.caption}>
                  <Text style={styles.photoCategory}>TEPI LAUT</Text>
                  <Text style={styles.photoTitle}>Seluas cerita</Text>
                  <Text style={styles.photoDescription}>Jeda bersama ombak.</Text>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <View style={styles.footerLine} />
              <Text style={styles.footerSymbol}>✳</Text>
              <View style={styles.footerLine} />
            </View>
            <Text style={styles.footerText}>Dua foto. Banyak cerita.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F3EB' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', paddingVertical: 36 },
  content: { width: '100%', maxWidth: 520, alignSelf: 'center', paddingHorizontal: 24 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  brandMark: {
    width: 24, height: 24, borderRadius: 12, backgroundColor: '#314B3F',
    alignItems: 'center', justifyContent: 'center',
  },
  brandMarkInner: { width: 9, height: 9, borderRadius: 5, borderWidth: 1.5, borderColor: '#F6F3EB' },
  brandName: { flex: 1, fontSize: 17, fontWeight: '700', color: '#314B3F', letterSpacing: -0.5 },
  edition: { fontSize: 10, letterSpacing: 1.8, fontWeight: '600', color: '#7C8176' },
  intro: { marginTop: 38 },
  eyebrow: { fontSize: 10, fontWeight: '700', letterSpacing: 2.1, color: '#7A836D', marginBottom: 13 },
  heading: { maxWidth: 340, fontSize: 42, lineHeight: 47, fontWeight: '700', letterSpacing: -1.9, color: '#263E33' },
  subtitle: { fontSize: 14, lineHeight: 22, color: '#777B70', marginTop: 16 },
  galleryHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 36, marginBottom: 18 },
  galleryTitle: { fontSize: 17, fontWeight: '600', color: '#314B3F', letterSpacing: -0.4 },
  countBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#E8EBDD', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 },
  dot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#7C8C66' },
  countText: { color: '#657456', fontSize: 10, fontWeight: '600' },
  gallery: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  photoCard: { flex: 1, minWidth: 0, backgroundColor: '#FFFEFA', padding: 7, borderRadius: 15, borderWidth: 1, borderColor: '#E8E5DB' },
  secondCard: { marginTop: 26 },
  imageFrame: { borderRadius: 10, overflow: 'hidden', position: 'relative', backgroundColor: '#DFE4D9' },
  photo: { width: '100%', aspectRatio: 0.72 },
  photoNumber: { position: 'absolute', left: 9, top: 9, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 13, backgroundColor: '#FFFEFAE8' },
  photoNumberText: { fontSize: 9, fontWeight: '700', color: '#314B3F' },
  caption: { paddingHorizontal: 5, paddingTop: 13, paddingBottom: 11 },
  photoCategory: { fontSize: 8, fontWeight: '700', letterSpacing: 1.3, color: '#879176', marginBottom: 6 },
  photoTitle: { fontSize: 15, fontWeight: '700', color: '#314B3F', letterSpacing: -0.5 },
  photoDescription: { fontSize: 10, color: '#85877E', marginTop: 5, lineHeight: 15 },
  footer: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 28 },
  footerLine: { flex: 1, height: 1, backgroundColor: '#DDDFD1' },
  footerSymbol: { fontSize: 22, color: '#83916C' },
  footerText: { textAlign: 'center', color: '#95998B', fontSize: 10, letterSpacing: 0.6, marginTop: 7 },
});
