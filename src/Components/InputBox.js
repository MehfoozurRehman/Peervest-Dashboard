import React from "react";

export default function InputBox({ type, placeholder, variant, title }) {
  if (variant === "textbox") {
    return (
      <div className="table__details__container__text__box">
        {title}
        <textarea
          cols="30"
          rows="6"
          placeholder="Design"
          className="table__details__container__text__box__input"
        />
      </div>
    );
  } else
    return (
      <div className="login__container__content__form__input">
        <input type={type} placeholder={placeholder} required />
      </div>
    );
}
