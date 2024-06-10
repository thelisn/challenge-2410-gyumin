# CHALLENGE

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<br>

## 프로젝트 설치

Node.js 20.14.0 버전 이상에서 실행할 것을 권장합니다.

챌린지 프로젝트이며 3000번 포트(Server)와 5173번 포트(Client)를 사용합니다.

(이미 3000번 혹은 5173번 포트가 사용 중이라면 제대로 실행되지 않을 수 있습니다.)



1. 프로젝트 클론

    ```bash
    git clone https://github.com/thelisn/challenge-2410-gyumin.git
    ```

2. 디렉토리 변경

    ```bash
    cd challenge-2410-gyumin
    ```

3. 패키지 설치

    ```bash
    npm install
    ```

4. 프로젝트 실행

    ```bash
    npm run dev
    ```

5. [http://localhost:5173](http://localhost:5173) 접속

<br>

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

<br>

## 프로젝트 설명
- 포스트 확인, 작성, 검색(제목 및 날짜)이 가능한 피드를 구현
- Mocking DB 사용하여 데이터를 호출 및 생성 (json-server 라이브러리 사용)
- 활용 라이브러리
  - CSS: Tailwind CSS
  - 상태 관리: zustand
  - 데이터 캐싱: tanstack-query

<br>

## 피드백
- `README.md` 파일에 설명이 부족함 (`npm run dev` 이후 작동 방법, 사용하는 포트, 프로젝트 구조에 대한 추가 설명 등)
- `.env` 파일은 내용을 비운 example 형식으로 제공할 것
- 프로젝트에서 사용하는 포트에 대한 안내와 이미 해당 포트를 사용 중일 때의 에러 처리 실패
- 검색 초기화 후 바로 재검색 했을 때의 동작이 가시적이지 않음 (UI 날짜는 남아있으나, state는 소멸되는 현상)