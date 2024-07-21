import React from 'react';
import CreateUser from '../components/Users/CreateUser';

const InscriptionPage = () => {
  return (
    <div style={styles.container}>
      <CreateUser />
      <p> Vous ne pouvez pas vous crée un compte administrateur, si vous en avez les droits crée votre compte Utilisateur</p>
      <p> puis contacter l'administrateur qui élévera votre permission ! Contacter example@mail.com</p>
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
};

export default InscriptionPage;
