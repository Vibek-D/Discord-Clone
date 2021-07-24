import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat_messages">

            </div>
            <div className="chat_input">
                <AddCircleOutlinedIcon fontSize="large"/>
                <form>
                    <input placeholder="Message #TestChannel" type="text" />
                    <button type="submit" className="chat_inputButton">Send Message</button>
                </form>

                <div className="chat_inputIcons">
                    <CardGiftcardOutlinedIcon fontSize="large"/>
                    <GifOutlinedIcon fontSize="large"/>
                    <EmojiEmotionsOutlinedIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
