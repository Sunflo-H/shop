import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { getProduct, uploadNewProduct, getProduct_url } from "../api/firebase";

const SEC = 1000;
/**
 * 상품 정보를 불러오거나, 새 상품을 등록하는 훅
 */
export default function useProducts(category) {
  const queryClient = useQueryClient();

  // 상품 정보를 불러온다.
  const productsQuery = useQuery(
    ["products", category],
    async () => getProduct(category),
    {
      staleTime: SEC * 60,
    }
  );

  // 상품의 URL을 불러온다.
  const productsQueries = useQueries(
    [
      { queryKey: ["products", "Men"], queryFn: async () => getProduct("Men") },
      {
        queryKey: ["products", "Women"],
        queryFn: async () => getProduct("Women"),
      },
    ],
    {
      staleTime: SEC * 60,
    }
  );

  // 새 상품을 등록한다. 업데이트가 되어야 하므로 Mutate를 사용한다.
  const addProduct = useMutation(
    ({ product, imageUrl }) => uploadNewProduct(product, imageUrl),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products", category]);
      },
    }
  );
  return { productsQuery, addProduct, productsQueries };
}
