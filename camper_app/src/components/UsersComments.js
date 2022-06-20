import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { getCommentsByCapmerId } from "../api/getCommentsByCamperId";
import { db } from "../firebase";
import { updateDoc,doc,deleteField  } from "firebase/firestore";
import uuid from "react-uuid";

export function UsersComments({ camperData }) {
  const [isVisibleAddCommentForm, setisVisibleAddCommentForm] = useState(false);
  const [comments, setComments] = useState();

  const context = useContext(UserContext);

  console.log("id campera:", camperData.id);
  useEffect(() => {
    getCommentsByCapmerId("d3IY7bPvuyt38xZQ5JN3").then((allcomments) => {
      setComments(allcomments);
    });
  }, []);

  console.log(context.userData.name);
  console.log(comments);

  ///////
  function handleSubmitComment (e) {
    e.preventDefault();
    const newcomment = e.target.contentcom.value;
    console.log(newcomment);
    const docData={

        [uuid()]:{

        comment: newcomment,
        autor: context.userData.name
    }
    }
    
    sendEditComment(docData, "d3IY7bPvuyt38xZQ5JN3");
  };

  function sendEditComment(com, id) {
    const docRef = doc(db, "comments", id);
    updateDoc(docRef, com).then(res=>{
        getCommentsByCapmerId("d3IY7bPvuyt38xZQ5JN3").then((allcomments) => {
            setComments(allcomments);
          })
    }

    );
  }

  function deleteComment(field,id){
    const docRef = doc(db, "comments", id);
    updateDoc(docRef,{
        [field]: deleteField()
    }).then(res=>{console.log(res);
        getCommentsByCapmerId("d3IY7bPvuyt38xZQ5JN3").then((allcomments) => {
            setComments(allcomments);
          })
    
    })
}

    // deleteComment("1","d3IY7bPvuyt38xZQ5JN3");

  return (
    <>
      <div style={{ border: "black 1px solid" }}>
        <h3>Komentarze uzytkowników :</h3>
       
        {comments &&
          Object.keys(comments).map((key, index) => {
            if (typeof comments[key] === "object") {
                console.log(key)
              return (
                <div key={index}>
                  <p>autor:{comments[key].autor}</p>
                  <p>terść:{comments[key].comment}</p>
                  <button onClick={()=>deleteComment(key,"d3IY7bPvuyt38xZQ5JN3")}>Skasuj komentarz</button>
                </div>
              );
            }
          })}
        <button onClick={() => setisVisibleAddCommentForm(false)}>
          Dodaj komentarz
        </button>
       
        <form onSubmit={handleSubmitComment} hidden={isVisibleAddCommentForm}>
          <h5>Napisz Komentarz</h5>
          <textarea name="contentcom" />
          <br></br>
          <button type="submit">Wyślij komentarz</button>
          <button onClick={() => setisVisibleAddCommentForm(true)}>
            Zamknij formularz
          </button>
        </form>
      </div>
    </>
  );
}

// export function CommentForm({
//   isVisibleForm,
//   onCreateComment,
//   handleCloseForm,
// }) {
//   const [comment, setComment] = useState();
// const navigate = useNavigate();

// const handleChangeComment = (e) => {
//   setComment(e.target.value);
// };

// const handleSubmitForm = (event) => {
//   console.log(comment);
//   event.preventDefault();
//   onCreateComment({ comment: comment });
//   setComment("");
//   navigate('/blog');

// };
//   return <></>;
// }
