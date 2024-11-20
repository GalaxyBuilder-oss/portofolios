export type UsersProps = {
    id: number;
    username: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string | null;
    address: string | null;
    profilePictureUrl: string;
    cover: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    isVerified: boolean;
  };