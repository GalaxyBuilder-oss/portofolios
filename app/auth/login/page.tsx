"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v2/auth/login', form, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response.data.data);
      // Assuming the response contains a token
      Cookies.set('token', response.data.data.token,{ expires: 1 });
      router?.push('/')
    } catch (error) {
      console.log(error)
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Yahh! Terjadi kesalahan saat login');
      }
    }
  };

  useEffect(() => {
    // Check if the token exists
    const token = Cookies.get("token");

    // If the token exists, redirect to the homepage
    if (token) {
      router?.push("/");
    }
  }, [router]);
  return (
    <Layout
      title="Login | GalaxyBuilder-Oss"
      description="Login to your account"
    >
      <div className="login-form container mt-5">
        <h2 className="text-center mb-4">Masuk</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nama Pengguna</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={form?.username}
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
              value={form?.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100 mt-4">
            Login
          </button>
        </form>
        <div>
          <p>
            Anda belum punya akun? <a href="/auth/register">Daftar Disini</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
