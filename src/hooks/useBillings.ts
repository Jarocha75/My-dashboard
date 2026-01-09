import type { Billing } from "@/data/billingData";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Billing>("/billings");

const useBillings = () => {
  return useQuery({
    queryKey: ["billings"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useBillings;
