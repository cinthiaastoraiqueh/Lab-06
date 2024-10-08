import React, { useEffect, useState } from 'react';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 400;

const RandomAvatarCard = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const fetchRandomAvatar = async () => {
    const randomSeed = Math.random().toString(36).substring(7); // Genera una semilla aleatoria
    const avatarApiUrl = `https://api.dicebear.com/9.x/<styleName>/svg`; // Crea la URL con la semilla aleatoria
    
    try {
      const response = await fetch(avatarApiUrl);
      if (response.ok) {
        setAvatarUrl(avatarApiUrl); // Si la respuesta es correcta, guarda la URL
      } else {
        console.error("Error al cargar el avatar");
      }
    } catch (error) {
      console.error("Error en la petición", error);
    }
  };

  useEffect(() => {
    fetchRandomAvatar();
  }, []);

  return (
    <div style={{ 
      width: `${CARD_WIDTH}px`, 
      height: `${CARD_HEIGHT}px`, 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Random Image</h2>
      {avatarUrl ? (
        <img 
          src={avatarUrl} 
          alt="Random Avatar" 
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            marginBottom: '20px' 
          }} 
        />
      ) : (
        <p>Cargando avatar...</p>
      )}
      <hr style={{ margin: '20px 0' }} />
      <p style={{ fontStyle: 'italic', marginBottom: '5px' }}>Descripción:</p>
      <p style={{ color: '#555' }}>Colocar alguna descripción para los personajes</p>
    </div>
  );
};

export default RandomAvatarCard;
