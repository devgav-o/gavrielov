import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, LogOut, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/auth');
      return;
    }
    setCurrentUser(user);

    // Initial messages from localStorage
    const storedMessages = JSON.parse(localStorage.getItem('chat_messages') || '[]');
    setMessages(storedMessages);

    // Initial users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers.filter(u => u.email !== user.email));

    // Listen for storage events for real-time simulation
    const handleStorageChange = (e) => {
      if (e.key === 'chat_messages') {
        setMessages(JSON.parse(e.newValue || '[]'));
      } else if (e.key === 'users') {
        const updatedUsers = JSON.parse(e.newValue || '[]');
        setUsers(updatedUsers.filter(u => u.email !== user.email));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      sender: currentUser.name,
      senderEmail: currentUser.email,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem('chat_messages', JSON.stringify(updatedMessages));
    setNewMessage('');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast.success('Logged out successfully');
    navigate('/auth');
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!currentUser) return null;

  return (
    <div className="flex h-screen bg-[#f6f5e8] overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r flex flex-col hidden md:flex">
        <div className="p-4 border-b bg-[#fffef2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-gold">
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{currentUser.name}</p>
              <p className="text-xs text-secondary">Online</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
            <LogOut className="h-5 w-5 text-secondary hover:text-red-500" />
          </Button>
        </div>

        <div className="p-4 bg-[#fffef2]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
            <Input
              placeholder="Search users..."
              className="pl-10 bg-white border-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              Contacts
            </p>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 hover:bg-[#f6f5e8] rounded-lg cursor-pointer transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{user.name}</p>
                    <p className="text-xs text-secondary truncate">{user.email}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="px-3 py-4 text-sm text-center text-secondary">No other users found</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#fffef2]">
        {/* Chat Header */}
        <div className="h-16 border-b flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-3 md:hidden">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="font-semibold">{currentUser.name}</p>
          </div>
          <h2 className="text-lg font-bold text-primary hidden md:block">General Chat</h2>
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="icon" className="md:hidden" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
             </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6" ref={scrollRef}>
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderEmail === currentUser.email ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] flex flex-col ${msg.senderEmail === currentUser.email ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="text-xs font-semibold text-secondary">{msg.sender}</span>
                      <span className="text-[10px] text-light">{msg.timestamp}</span>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-sm ${
                        msg.senderEmail === currentUser.email
                          ? 'bg-gold text-black rounded-tr-none'
                          : 'bg-white border text-primary rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-20 opacity-40">
                <div className="bg-secondary p-4 rounded-full mb-4">
                   <User className="h-12 w-12 text-primary" />
                </div>
                <p className="text-lg font-medium">Start the conversation</p>
                <p className="text-sm">Messages will appear here in real-time</p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <form
            onSubmit={handleSendMessage}
            className="max-w-4xl mx-auto flex items-center gap-3"
          >
            <Input
              placeholder="Type your message..."
              className="flex-1 bg-[#f6f5e8] border-none focus-visible:ring-gold h-12 rounded-full px-6"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              className="h-12 w-12 rounded-full bg-gold hover:bg-gold/90 text-black flex-shrink-0"
              disabled={!newMessage.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
