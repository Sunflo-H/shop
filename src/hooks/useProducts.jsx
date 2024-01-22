import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getProduct,
  getProduct_all,
  uploadNewProduct,
  uploadProduct,
} from "../api/firebase_db";

const SEC = 1000;
/**
 * 상품 정보를 불러오거나, 새 상품을 등록하는 훅
 */
export default function useProducts(category) {
  const queryClient = useQueryClient();

  // 상품 정보를 불러온다.
  const productsQuery = useQuery({
    queryKey: ["products", category],
    queryFn: async () => getProduct(category),
    staleTime: SEC * 60,
  });

  const productsQuery_all = useQuery({
    queryKey: ["products", "all"],
    queryFn: async () => getProduct_all(),
    staleTime: SEC * 60,
  });

  //!필요 없는 코드인것 같아 잠시 주석처리합니다. 모든 리팩토링 작업이 마무리 되었을 때 아무 이상이 없다면 이 코드를 삭제해주세요
  // 상품의 URL을 불러온다.
  // const productsQueries = useQueries({
  //   queries: [
  //     { queryKey: ["products", "Men"], queryFn: async () => getProduct("Men") },
  //     {
  //       queryKey: ["products", "Women"],
  //       queryFn: async () => getProduct("Women"),
  //     },
  //   ],

  //   staleTime: SEC * 60,
  // });

  // 새 상품을 등록한다. 업데이트가 되어야 하므로 Mutate를 사용한다.
  const addProduct = useMutation({
    mutationFn: ({ product, imageUrl }) => uploadProduct(product, imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries(["products", category]);
    },
  });

  // let productData = { productsQuery, addProduct, productsQueries };
  let productData = { productsQuery, addProduct, productsQuery_all };

  return productData;
}
