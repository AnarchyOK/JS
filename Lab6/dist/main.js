/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Constants.js":
/*!******************************!*\
  !*** ./scripts/Constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countries: () => (/* binding */ countries),
/* harmony export */   domElements: () => (/* binding */ domElements)
/* harmony export */ });
const domElements = {
    topCards: document.querySelector('.top-cards'),
    searchInput: document.querySelector('.header-input'),
    searchTeacherButton: document.querySelector('.submit-btn'),
    openAddTeacherFormButtons: document.querySelectorAll('.add-btn-a'),
    addTeacherSubmit: document.getElementById('add-teacher-form'),
    favoriteTeachers: document.querySelector('.favorite-teachers'),
    filters: {
        age: document.querySelector('.filter-age'),
        country: document.querySelector('.filter-country'),
        sex: document.querySelector('.filter-sex'),
        pictureLarge: document.querySelector('.filter-photo'),
        favorite: document.querySelector('.filter-favorite')
    },
    countries: document.getElementById('filtration-country-list'),
    popupCountries: document.getElementById('form-country-list'),
    addTeacherForm: document.getElementById('myForm'),
    teacherFullCard: document.getElementById('teacher-info-popup'),
    statisticTable: document.querySelector('.statistics-table'),
    statisticTableBody: document.querySelector('.statistic-table-body'),
    addMoreTeacherButton: document.querySelector('.more-teacher-button'),
    teacherPhone: document.getElementById('phone'),
    divPiecharts:document.getElementById('piecharts')
}

