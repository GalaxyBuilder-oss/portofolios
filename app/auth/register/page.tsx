import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";

interface RegisterFormState {
  username: string;
  email: string;
  fullName: string;
  password: string;
  phoneNumber: string;
  address: string;
  profileUrl: string;
}

const Register: React.FC = () => {
    const router = useRouter()
  const [form, setForm] = useState<RegisterFormState>({
    username: "",
    email: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    address: "",
    profileUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registration submitted:", form);
    const response = await axios.post('/api/v2/auth/register', form,{})
    alert("Registration successful!");
    // Reset form
    setForm({
      username: "",
      email: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      address: "",
      profileUrl: "",
    });
  };

  useEffect(() => {
    // Check if the token exists
    const token = Cookies.get("token");

    // If the token exists, redirect to the homepage
    if (token) {
      router.push("/");
    }
  }, [router]);

  return (
    <Layout title="Pendaftaran | GalaxyBuilder-Oss" description="Create your account">
      <div className="register-form container mt-5">
        <h2 className="text-center mb-4">Pendaftaran</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nama Pengguna</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Nama Lengkap</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Nomor Telepon</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter your phone number"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Alamat</label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="profileUrl">Profile URL</label>
            <input
              type="url"
              id="profileUrl"
              name="profileUrl"
              className="form-control"
              placeholder="Enter your profile URL"
              value={form.profileUrl}
              onChange={handleChange}
              required
            />
          </div> */}

          <button type="submit" className="btn btn-dark w-100 mt-4">
            Daftar
          </button>
        </form>
        <div>
            <p>Anda sudah mendaftar? <a href="/auth/login">Masuk Disini</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
