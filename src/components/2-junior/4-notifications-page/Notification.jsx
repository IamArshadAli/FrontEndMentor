/* eslint-disable react/prop-types */

const Notification = ({
  isRead,
  avatar,
  name,
  activity,
  post,
  isGroup,
  duration,
  textContent,
  imageContent,
}) => {
  return (
    <div
      className={`flex gap-3 rounded-lg p-4 relative ${
        !isRead ? "bg-LightGrayishBlue1" : "bg-none"
      }`}
    >
      <img src={avatar} alt={name} className="rounded-full w-10 h-10" />
      <div className="text-sm">
        <p>
          {/* Name */}
          <span className="font-bold cursor-pointer hover:text-Blue24">
            {name}
          </span>{" "}
          {/* Activity */}
          <span className="text-DarkGrayishBlue24">{activity}</span>{" "}
          {/* Post */}
          <span
            className={`font-semibold cursor-pointer hover:text-Blue24 ${
              isGroup ? "text-Blue24" : "text-DarkGrayishBlue24"
            }`}
          >
            {post}
          </span>{" "}
          {/* UnRead Mark */}
          {!isRead && (
            <span className="inline-block rounded-full p-1 bg-Red24 ml-1"></span>
          )}
        </p>
        {/* Post Duration */}
        <p className="text-DarkGrayishBlue24">{duration}</p>
        {/* Message */}
        {textContent && (
          <div className="cursor-pointer p-4 mt-2 text-DarkGrayishBlue24 border rounded-lg hover:bg-LightGrayishBlue2 hover:text-VeryDarkBlue24">
            {textContent}
          </div>
        )}
      </div>
      {imageContent && (
        <img
          src={imageContent}
          alt="Image"
          className="cursor-pointer w-10 h-10 md:absolute md:right-4 hover:outline hover:outline-LightGrayishBlue1 hover:rounded-md"
        />
      )}
    </div>
  );
};

export default Notification;