// export const teachers = [
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Norbert Weishaupt',
//             city: 'Rhön-Grabfeld',
//             state: 'Mecklenburg-Vorpommern',
//             country: 'Germany',
//             postcode: 52640,
//             coordinates: {latitude: '-42.1817', longitude: '-152.1685'},
//             timezone: {offset: '+9:30', description: 'Adelaide, Darwin'},
//             email: 'norbert.weishaupt@example.com',
//             bDate: '1956-12-23T19:09:19.602Z',
//             age: 65,
//             phone: '0079-8291509',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/28.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
//             id: 'bfe8ab77-36f2-4853-973a-c3241cfd3e18',
//             favorite: false,
//             course: 'Statistics',
//             bgColor: '#af73fe',
//             note: 'QqwngHB JXywKLk tTnNPqk nLkdsYT hJrBefD',
//             key: 0
//         },
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Claude Payne',
//             city: 'Skerries',
//             state: 'Longford',
//             country: 'Ireland',
//             postcode: 64451,
//             coordinates: {latitude: '-81.9272', longitude: '179.5544'},
//             timezone: {offset: '-12:00', description: 'Eniwetok, Kwajalein'},
//             email: 'claude.payne@example.com',
//             bDate: '1966-07-31T21:57:32.876Z',
//             age: 55,
//             phone: '071-558-2972',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/40.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/40.jpg',
//             id: 'PPS2340626T',
//             favorite: true,
//             course: 'Art',
//             bgColor: '#4b5d2c',
//             note: 'JEBgFJp HIHNPQv qDZzzUr vmGIPNX novIYbh',
//             key: 1
//         },
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Curtis Mendoza',
//             city: 'Bowral',
//             state: 'Western Australia',
//             country: 'Australia',
//             postcode: 5234,
//             coordinates: {latitude: '-66.8661', longitude: '-35.7288'},
//             timezone: {
//                 offset: '+10:00',
//                 description: 'Eastern Australia, Guam, Vladivostok'
//             },
//             email: 'curtis.mendoza@example.com',
//             bDate: '1975-04-02T02:31:00.130Z',
//             age: 46,
//             phone: '02-6397-0344',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/4.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
//             id: 'TFN505504341',
//             favorite: false,
//             course: 'Mathematics',
//             bgColor: '#44cfd8',
//             note: 'kinTuXq XHrkWwo IHMbCqi oZLdJNQ nPtSIAU',
//             key: 2
//         },
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Darren Wood',
//             city: 'Surrey',
//             state: 'Alabama',
//             country: 'United States',
//             postcode: 52941,
//             coordinates: {latitude: '79.5827', longitude: '164.6189'},
//             timezone: {offset: '-9:00', description: 'Alaska'},
//             email: 'darren.wood@example.com',
//             bDate: '1974-11-15T10:40:20.306Z',
//             age: 47,
//             phone: '(720)-981-1014',
//             // pictureLarge: 'https://randomuser.me/api/portraits/men/68.jpg',
//             pictureLarge: null,
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
//             id: 'SSN769-88-9330',
//             favorite: true,
//             course: 'Chess',
//             bgColor: '#6dd559',
//             note: 'UPTRjxP vbqIOXP aohqNbM QJAzoJp obNNuvN',
//             key: 3
//         },
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Elias Tikkanen',
//             city: 'Nousiainen',
//             state: 'Ostrobothnia',
//             country: 'Finland',
//             postcode: 67794,
//             coordinates: {latitude: '1.4218', longitude: '-169.0904'},
//             timezone: {
//                 offset: '+5:30',
//                 description: 'Bombay, Calcutta, Madras, New Delhi'
//             },
//             email: 'elias.tikkanen@example.com',
//             bDate: '1985-09-28T12:59:41.244Z',
//             age: 36,
//             phone: '04-531-159',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/34.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
//             id: 'HETUNaNNA013undefined',
//             favorite: false,
//             course: 'Physics',
//             bgColor: '#18c19f',
//             note: 'jyBctOb rRNRicb YtxTnSL ZkmCUDx jrDHNfE',
//             key: 4
//         },
//         {
//             gender: 'female',
//             title: 'Ms',
//             fullName: 'Tessa Möllmann',
//             city: 'Hohenstein-Ernstthal',
//             state: 'Bayern',
//             country: 'Germany',
//             postcode: 87827,
//             coordinates: {latitude: '61.8456', longitude: '67.6500'},
//             timezone: {offset: '+4:30', description: 'Kabul'},
//             email: 'tessa.mollmann@example.com',
//             bDate: '1986-05-08T09:19:12.021Z',
//             age: 35,
//             phone: '0358-7950096',
//             pictureLarge: 'https://randomuser.me/api/portraits/women/8.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
//             id: 'c40fd210-2787-4f0e-a5eb-3cafecf54076',
//             favorite: false,
//             course: 'Chemistry',
//             bgColor: '#d75d73',
//             note: 'bjDyZZX zGvhYmq ACgOmzO wpNsjrj tcGoxVZ',
//             key: 5
//         },
//         {
//             gender: 'female',
//             title: 'Miss',
//             fullName: 'Maxine James',
//             city: 'Brisbane',
//             state: 'Northern Territory',
//             country: 'Australia',
//             postcode: 797,
//             coordinates: {latitude: '-41.1464', longitude: '142.0238'},
//             timezone: {
//                 offset: '+5:00',
//                 description: 'Ekaterinburg, Islamabad, Karachi, Tashkent'
//             },
//             email: 'maxine.james@example.com',
//             bDate: '1974-08-10T01:12:04.592Z',
//             age: 47,
//             phone: '02-7976-3904',
//             pictureLarge: 'https://randomuser.me/api/portraits/women/94.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
//             id: 'TFN386597027',
//             favorite: false,
//             course: 'Physics',
//             bgColor: '#7e3698',
//             note: 'DrAXguM rAwzhWf ldMqYQc PlNCFyI qjYREgL',
//             key: 6
//         },
//         {
//             gender: 'female',
//             title: 'Mrs',
//             fullName: 'Mestan Pektemek',
//             city: 'İstanbul',
//             state: 'Karaman',
//             country: 'Turkey',
//             postcode: 81972,
//             coordinates: {latitude: '16.6664', longitude: '-0.4745'},
//             timezone: {
//                 offset: '+8:00',
//                 description: 'Beijing, Perth, Singapore, Hong Kong'
//             },
//             email: 'mestan.pektemek@example.com',
//             bDate: '1975-08-20T23:05:13.239Z',
//             age: 46,
//             phone: '(038)-418-1407',
//             // pictureLarge: 'https://randomuser.me/api/portraits/women/71.jpg',
//             pictureLarge: null,
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
//             id: 'dd90244b-e9fa-4556-9d1c-4315bdc010c7',
//             favorite: false,
//             course: 'Dancing',
//             bgColor: '#7df947',
//             note: 'TTBjUgt GtBCvJL tMJtYKp nNlWrQJ TzOPITk',
//             key: 7
//         },
//         {
//             gender: 'male',
//             title: 'Monsieur',
//             fullName: 'Viktor Legrand',
//             city: 'Gy',
//             state: 'Solothurn',
//             country: 'Switzerland',
//             postcode: 4919,
//             coordinates: {latitude: '-73.3324', longitude: '-63.8552'},
//             timezone: {offset: '+7:00', description: 'Bangkok, Hanoi, Jakarta'},
//             email: 'viktor.legrand@example.com',
//             bDate: '1994-07-04T12:08:05.427Z',
//             age: 27,
//             phone: '077 863 38 70',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/51.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
//             id: 'AVS756.2023.5649.57',
//             favorite: false,
//             course: 'Dancing',
//             bgColor: '#cddaa0',
//             note: 'OKxHCDG EygGuGA qmTurhY nTwmbuM iGKNoOo',
//             key: 8
//         },
//         {
//             gender: 'male',
//             title: 'Mr',
//             fullName: 'Deniz Yıldırım',
//             city: 'Bolu',
//             state: 'Ardahan',
//             country: 'Turkey',
//             postcode: 12234,
//             coordinates: {latitude: '-42.0389', longitude: '-86.4817'},
//             timezone: {offset: '+6:00', description: 'Almaty, Dhaka, Colombo'},
//             email: 'deniz.yildirim@example.com',
//             bDate: '1981-12-12T17:49:30.416Z',
//             age: 40,
//             phone: '(602)-541-0650',
//             pictureLarge: 'https://randomuser.me/api/portraits/men/99.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/99.jpg',
//             id: '23174f08-0f4c-4eba-9f06-6f9cc0015ea8',
//             favorite: false,
//             course: 'Law',
//             bgColor: '#28ffe',
//             note: 'IxjGUDJ NTCQBZv JuptEme mVoxcgc GROlZgB',
//             key: 9
//         },
//         {
//             gender: 'female',
//             title: 'Ms',
//             fullName: 'Matilda Aalto',
//             city: 'Tornio',
//             state: 'Central Ostrobothnia',
//             country: 'Finland',
//             postcode: 88244,
//             coordinates: {latitude: '79.9136', longitude: '83.6836'},
//             timezone: {offset: '+6:00', description: 'Almaty, Dhaka, Colombo'},
//             email: 'matilda.aalto@example.com',
//             bDate: '1995-09-12T20:08:25.350Z',
//             age: 26,
//             phone: '06-843-874',
//             pictureLarge: 'https://randomuser.me/api/portraits/women/80.jpg',
//             pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg',
//             id: 'HETUNaNNA760undefined',
//             favorite: false,
//             course: 'Dancing',
//             bgColor: '#e2a687',
//             note: 'lepEmIC nUaQoUO lyzKSEw zhwMNOG rQjLPrv',
//             key: 10
//         },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Lucy Walker',
//         //         city: 'Nelson',
//         //         state: 'Southland',
//         //         country: 'New Zealand',
//         //         postcode: 82655,
//         //         coordinates: {latitude: '-27.4724', longitude: '132.5136'},
//         //         timezone: {offset: '+4:30', description: 'Kabul'},
//         //         email: 'lucy.walker@example.com',
//         //         bDate: '1967-07-08T22:51:02.434Z',
//         //         age: 54,
//         //         phone: '(018)-588-0617',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/6.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
//         //         id: '62d270bf-a138-4878-8524-f8c435ae1247',
//         //         favorite: true,
//         //         course: 'Biology',
//         //         bgColor: '#1e4793',
//         //         note: 'sHxrEqg lIJdmwn ZodwtSo OxXdtvt iaqukph',
//         //         key: 11
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Antonio Gil',
//         //         city: 'Cuenca',
//         //         state: 'Castilla la Mancha',
//         //         country: 'Spain',
//         //         postcode: 91659,
//         //         coordinates: {latitude: '-71.7038', longitude: '-10.4243'},
//         //         timezone: {offset: '+2:00', description: 'Kaliningrad, South Africa'},
//         //         email: 'antonio.gil@example.com',
//         //         bDate: '1974-05-10T02:24:28.197Z',
//         //         age: 47,
//         //         phone: '921-757-670',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/14.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
//         //         id: 'DNI63719733-L',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#a8021c',
//         //         note: 'bAgGSDE DITcEtd AwkQdLu niypPbI CElLQXL',
//         //         key: 12
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'August Bertheussen',
//         //         city: 'Arendal',
//         //         state: 'Nord-Trøndelag',
//         //         country: 'Norway',
//         //         postcode: '8518',
//         //         coordinates: {latitude: '25.1087', longitude: '-0.6986'},
//         //         timezone: {
//         //             offset: '+11:00',
//         //             description: 'Magadan, Solomon Islands, New Caledonia'
//         //         },
//         //         email: 'august.bertheussen@example.com',
//         //         bDate: '1956-04-28T08:50:01.255Z',
//         //         age: 65,
//         //         phone: '36513745',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/87.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/87.jpg',
//         //         id: 'FN28045612378',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#2c7c75',
//         //         note: 'dtfcszQ qPTIurO UvOyWSk CPZpcHg azfQUEG',
//         //         key: 13
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Lana Ottesen',
//         //         city: 'Sand',
//         //         state: 'Description',
//         //         country: 'Norway',
//         //         postcode: '0576',
//         //         coordinates: {latitude: '4.9713', longitude: '-14.3459'},
//         //         timezone: {offset: '-10:00', description: 'Hawaii'},
//         //         email: 'lana.ottesen@example.com',
//         //         bDate: '1952-03-09T08:28:33.451Z',
//         //         age: 69,
//         //         phone: '76565355',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/87.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/87.jpg',
//         //         id: 'FN09035238279',
//         //         favorite: false,
//         //         course: 'Biology',
//         //         bgColor: '#50f689',
//         //         note: 'eYHcOEy gEvFDuI LfPmkyr ZapImRh cZJptIh',
//         //         key: 14
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Adeline Weigand',
//         //         city: 'Fürth',
//         //         state: 'Mecklenburg-Vorpommern',
//         //         country: 'Germany',
//         //         postcode: 80819,
//         //         coordinates: {latitude: '-41.5020', longitude: '-36.1579'},
//         //         timezone: {
//         //             offset: '+1:00',
//         //             description: 'Brussels, Copenhagen, Madrid, Paris'
//         //         },
//         //         email: 'adeline.weigand@example.com',
//         //         bDate: '1971-06-08T09:57:13.975Z',
//         //         age: '50',
//         //         phone: '0596-1926541',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/43.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/43.jpg',
//         //         id: 'fb2affcd-9e75-4dc7-b113-1364ca0d99c3',
//         //         favorite: false,
//         //         course: 'Medicine',
//         //         bgColor: '#fb0d50',
//         //         note: 'dOEUGGI zSPFbwg GEmApsp zVXLQdb PffgrMn',
//         //         key: 15
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Oona Kokko',
//         //         city: 'Iisalmi',
//         //         state: 'Central Ostrobothnia',
//         //         country: 'Finland',
//         //         postcode: 71206,
//         //         coordinates: {latitude: '28.3369', longitude: '-173.9575'},
//         //         timezone: {
//         //             offset: '+1:00',
//         //             description: 'Brussels, Copenhagen, Madrid, Paris'
//         //         },
//         //         email: 'oona.kokko@example.com',
//         //         bDate: '1959-03-24T21:00:30.775Z',
//         //         age: 62,
//         //         phone: '07-130-008',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/93.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/93.jpg',
//         //         id: 'HETUNaNNA402undefined',
//         //         favorite: false,
//         //         course: 'Dancing',
//         //         bgColor: '#7a8d13',
//         //         note: 'WnSHipZ NOPOnlM QayLbbH oxqtGMM KuZIYEB',
//         //         key: 16
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Emil Madsen',
//         //         city: 'Kongsvinger',
//         //         state: 'Sjælland',
//         //         country: 'Denmark',
//         //         postcode: 65053,
//         //         coordinates: {latitude: '60.3062', longitude: '138.5907'},
//         //         timezone: {
//         //             offset: '-3:00',
//         //             description: 'Brazil, Buenos Aires, Georgetown'
//         //         },
//         //         email: 'emil.madsen@example.com',
//         //         bDate: '1993-12-30T02:54:32.845Z',
//         //         age: 28,
//         //         phone: '33373580',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/40.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/40.jpg',
//         //         id: 'CPR301293-2636',
//         //         favorite: false,
//         //         course: 'English',
//         //         bgColor: '#c6b400',
//         //         note: 'BhoPRVn ephfLVB biWGDMk kTtBnXO XRuCnGH',
//         //         key: 17
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Mario Saez',
//         //         city: 'Gandía',
//         //         state: 'Cataluña',
//         //         country: 'Spain',
//         //         postcode: 49123,
//         //         coordinates: {latitude: '-46.9749', longitude: '-126.6882'},
//         //         timezone: {
//         //             offset: '-4:00',
//         //             description: 'Atlantic Time (Canada), Caracas, La Paz'
//         //         },
//         //         email: 'mario.saez@example.com',
//         //         bDate: '1985-11-01T17:08:44.642Z',
//         //         age: 36,
//         //         phone: '907-066-616',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/53.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/53.jpg',
//         //         id: 'DNI04671126-X',
//         //         favorite: true,
//         //         course: 'Art',
//         //         bgColor: '#2c9cc9',
//         //         note: 'mehDqlh AlnDPzv IFYsaWW UXHnZPO kNxJhgI',
//         //         key: 18
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'آدرینا صدر',
//         //         city: 'ارومیه',
//         //         state: 'کرمان',
//         //         country: 'Iran',
//         //         postcode: 48391,
//         //         coordinates: {latitude: '-5.2616', longitude: '-95.9339'},
//         //         timezone: {offset: '-7:00', description: 'Mountain Time (US & Canada)'},
//         //         email: 'adryn.sdr@example.com',
//         //         bDate: '1977-01-03T08:07:23.555Z',
//         //         age: 44,
//         //         phone: '008-22619690',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/49.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/49.jpg',
//         //         id: 'a3b2c70a-7519-435d-8b81-6b7910798c37',
//         //         favorite: false,
//         //         course: 'English',
//         //         bgColor: '#1de927',
//         //         note: 'QWUhHwG wlOjrUc OeTMEDv IBUugHs cPMqGGv',
//         //         key: 19
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Joe Mitchell',
//         //         city: 'Norwalk',
//         //         state: 'New Jersey',
//         //         country: 'United States',
//         //         postcode: 83924,
//         //         coordinates: {latitude: '45.4790', longitude: '143.8132'},
//         //         timezone: {
//         //             offset: '+10:00',
//         //             description: 'Eastern Australia, Guam, Vladivostok'
//         //         },
//         //         email: 'joe.mitchell@example.com',
//         //         bDate: '1948-07-07T06:09:20.491Z',
//         //         age: 73,
//         //         phone: '(210)-514-4881',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/78.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
//         //         id: 'SSN273-52-2514',
//         //         favorite: true,
//         //         course: 'Medicine',
//         //         bgColor: '#f57745',
//         //         note: 'mnFggOj VnSdqJx bCrvPEz XSMwkxr CzbEvLL',
//         //         key: 20
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Maeva Walker',
//         //         city: 'Cumberland',
//         //         state: 'Saskatchewan',
//         //         country: 'Canada',
//         //         postcode: 'Z6T 3E6',
//         //         coordinates: {latitude: '-31.2136', longitude: '16.8355'},
//         //         timezone: {
//         //             offset: '+4:00',
//         //             description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
//         //         },
//         //         email: 'maeva.walker@example.com',
//         //         bDate: '1963-04-17T16:40:45.773Z',
//         //         age: 58,
//         //         phone: '636-857-3801',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/61.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg',
//         //         id: '96a5f09b-4314-4f0e-8788-47c886ddd310',
//         //         favorite: false,
//         //         course: 'Physics',
//         //         bgColor: '#497c26',
//         //         note: 'WQTZSCi AAoBcjR RDVxaAf IxydgCN UBgCNth',
//         //         key: 21
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Tim Roy',
//         //         city: 'Créteil',
//         //         state: 'Haut-Rhin',
//         //         country: 'France',
//         //         postcode: 65772,
//         //         coordinates: {latitude: '-63.5272', longitude: '115.8694'},
//         //         timezone: {
//         //             offset: '+5:00',
//         //             description: 'Ekaterinburg, Islamabad, Karachi, Tashkent'
//         //         },
//         //         email: 'tim.roy@example.com',
//         //         bDate: '1983-09-20T17:50:52.872Z',
//         //         age: 38,
//         //         phone: '05-70-80-69-86',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/20.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg',
//         //         id: 'INSEE1NNaN9411344774',
//         //         favorite: false,
//         //         course: 'Dancing',
//         //         bgColor: '#f75905',
//         //         note: 'LWfOMjZ IEGntmn AfeFhGM fcVbgsu rcmDZhl',
//         //         key: 22
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Tristan Petersen',
//         //         city: 'Stenderup',
//         //         state: 'Syddanmark',
//         //         country: 'Denmark',
//         //         postcode: 88496,
//         //         coordinates: {latitude: '-77.4835', longitude: '64.8261'},
//         //         timezone: {
//         //             offset: '-5:00',
//         //             description: 'Eastern Time (US & Canada), Bogota, Lima'
//         //         },
//         //         email: 'tristan.petersen@example.com',
//         //         bDate: '1950-11-26T15:19:28.764Z',
//         //         age: 71,
//         //         phone: '61523239',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/97.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/97.jpg',
//         //         id: 'CPR261150-5443',
//         //         favorite: false,
//         //         course: 'Art',
//         //         bgColor: '#b9c512',
//         //         note: 'FIWyBJb WICwMFv enrZQCD EPiuDNg vhWXlDy',
//         //         key: 23
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Kristina Skjold',
//         //         city: 'Kolnes',
//         //         state: 'Vest-Agder',
//         //         country: 'Norway',
//         //         postcode: '4085',
//         //         coordinates: {latitude: '-76.9661', longitude: '-95.2957'},
//         //         timezone: {offset: '-2:00', description: 'Mid-Atlantic'},
//         //         email: 'kristina.skjold@example.com',
//         //         bDate: '1972-11-21T18:04:12.259Z',
//         //         age: 49,
//         //         phone: '71350190',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/92.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
//         //         id: 'FN21117225647',
//         //         favorite: false,
//         //         course: 'Computer Science',
//         //         bgColor: '#9cfe11',
//         //         note: 'JfKjWZF NMcWKTj FmHgiBQ nsYmPoj iSOZceT',
//         //         key: 24
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'آراد زارعی',
//         //         city: 'اردبیل',
//         //         state: 'کرمان',
//         //         country: 'Iran',
//         //         postcode: 84902,
//         //         coordinates: {latitude: '57.8145', longitude: '-146.6983'},
//         //         timezone: {offset: '+5:45', description: 'Kathmandu'},
//         //         email: 'ard.zraay@example.com',
//         //         bDate: '1989-02-12T18:41:45.531Z',
//         //         age: 32,
//         //         phone: '029-39614780',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/48.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/48.jpg',
//         //         id: '35e331c5-4b69-462c-9477-4669eef26b60',
//         //         favorite: true,
//         //         course: 'Art',
//         //         bgColor: '#cfc763',
//         //         note: 'mMZzlKA mWwjErt VjXhKPo oQJFSpn hTqZXeH',
//         //         key: 25
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'آوینا نجاتی',
//         //         city: 'قائم‌شهر',
//         //         state: 'مرکزی',
//         //         country: 'Iran',
//         //         postcode: 21415,
//         //         coordinates: {latitude: '-51.3076', longitude: '-146.1861'},
//         //         timezone: {
//         //             offset: '+11:00',
//         //             description: 'Magadan, Solomon Islands, New Caledonia'
//         //         },
//         //         email: 'awyn.njty@example.com',
//         //         bDate: '1968-11-13T05:41:01.302Z',
//         //         age: 53,
//         //         phone: '049-44129055',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/19.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/19.jpg',
//         //         id: '7cd81b1a-aa2b-4b48-b124-606ac224bebf',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#ae02c2',
//         //         note: 'ETZzqLC AgqjfCk WichNzn MEUWCtJ LBOaDau',
//         //         key: 26
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Ms',
//         //         fullName: 'Ronja Marttila',
//         //         city: 'Kotka',
//         //         state: 'Ostrobothnia',
//         //         country: 'Finland',
//         //         postcode: 52545,
//         //         coordinates: {latitude: '-88.5101', longitude: '-32.2106'},
//         //         timezone: {
//         //             offset: '+11:00',
//         //             description: 'Magadan, Solomon Islands, New Caledonia'
//         //         },
//         //         email: 'ronja.marttila@example.com',
//         //         bDate: '1946-02-27T02:50:54.842Z',
//         //         age: 75,
//         //         phone: '04-421-028',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/5.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/5.jpg',
//         //         id: 'HETUNaNNA728undefined',
//         //         favorite: false,
//         //         course: 'Chess',
//         //         bgColor: '#7501df',
//         //         note: 'hfPSVZV OKYSoay hYiFSFC ZuMGgnQ UcxvbPF',
//         //         key: 27
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Elcke Graumans',
//         //         city: 'Eemshaven',
//         //         state: 'Groningen',
//         //         country: 'Netherlands',
//         //         postcode: 79822,
//         //         coordinates: {latitude: '-73.7593', longitude: '-162.6167'},
//         //         timezone: {offset: '-2:00', description: 'Mid-Atlantic'},
//         //         email: 'elcke.graumans@example.com',
//         //         bDate: '1987-12-26T20:55:07.940Z',
//         //         age: 34,
//         //         phone: '(938)-352-7475',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/58.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/58.jpg',
//         //         id: 'BSN26586375',
//         //         favorite: false,
//         //         course: 'Chess',
//         //         bgColor: '#39f895',
//         //         note: 'VnXIjYc oRkdoqE YpbscUh DtbNDMf SxUoYwe',
//         //         key: 28
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Sigrid Sviggum',
//         //         city: 'Ramsøy',
//         //         state: 'Hordaland',
//         //         country: 'Norway',
//         //         postcode: '5904',
//         //         coordinates: {latitude: '62.3170', longitude: '102.2678'},
//         //         timezone: {
//         //             offset: '-5:00',
//         //             description: 'Eastern Time (US & Canada), Bogota, Lima'
//         //         },
//         //         email: 'sigrid.sviggum@example.com',
//         //         bDate: '1993-10-03T01:40:10.720Z',
//         //         age: 28,
//         //         phone: '32189027',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/3.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
//         //         id: 'FN03109315264',
//         //         favorite: true,
//         //         course: 'Art',
//         //         bgColor: '#d9a069',
//         //         note: 'KEXmiGn MvFbEcM oeaHJQh MGWDkGj mlYMJcY',
//         //         key: 29
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Emil Møller',
//         //         city: 'Ansager',
//         //         state: 'Danmark',
//         //         country: 'Denmark',
//         //         postcode: 49442,
//         //         coordinates: {latitude: '44.9585', longitude: '152.8104'},
//         //         timezone: {offset: '-3:30', description: 'Newfoundland'},
//         //         email: 'emil.moller@example.com',
//         //         bDate: '1954-07-15T07:55:58.285Z',
//         //         age: 67,
//         //         phone: '17760878',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/20.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg',
//         //         id: 'CPR150754-2317',
//         //         favorite: false,
//         //         course: 'Chemistry',
//         //         bgColor: '#2bde87',
//         //         note: 'URNpqMI ClyxaDx oUEBJAY dDrPchK MwTJbdd',
//         //         key: 30
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Darrell Dunne',
//         //         city: 'Tullow',
//         //         state: 'Wexford',
//         //         country: 'Ireland',
//         //         postcode: 39242,
//         //         coordinates: {latitude: '-68.2633', longitude: '-70.6858'},
//         //         timezone: {offset: '-7:00', description: 'Mountain Time (US & Canada)'},
//         //         email: 'darrell.dunne@example.com',
//         //         bDate: '1997-11-21T06:35:55.528Z',
//         //         age: 24,
//         //         phone: '071-488-9968',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/36.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/36.jpg',
//         //         id: 'PPS7847438T',
//         //         favorite: false,
//         //         course: 'Physics',
//         //         bgColor: '#c01c20',
//         //         note: 'hehGklV ZAXKjlE FBsuYjg awesVvn NvzZnos',
//         //         key: 31
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Jordan Vidal',
//         //         city: 'Aubervilliers',
//         //         state: 'Hauts-de-Seine',
//         //         country: 'France',
//         //         postcode: 19716,
//         //         coordinates: {latitude: '-74.1635', longitude: '-67.0556'},
//         //         timezone: {
//         //             offset: '+4:00',
//         //             description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
//         //         },
//         //         email: 'jordan.vidal@example.com',
//         //         bDate: '1977-03-05T13:35:14.295Z',
//         //         age: 44,
//         //         phone: '04-31-67-71-51',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/94.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/94.jpg',
//         //         id: 'INSEE1NNaN3439472196',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#f0a0c4',
//         //         note: 'qaUQLIS qAuLHgt UUjzgzZ wklieZd BgOimai',
//         //         key: 32
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'عرشيا كامياران',
//         //         city: 'اهواز',
//         //         state: 'گلستان',
//         //         country: 'Iran',
//         //         postcode: 71779,
//         //         coordinates: {latitude: '41.1604', longitude: '82.3069'},
//         //         timezone: {
//         //             offset: '+5:00',
//         //             description: 'Ekaterinburg, Islamabad, Karachi, Tashkent'
//         //         },
//         //         email: 'aarshy.kmyrn@example.com',
//         //         bDate: '1965-12-08T22:45:18.878Z',
//         //         age: 56,
//         //         phone: '083-31098334',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/32.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
//         //         id: '946ec43c-cfdb-40e9-b4d0-48a215fa2846',
//         //         favorite: false,
//         //         course: 'Medicine',
//         //         bgColor: '#bfcb79',
//         //         note: 'wXnASlK qqhrgms xZtoJSF kwfEwrp BYcJIzs',
//         //         key: 33
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Esat Köylüoğlu',
//         //         city: 'Giresun',
//         //         state: 'Konya',
//         //         country: 'Turkey',
//         //         postcode: 50870,
//         //         coordinates: {latitude: '-44.0832', longitude: '-64.5925'},
//         //         timezone: {offset: '+5:45', description: 'Kathmandu'},
//         //         email: 'esat.koyluoglu@example.com',
//         //         bDate: '1956-01-28T20:25:36.209Z',
//         //         age: 65,
//         //         phone: '(472)-638-0730',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/57.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
//         //         id: 'e22d748a-4977-46cb-8c96-ea6ee1bae040',
//         //         favorite: false,
//         //         course: 'Art',
//         //         bgColor: '#c9aaeb',
//         //         note: 'aIUcfpQ pCFSLFm LQRvEqc LbJmDBF FEbNZrm',
//         //         key: 34
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Madame',
//         //         fullName: 'Anouk Simon',
//         //         city: 'Dompierre (Vd)',
//         //         state: 'Aargau',
//         //         country: 'Switzerland',
//         //         postcode: 7118,
//         //         coordinates: {latitude: '-9.6384', longitude: '31.7436'},
//         //         timezone: {
//         //             offset: '-5:00',
//         //             description: 'Eastern Time (US & Canada), Bogota, Lima'
//         //         },
//         //         email: 'anouk.simon@example.com',
//         //         bDate: '1982-04-05T14:22:44.269Z',
//         //         age: 39,
//         //         phone: '078 059 73 14',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/53.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/53.jpg',
//         //         id: 'AVS756.6671.9396.83',
//         //         favorite: false,
//         //         course: 'English',
//         //         bgColor: '#d895f5',
//         //         note: 'vPlHDQZ wLxqUze DaYkqBx IBBWLxa bjeOzeO',
//         //         key: 35
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Ms',
//         //         fullName: 'Sara Velasco',
//         //         city: 'Madrid',
//         //         state: 'Islas Baleares',
//         //         country: 'Spain',
//         //         postcode: 68699,
//         //         coordinates: {latitude: '-78.4139', longitude: '115.4609'},
//         //         timezone: {
//         //             offset: '0:00',
//         //             description: 'Western Europe Time, London, Lisbon, Casablanca'
//         //         },
//         //         email: 'sara.velasco@example.com',
//         //         bDate: '1980-04-17T20:07:31.899Z',
//         //         age: 41,
//         //         phone: '987-689-092',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/45.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
//         //         id: 'DNI23347090-X',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#f9d686',
//         //         note: 'GFFdGxz rVIUFRm EsnTvux OCCxqrm LYSSrJD',
//         //         key: 36
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Leah Diaz',
//         //         city: 'Vallejo',
//         //         state: 'Wyoming',
//         //         country: 'United States',
//         //         postcode: 38797,
//         //         coordinates: {latitude: '85.7862', longitude: '-0.6726'},
//         //         timezone: {
//         //             offset: '+5:00',
//         //             description: 'Ekaterinburg, Islamabad, Karachi, Tashkent'
//         //         },
//         //         email: 'leah.diaz@example.com',
//         //         bDate: '1992-12-20T09:32:27.922Z',
//         //         age: 29,
//         //         phone: '(173)-797-7689',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/6.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
//         //         id: 'SSN807-33-0374',
//         //         favorite: false,
//         //         course: 'Physics',
//         //         bgColor: '#d6217d',
//         //         note: 'IXmRKSN WubGtTT mriZflC fGPaicT DJDfPVv',
//         //         key: 37
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Quido Van der Zalm',
//         //         city: 'Noordeinde Gld',
//         //         state: 'Drenthe',
//         //         country: 'Netherlands',
//         //         postcode: 34404,
//         //         coordinates: {latitude: '-11.1926', longitude: '-140.8227'},
//         //         timezone: {offset: '-3:30', description: 'Newfoundland'},
//         //         email: 'quido.vanderzalm@example.com',
//         //         bDate: '1961-12-02T13:05:04.807Z',
//         //         age: 60,
//         //         phone: '(144)-684-1967',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/68.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
//         //         id: 'BSN59554936',
//         //         favorite: false,
//         //         course: 'Biology',
//         //         bgColor: '#d95404',
//         //         note: 'DTexmQn UZobRzw uRMVmPA lxaeiZD yzubkDh',
//         //         key: 38
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Vanessa Morgan',
//         //         city: 'Houston',
//         //         state: 'Florida',
//         //         country: 'United States',
//         //         postcode: 69723,
//         //         coordinates: {latitude: '-8.8001', longitude: '-168.5588'},
//         //         timezone: {offset: '+9:30', description: 'Adelaide, Darwin'},
//         //         email: 'vanessa.morgan@example.com',
//         //         bDate: '1955-11-22T15:47:38.848Z',
//         //         age: 66,
//         //         phone: '(835)-586-6028',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/69.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
//         //         id: 'SSN375-57-5719',
//         //         favorite: false,
//         //         course: 'Medicine',
//         //         bgColor: '#372f59',
//         //         note: 'JaWnnfh KIOYGnB JUcPopW xnRIleU uBjtjwe',
//         //         key: 39
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Ms',
//         //         fullName: 'آوینا سلطانی نژاد',
//         //         city: 'نیشابور',
//         //         state: 'همدان',
//         //         country: 'Iran',
//         //         postcode: 66423,
//         //         coordinates: {latitude: '7.6396', longitude: '-26.9170'},
//         //         timezone: {offset: '-8:00', description: 'Pacific Time (US & Canada)'},
//         //         email: 'awyn.sltnynjd@example.com',
//         //         bDate: '1994-08-26T17:01:22.484Z',
//         //         age: 27,
//         //         phone: '006-79317326',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/81.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
//         //         id: '35c17a14-aca2-4e5b-809e-4d584b6c8afb',
//         //         favorite: false,
//         //         course: 'Dancing',
//         //         bgColor: '#f7b9d8',
//         //         note: 'WresMvN zKQrOlj zBgvfdX TRkNYIO YIqurDF',
//         //         key: 40
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Oscar Dupont',
//         //         city: 'Grenoble',
//         //         state: 'Aveyron',
//         //         country: 'France',
//         //         postcode: 27916,
//         //         coordinates: {latitude: '32.9637', longitude: '-78.6173'},
//         //         timezone: {offset: '-11:00', description: 'Midway Island, Samoa'},
//         //         email: 'oscar.dupont@example.com',
//         //         bDate: '1951-01-16T07:15:43.883Z',
//         //         age: 70,
//         //         phone: '03-39-75-54-47',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/42.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
//         //         id: 'INSEE1NNaN6503478726',
//         //         favorite: true,
//         //         course: 'Statistics',
//         //         bgColor: '#ab5960',
//         //         note: 'vJsalZi rklUSZj SccQCJU VrVMvXl weDBlak',
//         //         key: 41
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Ms',
//         //         fullName: 'مهدیس مرادی',
//         //         city: 'ارومیه',
//         //         state: 'فارس',
//         //         country: 'Iran',
//         //         postcode: 84580,
//         //         coordinates: {latitude: '45.7509', longitude: '75.8284'},
//         //         timezone: {
//         //             offset: '+9:00',
//         //             description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk'
//         //         },
//         //         email: 'mhdys.mrdy@example.com',
//         //         bDate: '1952-10-04T09:02:09.900Z',
//         //         age: 69,
//         //         phone: '015-09271245',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/24.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
//         //         id: 'c86e5023-1cf1-44cb-be17-00fba5549406',
//         //         favorite: false,
//         //         course: 'Medicine',
//         //         bgColor: '#954f2a',
//         //         note: 'cpbcZWK vegvBNJ GwkrfCT wiacWOZ FKwbRAK',
//         //         key: 42
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Monsieur',
//         //         fullName: 'Noa Bertrand',
//         //         city: 'Reiden',
//         //         state: 'Schwyz',
//         //         country: 'Switzerland',
//         //         postcode: 9703,
//         //         coordinates: {latitude: '-74.4969', longitude: '-152.0049'},
//         //         timezone: {
//         //             offset: '-3:00',
//         //             description: 'Brazil, Buenos Aires, Georgetown'
//         //         },
//         //         email: 'noa.bertrand@example.com',
//         //         bDate: '1955-10-20T18:03:04.151Z',
//         //         age: 66,
//         //         phone: '078 301 62 63',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/4.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
//         //         id: 'AVS756.7424.4611.08',
//         //         favorite: false,
//         //         course: 'Chemistry',
//         //         bgColor: '#dca3a0',
//         //         note: 'kEygHhM BEgQume xelTdzF jcOuKgo BfPeWfm',
//         //         key: 43
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Jerrold Kliphuis',
//         //         city: 'Rheezerveen',
//         //         state: 'Noord-Holland',
//         //         country: 'Netherlands',
//         //         postcode: 76283,
//         //         coordinates: {latitude: '48.2285', longitude: '-79.7590'},
//         //         timezone: {offset: '+4:30', description: 'Kabul'},
//         //         email: 'jerrold.kliphuis@example.com',
//         //         bDate: '1968-03-24T06:29:47.075Z',
//         //         age: 53,
//         //         phone: '(018)-382-5902',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/74.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
//         //         id: 'BSN84507586',
//         //         favorite: false,
//         //         course: 'Chess',
//         //         bgColor: '#6761e1',
//         //         note: 'cygmliu IqDznnD NIhMNxi UolmAyS YxONSaN',
//         //         key: 44
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Miss',
//         //         fullName: 'Beatrice Bergeron',
//         //         city: 'Sutton',
//         //         state: 'Alberta',
//         //         country: 'Canada',
//         //         postcode: 'G1J 5T2',
//         //         coordinates: {latitude: '68.0346', longitude: '165.2673'},
//         //         timezone: {
//         //             offset: '-4:00',
//         //             description: 'Atlantic Time (Canada), Caracas, La Paz'
//         //         },
//         //         email: 'beatrice.bergeron@example.com',
//         //         bDate: '1957-01-28T03:46:41.370Z',
//         //         age: 64,
//         //         phone: '338-732-2677',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/3.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
//         //         id: 'fae403f2-abcd-46b7-8d83-6fa801716a0b',
//         //         favorite: false,
//         //         course: 'Biology',
//         //         bgColor: '#784d2',
//         //         note: 'mwtNhyD zsdAUDM yFLoXic SDuZKsV HtvVXIr',
//         //         key: 45
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Lucas Kristensen',
//         //         city: 'Allinge',
//         //         state: 'Sjælland',
//         //         country: 'Denmark',
//         //         postcode: 94452,
//         //         coordinates: {latitude: '-74.1864', longitude: '23.5624'},
//         //         timezone: {offset: '+9:30', description: 'Adelaide, Darwin'},
//         //         email: 'lucas.kristensen@example.com',
//         //         bDate: '1983-03-31T14:04:35.291Z',
//         //         age: 38,
//         //         phone: '67399596',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/3.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
//         //         id: 'CPR310383-9581',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#a32265',
//         //         note: 'lAfbqTx jqQApQN EoXclbD HVcgYBv LoDsrwV',
//         //         key: 46
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Eugene Kuhn',
//         //         city: 'St. Petersburg',
//         //         state: 'Florida',
//         //         country: 'United States',
//         //         postcode: 11620,
//         //         coordinates: {latitude: '41.6479', longitude: '-79.9292'},
//         //         timezone: {
//         //             offset: '+4:00',
//         //             description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
//         //         },
//         //         email: 'eugene.kuhn@example.com',
//         //         bDate: '1957-12-04T07:34:06.971Z',
//         //         age: 64,
//         //         phone: '(903)-380-2376',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/48.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/48.jpg',
//         //         id: 'SSN891-26-1846',
//         //         favorite: true,
//         //         course: 'English',
//         //         bgColor: '#2acbe4',
//         //         note: 'rKfiGHs PVtXivn exrxTSz JqivNKr ocuTADY',
//         //         key: 47
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Frederikke Sørensen',
//         //         city: 'Sønder Stenderup',
//         //         state: 'Sjælland',
//         //         country: 'Denmark',
//         //         postcode: 18668,
//         //         coordinates: {latitude: '-69.4969', longitude: '-146.2993'},
//         //         timezone: {offset: '+5:45', description: 'Kathmandu'},
//         //         email: 'frederikke.sorensen@example.com',
//         //         bDate: '1964-03-23T21:11:35.935Z',
//         //         age: 57,
//         //         phone: '07190090',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/28.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
//         //         id: 'CPR230364-8018',
//         //         favorite: true,
//         //         course: 'Physics',
//         //         bgColor: '#236d62',
//         //         note: 'VnBNfTD pXCqyBl KXSjxay SuWTbxk rhjHooQ',
//         //         key: 48
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Matteo Lecomte',
//         //         city: 'Courbevoie',
//         //         state: 'Charente',
//         //         country: 'France',
//         //         postcode: 89507,
//         //         coordinates: {latitude: '89.1833', longitude: '-4.8202'},
//         //         timezone: {offset: '+9:30', description: 'Adelaide, Darwin'},
//         //         email: 'matteo.lecomteexample.com',
//         //         bDate: '1948-05-30T04:28:42.593Z',
//         //         age: 73,
//         //         phone: '02-33-67-58-40',
//         //         pictureLarge: 'https://randomuser.me/api/portraits/men/57.jpg',
//         //         pictureThumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
//         //         id: 'INSEE1NNaN8470722961',
//         //         favorite: false,
//         //         course: 'Law',
//         //         bgColor: '#e9728',
//         //         note: 'RdUHOpj boAhNfb ZDtvxxY ZVUWkOk rEaUdXH',
//         //         key: 49
//         //     },
//         //     {
//         //         gender: 'male',
//         //         title: 'Mr',
//         //         fullName: 'Aaron Enoksen',
//         //         city: 'Bruflat',
//         //         state: 'Rogaland',
//         //         country: 'Norway',
//         //         postcode: '6913',
//         //         coordinates: {latitude: '51.4281', longitude: '-160.4653'},
//         //         timezone: {offset: '+3:30', description: 'Tehran'},
//         //         email: 'aaron.enoksen@example.com',
//         //         bDate: null,
//         //         age: null,
//         //         phone: null,
//         //         pictureLarge: null,
//         //         pictureThumbnail: null,
//         //         id: 'FN19068929566',
//         //         favorite: false,
//         //         course: null,
//         //         bgColor: '#dface7',
//         //         note: 'THyXxIe WMWAhNq HjAbYcV HvCUQkq qLupngl',
//         //         key: 50
//         //     },
//         //     {
//         //         gender: 'female',
//         //         title: 'Mrs',
//         //         fullName: 'Olivia Storm',
//         //         city: 'Kragerø',
//         //         state: null,
//         //         country: 'Norway',
//         //         postcode: '3127',
//         //         coordinates: {latitude: '57.2663', longitude: '141.0994'},
//         //         timezone: {
//         //             offset: '+1:00',
//         //             description: 'Brussels, Copenhagen, Madrid, Paris'
//         //         },
//         //         email: null,
//         //         bDate: null,
//         //         age: null,
//         //         phone: null,
//         //         pictureLarge: 'https://randomuser.me/api/portraits/women/67.jpg',
//         //         pictureThumbnail: null,
//         //         id: 'FN02064618043',
//         //         favorite: false,
//         //         course: 'chemistry',
//         //         bgColor: '#dface7',
//         //         note: 'old lady with a cats',
//         //         key: 51
//         //     }
//     ]
const countries = [
    {
        name: 'Afghanistan',
        code: 'AF',
        timezone: 'Afghanistan Standard Time',
        utc: 'UTC+04:30',
        mobileCode: '+93',
    },
    {
        name: 'Åland Islands',
        code: 'AX',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+358-18',
    },
    {
        name: 'Albania',
        code: 'AL',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+355',
    },
    {
        name: 'Algeria',
        code: 'DZ',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+213',
    },
    {
        name: 'American Samoa',
        code: 'AS',
        timezone: 'UTC-11',
        utc: 'UTC-11:00',
        mobileCode: '+1-684',
    },
    {
        name: 'Andorra',
        code: 'AD',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+376',
    },
    {
        name: 'Angola',
        code: 'AO',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+244',
    },
    {
        name: 'Anguilla',
        code: 'AI',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-264',
    },
    {
        name: 'Antarctica',
        code: 'AQ',
        timezone: 'Pacific SA Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+',
    },
    {
        name: 'Antigua and Barbuda',
        code: 'AG',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-268',
    },
    {
        name: 'Argentina',
        code: 'AR',
        timezone: 'Argentina Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+54',
    },
    {
        name: 'Armenia',
        code: 'AM',
        timezone: 'Caucasus Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+374',
    },
    {
        name: 'Aruba',
        code: 'AW',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+297',
    },
    {
        name: 'Australia',
        code: 'AU',
        timezone: 'AUS Eastern Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+61',
    },
    {
        name: 'Austria',
        code: 'AT',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+43',
    },
    {
        name: 'Azerbaijan',
        code: 'AZ',
        timezone: 'Azerbaijan Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+994',
    },
    {
        name: 'Bahamas, The',
        code: 'BS',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-242',
    },
    {
        name: 'Bahrain',
        code: 'BH',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+973',
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        timezone: 'Bangladesh Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+880',
    },
    {
        name: 'Barbados',
        code: 'BB',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-246',
    },
    {
        name: 'Belarus',
        code: 'BY',
        timezone: 'Belarus Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+375',
    },
    {
        name: 'Belgium',
        code: 'BE',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+32',
    },
    {
        name: 'Belize',
        code: 'BZ',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+501',
    },
    {
        name: 'Benin',
        code: 'BJ',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+229',
    },
    {
        name: 'Bermuda',
        code: 'BM',
        timezone: 'Atlantic Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-441',
    },
    {
        name: 'Bhutan',
        code: 'BT',
        timezone: 'Bangladesh Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+975',
    },
    {
        name: 'Bolivarian Republic of Venezuela',
        code: 'VE',
        timezone: 'Venezuela Standard Time',
        utc: 'UTC-04:30',
        mobileCode: '+58',
    },
    {
        name: 'Bolivia',
        code: 'BO',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+591',
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        code: 'BQ',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+599',
    },
    {
        name: 'Bosnia and Herzegovina',
        code: 'BA',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+387',
    },
    {
        name: 'Botswana',
        code: 'BW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+267',
    },
    {
        name: 'Bouvet Island',
        code: 'BV',
        timezone: 'UTC',
        utc: 'UTC',
        mobileCode: '+',
    },
    {
        name: 'Brazil',
        code: 'BR',
        timezone: 'E. South America Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+55',
    },
    {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+246',
    },
    {
        name: 'Brunei',
        code: 'BN',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+673',
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+359',
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+226',
    },
    {
        name: 'Burundi',
        code: 'BI',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+257',
    },
    {
        name: 'Cabo Verde',
        code: 'CV',
        timezone: 'Cape Verde Standard Time',
        utc: 'UTC-01:00',
        mobileCode: '+238',
    },
    {
        name: 'Cambodia',
        code: 'KH',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+855',
    },
    {
        name: 'Cameroon',
        code: 'CM',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+237',
    },
    {
        name: 'Canada',
        code: 'CA',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1',
    },
    {
        name: 'Cayman Islands',
        code: 'KY',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-345',
    },
    {
        name: 'Central African Republic',
        code: 'CF',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+236',
    },
    {
        name: 'Chad',
        code: 'TD',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+235',
    },
    {
        name: 'Chile',
        code: 'CL',
        timezone: 'Pacific SA Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+56',
    },
    {
        name: 'China',
        code: 'CN',
        timezone: 'China Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+86',
    },
    {
        name: 'Christmas Island',
        code: 'CX',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+61',
    },
    {
        name: 'Cocos (Keeling) Islands',
        code: 'CC',
        timezone: 'Myanmar Standard Time',
        utc: 'UTC+06:30',
        mobileCode: '+61',
    },
    {
        name: 'Colombia',
        code: 'CO',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+57',
    },
    {
        name: 'Comoros',
        code: 'KM',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+269',
    },
    {
        name: 'Congo',
        code: 'CG',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+242',
    },
    {
        name: 'Congo (DRC)',
        code: 'CD',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+243',
    },
    {
        name: 'Cook Islands',
        code: 'CK',
        timezone: 'Hawaiian Standard Time',
        utc: 'UTC-10:00',
        mobileCode: '+682',
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+506',
    },
    {
        name: "Côte d'Ivoire",
        code: 'CI',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+225',
    },
    {
        name: 'Croatia',
        code: 'HR',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+385',
    },
    {
        name: 'Cuba',
        code: 'CU',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+53',
    },
    {
        name: 'Curaçao',
        code: 'CW',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+599',
    },
    {
        name: 'Cyprus',
        code: 'CY',
        timezone: 'E. Europe Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+357',
    },
    {
        name: 'Czech Republic',
        code: 'CZ',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+420',
    },
    {
        name: 'Democratic Republic of Timor-Leste',
        code: 'TL',
        timezone: 'Tokyo Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+670',
    },
    {
        name: 'Denmark',
        code: 'DK',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+45',
    },
    {
        name: 'Djibouti',
        code: 'DJ',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+253',
    },
    {
        name: 'Dominica',
        code: 'DM',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-767',
    },
    {
        name: 'Dominican Republic',
        code: 'DO',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-809 and 1-829',
    },
    {
        name: 'Ecuador',
        code: 'EC',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+593',
    },
    {
        name: 'Egypt',
        code: 'EG',
        timezone: 'Egypt Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+20',
    },
    {
        name: 'El Salvador',
        code: 'SV',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+503',
    },
    {
        name: 'Equatorial Guinea',
        code: 'GQ',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+240',
    },
    {
        name: 'Eritrea',
        code: 'ER',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+291',
    },
    {
        name: 'Estonia',
        code: 'EE',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+372',
    },
    {
        name: 'Ethiopia',
        code: 'ET',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+251',
    },
    {
        name: 'Falkland Islands (Islas Malvinas)',
        code: 'FK',
        timezone: 'SA Eastern Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+500',
    },
    {
        name: 'Faroe Islands',
        code: 'FO',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+298',
    },
    {
        name: 'Fiji Islands',
        code: 'FJ',
        timezone: 'Fiji Standard Time',
        utc: 'UTC+12:00',
        mobileCode: '+679',
    },
    {
        name: 'Finland',
        code: 'FI',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+358',
    },
    {
        name: 'France',
        code: 'FR',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+33',
    },
    {
        name: 'French Guiana',
        code: 'GF',
        timezone: 'SA Eastern Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+594',
    },
    {
        name: 'French Polynesia',
        code: 'PF',
        timezone: 'Hawaiian Standard Time',
        utc: 'UTC-10:00',
        mobileCode: '+689',
    },
    {
        name: 'French Southern and Antarctic Lands',
        code: 'TF',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+',
    },
    {
        name: 'Gabon',
        code: 'GA',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+241',
    },
    {
        name: 'Gambia, The',
        code: 'GM',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+220',
    },
    {
        name: 'Georgia',
        code: 'GE',
        timezone: 'Georgian Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+995',
    },
    {
        name: 'Germany',
        code: 'DE',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+49',
    },
    {
        name: 'Ghana',
        code: 'GH',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+233',
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+350',
    },
    {
        name: 'Greece',
        code: 'GR',
        timezone: 'GTB Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+30',
    },
    {
        name: 'Greenland',
        code: 'GL',
        timezone: 'Greenland Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+299',
    },
    {
        name: 'Grenada',
        code: 'GD',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-473',
    },
    {
        name: 'Guadeloupe',
        code: 'GP',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+590',
    },
    {
        name: 'Guam',
        code: 'GU',
        timezone: 'West Pacific Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+1-671',
    },
    {
        name: 'Guatemala',
        code: 'GT',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+502',
    },
    {
        name: 'Guernsey',
        code: 'GG',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44-1481',
    },
    {
        name: 'Guinea',
        code: 'GN',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+224',
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+245',
    },
    {
        name: 'Guyana',
        code: 'GY',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+592',
    },
    {
        name: 'Haiti',
        code: 'HT',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+509',
    },
    {
        name: 'Heard Island and McDonald Islands',
        code: 'HM',
        timezone: 'Mauritius Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+ ',
    },
    {
        name: 'Honduras',
        code: 'HN',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+504',
    },
    {
        name: 'Hong Kong SAR',
        code: 'HK',
        timezone: 'China Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+852',
    },
    {
        name: 'Hungary',
        code: 'HU',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+36',
    },
    {
        name: 'Iceland',
        code: 'IS',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+354',
    },
    {
        name: 'India',
        code: 'IN',
        timezone: 'India Standard Time',
        utc: 'UTC+05:30',
        mobileCode: '+91',
    },
    {
        name: 'Indonesia',
        code: 'ID',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+62',
    },
    {
        name: 'Iran',
        code: 'IR',
        timezone: 'Iran Standard Time',
        utc: 'UTC+03:30',
        mobileCode: '+98',
    },
    {
        name: 'Iraq',
        code: 'IQ',
        timezone: 'Arabic Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+964',
    },
    {
        name: 'Ireland',
        code: 'IE',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+353',
    },
    {
        name: 'Israel',
        code: 'IL',
        timezone: 'Israel Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+972',
    },
    {
        name: 'Italy',
        code: 'IT',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+39',
    },
    {
        name: 'Jamaica',
        code: 'JM',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-876',
    },
    {
        name: 'Jan Mayen',
        code: 'SJ',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+47',
    },
    {
        name: 'Japan',
        code: 'JP',
        timezone: 'Tokyo Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+81',
    },
    {
        name: 'Jersey',
        code: 'JE',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44-1534',
    },
    {
        name: 'Jordan',
        code: 'JO',
        timezone: 'Jordan Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+962',
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+7',
    },
    {
        name: 'Kenya',
        code: 'KE',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+254',
    },
    {
        name: 'Kiribati',
        code: 'KI',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+686',
    },
    {
        name: 'Korea',
        code: 'KR',
        timezone: 'Korea Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+82',
    },
    {
        name: 'Kosovo',
        code: 'XK',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+',
    },
    {
        name: 'Kuwait',
        code: 'KW',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+965',
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        timezone: 'Central Asia Standard Time',
        utc: 'UTC+06:00',
        mobileCode: '+996',
    },
    {
        name: 'Laos',
        code: 'LA',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+856',
    },
    {
        name: 'Latvia',
        code: 'LV',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+371',
    },
    {
        name: 'Lebanon',
        code: 'LB',
        timezone: 'Middle East Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+961',
    },
    {
        name: 'Lesotho',
        code: 'LS',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+266',
    },
    {
        name: 'Liberia',
        code: 'LR',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+231',
    },
    {
        name: 'Libya',
        code: 'LY',
        timezone: 'E. Europe Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+218',
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+423',
    },
    {
        name: 'Lithuania',
        code: 'LT',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+370',
    },
    {
        name: 'Luxembourg',
        code: 'LU',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+352',
    },
    {
        name: 'Macao SAR',
        code: 'MO',
        timezone: 'China Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+853',
    },
    {
        name: 'Macedonia, Former Yugoslav Republic of',
        code: 'MK',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+389',
    },
    {
        name: 'Madagascar',
        code: 'MG',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+261',
    },
    {
        name: 'Malawi',
        code: 'MW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+265',
    },
    {
        name: 'Malaysia',
        code: 'MY',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+60',
    },
    {
        name: 'Maldives',
        code: 'MV',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+960',
    },
    {
        name: 'Mali',
        code: 'ML',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+223',
    },
    {
        name: 'Malta',
        code: 'MT',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+356',
    },
    {
        name: 'Man, Isle of',
        code: 'IM',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44-1624',
    },
    {
        name: 'Marshall Islands',
        code: 'MH',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+692',
    },
    {
        name: 'Martinique',
        code: 'MQ',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+596',
    },
    {
        name: 'Mauritania',
        code: 'MR',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+222',
    },
    {
        name: 'Mauritius',
        code: 'MU',
        timezone: 'Mauritius Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+230',
    },
    {
        name: 'Mayotte',
        code: 'YT',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+262',
    },
    {
        name: 'Mexico',
        code: 'MX',
        timezone: 'Central Standard Time (Mexico)',
        utc: 'UTC-06:00',
        mobileCode: '+52',
    },
    {
        name: 'Micronesia',
        code: 'FM',
        timezone: 'West Pacific Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+691',
    },
    {
        name: 'Moldova',
        code: 'MD',
        timezone: 'GTB Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+373',
    },
    {
        name: 'Monaco',
        code: 'MC',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+377',
    },
    {
        name: 'Mongolia',
        code: 'MN',
        timezone: 'Ulaanbaatar Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+976',
    },
    {
        name: 'Montenegro',
        code: 'ME',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+382',
    },
    {
        name: 'Montserrat',
        code: 'MS',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-664',
    },
    {
        name: 'Morocco',
        code: 'MA',
        timezone: 'Morocco Standard Time',
        utc: 'UTC',
        mobileCode: '+212',
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+258',
    },
    {
        name: 'Myanmar',
        code: 'MM',
        timezone: 'Myanmar Standard Time',
        utc: 'UTC+06:30',
        mobileCode: '+95',
    },
    {
        name: 'Namibia',
        code: 'NA',
        timezone: 'Namibia Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+264',
    },
    {
        name: 'Nauru',
        code: 'NR',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+674',
    },
    {
        name: 'Nepal',
        code: 'NP',
        timezone: 'Nepal Standard Time',
        utc: 'UTC+05:45',
        mobileCode: '+977',
    },
    {
        name: 'Netherlands',
        code: 'NL',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+31',
    },
    {
        name: 'New Caledonia',
        code: 'NC',
        timezone: 'Central Pacific Standard Time',
        utc: 'UTC+11:00',
        mobileCode: '+687',
    },
    {
        name: 'New Zealand',
        code: 'NZ',
        timezone: 'New Zealand Standard Time',
        utc: 'UTC+12:00',
        mobileCode: '+64',
    },
    {
        name: 'Nicaragua',
        code: 'NI',
        timezone: 'Central America Standard Time',
        utc: 'UTC-06:00',
        mobileCode: '+505',
    },
    {
        name: 'Niger',
        code: 'NE',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+227',
    },
    {
        name: 'Nigeria',
        code: 'NG',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+234',
    },
    {
        name: 'Niue',
        code: 'NU',
        timezone: 'UTC-11',
        utc: 'UTC-11:00',
        mobileCode: '+683',
    },
    {
        name: 'Norfolk Island',
        code: 'NF',
        timezone: 'Central Pacific Standard Time',
        utc: 'UTC+11:00',
        mobileCode: '+672',
    },
    {
        name: 'North Korea',
        code: 'KP',
        timezone: 'Korea Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+850',
    },
    {
        name: 'Northern Mariana Islands',
        code: 'MP',
        timezone: 'West Pacific Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+1-670',
    },
    {
        name: 'Norway',
        code: 'NO',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+47',
    },
    {
        name: 'Oman',
        code: 'OM',
        timezone: 'Arabian Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+968',
    },
    {
        name: 'Pakistan',
        code: 'PK',
        timezone: 'Pakistan Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+92',
    },
    {
        name: 'Palau',
        code: 'PW',
        timezone: 'Tokyo Standard Time',
        utc: 'UTC+09:00',
        mobileCode: '+680',
    },
    {
        name: 'Palestinian Authority',
        code: 'PS',
        timezone: 'Egypt Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+970',
    },
    {
        name: 'Panama',
        code: 'PA',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+507',
    },
    {
        name: 'Papua New Guinea',
        code: 'PG',
        timezone: 'West Pacific Standard Time',
        utc: 'UTC+10:00',
        mobileCode: '+675',
    },
    {
        name: 'Paraguay',
        code: 'PY',
        timezone: 'Paraguay Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+595',
    },
    {
        name: 'Peru',
        code: 'PE',
        timezone: 'SA Pacific Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+51',
    },
    {
        name: 'Philippines',
        code: 'PH',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+63',
    },
    {
        name: 'Pitcairn Islands',
        code: 'PN',
        timezone: 'Pacific Standard Time',
        utc: 'UTC-08:00',
        mobileCode: '+870',
    },
    {
        name: 'Poland',
        code: 'PL',
        timezone: 'Central European Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+48',
    },
    {
        name: 'Portugal',
        code: 'PT',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+351',
    },
    {
        name: 'Puerto Rico',
        code: 'PR',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-787 and 1-939',
    },
    {
        name: 'Qatar',
        code: 'QA',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+974',
    },
    {
        name: 'Reunion',
        code: 'RE',
        timezone: 'Mauritius Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+262',
    },
    {
        name: 'Romania',
        code: 'RO',
        timezone: 'GTB Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+40',
    },
    {
        name: 'Russia',
        code: 'RU',
        timezone: 'Russian Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+7',
    },
    {
        name: 'Rwanda',
        code: 'RW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+250',
    },
    {
        name: 'Saint Barthélemy',
        code: 'BL',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+590',
    },
    {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        code: 'SH',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+290',
    },
    {
        name: 'Saint Kitts and Nevis',
        code: 'KN',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-869',
    },
    {
        name: 'Saint Lucia',
        code: 'LC',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-758',
    },
    {
        name: 'Saint Martin (French part)',
        code: 'MF',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+590',
    },
    {
        name: 'Saint Pierre and Miquelon',
        code: 'PM',
        timezone: 'Greenland Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+508',
    },
    {
        name: 'Saint Vincent and the Grenadines',
        code: 'VC',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-784',
    },
    {
        name: 'Samoa',
        code: 'WS',
        timezone: 'Samoa Standard Time',
        utc: 'UTC+13:00',
        mobileCode: '+685',
    },
    {
        name: 'San Marino',
        code: 'SM',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+378',
    },
    {
        name: 'São Tomé and Príncipe',
        code: 'ST',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+239',
    },
    {
        name: 'Saudi Arabia',
        code: 'SA',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+966',
    },
    {
        name: 'Senegal',
        code: 'SN',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+221',
    },
    {
        name: 'Serbia',
        code: 'RS',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+381',
    },
    {
        name: 'Seychelles',
        code: 'SC',
        timezone: 'Mauritius Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+248',
    },
    {
        name: 'Sierra Leone',
        code: 'SL',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+232',
    },
    {
        name: 'Singapore',
        code: 'SG',
        timezone: 'Singapore Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+65',
    },
    {
        name: 'Sint Maarten (Dutch part)',
        code: 'SX',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+599',
    },
    {
        name: 'Slovakia',
        code: 'SK',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+421',
    },
    {
        name: 'Slovenia',
        code: 'SI',
        timezone: 'Central Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+386',
    },
    {
        name: 'Solomon Islands',
        code: 'SB',
        timezone: 'Central Pacific Standard Time',
        utc: 'UTC+11:00',
        mobileCode: '+677',
    },
    {
        name: 'Somalia',
        code: 'SO',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+252',
    },
    {
        name: 'South Africa',
        code: 'ZA',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+27',
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        code: 'GS',
        timezone: 'UTC-02',
        utc: 'UTC-02:00',
        mobileCode: '+',
    },
    {
        name: 'South Sudan',
        code: 'SS',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+211',
    },
    {
        name: 'Spain',
        code: 'ES',
        timezone: 'Romance Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+34',
    },
    {
        name: 'Sri Lanka',
        code: 'LK',
        timezone: 'Sri Lanka Standard Time',
        utc: 'UTC+05:30',
        mobileCode: '+94',
    },
    {
        name: 'Sudan',
        code: 'SD',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+249',
    },
    {
        name: 'Suriname',
        code: 'SR',
        timezone: 'SA Eastern Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+597',
    },
    {
        name: 'Svalbard',
        code: 'SJ',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+47',
    },
    {
        name: 'Swaziland',
        code: 'SZ',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+268',
    },
    {
        name: 'Sweden',
        code: 'SE',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+46',
    },
    {
        name: 'Switzerland',
        code: 'CH',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+41',
    },
    {
        name: 'Syria',
        code: 'SY',
        timezone: 'Syria Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+963',
    },
    {
        name: 'Taiwan',
        code: 'TW',
        timezone: 'Taipei Standard Time',
        utc: 'UTC+08:00',
        mobileCode: '+886',
    },
    {
        name: 'Tajikistan',
        code: 'TJ',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+992',
    },
    {
        name: 'Tanzania',
        code: 'TZ',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+255',
    },
    {
        name: 'Thailand',
        code: 'TH',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+66',
    },
    {
        name: 'Togo',
        code: 'TG',
        timezone: 'Greenwich Standard Time',
        utc: 'UTC',
        mobileCode: '+228',
    },
    {
        name: 'Tokelau',
        code: 'TK',
        timezone: 'Tonga Standard Time',
        utc: 'UTC+13:00',
        mobileCode: '+690',
    },
    {
        name: 'Tonga',
        code: 'TO',
        timezone: 'Tonga Standard Time',
        utc: 'UTC+13:00',
        mobileCode: '+676',
    },
    {
        name: 'Trinidad and Tobago',
        code: 'TT',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-868',
    },
    {
        name: 'Tunisia',
        code: 'TN',
        timezone: 'W. Central Africa Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+216',
    },
    {
        name: 'Turkey',
        code: 'TR',
        timezone: 'Turkey Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+90',
    },
    {
        name: 'Turkmenistan',
        code: 'TM',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+993',
    },
    {
        name: 'Turks and Caicos Islands',
        code: 'TC',
        timezone: 'Eastern Standard Time',
        utc: 'UTC-05:00',
        mobileCode: '+1-649',
    },
    {
        name: 'Tuvalu',
        code: 'TV',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+688',
    },
    {
        name: 'U.S. Minor Outlying Islands',
        code: 'UM',
        timezone: 'UTC-11',
        utc: 'UTC-11:00',
        mobileCode: '+1',
    },
    {
        name: 'Uganda',
        code: 'UG',
        timezone: 'E. Africa Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+256',
    },
    {
        name: 'Ukraine',
        code: 'UA',
        timezone: 'FLE Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+380',
    },
    {
        name: 'United Arab Emirates',
        code: 'AE',
        timezone: 'Arabian Standard Time',
        utc: 'UTC+04:00',
        mobileCode: '+971',
    },
    {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'GMT Standard Time',
        utc: 'UTC',
        mobileCode: '+44',
    },
    {
        name: 'United States',
        code: 'US',
        timezone: 'Pacific Standard Time',
        utc: 'UTC-08:00',
        mobileCode: '+1',
    },
    {
        name: 'Uruguay',
        code: 'UY',
        timezone: 'Montevideo Standard Time',
        utc: 'UTC-03:00',
        mobileCode: '+598',
    },
    {
        name: 'Uzbekistan',
        code: 'UZ',
        timezone: 'West Asia Standard Time',
        utc: 'UTC+05:00',
        mobileCode: '+998',
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        timezone: 'Central Pacific Standard Time',
        utc: 'UTC+11:00',
        mobileCode: '+678',
    },
    {
        name: 'Vatican City',
        code: 'VA',
        timezone: 'W. Europe Standard Time',
        utc: 'UTC+01:00',
        mobileCode: '+379',
    },
    {
        name: 'Vietnam',
        code: 'VN',
        timezone: 'SE Asia Standard Time',
        utc: 'UTC+07:00',
        mobileCode: '+84',
    },
    {
        name: 'Virgin Islands, U.S.',
        code: 'VI',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-340',
    },
    {
        name: 'Virgin Islands, British',
        code: 'VG',
        timezone: 'SA Western Standard Time',
        utc: 'UTC-04:00',
        mobileCode: '+1-284',
    },
    {
        name: 'Wallis and Futuna',
        code: 'WF',
        timezone: 'UTC+12',
        utc: 'UTC+12:00',
        mobileCode: '+681',
    },
    {
        name: 'Yemen',
        code: 'YE',
        timezone: 'Arab Standard Time',
        utc: 'UTC+03:00',
        mobileCode: '+967',
    },
    {
        name: 'Zambia',
        code: 'ZM',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+260',
    },
    {
        name: 'Zimbabwe',
        code: 'ZW',
        timezone: 'South Africa Standard Time',
        utc: 'UTC+02:00',
        mobileCode: '+263',
    },
]

