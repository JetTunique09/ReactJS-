import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

const IndexPage = () => {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const response = await axios.get('http://localhost:4555/conferences');
        setConferences(response.data);
      } catch (err) {
        setError('Erreur de chargement des conférences');
      } finally {
        setLoading(false);
      }
    };

    fetchConferences();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.loginButton}>Se connecter</Link>
      </div>
      <h1 style={styles.header}>Liste des Conférences</h1>
      <div style={styles.conferencesContainer}>
        {conferences.map(conference => (
          <div key={conference.id} style={styles.conferenceCard}>
            <img src={conference.img} alt={conference.title} style={styles.conferenceImage} />
            <h2 style={styles.conferenceTitle}>{conference.title}</h2>
            <p style={styles.conferenceDescription}>{conference.description}</p>
            <p style={styles.conferenceDate}>Date: {new Date(conference.date).toLocaleDateString()}</p>
            <p style={styles.conferenceDuration}>Durée: {conference.duration}</p>
            <Link to={`/conference/${conference.id}`} style={styles.moreInfoButton}>En savoir +</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  conferencesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  conferenceCard: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '350px',
    height: '500px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  conferenceImage: {
    width: '100%',
    height: '200px', 
    borderRadius: '8px',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  conferenceTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  conferenceDescription: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  conferenceDate: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  conferenceDuration: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  buttonContainer: {
    position: 'absolute',
    top: '4rem',
    right: '1rem',
    zIndex: 1000,
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  moreInfoButton: {
    display: 'block',
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
};

export default IndexPage;
