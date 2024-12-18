import { useState } from 'react';

function AppointmentForm({ selectedDoctor, doctors, services, onSubmit }) {

  const initialState = {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    doctorId: selectedDoctor?.id || ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDoctorData = doctors.find(d => d.id === formData.doctorId);

    onSubmit({
      ...formData,
      doctor: selectedDoctorData
    });

    setFormData(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-first-color">
        Agendar Cita
      </h2>
        {/* Selección de Doctor */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Doctor
          </label>
          {selectedDoctor ? (
            <div className="p-3 bg-blue-50 rounded text-blue-800">
              {selectedDoctor.name} - {selectedDoctor.specialty}
            </div>
          ) : (
            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione un doctor</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          )}
        </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fecha
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          rows="4"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-third-color hover:bg-second-color text-white font-bold py-2 px-4 rounded"
          disabled={!formData.doctorId}
        >
          Solicitar Cita
        </button>
      </div>
    </form>
  );
}
export default AppointmentForm;