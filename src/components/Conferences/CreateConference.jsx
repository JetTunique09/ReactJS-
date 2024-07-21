import React, { useState } from 'react';
import axios from 'axios';

const CreateConference = () => {
  const [conference, setConference] = useState({
    id: '',
    title: '',
    date: '',
    createdAt: '',
    description: '',
    img: '',
    content: '',
    duration: '',
    addressl1: '',
    addressl2: '',
    postalCode: '',
    city: '',
    coordinates: '',
    speakerFirstname: '',
    speakerLastname: '',
    stakeholderFirstname: '',
    stakeholderLastname: '',
    stakeholderJob: '',
    stakeholderImg: '',
    mainColor: '',
    secondColor: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConference((prevConference) => ({
      ...prevConference,
      [name]: value,
    }));
  };

  const handleCreateConference = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:4555/conference';
      const body = {
        id: conference.id,
        title: conference.title,
        date: conference.date,
        createdAt: conference.createdAt,
        description: conference.description,
        img: conference.img,
        content: conference.content,
        duration: conference.duration,
        osMap: {
          addressl1: conference.addressl1,
          addressl2: conference.addressl2,
          postalCode: conference.postalCode,
          city: conference.city,
          coordinates: conference.coordinates ? conference.coordinates.split(',').map(coord => parseFloat(coord.trim())) : [],
        },
        speakers: [
          {
            firstname: conference.speakerFirstname,
            lastname: conference.speakerLastname,
          },
        ],
        stakeholders: [
          {
            firstname: conference.stakeholderFirstname,
            lastname: conference.stakeholderLastname,
            job: conference.stakeholderJob,
            img: conference.stakeholderImg,
          },
        ],
        design: {
          mainColor: conference.mainColor,
          secondColor: conference.secondColor,
        },
      };

      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setMessage('Conférence créée avec succès !');
        setError('');
        setConference({
          id: '',
          title: '',
          date: '',
          createdAt: '',
          description: '',
          img: '',
          content: '',
          duration: '',
          addressl1: '',
          addressl2: '',
          postalCode: '',
          city: '',
          coordinates: '',
          speakerFirstname: '',
          speakerLastname: '',
          stakeholderFirstname: '',
          stakeholderLastname: '',
          stakeholderJob: '',
          stakeholderImg: '',
          mainColor: '',
          secondColor: '',
        });
      } else {
        setMessage('');
        setError('Erreur lors de la création de la conférence');
      }
    } catch (err) {
      setMessage('');
      const errorMsg = err.response && err.response.data && err.response.data.message 
        ? err.response.data.message 
        : 'Erreur lors de la création de la conférence : ' + err.message;
      setError(errorMsg);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Créer une Conférence</h2>
      <form onSubmit={handleCreateConference} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="id" style={styles.label}>ID :</label>
          <input
            type="text"
            id="id"
            name="id"
            value={conference.id}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={conference.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="date" style={styles.label}>Date :</label>
          <input
            type="text"
            id="date"
            name="date"
            value={conference.date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="createdAt" style={styles.label}>Créé le :</label>
          <input
            type="text"
            id="createdAt"
            name="createdAt"
            value={conference.createdAt}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description :</label>
          <textarea
            id="description"
            name="description"
            value={conference.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="img" style={styles.label}>Image URL :</label>
          <input
            type="text"
            id="img"
            name="img"
            value={conference.img}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Contenu :</label>
          <textarea
            id="content"
            name="content"
            value={conference.content}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="duration" style={styles.label}>Durée :</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={conference.duration}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="addressl1" style={styles.label}>Adresse Ligne 1 :</label>
          <input
            type="text"
            id="addressl1"
            name="addressl1"
            value={conference.addressl1}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="addressl2" style={styles.label}>Adresse Ligne 2 :</label>
          <input
            type="text"
            id="addressl2"
            name="addressl2"
            value={conference.addressl2}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="postalCode" style={styles.label}>Code Postal :</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={conference.postalCode}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="city" style={styles.label}>Ville :</label>
          <input
            type="text"
            id="city"
            name="city"
            value={conference.city}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="coordinates" style={styles.label}>Coordonnées (séparées par des virgules) :</label>
          <input
            type="text"
            id="coordinates"
            name="coordinates"
            value={conference.coordinates}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="speakerFirstname" style={styles.label}>Prénom du Conférencier :</label>
          <input
            type="text"
            id="speakerFirstname"
            name="speakerFirstname"
            value={conference.speakerFirstname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="speakerLastname" style={styles.label}>Nom du Conférencier :</label>
          <input
            type="text"
            id="speakerLastname"
            name="speakerLastname"
            value={conference.speakerLastname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="stakeholderFirstname" style={styles.label}>Prénom de l'Intervenant :</label>
          <input
            type="text"
            id="stakeholderFirstname"
            name="stakeholderFirstname"
            value={conference.stakeholderFirstname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="stakeholderLastname" style={styles.label}>Nom de l'Intervenant :</label>
          <input
            type="text"
            id="stakeholderLastname"
            name="stakeholderLastname"
            value={conference.stakeholderLastname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="stakeholderJob" style={styles.label}>Métier de l'Intervenant :</label>
          <input
            type="text"
            id="stakeholderJob"
            name="stakeholderJob"
            value={conference.stakeholderJob}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="stakeholderImg" style={styles.label}>Image de l'Intervenant :</label>
          <input
            type="text"
            id="stakeholderImg"
            name="stakeholderImg"
            value={conference.stakeholderImg}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="mainColor" style={styles.label}>Couleur Principale :</label>
          <input
            type="text"
            id="mainColor"
            name="mainColor"
            value={conference.mainColor}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="secondColor" style={styles.label}>Seconde Couleur :</label>
          <input
            type="text"
            id="secondColor"
            name="secondColor"
            value={conference.secondColor}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
        <button type="submit" style={styles.button}>Créer la Conférence</button>
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
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px',
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

export default CreateConference;
