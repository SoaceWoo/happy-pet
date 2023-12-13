import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.flexContainer}>
      <span className={`${classes.logo} ${classes.flex}`}>
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
        <h4 className={classes.logoContent}>Happy Pet</h4>
      </span>
      <div className={classes.content}>
        <ul className={classes.flex}>
          <li className={classes.li}>
            <a href="№">Главное</a>
          </li>
          <li className={classes.li}>
            <a href="№">Друзья</a>
          </li>
          <li className={classes.li}>
            <a href="№">О сепвисе</a>
          </li>
          <li className={classes.li}>
            <a href="№">Конкакты</a>
          </li>

          <span className={`${classes.logo} ${classes.flex}`}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Order panel icon">
                <circle id="Ellipse 1" cx="17" cy="17" r="17" fill="black" />
                <path
                  id="Vector"
                  d="M14.6033 24C14.273 24 13.9904 23.8728 13.7553 23.6184C13.5199 23.3636 13.4022 23.0575 13.4022 22.7C13.4022 22.3425 13.5199 22.0363 13.7553 21.7815C13.9904 21.5272 14.273 21.4 14.6033 21.4C14.9336 21.4 15.2163 21.5272 15.4513 21.7815C15.6867 22.0363 15.8044 22.3425 15.8044 22.7C15.8044 23.0575 15.6867 23.3636 15.4513 23.6184C15.2163 23.8728 14.9336 24 14.6033 24ZM20.6089 24C20.2786 24 19.9959 23.8728 19.7609 23.6184C19.5255 23.3636 19.4078 23.0575 19.4078 22.7C19.4078 22.3425 19.5255 22.0363 19.7609 21.7815C19.9959 21.5272 20.2786 21.4 20.6089 21.4C20.9392 21.4 21.222 21.5272 21.4575 21.7815C21.6925 22.0363 21.81 22.3425 21.81 22.7C21.81 23.0575 21.6925 23.3636 21.4575 23.6184C21.222 23.8728 20.9392 24 20.6089 24ZM14.0929 13.6L15.5342 16.85H19.7381L21.3896 13.6H14.0929ZM13.5223 12.3H22.3805C22.6107 12.3 22.7859 12.4109 22.906 12.6328C23.0261 12.8551 23.0311 13.08 22.921 13.3075L20.789 17.4675C20.6789 17.6842 20.5312 17.8521 20.3458 17.9713C20.1609 18.0904 19.9583 18.15 19.7381 18.15H15.2639L14.6033 19.45H21.81V20.75H14.6033C14.1529 20.75 13.8126 20.5359 13.5824 20.1078C13.3522 19.6801 13.3422 19.255 13.5524 18.8325L14.3631 17.24L12.2011 12.3H11V11H12.9518L13.5223 12.3Z"
                  fill="white"
                />
              </g>
            </svg>
            <div className={classes.logoContent}>9 999 р.</div>
          </span>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
