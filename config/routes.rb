Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
    get 'random-greeting', to: 'greetings#hello'
  end

  # Forward all request to StaticController#index but requests
  # must be non-Ajax (!req.xhr) and HTML Mime type (req.format.html?).
  # This does not include the root ("/") path.
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # forward root to StaticController#index
  root 'static#index'
end
