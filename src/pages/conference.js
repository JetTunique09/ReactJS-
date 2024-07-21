import React from 'react';
import ConferenceDetail from '../components/Conferences/ConferenceDetail';
import Layout from '../components/Mise en page/Layout';

const ConferenceDetailPage = ({ pageContext }) => {
  const { conferenceId } = pageContext;

  return (
    <Layout>
      <ConferenceDetail conferenceId={conferenceId} />
    </Layout>
  );
};

export default ConferenceDetailPage;
