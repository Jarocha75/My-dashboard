import type { Billing } from "@/data/billingData";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const apiClient = new APIClient<Billing>("/billings");

interface UpdateBillingPayload {
  id: string;
  data: Partial<Billing>;
}

const useUpdateBilling = () => {
  const queryClient = useQueryClient();

  return useMutation<Billing, Error, UpdateBillingPayload>({
    mutationFn: ({ id, data }: UpdateBillingPayload) => apiClient.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["billings"] });
    },
  });
};

export default useUpdateBilling;
