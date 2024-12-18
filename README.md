# Sistema Hospital las Casitas

## 📋 Descripción
Sistema web para la gestión de citas médicas desarrollado con React, Vite y Tailwind CSS. Permite a los pacientes agendar citas con diferentes especialistas médicos de manera sencilla y eficiente.

## 🚀 Características Principales
- Visualización de doctores por especialidad
- Formulario de agendamiento de citas
- Selección de doctor
- Gestión de horarios disponibles
- Interfaz responsiva y amigable

## 🛠️ Tecnologías Utilizadas
- React
- Vite
- Tailwind CSS
- useState y useEffect Hooks

## 📦 Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/amoragau/m4-ejercicio1.git
cd m4-ejercicio1
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## 🔧 Configuración

### Estructura de Archivos
```
m4-ejercicio1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorList.jsx
│   │   ├── DoctorCard.jsx
│   │   └── ServiceList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### Componentes Principales

#### AppointmentForm
Formulario para agendar citas con los siguientes campos:
- Datos del paciente (nombre, email, teléfono)
- Selección de doctor
- Fecha y hora de la cita
- Mensaje adicional

```jsx
<AppointmentForm
  selectedDoctor={selectedDoctor}
  doctors={doctors}
  services={services} //por implementar
  onSubmit={handleAppointmentSubmit}
/>
```

#### DoctorList
Componente que muestra la lista de doctores disponibles. Permite la selección de un doctor para agendar una cita.

```jsx
<DoctorList 
  doctors={doctors}
  onDoctorSelect={handleDoctorSelect}
/>
```

#### DoctorCard
Tarjeta que muestra la información del doctor:
- Nombre
- Especialidad
- Años de experiencia
- Foto

```jsx
<DoctorCard
  key={doctor.id}
  name={doctor.name}
  specialty={doctor.specialty}
  experience={doctor.experience}
  img={doctor.img}
  onSelect={() => onDoctorSelect(doctor)}
/>
```

#### ServiceList
Lista de servicios médicos disponibles en el hospital.

## 🌟 Uso

1. Seleccionar especialidad médica
2. Elegir doctor disponible
3. Completar información personal
4. Seleccionar fecha y hora
5. Enviar solicitud de cita

## 🔍 Estados y Props

### Estados Principales
```javascript
const [patientData, setPatientData] = useState({
  name: '',
  email: '',
  phone: ''
});

const [appointmentData, setAppointmentData] = useState({
  date: '',
  time: '',
  message: ''
});
```

### Props
```javascript
AppointmentForm.propTypes = {
  selectedDoctor: PropTypes.object,
  doctors: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};
```

## 📱 Responsive Design
El sistema está diseñado para funcionar en:
- Dispositivos móviles
- Tablets
- Escritorio

## Recursos ✒️

* [unDraw](https://undraw.co)
* [DALL-E](https://openai.com/index/dall-e-3/)
* [ChatGPT](https://openai.com/index)

## Autor
Desarrollado Ana Moraga.