/***/ }),

/***/ "./scripts/Filtration.js":
/*!*******************************!*\
  !*** ./scripts/Filtration.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setHandlerOnFilters: () => (/* binding */ setHandlerOnFilters)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTable.js */ "./scripts/fillTable.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");





function setHandlerOnFilters() {
    const filtersType = ['age', 'country', 'sex', 'pictureLarge', 'favorite']
    filtersType.forEach(type => handleChangeFilter(type))
}

function handleChangeFilter(type) {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.filters[type].onchange = event => {
        (0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_3__.getTeachers)().then(teachers => {
            filterCards(event, teachers, type)
        })
    }
}

function filterCards(event, teachers, type) {
    const value = event.target.value
    let filteredCards
    if (type === 'age') {
        filteredCards = filterCardsByAge(value, teachers)
    } else if (type === 'country') {
        filteredCards = filterCardsByCountry(value, teachers)
    } else if (type === 'sex') {
        filteredCards = filterCardsBySex(value, teachers)
    } else if (type === 'pictureLarge') {
        filteredCards = filterCardsByExistPhoto(event.target, teachers)
    } else {
        filteredCards = filterCardsByFavorite(event.target, teachers)
    }
    (0,_generateCards_js__WEBPACK_IMPORTED_MODULE_1__.displayCards)(filteredCards)
    ;(0,_fillTable_js__WEBPACK_IMPORTED_MODULE_2__.uploadDataToStatisticTable)(filteredCards)
}

