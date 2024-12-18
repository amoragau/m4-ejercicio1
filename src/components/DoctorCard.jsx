import PropTypes from 'prop-types';

function DoctorCard({ name, specialty, experience, img, onSelect }) {
  return (
    <div onClick={onSelect} className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img 
        src={img}
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
      <p className="text-sm text-gray-500 mt-2"> {experience} años de experiencia.</p>
      <button 
        onClick={onSelect}
        className="w-full mt-4 bg-third-color text-white py-2 px-4 rounded hover:bg-second-color transition-colors"
      >
      Seleccionar Doctor
    </button>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  onSelect: PropTypes.any
};

export default DoctorCard;