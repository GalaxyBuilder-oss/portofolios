import { PropsWithChildren, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios"

// export const getServerSideProps: GetServerSideProps = async () => {
  // const result = await prisma.users.findMany();
  // const serializedData = result.map((item) => ({
  //   ...item,
  //   fullName: item.full_name,
  //   createdAt: item.created_at.toISOString(),
  //   updatedAt: item.updated_at.toISOString(),
  //   phoneNumber: item.phone_number,
  //   profilePictureUrl: item.profile_picture_url,
  //   isActive: item.is_active,
  //   isVerified: item.is_verified,
  // }));
  // const finalData: UsersProps[] = serializedData;

  // return {
  //   props: {
  //     portofolios: finalData,
  //   },
  // };
// };

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
      const response = await axios.post('/api/v1/auth/login', form, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Assuming the response contains a token
      Cookies.set('token', response.data.data.token,{ expires: 1 });
      router.push('/')
    } catch (error) {
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
      router.push("/");
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

// async function isValidLogin(
//   form: { username: string; password: string },
//   props: UsersProps[],
//   setMessage: (value: string) => void
// ) {
//   const isUser = props.find((user) => user.username === form.username);

//   // Check if user exists
//   if (!isUser) {
//     setMessage("User tidak dapat ditemukan");
//     return false;
//   }

//   try {
//     // Verify the password
//     const isValid = await argon2.verify(isUser.password, form.password);
//     if (!isValid) {
//       setMessage("Yahh! Login gagal");
//       return false;
//     }
//   } catch (error) {
//     // Handle any errors during verification
//     console.error("Error verifying password:", error);
//     setMessage("Yahh! Terjadi kesalahan saat memverifikasi password");
//     return false;
//   }

//   setMessage("Yeay! Login berhasil");
//   return true;
// }