function filterCardsByCountry(value, teachers) {
    if (value !== '')
        return _.filter(teachers, teacher => teacher.country === value)
    else
        return teachers
}

function filterCardsByAge(value, teachers) {
    if (value !== '') {
        const ages = value.split('-')
        const minAge = Number(ages[0])
        const maxAge = Number(ages[1])
        return _.filter(teachers, teacher => {
            return teacher.age >= minAge && teacher.age < maxAge
        })
    } else return teachers
}

function filterCardsBySex(value, teachers) {
    if (value !== '') {
        return _.filter(teachers, teacher => {
            return teacher.sex === value
        })
    } else return teachers
}

function filterCardsByExistPhoto(checkbox, teachers) {
    if (checkbox.checked)
        return _.filter(teachers, teacher => {
            return teacher.pictureLarge !== null
        })
    else return teachers
}

function filterCardsByFavorite(checkbox, teachers) {
    if (checkbox.checked)
        return _.filter(teachers, teacher => {
            return teacher.favorite
        })
    else return teachers
}

/***/ }),

/***/ "./scripts/Searching.js":
/*!******************************!*\
  !*** ./scripts/Searching.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   turnOnSearching: () => (/* binding */ turnOnSearching)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTable.js */ "./scripts/fillTable.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");





function turnOnSearching() {
    let searchValue = ''

    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.searchInput.oninput = (event) => {
        searchValue = event.target.value
    }

    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.searchTeacherButton.onclick = (event) => {
        ;(0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_3__.getTeachers)().then(teachers => {
            doSearch(event, teachers, searchValue)
        })
    }
}

