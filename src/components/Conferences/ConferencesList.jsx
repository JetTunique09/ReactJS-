import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import ConferenceCard from '../Conferences/ConferenceCard.jsx';

const ConferencesList = () => {
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
      <h1 style={styles.header}>Liste des conférences</h1>
      <div style={styles.cardsContainer}>
        {conferences.length > 0 ? (
          conferences.map(conference => (
            <ConferenceCard key={conference.id} conference={conference} />
          ))
        ) : (
          <p>Aucune conférence disponible.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
};

export default ConferencesList;
