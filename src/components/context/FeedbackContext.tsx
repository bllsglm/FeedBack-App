import { ReactNode, createContext, useState,useEffect } from "react";


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
  updateFeedback: (id: string, updItem:FeedbackType) => void,
  isLoading : boolean
}

const FeedbackContext = createContext< FeedbackContextType | undefined  >(undefined);


export const  FeedbackProvider = ({children}:FeedbackProviderType) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState<FeedbackType[]>([]);
  const [feedBackEdit, setFeedbackEdit] = useState({
    item :{ text: '', rating: 0, id: '' },
    edit : false
  })

  useEffect(()=>{
    fetchFeedback()
  },[])

  // FETCH Feedback
  const fetchFeedback = async () => {
    const response  = await fetch('api/feedback')
    const  data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }


  const updateFeedback = async (id:string, updItem: FeedbackType) => {
    const response = await fetch(`api/feedback/${id}`,{
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data}: item) )
  } 


  const editFeedback = (item:FeedbackType) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const deleteFeedback = async(id:string)=> {
    if(window.confirm('Are you sure you want to delete?')){
      await fetch(`api/feedback/${id}`, { method: 'DELETE'})
      setFeedback(feedback.filter(feedback => feedback.id !== id))
    }
  }

  const addFeedback = async(newFeedback:FeedbackType)=> {
    const response = await fetch('api/feedback', {
      method: 'POST',
      headers :{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newFeedback)
    })

    const data = await response.json()
    setFeedback([data,...feedback])
  }
  
  return <FeedbackContext.Provider value={{
    feedback, deleteFeedback,isLoading, addFeedback, editFeedback, feedBackEdit, updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext