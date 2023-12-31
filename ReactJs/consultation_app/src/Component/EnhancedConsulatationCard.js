import React from 'react'
import ConsultationCard from './ConsultationCard';

const EnhancedConsultationCard = ({ userName, consultationDate, topic, comments, likes }) => {
    return (
        <div className="enhanced-consultation-card">
            <ConsultationCard userName={userName} consultationDate={consultationDate} topic={topic} />
            <div className="comments-section">
                <p>Comments: {comments.map((comment, index) => <b key={index}><i>{comment} </i></b>)}</p>
            </div>
            <div className="likes-section">
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
};

export default EnhancedConsultationCard;
