import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Avatar } from '@material-ui/core';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div  className="sidebar_top">
                    <h2>Demo Server</h2>
                    <ExpandMoreIcon />
                </div>

                <div className="sidebar_channels">
                    <div className="sidebar_channelsHeader">
                        <div className="sidebar_header">
                            <ExpandMoreIcon />
                            <h4>Text Channels</h4>
                        </div>
                        <AddIcon className="sidebar_addChannel"></AddIcon>
                    </div>

                    <div className="sidebar_channelsList">
                        <SidebarChannel />
                    </div>
                </div>

                <div className="sidebar_voice">
                        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
                        <div className="sidebar_voiceInfo">
                            <h3>Voice Connected</h3>
                            <p>Stream</p>
                        </div>

                        <div className="sidebar_voiceIcons">
                            <InfoOutlinedIcon />
                            <CallOutlinedIcon />
                        </div>
                    </div>

                    <div className="sidebar_profile">
                        <Avatar />
                        <div className="sidebar_profileInfo">
                            <h3>Viki Dutta</h3>
                            <p>This is my ID</p>
                        </div>

                        <div className="sidebar_profileIcons">
                            <MicNoneOutlinedIcon />
                            <HeadsetOutlinedIcon />
                            <SettingsOutlinedIcon />
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
