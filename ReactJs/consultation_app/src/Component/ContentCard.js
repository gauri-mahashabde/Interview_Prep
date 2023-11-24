import React ,{useState}from 'react'
import PropTypes from 'prop-types';


function ContentCard({title , description , author}) {
  const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };
  return (
    <div className='content-card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>author:{author}</p>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
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