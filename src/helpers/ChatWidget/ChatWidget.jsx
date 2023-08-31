'use client'

import MessengerCustomerChat from 'react-messenger-customer-chat';
import { fb_app_id, fb_page_id, primary_color } from '../settings';


const ChatWidget = () => {
    return (
        <MessengerCustomerChat pageId={fb_page_id} appId={fb_app_id} themeColor={primary_color} />
    );
};

export default ChatWidget;