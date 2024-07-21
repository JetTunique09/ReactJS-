import React, { useState } from 'react';
import axios from 'axios';

const DeleteConference = () => {
  const [conferenceId, setConferenceId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const handleDeleteConference = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:4555/conference/${conferenceId}`;
      const response = await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMessage('Conférence supprimée avec succès !');
        setError('');
      } else {
        setMessage('');
        setError('Erreur lors de la suppression de la conférence');
      }
    } catch (err) {
      setMessage('');
      setError('Erreur lors de la suppression de la conférence : ' + (err.response ? err.response.data.message : err.message));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Supprimer une conférence</h1>
      <form onSubmit={handleDeleteConference} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="conferenceId" style={styles.label}>ID Conférence :</label>
          <input
            type="text"
            id="conferenceId"
            value={conferenceId}
            onChange={(e) => setConferenceId(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
        <button type="submit" style={styles.button}>Supprimer la conférence</button>
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

export default DeleteConference;

