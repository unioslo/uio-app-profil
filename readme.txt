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
info-notification = can be used for anything app-related.



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



images folder
-----------------------------------------------
Interface images: Logos, icons, arrows etc.
