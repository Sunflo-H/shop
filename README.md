# Project : 쇼핑몰 프로젝트
# Stack
- HTML
- CSS
- React

# API
- Firebase
- cloudinary

# Library
- React Query
- React Router 
- SweetAlert

# 목표
상품을 보여주고, 장바구니에 담는 등의 기능에 OAuth 로그인, 그리고 핫한 AI를 이용한 기능을 만들고자 합니다.

# 기능
- 모든 등급의 회원들이 사용 가능한 기능
  - 상품리스트
  - 장바구니
  - 찜하기
  - AI 추천
- 어드민 등급만 가능한 기능
  - 상품등록

# 스크린샷
## Full
![image](https://user-images.githubusercontent.com/70611956/233819409-fbe01be2-0d76-4bd4-8b95-8b8b69e134a7.png)
![image](https://user-images.githubusercontent.com/70611956/233821144-c00d9cc6-a48c-43c1-a62b-65c2186d2923.png)
![image](https://user-images.githubusercontent.com/70611956/233821151-59357d55-e007-4770-a616-87beca7f6981.png)


## Product List
![image](https://user-images.githubusercontent.com/70611956/233871224-975dd1c3-2c10-404a-bfe9-d8c0f31edc65.png)

## Product Detail
![image](https://user-images.githubusercontent.com/70611956/233871239-11e8af8a-2ca8-4af1-8953-3b89e9fc8c60.png)

## Cart
![image](https://user-images.githubusercontent.com/70611956/233871256-e7ee8f95-1181-4373-8d7a-7a46319f2519.png)

## Favorites
![image](https://user-images.githubusercontent.com/70611956/233871270-13b477fa-8935-424f-81ab-7160ac673a46.png)

## Recommend
![image](https://user-images.githubusercontent.com/70611956/233871308-33a72f88-d5fd-4fff-a688-b55fd95b0e5b.png)


# 어려웠던점
## 첫 렌더링과 ProtectedRoute
ProtectedRoute를 만들어서 특정 URL에는 로그인한 회원만 또는 Admin 등급의 회원만 접근이 가능하도록 만들었습니다. 하지만 회원의 데이터를 가져오기 전, 첫 렌더링 단계에서 이미 회원데이터 체크를 하여 로그인을 했어도 접근이 불가능한 상태가 되었습니다. 이를 해결하기 위해 처음에는 Localstorage를 사용해서 첫 렌더링 단계에서는 firebase의 데이터를 사용하지 않고 LocalStorage의 데이터를 사용하도록 했습니다.
이후 react query를 사용하다가 isLoading을 보고 이것을 사용하면 더 적절하게 적용이 가능할 것 같아서 isLoading이라는 state를 사용하는 방법으로 업데이트 했습니다.

## AI 학습의 어려움
Chat GPT를 이용해서 스타일을 추천하는 페이지를 만들었습니다. 이 과정에서 AI를 학습시키는 것과 그 데이터를 다루는 것이 어려웠습니다. 아무래도 Chat GPT가 Text 기반의 AI다보니 이미지를 처리하는 능력이 부족하여 이미지 처리방법을 알아야 했습니다. 그리고 이미지를 분석하는 능력도 부족하여 이를 보완하여 답을 하도록 학습을 시켜야 했습니다. 최종적 앱에 있는 사진들의 URL을 입력받아 그 중 제일 적절한 URL과 추천 이유를 답변해주고, 답변에서 URL만 뽑아 이미지를 보여주었습니다.
