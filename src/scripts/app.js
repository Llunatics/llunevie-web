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
    nav_scanner: "05 Import",
    nav_download: "06 Download",
    download_apk: "Download APK",
    hero_badge: "EREADER & LIGHT NOVEL ANDROID",
    hero_title: "A quiet place for your books and light novels.",
    hero_subtitle: "Read EPUB, PDF, and TXT comfortably on Android. Built with smooth page turns, automatic chapter and artwork indexing, and a personal bookshelf.",
    hero_cta_apk: "Download APK",
    hero_cta_github: "GitHub",
    screen_home_label: "Light",
    screen_reader_label: "Reader",
    screen_toc_label: "Dark",
    tap_to_zoom: "Tap screen to enlarge",

    ch2_tag: "02 · READING EXPERIENCE",
    ch2_title: "Read the way you like.",
    ch2_desc: "Switch between single-page flipbook, two-page landscape spread, vertical scroll, or webtoon strip.",
    ch2_tab_1: "1 Page",
    ch2_tab_2: "2-Page Spread",
    ch2_f1_title: "Smooth Page Turns & Two-Page Mode",
    ch2_f1_desc: "Natural curl, slide, and fade transitions, plus a full-screen two-page landscape layout.",
    ch2_f2_title: "15 Built-in Fonts & Live Preview",
    ch2_f2_desc: "Adjust size, weight, spacing, and margins. The menu turns transparent while dragging sliders.",
    ch2_f3_title: "Highlights, Notes & Bookmarks",
    ch2_f3_desc: "Long-press text to highlight in four pastel colors, add notes, or bookmark pages.",

    ch3_tag: "03 · CHAPTERS & ILLUSTRATIONS",
    ch3_title: "Chapters and insert art, organized automatically.",
    ch3_desc: "Tailored for Light Novels and illustrated books. Llunevie detects chapters and gathers insert artwork into a dedicated gallery.",
    ch3_tab_1: "Chapters & Art",
    ch3_tab_2: "Cover View",
    ch3_f1_title: "Automatic Chapter Detection",
    ch3_f1_desc: "Reads chapters from EPUB TOC, PDF bookmarks, Contents pages, and page headers or footers.",
    ch3_f2_title: "Color & Sketch Artwork Gallery",
    ch3_f2_desc: "Separates color paintings and black-and-white sketches from text pages into a 2-column gallery.",
    ch3_f3_title: "Full-Resolution Zoom Viewer",
    ch3_f3_desc: "Inspect any illustration in full resolution with smooth pinch-to-zoom.",

    ch4_tag: "04 · PERSONAL LIBRARY",
    ch4_title: "Your digital and physical shelves in one place.",
    ch4_desc: "Organize your eReader files and physical book collection cleanly without accounts.",
    ch4_tab_1: "Shelf & Dark Mode",
    ch4_tab_2: "Light Home",
    ch4_f1_title: "3D Spine & Cover Grid Views",
    ch4_f1_desc: "Browse your collection in 3D Spine, Cover Grid (2–5 columns), Full Cover, or List mode.",
    ch4_f2_title: "Auto-Import Folder (Llunevie/Books)",
    ch4_f2_desc: "Drop new EPUB, PDF, or TXT files into Llunevie/Books and they appear on your shelf automatically.",
    ch4_f3_title: "Quick Filters & Custom Shelves",
    ch4_f3_desc: "Group books by reading status, format, or custom categories in seconds.",

    ch5_tag: "05 · IMPORT & ISBN SCANNER",
    ch5_title: "Add books by search, file, or barcode.",
    ch5_desc: "Import local files, search online catalogs simultaneously, or scan physical ISBN barcodes.",
    ch5_tab_1: "Add Book & Shelf",
    ch5_tab_2: "Metadata Form",
    ch5_f1_title: "Parallel Catalog Search",
    ch5_f1_desc: "Fetches metadata and covers from Open Library, Google Books, and MyAnimeList at once.",
    ch5_f2_title: "Single & Batch Barcode Scanner",
    ch5_f2_desc: "Scan a single book or queue a stack of physical books continuously with your camera.",
    ch5_f3_title: "Custom Cover & Metadata Editor",
    ch5_f3_desc: "Edit title, author, series, or pick a cover image directly from your gallery.",

    ch6_tag: "06 · PRIVACY & DOWNLOAD",
    ch6_title: "Everything stays on your phone.",
    ch6_desc: "No sign-ups, no ads, no tracking. Reading time, streaks, highlights, and notes stay locally on your device.",
    ch6_tab_1: "Reading Stats",
    ch6_tab_2: "Settings",
    ch6_f1_title: "6-Month Activity & Reading Pace",
    ch6_f1_desc: "Track daily reading minutes, active streaks, reading speed, and session history.",
    ch6_f2_title: "4 Reading Themes + System Sync",
    ch6_f2_desc: "Switch between Paper, White, Sepia, and Black (AMOLED) or follow your phone's dark mode.",
    dl_card_title: "Get Llunevie for Android",
    dl_card_sub: "Android 8.0+ · Direct APK from GitHub Releases."
  },
  id: {
    nav_prologue: "01 Beranda",
    nav_reader: "02 Reader",
    nav_toc: "03 Ilustrasi",
    nav_library: "04 Pustaka",
    nav_scanner: "05 Impor",
    nav_download: "06 Unduh",
    download_apk: "Unduh APK",
    hero_badge: "EREADER & LIGHT NOVEL ANDROID",
    hero_title: "Ruang tenang untuk membaca novel dan koleksi bukumu.",
    hero_subtitle: "Baca file EPUB, PDF, dan TXT dengan nyaman di Android. Dilengkapi animasi balik halaman natural, daftar bab & ilustrasi otomatis, serta rak buku pribadi.",
    hero_cta_apk: "Unduh APK",
    hero_cta_github: "GitHub",
    screen_home_label: "Terang",
    screen_reader_label: "Reader",
    screen_toc_label: "Gelap",
    tap_to_zoom: "Ketuk layar HP untuk memperbesar",

    ch2_tag: "02 · PENGALAMAN BACA",
    ch2_title: "Baca sesuai gayamu.",
    ch2_desc: "Pilih mode balik halaman (Flipbook), bentangan 2 halaman landscape, gulir vertikal, atau webtoon.",
    ch2_tab_1: "1 Halaman",
    ch2_tab_2: "2 Halaman Landscape",
    ch2_f1_title: "Flipbook Natural & Mode 2 Halaman",
    ch2_f1_desc: "Transisi lipatan kertas, slide, dan fade yang mulus, lengkap dengan mode 2 halaman layar penuh.",
    ch2_f2_title: "15 Font Bawaan & Pratinjau Langsung",
    ch2_f2_desc: "Atur ukuran teks, spasi, dan margin. Panel otomatis transparan saat slider digeser.",
    ch2_f3_title: "Highlight, Catatan & Bookmark",
    ch2_f3_desc: "Tahan teks untuk menandai kalimat dengan 4 warna pastel, tambah catatan, atau simpan halaman.",

    ch3_tag: "03 · BAB & ILUSTRASI",
    ch3_title: "Daftar bab dan ilustrasi tersusun otomatis.",
    ch3_desc: "Dirancang untuk Light Novel dan buku bergambar. Struktur bab dan gambar sisipan langsung dikelompokkan dengan rapi.",
    ch3_tab_1: "Bab & Galeri",
    ch3_tab_2: "Tampilan Sampul",
    ch3_f1_title: "Deteksi Daftar Bab Otomatis",
    ch3_f1_desc: "Membaca bab dari navigasi EPUB, bookmark PDF, Daftar Isi, hingga judul di atas/bawah halaman.",
    ch3_f2_title: "Galeri Ilustrasi Warna & Sketsa",
    ch3_f2_desc: "Memisahkan ilustrasi warna dan sketsa hitam-putih ke galeri 2 kolom di bawah daftar bab.",
    ch3_f3_title: "Penampil Gambar Resolusi Penuh",
    ch3_f3_desc: "Buka ilustrasi dalam resolusi tajam lengkap dengan fitur cubit untuk memperbesar.",

    ch4_tag: "04 · PUSTAKA PRIBADI",
    ch4_title: "Koleksi digital dan buku fisik dalam satu rak.",
    ch4_desc: "Kelola file bacaan dan catatan koleksi buku fisikmu dengan rapi tanpa perlu akun.",
    ch4_tab_1: "Rak & Mode Gelap",
    ch4_tab_2: "Beranda Terang",
    ch4_f1_title: "Tampilan 3D Spine & Grid Sampul",
    ch4_f1_desc: "Lihat koleksi dalam mode 3D Spine, Grid Sampul (2–5 kolom), Sampul Penuh, atau Daftar.",
    ch4_f2_title: "Folder Pantauan Otomatis (Llunevie/Books)",
    ch4_f2_desc: "Taruh file EPUB, PDF, atau TXT baru ke folder Llunevie/Books agar otomatis masuk ke rak.",
    ch4_f3_title: "Filter Cepat & Rak Kustom",
    ch4_f3_desc: "Kelompokkan buku berdasarkan status baca, format file, atau kategori buatanmu.",

    ch5_tag: "05 · IMPOR & SCANNER ISBN",
    ch5_title: "Tambah buku lewat file, pencarian, atau kamera.",
    ch5_desc: "Impor file dari memori HP, cari di katalog online sekaligus, atau pindai barcode ISBN buku fisik.",
    ch5_tab_1: "Tambah & Rak",
    ch5_tab_2: "Form Metadata",
    ch5_f1_title: "Pencarian Katalog Paralel",
    ch5_f1_desc: "Mengambil info buku dan sampul dari Open Library, Google Books, dan MyAnimeList sekaligus.",
    ch5_f2_title: "Single Scan & Batch Scan ISBN",
    ch5_f2_desc: "Pindai satu buku langsung ke rak, atau gunakan Batch Scan untuk banyak buku beruntun.",
    ch5_f3_title: "Atur Metadata & Gambar Sampul",
    ch5_f3_desc: "Lengkapi judul, penulis, seri, atau pilih gambar sampul sendiri dari galeri HP.",

    ch6_tag: "06 · PRIVASI & UNDUHAN",
    ch6_title: "Semua data tersimpan di ponselmu.",
    ch6_desc: "Tanpa login, tanpa iklan, tanpa pelacakan. Riwayat waktu baca, streak, highlight, dan catatan tersimpan di perangkatmu.",
    ch6_tab_1: "Statistik Baca",
    ch6_tab_2: "Pengaturan",
    ch6_f1_title: "Aktivitas 6 Bulan & Kecepatan Baca",
    ch6_f1_desc: "Pantau durasi baca harian, rekor hari beruntun, kecepatan halaman/menit, dan riwayat sesi.",
    ch6_f2_title: "4 Tema Baca + Ikuti Mode HP",
    ch6_f2_desc: "Tersedia tema Paper, White, Sepia, dan Black (AMOLED) atau otomatis mengikuti mode gelap HP.",
    dl_card_title: "Pasang Llunevie di Android",
    dl_card_sub: "Android 8.0+ · File APK langsung dari GitHub Releases."
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

  // Recalculate sticky offset if panel height changed
  updateScrollCardPhysics();
}

