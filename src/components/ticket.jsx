export const Ticket = ({ id, title, tag, userId, status, priority }) => (
  <div>
    <div className="ticket border dropDown">
      <p className="text">{id}</p>
      <p className="ticketTitle">{title}</p>
      {/* <p>{userId}</p> */}
      {/* <p> {status}</p> */}
      <div className="ticketBottom">
        <p>{priority}</p>
        <p>{tag.join(", ")}</p>
      </div>
    </div>
  </div>
);
