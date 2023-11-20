import { Ticket } from "./ticket";

export const Card = ({ keyName, tickets, groupingOption }) => {
  return (
    <div key={keyName} className="card">
      {groupingOption === "priority" ? (
        <h3> {keyName}</h3>
      ) : groupingOption === "user" ? (
        // <h3>{keyName.split("-")[0]}</h3>
        <h3>{keyName}</h3>
      ) : (
        <h3>{keyName}</h3>
      )}
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};

// const getPriorityLabel = (priority) => {
//   const priorityLabels = {
//     0: 'No Priority',
//     1: 'Low',
//     2: 'Medium',
//     3: 'High',
//     4: 'Urgent',
//   };
//   return priorityLabels[priority];
// };
