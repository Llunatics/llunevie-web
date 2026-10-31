/* ==========================================================================
   Llunevie Web Showcase — Scroll-Card Physics, Live GitHub APK & Bilingual State
   ========================================================================== */

const GITHUB_REPO = "Llunatics/Llunevie";

const I18N = {
  en: {
    nav_prologue: "01 Intro",
    nav_reader: "02 Reader",
    nav_toc: "03 Artwork",
    nav_library: "04 Shelf",
    nav_scanner: "05 Scanner",
    nav_download: "06 Download",
    download_apk: "Download APK",
    hero_badge: "ANDROID EREADER & LIGHT NOVEL APP",
    hero_title: "A quiet place for your books and light novels.",
    hero_subtitle: "Read EPUB, PDF, and TXT files comfortably on Android. Built with natural page turns, automatic chapter and illustration indexing, and a personal bookshelf.",
    hero_cta_apk: "Download APK",
    hero_cta_github: "GitHub",
    screen_home_label: "Home",
    screen_reader_label: "Reader",
    screen_toc_label: "Chapters",

    ch2_tag: "02 · READING EXPERIENCE",
    ch2_title: "Read the way you like.",
    ch2_desc: "Switch between single-page flipbook, two-page landscape spread, vertical scroll, or webtoon strip.",
    ch2_f1_title: "Natural Page Turns & Two-Page Spread",
    ch2_f1_desc: "Smooth page curl, slide, and fade animations. Rotate to landscape for a full two-page book layout with a side scrubber.",
    ch2_f2_title: "15 Built-in Fonts & Clean Controls",
    ch2_f2_desc: "Fine-tune font size, weight, spacing, indent, and margins. The settings panel turns transparent while you drag any slider so you see changes live.",
    ch2_f3_title: "Highlights, Notes & Bookmarks",
    ch2_f3_desc: "Long-press to highlight passages in four pastel colors, attach personal notes, or bookmark pages with one tap.",

    ch3_tag: "03 · CHAPTERS & ILLUSTRATIONS",
    ch3_title: "Chapters and insert art, organized automatically.",
    ch3_desc: "Made for Light Novels and illustrated books. Llunevie maps chapters and pulls insert artwork into a dedicated gallery.",
    ch3_f1_title: "Automatic Table of Contents",
    ch3_f1_desc: "Detects chapters from EPUB navigation files, PDF bookmarks, linked Contents pages, and page headers or footers.",
    ch3_f2_title: "Color & Sketch Artwork Gallery",
    ch3_f2_desc: "Separates full-color paintings and black-and-white sketches from text pages, placing them in a two-column gallery right below the chapter list.",
    ch3_f3_title: "Full-Resolution Artwork Viewer",
    ch3_f3_desc: "Open any illustration in crisp high resolution with pinch-to-zoom and pan.",

    ch4_tag: "04 · PERSONAL LIBRARY",
    ch4_title: "Your digital and physical shelves in one place.",
    ch4_desc: "Keep your eReader files and physical book collection organized without accounts or cloud lock-in.",
    ch4_f1_title: "3D Spine Shelf Matched to Covers",
    ch4_f1_desc: "Book spines take their color directly from each cover and scale to the book's height.",
    ch4_f2_title: "Auto-Import Folder (/sdcard/Llunevie/Books)",
    ch4_f2_desc: "Drop new EPUB, PDF, or TXT files into your watched folder and they appear on your shelf automatically.",
    ch4_f3_title: "Four Shelf Views & Quick Filters",
    ch4_f3_desc: "Browse by 3D Spine, Cover Grid (2–5 books per row), Full Cover, or List view.",

    ch5_tag: "05 · SEARCH & ISBN SCANNER",
    ch5_title: "Add books by title or barcode.",
    ch5_desc: "Search global book catalogs at once or scan back-cover ISBN barcodes with your camera.",
    ch5_f1_title: "Fast Multi-Source Search",
    ch5_f1_desc: "Fetches book metadata and covers from Open Library, Google Books, and MyAnimeList (Jikan) simultaneously.",
    ch5_f2_title: "Single & Batch Barcode Scanner",
    ch5_f2_desc: "Scan one book straight to a shelf, or use Batch Scan to queue a whole stack of books in one go.",
    ch5_f3_title: "Manual Entry Fallback",
    ch5_f3_desc: "If an older or local ISBN isn't in online catalogs, fill in its details manually without losing your queue.",

    ch6_tag: "06 · PRIVACY & DOWNLOAD",
    ch6_title: "Everything stays on your phone.",
    ch6_desc: "No sign-ups, no ads, no tracking. Reading time, streaks, highlights, and notes are stored locally on your device.",
    ch6_f1_title: "6-Month Reading Log",
    ch6_f1_desc: "See your daily reading time, active streak, reading pace, and most-read books at a glance.",
    ch6_f2_title: "4 Reading Themes + System Sync",
    ch6_f2_desc: "Choose Paper, White, Sepia, or Black (with pure #000000 AMOLED support) or follow your phone's dark mode.",
    dl_card_title: "Get Llunevie for Android",
    dl_card_sub: "Android 8.0+ (API 26+). Direct APK from GitHub Releases."
  },
  id: {
    nav_prologue: "01 Beranda",
    nav_reader: "02 Reader",
    nav_toc: "03 Ilustrasi",
    nav_library: "04 Pustaka",
    nav_scanner: "05 Scanner",
    nav_download: "06 Unduh",
    download_apk: "Unduh APK",
    hero_badge: "APLIKASI EREADER & LIGHT NOVEL ANDROID",
    hero_title: "Ruang tenang untuk membaca novel dan koleksi bukumu.",
    hero_subtitle: "Baca file EPUB, PDF, dan TXT dengan nyaman di Android. Dilengkapi animasi balik halaman yang natural, indeks bab serta ilustrasi otomatis, dan rak buku pribadi.",
    hero_cta_apk: "Unduh APK",
    hero_cta_github: "GitHub",
    screen_home_label: "Beranda",
    screen_reader_label: "Reader",
    screen_toc_label: "Daftar Bab",

    ch2_tag: "02 · PENGALAMAN BACA",
    ch2_title: "Baca sesuai gayamu.",
    ch2_desc: "Pilih mode balik halaman (Flipbook), bentangan 2 halaman landscape, gulir vertikal, atau webtoon.",
    ch2_f1_title: "Flipbook Natural & Mode 2 Halaman",
    ch2_f1_desc: "Transisi lipatan kertas, geser (slide), dan pudar (fade) yang halus. Tersedia tampilan 2 halaman penuh dengan kontrol di sisi kiri.",
    ch2_f2_title: "15 Font Bawaan & Pengaturan Bersih",
    ch2_f2_desc: "Atur ukuran teks, ketebalan, spasi, indentasi, dan margin. Saat slider digeser, menu pengaturan otomatis transparan agar perubahan teks langsung terlihat.",
    ch2_f3_title: "Highlight, Catatan & Bookmark",
    ch2_f3_desc: "Tahan teks untuk menandai kalimat dengan 4 warna pastel, tambahkan catatan, atau simpan halaman lewat tombol bookmark.",

    ch3_tag: "03 · BAB & ILUSTRASI",
    ch3_title: "Daftar bab dan ilustrasi tersusun otomatis.",
    ch3_desc: "Cocok untuk Light Novel dan buku bergambar. Llunevie mengenali struktur bab sekaligus mengumpulkan gambar sisipan ke galeri khusus.",
    ch3_f1_title: "Deteksi Daftar Bab Otomatis",
    ch3_f1_desc: "Membaca daftar bab dari EPUB, bookmark PDF, halaman Daftar Isi, hingga judul bab di bagian atas dan bawah halaman.",
    ch3_f2_title: "Galeri Ilustrasi Warna & Sketsa",
    ch3_f2_desc: "Memisahkan gambar berwarna maupun sketsa hitam-putih dari halaman teks biasa, lalu menampilkannya dalam galeri 2 kolom di bawah daftar bab.",
    ch3_f3_title: "Tampilan Gambar Resolusi Penuh",
    ch3_f3_desc: "Buka ilustrasi dalam resolusi tajam lengkap dengan fitur cubit untuk memperbesar (pinch-to-zoom).",

    ch4_tag: "04 · PUSTAKA PRIBADI",
    ch4_title: "Koleksi digital dan buku fisik dalam satu rak.",
    ch4_desc: "Kelola file eReader dan catatan koleksi buku fisikmu dengan rapi tanpa perlu akun.",
    ch4_f1_title: "Rak 3D Spine Sesuai Warna Sampul",
    ch4_f1_desc: "Warna punggung buku otomatis menyesuaikan warna sampul dan ukuran tingginya mengikuti dimensi buku.",
    ch4_f2_title: "Folder Pantauan Otomatis (Llunevie/Books)",
    ch4_f2_desc: "Taruh file EPUB, PDF, atau TXT baru ke dalam folder Llunevie/Books dan buku langsung masuk ke rak secara otomatis.",
    ch4_f3_title: "4 Tampilan Rak & Filter Ringkas",
    ch4_f3_desc: "Lihat koleksi dalam mode 3D Spine, Grid Sampul (2–5 buku per baris), Sampul Penuh, atau Daftar.",

    ch5_tag: "05 · PENCARIAN & SCANNER ISBN",
    ch5_title: "Tambah buku lewat pencarian atau kamera.",
    ch5_desc: "Cari judul buku dari berbagai katalog sekaligus atau pindai barcode ISBN di sampul belakang buku fisik.",
    ch5_f1_title: "Pencarian Katalog Paralel",
    ch5_f1_desc: "Mengambil info buku dan gambar sampul dari Open Library, Google Books, dan MyAnimeList (Jikan) secara bersamaan.",
    ch5_f2_title: "Single Scan & Batch Scan",
    ch5_f2_desc: "Pindai satu buku langsung ke rak pilihanmu, atau gunakan Batch Scan untuk memindai banyak buku beruntun.",
    ch5_f3_title: "Input Manual Jika ISBN Belum Terdaftar",
    ch5_f3_desc: "Jika ada ISBN buku yang belum ditemukan di katalog online, kamu bisa langsung mengisi detailnya secara manual.",

    ch6_tag: "06 · PRIVASI & UNDUHAN",
    ch6_title: "Semua data tersimpan di ponselmu.",
    ch6_desc: "Tanpa login, tanpa iklan, tanpa pelacakan. Riwayat waktu baca, streak, highlight, dan catatan disimpan sepenuhnya di memori perangkat.",
    ch6_f1_title: "Catatan Waktu Baca 6 Bulan",
    ch6_f1_desc: "Lihat durasi baca harian, rekor hari beruntun, kecepatan baca, dan daftar buku yang paling sering kamu baca.",
    ch6_f2_title: "4 Tema Baca + Ikuti Mode HP",
    ch6_f2_desc: "Tersedia tema Paper, White, Sepia, dan Black (termasuk mode hitam pekat AMOLED) atau otomatis mengikuti tema terang/gelap ponsel.",
    dl_card_title: "Pasang Llunevie di Android",
    dl_card_sub: "Android 8.0+ (API 26+). File APK langsung dari GitHub Releases."
  }
};

