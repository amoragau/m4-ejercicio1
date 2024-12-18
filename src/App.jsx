import { useState, useEffect } from 'react'
import './App.css'
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import DoctorList from "./components/DoctorList"
import hopitalImagen from './assets/hospital.svg'
import hopitalLogo from './assets/Las casitas.png'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(()=>{
    //Simular API
    setDoctors([
      {id: 1, name: 'Dr. Juan Pérez', specialty: 'Cirugía General', experience: 7, img: 'medico1.jpg'},
      {id: 2, name: 'Dra. María González', specialty: 'Pediatría', experience: 10, img: 'medico3.jpg'},
      {id: 3, name: 'Dr. Luis Sánchez', specialty: 'Cardiología', experience: 15, img: 'medico2.jpg'},
      {id: 4, name: 'Dr. Luis Mendoza', specialty: 'Neurología', experience: 8, img: 'medico4.jpg'},
    ]);
    setServices([
      {id: 1, name: 'Medicina General'},
      {id: 2, name: 'Cardiología'},
      {id: 3, name: 'Pediatría'},
      {id: 4, name: 'Ginecología'},
      {id: 5, name: 'Neurología'},
      {id: 6, name: 'Radiología'},
      {id: 7, name: 'Cirugía General'},
      {id: 8, name: 'Oncología'},
    ]);
  }, []);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('contact');
  };
  const handleAppointmentSubmit = (formData) => {
    console.log('Datos del formulario:', formData);
    alert('Cita agendada con éxito');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-first-color mb-4">
                Hospital Las Casitas
              </h1>
              <p className="">
                <img src={hopitalImagen} className="imagen-inicio" alt="Imagen hospital" />
              </p>
              <br />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-first-color mb-4">
                    Nuestros Servicios
                  </h2>
                  <p className="text-black-600 mb-4">
                    Ofrecemos atención médica integral con los mejores especialistas.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('medical-team')} 
                    className="bg-third-color text-white px-4 py-2 rounded hover:bg-second-color"
                  >
                    Ver Equipo Médico
                  </button>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-first-color mb-4">
                    Agende su Cita
                  </h2>
                  <p className="text-black-600 mb-4">
                    Reserva tu consulta de manera rápida y sencilla.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('contact')} 
                    className="bg-third-color text-white px-4 py-2 rounded hover:bg-second-color"
                  >
                    Solicitar Cita
                  </button>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-first-color mb-4">
                    Atención 24/7
                  </h2>
                  <p className="text-black-600 mb-4">
                    Estamos disponibles para ti en cualquier momento.
                  </p>
                  <a 
                    href="tel:+56991234567" 
                    className="bg-third-color text-white px-4 py-2 rounded hover:bg-second-color"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'medical-team':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <h2 className="text-3xl font-bold text-first-color mb-6">
                  Nuestro Equipo Médico
                </h2>
                <DoctorList 
                  doctors={doctors}
                  onDoctorSelect={handleDoctorSelect}
                />
              </div>
              <ServiceList services={services}/>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-first-color mb-6">
                  Contacto
                </h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dirección:</strong> Av. Salvador 364, Providencia, Región Metropolitana
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Teléfono:</strong> +56 9 9123 4567
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> 123@hlc.cl
                  </p>
                </div>
              </div>
              <AppointmentForm
                selectedDoctor={selectedDoctor}
                doctors={doctors}
                services={services}
                onSubmit={handleAppointmentSubmit}
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-third-color text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <img src={hopitalLogo} className="logo" alt="Imagen hospital" />
          <span className="text-2xl font-bold text-first-color">Hospital Las Casitas</span>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="text-first-color hover:text-second-color"
            >
              Inicio
            </button>
            <button 
              onClick={() => setCurrentPage('medical-team')} 
              className="text-first-color hover:text-second-color"
            >
              Equipo Médico
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="text-first-color hover:text-second-color"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}

      <footer className="bg-third-color text-white py-8 mt-auto">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Hospital Las Casitas</h3>
            <p className="text-sm">
              Comprometidos con tu salud y bienestar
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')}>Inicio</button> ||
              <button onClick={() => setCurrentPage('medical-team')}>Equipo Médico</button> ||
              <button onClick={() => setCurrentPage('contact')}>Contacto</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;