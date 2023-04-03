import React from "react";
import { addFavorites, getFavorites, removeFavorites } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useQuery } from "react-query";
import { useMemo } from "react";
import { useEffect } from "react";

export default function useFavorites(product) {
  const { user, uid } = useAuthContext();
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
  }, [favoriteQuery.data]);

  const handleFavoriteClick = () => {
    if (user) {
      setIsFavorite((prev) => {
        !prev ? addFavorites(product, uid) : removeFavorites(product, uid);
        return !prev;
      });
    } else {
      alert("로그인 해주세요");
    }
  };

  return { isFavorite, handleFavoriteClick };
}
