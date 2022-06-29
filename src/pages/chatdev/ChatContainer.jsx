import React from "react";

function ChatContainer(props) {
    return (
        <div className="w-full  h-screen ">
            <div className="h-screen flex flex-col  m-4 mx-8 border rounded-lg shadow-lg chat-window">
                {/* <div className="flex h-full"> ChatContainer</div> */}
                {props.children}
            </div>
        </div>
    );
}

export default ChatContainer;
