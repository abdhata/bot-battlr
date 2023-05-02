import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BotCollection.css';

function BotCollection({ setSelectedBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleDeleteBot = (botId) => {
    fetch(`http://localhost:5000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId)))
      .catch((error) => console.error(error));
  };

  const rows = bots.reduce((acc, bot, i) => {
    const rowIndex = Math.floor(i / 3);
    acc[rowIndex] = acc[rowIndex] || [];
    acc[rowIndex].push(bot);
    return acc;
  }, []);

  return (
    <div>
      <div className='title'>
        <h1>Here is your BotCollection</h1>
      </div>
      {rows.map((row, i) => (
        <div key={i} className="row">
          {row.map((bot) => (
            <div key={bot.id} className="product" onClick={() => handleBotClick(bot)}>
              <Link to={`/bot/${bot.id}`}>
                <img src={bot.avatar_url} alt="bot" height="150" width="150" />
                <div className="product_info">
                  <p>{bot.name}</p>
                  <p>{bot.bot_class}</p>
                </div>
                <div className="catch">
                  <p>{bot.catchphrase}</p>
                </div>
              </Link>
              <div className="delete" onClick={() => handleDeleteBot(bot.id)}>
                X
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
