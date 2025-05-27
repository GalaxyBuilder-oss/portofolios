"use client";
import {useState} from "react";
import Layout from "../../components/Layout";
import {Card, Col, Container, Row} from "react-bootstrap";

const Resume = () => {
    const isWork = false;
    return (
        <div className="m-4 min-w-100 h-100 border">
            {!isWork &&
                <>
                    <div className={"w-100 d-flex justify-content-between flex-wrap align-content-center"}>
                        <div className={"w-20 m-4 d-flex align-items-center justify-content-center"}>
                            <img src="./android-chrome-192x192.png" alt="Ini gambar misalnya" className={'w-20 rounded-circle'}/>
                        </div>
                        <div className={"w-75 min-h-100 d-flex flex-column justify-content-around"}>
                            <h1>SALIM HIDAYAT</h1>
                            <p>
                                <a href="mailto:hidayatsalim004@outlook.com"
                                   className={"text-decoration-none text-black"}>hidayatsalim004@outlook.com</a> | <a href="#"
                                                                                                                      className={"text-decoration-none text-black"}>(+62)
                                853-1479-3866</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className={"w-100 border-bottom border-3 border-black fw-bold pb-2 text-uppercase"}>Tentang</h3>
                        <div>
                            <p className={"text-wrap lh-base text-indent-2 text-justify"}>Saya, Salim Hidayat, adalah
                                Lulusan TKJ dan kini menempuh studi Teknik
                                Informatika. Fokus di bidang backend development dengan keahlian Java dan Node.js.
                                Terbiasa membangun sistem yang efisien dan scalable, serta mampu menyelesaikan
                                masalah lintas bahasa pemrograman. Siap berkontribusi sebagai Backend Developer
                                dengan semangat belajar tinggi dan pemahaman teknis yang solid.</p>
                        </div>
                        <h3 className={"w-100 border-bottom border-3 border-black fw-bold pb-2 text-uppercase"}>Pendidikan</h3>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2019 - 2022 | SMK NEGERI 1 KAWALI | Teknik
                                Komputer Dan Jaringan</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>jurusan ini
                                mempelajari dasar-dasar komputer dan jaringan, termasuk perakitan
                                hardware, instalasi sistem operasi, pengelolaan server, serta konfigurasi jaringan LAN,
                                WAN, dan internet. Mempersiapkan siswa menjadi teknisi jaringan dan komputer yang
                                kompeten, mampu membangun, mengelola, serta memelihara infrastruktur TI.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2022
                                - {new Date().getFullYear() === 2026 ? "2026" : "Sekarang"} | Universitas Nasional Pasim
                                Bandung | S1 Teknik Informatika</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>program studi
                                di perguruan tinggi yang mendalami pengembangan perangkat lunak,
                                struktur data, algoritma, sistem basis data, kecerdasan buatan, dan rekayasa perangkat
                                lunak. Menghasilkan lulusan yang mampu merancang dan mengembangkan sistem
                                informasi dan perangkat lunak, serta memiliki kemampuan analitis dan problem
                                solving dalam dunia teknologi informasi.</p>
                        </div>
                        <h3 className={"w-100 border-bottom border-3 border-black fw-bold pb-2 text-uppercase"}>Pengalaman</h3>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2023 | Membuat Projek Berbasis Bahasa C</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2023 | Membuat Projek Berbasis Website (HTML, CSS Vanilla, dan Javascript)</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2023 | Membuat Projek menggunakan java spring boot + thymeleaf</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2025 | Membuat Projek menggunakan java spring boot + react (Full Stack)</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2025 | Membuat Projek menggunakan React + Typescript + Firebase</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                        <div>
                            <h5 className={"text-uppercase text-muted"}>2025 | Membuat Projek menggunakan java spring boot + react typescript (Full Stack)</h5>
                            <p className={"text-wrap lh-base text-indent-2 text-justify text-capitalize"}>Projek yang dibuat berupa sebuah sistem untuk memanajemen sebuah organisasi mulai
                                dari ketua sampai ke bidang-bidang.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={"w-100 border-bottom border-3 border-black fw-bold pb-2 text-uppercase"}>Tentang</h3>
                        <p className={"text-wrap text-justify text-capitalize fw-bold"}>Menyelesaikan Permasalahan Dalam Bahasa Pemrograman | Mengelola Database | Membuat Rest API</p>
                    </div>
                </>
            }
        </div>
    );
};

export default Resume;
