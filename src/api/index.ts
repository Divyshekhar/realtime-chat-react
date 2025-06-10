var socket = new WebSocket("ws://localhost:8080/ws");
let connect = (cb: (msg: { body: string; type: number }) => void) => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    console.log("connecting");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = (msg) => {
        try {
            const parsed = JSON.parse(msg.data); // 👈 Parse the JSON string
            console.log("Message received: ", parsed);
            cb(parsed); // 👈 Call the callback with parsed object
        } catch (error) {
            console.error("Error parsing message:", error);
        }
    };

    socket.onclose = (event) => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = (error) => {
        console.log("Socket Error: ", error);
    };
};

let sendMsg = (msg: string) => {
    const message = {
        type: 1,
        body: msg
    }
    socket.send(message.body);
};

export { connect, sendMsg };