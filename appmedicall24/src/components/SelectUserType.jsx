import React from 'react';

function UserTypeSelector() {
  const handleRedirect = (event) => {
    console.log('ejecutada');
    const url = event.target.value;
    if (url && url !== 'selected') {
      window.location.href = url; // Redirige a la URL seleccionada
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <select
        id="userType"
        onChange={handleRedirect}
        className="block w-64 h-8 bg-pink-600 text-white text-center rounded-md font-bold text-lg p-0 sm:w-40"
        style={{ textIndent: '35px' }}
      >
        <option value="selected" disabled style={{ color: 'rgb(199, 199, 199)' }}>
          Tipo de usuario
        </option>
        <option value="https://appmedicall24.com/" selected>
          Personas
        </option>
        <option value="https://medicall24.com.co/instituciones-ips/">Instituciones - IPS</option>
        <option value="https://medicall24.com.co/entidades/">Entidades de Salud</option>
        <option value="#">Organizaciones o Empresas</option>
        <option value="#">Profesionales Independientes</option>
      </select>
    </div>
  );
}

export default UserTypeSelector;
