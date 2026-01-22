import { updateProfileSettings } from "@/services/useProfile";
import type { ProfileSettingsFormData } from "@/validation/profileSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateProfileSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: ProfileSettingsFormData) =>
      updateProfileSettings(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success("Profil bol úspešne aktualizovaný");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Nastala chyba pri ukladaní profilu"
      );
    },
  });
};
