import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Startup() {
  const tableHeadingRow = [
    { heading: "Question" },
    { heading: "Answer" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    {
      info: "My vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-ups?",
    },
    {
      info: "View Message",
      type: "message",
      label:
        "My vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-upsMy vision is to imtroduce crowdfunding as a safe and viable fundeaising option for Pakistan's start-ups fundeaising option Pakistan's start-ups",
    },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      path: "/",
    },
    {
      placeholder: "Delete",
      type: "btn_primary",
      path: "/",
    },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">FAQ</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Question"
            className="primary__button"
            path="/"
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
