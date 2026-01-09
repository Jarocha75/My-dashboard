import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/services/apiClient";
import type { Billing } from "@/data/billingData";
import toast from "react-hot-toast";

const apiClient = new APIClient<Billing>("/billings");

const useDeleteBilling = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["billings"] });
      toast.success("Billing was successfully deleted.");
    },
    onError: () => {
      toast.error("Delete failed.");
    },
  });
};

export default useDeleteBilling;