function doSearch(event, teachers, searchValue) {
    event.preventDefault()
    const filteredCards = filterSearch(searchValue, teachers)
    ;(0,_fillTable_js__WEBPACK_IMPORTED_MODULE_2__.uploadDataToStatisticTable)(filteredCards)
    ;(0,_generateCards_js__WEBPACK_IMPORTED_MODULE_1__.displayCards)(filteredCards)
}

function filterSearch(searchValue, teachers) {
    const rgx = new RegExp(searchValue, 'i')
    return _.filter(teachers, teacher => {
        if (hasOnlyPositiveDigits(searchValue)) {
            return checkCardsByAge(searchValue, teacher)
        } else {
            return checkCardsByString(rgx, teacher, ['fullName', 'note'])
        }
    })
}

function hasOnlyPositiveDigits(value) {
    return /^\d+$/.test(value);
}

function checkCardsByString(rgx, teacher, arrayOfArgs) {
    let state = false
    _.every(arrayOfArgs, arg => {
        if (rgx.test(teacher[arg])) {
            state = true
            return false
        }
        return true
    })
    return state
}

function checkCardsByAge(searchValue, teacher) {
    return searchValue === teacher.age.toString()
}

/***/ }),

/***/ "./scripts/Sorting.js":
/*!****************************!*\
  !*** ./scripts/Sorting.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSortTable: () => (/* binding */ setSortTable)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillTable.js */ "./scripts/fillTable.js");



