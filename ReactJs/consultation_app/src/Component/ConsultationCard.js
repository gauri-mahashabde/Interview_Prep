import React from 'react'

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
ConsultationCard.defaultProps = {
  userName: 'Anonymous',
  consultationDate: 'N/A',
  topic: 'General'
};





export default ConsultationCard