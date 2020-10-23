Rails.application.routes.draw do#トップページに向けてのルーティング設定
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
end
