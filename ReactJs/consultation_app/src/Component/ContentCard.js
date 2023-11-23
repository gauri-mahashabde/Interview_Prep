import React from 'react'

function ContentCard({title , description , author}) {
  return (
    <div className='content-card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>author:{author}</p>
    </div>
  )
};

// Default props
ContentCard.defaultProps = {
  title: 'Untitled',
  description: 'No description available',
  author: 'Unknown'
};


export default ContentCard