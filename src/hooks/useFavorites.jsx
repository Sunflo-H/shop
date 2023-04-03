import React from "react";
import { addFavorites, getFavorites, removeFavorites } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useMemo } from "react";
import { useEffect } from "react";

export default function useFavorites(product, currentCategory) {
  const { user, uid } = useAuthContext();
  const queryClient = useQueryClient();
  const [isFavorite, setIsFavorite] = useState(false); // 찜
  const favoriteQuery = useQuery(
    ["favorites", uid],
    async () => getFavorites(uid),
    { staleTime: 60000, refetchOnWindowFocus: false }
  );

  const favoritesIdSet = useMemo(() => {
    return new Set(favoriteQuery.data?.map((favorite) => favorite.id));
  }, [favoriteQuery.data]);

  useEffect(() => {
    setIsFavorite(favoritesIdSet.has(product.id));
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
      alert("로그인 해주세요");
    }
  };

  const updateFavorites = useMutation(favoriteClick, {
    onSuccess: () => {
      queryClient.invalidateQueries(["favorites", uid]);
    },
  });

  return { isFavorite, updateFavorites };
}
