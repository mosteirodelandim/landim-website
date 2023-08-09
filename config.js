module.exports = {
  // HELMET (relevant for SEO) ----------------
  siteTitle: 'Mosteiro de Landim',
  siteDescription: 'Quinta idílica para eventos e património nacional. A quinta do Mosteiro de Landim é mantida pela sua própria família e encontra-se a apenas 30 minutos do Porto.',
  siteKeywords: ['mosteiro', 'quinta', 'casamento', 'eventos'],
  siteOGPThumbnail: 'https://famalicaoid.org/inweb/multimediaNET/FAMALICAO/2021/11/web/171790.jpg',

  manifestName: 'Mosteiro de Santa Maria de Landim',
  manifestShortName: 'Mosteiro de Landim',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#ec8d81',
  manifestThemeColor: '#ec8d81',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/common/website-icon.png',
  pathPrefix: '',

  // PAGES ---------------------

  emailContact: 'info@mosteirodelandim.com',
  phoneContact: '+351939434741',

  // 404
  houseDogs: ['Ringo', 'Spot', 'Dingo', 'Rex'],

  // Maps
  apiKey: 'XXX',

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

  // Footer - social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-instagram',
      name: 'Instagram',
      urlApp: 'https://www.instagram.com/_u/mosteirodelandim',
    },
    {
      style: 'brands',
      icon: 'fa-facebook',
      name: 'Facebook',
      urlApp: 'https://www.facebook.com/mosteirodelandim',
    },
    {
      style: 'brands',
      icon: 'fa-pinterest',
      name: 'Pinterest',
      urlApp: 'https://www.pinterest.com/mosteirolandim/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      urlApp: 'info@mosteirodelandim.com',
    }
  ],
};
