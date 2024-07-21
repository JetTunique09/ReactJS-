import React from 'react';
import Layout from '../components/Mise en page/Layout';
import PrivateRoute from '../components/Acces/PrivateRoute';
import ChangePassword from '../components/Users/ChangePassword.jsx';

const ParamsAdminPage = () => {
  return (
    <PrivateRoute component={() => (
      <Layout>
        <ChangePassword />
      </Layout>
    )} />
  );
};

export default ParamsAdminPage;
