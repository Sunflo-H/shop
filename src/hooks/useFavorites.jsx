import React from "react";
import { addFavorites, getFavorites, removeFavorites } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useMemo } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function useFavorites(product, currentCategory) {
  const { user, uid } = useAuthContext();
  const queryClient = useQueryClient();
  const [isFavorite, setIsFavorite] = useState(false); // 찜

  /**
   * firebase로부터 favorites 데이터를 요청한다.
   */
  const favoriteQuery = useQuery(
    ["favorites", uid],
    async () => getFavorites(uid),
    { staleTime: 60000, refetchOnWindowFocus: false }
  );

  /**
   * favorites 데이터에서 id를 뽑아 Set에 저장
   */
  const favoritesIdSet = useMemo(() => {
    return new Set(favoriteQuery.data?.map((favorite) => favorite.id));
  }, [favoriteQuery.data]);

  useEffect(() => {
    setIsFavorite(favoritesIdSet.has(product?.id));
  }, [favoriteQuery.data, currentCategory]);

  /**
   * db의 favorites data 와 isFavorite State를 조작하는 함수
   * 클릭이벤트에 사용하여 찜 상태를 db에 전달한다.
   */
  const favoriteClick = () => {
    if (user) {
      setIsFavorite((prev) => {
        !prev ? addFavorites(product, uid) : removeFavorites(product, uid);
        return !prev;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sign in first!",
        confirmButtonColor: "#222",
      });
    }
  };

  const updateFavorites = useMutation(favoriteClick, {
    onSuccess: () => {
      queryClient.invalidateQueries(["favorites", uid]);
    },
  });

  return { favoriteQuery, isFavorite, updateFavorites };
}
