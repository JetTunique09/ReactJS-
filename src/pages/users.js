import React, { useState } from 'react';
import Layout from '../components/Mise en page/Layout';
import PrivateRoute from '../components/Acces/PrivateRoute';
import UsersList from '../components/Users/UsersList';
import CreateAdmin from '../components/Users/CreateAdmin';
import CreateUser from '../components/Users/CreateUser';
import ChangeTypeUser from '../components/Users/ChangeUserType';
import DeleteUser from '../components/Users/DeleteUser';

const UsersPage = () => {
  const [isCreateAdminVisible, setIsCreateAdminVisible] = useState(false);
  const [isCreateUserVisible, setIsCreateUserVisible] = useState(false);
  const [isChangeTypeUserVisible, setIsChangeTypeUserVisible] = useState(false);
  const [isDeleteUserVisible, setIsDeleteUserVisible] = useState(false);

  return (
    <PrivateRoute component={() => (
      <Layout>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => setIsCreateAdminVisible(!isCreateAdminVisible)}
          >
            {isCreateAdminVisible ? 'Annuler' : 'Ajouter admin'}
          </button>
          <button
            style={styles.button}
            onClick={() => setIsCreateUserVisible(!isCreateUserVisible)}
          >
            {isCreateUserVisible ? 'Annuler' : 'Ajouter utilisateur'}
          </button>
        </div>
        {isCreateAdminVisible && <CreateAdmin />}
        {isCreateUserVisible && <CreateUser />}
        
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => setIsChangeTypeUserVisible(!isChangeTypeUserVisible)}
          >
            {isChangeTypeUserVisible ? 'Annuler' : 'Modifier le type d\'utilisateur'}
          </button>
          <button
            style={styles.button}
            onClick={() => setIsDeleteUserVisible(!isDeleteUserVisible)}
          >
            {isDeleteUserVisible ? 'Annuler' : 'Supprimer utilisateur'}
          </button>
        </div>
        {isChangeTypeUserVisible && <ChangeTypeUser />}
        {isDeleteUserVisible && <DeleteUser />}

        <h1 style={styles.header}>Liste des utilisateurs</h1>
        <UsersList />
      </Layout>
    )} />
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s',
  },
  header: {
    textAlign: 'center',
    margin: '2rem 0',
    fontSize: '2rem',
  },
};

export default UsersPage;
