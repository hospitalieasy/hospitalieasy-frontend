import "..//..//Utilities/Style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const AppBar = (props) => {
    const { log, setLog, setProfileIndex, setMenuIndex, setProfileIndexCloser, name } = props;

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {name} Welcome!</Title>
                <SpeedDialWrapper>
                    <BasicSpeedDial setProfileIndexCloser={setProfileIndexCloser} setMenuIndex={setMenuIndex} />
                </SpeedDialWrapper>
            </LeftSide>
            <RightSide>
                <ContentWrapper>
                    <NotificationWrapper>
                        <NotificationPop />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu log={log} setLog={setLog} setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;