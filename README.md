<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/LuchoTurtle/landim-website">
    <img src="./rm_images/logo.jpg" alt="Landim Logo">
  </a>

  <h3 align="center">Mosteiro de Landim's Website</h3>

  <p align="center">
    The repo where Mosteiro de Landim's new website is developed.
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Website Screen Shot][product-screenshot]]()

The previous Mosteiro de Landim website was developed back in 2006 and, as such, has become outdated as time passes. The site was, at the time of writing, unresponsive and used deprecated technologies. This, of course, had an impact on the user experience and on Mosteiro de Landim itself.

With this in mind, I set off to develop a website for Mosteiro de Landim that was simple and responsive, meaning it could be used on both mobile and desktop platforms. It was a learning experience, to say the least!

Some objectives that I set out include:
* Website should be easy to use, lightweight and compatible with IE.
* Keep the same information that was on the previous website and expand upon it.
* Make it easily customizable for anyone who wants to change the information that resides within.

Of course, these are a rough draft. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I found helpful is listed in the acknowledgements.

### Built With
* [Gatsby](https://www.gatsbyjs.org/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
You need to have `npm` or `yarn` installed to run and deploy the website.
Make sure to follow [these](https://www.npmjs.com/get-npm) instructions.
You also need `Gatsby` installed. Head [here](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) and follow the instructions. 

This project is only compatible with Node up to `v16`. So if you're using a higher version, you'll need to downgrade.

> **Note**
>
> This repo's dependencies are old.
> You will need to install Node 16 and install `gatsby-cli@3.7.1`, not the latest ones.
>
> You will need to have `Python 2.7` installed as well.

### Installation

1. Clone the repo
```sh
git clone https://github.com/mosteirodelandim/landim-website.git
```
2. Install NPM packages
```sh
npm install
```

> **Note**
>
> If you're on a **Windows** device,
> you will probably get the error in https://stackoverflow.com/questions/74715990/node-gyp-err-invalid-mode-ru-while-trying-to-load-binding-gyp/75260066#75260066.
> This is related to `node-sass`. Follow the pre-requisites in https://github.com/nodejs/node-gyp#on-windows.
> 
> 
> If you are on a **MacOS** device, follow the instructions in https://github.com/nodejs/node-gyp#on-windows.
> You might run into other errors.
> Check out https://github.com/nuxt/image/issues/204#issue-837103392, as they are the possible cause.
> You'll have to run 3 commands, as per the aforementioned link.

3. Run it!

- To run locally:
```sh
gatsby develop
```


> **Note**
>
> When running `gatsby develop`, if you run into errors, try hard-refreshing the page. 
> Find out more in https://stackoverflow.com/questions/52121000/gatsby-cannot-read-property-component-src-pages-index-jsx-of-undefined.


- To create a production build, simply run:
```sh
gatsby build
```

This does a production build of the website and outputs the build static files into the ```public``` directory.

### Personalization

Edit `config.js` to put up general details regarding social media and main titles. For translation files, head to ```i18n\locales\``` and translate each JSON file accordingly.

```javascript
module.exports = {

  /* Information for SEO */
  siteTitle: 'Mosteiro de Landim',
  siteDescription: 'Mosteiro de Landim description.',
  siteKeywords: ['mosteiro', 'quinta', 'casamento', 'eventos'],
  siteOGPThumbnail: 'https://cidadehoje.pt/wp-content/uploads/2017/08/Mosteiro-de-Landim.jpg',

  manifestName: 'Mosteiro de Santa Maria de Landim',
  manifestShortName: 'Mosteiro de Landim',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#ec8d81',
  manifestThemeColor: '#ec8d81',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/common/website-icon.png',
  pathPrefix: '',

  // PAGES ---------------------

  emailContact: '*****',
  phoneContact: '*****',

  // 404
  houseDogs: ['Ringo', 'Spot'],

  // Maps
  mapLocation: {
    center: {
      lat: 41.379464,
      lng: -8.463912,
    },
    zoom: 18,
  },

  // Map deep links
  googleMaps: 'http://maps.apple.com/?daddr=Alameda+de+Mosteiro,+4770-328+Vila+Nova+de+Famalicão&dirflg=d&t=m',
  waze: 'https://www.waze.com/ul?ll=41.38005480%2C-8.46451290&navigate=yes',
};

```



<!-- LICENSE -->
## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Distributed under the MIT License.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: rm_images/landing_page.png