function updateScrollCardPhysics() {
  const slots = document.querySelectorAll(".chapter-card-slot");
  const railDots = document.querySelectorAll(".rail-dot");
  const navLinks = document.querySelectorAll("[data-chapter-link]");
  const viewportH = window.innerHeight;
  const isMobile = window.innerWidth < 768;
  const navOffset = isMobile ? 60 : 74;

  let activeChapterIdx = 0;

  slots.forEach((slot, idx) => {
    const card = slot.querySelector(".chapter-card");
    if (!card) return;

    // Dynamic bottom-aware sticky top so tall mobile cards scroll completely before sticking
    const cardH = card.offsetHeight;
    const bottomMargin = isMobile ? 14 : 22;
    const stickyTop = Math.min(navOffset, viewportH - cardH - bottomMargin);
    slot.style.top = `${stickyTop}px`;

    const rect = slot.getBoundingClientRect();
    if (rect.top <= viewportH * 0.48) {
      activeChapterIdx = idx;
    }

    const nextSlot = slots[idx + 1];
    if (nextSlot) {
      const nextRect = nextSlot.getBoundingClientRect();
      const overlapStart = viewportH * 0.90;
      const overlapEnd = navOffset + 20;

      if (nextRect.top < overlapStart) {
        const rawProgress = (overlapStart - nextRect.top) / Math.max(120, overlapStart - overlapEnd);
        const progress = Math.min(1, Math.max(0, rawProgress));
        const maxScaleDrop = isMobile ? 0.05 : 0.065;
        const scale = 1 - (progress * maxScaleDrop);
        const opacity = Math.max(0, 1 - Math.pow(progress, 1.05));
        const translateY = -(progress * (isMobile ? 12 : 20));
        const blurPx = (progress * (isMobile ? 2.5 : 4.0)).toFixed(2);

        card.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = progress > 0.06 ? `blur(${blurPx}px)` : "none";
        card.style.visibility = progress >= 0.98 ? "hidden" : "visible";
        card.style.pointerEvents = progress >= 0.85 ? "none" : "auto";
      } else {
        card.style.transform = "translate3d(0, 0, 0) scale(1)";
        card.style.opacity = "1";
        card.style.filter = "none";
        card.style.visibility = "visible";
        card.style.pointerEvents = "auto";
      }
    } else {
      card.style.transform = "translate3d(0, 0, 0) scale(1)";
      card.style.opacity = "1";
      card.style.filter = "none";
      card.style.visibility = "visible";
      card.style.pointerEvents = "auto";
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
  const offset = window.innerWidth < 768 ? 58 : 72;
  // Temporarily reset sticky to compute natural document flow position accurately
  const prevPosition = target.style.position;
  target.style.position = "relative";
  const topVal = parseFloat(target.style.top) || 0;
  const y = target.getBoundingClientRect().top + window.scrollY - topVal - offset;
  target.style.position = prevPosition;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
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

    const tagName = releaseData.tag_name || "v0.2.2";
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
