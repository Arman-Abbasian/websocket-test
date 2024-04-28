import React, { useState } from 'react'

function NativeWebSocketaAPI2() {
    const [bids, setBids] = useState([0]);

    //connecting to bitstamp's WebSocket protocol
    const ws = new WebSocket("wss://ws.bitstamp.net");
  //subscribe to oder_book_v2 channel and specify that I want to see btc/usd exchange rates
    const apiCall = {
      event: "bts:subscribe",
      data: { channel: "order_book_btcusd" },
    };
  
    //send up(apiCall)  to the server on open
    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall));
    };
  //whenever we receive a message from the server
    ws.onmessage = function (event) {
      //parse the data that sent from server
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          console.log(json.data.bids)
          setBids(json.data.bids.slice(0, 5));
        }
      } catch (err) {
        console.log(err);
      }
    };
    //map the first 5 bids
    const firstBids = bids.map((item) => {
      return (
        <div>
          <p key={item}> {item}</p>
        </div>
      );
    });
  
    return <div>{firstBids}</div>;
}

export default NativeWebSocketaAPI2