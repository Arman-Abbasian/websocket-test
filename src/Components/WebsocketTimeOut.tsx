import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { toast } from 'react-toastify';


const PaymentForm: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number| null>(null); // Initial time left is 5 seconds
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const[showErrorPage,setShowErrorPage]=useState<boolean>(false)
let intervalId=useRef(null)
  useEffect(() => {
    // Establish WebSocket connection when component mounts
    const ws = new WebSocket('wss://echo.websocket.org');
    setSocket(ws);

    return () => {
      // Close WebSocket connection when component unmounts
      ws.close();
    };
  }, []);

  useEffect(()=>{
    if (timeLeft === 0) {
      setShowErrorPage(true);
    }
},[timeLeft]);

  // Clear interval if response received within 30 seconds
  useEffect(() => {
    if (socket) {
      socket.onmessage = () => {
        setLoading(false); // Hide loading page
        // Update UI with success message or further actions
        console.log('Payment successful.');
      };
      socket.onerror = () => {
        clearInterval(intervalId)
      setLoading(false)
      toast.error("error occured")
      };
    }
  }, [socket]);

  const handlePayment = () => {
    setLoading(true);
     // Set the initial timer value (in seconds)
     setTimeLeft(5);

     // Start the timer by setting up a setInterval
      intervalId = setInterval(() => {
      
      setTimeLeft((prevTimer) => {
        if (prevTimer as number > 0) {
          return prevTimer as number - 1;
        } else {
          clearInterval(intervalId); // Stop the timer when it reaches 0
          setShowErrorPage(true); // Set error state
          setLoading(false)
          return 0; // Ensure the timer value doesn't go below zero
        }
      });
    }, 1000);
      // Format payment data
    const paymentData = {
      amount: paymentAmount,
      // Add more payment details as needed
    };
    // Send payment data through WebSocket
    //if this 2(socket.readyState ,WebSocket.OPEN) be equl to each other that mean the server respond successfully 
    if (socket && socket.readyState === WebSocket.OPEN) {
        console.log(socket,socket.readyState ,WebSocket.OPEN)
        clearInterval(intervalId)
        setLoading(false)
        toast.success("paid successfully")
      socket.send(JSON.stringify(paymentData));
    }
 
     // Cleanup function to clear the interval when component unmounts or timer reaches 0
     return () => clearInterval(intervalId);
   
  };
  

  
if(loading) return <div>
<div>Loading...</div>
<div>Time left: {timeLeft} seconds</div>
</div>

if(showErrorPage===true) return <ErrorPage />

return <div>
<input
  type="number"
  value={paymentAmount}
  onChange={(e: ChangeEvent<HTMLInputElement>) =>
    setPaymentAmount(e.target.value)
  }
/>
<button onClick={handlePayment}>Make Payment</button>
</div>
  
};

export default PaymentForm;



const ErrorPage=()=>{
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:0,left:0}}>
    <button>back</button>
    <button>resend</button>
    </div>
};