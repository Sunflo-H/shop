import axios from "axios";
import React from "react";
import { useState } from "react";
import { imageUrlQueries } from "../api/firebase";
import useProducts from "../hooks/useProducts";
import { useEffect } from "react";
import Button from "../components/ui/Button";

export default function Recommend() {
  const [inputText, setInputText] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const recommendationText = recommendation.split("@")[1];
  const recommendationImage = recommendation.split("@")[0];
  console.log(recommendation);

  const genders = ["Men", "Women"];
  const [gender, setGender] = useState("Men");

  const { productsQueries } = useProducts();
  const [men, women] = productsQueries;

  let menUrls = men.data?.map((product) => product.imageUrl);
  let womenUrls = women.data?.map((product) => product.imageUrl);

  // let product;
  // if (gender === "Men") {
  //   product = productsQueries[0].data.find((data) => {
  //     // console.log(data.imageUrl === recommendationImage.replace(" ", ""));
  //     if (data.imageUrl === recommendationImage.replace(" ", "")) return data;
  //   });
  // } else {
  //   product = productsQueries[1].data.find((data) => {
  //     // console.log(data.imageUrl === recommendationImage.replace(" ", ""));
  //     if (data.imageUrl === recommendationImage.replace(" ", "")) return data;
  //   });
  // }

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getClothingRecommendation = async () => {
    try {
      const question = `${gender}'s ${inputText}`;

      const prompt = `
        나는 옷 스타일을 추천하는 전문가 AI입니다.
        나는 색을 위주로 추천합니다.  
        배경과 모델을 정확하게 구분합니다.
        배경은 추천 기준에 포함하지 않습니다.
        이미지를 매우 정확하게 인식합니다.
        나는 항상 추천 이유와 url을 알려줍니다.
        항상 url을 먼저 알려주고, 이유를 말합니다.
        url 답변의 형태는 "http://경로.jpg@" 입니다.
        추천 이유 외의 다른 말은 하지 않습니다.
        주어진 배열의 이미지를 모두 찾아보고 가장 유사한 이미지 하나를 추천해주고, 이유를 설명합니다. 꼭 모두 찾아보고 비교합니다.: ${
          gender === "Men"
            ? shuffle(menUrls).join(", ")
            : shuffle(womenUrls).join(", ")
        }.

        만약 이미지의 인식이 정확하게 되지 않는다면 해당 이미지를 포기하고, 대신 다른 이미지를 인식합니다.
      
        한번 말한 url은 모든 절반 이상의 url을 말하기 전까지, 다시는 말하지 않습니다.
        영어로 대답합니다.
 
       ${question} The answer is:`;
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",

          prompt: prompt,
          max_tokens: 2048,
          temperature: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );
      setRecommendation(response.data.choices[0].text);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  return (
    <div className="h-recommend pt-20 mb-20 px-4">
      <div className="text-center font-bold text-xl mb-4 border-b border-gray-200 py-2 px-4">
        Style Recommendation
      </div>
      <div className="flex justify-center gap-20 max-w-screen-xl h-full m-auto py-4 ">
        <div
          className={`w-2/5 ${
            recommendationImage ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="h-3/4 mb-4">
            <img className={`w-full h-full`} src={recommendationImage}></img>
          </div>
          <div
            className={`${recommendationImage ? "block font-bold" : "hidden"}`}
          >
            {recommendationText?.replace(".", "")}
          </div>
          <div
            className="w-40 bg-black text-white text-center m-auto py-2 cursor-pointer"
            onCLick={"asd"}
          >
            See now
          </div>
        </div>
        <div className="flex flex-col justify-center w-2/5 h-full">
          <div className="flex flex-col py-4 border border-gray-300 rounded-lg">
            <Option_gender
              genders={genders}
              currentGender={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <textarea
              className="px-10 py-4 max-h-96"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter a description for your preferred clothing style..."
              rows={4}
              cols={30}
            />

            <div
              className="mt-10 mx-10 py-2 border bg-black text-white text-xl text-center cursor-pointer "
              onClick={getClothingRecommendation}
            >
              Get Recommendation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Option_gender({ genders, onChange, currentGender }) {
  return (
    <div className="flex mb-4 gap-2 font-bold items-center justify-center">
      {genders.map((gender, i) => (
        <OptionItem
          gender={gender}
          currentGender={currentGender}
          onChange={onChange}
          key={i}
        />
      ))}
    </div>
  );
}

function OptionItem({ currentGender, onChange, gender }) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="gender"
        value={gender}
        id={gender}
        required
        onChange={onChange}
      />
      <label
        className={`w-20 py-2 border border-gary-300 cursor-pointer text-center ${
          gender === currentGender && "bg-black text-white"
        }`}
        htmlFor={gender}
      >
        {gender}
      </label>
    </>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // 배열에 미처리 요소가 남아있는 동안 반복합니다
  while (0 !== currentIndex) {
    // 남은 요소 중에서 무작위 인덱스를 선택합니다
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // 현재 요소와 무작위로 선택된 요소를 교환합니다
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
