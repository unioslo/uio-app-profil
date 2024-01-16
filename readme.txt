******************************
University of Oslo app profile
******************************



Language – Setting and selecting
-----------------------------------------------
Set document language by editing the lang attribute on the HTML tag.
Examples:
Norwegian bokmål = <html lang="nb">
English = <html lang="en">

The following elements will change depending on the lang attribute:
- UiO logos in header and footer.
- Language selection marker in header language menu.
- Log-out button text in header user menu.
- Skip-to-main-content-link at page top (only visible on keyboard focus).

Notice how the "language-dependent" class is used.

Selecting language in the header menu changes the lang attribute.



Global CSS rules
-----------------------------------------------
Font sizing
- 1rem = 10px (so 2rem = 20px, 2.4rem = 24px etc.)
- body = 1.8rem (18px)

Responsive breakpoints
- @media (min-width: 1101px)
- @media (max-width: 1100px)

Outer width and side-spacing
The "app-global-wrapper" class:
- Controls global max-width and side-spacing.
- It is used in all outer framework containers.
- It can be edited for the app area only in the app-main css.



Using and editing the files
-----------------------------------------------
In general what should be used and edited is:
- The main app area in the HTML file
- The app-main CSS file.
When editing other areas and files, consider:
- What is technologically necessary.
- Commenting out and overriding rather than changing.
- How potential future updates of the framework should be handled.



**************
Files included
**************



uio-app-template.html
-----------------------------------------------
HTML framework.
See comments in file.



style/uio-app-global.css
-----------------------------------------------
CSS for the general framework.
Contains global rules and some reusable classes.



style/uio-app-header.css
-----------------------------------------------
CSS for the top area.
Styles for responsive menu behaviour.



style/uio-app-footer.css
-----------------------------------------------
CSS for the bottom area.



style/uio-app-main.css
-----------------------------------------------
CSS for the main app area.
See comments on how to edit the size and spacing for your main app area etc.



style/uio-app-notifications.css
-----------------------------------------------
CSS for notification boxes.
The notifications are commented out in the HTML file. Uncomment and use as needed.
privacy-notification = UiO's standard cookie warning.
info-notification = for app-related notifications.



script/uio-app-header.js
-----------------------------------------------
Controls language-menu and user-menu in header.
Controls language menu selection and HTML lang attribute.
Controls responsive-menu-button on small screen.
Detects screen width and applies necessary header logic.



script/uio-app-privacy-notification.js
-----------------------------------------------
Handles privacy-notification.
The notification is commented out in the HTML file. Uncomment and use as needed.
The script will hide the notification if clicked away by user.
Visibility is controlled by the [hidden] attribute in the HTML.

script/uio-GA-consent.js
-----------------------------------------------
Handles Google Analytics consent.


images folder
-----------------------------------------------
Interface images: Logos, icons, arrows etc.
