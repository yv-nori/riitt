Rails.application.routes.draw do
  root to: 'riitt#index'
  get 'service-web', to: 'riitt#web'
  get 'service-media', to: 'riitt#media'
  get 'service-print', to: 'riitt#print'
  get 'service-system', to: 'riitt#system'
  get 'company', to: 'riitt#company'
  get 'contact', to: 'riitt#contact'
  post 'contact_send', to: 'riitt#contact_send'
  get 'works', to: 'riitt#works'
  get 'privacy', to: 'riitt#privacy'
  get 'infomation', to: 'riitt#infomation'
end
