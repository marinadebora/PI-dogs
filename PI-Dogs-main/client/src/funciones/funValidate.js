export default function validate(form){
  let errors = {};
  if (!form.name) {
    errors.name = 'Name is required'
  }
  if (!form.heightMin || parseFloat(form.heightMin) < 10) {
    errors.heightMin = 'Min height required - must not be less than 10cm'
  }
  if (!form.heightMax || parseFloat(form.heightMax) <= parseFloat(form.heightMin) || parseFloat(form.heightMax) > 90) {
    errors.heightMax = 'Max height is required, must be greater than minimum height and less than 90 cm'
  }
  if (!form.weightMin || parseFloat(form.weightMin) < 1) {
    errors.weightMin = 'Min weight required - must not be less than 1kg'
  }
  if (!form.weightMax || parseFloat(form.weightMax) <= parseFloat(form.weightMin) || parseFloat(form.weightMax) > 90) {
    errors.weightMax = 'Max weight is required, must be greater than the minimum weight and less than 90 kg'
  }
  if (!form.life_span_Since || parseFloat(form.life_span_Since) < 5) {
    errors.life_span_Since = 'Years of life should be between 5 and 25 years'
  }
  if (!form.life_span_Until || parseFloat(form.life_span_Until) <= parseFloat(form.life_span_Since) || parseFloat(form.life_span_Until) < 5) {
    errors.life_span_Until = 'The years of life must be greater than the minimum value and less than 25 years'
  }
  if (form.temperaments.legth< 1) {
    errors.temperaments = 'Temperament is required'
  }
  return errors
}