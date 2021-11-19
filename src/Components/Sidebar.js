import React from "react";
import { useNavigate } from "react-router-dom";

function NavLink({ title, svg, path, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container__content__entry">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name="sidebar__container__content__entry__input"
        id="sidebar__container__content__entry__input"
        className="sidebar__container__content__entry__input"
        onChange={() => {
          navigate(path);
        }}
      />
      <div className="nav__bar__content__link__content">
        <div className="nav__bar__content__link__content__svg__wrapper">
          {svg}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container">
      <div className="sidebar__container__content">
        <NavLink
          title="Dashboard"
          path="/Dashboard"
          defaultChecked
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.3"
              height="22.3"
              viewBox="0 0 30.3 22.3"
            >
              <g id="dashboard" transform="translate(0.15 0.15)">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="0.3"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="0.3"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="0.3"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="0.3"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Investor"
          path="/Dashboard/investor"
          svg={
            <svg
              id="Group_1013"
              data-name="Group 1013"
              xmlns="http://www.w3.org/2000/svg"
              width="16.931"
              height="21.288"
              viewBox="0 0 16.931 21.288"
            >
              <path
                id="Path_12022"
                data-name="Path 12022"
                d="M-113.6,194.109c0,.831,0,1.662,0,2.493,0,.14-.025.191-.177.185-.311-.013-.623-.008-.935,0-.1,0-.142-.02-.141-.135q.006-2.524,0-5.049c0-.1.018-.145.134-.142.325.009.651.009.976,0,.13,0,.141.049.141.157C-113.6,192.447-113.6,193.278-113.6,194.109Z"
                transform="translate(118.602 -175.502)"
                fill="#fff"
              />
              <path
                id="Path_12023"
                data-name="Path 12023"
                d="M-96.579,194.117c0-.824,0-1.648,0-2.472,0-.14.026-.192.177-.186.311.012.623.008.934,0,.111,0,.156.019.155.144q-.007,2.513,0,5.027c0,.139-.051.156-.168.153-.311-.007-.623-.011-.934,0-.149.006-.165-.053-.164-.177C-96.577,195.778-96.579,194.947-96.579,194.117Z"
                transform="translate(108.506 -175.501)"
                fill="#fff"
              />
              <path
                id="Path_12024"
                data-name="Path 12024"
                d="M-106.312,171.14a4.784,4.784,0,0,0-.1-1.094,5.183,5.183,0,0,0-4.07-4.135c-.237-.059-.485-.049-.741-.124.071-.064.121-.111.172-.156a5.527,5.527,0,0,0,1.866-3.5,5.378,5.378,0,0,0-.584-3.293,5.582,5.582,0,0,0-3.5-2.847c-.309-.091-.632-.1-.937-.2h-1.164c-.021.05-.067.038-.106.043a5.348,5.348,0,0,0-2.066.688,5.517,5.517,0,0,0-2.786,4.01,5.474,5.474,0,0,0,.9,4.061,5.725,5.725,0,0,0,1.1,1.2.514.514,0,0,1-.069.027,1.293,1.293,0,0,1-.143.025,4.882,4.882,0,0,0-2.452.914,4.963,4.963,0,0,0-2.215,4c-.062,2.055-.017,4.114-.022,6.171,0,.124.042.147.153.144.3-.007.6-.016.893,0,.183.011.208-.054.208-.218q-.009-2.867,0-5.735a3.954,3.954,0,0,1,1.309-3.025,4.157,4.157,0,0,1,3.095-1.047c.108,0,.14.074.186.138.385.532.765,1.068,1.154,1.6a.36.36,0,0,1,.067.309q-.513,2.566-1.025,5.133a.307.307,0,0,0,.1.325q1.1,1.016,2.178,2.05c.111.106.166.108.278,0,.619-.595,1.226-1.205,1.881-1.759a.9.9,0,0,0,.324-1.025c-.343-1.57-.634-3.151-.95-4.726a.364.364,0,0,1,.072-.321c.33-.444.672-.882.963-1.351a.737.737,0,0,1,.756-.376,4.053,4.053,0,0,1,2.995,1.341,4,4,0,0,1,1.022,2.791c0,1.9,0,3.809,0,5.714,0,.145.035.188.181.182.291-.012.582-.015.873,0,.173.009.215-.04.214-.213C-106.315,174.95-106.312,173.045-106.312,171.14Zm-7.478,2.934q-.453.413-.892.839c-.072.07-.108.071-.179,0-.3-.289-.6-.576-.909-.852-.1-.085-.071-.172-.053-.261.168-.859.339-1.718.509-2.576.107-.541.215-1.081.319-1.622.026-.133.058-.246.229-.194.127-.027.177.011.2.149.277,1.427.564,2.853.85,4.279A.225.225,0,0,1-113.79,174.074Zm-.534-6.036a.222.222,0,0,1-.206.1c-.606.013-.606.015-.963-.482l-.433-.6h2.306C-113.867,167.4-114.1,167.715-114.324,168.038Zm-.3-2.247a4.382,4.382,0,0,1-4.519-4.124,4.368,4.368,0,0,1,4.219-4.628,4.365,4.365,0,0,1,4.5,3.913A4.38,4.38,0,0,1-114.623,165.792Z"
                transform="translate(123.239 -155.782)"
                fill="#fff"
              />
              <path
                id="Path_12025"
                data-name="Path 12025"
                d="M-106.66,161.372c.166,0,.333.006.5,0,.11,0,.146.035.142.143-.006.187,0,.374,0,.561-.005.122.024.182.157.214a4.67,4.67,0,0,1,.848.323c.1.046.115.086.061.184-.147.265-.286.534-.421.806-.051.1-.095.118-.2.061a2.416,2.416,0,0,0-1.049-.35,1.149,1.149,0,0,0-.166,0,.237.237,0,0,0-.236.168c-.031.122.042.195.14.247a8.292,8.292,0,0,0,.951.34,2.469,2.469,0,0,1,.81.443,1.4,1.4,0,0,1-.539,2.226c-.355.128-.353.133-.353.524,0,.457,0,.457-.465.457-.215,0-.429-.006-.644,0-.115,0-.159-.027-.153-.149.009-.208,0-.416,0-.624,0-.1-.029-.135-.131-.158a4.405,4.405,0,0,1-1.028-.369c-.1-.049-.131-.084-.071-.2.153-.285.295-.576.428-.872.053-.119.1-.1.2-.053a2.786,2.786,0,0,0,1.321.432,1.438,1.438,0,0,0,.187-.006.214.214,0,0,0,.2-.149.2.2,0,0,0-.115-.223,2.819,2.819,0,0,0-.676-.249,3.654,3.654,0,0,1-.854-.361,1.215,1.215,0,0,1-.487-1.456,1.41,1.41,0,0,1,.853-.95.234.234,0,0,0,.173-.271c-.012-.179.006-.361-.005-.54-.008-.133.042-.168.166-.16C-106.965,161.379-106.813,161.372-106.66,161.372Z"
                transform="translate(115.113 -158.87)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Startup"
          path="/Dashboard/startup"
          svg={
            <svg
              id="Group_1014"
              data-name="Group 1014"
              xmlns="http://www.w3.org/2000/svg"
              width="21.775"
              height="21.771"
              viewBox="0 0 21.775 21.771"
            >
              <path
                id="Path_12026"
                data-name="Path 12026"
                d="M-199.006,200.012c-.452-.25-.589-.594-.381-.959a.74.74,0,0,1,.115-.15q1.981-1.985,3.965-3.966a.645.645,0,0,1,.74-.149.636.636,0,0,1,.365.658.609.609,0,0,1-.189.392q-1.989,1.991-3.979,3.982a2.379,2.379,0,0,1-.3.193Z"
                transform="translate(199.482 -178.241)"
                fill="#fff"
              />
              <path
                id="Path_12027"
                data-name="Path 12027"
                d="M-190.448,202.373c-.007-.056-.062-.051-.1-.069a.633.633,0,0,1-.172-1.045q1.024-1.035,2.059-2.059a.641.641,0,0,1,.913-.014.638.638,0,0,1,0,.914c-.249.262-.509.513-.765.768-.36.36-.724.718-1.081,1.083a1.7,1.7,0,0,1-.56.422Z"
                transform="translate(194.75 -180.602)"
                fill="#fff"
              />
              <path
                id="Path_12028"
                data-name="Path 12028"
                d="M-150.865,161.859a.533.533,0,0,1,0-.467Z"
                transform="translate(172.641 -159.814)"
                fill="#fff"
              />
              <path
                id="Path_12029"
                data-name="Path 12029"
                d="M-150.856,165.619l-.017.007h-.019a.84.84,0,0,1,.036-.431Z"
                transform="translate(172.631 -161.916)"
                fill="#fff"
              />
              <path
                id="Path_12030"
                data-name="Path 12030"
                d="M-196.091,191.1a.611.611,0,0,1-.185.458c-.69.691-1.378,1.383-2.071,2.069a.635.635,0,0,1-.911.014.627.627,0,0,1,0-.911q1.035-1.051,2.085-2.085a.6.6,0,0,1,.7-.129A.6.6,0,0,1-196.091,191.1Z"
                transform="translate(199.467 -175.879)"
                fill="#fff"
              />
              <path
                id="Path_12031"
                data-name="Path 12031"
                d="M-177.7,159.4c-.087-.049-.044-.14-.061-.208a1.724,1.724,0,0,0-1.715-1.313,18.174,18.174,0,0,0-4.327.334,14.2,14.2,0,0,0-5.144,2.076,17.382,17.382,0,0,0-3.555,3.2c-.066.078-.117.158-.248.167-.882.061-1.763.175-2.645.194a2.055,2.055,0,0,0-1.933,1.135,1.255,1.255,0,0,1-.069.107c-.623.943-1.252,1.882-1.867,2.83a1.163,1.163,0,0,0,.675,1.79c.2.051.4.07.606.1.677.1,1.354.207,2.031.313.08.013.164.016.138.151a1.691,1.691,0,0,0,.55,1.589c.585.577,1.163,1.161,1.744,1.742q.931.931,1.863,1.862a1.652,1.652,0,0,0,1.539.513c.166-.031.153.084.166.17q.18,1.161.352,2.325a1.32,1.32,0,0,0,.506.942c.131.1.291.128.424.215h.51a1.887,1.887,0,0,0,.38-.115c1.146-.757,2.3-1.5,3.429-2.284a1.643,1.643,0,0,0,.669-1.14c.033-.2.03-.409.05-.613.08-.816.127-1.634.2-2.45a.464.464,0,0,1,.17-.344,19.432,19.432,0,0,0,1.888-1.859,13.867,13.867,0,0,0,2.7-4.436,14.223,14.223,0,0,0,.95-4.848,1.524,1.524,0,0,1,.022-.406V159.91a1.056,1.056,0,0,1,0-.467Zm-17.752,9.346c-.033.11-.073.153-.188.135-.814-.131-1.629-.258-2.464-.389.293-.445.577-.875.861-1.3.39-.589.782-1.177,1.168-1.769a.5.5,0,0,1,.414-.25c.656-.046,1.311-.1,2.009-.159a16.551,16.551,0,0,0-.957,1.642A13.29,13.29,0,0,0-195.448,168.746Zm5.451,5.916c-.1.022-.209.034-.313.055a.419.419,0,0,1-.406-.125l-3.711-3.71a.394.394,0,0,1-.128-.345,9.944,9.944,0,0,1,.483-1.863l5.566,5.568A10.029,10.029,0,0,1-190,174.662Zm5.115-.2c-.038.473-.081.945-.118,1.417a.417.417,0,0,1-.2.333l-3.076,2.034a.177.177,0,0,1-.05.011q-.192-1.224-.383-2.447c-.013-.079-.017-.14.094-.174a14.5,14.5,0,0,0,3.726-1.776s.013,0,.04,0C-184.857,174.058-184.867,174.258-184.883,174.457Zm4.383-7.224a14.529,14.529,0,0,1-3.452,4.288,14.751,14.751,0,0,1-3.056,2.087.211.211,0,0,1-.3-.038q-3.036-3.049-6.081-6.088c-.068-.068-.144-.115-.075-.244a15.314,15.314,0,0,1,6.48-6.6,13.175,13.175,0,0,1,4.432-1.331,15.347,15.347,0,0,1,3.112-.132.406.406,0,0,1,.439.435c.029.347.033.693.03,1.04A15.028,15.028,0,0,1-180.5,167.234Z"
                transform="translate(199.472 -157.865)"
                fill="#fff"
              />
              <path
                id="Path_12032"
                data-name="Path 12032"
                d="M-170.058,166.061a3.192,3.192,0,0,0-3.2,3.19,3.176,3.176,0,0,0,3.19,3.192,3.188,3.188,0,0,0,3.2-3.172A3.2,3.2,0,0,0-170.058,166.061Zm.157,5.416a2.054,2.054,0,0,1-2.071-2.065,2.055,2.055,0,0,1,2.054-2.06,2.063,2.063,0,0,1,2.075,2.066A2.061,2.061,0,0,1-169.9,171.477Z"
                transform="translate(184.987 -162.395)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="FAQ"
          path="/Dashboard/faq"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.768"
              height="21.771"
              viewBox="0 0 21.768 21.771"
            >
              <g
                id="Group_1009"
                data-name="Group 1009"
                transform="translate(0)"
              >
                <path
                  id="Path_12013"
                  data-name="Path 12013"
                  d="M-387.568,170.072a10.3,10.3,0,0,0-.976-3.193,10.836,10.836,0,0,0-2.976-3.739,10.769,10.769,0,0,0-3.773-1.976,8.871,8.871,0,0,0-2.273-.388,19.155,19.155,0,0,0-2.013.017,10.032,10.032,0,0,0-3.593,1.025,10.826,10.826,0,0,0-3.723,2.963,10.769,10.769,0,0,0-1.98,3.771,8.81,8.81,0,0,0-.391,2.293c-.015.686-.03,1.372.023,2.055a9.543,9.543,0,0,0,.543,2.394,10.806,10.806,0,0,0,2.562,4.083,10.572,10.572,0,0,0,1.991,1.579,11.043,11.043,0,0,0,3.842,1.472c.355.065.715.052,1.07.1h1.614c.271-.041.548-.018.819-.054a10.321,10.321,0,0,0,2.036-.5,10.746,10.746,0,0,0,4.634-3.144,10.815,10.815,0,0,0,2.524-5.3c.061-.341.045-.687.1-1.028v-1.657C-387.554,170.591-387.534,170.33-387.568,170.072ZM-398.4,180.826a9.175,9.175,0,0,1-9.156-9.176,9.17,9.17,0,0,1,9.19-9.164,9.182,9.182,0,0,1,9.157,9.176A9.176,9.176,0,0,1-398.4,180.826Z"
                  transform="translate(409.28 -160.757)"
                  fill="#fff"
                />
                <path
                  id="Path_12014"
                  data-name="Path 12014"
                  d="M-392.383,178.271q0-.5,0-1a.834.834,0,0,1,.8-.918,2.306,2.306,0,0,0,.853-.216,1.7,1.7,0,0,0,.844-1.885,1.7,1.7,0,0,0-1.7-1.286,1.69,1.69,0,0,0-1.638,1.692.86.86,0,0,1-.877.847.848.848,0,0,1-.827-.913,3.4,3.4,0,0,1,3.112-3.324A3.407,3.407,0,0,1-388.191,174a3.411,3.411,0,0,1-2.319,3.891c-.141.044-.183.1-.179.245.011.4.007.793,0,1.189a.856.856,0,0,1-.846.854.857.857,0,0,1-.851-.85C-392.386,178.979-392.383,178.625-392.383,178.271Z"
                  transform="translate(402.428 -165.773)"
                  fill="#fff"
                />
                <path
                  id="Path_12015"
                  data-name="Path 12015"
                  d="M-390.46,190.6a1.074,1.074,0,0,1,1.066-1.065,1.074,1.074,0,0,1,1.058,1.073,1.074,1.074,0,0,1-1.066,1.065A1.073,1.073,0,0,1-390.46,190.6Z"
                  transform="translate(400.292 -174.499)"
                  fill="#fff"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Milestones"
          path="/Dashboard/milestones"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.457"
              height="20.618"
              viewBox="0 0 23.457 20.618"
            >
              <g
                id="Group_1010"
                data-name="Group 1010"
                transform="translate(0)"
              >
                <path
                  id="Path_12016"
                  data-name="Path 12016"
                  d="M-454.346,179.66h3.433c3.35,0,6.7.007,10.05,0a3.331,3.331,0,0,0,2.6-1.245,2.951,2.951,0,0,0,.756-1.8V175.7a.27.27,0,0,1-.04-.076,3.42,3.42,0,0,0-3.412-2.9h-13.533c-2.06,0-4.121,0-6.182-.005-.216,0-.311.03-.287.275a4.838,4.838,0,0,1,0,.824c-.015.219.034.287.275.287q8.369-.013,16.738-.007h.265a3.478,3.478,0,0,0-.7,2.073,3.518,3.518,0,0,0,.692,2.048h-.285q-6.8,0-13.6,0a3.447,3.447,0,0,0-3.377,3.1,3.442,3.442,0,0,0,3.451,3.764h13.816a3.493,3.493,0,0,0-.7,2.077,3.546,3.546,0,0,0,.69,2.045c-3.9,0-7.758,0-11.62,0-.146,0-.153-.059-.152-.174,0-.778,0-1.557,0-2.335v-.247l-5.5,3.441,5.5,3.439c0-.859.009-1.683-.006-2.5,0-.22.067-.251.263-.251q7.145.008,14.288,0a3.431,3.431,0,0,0,3.268-2.457c.05-.172.093-.346.139-.52v-.916a5.642,5.642,0,0,0-.106-.649,3.5,3.5,0,0,0-3.34-2.4h-13.369a.462.462,0,0,1-.29-.042,3.723,3.723,0,0,0,.6-1.937,3.8,3.8,0,0,0-.6-1.968A.506.506,0,0,1-454.346,179.66Zm12.714-4.064c0-.1.027-.131.128-.129.374.006.748.005,1.121,0,.1,0,.133.027.129.128-.008.191,0,.381,0,.572s-.005.366,0,.549c0,.1-.027.131-.128.129q-.561-.009-1.122,0c-.1,0-.13-.027-.129-.128C-441.626,176.344-441.627,175.97-441.632,175.6Zm.035,10.91c.127-.144.429-.038.655-.044s.514-.08.641.031c.146.127.022.429.036.654s.086.517-.023.641c-.126.144-.428.038-.654.044s-.515.081-.641-.03c-.143-.127-.038-.429-.044-.655S-441.708,186.632-441.6,186.507Zm-15.269-4.213c-.128.146-.43.022-.655.036s-.517.086-.641-.023c-.143-.126-.038-.428-.044-.654s-.08-.516.03-.641c.127-.143.429-.038.655-.044s.516-.08.641.03c.143.127.038.429.044.655S-456.756,182.167-456.867,182.293Z"
                  transform="translate(460.965 -172.717)"
                  fill="#fff"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Client"
          path="/Dashboard/client"
          svg={
            <svg
              id="Group_1012"
              data-name="Group 1012"
              xmlns="http://www.w3.org/2000/svg"
              width="24.74"
              height="21.549"
              viewBox="0 0 24.74 21.549"
            >
              <path
                id="Path_12018"
                data-name="Path 12018"
                d="M-248.886,183.02a3.274,3.274,0,0,0-2.683-3.122,10.44,10.44,0,0,0-1.711-.044,3.19,3.19,0,0,0-2.873,1.674c-.1.165-.134.2-.285.046a5.721,5.721,0,0,0-3.433-1.682,17.874,17.874,0,0,0-2-.04,5.722,5.722,0,0,0-4.221,1.743c-.119.118-.155.124-.242-.032a3.2,3.2,0,0,0-2.372-1.672,10.614,10.614,0,0,0-1.663-.038,3.252,3.252,0,0,0-3.108,2.3c-.051.165-.1.333-.143.5v6.04c.015.017.037.03.043.049a1.406,1.406,0,0,0,1.453,1.062c1.385,0,2.77,0,4.154,0,.146,0,.2.038.231.185a1.671,1.671,0,0,0,1.733,1.365h9.541a1.658,1.658,0,0,0,1.7-1.347c.038-.17.1-.2.266-.2q2.09.011,4.179,0a1.452,1.452,0,0,0,1.441-1.444Q-248.882,185.689-248.886,183.02Zm-18.624.924a6.146,6.146,0,0,0-.274,2.139c0,.692,0,1.384.01,2.076,0,.155-.036.2-.2.2q-2-.01-4.008,0c-.182,0-.2-.063-.2-.219.007-.845,0-1.69,0-2.535,0-.8,0-1.593,0-2.39a1.83,1.83,0,0,1,1.91-1.912,7.88,7.88,0,0,1,1.348.035,1.81,1.81,0,0,1,1.523,1.734A2.225,2.225,0,0,1-267.51,183.944Zm11.328,5.616c0,.263-.088.339-.377.34h-9.368c-.334,0-.4-.069-.4-.415q0-1.847,0-3.694a4.333,4.333,0,0,1,3.693-4.413,7.12,7.12,0,0,1,3.6.211,4.373,4.373,0,0,1,2.85,4.036C-256.167,186.937-256.18,188.248-256.182,189.56Zm5.652-1.2q-2.015-.007-4.03,0c-.166,0-.175-.065-.174-.2q.006-1.292,0-2.582a6.4,6.4,0,0,0-.29-1.749,1.861,1.861,0,0,1,1.591-2.517,6.6,6.6,0,0,1,1.564.024,1.8,1.8,0,0,1,1.532,1.8c.009.828,0,1.658,0,2.486,0,.845,0,1.69,0,2.534C-250.329,188.313-250.372,188.356-250.53,188.356Z"
                transform="translate(273.623 -169.8)"
                fill="#fff"
              />
              <path
                id="Path_12019"
                data-name="Path 12019"
                d="M-254.646,161.723a4.2,4.2,0,0,0-4.242,4.177,4.194,4.194,0,0,0,4.19,4.23,4.2,4.2,0,0,0,4.217-4.154A4.2,4.2,0,0,0-254.646,161.723Zm-.022,6.957a2.781,2.781,0,0,1-2.77-2.756,2.779,2.779,0,0,1,2.75-2.752,2.78,2.78,0,0,1,2.758,2.743A2.78,2.78,0,0,1-254.668,168.68Z"
                transform="translate(267.053 -161.723)"
                fill="#fff"
              />
              <path
                id="Path_12020"
                data-name="Path 12020"
                d="M-268.758,167.3a2.652,2.652,0,0,0-2.685,2.635,2.652,2.652,0,0,0,2.641,2.68,2.653,2.653,0,0,0,2.673-2.623A2.651,2.651,0,0,0-268.758,167.3Zm-.023,3.865a1.23,1.23,0,0,1-1.213-1.214,1.231,1.231,0,0,1,1.2-1.2,1.229,1.229,0,0,1,1.213,1.214A1.232,1.232,0,0,1-268.78,171.168Z"
                transform="translate(272.651 -164.211)"
                fill="#fff"
              />
              <path
                id="Path_12021"
                data-name="Path 12021"
                d="M-238.092,167.3a2.652,2.652,0,0,0-2.66,2.636,2.652,2.652,0,0,0,2.642,2.679,2.65,2.65,0,0,0,2.673-2.649A2.65,2.65,0,0,0-238.092,167.3Zm-.014,3.865a1.232,1.232,0,0,1-1.2-1.206,1.23,1.23,0,0,1,1.219-1.209,1.23,1.23,0,0,1,1.2,1.206A1.229,1.229,0,0,1-238.105,171.168Z"
                transform="translate(258.967 -164.211)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Contact"
          path="/Dashboard/contact"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <div className="sidebar__container__content__bottom__line"></div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="sidebar__container__content__logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.81"
            height="28.805"
            viewBox="0 0 29.81 28.805"
          >
            <g id="loguot" transform="translate(29.81 28.805) rotate(180)">
              <path
                id="Path_31"
                data-name="Path 31"
                d="M0,7.479H13.665l-3.457,3.127,1.677,1.854,6.89-6.23L11.885,0,10.208,1.854l3.457,3.126H0Z"
                transform="translate(0 8.173)"
                fill="#3a3a3a"
              />
              <path
                id="Path_32"
                data-name="Path 32"
                d="M24.313,0H0V6.1H2.5V2.5H21.813V26.3H2.5v-3.66H0V28.8H24.313Z"
                transform="translate(5.496)"
                fill="#3a3a3a"
              />
            </g>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
