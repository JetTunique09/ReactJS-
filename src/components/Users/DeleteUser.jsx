import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token'); 

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:4555/user/${userId}`;
      const response = await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
      if (response.status === 200) {
        setMessage('Utilisateur supprimé avec succès !');
        setError('');
      } else {
        setMessage('');
        setError('Erreur lors de la suppression de l\'utilisateur');
      }
    } catch (err) {
      setMessage('');
      setError('Erreur lors de la suppression de l\'utilisateur : ' + (err.response ? err.response.data.message : err.message));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Supprimer un utilisateur</h1>
      <form onSubmit={handleDeleteUser} style={styles.form}>
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
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
        <button type="submit" style={styles.button}>Supprimer l'utilisateur</button>
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

export default DeleteUser;
