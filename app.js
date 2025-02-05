// Datos del perfil
const profileData = {
    name: "Tu Nombre",
    description: "Desarrollador Web | Amante de la tecnología"
};

// Selecciona el contenedor de la información del perfil
const profileInfo = document.getElementById("profile-info");

// Crea elementos para el nombre y la descripción
const nameElement = document.createElement("h1");
nameElement.textContent = profileData.name;

const descriptionElement = document.createElement("p");
descriptionElement.textContent = profileData.description;

// Agrega los elementos al contenedor
profileInfo.appendChild(nameElement);
profileInfo.appendChild(descriptionElement);