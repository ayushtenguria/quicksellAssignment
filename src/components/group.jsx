import { Ticket } from "./ticket";

export const Group = ({ keyName, tickets, groupingOption }) => {
  return (
    <div key={keyName}>
      {groupingOption === "priority" ? (
        <h3>Priority: {keyName}</h3>
      ) : (
        <h3>
          User: {keyName.split("-")[0]}, Status: {keyName.split("-")[1]}
        </h3>
      )}
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};
