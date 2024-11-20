import { UsersProps } from "./Users";

export type PortofoliosProps = {
  id: number;
  userId: number;
  projectName: string;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  status?: string;
  budget?: number | null;
  createdAt?: string;
  updatedAt?: string;
  coverUrl?: string | null;
  users?: UsersProps | null;
};
