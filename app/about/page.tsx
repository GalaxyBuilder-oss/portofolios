// components/AboutPage.js

import Layout from "../../components/Layout";

const AboutPage = () => {
  return (
    <Layout
      title="Tentang Saya | GalaxyBuilder-Oss"
      description="This is about galaxybuilder"
    >
      <div className="about-page container mt-5">
        <h2 className="text-center mb-4">Tentang Saya</h2>
        <p>
          <strong>GalaxyBuilder-Oss</strong> adalah platform yang dirancang
          untuk menyediakan solusi perangkat lunak berkualitas tinggi bagi
          bisnis dan individu. Misi kami adalah menciptakan produk dan layanan
          inovatif yang membantu orang dan organisasi mencapai tujuan mereka.
        </p>
        <p>
          Saya mengkhususkan diri dalam pengembangan web, aplikasi mobile, dan
          solusi berbasis cloud. Dengan fokus yang kuat pada pengalaman pengguna
          dan teknologi terkini, kami berkomitmen untuk menghadirkan solusi yang
          memberikan dampak nyata.
        </p>
        <h3>Nilai Inti</h3>
        <ul>
          <li>Inovasi: Terus berkembang dengan teknologi terbaru.</li>
          <li>
            Kualitas: Menjamin keunggulan dalam setiap produk dan layanan yang
            kami berikan.
          </li>
          <li>
            Berfokus pada Pelanggan: Selalu memprioritaskan kebutuhan klien
            kami.
          </li>
        </ul>
        <h3>Tim</h3>
        <p>
          Saya seorang yang belajar menjadi profesional berbakat dan memiliki
          gairah dalam teknologi dan berkomitmen untuk memberikan hasil yang
          luar biasa. Kami percaya pada kolaborasi dan bekerja bersama untuk
          menghadirkan solusi terbaik bagi klien kami.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
