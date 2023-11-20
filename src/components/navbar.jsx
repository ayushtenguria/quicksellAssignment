import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

import { Dropdown } from "./dropdown";

export const Navbar = ({
  groupingOption,
  onGroupingOptionChange,
  dropdownOptions,
}) => {
  

  return (
    <nav>
      {/* <div className={isOpen === true ? "" : "hidden"}> */}
        {dropdownOptions && (
          <Dropdown
            value={groupingOption}
            onChange={onGroupingOptionChange}
            options={dropdownOptions}
          />
        )}
      {/* </div> */}
    </nav>
  );
};

// export const Navbar = () => {
//   const [isOpen, setIsopen] = useState(false);

//   const ToggleSidebar = () => {
//     isOpen === true ? setIsopen(false) : setIsopen(true);
//   };

//   const OrderOption = [
//     { label: "Priority", value: "priority" },

//     { label: "Title", value: "title" },
//   ];

//   const GroupOption = [
//     { label: "User", value: "user" },

//     { label: "Priority", value: "priority" },

//     { label: "Status", value: "status" },
//   ];

//   const [value, setValue] = useState("Display");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div className="navDiv bg-white">
//       <div className="butDiv">
//         <div className="display_button bg-white border" onClick={ToggleSidebar}>
//           {" "}
//           <TuneIcon className="icon" />
//           <p className="menu">Display</p>
//           <KeyboardArrowDownIcon className="icon" />{" "}
//         </div>
//       </div>
//       <div className={isOpen === true ? "" : "hidden"}>
//         <div>
//           <div>
//             <p>Grouping</p>
//             <div>
//               <label>
//                 <select value={value} onChange={handleChange}>
//                   {GroupOption.map((GroupOption) => (
//                     <option value={GroupOption.value}>
//                       {GroupOption.label}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//           </div>
//           <div>
//             <p>Ordering</p>
//             <div>
//               <label>
//                 <select value={value} onChange={handleChange}>
//                   {OrderOption.map((OrderOption) => (
//                     <option value={OrderOption.value}>
//                       {OrderOption.label}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
