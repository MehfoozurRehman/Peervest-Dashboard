import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Investor({ setIsAddInvestor, setIsEditInvestor }) {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Type" },
    { heading: "Startup Stage" },
    { heading: "Ticket Size" },
    { heading: "Industry" },
    { heading: "Business model" },
    { heading: "Plan" },
    { heading: "" },
    { heading: "" },
    // { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Fahad" },
    { info: "abc123@gmail.com" },
    { info: "New Entrant" },
    { info: "Seed" },
    { info: "<$2341" },
    { info: "Fintech" },
    { info: "B2B" },
    { info: "<5 Year" },
    { placeholder: "Edit", type: "btn_secondary", onClick: setIsEditInvestor },
    { placeholder: "Delete", type: "btn_primary", onClick: () => {} },
    // { placeholder: "Delete", type: "btn_primary", path: "/dashboard" },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Investor</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Investor"
            className="primary__button"
            onClick={() => {
              setIsAddInvestor(true);
            }}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
        </div>
      </div>
    </div>
  );
}
