var showPrivacyNotification = (function () {
  var privacyNotification = document.getElementById('app-privacy-notification');

  if (privacyNotification) {
    var privacyNotificationClose = document.getElementById('app-privacy-notification-close');
    var cookieName = "UIO_COOKIES_OPT_IN";
    var windowEqualsTop = (window == top);
    var cookieNotExists = !readCookie(cookieName);

    if(windowEqualsTop && navigator.cookieEnabled && cookieNotExists) {

      // default show notification
      privacyNotification.removeAttribute('hidden');

      // close-button click
      privacyNotificationClose.addEventListener('click', function (e) {
        if (!e) {
          e = window.event;
        }
        // opt-in for 15 years (ceiled days)
        createCookie(cookieName, "yes", 5479);
        privacyNotification.setAttribute('hidden', '')

        if (e.stopPropagation) {
          e.stopPropagation();
        }
        return false;
      });
    }
    else {
      // hide notification
      privacyNotification.setAttribute('hidden', '');
    }
  }
}());

/* Cookie utilities from quirksmode.org */
function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0, len = ca.length; i < len; i++) {
    var c = ca[i];
    var cLen = c.length;
    while (c.charAt(0)==' ') c = c.substring(1, cLen);
    if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, cLen);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
