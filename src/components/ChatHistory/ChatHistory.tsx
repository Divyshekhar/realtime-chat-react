import './chathistory.scss'

type ChatMessage = {
    type: number;
    body: string;
};

type ChatHistoryProps = {
    chatHistory: ChatMessage[];
};

export default function ChatHistory({ chatHistory }: ChatHistoryProps) {
    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {chatHistory.map((msg, index) => (
                <p key={index}>
                    {msg.type === 1 ? <>{msg.body}</>  : <></>}
                </p>
            ))}
        </div>
    );
}
