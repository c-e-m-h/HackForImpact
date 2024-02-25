from flask import Blueprint, jsonify
from services.rescuegroups_service import RescueGroupsService

bp = Blueprint('animals', __name__)

@bp.route('/animals/<int:animal_id>')
def get_animal(animal_id):
    animal_details = RescueGroupsService.get_animal_details(animal_id)
    if animal_details:
        return jsonify(animal_details), 200
    else:
        return jsonify({"error": "Animal not found"}), 404
