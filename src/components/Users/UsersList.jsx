import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Token manquant');

        const response = await axios.get('http://localhost:4555/isadmin', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsAdmin(response.data.isAdmin);

        if (response.data.isAdmin) {
          fetchUsers();
        } else {
          setError('Vous devez être administrateur pour voir cette page');
        }
      } catch (err) {
        console.error('Erreur lors de la vérification de l\'admin:', err);
        setError('Erreur lors de la vérification de l\'admin');
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4555/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUsers(response.data);
      } catch (err) {
        setError('Erreur lors de la récupération des utilisateurs');
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, []);

  if (loading) return <p>Chargement des utilisateurs...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>Nom d'utilisateur </th>
            <th>Droit </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{user.id}</td>
              <td style={styles.tableCell}>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableContainer: {
    overflowX: 'auto',
    padding: '1rem',
    border: '1px solid #3aaed8',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
  },
  tableHeader: {
    color: '#3aaed8',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px 15px',
    textAlign: 'left',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
};

export default UsersList;
