import React, { useState } from 'react';

const WebsocketTimeOut2: React.FC = () => {
    //manage the timer state
    const [timer, setTimer] = useState(10);
    //save the intervalId 
    const [timerId, setTimerId] = useState<number | null>(null);
    //error or success response from server
    const [response, setResponse] = useState<string | null>(null);

    
    //handle the timer
    const startTimer = () => {
        if (timerId) {
            clearInterval(timerId);
        }
        let timer = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(timerId!);
                    if (!response) {
                        setResponse('timeout');
                    }
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000) as any;
        console.log(timer);
        setTimerId(timer);
        return timer
    };

    const sendRequest = () => {
        const timer = startTimer();
        const ws = new WebSocket('wss://echo.websocket.orgs');
        ws.onopen = () => {
            ws.send('Hello');
        };
        ws.onmessage = (event) => {
            console.log('WebSocket message received:', event.data);
            clearInterval(timer);
            try {
                const responseData = event.data;
                console.log('Parsed response:', responseData);
                if (responseData) {
                    setResponse('success');
                } else {
                    console.log('Error response received');
                    setResponse('error');
                }
            } catch (error) {
                console.error('Error parsing response:', error);
                setResponse('error');
            }
        };
        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            setResponse('error');
        };
    };

if(response === 'timeout') return <div>
    No response received within 10 seconds
    <div>
    <button>back</button>
    <button>reset</button>
    </div>
</div>
    return (
        <div>
            <button onClick={sendRequest}>Send Data</button>
            {timer > 0 && <div>Time remaining: {timer} seconds</div>}
            {response === 'success' && <div>Success!</div>}
            {response === 'error' && <div>Error!</div>}
        </div>
    );
};

export default WebsocketTimeOut2;
