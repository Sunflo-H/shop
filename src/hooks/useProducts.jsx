import { useMutation, useQuery, useQueryClient } from "react-query";
import { downloadProduct, uploadNewProduct } from "../api/firebase";

const SEC = 1000;
/**
 * 상품 정보를 불러오거나, 새 상품을 등록하는 훅
 */
export default function useProducts() {
  const queryClient = useQueryClient();

  // 상품 정보를 불러온다.
  const productsQuery = useQuery(["products"], downloadProduct, {
    staleTime: SEC * 60,
  });

  // 새 상품을 등록한다. 업데이트가 되어야 하므로 Mutate를 사용한다.
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
