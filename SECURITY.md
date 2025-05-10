# Security Policy

## 📦 Project: portofolios-galaxybuilder

Repositori ini adalah proyek portofolio berbasis [Next.js](https://nextjs.org/), [Prisma ORM](https://www.prisma.io/), dan [AWS S3 SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

---

## 📢 Melaporkan Kerentanan

Jika kamu menemukan celah keamanan (security vulnerability), **jangan langsung buat isu di GitHub**.

### 📬 Langkah yang harus dilakukan:
1. Kirim email ke **galaxybuilder.oss@gmail.com**.
2. Subjek: `[SECURITY] Vulnerability in portofolios-galaxybuilder`
3. Sertakan:
   - Penjelasan celah
   - Langkah reproduksi
   - Screenshot (jika ada)
   - Proof of Concept (PoC)

Kami akan:
- Membalas dalam waktu **maksimal 72 jam**
- Memberikan patch dalam waktu **7 hari kerja**, tergantung kompleksitas

---

## 🧰 Komponen Keamanan

### ✅ Autentikasi
- Sistem menggunakan **JWT** (dengan [jose](https://github.com/panva/jose)) untuk autentikasi stateless.
- Cookie dikelola menggunakan `js-cookie` di sisi klien.

### 🔐 Penyimpanan & Enkripsi
- Password dienkripsi dengan **bcrypt**
- Upload file ke **AWS S3** menggunakan SDK resmi dari AWS

### 🗃️ Database & ORM
- Query database dilakukan dengan **Prisma**, yang aman dari SQL Injection secara default.

### 🛡️ Middleware
- Middleware Next.js digunakan untuk:
  - Memfilter akses
  - Mengecek token secara server-side

---

## 🧪 Testing & Audit

Tools yang digunakan untuk mengecek keamanan:
- `npm audit`
- Dependabot (jika diaktifkan)
- Manual security checklist (OWASP Web Checklist v5)

---

## 🤝 Kontribusi Aman

Jika kamu ingin menyumbang kode:
- Jangan commit API key / credential apapun.
- Jangan ubah logika autentikasi tanpa diskusi via Pull Request.
- Pastikan `npm run build` tidak gagal.

---

## 🛠️ Patch Release Policy

Setiap patch keamanan akan:
- Diberi label `security` di GitHub
- Dirilis sebagai `patch version` (contoh: `1.0.x`)
- Didokumentasikan di changelog

---

## 📅 Rencana Audit

Audit keamanan dilakukan setiap:
- Penambahan dependensi baru
- Upgrade Next.js atau Prisma
- Perubahan besar pada auth

---

Terima kasih telah ikut menjaga keamanan proyek ini! 🙌
