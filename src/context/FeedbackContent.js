import {v4 as uuidv4} from 'uuid';
import { createContext , useState} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // Add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        setFeedback([ newFeedback,...feedback]);
    }
  
    // Delete feedback
    const deleteFeedback = (id ) => {
        if (window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !== id))      
        }
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }    

    return <FeedbackContext.Provider 
        value={{
            feedback, 
            deleteFeedback, 
            addFeedback, 
            editFeedback
        }}>
        {children}
    </FeedbackContext.Provider> 
}

export default FeedbackContext