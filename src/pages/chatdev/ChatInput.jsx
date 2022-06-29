import React from "react";

function ChatInput({ message, setMessage, sendMessage, socket }) {
    return (
        <>
            <div className="border-t mb-auto   chat-input">
                <div className="grid   grid-cols-9 gap-2 p-4 ">
                    <input
                        type="text"
                        name="message"
                        value={message}
                        placeholder="Type your message..."
                        className="border rounded-lg p-2 px-4 col-span-8"
                        onChange={({ currentTarget: input }) => {
                            setMessage(input.value);
                            socket.emit("typing", () => {
                                console.log(
                                    "socket emit typing from chat input"
                                );
                            });
                        }}
                        onKeyPress={(e) =>
                            e.code === "Enter" ? sendMessage() : null
                        }
                    />

                    <button
                        className=" bg-indigo-500 text-white rounded-lg"
                        onClick={() => sendMessage()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChatInput;
