
function memo() {
  const submit = document.getElementById("submit");
     // getElementById「投稿する」ボタンの情報を取得
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    // フォームに入力された値を取得できるオブジェクト。new FormData(フォームの要素);
    const XHR = new XMLHttpRequest();
    // 非同期通信を実装するために必要なXMLHttpRequestのオブジェクトを生成
    XHR.open("POST", "/posts", true);
    // open＝初期化（リクエストが動き出すスタート）（HTTPメソッド,パス,非同期通信）
    XHR.responseType = "json";
    XHR.send(formData);
    // メモ投稿のフォーム（formdata)に入力された情報を送信
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      // 指定したHTMLなどを、特定の要素に描画できるメソッド(挿入する)
      formText.value = "";
    };
    e.preventDefault();
  });
 }
 window.addEventListener("load", memo);
//  window（ページ）をload（読み込み）した時に実行します。