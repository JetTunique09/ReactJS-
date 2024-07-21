import React from 'react';
import { Link } from 'gatsby';

const ConferenceCard = ({ conference }) => {
  return (
    <div style={styles.card}>
      <img src={conference.img} alt={conference.title} style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.title}>{conference.title}</h2>
        <p style={styles.date}>Date: {new Date(conference.date).toLocaleDateString()}</p>
        <p style={styles.duration}>Durée: {conference.duration}</p>
        <p style={styles.description}>{conference.description}</p>
        <Link to={`/conference-detail/${conference.id}`} style={styles.button}>Voir +</Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '350px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  details: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    overflow: 'hidden',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  date: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  duration: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  button: {
    marginTop: 'auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
};

export default ConferenceCard;
