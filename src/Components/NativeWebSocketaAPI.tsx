import React, { useEffect } from 'react';

const NativeWebSocketaAPI: React.FC = () => {
  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.orgs');
    console.log({socket})

    socket.onopen = (e) => {
      console.log('WebSocket connection established',e);
      // Send a test message to the server
      socket.send('Hello');
    };

    socket.onmessage = (event) => {
       // server send a message to the client
      console.log('Received message from server:', event.data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (e) => {
      console.log('WebSocket connection closed',e);
    };
    return () => {
      // Clean up
      socket.close();
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default NativeWebSocketaAPI;