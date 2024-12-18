import PropTypes from 'prop-types';
import DoctorCard from "./DoctorCard";

function DoctorList({ doctors, onDoctorSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          name={doctor.name}
          specialty={doctor.specialty}
          experience={doctor.experience}
          img={doctor.img}
          onSelect={() => onDoctorSelect(doctor)}
        />
      ))}
    </div>
  );
}
DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired
    })
  ).isRequired,
  onDoctorSelect:PropTypes.any
};
export default DoctorList;