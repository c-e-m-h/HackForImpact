from . import db
from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Cat(db.Model):
    # Defines the Cat model with its basic attributes and relationships to health records and behavioral assessments.
    species = db.Column(db.String(255), nullable=False)  # From animalSpecies
    sex = db.Column(db.String(50), nullable=False)  # From animalSex
    breed = db.Column(db.String(255), nullable=False)  # From animalBreed
    color = db.Column(db.String(255), nullable=False)  # From animalColor
    birthday = db.Column(db.Date, nullable=True)  # From animalBirthdate, converted to Date
    rescue_id = db.Column(db.String(255), nullable=True)  # From animalRescueID
    id = db.Column(db.Integer, primary_key=True)  # Unique identifier for each cat
    name = db.Column(db.String(255), nullable=False)  # Name of the cat
    spay_neuter_status = db.Column(db.Boolean, default=False, nullable=False)  # Indicates if the cat is spayed or neutered
    microchip_id = db.Column(db.String(255), nullable=True)  # Microchip ID for identification
    adoption_status = db.Column(db.String(255), default="pending", nullable=False)  # Current adoption status
    # Relationship to HealthRecord and BehavioralAssessment models for related data
    health_records = db.relationship('HealthRecord', backref='cat', lazy=True)
    behavioral_assessments = db.relationship('BehavioralAssessment', backref='cat', lazy=True)

class HealthRecord(db.Model):
    # Stores health-related records for each cat, such as vaccinations and treatments.
    id = db.Column(db.Integer, primary_key=True)  # Unique identifier for each health record
    cat_id = db.Column(db.Integer, db.ForeignKey('cat.id'), nullable=False)  # References the associated cat
    record_type = db.Column(db.String(255), nullable=False)  # Type of health record (vaccination, deworming, etc.)
    status = db.Column(db.String(255), nullable=False)  # Status of the record (completed, scheduled)
    date_administered = db.Column(db.DateTime, nullable=True)  # Date the treatment or vaccination was administered
    notes = db.Column(db.Text, nullable=True)  # Any additional notes

class BehavioralAssessment(db.Model):
    # Records behavioral assessments of cats to evaluate their readiness for adoption.
    id = db.Column(db.Integer, primary_key=True)  # Unique identifier for each assessment
    cat_id = db.Column(db.Integer, db.ForeignKey('cat.id'), nullable=False)  # References the associated cat
    date_assessed = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)  # Date of the behavioral assessment
    temperament = db.Column(db.Text, nullable=False)  # Observed temperament of the cat
    compatibility_with_cats = db.Column(db.Boolean, nullable=True)  # Compatibility with other cats
    compatibility_with_humans = db.Column(db.Boolean, nullable=True)  # Compatibility with humans
    notes = db.Column(db.Text, nullable=True)  # Additional notes from the assessment

# This code snippet should be integrated into your Flask application setup
# to initialize the SQLAlchemy with the Flask app:
# db.init_app(app)