let currentLang = "id";
let currentTheme = "paper";
let scrollAnimationId = null;

function setTheme(themeName) {
  currentTheme = themeName;
  document.documentElement.setAttribute("data-theme", themeName);
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    const isMatch = btn.getAttribute("data-theme-btn") === themeName;
    btn.classList.toggle("active", isMatch);
  });
  try {
    localStorage.setItem("llunevie_web_theme", themeName);
  } catch (e) {}
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "id";
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
  try {
    localStorage.setItem("llunevie_web_lang", currentLang);
  } catch (e) {}
}

let heroCenterIdx = 0;
function selectHeroPhone(idx) {
  heroCenterIdx = idx;
  const slots = document.querySelectorAll(".hero-phone-slot");
  slots.forEach((slot, i) => {
    slot.classList.remove("pos-center", "pos-left", "pos-right");
    const diff = (i - idx + 3) % 3;
    if (diff === 0) slot.classList.add("pos-center");
    else if (diff === 1) slot.classList.add("pos-right");
    else slot.classList.add("pos-left");
  });
  document.querySelectorAll("[data-hero-tab]").forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
}

function switchChapterScreen(chapterId, screenKey) {
  const container = document.getElementById(chapterId);
  if (!container) return;

  container.querySelectorAll("[data-screen-panel]").forEach(panel => {
    const isTarget = panel.getAttribute("data-screen-panel") === screenKey;
    panel.classList.toggle("hidden", !isTarget);
  });

  container.querySelectorAll("[data-screen-tab]").forEach(tab => {
    const isTarget = tab.getAttribute("data-screen-tab") === screenKey;
    tab.classList.toggle("active", isTarget);
  });
}

