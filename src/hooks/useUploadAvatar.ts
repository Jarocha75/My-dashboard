import { uploadAvatar } from "@/services/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUploadAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadAvatar(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success("Avatar bol úspešne nahraný");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Nastala chyba pri nahrávaní avataru"
      );
    },
  });
};
