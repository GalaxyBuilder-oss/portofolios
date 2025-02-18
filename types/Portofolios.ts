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

export type PortfolioReqDto = {
  projectName: string;
  description: string;
  status: string;
  budget?: number;
  startDate: string;
  endDate: string;
  coverUrl?: File;
}
