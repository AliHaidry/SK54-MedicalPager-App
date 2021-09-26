import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookie from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from './components'; 

const apiKey = 'kvkdjchdkwqu';
const client = StreamChat.getInstance(apiKey);

export const App = () => {
    return (
        <div className="app_wrapper">
            <Chat client={client} theme='team light'>
                <ChannelListContainer>
                    <h1>HELLO</h1>
                </ChannelListContainer>
                <ChannelContainer>
                    
                </ChannelContainer>
            </Chat>
        </div>
    )
}

export default App; 
