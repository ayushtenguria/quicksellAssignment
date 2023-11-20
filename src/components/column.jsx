import { useState, useEffect } from "react";
import { db } from "../api/db";
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Dropdown } from "./dropdown";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Column = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [groupingOption, setGroupingOption] = useState("priority");
  const [sortingOption, setSortingOption] = useState("priority");
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await db();
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const groupTickets = (tickets) => {
    switch (groupingOption) {
      case "priority":
        return groupTicketsByPriority(tickets);
      case "user":
        return groupTicketsByUser(tickets);
      case "status":
        return groupTicketsByStatus(tickets);
      default:
        return tickets;
    }
  };

  const groupTicketsByPriority = (tickets) => {
    return tickets.reduce((groupedTickets, ticket) => {
      const { priority } = ticket;
      if (!groupedTickets[priority]) {
        groupedTickets[priority] = [];
      }
      groupedTickets[priority].push(ticket);
      return groupedTickets;
    }, {});
  };

  const groupTicketsByUser = (tickets) => {
    return tickets.reduce((groupedTickets, ticket) => {
      const { userId } = ticket;
      if (!groupedTickets[userId]) {
        groupedTickets[userId] = [];
      }
      groupedTickets[userId].push(ticket);
      return groupedTickets;
    }, {});
  };

  const groupTicketsByStatus = (tickets) => {
    return tickets.reduce((groupedTickets, ticket) => {
      const { status } = ticket;
      if (!groupedTickets[status]) {
        groupedTickets[status] = [];
      }
      groupedTickets[status].push(ticket);
      return groupedTickets;
    }, {});
  };

  const sortTickets = (tickets) => {
    switch (sortingOption) {
      case "none":
        return tickets;
      case "priority":
        return sortTicketsByPriority(tickets);
      case "title":
        return sortTicketsByTitle(tickets);
      default:
        return tickets;
    }
  };

  const sortTicketsByPriority = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const sortTicketsByTitle = (tickets) => {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  };

  const sortingOptions = [
    { value: "priority", label: "Priority" },
    { value: "title", label: "Title" },
  ];

  const dropdownOptions = [
    { value: "priority", label: "Priority" },
    { value: "user", label: "User" },
    { value: "status", label: "Status" },
  ];

  return (
    <div>
      <div className="navDiv">
        {/* <Navbar
          groupingOption={groupingOption}
          onGroupingOptionChange={(e) => setGroupingOption(e.target.value)}
          dropdownOptions={dropdownOptions}
        /> */}
        <div className="butDiv">
          {" "}
          <div
            className="display_button bg-white border"
            onClick={ToggleSidebar}
          >
            <TuneIcon className="icon" />
            <p className="menu">Display</p>
            <KeyboardArrowDownIcon className="icon" />{" "}
          </div>{" "}
        </div>
        <div className={isOpen === true ? "" : "hidden"}>
          <div className="drop2 border dropDown">
            <Dropdown
              heading="Group By"
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
              options={dropdownOptions}
            />
            <Dropdown
              heading="SortBy"
              value={sortingOption}
              onChange={(e) => setSortingOption(e.target.value)}
              options={sortingOptions}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="ticketColumn">
            {Object.entries(groupTickets(sortTickets(data.tickets))).map(
              ([key, tickets]) => (
                <Card
                  key={key}
                  keyName={key}
                  tickets={tickets}
                  groupingOption={groupingOption}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
