import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  addFavorites,
  getFavorites,
  removeFavorites,
  uploadCart,
} from "../api/firebase";
import Option_color from "../components/main/product/Option_color";
import Option_size from "../components/main/product/Option_size";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import { useMemo } from "react";

export default function ProductDetail() {
  const { user, uid } = useAuthContext();
  const { addCart } = useCart();
  const {
    product,
    product: { id, title, imageUrl, price, description, size, color, category },
  } = useLocation().state;

  const [isAddCart_3s, setIsAddCart_3s] = useState(false);

  const [currentSize, setCurrentSize] = useState("S");
  const [currentColor, setCurrentColor] = useState("Black");
  const [isFavorite, setIsFavorite] = useState(false); // 찜
  const favoriteQuery = useQuery(
    ["favorites", uid],
    async () => getFavorites(uid),
    { staleTime: 60000, refetchOnWindowFocus: false }
  );
  const favoritesIdSet = useMemo(() => {
    return new Set(favoriteQuery.data?.map((favorite) => favorite.id));
  }, [favoriteQuery.data]);

  const handleClick = (e) => {
    const product = {
      id,
      title,
      imageUrl,
      price,
      size: currentSize, // 얘랑
      color: currentColor, // 얘랑
      quantity: 1, // 얘땜에 내부변수 product가 필요
    };

    addCart.mutate({ product, uid });

    setIsAddCart_3s(true);

    setTimeout(() => {
      setIsAddCart_3s(false);
    }, 3000);
  };

  useEffect(() => {
    setIsFavorite(favoritesIdSet.has(id));
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

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <section className=" px-4 md:px-20 pt-20">
      {isAddCart_3s && (
        <div
          className={`fixed top-0 left-1/2  px-4 py-2 font-bold
                            rounded border border-green-300 bg-green-100
                          animate-toast`}
        >
          Added Cart
        </div>
      )}
      <div
        className="flex flex-col lg:flex-row w-full justify-center m-auto max-w-screen-2xl 
                      gap-0 md:gap-20 "
      >
        <div className="w-full basis-4/12">
          <div className="text-xl ml-2 mb-4">
            <Link to="/"> Home </Link> /{" "}
            <Link to={`/products/${category}`} state={category}>
              {category}
            </Link>
          </div>
          <img src={imageUrl} alt="" className="w-full" />
        </div>
        <div className="w-full basis-4/12 pt-14 ">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-bold py-2 text-xl">$ {price}</div>
          <div className="py-2">{description}</div>
          <div className="py-2">
            <div className="w-full ">
              <Option_size
                sizeList={size}
                currentSize={currentSize}
                onChange={handleSizeChange}
              />
              <Option_color
                colorList={color}
                currentColor={currentColor}
                onChange={handleColorChange}
              />
            </div>
            <div className="flex items-center my-10 gap-4">
              <div
                className="block w-full bg-black m-auto py-3 text-white text-xl font-bold text-center cursor-pointer"
                onClick={handleClick}
              >
                Add Cart
              </div>
              <div className="flex items-center px-10 py-3 border border-black">
                {isFavorite ? (
                  <AiFillHeart
                    className={`text-2xl  cursor-pointer ${
                      isFavorite && "text-red-600"
                    }`}
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <AiOutlineHeart
                    className={`text-2xl  cursor-pointer ${
                      isFavorite && "text-rose-500"
                    }`}
                    onClick={handleFavoriteClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
