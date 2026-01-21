import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Invoice } from "@/types/invoices";

const apiClient = new APIClient<Invoice>("/invoices");

interface UpdateInvoicePayload {
  id: number;
  data: Partial<Omit<Invoice, "id" | "userId" | "createdAt" | "updatedAt">>;
}

const useUpdateInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Invoice,
    Error,
    UpdateInvoicePayload,
    { previousInvoices: Invoice[] | undefined }
  >({
    mutationFn: ({ id, data }: UpdateInvoicePayload) => apiClient.put(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["invoices"] });

      const previousInvoices = queryClient.getQueryData<Invoice[]>([
        "invoices",
      ]);

      queryClient.setQueryData<Invoice[]>(
        ["invoices"],
        (old) =>
          old?.map((invoice) =>
            invoice.id === id ? { ...invoice, ...data } : invoice,
          ) ?? [],
      );

      return { previousInvoices };
    },
    onSuccess: () => {
      toast.success("Invoice was successfully updated.");
    },
    onError: (_error, _variables, context) => {
      if (context?.previousInvoices) {
        queryClient.setQueryData(["invoices"], context.previousInvoices);
      }
      toast.error("Update failed.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};

export default useUpdateInvoice;
