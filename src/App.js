import React, { useState } from "react";
import "./App.css";

const App = () => 
{
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);
  const [user1Input, setUser1Input] = useState("");
  const [user2Input, setUser2Input] = useState("");

  const handleSendUser1 = () => 
  {
    if (user1Input.trim()) 
    {
      setUser1Messages([...user1Messages, { text: user1Input, sent: true }]);
      setUser2Messages([...user2Messages, { text: user1Input, sent: false }]);
      setUser1Input("");
    }
  };

  const handleSendUser2 = () => 
  {
    if (user2Input.trim()) 
    {
      setUser2Messages([...user2Messages, { text: user2Input, sent: true }]);
      setUser1Messages([...user1Messages, { text: user2Input, sent: false }]);
      setUser2Input("");
    }
  };



  return (

    <div className="chat-container">


      <div className="chat-interface user1">
        <div className="chat-header">User 1</div>
        <div className="chat-messages">
          {user1Messages.map((msg, index) => (<div key={index} className={`message ${msg.sent ? "sent" : "received"}`}>{msg.text}</div>))}</div>

        <div className="chat-input fixed-input">

          <input type="text" value={user1Input} onChange={(e) => setUser1Input(e.target.value)} placeholder="Type a message..."/>

          <button onClick={handleSendUser1}>Send</button>

        </div>
      </div>



      <div className="chat-interface user2">
        <div className="chat-header">User 2</div>
        <div className="chat-messages">
          {user2Messages.map((msg, index) => (<div key={index} className={`message ${msg.sent ? "sent" : "received"}`}>{msg.text}</div>))}</div>

        <div className="chat-input fixed-input">

          <input type="text" value={user2Input} onChange={(e) => setUser2Input(e.target.value)} placeholder="Type a message..."/>

          <button onClick={handleSendUser2}>Send</button>

        </div>
      </div>


    </div>
  );
};

export default App;