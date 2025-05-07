import { useState } from "react";
import Comment from "./Comment";
import Form from "./Form";
import "./AllComments.css";

export default function AllComments() {
  let [comments, setComments] = useState([]);

  let addComment = (comment) => {
    setComments([...comments, comment]);
  };
  return (
    <div className="all-comments">
      <h4>All Comments</h4>
      <table>
        <thead>
          <tr>
            <th>Remarks</th>
            <th>Rating</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, idx) => (
            <Comment comment={comment} key={idx} />
          ))}
        </tbody>
      </table>
      <Form addComment={addComment} />
    </div>
  );
}
