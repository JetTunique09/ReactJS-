import React, { useState } from 'react';
import axios from 'axios';

const ChangeUserType = () => {
  const [userId, setUserId] = useState('');
  const [newType, setNewType] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUserType = async (e) => {
    e.preventDefault();

    if (!userId || !newType) {
      setError('Tous les champs sont requis.');
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      // URL avec l'ID de l'utilisateur
      const url = `http://localhost:4555/usertype/${userId}`;
      
      // Corps de la requête
      const body = { newType };
      
      console.log('Envoi de la requête à l\'URL:', url);
      console.log('Corps de la requête:', body);
      
      // Envoi de la requête PATCH
      const response = await axios.patch(url, body, {
        headers: {
          'Content-Type': 'application/json',
      
        },
      });
      
      console.log('Réponse du serveur:', response);
      
      // Traitement de la réponse
      if (response.status === 200) {
        setMessage('Type de permission changé avec succès !');
      } else {
        setError('Erreur lors du changement de type de permission.');
      }
    } catch (err) {
      console.error('Change user type error:', err);
      setError('Erreur lors du changement de type de permission.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Changer le type de permission</h1>
      <form onSubmit={handleChangeUserType} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="userId" style={styles.label}>ID Utilisateur :</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newType" style={styles.label}>Nouveau Type :</label>
          <input
            type="text"
            id="newType"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? 'Chargement...' : 'Changer le type'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
  success: {
    color: 'green',
    marginBottom: '15px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ChangeUserType;
