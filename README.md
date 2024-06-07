# CHALLENGE

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 프로젝트 설치

Node.js 16.18.0 이상 설치되어야 명령어를 실행할 수 있습니다.

1. 프로젝트 클론

```bash
git clone https://github.com/thelisn/challenge-2410-gyumin.git
```

2. 패키지 설치

```bash
npm install
```

3. 프로젝트 실행

```bash
npm run dev
```

## 프로젝트 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂Feed
 ┃ ┃ ┣ 📜FeedItem.jsx
 ┃ ┃ ┣ 📜FeedList.jsx
 ┃ ┃ ┗ 📜SearchBox.jsx
 ┃ ┣ 📂WritePost
 ┃ ┃ ┣ 📜PostForm.jsx
 ┃ ┃ ┗ 📜Textarea.jsx
 ┃ ┣ 📜Button.jsx
 ┃ ┗ 📜Input.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetch.js
 ┃ ┗ 📜useWrite.js
 ┣ 📂layout
 ┃ ┗ 📜RootLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📜Feed.jsx
 ┃ ┗ 📜WritePost.jsx
 ┣ 📂router
 ┃ ┗ 📜router.jsx
 ┣ 📂store
 ┃ ┣ 📜useFeedStore.js
 ┃ ┗ 📜usePostFormStore.js
 ┣ 📂styles
 ┃ ┗ 📜index.css
 ┣ 📂utils
 ┃ ┗ 📜debounce.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
 ```

## 프로젝트 설명
- 포스트 확인, 작성, 검색(제목 및 날짜)이 가능한 피드를 구현
- mocking db를 사용하여 데이터를 호출 및 생성 (json-server 사용)
- CSS: Tailwind CSS / 상태 관리: zustand 활용

