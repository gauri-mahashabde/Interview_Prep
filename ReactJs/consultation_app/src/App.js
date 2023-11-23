import React from 'react'
import ConsultationCard from './Component/ConsultationCard'
import ContentCard from './Component/ContentCard'
//import Parentcomponent from './Component/Parentcomponent'


function App() {
  const consultationData = {
    userName: 'John Doe',
    consultationDate: '2023-08-12',
    topic: 'Healthcare'
  };  

  const defaultAuthor = "Rajath"
  const contentData = {
    title: 'React Tips',
    description: 'Useful tips for working with React.',
    author: 'Jane Smith'
  };

  return (
    <div className='App'>
      <ConsultationCard {...consultationData}/>
      <ContentCard {...contentData}/>
      <ConsultationCard />
      <ContentCard />
      {/* <Parentcomponent/> */}
    </div>
  )
}

export default App


