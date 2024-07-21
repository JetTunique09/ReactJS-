import axios from 'axios';

export const fetchUserStatus = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    
    const response = await axios.get('http://localhost:4555/isadmin', {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    console.log('User status response:', response.data); // Log de réponse de l'API
    return response.data.isAdmin ? 'admin' : 'user'; // Assurez-vous que l'API retourne un champ `isAdmin` pour le statut de l'utilisateur
  } catch (error) {
    console.error('Error fetching user status:', error); // Log d'erreur
    return null; // ou gérer l'erreur comme vous le souhaitez
  }
};
