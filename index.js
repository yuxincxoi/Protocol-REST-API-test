const getDataAJAX = () => {
  // XMLHttpRequest 생성
  const xhr = new XMLHttpRequest();

  // GET 요청으로 API 데이터 받아오기
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      // 데이터 parse
      const data = JSON.parse(xhr.responseText);

      data.forEach((element) => {
        // html 요소들 생성
        const createPostNum = document.createElement("p");
        const createUserId = document.createElement("p");
        const createTitle = document.createElement("h2");
        const createContent = document.createElement("p");
        const hr = document.createElement("hr");
        root.append(
          createPostNum,
          createUserId,
          createTitle,
          createContent,
          hr
        );

        // data 변수 할당
        const postNum = element.id;
        const userId = element.userId;
        const title = element.title;
        const content = element.body;
        // 글 번호, id, 포스트 제목, 포스트 내용 표시
        createPostNum.innerText = `No. ${postNum}`;
        createUserId.innerText = `글쓴이: ${userId}`;
        createTitle.innerText = title;
        createContent.innerText = content;
      });
    }
  });

  xhr.send();
};

getDataAJAX();