function updateScrollCardPhysics() {
  const slots = document.querySelectorAll(".chapter-card-slot");
  const railDots = document.querySelectorAll(".rail-dot");
  const navLinks = document.querySelectorAll("[data-chapter-link]");
  const viewportH = window.innerHeight;
  const isMobile = window.innerWidth < 768;

  let activeChapterIdx = 0;

  slots.forEach((slot, idx) => {
    const card = slot.querySelector(".chapter-card");
    if (!card) return;

    const rect = slot.getBoundingClientRect();
    if (rect.top <= viewportH * 0.45) {
      activeChapterIdx = idx;
    }

    const nextSlot = slots[idx + 1];
    if (nextSlot) {
      const nextRect = nextSlot.getBoundingClientRect();
      const overlapStart = viewportH * 0.92;
      const overlapEnd = isMobile ? 68 : 82;
      if (nextRect.top < overlapStart) {
        const progress = Math.min(1, Math.max(0, (overlapStart - nextRect.top) / Math.max(120, overlapStart - overlapEnd)));
        const maxScaleDrop = isMobile ? 0.045 : 0.07;
        const scale = 1 - (progress * maxScaleDrop);
        const opacity = Math.max(0.08, 1 - Math.pow(progress, 1.15) * 0.92);
        const translateY = -(progress * (isMobile ? 10 : 20));
        const blurPx = (progress * (isMobile ? 2.5 : 4.2)).toFixed(2);
        card.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = progress > 0.06 ? `blur(${blurPx}px)` : "none";
      } else {
        card.style.transform = "translate3d(0, 0, 0) scale(1)";
        card.style.opacity = "1";
        card.style.filter = "none";
      }
    } else {
      card.style.transform = "translate3d(0, 0, 0) scale(1)";
      card.style.opacity = "1";
      card.style.filter = "none";
    }
  });

  railDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeChapterIdx);
  });
  navLinks.forEach((link, idx) => {
    link.classList.toggle("active", idx === activeChapterIdx);
  });
}

