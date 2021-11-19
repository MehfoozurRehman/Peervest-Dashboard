import React from "react";

export default function InputBox({ type, placeholder }) {
  return (
    <div className="login__container__content__form__input">
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}
