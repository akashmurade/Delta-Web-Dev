export default function Comment({ comment }) {
  return (
    <tr>
      <td>{comment.remarks}</td>
      <td>{comment.rating}</td>
      <td>{comment.username}</td>
    </tr>
  );
}
