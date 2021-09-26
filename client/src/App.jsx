import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookie from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./components";
import "./App.css";

const apiKey = "kvkdjchdkwqu";
const client = StreamChat.getInstance(apiKey);

export const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
