import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconsContainer>
                    <ChatIcon />
                    <MoreVertIcon />
                </IconsContainer>
            </Header>
        </Container>
    )    
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)`
    margin: 10px;
`;

const IconsContainer = styled.div`

`;