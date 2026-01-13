import type { AccountSettingsFormData } from "@/validation/accountSettings";
import { api } from "./apiClient";

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  avatar?: string | null;
  provider?: string;
  phoneNumber?: string | null;
  userName?: string | null;
}

export const getUserProfile = async () => {
  const { data } = await api.get<UserProfile>("/user/profile");
  return data;
};

export const updateUserProfile = async (
  profileData: AccountSettingsFormData
): Promise<UserProfile> => {
  const { data } = await api.put<UserProfile>("/user/profile", profileData);
  return data;
};