function scrollToChapter(idx) {
  const slots = document.querySelectorAll(".chapter-card-slot");
  const target = slots[idx];
  if (!target) return;
  const offset = window.innerWidth < 768 ? 60 : 72;
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

async function fetchLatestGitHubRelease() {
  const versionBadges = document.querySelectorAll("[data-release-version]");
  const sizeBadges = document.querySelectorAll("[data-release-size]");
  const apkLinks = document.querySelectorAll("[data-apk-download-link]");

  try {
    let releaseData = null;
    const latestRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
      headers: { "Accept": "application/vnd.github+json" }
    });

    if (latestRes.ok) {
      releaseData = await latestRes.json();
    } else {
      const allRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=5`, {
        headers: { "Accept": "application/vnd.github+json" }
      });
      if (allRes.ok) {
        const list = await allRes.json();
        if (Array.isArray(list) && list.length > 0) {
          releaseData = list[0];
        }
      }
    }

    if (!releaseData) return;

    const tagName = releaseData.tag_name || "v0.2.0";
    const assets = Array.isArray(releaseData.assets) ? releaseData.assets : [];
    const apkAsset = assets.find(a => a && typeof a.name === "string" && a.name.toLowerCase().endsWith(".apk")) || assets[0];

    versionBadges.forEach(el => {
      el.textContent = tagName;
    });

    if (apkAsset && apkAsset.browser_download_url) {
      apkLinks.forEach(link => {
        link.setAttribute("href", apkAsset.browser_download_url);
      });
      if (apkAsset.size) {
        const mb = (apkAsset.size / (1024 * 1024)).toFixed(1);
        sizeBadges.forEach(el => {
          el.textContent = `${mb} MB · APK`;
        });
      }
    } else if (releaseData.html_url) {
      apkLinks.forEach(link => {
        link.setAttribute("href", releaseData.html_url);
      });
    }
  } catch (err) {}
}

function openScreenshotLightbox(imgSrc, captionText) {
  const modal = document.getElementById("screenshotLightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  if (!modal || !img) return;
  img.src = imgSrc;
  if (cap) cap.textContent = captionText || "";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeScreenshotLightbox() {
  const modal = document.getElementById("screenshotLightbox");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

window.addEventListener("DOMContentLoaded", () => {
  try {
    const savedTheme = localStorage.getItem("llunevie_web_theme");
    if (savedTheme && ["paper", "white", "sepia", "black"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme("paper");
    }
    const savedLang = localStorage.getItem("llunevie_web_lang");
    if (savedLang && ["id", "en"].includes(savedLang)) {
      setLanguage(savedLang);
    } else {
      setLanguage("id");
    }
  } catch (e) {
    setTheme("paper");
    setLanguage("id");
  }

  window.addEventListener("scroll", () => {
    if (!scrollAnimationId) {
      scrollAnimationId = window.requestAnimationFrame(() => {
        updateScrollCardPhysics();
        scrollAnimationId = null;
      });
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateScrollCardPhysics();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeScreenshotLightbox();
    }
  });

  updateScrollCardPhysics();
  fetchLatestGitHubRelease();
});
