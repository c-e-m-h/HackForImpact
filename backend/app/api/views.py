from flask import Blueprint, jsonify
from backend.app.services import RescueGroupsAPI
from backend.app.models import Cat, db_session

bp = Blueprint('animals', __name__)

@bp.route('/animals/<int:animal_id>')
def get_animal(animal_id):
    cat_data = RescueGroupsAPI.animal(animal_id)
    if cat_data:
        cat = Cat(
            name=cat_data.name,
            breed=cat_data.breed,
            sex=cat_data.sex,
            status=cat_data.status,
            color=cat_data.color,
            altered=cat_data.altered,
            birthday=cat_data.birthday,
            rescue_id=cat_data.rescueId,
            picture_url=cat_data.picture_url
        )
        db_session.add(cat)
        db_session.commit()
        return jsonify(cat_data), 200
    else:
        return jsonify({"error": "Cat not found"}), 404
