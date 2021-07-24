import React from 'react'
import './ChatHeader.css'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>Test Channel Name
                </h3>
            </div>

            <div className="chatHeader_right">
                <NotificationsNoneOutlinedIcon />
                <PeopleAltOutlinedIcon />
                <EditLocationOutlinedIcon />

                <div className="chatHeader_search">
                    <input placeholder="Search" />
                    <SearchOutlinedIcon />
                </div>

                <SendOutlinedIcon />
                <HelpOutlineOutlinedIcon />
            </div>

        </div>
    )
}

export default ChatHeader
