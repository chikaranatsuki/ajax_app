Rails.application.routes.draw do#トップページに向けてのルーティング設定
  root to: 'posts#index'
  get 'posts/new', to: 'posts#new'
  get 'posts/id', to: 'posts#checked'
end
