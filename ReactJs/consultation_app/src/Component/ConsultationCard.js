import React from 'react'
import PropTypes from 'prop-types';


function ConsultationCard({ userName, consultationDate, topic }) {
  return (
    <div className="consultation-card">
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
        </div>
 
 )
 
};
//default props
// ConsultationCard.defaultProps = {
//   userName: 'Anonymous',
//   consultationDate: 'N/A',
//   topic: 'General'
// };

// Prop types validation
ConsultationCard.propTypes = {
  userName: PropTypes.string.isRequired,
  consultationDate: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
};



export default ConsultationCard;