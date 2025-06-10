import React from "react";
import "./ChatInput.scss";

type ChatInputProps = {
    send: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function ChatInput({ send }: ChatInputProps) {
    return (
        <div className="ChatInput">
            <input onKeyDown={send} />
        </div>
    );
}
