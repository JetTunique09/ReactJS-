// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from '@reach/router';
// import Layout from '../Mise en page/Layout';

// const ConferenceDetail = () => {
//   const { id } = useParams();
//   const [conference, setConference] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchConferenceDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4555/conference/${id}`);
//         setConference(response.data.conference);
//       } catch (err) {
//         setError('Erreur de chargement des détails de la conférence');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchConferenceDetails();
//   }, [id]);

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   if (!conference) return <p>Aucune conférence trouvée.</p>;

//   return (
//     <Layout>
//       <div style={styles.container}>
//         <h1 style={styles.title}>{conference.title}</h1>
//         <img src={conference.img} alt={conference.title} style={styles.image} />
//         <p style={styles.date}>Date: {new Date(conference.date).toLocaleDateString()}</p>
//         <p style={styles.duration}>Durée: {conference.duration}</p>
//         <p style={styles.description}>{conference.description}</p>
//         <div style={styles.content} dangerouslySetInnerHTML={{ __html: conference.content }} />
//         <div style={styles.speakers}>
//           <h2>Speakers</h2>
//           {conference.speakers.map((speaker, index) => (
//             <p key={index}>{speaker.firstname} {speaker.lastname}</p>
//           ))}
//         </div>
//         <div style={styles.stakeholders}>
//           <h2>Stakeholders</h2>
//           {conference.stakeholders.map((stakeholder, index) => (
//             <div key={index} style={styles.stakeholder}>
//               <img src={stakeholder.img} alt={stakeholder.firstname} style={styles.stakeholderImage} />
//               <p>{stakeholder.firstname} {stakeholder.lastname}</p>
//               <p>{stakeholder.job}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//   },
//   title: {
//     fontSize: '2rem',
//     marginBottom: '1rem',
//   },
//   image: {
//     width: '100%',
//     objectFit: 'cover',
//     marginBottom: '1rem',
//   },
//   date: {
//     fontSize: '1rem',
//     color: '#666',
//     marginBottom: '0.5rem',
//   },
//   duration: {
//     fontSize: '1rem',
//     color: '#666',
//     marginBottom: '0.5rem',
//   },
//   description: {
//     fontSize: '1rem',
//     marginBottom: '1rem',
//   },
//   content: {
//     fontSize: '1rem',
//     marginBottom: '2rem',
//   },
//   speakers: {
//     marginBottom: '2rem',
//   },
//   stakeholders: {
//     marginBottom: '2rem',
//   },
//   stakeholder: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '1rem',
//   },
//   stakeholderImage: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     marginRight: '1rem',
//   },
// };

// export default ConferenceDetail;
