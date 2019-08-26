// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rutaAPI: 'http://40.71.103.111/API.Northwind/',
  SETTINGS: {
    FIREBASE : {
      apiKey: "AIzaSyAah151nqWle5T6PWsmolDef39sRVtNTbw",
      authDomain: "dashboard-eedea.firebaseapp.com",
      databaseURL: "https://dashboard-eedea.firebaseio.com",
      projectId: "dashboard-eedea",
      storageBucket: "",
      messagingSenderId: "108456618838",
      appId: "1:108456618838:web:2b327992e2d55f40"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
