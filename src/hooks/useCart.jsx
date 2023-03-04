import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { downloadCart, removeCartItem, uploadCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

const SEC = 1000;
export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid], () => downloadCart(uid), {
    staleTime: SEC * 60,
  });

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
