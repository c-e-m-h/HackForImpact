from marshmallow import Schema, fields

class VaccinationRecordSchema(Schema):
    vaccine_name = fields.Str(required=True)
    administration_date = fields.Date(required=True)

class AnimalDetailsSchema(Schema):
    id = fields.Int(required=True)
    name = fields.Str(required=True)
    vaccinations = fields.List(fields.Nested(VaccinationRecordSchema))
    adoption_status = fields.Str(required=True)
