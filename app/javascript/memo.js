function memo() { //memoという関数を定義
  const submit = document.getElementById("submit"); //「投稿する」ボタンの情報を取得
  submit.addEventListener("click", (e) => { //クリック時のイベントを定義
  const formData = new FormData(document.getElementById("form")); //メモ投稿のフォームに入力された情報を送信
  const XHR = new XMLHttpRequest(); //非同期通信を実装するために必要なXMLHttpRequest
  XHR.open("POST", "/posts", true); //openメソッドを使用して、リクエストの内容を引数へ追記
  XHR.responseType = "json"; //返却されるデータ形式はJSON
  XHR.send(formData);//メモ投稿のフォームに入力された情報を送信
  XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post; //レスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list"); //HTMLを描画する場所を指定する際に使用する「描画する親要素」のlistの要素を取得
      const formText = document.getElementById("content"); //メモの入力フォームをリセットするため
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);//要素listの直後に挿入できる
      formText.value = "";
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo); //既読機能と同様にwindow（ページ）をload（読み込み）時に実行
