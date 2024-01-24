import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';


function App() {
  interface Feedback {
    id: string | number;
    text: string;
    rating: number;
  }
  
  const [feedback, setFeedback] = useState<Feedback[]>(FeedbackData);

  const deleteFeedback = (id:number)=> {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter(feedback => feedback.id !== id))
    }
  }

  const addFeedback =(newFeedback: Feedback)=> {
    setFeedback([newFeedback,...feedback])
    console.log(newFeedback);
  }

  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App
