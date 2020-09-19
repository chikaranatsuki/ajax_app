function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) { 
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => { 
      const postId = post.getAttribute("data-id"); //getAttributeで属性値を取得することができるので、メモのidを取得する
      const XHR = new XMLHttpRequest(); //オブジェクトを生成する
      XHR.open("GET", `/posts/${postId}`, true);  //どのようなリクエストをするのかを指定するメソッド。リクエストの初期化。
      XHR.responseType = "json";  //レスポンスとして欲しい情報の形式を指定するメソッド
      XHR.send(); //XMLHttpRequestで定義されているメソッドで、リクエストを送信できます
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }                                    //レスポンスがエラーだった場合の処理
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);