import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import CreateUser from '../components/Users/CreateUser'; // Assurez-vous d'importer le composant CreateUser

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4555/login', { id, password });
      const token = response.data;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/home');
      } else {
        setError('Erreur lors de la connexion');
      }
    } catch (err) {
      setError('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Connexion</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="id" style={styles.label}>Identifiant :</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Se connecter</button>
      </form>
      <p style={styles.link}>
        Pas encore inscrit?{' '}
        <button 
          onClick={() => navigate('/inscription')}
          style={styles.linkButton}
        >
          Crée un compte
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
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
  link: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#333',
  },
  linkButton: {
    background: 'none',
    color: '#007bff',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
  },
};

export default LoginPage;
