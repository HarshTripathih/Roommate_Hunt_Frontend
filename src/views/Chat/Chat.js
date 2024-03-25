import React, { useState } from 'react'
import AuthPage from '../../components/chatAuth/AuthPage';
import ChatsPage from '../../components/chatAuth/ChatsPage';

function Chat() {
    const [user, setUser] = useState(undefined);
  
    if (!user) {
      return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
      return <ChatsPage user={user} />;
    }
  }
  
  export default Chat;