import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
const paymentData={id:"1",payment:40000,date:Date.now().toLocaleString()}
const WebsocketTimeOut2: React.FC = () => {
    //manage the timer state
    const [timer, setTimer] = useState(10);
    //save the intervalId 
    const [timerId, setTimerId] = useState<number | null>(null);
    //error or success response from server
    const [response, setResponse] = useState<string | null>(null);
    //retry number when the server send error
    const [retry,setRetry]=useState(0);
    const [loading,setLoading]=useState(false);

    console.log("re render")
    //handle the timer
    const startTimer = () => {
        //when the previous timerId remained in the timerId state, remove it
        if (timerId) {
            clearInterval(timerId);
        };
        let timer = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(timerId!);
                    if (!response) {
                        setResponse('timeout');
                        setLoading(false)
                    }
                    return 0;
                }
                console.log(prevTimer)
                return prevTimer - 1;
            });
        }, 1000) as any;
        setTimerId(timer);
        return timer
    };
useEffect(()=>{
    if(retry>0 && retry<=3+1){
        sendRequest()
    }
},[retry]);

    const sendRequest = () => {
        setLoading(true);
        if(retry<=3){
            const timer = startTimer();
            const ws = new WebSocket('wss://echo.websocket.org');
        //when the websocket is open and ready
        ws.onopen = () => {
            //send the data to websocket server
                ws.send(JSON.stringify(paymentData));
        };
        //when the server send a message to us
        ws.onmessage = (event) => {
            setLoading(false);
            clearInterval(timer);
            const responseData = event.data;
            const parsedData=JSON.parse(responseData);
            console.log('WebSocket message received:', parsedData);
                console.log('Parsed response:', parsedData);
                setRetry(3+2)
                if (responseData) {
                    setResponse('success');
                    setLoading(false)
                } else {
                    console.log('Error response received');
                    setResponse('error');
                    setLoading(false)
                }
        };
        //when the our requeest send to a wrong server
        ws.onerror = (error) => {
            setLoading(false);
            clearInterval(timer);
            console.error('WebSocket errorrrrr:', error);
            console.log({retry})
            if(retry<=3){
                console.log({retry})
                setRetry((prev)=>prev+1);
            }
            }
        }else{
            setResponse('error');
            setLoading(false)
        }
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
            
            {timer > 0 && response==null && <button onClick={sendRequest}>pay</button>}
            {loading&&<Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
  />}
            {response === 'success' && <div style={{color:"green"}}>paid Successfully!</div>}
            {response === 'error' && <div style={{color:"red"}}>Error with payment!</div>}
        </div>
    );
};

export default WebsocketTimeOut2;