function setSortTable(teachers) {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.statisticTable.querySelectorAll(`th`).forEach((th) => {
        th.onclick = () => sortTable(th.getAttribute('data-value'), th, teachers)
    })
}


function sortTable(prop, th, teachers) {
    let sortedArray
    if (th.getAttribute('data-sort') === 'asc') {
        th.setAttribute('data-sort', 'dsc')
        sortedArray = _.sortBy(teachers, [`${prop}`])
    } else {
        th.setAttribute('data-sort', 'asc')
        sortedArray = _.reverse(_.sortBy(teachers, [`${prop}`]))
    }
    (0,_fillTable_js__WEBPACK_IMPORTED_MODULE_1__.uploadDataToStatisticTable)(sortedArray)
}

/***/ }),

/***/ "./scripts/addMoreTeachers.js":
/*!************************************!*\
  !*** ./scripts/addMoreTeachers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setHandlerOnMoreTeachersButton: () => (/* binding */ setHandlerOnMoreTeachersButton)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillTable.js */ "./scripts/fillTable.js");





function setHandlerOnMoreTeachersButton() {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.addMoreTeacherButton.addEventListener('click', () => {
        // domElements.addMoreTeacherButton.setAttribute('disabled', 'disabled')
        (0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_1__.getRandomTeachers)(10).then(randomTeachers => {
            (0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_1__.getTeachers)().then(teachers => {
                const Emails = new Set(teachers.map(obj => obj.email));
                const uniqueRandomTeachers = [...randomTeachers
                    .filter(teacher => !Emails.has(teacher.email))
                ];
                postUniqueTeachersOnServer(uniqueRandomTeachers)
            })
        })
        _.defer(() => {
            ;(0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_1__.getTeachers)().then(teachers => {
                ;(0,_generateCards_js__WEBPACK_IMPORTED_MODULE_2__.displayCards)(teachers)
                ;(0,_fillTable_js__WEBPACK_IMPORTED_MODULE_3__.uploadDataToStatisticTable)(teachers)
            })
        })
        // setTimeout(() => {
        //     domElements.addMoreTeacherButton.removeAttribute('disabled')
        // }, 5000)
    })
}

