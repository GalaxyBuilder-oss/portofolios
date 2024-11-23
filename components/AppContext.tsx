import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { PortofoliosProps, UsersProps } from "../types";
import { NextRouter, useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

// Define the structure of your context
type AppContextProps = {
  profile?: UsersProps;
  defaultProfile?: UsersProps;
  fetchUser?: () => void;
  token?: string;
  router?: NextRouter;
  portofolios?: PortofoliosProps[],
  fetchPortofolios?: () => void;
  timeAgo?: (date: Date) => string;
};

// Create the context with default values
const AppContext = createContext<AppContextProps>({});

// AppProvider component
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UsersProps>(null);
  const [portofolios, setPortofolios] = useState<PortofoliosProps[]>(null);
  const router = useRouter();
  const token = Cookies.get("token");

  //   Initializer
  const defaultProfile: UsersProps = {
    id: 0,
    fullName: "Salim Hidayat",
    username: "salim26",
    email: "email@example.com",
    phoneNumber: "123-456-7890",
    address: "Alamat Anda",
    profilePictureUrl:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1658579222223-ca243ef7c520?q=80&w=1470&auto=format&fit=crop",
    isActive: true,
    isVerified: true,
    createdAt: Date.toString(),
    password: "",
    updatedAt: Date.toString(),
  };

  // Function
  const fetchUser = async () => {
    try {
      const cachedData = sessionStorage.getItem("profile");
      if (cachedData) {
        setProfile(JSON.parse(cachedData));
      } else {
        const response = await axios.get(`/api/v1/users`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const data = response.data.data;
        const profileData = {
          id: parseInt(data.id, 10),
          fullName: data.full_name,
          username: data.username,
          password: "",
          email: data.email,
          address: data.address,
          cover: data.cover_url,
          createdAt: data.created_at,
          isActive: data.is_active,
          isVerified: data.is_verified,
          phoneNumber: data.phone_number,
          profilePictureUrl: data.profile_picture_url,
          updatedAt: data.updated_at,
        };
        setProfile(profileData);
        sessionStorage.setItem("profile", JSON.stringify(profileData));
      }
    } catch (error) {
      throw new Error("Error fetching profile data:", error);
    }
  };

  const fetchPortofolios = async () => {
    try {
      const res = await axios.get(`/api/v1/portofolios`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // Ensures cookies are sent with the request
      });
      const serializedData = res.data.data.map((item) => ({
        id: item.id,
        status: item.status,
        description: item.description,
        projectName: item.project_name,
        userId: item.user_id,
        coverUrl: item.cover_url,
        budget: item.budget,
        startDate: item.start_date,
        endDate: item.end_date,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        users: {
          id: item.users.id,
          username: item.users.username,
          email: item.users.email,
          password: item.users.password,
          fullName: item.users.full_name,
          phoneNumber: item.users.phone_number,
          address: item.users.address,
          profilePictureUrl: item.users.profile_picture_url,
          createdAt: item.users.created_at,
          updatedAt: item.users.updated_at,
          isActive: item.users.is_active,
          isVerified: item.users.is_verified,
        },
      }));
      setPortofolios(serializedData);
      sessionStorage.setItem("portofolios", JSON.stringify(serializedData)); // Cache data in sessionStorage
    } catch (error) {
      console.error("Failed to fetch or process portfolio data:", error);
    }
  };

  useEffect(() => {
    const cachedData = sessionStorage.getItem("portofolios");
    if (cachedData) {
      setPortofolios(JSON.parse(cachedData));
    }
  }, [token]);

  function timeAgo(date: Date): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months =
      now.getMonth() -
      date.getMonth() +
      12 * (now.getFullYear() - date.getFullYear());
    const years = now.getFullYear() - date.getFullYear();

    if (date > now) {
      const diff = date.getTime() - now.getTime();
      const seconds1 = Math.floor(diff / 1000);
      const minutes1 = Math.floor(seconds1 / 60);
      const hours1 = Math.floor(minutes1 / 60);
      const days1 = Math.floor(hours1 / 24);
      if (days1 > 0) {
        return `${days1} hari ${hours1%24} jam ${minutes1%60} menit lagi`;
      } else if (hours1 > 0) {
        return `${hours1} jam ${minutes1%60} menit lagi lagi`;
      }  else if (minutes1 > 0) {
        return `${minutes1} menit lagi`;
      } else return "Mendatang";
    }
    if (years > 0) {
      return `${years} tahun lalu`;
    } else if (months > 0) {
      return `${months} bulan lalu`;
    } else if (days > 0) {
      return `${days} hari lalu`;
    } else if (hours > 0) {
      return `${hours} jam lalu`;
    } else if (minutes > 0) {
      return `${minutes} menit lalu`;
    } else {
      return "Baru Saja"; // If the date is within the last minute
    }
  }

  return (
    <AppContext.Provider
      value={{ profile, defaultProfile, fetchUser, router, token, fetchPortofolios, portofolios, timeAgo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  // Check if the context is undefined
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export default AppProvider;
