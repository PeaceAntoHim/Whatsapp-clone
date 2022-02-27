import Message from './Messages';
import { useState } from 'react';
import { auth, db } from '../firebase';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useCollection } from 'react-firebase-hooks/firestore';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function ChatScreen({ chat, messages }) {
   const [input, setInput] = useState("");
   const [user] = useAuthState(auth);
   const router = useRouter();
   const [messagesSnapshot] = useCollection(
      db
         .collection("chat")
         .doc(router.query.id)
         .collection("messages")
         .orderBy("timestamp", "asc")
   );

   // This anonymous function is to get email when you put in prompt
   const showMessages = () => {
      if (messagesSnapshot) {
         return messagesSnapshot.docs.map((message) => (
            <Message 
               key={message.id}
               user={message.data().user}
               message={{ 
                  ...message.data(),
                  timestamp: message.data().timestamp?.toDate().getTime(),
                }}
            />
         ));
      }
   };

   // This anonymous function is to send message.data()
   const sendMessage = () => {
      
   }




   return (
      <Container>
         <Header>
            <Avatar />

            <HeaderInformation>
               <h3>Rec Email</h3>
               <p>Last seen ...</p>
            </HeaderInformation>
            <HeaderIcons>
               <IconButton>
                  <AttachFileIcon />
               </IconButton>
               <IconButton>
                  <MoreVertIcon />
               </IconButton>
            </HeaderIcons>
         </Header>

         <MessageContainer>
            {/* Show Messages */}
            {showMessages()}
            <EndOfMessage />
         </MessageContainer>

         <InputContainer>
            <InsertEmoticonIcon />
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <button 
               hidden 
               disabled={!input} 
               type="submit" 
               onClick={sendMessage}
            >
               Send Message
            </button>
            <MicIcon />
         </InputContainer>
      </Container>
   )
}

export default ChatScreen;

const Container = styled.div``;

const Input = styled.input`
   flex: 1;
   outline: none;
   border: none;
   border-radius: 10px;
   background-color: whitesmoke;
   align-items: center;
   padding: 20px;
   margin-left: 15px;
   margin-right: 15px
`;

const InputContainer = styled.form`
   display: flex;
   align-items: center;
   padding: 10px;
   position: sticky;
   bottom: 0;
   background-color: white;
   z-index: 100;
`;

const Header = styled.div`
   position: sticky;
   background-color: white;
   z-index: 100;
   top: 0;
   display: flex;
   padding: 11px;
   align-items: center;
   border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
   margin-left: 15px;
   flex: 1;

   > h3 {
      margin-bottom: 3px;
   }

   > p {
      font-size: 14px;
      color: gray;
   }
`;

const HeaderIcons = styled.div``;

const EndOfMessage = styled.div``;

const MessageContainer = styled.div`
   padding: 30px;
   background-color: #e5ded8;
   min-height: 90vh;
`;
