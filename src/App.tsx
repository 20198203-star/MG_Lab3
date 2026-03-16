import { useState, useRef, FormEvent, ChangeEvent } from "react";
import "./App.css";

interface FeedbackData {
name: string;
studentID: string;
bookTitle: string;
author: string;
requestReason: string;
}

function App() {

// Controlled Form State
const [name, setName] = useState<string>("");
const [studentID, setStudentID] = useState<string>("");
const [bookTitle, setBookTitle] = useState<string>("");
const [author, setAuthor] = useState<string>("");
const [requestReason, setRequestReason] = useState<string>("");

const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);

// Uncontrolled Form Refs
const nameRef = useRef<HTMLInputElement>(null);
const studentIDRef = useRef<HTMLInputElement>(null);
const bookTitleRef = useRef<HTMLInputElement>(null);
const authorRef = useRef<HTMLInputElement>(null);
const requestReasonRef = useRef<HTMLTextAreaElement>(null);

// Controlled Submit
const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => { 
  e.preventDefault();

const data: FeedbackData = {
name,
studentID,
bookTitle,
author,
requestReason
};

setSubmittedData(data);

setName("");
setStudentID("");
setBookTitle("");
setAuthor("");
setRequestReason("");
};

// Uncontrolled Submit
const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

if (nameRef.current && studentIDRef.current && bookTitleRef.current && authorRef.current && requestReasonRef.current) {

  const data: FeedbackData = {
    name: nameRef.current.value,
    studentID: studentIDRef.current.value,
    bookTitle: bookTitleRef.current.value,
    author: authorRef.current.value,
    requestReason: requestReasonRef.current.value

  };

    console.log("Uncontrolled Form Data:", data);

    alert("Check the console for submitted data.");
  }
};

return (
  <div>
    <h1>STUDENT BOOK REQUEST FORM</h1>
    {/* Controlled Form */}
    <h2>Controlled Form</h2>
    
    <form onSubmit={handleControlledSubmit}>
    <div>
      <label>Name:</label><br/>
      <input
      type="text"
      value={name}
      onChange={(e: ChangeEvent <HTMLInputElement>) =>
        setName(e.target.value)
      }
      />
    </div>
    <br/>
    
    <div>
      <label>StudentID:</label><br/>
      <input
      type="text"
      value={studentID}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setStudentID(e.target.value)
      }
      />
    </div>
    <br/>
    
    <div>
      <label>Book Title:</label><br/>
      <input
      type="text"
      value={bookTitle}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setBookTitle(e.target.value)
        }
        />
    </div>
    <br/>

    <div>
      <label>Author:</label><br/>
      <input
      type="text"
      value={author}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setAuthor(e.target.value)
        }
        />
    </div>
    <br/>
    
    <div>
      <label>Reason for Request:</label><br/>
      <textarea
      value={requestReason}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setAuthor(e.target.value)
        }
        />
    </div>
    <br/>
      
      <button type="submit">
        Submit
      </button>
      
    </form>
    {/* Display Controlled Data */}
    {submittedData && (
    <div style={{ marginTop: "20px" }}>
      <h3>Submitted Feedback</h3>
      <p><strong>Name:</strong> {submittedData.name}</p>
      <p><strong>Student ID:</strong> {submittedData.studentID}</p>
      <p><strong>Book Title:</strong> {submittedData.bookTitle}</p>
      <p><strong>Author:</strong> {submittedData.author}</p>
      <p><strong>Reason for Request:</strong> {submittedData.requestReason}</p>
      </div>
      )}
      <hr/>
      
      {/* Uncontrolled Form */}
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleUncontrolledSubmit}>
        <div>
          <label>Name:</label><br/>
          <input type="text" ref={nameRef}/>
        </div>
        <br/>
        
        <div>
          <label>Student ID:</label><br/>
          <input type="text" ref={studentIDRef}/>
        </div>
        <br/>

        <div>
          <label>Book Title:</label><br/>
          <input type="text" ref={bookTitleRef}/>
        </div>
        <br/>

        <div>
          <label>Author:</label><br/>
          <input type="text" ref={authorRef}/>
        </div>
        <br/>

        <div>
          <label>Reason for Request:</label><br/>
          <textarea ref={requestReasonRef}/>
        </div>
        <br/>


          <button type="submit">
            Submit
          </button>
          </form>
        </div>
  );
}
export default App;