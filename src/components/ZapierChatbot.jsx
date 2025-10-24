import { useEffect } from "react";

const ZapierChatbot = () => {
  useEffect(() => {
    // Load Zapier Interfaces chatbot script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="zapier-chatbot-container">
      {/*
        Replace 'your-chatbot-id' with your actual Zapier chatbot ID
        You can get this from your Zapier Interfaces chatbot embed code
        Example: <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="YOUR_CHATBOT_ID"></zapier-interfaces-chatbot-embed>
      */}
      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmh594ag7000dgtd99p7kam3k"
        height="600px"
        width="400px"
      ></zapier-interfaces-chatbot-embed>
    </div>
  );
};

export default ZapierChatbot;
