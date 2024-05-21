class ApplicationController < ActionController::Base

    def index
        render partial: 'index'
    end
        
    def login_page
        render partial:'login-form'
    end
    

end
