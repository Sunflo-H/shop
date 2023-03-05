import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { downloadProduct, uploadNewProduct } from "../api/firebase";

const SEC = 1000;
export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], downloadProduct, {
    staleTime: SEC * 60,
  });

  const addProduct = useMutation(
    ({ product, imageUrl }) => uploadNewProduct(product, imageUrl),
    {
      onMutate: (variable) => {
        // console.log("onMutate", variable);
      },
      onError: (error, variable, context) => {
        // error
      },
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
        queryClient.invalidateQueries(["products"]);
      },
      onSettled: () => {
        // console.log("end");
      },
    }
  );
  return { productsQuery, addProduct };
}
