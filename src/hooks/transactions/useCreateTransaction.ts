import APIClient from "@/services/apiClient";
import type { Transaction } from "@/types/transactions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const apiClient = new APIClient<Transaction>("/transactions");

const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Transaction,
    Error,
    Omit<Transaction, "id">,
    { previousTransactions: Transaction[] | undefined }
  >({
    mutationFn: (data) => apiClient.post(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["transactions"] });

      const previousTransactions = queryClient.getQueryData<Transaction[]>([
        "transactions",
      ]);

      queryClient.setQueryData<Transaction[]>(["transactions"], (old) => [
        ...(old ?? []),
        { ...data, id: "temp-" + Date.now() },
      ]);

      return { previousTransactions };
    },
    onSuccess: () => {
      toast.success("Transaction was successfully created.");
    },
    onError: (_error, _variables, context) => {
      if (context?.previousTransactions) {
        queryClient.setQueryData(
          ["transactions"],
          context.previousTransactions,
        );
      }
      toast.error("Creation failed.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
};

export default useCreateTransaction;
