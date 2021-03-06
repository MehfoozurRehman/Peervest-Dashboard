import React from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function Login() {
  return (
    <div className="login__container">
      <div className="login__container__content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="202.265"
          height="53.088"
          viewBox="0 0 202.265 53.088"
        >
          <g
            id="Group_489"
            data-name="Group 489"
            transform="translate(1422.524 -1010.94)"
          >
            <text
              id="PEERVEST"
              transform="translate(-1352.259 1037.94)"
              fill="#0a264e"
              font-size="28"
              font-family="CenturyGothic, Century Gothic"
            >
              <tspan x="0" y="0">
                PEERVEST
              </tspan>
            </text>
            <text
              id="GLOBAL"
              transform="translate(-1352.726 1056.94)"
              fill="#0a264e"
              font-size="16"
              font-family="CenturyGothic, Century Gothic"
            >
              <tspan x="0" y="0">
                GLOBAL
              </tspan>
            </text>
            <g
              id="Group_3"
              data-name="Group 3"
              transform="translate(-1422.524 1012.081)"
            >
              <g id="Group_2" data-name="Group 2">
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(0 0.014)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M-1393.558,1025.96a1.2,1.2,0,0,0,1.035-1.8c-1.4-2.437-2.68-4.667-4.013-6.864a1.817,1.817,0,0,0-1.333-.707c-7.946-.038-15.891-.021-23.837-.009a4.424,4.424,0,0,0-.818.23l29.485,51.091a1.2,1.2,0,0,0,2.073,0c1.423-2.449,2.783-4.775,4.044-7.153.212-.4-.228-1.261-.542-1.809q-8.959-15.6-17.963-31.184l-.009-.016a1.2,1.2,0,0,1,1.04-1.786Z"
                    transform="translate(1422.524 -1016.57)"
                    fill="#d39844"
                  />
                </g>
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M-1351.485,1018.248a1.128,1.128,0,0,0-.972-1.69c-2.939-.01-5.647-.029-8.35.068-.451.016-.97.835-1.289,1.382-3.558,6.108-7.081,12.236-10.618,18.355l-.008.014a1.124,1.124,0,0,1-1.936,0c-.988-1.662-1.944-3.252-2.79-4.9a3.036,3.036,0,0,0-3.276-1.977c-2.16.136-4.332.087-6.681.06a1.128,1.128,0,0,0-.986,1.691l13.728,23.778a1.127,1.127,0,0,0,1.951,0Z"
                  transform="translate(1411.714 -1016.55)"
                  fill="#0a264e"
                />
              </g>
            </g>
          </g>
        </svg>
        <form className="login__container__content__form">
          <InputBox type="email" placeholder="Email" />
          <InputBox type="password" placeholder="Password" />
          <div className="login__container__content__form__checkbox">
            <input
              className="styled-checkbox"
              id="styled-checkbox"
              type="checkbox"
              value="Remember"
              name="Remember"
            />
            <label
              style={{ color: "#1c0a15", fontSize: 13 }}
              htmlFor="styled-checkbox"
            >
              Remember Me
            </label>
          </div>
          <Button
            path="/dashboard"
            placeholder="Login"
            className="primary__button"
          />
        </form>
      </div>
    </div>
  );
}
