import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Milestones({ setIsAddMilestone, setIsEditMilestone }) {
  const tableHeadingRow = [
    { heading: "Title" },
    { heading: "Value" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Arranged Meetings" },
    { info: "56" },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditMilestone,
    },
    {
      placeholder: "Delete",
      type: "btn_primary",
      onClick: () => {},
    },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Milestones</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Milestone"
            className="primary__button"
            onClick={() => {
              setIsAddMilestone(true);
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
