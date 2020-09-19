Rails.application.routes.draw do#トップページに向けてのルーティング設定
  get 'posts', to: 'posts#index' #postsコントローラーという名前のコントローラー　
  get 'posts/new', to: 'posts#new'
end
