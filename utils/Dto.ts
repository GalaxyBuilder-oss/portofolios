import { PortofoliosProps, UsersProps } from "../types";

export const PortofolioResponseDto = (item) => {
  return {
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
      cover: item.users.cover_url,
      createdAt: item.users.created_at,
      updatedAt: item.users.updated_at,
      isActive: item.users.is_active,
      isVerified: item.users.is_verified,
    },
  };
};
export let UserResponseDto = (item) => {
  return {
    id: parseInt(item.id, 10),
    fullName: item.full_name,
    username: item.username,
    password: "",
    email: item.email,
    address: item.address,
    cover: item.cover_url,
    createdAt: item.created_at,
    isActive: item.is_active,
    isVerified: item.is_verified,
    phoneNumber: item.phone_number,
    profilePictureUrl: item.profile_picture_url,
    updatedAt: item.updated_at,
  };
};
