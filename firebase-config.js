import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdb2OxMZT_KLcRTggbNsaiw1srz0WXHjk",
  authDomain: "hi-ai-23fd5.firebaseapp.com",
  projectId: "hi-ai-23fd5",
  storageBucket: "hi-ai-23fd5.firebasestorage.app",
  messagingSenderId: "607006800229",
  appId: "1:607006800229:web:ce127c7e6cd7ffea57c98c",
  measurementId: "G-QKH58S8QHR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsCollection = collection(db, "products");

export const LEGACY_PRODUCTS = [
  {
    title: "SE-FAM 5T15-8MP A+",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155109/WhatsApp_Image_2025-08-02_at_7.13.15_PM_fmf5dx.jpg",
    description: [
      "8MP High Performance CMOS",
      "3840x2160 Resolution",
      "30fps Video",
      "3.6 mm Lens",
      "2PCS Array IR + 2PCS White LED",
      "POE, ONVIF 2.4",
      "Smart Colorful Night Vision",
      "Metal Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1GFmvTownoY-T6Ss5l8fxI7baGdAfGA5X/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "SE-FAM 5T15-8MP Alarm",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155204/WhatsApp_Image_2025-08-02_at_7.15.20_PM_f3pki1.jpg",
    description: [
      "5MP High Performance CMOS",
      "3840x2160 Resolution",
      "30fps Video",
      "3.6 mm Lens",
      "2PCS IR + 2PCS White LED + 2PCS Blue & Red Alarm LED",
      "POE, ONVIF 2.4",
      "Smart Colorful Night Vision",
      "Metal Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1PTOWsX2eTvxijZK8VnpAXwRp_adAZtgS/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "SE - FAM 5T15-8MP",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155386/WhatsApp_Image_2025-08-02_at_7.16.16_PM_jkd3tk.jpg",
    description: [
      "8MP High Performance CMOS",
      "Up to 3840*2160 Resolution",
      "30 ftp Video framerates",
      "3.6 mm Lens",
      "2PCS Array IR + 2PCS White LED",
      "POE, ONVIF 2.4",
      "Multi-Platform Monitoring",
      "Supports 3D DNR/AWB/Exposure",
      "Smart colorful night vision",
      "Metal Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1A13RjAUhTCWZRU_THrlb4YCTyrarNXtD/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "JF-XVI-BC4420-IR1-8MP",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155462/WhatsApp_Image_2025-08-02_at_7.17.18_PM_k7fgrn.jpg",
    description: [
      "8MP High Performance CMOS",
      "3840x2160 Resolution",
      "30fps Video",
      "3.6 mm Lens",
      "2PCS Array IR + 2PCS White LED",
      "POE, ONVIF 2.4",
      "Smart Colorful Night Vision",
      "Metal & Plastic Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/130-CtEF5sn-w1SDME3Bmt7_uds1wrOBt/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "SE-1080 F30-5MP",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155736/WhatsApp_Image_2025-08-02_at_7.18.12_PM_myfydo.jpg",
    description: [
      "5MP High Performance CMOS",
      "2880x1624 Resolution",
      "25fps Video",
      "3.6 mm Lens",
      "2PCS Array IR + 2PCS White LED",
      "POE, ONVIF 2.4",
      "Smart Colorful Night Vision",
      "Metal Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1eR7poU3NE3w9Vvgl33HX2Q6ICdc0UPBr/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "JF-XVI-BC4420-IR1-5MP",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155462/WhatsApp_Image_2025-08-02_at_7.17.18_PM_k7fgrn.jpg",
    description: [
      "5MP High Performance CMOS",
      "2880x1624 Resolution",
      "25fps Video",
      "3.6 mm Lens",
      "2PCS Array IR + 2PCS White LED",
      "POE, ONVIF 2.4",
      "Smart Colorful Night Vision",
      "Metal & Plastic Housing",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/19KdwtUwclraetIMboBCc8YQ5wP7EOr3s/view?usp=drive_link",
    category: "ipc",
  },
  {
    title: "Switch ND-AP0420-1 (4CH)",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754155886/WhatsApp_Image_2025-08-02_at_7.21.18_PM_gomgay.jpg",
    description: [
      "4x 10/100 Mbps RJ45 Ports",
      "Auto MDI/MDIX",
      "Lightning Protection",
      "PoE Power: 65W",
      "250m Long-Distance Transmission",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/185jojwNaM2HFSLEXUqEpItHM7MPU59Zh/view?usp=drive_link",
    category: "switch",
  },
  {
    title: "Switch 8ch ND-AP0820-1",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754156036/WhatsApp_Image_2025-08-02_at_7.22.23_PM_g2c23r.jpg",
    description: [
      "8x 10/100 Mbps RJ45 Ports",
      "Auto MDI/MDIX",
      "Lightning Protection",
      "PoE Power: 120W",
      "250m Long-Distance Transmission",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/12_55yAnvj_g9Y2fYaRQ3D_MFecFmzHp8/view?usp=drive_link",
    category: "switch",
  },
  {
    title: "NVR ND-HI-710A",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754156217/WhatsApp_Image_2025-08-02_at_7.23.35_PM_qg4l3c.jpg",
    description: [
      "Supports 10CH 8MP Cameras",
      "Face & Human Detection",
      "Smart Playback",
      "HDMI + VGA Output",
      "Dual Streams, PTZ Gesture",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/10t0IvEmdNTEfOBpGQA3BLyd4bzQHi9Vb/view?usp=drive_link",
    category: "recorder",
  },
  {
    title: "NVR ND-HI-716A",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754156317/WhatsApp_Image_2025-08-02_at_7.24.30_PM_qkcur1.jpg",
    description: [
      "Supports 16CH 8MP Cameras",
      "Face & Human Detection",
      "Smart Playback",
      "HDMI + VGA Output",
      "Dual Streams, PTZ Gesture",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1qztQFGdt9D5uEF9cufoGtply0bI3ApXg/view?usp=drive_link",
    category: "recorder",
  },
  {
    title: "RS-NVR-4636VG",
    image:
      "https://res.cloudinary.com/dcbxuax2c/image/upload/v1754156411/WhatsApp_Image_2025-08-02_at_7.25.54_PM_dgzefq.jpg",
    description: [
      "Supports 36CH 8MP Cameras",
      "Face & Human Detection",
      "Smart Playback",
      "Loud Speaker Monitoring",
      "HDMI + VGA Output",
      "Dual Streams",
    ],
    detailsUrl:
      "https://drive.google.com/file/d/1PGrLXH-0L5MZHC_MlnmwUFSmDnWcY6Ic/view?usp=drive_link",
    category: "recorder",
  },
];

function normalizeProduct(data, id) {
  const description = Array.isArray(data.description)
    ? data.description
    : String(data.description || "")
        .split("\n")
        .map((item) => item.replace(/^[-*\u2022]\s*/, "").trim())
        .filter(Boolean);

  return {
    id,
    title: String(data.title || "").trim(),
    image: String(data.image || "").trim(),
    description,
    detailsUrl: String(data.detailsUrl || "").trim(),
    category:
      String(data.category || "other")
        .toLowerCase()
        .trim() || "other",
  };
}

function keyOf(product) {
  return `${product.title}::${product.detailsUrl}`.toLowerCase();
}

export function isFirebaseConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}

export async function getProducts() {
  // Try ordered first; if the index doesn't exist yet, fall back to unordered.
  try {
    const q = query(productsCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs
      .map((item) => normalizeProduct(item.data(), item.id))
      .filter((item) => item.title && item.image && item.detailsUrl);
  } catch (err) {
    // FAILED_PRECONDITION = missing index → retry without ordering
    if (err?.code === "failed-precondition" || err?.code === "unimplemented") {
      console.warn(
        "Firestore index missing, loading without ordering.",
        err.message,
      );
      const snapshot = await getDocs(productsCollection);
      return snapshot.docs
        .map((item) => normalizeProduct(item.data(), item.id))
        .filter((item) => item.title && item.image && item.detailsUrl);
    }
    throw err;
  }
}

export async function getMergedProducts() {
  let firebaseProducts = [];

  try {
    firebaseProducts = await getProducts();
  } catch (error) {
    // Surface the real error so the page can show it
    console.error(
      "Failed to load Firebase products:",
      error?.code,
      error?.message,
    );
  }

  const map = new Map();
  LEGACY_PRODUCTS.forEach((item) => map.set(keyOf(item), item));
  firebaseProducts.forEach((item) => map.set(keyOf(item), item));

  return Array.from(map.values());
}

export async function createProduct(product) {
  const payload = normalizeProduct(product, "");
  return addDoc(productsCollection, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateProductById(id, product) {
  const payload = normalizeProduct(product, id);
  const target = doc(db, "products", id);

  return updateDoc(target, {
    title: payload.title,
    image: payload.image,
    description: payload.description,
    detailsUrl: payload.detailsUrl,
    category: payload.category,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProductById(id) {
  const target = doc(db, "products", id);
  return deleteDoc(target);
}
