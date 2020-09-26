# BJsCouponClicker
Chrome Extension installation steps:
- Unpack this zip file to local drive location
In Chrome:
- chrome://extensions/
- Click "Load Unpacked"
- Select the top-most folder location that contains the zipped .js files (manifest.js, background.js, etc.)
- Click "update". BJs Coupon Clicker should appear in list of extensions
- To pin to Chrome extensions toolbar, click the puzzle piece icon, exposing a list of extensions. BJsCouponClicker should be available.
--  Click the Pin Button.

Run extension on https://www.bjs.com/myCoupons via button click. 
This will scan the DOM for coupon click buttons and execute their onclick event, sleep for a duration, and then click the next one.

BJsCouponClicker Steps:
1.)Visit https://www.bjs.com/myCoupons 
2.)Click Extension 
3.)Extension will click each available coupon button, one at a time, with a small delay in between to allow coupons to rerender.