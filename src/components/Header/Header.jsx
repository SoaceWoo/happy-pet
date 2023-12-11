import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className={classes.flex}>
          <svg
            width="50"
            height="58"
            viewBox="0 0 50 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logo inner">
              <path
                id="Rectangle 3"
                d="M0.104156 10.1031C0.0468066 4.54024 4.54047 0 10.1036 0H40C45.5228 0 50 4.47715 50 10V40C50 45.5228 45.5228 50 40 50H23.4272C21.9173 50 20.5138 50.7778 19.7136 52.0583C17.9984 54.8026 14.0016 54.8026 12.2864 52.0583L12.1257 51.8011C11.4119 50.659 10.2306 49.8901 8.89745 49.6996L7.31105 49.473C3.39299 48.9133 0.469874 45.5778 0.429074 41.6202L0.104156 10.1031Z"
                fill="black"
              />
              <path
                id="Vector"
                d="M24.0669 13.2635C25.4828 13.428 26.5181 15.3363 26.3711 17.5473C26.2272 19.7465 24.9775 21.4092 23.5584 21.2565C22.1509 21.1069 21.1041 19.1955 21.2396 16.9815C21.3719 14.7792 22.6447 13.1227 24.0669 13.2635ZM32.3208 15.4752C33.6345 16.0674 33.897 18.1352 32.9335 20.1148C31.9322 22.0969 30.0815 23.2319 28.7763 22.6546C27.4594 22.0742 27.2085 20.0094 28.195 18.036C29.1732 16.0477 31.0239 14.9127 32.3208 15.4752ZM16.4371 17.0347C17.9079 16.8094 19.4159 18.3386 19.8611 20.4175C20.239 22.5163 19.4142 24.394 17.9549 24.6225C16.4956 24.8509 14.9959 23.3366 14.5802 21.2403C14.1645 19.144 15.0155 17.2607 16.4371 17.0347ZM37.216 22.6025C38.3341 23.5089 38.1295 25.5654 36.7214 27.173C35.3132 28.7805 33.2573 29.3422 32.1077 28.4147C30.9581 27.4872 31.1826 25.4487 32.5593 23.82C33.9843 22.2422 36.0549 21.6718 37.216 22.6025ZM31.881 34.8017C31.6301 35.9229 30.4702 36.9269 29.3542 37.1209C27.0287 37.5345 25.1187 34.8735 22.8214 34.2579C20.5242 33.6424 17.4944 35.0683 15.744 33.4741C14.7444 32.5868 14.3588 30.8399 14.8502 29.6062C15.5289 27.9043 17.8482 27.5143 19.4163 26.5565C21.4897 25.3294 23.4816 22.5128 25.8019 23.1346C28.1107 23.7532 28.5094 27.1598 29.6096 29.2877C30.5053 31.0701 32.3154 32.8573 31.881 34.8017Z"
                fill="#FFD54E"
              />
            </g>
          </svg>
          <h4>Happy Pet</h4>
          <div className={classes.content}>
            <ul>
              <li>
                <a href="№">Главное</a>
              </li>
              <li>
                <a href="№">Друзья</a>
              </li>{" "}
              <li>
                <a href="№">О сепвисе</a>
              </li>{" "}
              <li>
                <a href="№">Конкакты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
