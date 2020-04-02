import React from "react";

import chatIcon from "../../icons/chat.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>Obecni:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img className="chatIcon" alt="Online Icon" src={chatIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