// const debounceAddMoreTeacher = _.debounce(() => {
//         getRandomTeachers(10).then(randomTeachers => {
//             getTeachers().then(teachers => {
//                 const Emails = new Set(teachers.map(obj => obj.email));
//                 const uniqueRandomTeachers = [...randomTeachers
//                     .filter(teacher => !Emails.has(teachers.email))
//                 ];
//                 postUniqueTeachersOnServer(uniqueRandomTeachers)
//             })
//         })
//         _.defer(() => {
//             getTeachers().then(teachers => {
//                 displayCards(teachers)
//                 uploadDataToStatisticTable(teachers)
//             })
//         })
//     })

function postUniqueTeachersOnServer(uniqueRandomTeachers) {
    uniqueRandomTeachers.forEach(teacher => {
        fetch('http://localhost:3000/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
        }).then(res => res.json())
            .catch(error => console.log(error))
    })
}


/***/ }),

/***/ "./scripts/addTeacherPopup.js":
/*!************************************!*\
  !*** ./scripts/addTeacherPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddTeacherForm: () => (/* binding */ handleAddTeacherForm)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _updateTeacher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTeacher.js */ "./scripts/updateTeacher.js");
/* harmony import */ var _fullCardPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullCardPopup.js */ "./scripts/fullCardPopup.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");






function handeCountryChange() {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.popupCountries.onchange = (event) => {
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.teacherPhone.value = _.find(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.countries, country => country.name === event.target.value).mobileCode
    }
}

function handleAddTeacherForm() {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.openAddTeacherFormButtons.forEach(a => handleClickOpenAddTeacherForm(a))
    handeCountryChange()
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.addTeacherSubmit.addEventListener('submit', (event) => {
        event.preventDefault()
        const teacher = {
            sex: document.querySelector('input[name="sex"]:checked').value,
            fullName: document.getElementById('name').value,
            city: document.getElementById('city').value,
            country: document.getElementById('form-country-list').value,
            speciality: document.getElementById('speciality').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            bDate: document.getElementById('birthday').value,
            favorite: false,
            key: _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards.childElementCount,
            note: document.getElementById('comment').value,
            bgColor: document.getElementById('favorite-color').value
        }

        const fullDataTeacher = (0,_updateTeacher_js__WEBPACK_IMPORTED_MODULE_2__.updateDataTeacher)(teacher)
        postTeacherOnServer()
        const teacherCard = (0,_generateCards_js__WEBPACK_IMPORTED_MODULE_1__.getCard)(fullDataTeacher)
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards.innerHTML += teacherCard
        const a = getANewCard()
        ;(0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_4__.getTeachers)().then(teachers => {
            ;(0,_fullCardPopup_js__WEBPACK_IMPORTED_MODULE_3__.createPopupOnAddedCard)(teachers, a)
            }
        )
        alert('New Teacher has been added')
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.addTeacherForm.style.display = 'none'
    })
}

function handleClickOpenAddTeacherForm(a) {
    a.onclick = () => {
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.teacherPhone.value = _.find(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.countries, country => country.name === 'Afghanistan').mobileCode
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.addTeacherForm.style.display = 'block'
        setHandleEventClose()
    }
}

function setHandleEventClose() {
    document.querySelectorAll('.close').forEach(a => handleClickCloseTeacherCard(a))
    window.onclick = function (event) {
        if (event.target.id === "myForm") {
            event.target.style.display = "none";
        }
    }
}

function handleClickCloseTeacherCard(a) {
    a.onclick = () => _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.addTeacherForm.style.display = 'none'
}

function postTeacherOnServer() {
    const formElements = document.getElementById('add-teacher-form')
    const formData = new FormData(formElements)
    const data = Object.fromEntries(formData)
    fetch('http://localhost:3000/teachers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .catch(error => console.log(error))
}

function getANewCard() {
    const nodes = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards
    const children = nodes.children
    const card = children[children.length - 1]
    const a = card.firstElementChild
    return a
}


/***/ }),

/***/ "./scripts/fillTable.js":
/*!******************************!*\
  !*** ./scripts/fillTable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRows: () => (/* binding */ createRows),
/* harmony export */   uploadDataToStatisticTable: () => (/* binding */ uploadDataToStatisticTable)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _managePiecharts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managePiecharts.js */ "./scripts/managePiecharts.js");


function uploadDataToStatisticTable(teachers) {
    const tableBody = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.statisticTableBody
    tableBody.innerHTML = createRows(teachers)
    if (_Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.divPiecharts.childElementCount===0)
        (0,_managePiecharts_js__WEBPACK_IMPORTED_MODULE_1__.addToPagePiecharts)()
    ;(0,_managePiecharts_js__WEBPACK_IMPORTED_MODULE_1__.createPiecharts)(teachers)
}
function createRows(teachers){
    let content =``
    teachers.forEach(teacher =>{
        content += `<tr>
                        <td>${teacher.fullName}</td>
                        <td>${teacher.speciality}</td>
                        <td>${teacher.age}</td>
                        <td>${teacher.sex}</td>
                        <td>${teacher.country}</td>
                    </tr>`
    })
    return content
}

/***/ }),

/***/ "./scripts/fullCardPopup.js":
/*!**********************************!*\
  !*** ./scripts/fullCardPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopupOnAddedCard: () => (/* binding */ createPopupOnAddedCard),
/* harmony export */   getTeachersForPopup: () => (/* binding */ getTeachersForPopup)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");
/* harmony import */ var _testMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testMap.js */ "./scripts/testMap.js");





let teachers

function getTeachersForPopup() {
    ;(0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_2__.getTeachers)().then(teachers => setTeachersOnPopup(teachers))
}

function setTeachersOnPopup(newTeachers) {
    teachers = newTeachers
    createPopup()
}

function createPopup() {
    document.querySelectorAll('.full-card-info').forEach(a => handleClickOpenTeacherCard(a))
}

function createPopupOnAddedCard(newTeachers, a) {
    teachers = newTeachers
    createPopup()
}

function handleClickOpenTeacherCard(a) {
    a.onclick = event => {
        const divCard = event.target.offsetParent
        const index = divCard.getAttribute('data-key')
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.teacherFullCard.innerHTML = getPopup(index)
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.teacherFullCard.style.display = 'block'
        setHandleEventClose()
        setHandleEventClickOnStar(index, divCard)
        setMutationObserver(divCard)
        setHandleEventClickOnMap(index)
    }
}

function setMutationObserver(divCard) {
    const config = {
        attributeFilter: ['class']
    }
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.target.classList.contains('star-card')) {
                const starImg = document.createElement('img')
                starImg.src = './Images/favorite.png'
                starImg.classList.add('star')
                starImg.alt = 'star'
                mutation.target.children[0].after(starImg)
            } else {
                if (mutation.target.children.length > 2)
                    mutation.target.children[1].remove()
            }
        }
    }

    const observer = new MutationObserver(callback);

    observer.observe(divCard, config);
}

function setHandleEventClose() {
    document.querySelectorAll('.close').forEach(a => handleClickCloseTeacherCard(a))
    window.onclick = function (event) {
        if (event.target.className === "teacher-info-popup") {
            event.target.style.display = "none";
        }
    }
}

function handleClickCloseTeacherCard(a) {
    a.onclick = () => _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.teacherFullCard.style.display = 'none'
}

function setHandleEventClickOnStar(index, divCard) {
    document.querySelectorAll('.teacher-card-star').forEach(img => handleClickOnStarTeacherCard(img, index, divCard))
}

