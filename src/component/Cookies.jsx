import { useState } from "react";

function Cookies({ setShowCookies }) {
  const [showCookie, setShowCookie] = useState(true);

  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`;
    },
  };
  const storageType = cookieStorage;
  const consentPropertyName = "jdc_consent";
  setShowCookies(!storageType.getItem(consentPropertyName));
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  const acceptHandler = () => {
    saveToStorage();
    setShowCookie(false);
  };

  return (
    <div className={showCookie ? "cookies grid grid-2--cols" : "hidden"}>
      <div className="cookies-desc">
        <p className="cookies-heading">Cookie Notice</p>
        <p className="cookies-text">
          Musimorph uses cookies to improve user experience and site
          performance, offer advertising tailored to your interests and enable
          social media sharing. Where required by applicable law, we will obtain
          your consent before we place any cookies on your device that are not
          strictly necessary for the functioning of our websites. By clicking
          "Accept All Cookies", you agree to our use of cookies. Learn about our
          cookies and how to modify your preferences in our
          <a href="/" className="cookies-policy">
            Cookie Notice
          </a>
          .
        </p>
      </div>
      <div className="cookies-btns">
        <button className="btn-manage-preferences">Manage Preferences</button>
        <button className="btn-accept-all-cookies" onClick={acceptHandler}>
          Accept all Cookies
        </button>
      </div>
    </div>
  );
}

export default Cookies;
