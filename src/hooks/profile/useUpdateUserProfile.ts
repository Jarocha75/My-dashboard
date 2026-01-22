import { updateUserProfile } from "@/services/useProfile";
import type { AccountSettingsFormData } from "@/validation/accountSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: AccountSettingsFormData) =>
      updateUserProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success("Zmeny boli úspešne uložené");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Nastala chyba pri ukladaní"
      );
    },
  });
};
