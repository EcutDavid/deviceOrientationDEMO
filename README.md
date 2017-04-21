![preview](https://cloud.githubusercontent.com/assets/10692276/25283151/5ccd0072-26e5-11e7-8977-165ca636d168.gif)

### Implementation details
- Get the mobile's orientation from [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)(client/index.html)
- Sending orientation to server via web socket(server/index.js)
- Display the orientation in a web application(server/presentingPage.html).
- You can check out my 3D phone implementation on this pen: [codepen.io/davidguan/pen/rmeRQm](http://codepen.io/davidguan/pen/rmeRQm)(styling with SCSS in the pen so it's more readable)

### Development
```
cd server
npm install
// or
yarn install
```

### To developers
Currently, multiuser is not supported, but adding that feature is not hard 😃
Fork this repo and DIY if you are interested in implementing that.

### LICENSE
MIT
