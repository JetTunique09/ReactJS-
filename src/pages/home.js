import React, { useState } from 'react';
import Layout from '../components/Mise en page/Layout';
import PrivateRoute from '../components/Acces/PrivateRoute';
import ConferencesList from '../components/Conferences/ConferencesList';
import CreateConference from '../components/Conferences/CreateConference';
import DeleteConference from '../components/Conferences/DeleteConference';

const HomePage = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleCreate = () => setShowCreate(!showCreate);
  const toggleDelete = () => setShowDelete(!showDelete);

  return (
    <PrivateRoute component={() => (
      <Layout>
        <div style={styles.buttonContainer}>
          <button onClick={toggleCreate} style={styles.iconButton}>
            <span style={styles.plusIcon}>+</span>
          </button>
          <button onClick={toggleDelete} style={styles.iconButton}>
            <span style={styles.trashIcon}>🗑️</span>
          </button>
        </div>
        <div style={styles.formContainer}>
          {showCreate && <CreateConference />}
          {showDelete && <DeleteConference />}
        </div>
        <div style={styles.separator}></div>
        <ConferencesList />
      </Layout>
    )} />
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '2rem',
  },
  iconButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
  plusIcon: {
    fontSize: '1.5rem',
  },
  trashIcon: {
    fontSize: '1.5rem',
  },
  separator: {
    height: '2px', 
    backgroundColor: '#3AAED8', 
    width: '50%', 
    margin: '0 auto',
    marginBottom: '2rem',
  },
};

export default HomePage;