function handleClickOnStarTeacherCard(img, index, divCard) {
    img.onclick = event => {
        if (event.target.classList.contains('not-favorite-star')) {
            event.target.classList.replace('not-favorite-star', 'favorite-star')
            event.target.src = './Images/favorite.png'
            teachers[index].favorite = true
            divCard.classList.add('star-card')
            ;(0,_generateCards_js__WEBPACK_IMPORTED_MODULE_1__.displayCards)(teachers)
        } else {
            event.target.classList.replace('favorite-star', 'not-favorite-star')
            event.target.src = './Images/not_favorite.png'
            teachers[index].favorite = false
            divCard.classList.remove('star-card')
            ;(0,_generateCards_js__WEBPACK_IMPORTED_MODULE_1__.displayCards)(teachers)
        }
        const state = {favorite: teachers[index].favorite}
        fetch(`http://localhost:3000/teachers/${teachers[index].id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then(res => res.json())
            .catch(error => console.log(error))
    }
}

function setHandleEventClickOnMap(index) {
    const a = document.getElementById('a-map')
    a.onclick = () => {
        const data = teachers[index].coordinates
        postCoordinatesOnServer(data)
        ;(0,_testMap_js__WEBPACK_IMPORTED_MODULE_3__.showMap)()
        const map = document.getElementById('map')
        map.removeAttribute('hidden')
    }
}

function postCoordinatesOnServer(data) {
    fetch('http://localhost:3000/coordinates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .catch(error => console.log(error))
}

function getPopup(index) {
    const teacher = teachers[index]
    const sex = teacher.sex
    const favorite = teacher.favorite

    let content = ``
    let email = ``
    let phone = ``
    let img = ''
    if (teacher.pictureLarge === null) {
        if (sex === 'male')
            img = './Images/man.jpg'
        else
            img = './Images/woman.jpg'
    } else
        img = teacher.pictureLarge

    if (teacher.email)
        email += `<a id="a-email" class="email" href="mailto:${teacher.email}">${teacher.email}</a>`
    else
        email += `<a id="a-email" class="email">no email address</a>`

    if (teacher.phone)
        phone += `<a id="a-phone" class="phone" href="tel:${teacher.phone}">${teacher.phone}</a>`
    else
        phone += `<a id="a-phone" class="phone">no mobile phone</a>`


    content += `<div class="teacher-info">
        <div class="info-header">
            <h3>Teacher Info</h3>
            <a class="close" href="#">&times;</a>
        </div>
        <div class="teacher-card-info">
            <div class="teacher-full-card">
                <img id="info-card-photo" class="photo" src="${img}" alt="${teacher.fullName}">
                <img id="info-card-star" class="star teacher-card-star ${favorite ? 'favorite-star' : 'not-favorite-star'}" src="${favorite ? "./Images/favorite.png" : "./Images/not_favorite.png"}" alt="star">
                <div class="card-info">
                    <h3 id="info-card-title">${teacher.fullName}</h3>
                    <p id="p-subject" class="subject">${teacher.speciality}</p>
                    <p id="p-address">${teacher?.city}, ${teacher?.country}</p>
                    <p id="p-per-data">${teacher.age}, ${sex}</p>
                    <p>${getDaysToBirthday(index)} days to next birthday</p>
                    ${email}
                    ${phone}
                </div>
            </div>
            <p id="p-comment">${teacher.note}</p>
            <a id="a-map" class="map-a">toggle map</a><!--target="_blank" href="./testMap.html-->
        </div>
        <div id="map" hidden></div>
    </div>`
    console.log(content)
    return content
}

function getDaysToBirthday(index) {
    const birthdayDate = dayjs(dayjs(teachers[index].bDate).format("MM-DD"))
    const dateNow = dayjs().format("MM-DD")
    if (dayjs(dateNow).isBefore(birthdayDate)) {
        return birthdayDate.diff(dateNow, 'days')
    } else {
        const fullDateNow = dayjs()
        const yearNow = Number(fullDateNow.format("YYYY"))
        const nextYear = (yearNow + 1).toString()
        const nextBirthdayDate = dayjs(`${nextYear}-${birthdayDate.format("MM-DD")}`)
        return nextBirthdayDate.diff(fullDateNow, 'days')
    }
}


/***/ }),

/***/ "./scripts/generateCards.js":
/*!**********************************!*\
  !*** ./scripts/generateCards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCards: () => (/* binding */ displayCards),
/* harmony export */   generateCards: () => (/* binding */ generateCards),
/* harmony export */   getCard: () => (/* binding */ getCard)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");
/* harmony import */ var _managePiecharts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managePiecharts.js */ "./scripts/managePiecharts.js");
/* harmony import */ var _fullCardPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullCardPopup.js */ "./scripts/fullCardPopup.js");




function displayCards(teachers) {
    if (teachers.length === 0) {
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards.innerHTML = `<h1>Teachers not found</h1>`
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.favoriteTeachers.innerHTML = `<h1>There aren't favorite teachers</h1>`
        _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.statisticTableBody.innerHTML = `<td colspan="5" style="text-align: center; font-size: 24px;">There isn't any data to upload to the table</td>`
        ;(0,_managePiecharts_js__WEBPACK_IMPORTED_MODULE_1__.removeFromPagePiecharts)()
    } else {
        if (numberFavoriteTeachers(teachers) === undefined) {
            _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.favoriteTeachers.innerHTML = `<h1>There aren't favorite teachers</h1>`
            displayTopCards(teachers)
        }
        else {
            displayFavoriteCards(teachers)
            displayTopCards(teachers)
        }
    }
    (0,_fullCardPopup_js__WEBPACK_IMPORTED_MODULE_2__.getTeachersForPopup)(teachers)
}

function numberFavoriteTeachers(teachers) {
    return _.find(teachers, teacher => teacher.favorite)
}

function displayTopCards(teachers) {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards.innerHTML = generateCards(teachers).join('')
}
function displayFavoriteCards(teachers) {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.favoriteTeachers.innerHTML = generateCards(teachers.filter(teacher => teacher.favorite)).join('')
}

function generateCards(teachers) {
    const cards = []

    for (let i = 0; i < teachers.length; i++) {
        const card = getCard(teachers[i])
        cards.push(card)
    }
    return cards
}

function getCard(teacher) {
    const teacherFullName = teacher.fullName.split(" ")
    const tName = teacherFullName[0]
    const tLastName = teacherFullName[1]

    let divClass = "card"
    let cardImg = ``
    let starImg = ``

    let cardContent = ``

    if (teacher.favorite === true) {
        divClass += " star-card"
        starImg += `<img class="star" src="./Images/favorite.png" alt="star">`
    }

    if (!teacher.pictureLarge)
        cardImg = `<p class="p-circle">${tName[0]}. ${tLastName[0]}</p>`
    else
        cardImg += `<img src="${teacher.pictureLarge}" alt="teachers photo">`

    cardContent += `
        <div class = "${divClass}" data-key="${teacher.id-1}">
            <a class="full-card-info" href="#">${cardImg}</a>
             ${starImg}
            <div class="card-info">
                <h3 class="card-name">${tName}</h3>
                <h3 class="card-lastName">${tLastName}</h3>
                <p class="subject">${teacher.speciality}</p>
                <p class="country">${teacher.country}</p>
            </div>
        </div>`
    return cardContent
}

/***/ }),

/***/ "./scripts/getCountries.js":
/*!*********************************!*\
  !*** ./scripts/getCountries.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCountries: () => (/* binding */ getCountries)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");


function getCountries() {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.countries.innerHTML = getOptions()
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.popupCountries.innerHTML = getOptions(true)
}

function getOptions(forPopup = false) {
    let options

    if (forPopup)
        options = ``
    else
        options = `<option value="" class="region-option">All</option>`

    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.countries.forEach(country => {
        options += `<option value="${country.name}" class="region-option">${country.name}</option>`
    })
    return options
}

/***/ }),

/***/ "./scripts/getTeachers.js":
/*!********************************!*\
  !*** ./scripts/getTeachers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomTeachers: () => (/* binding */ getRandomTeachers),
/* harmony export */   getTeachers: () => (/* binding */ getTeachers)
/* harmony export */ });
const specialities = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
    'Law', 'Art', 'Medicine', 'Statistics']
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

async function getTeachers() {
    const response = await fetch(`http://localhost:3000/teachers`)
    const teachers = await response.json()
    return teachers
}

async function getRandomTeachers(count){
    const response = await fetch(`https://randomuser.me/api/?results=${count}`)
    const teachers = await response.json()
    const convertedTeachers = convertRandomObj(teachers.results)
    return convertedTeachers
}

function convertRandomObj(usersObj) {
    return _.map(usersObj, user => {
        return {
            sex: user.gender,
            title: user.name.title,
            fullName: `${user.name.first} ${user.name.last}`,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            bDate: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            pictureLarge: user.picture.large,
            favorite: Math.random() < 0.3,
            speciality: specialities[Math.round(Math.random() * (specialities.length - 1))],
            bgColor: '#' + `${Math.floor(Math.random() * 16777215).toString(16)}`,
            note: generateString(7)
        }
    })
}

function generateString(length) {
    let string = ''
    for (let i = 0; i < length; i++) {
        let result = ''
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        if (i === length - 1)
            string += result
        else
            string += result + ' '
    }
    return string
}

/***/ }),

/***/ "./scripts/managePiecharts.js":
/*!************************************!*\
  !*** ./scripts/managePiecharts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToPagePiecharts: () => (/* binding */ addToPagePiecharts),
/* harmony export */   createPiecharts: () => (/* binding */ createPiecharts),
/* harmony export */   removeFromPagePiecharts: () => (/* binding */ removeFromPagePiecharts)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");


const charts = []

function createPiecharts(teachers) {
    charts.forEach(chart => chart.destroy())
    const typeOfCharts = ['speciality', 'age', 'sex', 'country']
    typeOfCharts.forEach(param => {
        const uniqueElements = [...new Set(teachers.map((item) => item[param]))]
        const yValues = []
        let barColors = []

        uniqueElements.forEach(element => {
            yValues.push(teachers.filter(teacher => teacher[param] === element).length)
            barColors = getColors(uniqueElements.length)
        })
        const chart = new Chart(`Chart-${param}`, {
            type: "pie",
            data: {
                labels: uniqueElements,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: `${param}`
                }
            }
        })
        charts.push(chart)
    })
}


function getColors(count) {
    const colors = new Set()
    while (colors.size < count)
        colors.add(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return [...colors]
}

function removeFromPagePiecharts() {
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.divPiecharts.innerHTML = ''
}
function addToPagePiecharts(){
    _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.divPiecharts.innerHTML =`
                <canvas id="Chart-speciality" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-age" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-sex" style="width:100%;max-width:600px"></canvas>
                <canvas id="Chart-country" style="width:100%;max-width:600px"></canvas>`
}


/***/ }),

/***/ "./scripts/testMap.js":
/*!****************************!*\
  !*** ./scripts/testMap.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMap: () => (/* binding */ showMap)
/* harmony export */ });
function showMap() {
    getCoordinates().then(response => setMap(response))
}

async function getCoordinates() {
    const response = await fetch('http://localhost:3000/coordinates')
    return response.json()
}

function setMap(coordinates) {
    const map = L.map('map').setView([coordinates.latitude, coordinates.longitude], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([coordinates.latitude, coordinates.longitude]).addTo(map)
        .bindPopup('I live here')
        .openPopup();
}

/***/ }),

/***/ "./scripts/updateTeacher.js":
/*!**********************************!*\
  !*** ./scripts/updateTeacher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateDataTeacher: () => (/* binding */ updateDataTeacher)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./scripts/Constants.js");


function updateDataTeacher(teacher) {
    teacher.title = ''
    teacher.state = null
    teacher.postcode = null
    teacher.coordinates = null
    teacher.timezone = null
    teacher.age = null
    teacher.pictureLarge = null
    teacher.pictureThumbnail = null
    teacher.id = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.domElements.topCards.childElementCount + 1
    return teacher
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./scripts/Main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCards.js */ "./scripts/generateCards.js");
/* harmony import */ var _Searching_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Searching.js */ "./scripts/Searching.js");
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTable.js */ "./scripts/fillTable.js");
/* harmony import */ var _Filtration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filtration.js */ "./scripts/Filtration.js");
/* harmony import */ var _getCountries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCountries.js */ "./scripts/getCountries.js");
/* harmony import */ var _addTeacherPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTeacherPopup.js */ "./scripts/addTeacherPopup.js");
/* harmony import */ var _getTeachers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getTeachers.js */ "./scripts/getTeachers.js");
/* harmony import */ var _addMoreTeachers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addMoreTeachers.js */ "./scripts/addMoreTeachers.js");
/* harmony import */ var _Sorting_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sorting.js */ "./scripts/Sorting.js");
/* harmony import */ var _fullCardPopup_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fullCardPopup.js */ "./scripts/fullCardPopup.js");











(0,_Filtration_js__WEBPACK_IMPORTED_MODULE_3__.setHandlerOnFilters)()
;(0,_Searching_js__WEBPACK_IMPORTED_MODULE_1__.turnOnSearching)()
;(0,_addTeacherPopup_js__WEBPACK_IMPORTED_MODULE_5__.handleAddTeacherForm)()
;(0,_getCountries_js__WEBPACK_IMPORTED_MODULE_4__.getCountries)()
;(0,_addMoreTeachers_js__WEBPACK_IMPORTED_MODULE_7__.setHandlerOnMoreTeachersButton)()

;(0,_getTeachers_js__WEBPACK_IMPORTED_MODULE_6__.getTeachers)().then(teachers => {
    ;(0,_generateCards_js__WEBPACK_IMPORTED_MODULE_0__.displayCards)(teachers)
    ;(0,_fillTable_js__WEBPACK_IMPORTED_MODULE_2__.uploadDataToStatisticTable)(teachers)
    ;(0,_Sorting_js__WEBPACK_IMPORTED_MODULE_8__.setSortTable)(teachers)
    ;(0,_fullCardPopup_js__WEBPACK_IMPORTED_MODULE_9__.getTeachersForPopup)(teachers)
})

})();

/******/ })()
;
//# sourceMappingURL=main.js.map