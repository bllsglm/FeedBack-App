import { ReactNode, createContext, useState } from "react";


export type FeedbackType = {
  id: string;
  text: string;
  rating: number;
}

type FeedbackProviderType = {
  children : ReactNode
}

type FeedbackContextType = {
  feedback: FeedbackType[];
  deleteFeedback: (id: string) => void;
  addFeedback: (newFeedback: FeedbackType) => void;
  editFeedback : (item : FeedbackType) => void;
  feedBackEdit : {item:{text:string, rating: number, id:string}, edit: boolean};
  updateFeedback: (id: string, updItem:FeedbackType) => void
}

const FeedbackContext = createContext< FeedbackContextType | undefined  >(undefined);


export const  FeedbackProvider = ({children}:FeedbackProviderType) => {
  const [feedback, setFeedback] = useState([
    {
      id:'1',
      text:'This item is from context',
      rating: 10
    },
    {
      id:'2',
      text:'This item is from context 2',
      rating: 9
    },
    {
      id:'3',
      text:'This item is from context 3',
      rating: 8
    }
  ])

  const [feedBackEdit, setFeedbackEdit] = useState({
    item :{},
    edit : false
  })

  const updateFeedback = (id:string, updItem: FeedbackType) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item) )
  } 


  const editFeedback = (item:FeedbackType) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const deleteFeedback = (id:string)=> {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter(feedback => feedback.id !== id))
    }
  }

  const addFeedback =(newFeedback:FeedbackType)=> {
    setFeedback([newFeedback,...feedback])
    console.log(newFeedback);
  }
  
  return <FeedbackContext.Provider value={{
    feedback, deleteFeedback, addFeedback, editFeedback, feedBackEdit, updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext