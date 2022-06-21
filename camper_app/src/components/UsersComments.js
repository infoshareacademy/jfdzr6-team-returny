import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { db } from "../firebase";
import { updateDoc, doc, deleteField } from "firebase/firestore";
import uuid from "react-uuid";
import { getCommentsByCapmerId } from "../api/comments/getCommentsByCamperId";
import { addNewCommentsGroup } from "../api/comments/addNewCommentsGroup";
import { addNewComment } from "../api/comments/addNewComment";

export function UsersComments({ camperData }) {
  const [isVisibleAddCommentForm, setisVisibleAddCommentForm] = useState(true);
  const [comments, setComments] = useState();

  const context = useContext(UserContext);
    
  useEffect(() => {
    getCommentsByCapmerId(camperData.id)
      .then((allcomments) => {
        if (allcomments.startComments) {
          setComments(allcomments);
        } else {
          addNewCommentsGroup(camperData.id);
        }
      })
      .catch((er) => {
        console.log("brak komentarzy");
        console.log(er);
      });
  }, []);

  function handleSubmitComment(e) {
    e.preventDefault();
    const newcomment = e.target.contentcom.value;
    const docData = {
      [uuid()]: {
        comment: newcomment,
        autor: context.userData.name,
      },
    };

    addNewComment(docData, camperData.id).then(res=>{
      getCommentsByCapmerId(camperData.id).then((allcomments) => {
        setComments(allcomments);
      }).catch(er=>{console.log(er)});
    });
    setisVisibleAddCommentForm(true);
  }

 
  function deleteComment(field, id) {
    const docRef = doc(db, "comments", id);
    updateDoc(docRef, {
      [field]: deleteField(),
    }).then((res) => {
      console.log(res);
      getCommentsByCapmerId(camperData.id).then((allcomments) => {
        setComments(allcomments);
      });
    });
  }

  return (
    <>
      <div style={{ border: "black 1px solid", width: "100%" }}>
        <h3>Komentarze uzytkowników :</h3>

        {comments &&
          Object.keys(comments).map((key, index) => {
            if (typeof comments[key] === "object") {
              
              return (
                <div key={index}>
                  <p>autor:{comments[key].autor}</p>
                  <p>terść:{comments[key].comment}</p>
                  {camperData.userid === context.userData.id ? (
                    <button onClick={() => deleteComment(key, camperData.id)}>
                      Skasuj komentarz
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              );
            }
          })}
          {context.userData && 
        <button onClick={() => setisVisibleAddCommentForm(false)}>
          Dodaj komentarz
        </button>
          }

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
