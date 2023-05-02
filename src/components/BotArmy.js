import React, { useState } from 'react';
import "./BotArmy.css"

function BotArmy({ selectedBot }) {
  const [message, setMessage] = useState("");
  const [showDetails, setShowDetails] = useState(true);

  const handleDetailsClick = () => {
    setShowDetails(false);
    setMessage("Bot has been release.");
  }

  return (
    <>
      {showDetails && (
        <div className="BotDetails-container" onClick={handleDetailsClick}>
          <h1 className="BotDetails-header">Your Bot Army</h1>
          {selectedBot && (
            <div className="BotDetails-content">
              <img src={selectedBot.avatar_url} alt="bolt image" height="150" width="150" className="BotDetails-image" />
              <div className="BotDetails-info">
                <p>{selectedBot.name}</p>
                <p>{selectedBot.bot_class}</p>
                <p>{selectedBot.catchphrase}</p>
                <p>{selectedBot.health}</p>
              </div>
            </div>
          )}
        </div>
      )}
      {!showDetails && (
        <div className="BotDetails-container">
          <h1 className="BotDetails-header">Your Bot Army</h1>
          <p className="BotDetails-message">{message}</p>
        </div>
      )}
    </>
  );
}

export default BotArmy;
