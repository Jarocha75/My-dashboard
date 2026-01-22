import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/services/apiClient";
import type { Billing } from "@/data/billingData";
import toast from "react-hot-toast";

const apiClient = new APIClient<Billing>("/billings");

const useDeleteBilling = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["billings"] });

      const previousBillings = queryClient.getQueryData<Billing[]>([
        "billings",
      ]);

      queryClient.setQueryData<Billing[]>(
        ["billings"],
        (old) => old?.filter((billing) => billing.id !== id) ?? []
      );

      return { previousBillings };
    },
    onSuccess: () => {
      toast.success("Billing was successfully deleted.");
    },
    onError: (_error, _id, context) => {
      if (context?.previousBillings) {
        queryClient.setQueryData(["billings"], context.previousBillings);
      }
      toast.error("Delete failed.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["billings"] });
    },
  });
};

export default useDeleteBilling;
