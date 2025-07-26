"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { LocalPortofoliosProps, PortfolioImgs, UsersProps } from "../types";
import { UserResponseDto } from "../utils/Dto";

// Define the structure of your context
type AppContextProps = {
  profile?: UsersProps | null;
  defaultProfile?: UsersProps;
  fetchUser?: () => void;
  token?: string;
  router?: any;
  timeAgo?: (date: Date) => string;
  portfolioImgs?: PortfolioImgs[];
};

// Create the context with default values
const AppContext = createContext<AppContextProps>({});

// AppProvider component
const AppProvider: React.FC = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UsersProps | null>();
  const router = useRouter();
  const token = Cookies.get("token");
  const [portfolioImgs, setPortofolioImgs] = useState<PortfolioImgs[]>();

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
        return;
      } else {
        const response = await axios.get(`/api/v2/users`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const data = UserResponseDto(response.data.data);
        setProfile(data);
        sessionStorage.setItem("profile", JSON.stringify(data));
      }
    } catch (error) {
      throw new Error("Error fetching profile data:", error);
    }
  };

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
        return `${days1} hari ${hours1 % 24} jam ${minutes1 % 60} menit lagi`;
      } else if (hours1 > 0) {
        return `${hours1} jam ${minutes1 % 60} menit lagi lagi`;
      } else if (minutes1 > 0) {
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

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get("/project-list.json");
      setPortofolioImgs(
        res.data.data.map((p: LocalPortofoliosProps) => ({
          image: p.coverUrl,
          title: p.projectName,
        })) as PortfolioImgs[]
      );
    };
    fetchImages();
  }, []);

  return (
    <AppContext.Provider
      value={{
        profile,
        defaultProfile,
        fetchUser,
        router,
        token,
        timeAgo,
        portfolioImgs,
      }}
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
