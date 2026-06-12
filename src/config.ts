/**
 * Site-wide configuration, ported from the legacy Gatsby config.js.
 */
export const config = {
  siteTitle: "Mosteiro de Landim",
  siteDescription:
    "Quinta idílica para eventos e património nacional. A quinta do Mosteiro de Landim é mantida pela sua própria família e encontra-se a apenas 30 minutos do Porto.",
  siteKeywords: ["mosteiro", "quinta", "casamento", "eventos", "landim", "famalicão"],
  siteUrl: "https://www.mosteirodelandim.com",

  emailContact: "info@mosteirodelandim.com",
  phoneContact: "+351 939 434 741",
  address: "Alameda do Mosteiro, 4770-328 Landim, Vila Nova de Famalicão",

  houseDogs: ["Ringo", "Spot", "Dingo", "Rex"],

  mapLocation: {
    center: { lat: 41.379464, lng: -8.463912 },
    zoom: 18,
  },

  /** Deep links for directions */
  directionsGoogleMaps:
    "https://www.google.com/maps/dir/?api=1&destination=41.379464,-8.463912",
  directionsWaze: "https://www.waze.com/ul?ll=41.38005480%2C-8.46451290&navigate=yes",
  /** Keyless embed for the FAQ/contacts page */
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Mosteiro%20de%20Landim&ll=41.379464,-8.463912&z=17&t=m&output=embed",

  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/mosteirodelandim" },
    { name: "Facebook", url: "https://www.facebook.com/mosteirodelandim" },
    { name: "Pinterest", url: "https://www.pinterest.com/mosteirolandim/" },
  ],

  external: {
    airbnb: "https://www.airbnb.pt/rooms/11984291",
    parish: "https://www.paroquialandim.com",
    historicGardensRoute: "https://jardinshistoricos.pt/route/view/7",
  },
} as const;

export type SiteConfig = typeof config;
