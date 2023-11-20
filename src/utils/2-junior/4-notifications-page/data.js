import {
  angelaGrayAvatar,
  annaKimAvatar,
  jacobThompsonAvatar,
  kimberlySmithAvatar,
  markWebberAvatar,
  nathanPetersonAvatar,
  rizkyHasnuddinAvatar,
  chessImage,
} from "../../../assets/images/2-junior/4-notifications-page";

const DATA = [
  {
    avatar: markWebberAvatar,
    name: "Mark Webber",
    activity: "reacted to your recent post",
    post: "My first tournament today!",
    duration: "1m ago",
    isRead: false,
  },
  {
    avatar: angelaGrayAvatar,
    name: "Angela Gray",
    activity: "followed you",
    duration: "5m ago",
    isRead: false,
  },
  {
    avatar: jacobThompsonAvatar,
    name: "Jacob Thompson",
    activity: "has joined your group",
    post: "Chess Club",
    isGroup: true,
    duration: "1 day ago",
    isRead: false,
  },
  {
    avatar: rizkyHasnuddinAvatar,
    name: "Rizky Hasanuddin",
    activity: "sent you a private message",
    duration: "5 days ago",
    isRead: true,
    textContent:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    avatar: kimberlySmithAvatar,
    name: "Kimberly Smith",
    activity: "commented on your picture",
    duration: "1 week ago",
    isRead: true,
    imageContent: chessImage,
  },
  {
    avatar: nathanPetersonAvatar,
    name: "Nathan Peterson",
    activity: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    duration: "2 weeks ago",
    isRead: true,
  },
  {
    avatar: annaKimAvatar,
    name: "Anna Kim",
    activity: "left the group",
    post: "Chess Club",
    isGroup: true,
    duration: "2 weeks ago",
    isRead: true,
  },
];

export { DATA };
