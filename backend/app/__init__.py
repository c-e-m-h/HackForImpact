from flask import Flask
from sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/your_database_name'
    
    db.init_app(app)
    
    from .api.views import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    
    # Additional configuration and blueprint registration goes here
    
    return app
