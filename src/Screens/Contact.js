import React from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Contact() {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "DOB" },
    { heading: "Gender" },
    { heading: "Phone" },
    { heading: "Message" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "1-4-2001" },
    { info: "Male" },
    { info: "0320-2332134" },
    {
      info: "View Message",
      type: "message",
      label:
        "Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm",
    },
    { placeholder: "Delete", type: "btn_secondary" },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Contact</div>
        <div className="main__container__header__buttons"></div>
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
