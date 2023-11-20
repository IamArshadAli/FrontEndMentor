/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import Notification from "./Notification";
import { DATA } from "../../../utils/2-junior/4-notifications-page/data";

const NotificationsPage = () => {
  const [notificationData, setNotificationData] = useState([...DATA]);

  const getUnRead = useCallback(() => {
    const unRead = notificationData.filter(
      (notification) => !notification.isRead
    );
    return unRead;
  }, [notificationData]);

  const [unReadNotifications, setUnReadNotifications] = useState(
    getUnRead().length
  );

  const handleNotificationStatus = () => {
    const unReadNotif = getUnRead();
    if (unReadNotif.length === 0) return;

    const updatedData = notificationData.map((item) => {
      if (!item.isRead) {
        return { ...item, isRead: true };
      }
      return item;
    });

    setNotificationData(updatedData);
  };

  useEffect(() => {
    setUnReadNotifications(getUnRead().length);
  }, [getUnRead]);

  return (
    <main className="w-screen min-h-screen grid md:place-content-center bg-VeryLightGrayishBlue font-PlusJakartaSans">
      <div className="container max-w-[39rem] rounded-xl shadow-sm px-4 md:px-6 pt-6 bg-White md:my-16">
        {/* Heading */}
        <header className="flex justify-between">
          <div className="flex space-x-3 items-end">
            <h3 className="text-2xl font-bold">Notifications</h3>
            <span className="bg-Blue24 text-white font-semibold px-[0.80rem] py-[0.15rem] rounded-lg">
              {unReadNotifications}
            </span>
          </div>
          <button
            className="text-DarkGrayishBlue24 hover:text-Blue24"
            onClick={() => handleNotificationStatus()}
          >
            Mark all as read
          </button>
        </header>
        {/* Notifications */}
        <section className="flex flex-col gap-3 mt-4">
          {notificationData.map((data, index) => (
            <Notification
              key={index}
              isRead={data.isRead}
              avatar={data.avatar}
              name={data.name}
              activity={data.activity}
              post={data.post}
              isGroup={data.isGroup}
              duration={data.duration}
              textContent={data.textContent}
              imageContent={data.imageContent}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default NotificationsPage;
