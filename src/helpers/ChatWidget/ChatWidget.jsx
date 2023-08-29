'use client'

import MessengerCustomerChat from 'react-messenger-customer-chat';


const ChatWidget = () => {
    return (
        <MessengerCustomerChat pageId={fb_page_id} appId={fb_app_id} themeColor={theme_color} />
    );
};

export default ChatWidget;