import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { downloadCart, removeCartItem, uploadCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

const SEC = 1000;
/**
 * 카트 정보를 불러오고, 새 상품을 등록, 상품의 개수를 증감 하는 훅
 */
export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  // 카트 정보를 불러온다.
  const cartQuery = useQuery(["carts", uid], () => downloadCart(uid), {
    staleTime: SEC * 60,
  });

  // 카트에 상품을 추가한다.
  const addCart = useMutation(({ product, uid }) => uploadCart(product, uid), {
    onMutate: (variable) => {
      // console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
      queryClient.invalidateQueries(["carts", uid]);
    },
    onSettled: () => {
      // console.log("end");
    },
  });

  // 카트에 있는 상품의 개수를 증가시킨다.
  const quantityPlus = useMutation(
    ({ product, uid }) =>
      uploadCart({ ...product, quantity: product.quantity + 1 }, uid),
    {
      onMutate: (variable) => {
        // console.log("onMutate", variable);
      },
      onError: (error, variable, context) => {
        // error
      },
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
        queryClient.invalidateQueries(["carts", uid]);
      },
      onSettled: () => {
        // console.log("end");
      },
    }
  );

  // 카트에 있는 상품의 개수를 감소시킨다.
  const quantityMinus = useMutation(
    ({ product, uid }) =>
      uploadCart({ ...product, quantity: product.quantity - 1 }, uid),
    {
      onMutate: (variable) => {
        // console.log("onMutate", variable);
      },
      onError: (error, variable, context) => {
        // error
      },
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
        queryClient.invalidateQueries(["carts", uid]);
      },
      onSettled: () => {
        // console.log("end");
      },
    }
  );

  // 카트에 있는 상품을 삭제한다.
  const removeCart = useMutation(
    ({ product, uid }) => removeCartItem(product, uid),
    {
      onMutate: (variable) => {
        // console.log("onMutate", variable);
      },
      onError: (error, variable, context) => {
        // error
      },
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
        queryClient.invalidateQueries(["carts", uid]);
      },
      onSettled: () => {
        // console.log("end");
      },
    }
  );

  return { cartQuery, quantityMinus, quantityPlus, removeCart, addCart };
}

/**
 * 디테일 페이지 - 장바구니에 추가
 * 헤더 - 장바구니 개수
 *
 * *my카트 페이지 - 장바구니 불러오기
 * *CartItem - 상품의 개수 추가, 감소, 삭제 (업데이트)
 *
 */
