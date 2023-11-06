import { qrCodeImg } from "../../../assets/images/1-newbie/7-qr-code";

const QRCode = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-LightGrey">
      <div className="max-w-xs flex flex-col gap-6 p-4 rounded-xl shadow-xl shadow-GrayishBlue bg-White font-Outfit">
        <img src={qrCodeImg} alt="QR Code" className="rounded-xl" />
        <div className="flex flex-col gap-4 text-center p-2 mb-2">
            <div className="text-lg font-extrabold text-DarkBlue17">
                Improve your front-end skills by building projects 
            </div>
            <div className="text-GrayishBlue">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
