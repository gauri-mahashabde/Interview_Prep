import React from 'react'
import PropTypes from 'prop-types';


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
// ContentCard.defaultProps = {
//   title: 'Untitled',
//   description: 'No description available',
//   author: 'Unknown'
// };

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default ContentCard