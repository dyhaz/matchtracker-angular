/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var workbox_expiration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var workbox_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var workbox_strategies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);





const componentName = 'Service Worker';
// Enable debug mode during development
const DEBUG_MODE = location.hostname.endsWith('.app.local') || location.hostname === 'localhost';
const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;
/**
 * The current version of the service worker.
 */
const SERVICE_WORKER_VERSION = '1.0.0';
if (DEBUG_MODE) {
    // tslint:disable-next-line:no-console
    console.debug(`Service worker version ${SERVICE_WORKER_VERSION} loading...`);
}
// -------------------------------------------------------------
// Precaching configuration
// -------------------------------------------------------------
Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"])();
// Precaching
// Make sure that all the assets passed in the array below are fetched and cached
// The empty array below is replaced at build time with the full list of assets to cache
// This is done by workbox-build-inject.js for the production build
const assetsToCache = [{"revision":"4e5b728e67fabc31e5dcb304eec66482","url":"3rdpartylicenses.txt"},{"revision":null,"url":"4-es2015.8414aab9e4d2c38a551d.js"},{"revision":null,"url":"5-es2015.d0097ffd6d889fe4ae24.js"},{"revision":null,"url":"6-es2015.30d17731eacd1cbdf4aa.js"},{"revision":"be797e95a3111680c6b1ad52f2675f26","url":"assets/css/about.css"},{"revision":"d6b6f27b8c55c4a28ae7e6870461cd86","url":"assets/css/fontawesome.css"},{"revision":"17e48b773f74b899f7c16b308350be8b","url":"assets/css/fontawesome.min.css"},{"revision":"64fef113e45a742dc24f054a3bc1b554","url":"assets/css/jquery-ui.min.css"},{"revision":"5581d20aa5062ed5c0b6048f68e76055","url":"assets/css/jquery-ui.structure.min.css"},{"revision":"5e16cc50b09467b6ea2f678af9afba5f","url":"assets/css/jquery-ui.theme.min.css"},{"revision":"06fd76c56815398d4e8a0771badea40d","url":"assets/css/lightbox.css"},{"revision":"5b2fd303b6f1a91723f3f051acdc35d1","url":"assets/css/loader.css"},{"revision":"482e4a71b3e3035a383d6ba23b04d829","url":"assets/css/materialize.css"},{"revision":"df8ee5622d9d736da06a6b0e7afdef55","url":"assets/css/materialize.min.css"},{"revision":"c8322bd5bffc8e2856f2cbcd03c61d18","url":"assets/css/owl.carousel.css"},{"revision":"b2752a850d44f50036628eeaef3bfcfa","url":"assets/css/owl.carousel.min.css"},{"revision":"6c830c91a0a08fca0fe883504abc7d2b","url":"assets/css/owl.theme.default.css"},{"revision":"594b81805a98b267e47c70a8fad30d9f","url":"assets/css/owl.theme.default.min.css"},{"revision":"4a37f8008959c75f619bf0a3a4e2d7a2","url":"assets/css/owl.video.play.png"},{"revision":"5d5db91d367be901fc72ad352556321f","url":"assets/css/style.css"},{"revision":"84ef60e19eea7781e34844e7dfd1507b","url":"assets/flapping/data.json"},{"revision":"45379de8ae63d490e0ee80e512aa7cf0","url":"assets/flapping/images/shared-0-sheet0.png"},{"revision":"e223272f30454b846b882f2459d6958f","url":"assets/flapping/images/shared-0-sheet1.png"},{"revision":"0c71fd1d1fbe8d72f844ac7c7eb1cb33","url":"assets/flapping/images/tiledbackground-sheet0.png"},{"revision":"ce8ce2074b536a909f94abc3b8ca69ed","url":"assets/flapping/images/tiledbackground2-sheet0.png"},{"revision":"d989b2c87b09a0df478ab37c3914a299","url":"assets/flapping/index.html"},{"revision":"2918d9b22b8179957efb265f2f843d18","url":"assets/flapping/offline.json"},{"revision":"18843836d065c8e291590ea7422d4b77","url":"assets/flapping/scripts/c3runtime.js"},{"revision":"578baa6aa9b08266ff123856124fc99c","url":"assets/flapping/scripts/dispatchworker.js"},{"revision":"44db3a1c0042c743a6a9811b99fd5e29","url":"assets/flapping/scripts/jobworker.js"},{"revision":"0ca098f906dc3ee602bb2e30efe4ca40","url":"assets/flapping/scripts/main.js"},{"revision":"1ffeef2ef3f12d371363b25f0ab976a1","url":"assets/flapping/scripts/offlineclient.js"},{"revision":"cf56020ad777a1c42416b8afa0d5ecdd","url":"assets/flapping/scripts/register-sw.js"},{"revision":"289a5a5e04f0541ede24bc1bf3144452","url":"assets/flapping/scripts/supportcheck.js"},{"revision":"00f3d903008509bb1d1d5684de9a6b9a","url":"assets/flapping/scripts/workermain.js"},{"revision":"a36d0f10a9e2743818f3c0642ab2ac34","url":"assets/flapping/style.css"},{"revision":"877baf6278a6f1506a07afd23b334f47","url":"assets/fonts/fa-brands-400.eot"},{"revision":"3e30e90a9ee4f94765599bcefd758cb3","url":"assets/fonts/fa-brands-400.svg"},{"revision":"418d54a4a9df0e7b3e28dc09e4cce808","url":"assets/fonts/fa-brands-400.ttf"},{"revision":"5e405c16c959bec402cc00609e9806f9","url":"assets/fonts/fa-brands-400.woff"},{"revision":"f80b8a05dd76fdb40e630f1e90b1303d","url":"assets/fonts/fa-brands-400.woff2"},{"revision":"ec813c5b36705e64ba121073b315cb52","url":"assets/fonts/fa-regular-400.eot"},{"revision":"e54c6ae126dd37d48c47dc1aa75cb54e","url":"assets/fonts/fa-regular-400.svg"},{"revision":"323b749d60730fa9ab61ff2d70e1cc32","url":"assets/fonts/fa-regular-400.ttf"},{"revision":"06b3153d3d537a854dc839652018bb87","url":"assets/fonts/fa-regular-400.woff"},{"revision":"569693c9f5d42d769c7f87b90856219a","url":"assets/fonts/fa-regular-400.woff2"},{"revision":"f9103ae53b2dbcb0a14605eebc90a2ce","url":"assets/fonts/fa-solid-900.eot"},{"revision":"1eba168c1b8603ab4dd282f5633d4650","url":"assets/fonts/fa-solid-900.svg"},{"revision":"b9c86e3abec102a2c9910dfac85c1c17","url":"assets/fonts/fa-solid-900.ttf"},{"revision":"686e245a4f1a9894d10a576655e932dd","url":"assets/fonts/fa-solid-900.woff"},{"revision":"59ea9019c9b9bc4d83ab9783e830735c","url":"assets/fonts/fa-solid-900.woff2"},{"revision":"9406d0ab606cf8cb91c41b65556bd836","url":"assets/fonts/Lobster-Regular.ttf"},{"revision":"2a82f89b0a35ee7f9d45ec2ec862f7b2","url":"assets/fonts/roboto/Roboto-Black.eot"},{"revision":"ab04c7611d94b690aee3c08a18ae8748","url":"assets/fonts/roboto/Roboto-Black.svg"},{"revision":"44236ad507eddcbfd986333f38bd13d5","url":"assets/fonts/roboto/Roboto-Black.ttf"},{"revision":"4c3b6229efe63a13dbb4c3c32e292e61","url":"assets/fonts/roboto/Roboto-Black.woff"},{"revision":"2b8d6922c2c9957356bc50f475de4e79","url":"assets/fonts/roboto/Roboto-Black.woff2"},{"revision":"4b7407c6740b8294d97a7bf88995c44d","url":"assets/fonts/roboto/Roboto-BlackItalic.eot"},{"revision":"1f37c7545ae9f63d2279f99875678396","url":"assets/fonts/roboto/Roboto-BlackItalic.svg"},{"revision":"ad0f284c7113fd0aaf39b0e59b6afb09","url":"assets/fonts/roboto/Roboto-BlackItalic.ttf"},{"revision":"3a99796b2d8592471fcf278df4334d5d","url":"assets/fonts/roboto/Roboto-BlackItalic.woff"},{"revision":"38d14dd4ff163c34e45b9701668652d4","url":"assets/fonts/roboto/Roboto-BlackItalic.woff2"},{"revision":"c8bcb1cb78f9e45e2bcbf626bae19f0b","url":"assets/fonts/roboto/Roboto-Bold.eot"},{"revision":"c7f4667b59b9bc95130e697009d3829c","url":"assets/fonts/roboto/Roboto-Bold.svg"},{"revision":"56a76a220d9c9765946d0802d4d661c4","url":"assets/fonts/roboto/Roboto-Bold.ttf"},{"revision":"ad140ff02a7091257e2b31619106194e","url":"assets/fonts/roboto/Roboto-Bold.woff"},{"revision":"ab96cca26751239828b8e9c524cca5bb","url":"assets/fonts/roboto/Roboto-Bold.woff2"},{"revision":"4b2cc52b05e2a960c4f11f15490d8a47","url":"assets/fonts/roboto/Roboto-BoldItalic.eot"},{"revision":"c2e0f75da3677f645034d61c0445c9ba","url":"assets/fonts/roboto/Roboto-BoldItalic.svg"},{"revision":"d23d5bdadc495f12ef69192243e95e4d","url":"assets/fonts/roboto/Roboto-BoldItalic.ttf"},{"revision":"a7dce23c0dd99a4afa5cdb4925f0358a","url":"assets/fonts/roboto/Roboto-BoldItalic.woff"},{"revision":"355e388740673054493ce5fe32e37596","url":"assets/fonts/roboto/Roboto-BoldItalic.woff2"},{"revision":"183079184d96a491f16e3cc70414975d","url":"assets/fonts/roboto/Roboto-Light.eot"},{"revision":"054fa50baa6598a7bf0c6deec135d3a4","url":"assets/fonts/roboto/Roboto-Light.svg"},{"revision":"a2b8c641546c0e5a95e22e5a262f0357","url":"assets/fonts/roboto/Roboto-Light.ttf"},{"revision":"37fbbbad5577a95bdf058307c717c882","url":"assets/fonts/roboto/Roboto-Light.woff"},{"revision":"8e0860f3581b197e9fa4713a706c7bcc","url":"assets/fonts/roboto/Roboto-Light.woff2"},{"revision":"cdd1c486770034a6122e28a1aa165373","url":"assets/fonts/roboto/Roboto-LightItalic.eot"},{"revision":"1a9e39e536aed26b863b243e68f97e3a","url":"assets/fonts/roboto/Roboto-LightItalic.svg"},{"revision":"056caeabe95749fe2b973bb9a0cd0776","url":"assets/fonts/roboto/Roboto-LightItalic.ttf"},{"revision":"c7b4e746cf8ecbf412fc944146154d24","url":"assets/fonts/roboto/Roboto-LightItalic.woff"},{"revision":"879d940bccbb25f6096ec4361154d469","url":"assets/fonts/roboto/Roboto-LightItalic.woff2"},{"revision":"76cad5ba6b8a38a77fe037807d2bc8e5","url":"assets/fonts/roboto/Roboto-Medium.eot"},{"revision":"2b4f394ce87ea4e7a68bd9d0cbba7c16","url":"assets/fonts/roboto/Roboto-Medium.svg"},{"revision":"c54f2a3ee42d2a58d82f1da293995d20","url":"assets/fonts/roboto/Roboto-Medium.ttf"},{"revision":"303ded6436dcf7ea75157e2aeff876ce","url":"assets/fonts/roboto/Roboto-Medium.woff"},{"revision":"2741a14e49524efa6059c735010239d0","url":"assets/fonts/roboto/Roboto-Medium.woff2"},{"revision":"7a49ce79b6089d4d37bf47225c7e5e32","url":"assets/fonts/roboto/Roboto-MediumItalic.eot"},{"revision":"eb65fb18d4446e4ac27d6e27c25fc224","url":"assets/fonts/roboto/Roboto-MediumItalic.svg"},{"revision":"fa183350bf6b814ae5523c8d49de7c73","url":"assets/fonts/roboto/Roboto-MediumItalic.ttf"},{"revision":"da059a7386fea889c55cce11253df175","url":"assets/fonts/roboto/Roboto-MediumItalic.woff"},{"revision":"f10d1f42838680a70ac2b66e62887106","url":"assets/fonts/roboto/Roboto-MediumItalic.woff2"},{"revision":"6a561d68369fd1fb9768cbc8641e5d95","url":"assets/fonts/roboto/Roboto-Regular.eot"},{"revision":"766c8926f6d9061fef24cd7269a341d0","url":"assets/fonts/roboto/Roboto-Regular.svg"},{"revision":"99b14f0da0591e0d71678dc163eaff8b","url":"assets/fonts/roboto/Roboto-Regular.ttf"},{"revision":"081b11ebaca8ad30fd092e01451015dc","url":"assets/fonts/roboto/Roboto-Regular.woff"},{"revision":"b2a6341ae7440130ec4b4b186aff8413","url":"assets/fonts/roboto/Roboto-Regular.woff2"},{"revision":"f3660f493ea5e520648477d2b273db32","url":"assets/fonts/roboto/Roboto-RegularItalic.eot"},{"revision":"527502d7927a41ca0b6a194f9cb34656","url":"assets/fonts/roboto/Roboto-RegularItalic.svg"},{"revision":"90dbf902b8d0592e1beb7c8829bcc1cb","url":"assets/fonts/roboto/Roboto-RegularItalic.ttf"},{"revision":"8add1ba317c27e39b7781c95fa174671","url":"assets/fonts/roboto/Roboto-RegularItalic.woff"},{"revision":"df8e3a9b9aed943417973988732b928f","url":"assets/fonts/roboto/Roboto-RegularItalic.woff2"},{"revision":"c25fd8d00fd9f570545d6240f6ec459a","url":"assets/fonts/roboto/Roboto-Thin.eot"},{"revision":"ba422f71e799f3d29cbf99e6abded2bd","url":"assets/fonts/roboto/Roboto-Thin.svg"},{"revision":"cc85ce37b4256966e6f3a3559239c5c0","url":"assets/fonts/roboto/Roboto-Thin.ttf"},{"revision":"90d3804f0231704c15ccc5861245e8ce","url":"assets/fonts/roboto/Roboto-Thin.woff"},{"revision":"790ebf41d0214f5eda4ef61263ed75f8","url":"assets/fonts/roboto/Roboto-Thin.woff2"},{"revision":"64ca718f48db91b27e8c134ad25d0066","url":"assets/fonts/roboto/Roboto-ThinItalic.eot"},{"revision":"21e9a2e5ed0b0d8d1bb7fd1e1f71104d","url":"assets/fonts/roboto/Roboto-ThinItalic.svg"},{"revision":"11b5cc9584f2c007a22966a031ead20e","url":"assets/fonts/roboto/Roboto-ThinItalic.ttf"},{"revision":"588293290e86dad97fcf33ed1719c083","url":"assets/fonts/roboto/Roboto-ThinItalic.woff"},{"revision":"8a2c1a5de09de8bb2c45390a10f90c2b","url":"assets/fonts/roboto/Roboto-ThinItalic.woff2"},{"revision":"664235b7372ebce32c51fe95bdee7d35","url":"assets/icons/icon-128x128.png"},{"revision":"3e99c91e118288cd9c616df93833bfc2","url":"assets/icons/icon-144x144.png"},{"revision":"f1af39e71e3077e25f7db94d17969dcd","url":"assets/icons/icon-152x152.png"},{"revision":"9d190ececb4e902acf423d89bcaddc17","url":"assets/icons/icon-192x192.png"},{"revision":"1c4276ce975b4f3bc8d1c70e461a7d67","url":"assets/icons/icon-384x384.png"},{"revision":"81dee309710e39ca92eaddf52196fa71","url":"assets/icons/icon-512x512.png"},{"revision":"4ccafc858331fd63534a6fb1fa9516f7","url":"assets/icons/icon-72x72.png"},{"revision":"64217d6c2d09996aa4c171ee8d37aca3","url":"assets/icons/icon-96x96.png"},{"revision":"4b6ada8dbd08e136b8ad80080094679d","url":"assets/icons/icon-alt-128x128.png"},{"revision":"c97ffa356058317fdb1803714bcb534e","url":"assets/icons/icon-alt-16x16.png"},{"revision":"12ded39e8b136e4d36ee3062347bed37","url":"assets/icons/icon-alt-24x24.png"},{"revision":"9855bd8e4737a28ab9622aee19ff14bb","url":"assets/icons/icon-alt-32x32.png"},{"revision":"fa76f4b576211ad3eecd6a825df475b1","url":"assets/icons/icon-alt-48x48.png"},{"revision":"81833318abbd78a7bf25b423be932201","url":"assets/icons/icon-alt-64x64.png"},{"revision":"0e9620434ceb56fa495c04caa11a36d0","url":"assets/icons/icon-alt-96x96.png"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/about.jpg"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/author.png"},{"revision":"3220d596eb46f7ff2f65354f242687a6","url":"assets/images/avatar.png"},{"revision":"219a08873930c93bf748b9493a7c77c6","url":"assets/images/bg-counter.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/blog1.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/blog2.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/blog3.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/blog4.jpg"},{"revision":"d9d2d0b1308cb694aa8116915592e2a9","url":"assets/images/close.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/comment1.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/comment2.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/comment3.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/comment4.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/comment5.png"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/course1.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/course2.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/course3.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/course4.jpg"},{"revision":"de6c07283e5745b5eaa4bea0b613691f","url":"assets/images/emblems/banner/BL1.png"},{"revision":"cd048656b29414e8c73f563f2ccbbe95","url":"assets/images/emblems/banner/CL.png"},{"revision":"09d99f77e2dc6513fddc51d4d828c08b","url":"assets/images/emblems/banner/DED.png"},{"revision":"330322b7a21780b6bf6b4f4ef95002a3","url":"assets/images/emblems/banner/FL1.png"},{"revision":"572efe19af3215fd0ebeba2f60d54ec3","url":"assets/images/emblems/banner/PD.png"},{"revision":"177c3f82f9fc9724acf8de821153af71","url":"assets/images/emblems/banner/PL.png"},{"revision":"0cef944507d0c83fff7f1801ce7c9f95","url":"assets/images/emblems/BL1.png"},{"revision":"ebda678aedffab14ecc7fcb80ec4f06d","url":"assets/images/emblems/CL.png"},{"revision":"c71d9191d7e2e5f965f633ad3a0368b0","url":"assets/images/emblems/DED.png"},{"revision":"51a00ca55757a9970a7e3ef0f1105590","url":"assets/images/emblems/FL1.png"},{"revision":"90b013a855039d686c78638f9f2252b3","url":"assets/images/emblems/PD.png"},{"revision":"158cca255c5b1577dcd35d17a4840d64","url":"assets/images/emblems/PL.png"},{"revision":"bb266c41316ba763bda7348731a8c0a7","url":"assets/images/emblems/smol/BL1.png"},{"revision":"00dcfe48d07525127cffc0a076973f96","url":"assets/images/emblems/smol/CL.png"},{"revision":"3e37d35e1fbfa7e5fd09c8beacc5432c","url":"assets/images/emblems/smol/DED.png"},{"revision":"330322b7a21780b6bf6b4f4ef95002a3","url":"assets/images/emblems/smol/FL1.png"},{"revision":"2bbe24376c448eb49468392d0641177f","url":"assets/images/emblems/smol/PD.png"},{"revision":"924ae4d36f9804cfbfa526f75887d9fa","url":"assets/images/emblems/smol/PL.png"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/event1.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/event2.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/event3.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/event4.jpg"},{"revision":"968a5130855094125dd9539abaa30a33","url":"assets/images/favicon.png"},{"revision":"4359c81503f839fe9be220abf634d890","url":"assets/images/flags/24px/AD.png"},{"revision":"d57de25007bc2c43379140916be3fb02","url":"assets/images/flags/24px/AE.png"},{"revision":"e82c9d3982f039e750d3c229fae2384c","url":"assets/images/flags/24px/AF.png"},{"revision":"e82c9d3982f039e750d3c229fae2384c","url":"assets/images/flags/24px/AFR.png"},{"revision":"e5bcd06ae3349455a64037da50b33aa3","url":"assets/images/flags/24px/AG.png"},{"revision":"713dc0e9894f89d3d9e530e0223851cf","url":"assets/images/flags/24px/AI.png"},{"revision":"f98426bd71c28c441c5b8b73707ab3ed","url":"assets/images/flags/24px/AL.png"},{"revision":"e1bba75cb0c84d710addd3e084b915e9","url":"assets/images/flags/24px/AM.png"},{"revision":"f831191df34f39dd2faab8f02812c075","url":"assets/images/flags/24px/AO.png"},{"revision":"af93b6fe3dbc0fff57641a06704928ea","url":"assets/images/flags/24px/AR.png"},{"revision":"af93b6fe3dbc0fff57641a06704928ea","url":"assets/images/flags/24px/ARG.png"},{"revision":"6fbaf249d2eb8894d3dfbdb3d8675939","url":"assets/images/flags/24px/AS.png"},{"revision":"7e692579ec87fc56eef7d0ef8bcfda45","url":"assets/images/flags/24px/AT.png"},{"revision":"accb694b81ee7fb71c85df3aa4678b79","url":"assets/images/flags/24px/AU.png"},{"revision":"accb694b81ee7fb71c85df3aa4678b79","url":"assets/images/flags/24px/AUS.png"},{"revision":"7e692579ec87fc56eef7d0ef8bcfda45","url":"assets/images/flags/24px/AUT.png"},{"revision":"4993a31f4d7f05d9aa526d573279c629","url":"assets/images/flags/24px/AW.png"},{"revision":"9617785d5e6cfa3e7538c959211c574d","url":"assets/images/flags/24px/AX.png"},{"revision":"3453846949286a47b2b5c70a2650920a","url":"assets/images/flags/24px/AZ.png"},{"revision":"9bb6fab951f805da6a0d5041d360ef60","url":"assets/images/flags/24px/BA.png"},{"revision":"040665858ec58394d67f7a0e51172b1d","url":"assets/images/flags/24px/BB.png"},{"revision":"596a08a8db6de33279fa4c7f8e0abc51","url":"assets/images/flags/24px/BD.png"},{"revision":"c39cc1fbbb04215224d6a89deaa7c3f0","url":"assets/images/flags/24px/BE.png"},{"revision":"504800cd0bd680f3e2d5fc2c53884d3c","url":"assets/images/flags/24px/BF.png"},{"revision":"7d8a9f7a99dd21b42a38a5398a95302d","url":"assets/images/flags/24px/BG.png"},{"revision":"e886213fb79585ce3a2a3fac05a92f8f","url":"assets/images/flags/24px/BH.png"},{"revision":"87a25d3b25563074615e7827083473a9","url":"assets/images/flags/24px/BI.png"},{"revision":"b025dc89b95ceb0c56ad38633ae4b970","url":"assets/images/flags/24px/BJ.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/BL.png"},{"revision":"82f5b7b0e2ef65ed8a55031bb532b25c","url":"assets/images/flags/24px/BM.png"},{"revision":"fc1a9fdaca32866e970c9fb576d3b008","url":"assets/images/flags/24px/BN.png"},{"revision":"a20e045812bc11b441b49b548c8a2a0a","url":"assets/images/flags/24px/BO.png"},{"revision":"78bde75967a92f1a1dac7e5dbe797af9","url":"assets/images/flags/24px/BQ.png"},{"revision":"f3d420c18dd55639e05a3b13501abf6d","url":"assets/images/flags/24px/BR.png"},{"revision":"c560af4a10dabf070d38ac8917517ba6","url":"assets/images/flags/24px/BS.png"},{"revision":"4f9efbc706748d7470d9cdb0d6704e54","url":"assets/images/flags/24px/BT.png"},{"revision":"41330dbf2c933c4dce112eda3741e2af","url":"assets/images/flags/24px/BV.png"},{"revision":"8fe497512e0472c7c7ef13e89ff5de8a","url":"assets/images/flags/24px/BW.png"},{"revision":"7ab0480c9b9648af4fe8d889cba71708","url":"assets/images/flags/24px/BY.png"},{"revision":"5d081df0666069ddad9d072f31ac832b","url":"assets/images/flags/24px/BZ.png"},{"revision":"c2743951c446d923c47ef59818efa749","url":"assets/images/flags/24px/CA.png"},{"revision":"23a8df30661bdd02a8794ab424d9a0f3","url":"assets/images/flags/24px/CC.png"},{"revision":"67ac07bd7ec0996d3bf5eb5ca46cb9ad","url":"assets/images/flags/24px/CD.png"},{"revision":"800d51f49de5aa6abd75b46d3d9130d7","url":"assets/images/flags/24px/CF.png"},{"revision":"8c74cbfd066f78aec6ddd4eb59f6e91e","url":"assets/images/flags/24px/CG.png"},{"revision":"6e476b83a6b22ebd8822f44e880fe822","url":"assets/images/flags/24px/CH.png"},{"revision":"5052ce143daa1aa471f1082873b730b2","url":"assets/images/flags/24px/CI.png"},{"revision":"b4691abec869ac0167a7ba5c7ffbb498","url":"assets/images/flags/24px/CK.png"},{"revision":"1af43e365e0a91dd9b30a9c716603306","url":"assets/images/flags/24px/CL.png"},{"revision":"05cba27f7555aba07ad3a580b3efc73a","url":"assets/images/flags/24px/CM.png"},{"revision":"1b831ff151afffa9965a81629afd897d","url":"assets/images/flags/24px/CN.png"},{"revision":"dbb8aaff892530b65b5eb6d6b06412b1","url":"assets/images/flags/24px/CO.png"},{"revision":"9f0a7af94feccd02c0c92b34544658d9","url":"assets/images/flags/24px/CR.png"},{"revision":"b71c044d1e4e6ecc1742c7e2c9ed6644","url":"assets/images/flags/24px/CU.png"},{"revision":"8157c748df12226b3f45c9f6840959a5","url":"assets/images/flags/24px/CV.png"},{"revision":"b407d2c1268c3f6a0de90c2dec2100e5","url":"assets/images/flags/24px/CW.png"},{"revision":"4d80f7ae6338caf47726468b14a336eb","url":"assets/images/flags/24px/CX.png"},{"revision":"73fe45f248a7e5f40e2149e9b7144332","url":"assets/images/flags/24px/CY.png"},{"revision":"a7b579d60251e736537a38c5cf5b0450","url":"assets/images/flags/24px/CZ.png"},{"revision":"fafbdbc70853394d6628f72a0d3377b4","url":"assets/images/flags/24px/DE.png"},{"revision":"fafbdbc70853394d6628f72a0d3377b4","url":"assets/images/flags/24px/DEU.png"},{"revision":"52d4471183b0aae00bfed6bac16a8871","url":"assets/images/flags/24px/DJ.png"},{"revision":"cab2751b8ad6161f75c0274a8e401837","url":"assets/images/flags/24px/DK.png"},{"revision":"72e9450beabfd62759c147310761db55","url":"assets/images/flags/24px/DM.png"},{"revision":"919f236ca0929c9abfb70916fc8df6b1","url":"assets/images/flags/24px/DO.png"},{"revision":"de4428460077e12d33a847cf687ff824","url":"assets/images/flags/24px/DZ.png"},{"revision":"190b828d53bee100865ed0a3a4c07275","url":"assets/images/flags/24px/EC.png"},{"revision":"b0fdc775364ef732ef3baeb2adc563b6","url":"assets/images/flags/24px/EE.png"},{"revision":"979b474db3e33df6d69b60afdef4790d","url":"assets/images/flags/24px/EG.png"},{"revision":"f0a390a9d5e8aea55c88db496a7491f8","url":"assets/images/flags/24px/ER.png"},{"revision":"a7b8aaae1e6d63d2f513b0a2751e4225","url":"assets/images/flags/24px/ES.png"},{"revision":"a7b8aaae1e6d63d2f513b0a2751e4225","url":"assets/images/flags/24px/ESP.png"},{"revision":"0b8325527c71e4e9b6dfed7a1a4ca91f","url":"assets/images/flags/24px/ET.png"},{"revision":"763c389c38961bfd04af6d5404542544","url":"assets/images/flags/24px/EUR.png"},{"revision":"0b84ffcfb042b474088e12b3b2d81d77","url":"assets/images/flags/24px/FI.png"},{"revision":"5b8ee4cb90eba9a38426e15d374bcfa1","url":"assets/images/flags/24px/FJ.png"},{"revision":"edb0eac894485e45b4703fc5ac1eb085","url":"assets/images/flags/24px/FK.png"},{"revision":"02b05018e1f6b87a8e26a0e69108eaa1","url":"assets/images/flags/24px/FM.png"},{"revision":"3f57a216ec45da07a058af8ba12a8263","url":"assets/images/flags/24px/FO.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/FR.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/FRA.png"},{"revision":"b12c0c33eb1966aa7d966fc0dcba989e","url":"assets/images/flags/24px/GA.png"},{"revision":"d455e898c835bafaa8d79800ca076bec","url":"assets/images/flags/24px/GB.png"},{"revision":"73d193d73dd8e9ef480178c460b75311","url":"assets/images/flags/24px/GD.png"},{"revision":"deadd39c2c1309b39b8fa3236af6182f","url":"assets/images/flags/24px/GE.png"},{"revision":"64b3cca79cb9508d38fee0259db8925e","url":"assets/images/flags/24px/GF.png"},{"revision":"747a8c2560540c8d8def36cabad38da5","url":"assets/images/flags/24px/GG.png"},{"revision":"d2806ce5b48aac31b7e9fd72db498b4f","url":"assets/images/flags/24px/GH.png"},{"revision":"2d701535eba1a8dbb1a76fcb41f6e44b","url":"assets/images/flags/24px/GI.png"},{"revision":"0d9e8bfbc77f52067a5e9a616a003d8d","url":"assets/images/flags/24px/GL.png"},{"revision":"816f3b19bdafdd4eb3427f9a56918dc1","url":"assets/images/flags/24px/GM.png"},{"revision":"dd76597c3d0cc67a548fddca755ba17b","url":"assets/images/flags/24px/GN.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/GP.png"},{"revision":"6ec2107aef4ee060f4057305560447b1","url":"assets/images/flags/24px/GQ.png"},{"revision":"d529b07635ab923c84bbce8631a1b895","url":"assets/images/flags/24px/GR.png"},{"revision":"2362c924e6360c103c917e84ae6cb95e","url":"assets/images/flags/24px/GS.png"},{"revision":"cbf88a8bc847bcec86f8d49ff8cc253d","url":"assets/images/flags/24px/GT.png"},{"revision":"7331a6642254619320e0b8df3cfdffdc","url":"assets/images/flags/24px/GU.png"},{"revision":"b658b19ef2c32f82b4ab5516f4ab6c66","url":"assets/images/flags/24px/GW.png"},{"revision":"383b0df3c16688d49b841a4c74b76eb1","url":"assets/images/flags/24px/GY.png"},{"revision":"d06f0533edeb691194a6c868653b84e4","url":"assets/images/flags/24px/HK.png"},{"revision":"7afbcfc2e5ca15dad070ed2af3ed15db","url":"assets/images/flags/24px/HN.png"},{"revision":"d6c4181aedfd3d0a9b0ae42a19581520","url":"assets/images/flags/24px/HR.png"},{"revision":"876d2e52caf51d6f2ef6b2f1b75908d4","url":"assets/images/flags/24px/HT.png"},{"revision":"968db7b18f27750f59758d32baea071a","url":"assets/images/flags/24px/HU.png"},{"revision":"815678323d35533373fb526bc77f8126","url":"assets/images/flags/24px/ID.png"},{"revision":"815678323d35533373fb526bc77f8126","url":"assets/images/flags/24px/IDN.png"},{"revision":"9cc81ceaa85b7af4b8e4d08ba88885dd","url":"assets/images/flags/24px/IE.png"},{"revision":"1ea29078818b1252a0375be7d42d4f30","url":"assets/images/flags/24px/IL.png"},{"revision":"055aeb90928acec035a0a5c9245374d9","url":"assets/images/flags/24px/IM.png"},{"revision":"22c243350b5550a606bac6f2ce44355f","url":"assets/images/flags/24px/IN.png"},{"revision":"46f4b9bafa72b50c41f65f894443fcd2","url":"assets/images/flags/24px/IO.png"},{"revision":"b8e8c3b519305c8614da2a6919dbc7d3","url":"assets/images/flags/24px/IQ.png"},{"revision":"6e06331cf48547fc1f80135c25d573b6","url":"assets/images/flags/24px/IR.png"},{"revision":"784975999ab7be7341736ebc84d67e6c","url":"assets/images/flags/24px/IS.png"},{"revision":"55ef5cf853e2f2d18d0731eb3960b79d","url":"assets/images/flags/24px/IT.png"},{"revision":"bd2c8c5317e2ea382e31cd14fc6dcd73","url":"assets/images/flags/24px/JE.png"},{"revision":"b3ba061e6bc46f7de5e02b0b6893bcfa","url":"assets/images/flags/24px/JM.png"},{"revision":"cae4fc27f38fa77670956a27947cef54","url":"assets/images/flags/24px/JO.png"},{"revision":"1b9a07e5c6dc4c8a4ff2ba7af5f394e2","url":"assets/images/flags/24px/JP.png"},{"revision":"63ed30bd718600b2809f39a0639fbd19","url":"assets/images/flags/24px/KE.png"},{"revision":"8debeb8478da40fa380e426b4ea1fb1f","url":"assets/images/flags/24px/KG.png"},{"revision":"4ccba18f5fa55ee72bd3fbba0b5cceab","url":"assets/images/flags/24px/KH.png"},{"revision":"3004eebca1c4f58e0f493e41bc48e42f","url":"assets/images/flags/24px/KI.png"},{"revision":"071de6210e137e272ca30c6ea209a0c7","url":"assets/images/flags/24px/KM.png"},{"revision":"d36a3c6369e1b356014c006983fbb18c","url":"assets/images/flags/24px/KN.png"},{"revision":"355bc57c451cc5eb1f3fd151af3e6027","url":"assets/images/flags/24px/KP.png"},{"revision":"55b2e7775eb741d8cb34a1432a862783","url":"assets/images/flags/24px/KR.png"},{"revision":"412c6f4adbfdb23edab9c6ca9d1fa26d","url":"assets/images/flags/24px/KW.png"},{"revision":"3ba3c110526d63059fa1b7275c38efa9","url":"assets/images/flags/24px/KY.png"},{"revision":"fb21e2b518f4907c9fd972d20b424ddd","url":"assets/images/flags/24px/KZ.png"},{"revision":"a49cc32a2008efd9aa02200e7d9519dc","url":"assets/images/flags/24px/LA.png"},{"revision":"920b4c6eb0531c6bc80af0540ef10cca","url":"assets/images/flags/24px/LB.png"},{"revision":"607e84fd21e99e00cc0c08329936c3e0","url":"assets/images/flags/24px/LC.png"},{"revision":"b982f645972f17b908c3009a3f3af10a","url":"assets/images/flags/24px/LI.png"},{"revision":"8098fee751ee4aa59c867eaf0347e273","url":"assets/images/flags/24px/LK.png"},{"revision":"b265cc0038d10cca1b428bc9e176a448","url":"assets/images/flags/24px/LR.png"},{"revision":"2ba7012b5b037d2c4b69b4b28f0c1074","url":"assets/images/flags/24px/LS.png"},{"revision":"e323993c94955060bb4646357a6237c8","url":"assets/images/flags/24px/LT.png"},{"revision":"e1b685c3ccb095555f2688a10c391ff2","url":"assets/images/flags/24px/LU.png"},{"revision":"652352ab1ef7995ae60fdc20ebd1b100","url":"assets/images/flags/24px/LV.png"},{"revision":"6eb859e5663a1785a57f6b770c586941","url":"assets/images/flags/24px/LY.png"},{"revision":"469b2856195fe28c2aa87284614703fd","url":"assets/images/flags/24px/MA.png"},{"revision":"db896604e53d6dd5b7af4bf3a5c0daf5","url":"assets/images/flags/24px/MC.png"},{"revision":"05e898b839c5144619f5fb786dadf81d","url":"assets/images/flags/24px/MD.png"},{"revision":"2edb715fddc64ea2293fe60ad83e4f89","url":"assets/images/flags/24px/ME.png"},{"revision":"83359f0739f71530de12cdd01263d21f","url":"assets/images/flags/24px/MG.png"},{"revision":"7c49ae1dd7d134ea7a76cff3ffb581c6","url":"assets/images/flags/24px/MH.png"},{"revision":"d07c23fe38200715ac9df03ede67e17f","url":"assets/images/flags/24px/MK.png"},{"revision":"e8fcb3631b97671f6eaa2c189caee452","url":"assets/images/flags/24px/ML.png"},{"revision":"9aeb6216ff64fbd38cd485d3e7160243","url":"assets/images/flags/24px/MM.png"},{"revision":"ba37aa96b660b98320c7d27b126f51a6","url":"assets/images/flags/24px/MN.png"},{"revision":"71972ac2aed218d832084be5fc49a5e9","url":"assets/images/flags/24px/MO.png"},{"revision":"de7d8eb2dde5244f917535d9a5defbff","url":"assets/images/flags/24px/MP.png"},{"revision":"342ece24728574b79b33f084cf85f092","url":"assets/images/flags/24px/MQ.png"},{"revision":"22bc88263324bf3e18f8815d49398077","url":"assets/images/flags/24px/MR.png"},{"revision":"b76e8d52ac90142319957e2bdd776885","url":"assets/images/flags/24px/MS.png"},{"revision":"d028b7c82ad9706f002b6f677b4af8b7","url":"assets/images/flags/24px/MT.png"},{"revision":"8cbf58fe663eb683d9a248ce050e604c","url":"assets/images/flags/24px/MU.png"},{"revision":"2f749a84e95b7e2e4759ba2077c289b4","url":"assets/images/flags/24px/MV.png"},{"revision":"e57a3dc4b20944ab1d9833fd920be6ff","url":"assets/images/flags/24px/MW.png"},{"revision":"ddda6e6036671caada1e9f2015e0f961","url":"assets/images/flags/24px/MX.png"},{"revision":"4d2ef894b449c6f0f55ec08145294464","url":"assets/images/flags/24px/MY.png"},{"revision":"656bedcd11c01148f2d202ee932be6a5","url":"assets/images/flags/24px/MZ.png"},{"revision":"1c6ca92144a8ba853552a5384df7b76f","url":"assets/images/flags/24px/NA.png"},{"revision":"21bef7def8e458bc7ed153200f79d0dc","url":"assets/images/flags/24px/NC.png"},{"revision":"5abe40b827dd6cd3eb478161396ec37e","url":"assets/images/flags/24px/NE.png"},{"revision":"a8db1f28a63ccee1652dbf89ce4ddcac","url":"assets/images/flags/24px/NF.png"},{"revision":"dc5365f84db0374942a3e2b2c5eeec44","url":"assets/images/flags/24px/NG.png"},{"revision":"40248ca280d753d55cc1b78e351492ac","url":"assets/images/flags/24px/NI.png"},{"revision":"ad4291741d8d4953e960405cf31220d1","url":"assets/images/flags/24px/NL.png"},{"revision":"ad4291741d8d4953e960405cf31220d1","url":"assets/images/flags/24px/NLD.png"},{"revision":"9fcf6705b2cf1fa3da0021e223c99661","url":"assets/images/flags/24px/NO.png"},{"revision":"e87b989e50e9b6319f0354c8f63cee46","url":"assets/images/flags/24px/NP.png"},{"revision":"f9823fa0ff8d7ef2e1db8659b3f3bf7e","url":"assets/images/flags/24px/NR.png"},{"revision":"0f4c183fdb6ec80c6fbc2f54af00e518","url":"assets/images/flags/24px/NU.png"},{"revision":"d4bdea289efe5785034404e6dea62d17","url":"assets/images/flags/24px/NZ.png"},{"revision":"6980b749f1631bbb1ad96efa8b672087","url":"assets/images/flags/24px/OM.png"},{"revision":"0b676a4e40005ddc2f2684f3eb22de2a","url":"assets/images/flags/24px/PA.png"},{"revision":"99e43ccb452cf87b8527acd21c24312f","url":"assets/images/flags/24px/PE.png"},{"revision":"f14497cf5b8698af1afc5415ed5ccecb","url":"assets/images/flags/24px/PF.png"},{"revision":"cd03b310d6f08a0173e0eb84edd98e7a","url":"assets/images/flags/24px/PG.png"},{"revision":"c414591df93cef8e557bcc53bcc99ce7","url":"assets/images/flags/24px/PH.png"},{"revision":"f7b374c388e56d52e1f79ac177bd9dd9","url":"assets/images/flags/24px/PK.png"},{"revision":"5e696185b87742d72ae0981481047fa5","url":"assets/images/flags/24px/PL.png"},{"revision":"8cd976e41f757e4674e6d8206baf4421","url":"assets/images/flags/24px/PM.png"},{"revision":"ec0a834a7202aa41d42a4af1cc381a97","url":"assets/images/flags/24px/PN.png"},{"revision":"1fb0c1174b38264345b1bc319410a9c0","url":"assets/images/flags/24px/PR.png"},{"revision":"fe66051cec392556783aea89788c03e1","url":"assets/images/flags/24px/PS.png"},{"revision":"620baeafa10f77ea953e6a0f1f810a8c","url":"assets/images/flags/24px/PT.png"},{"revision":"48350abfeed9c17a6b78b03a3a926047","url":"assets/images/flags/24px/PW.png"},{"revision":"747b5c5996305d0358e1d1dbe44843a1","url":"assets/images/flags/24px/PY.png"},{"revision":"49c88dae1ed8a25f3916f938b5eaf8db","url":"assets/images/flags/24px/QA.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/RE.png"},{"revision":"2ddaf83c4e1da9a80179cff4a868b2b2","url":"assets/images/flags/24px/RO.png"},{"revision":"e6dcf15d62bcfc9f7b7328fb43a89f35","url":"assets/images/flags/24px/RS.png"},{"revision":"9b7ef637532dc2ae24bf7ceb8543b194","url":"assets/images/flags/24px/RU.png"},{"revision":"77d45a8ca2d4440f4cd07f89b3281c06","url":"assets/images/flags/24px/RW.png"},{"revision":"7906b0caa1b9faf31a0e79103140278e","url":"assets/images/flags/24px/SA.png"},{"revision":"21c8d381a88777544e1ef35ae45b9e22","url":"assets/images/flags/24px/SB.png"},{"revision":"17205020f4d411b2d8255424af5afe11","url":"assets/images/flags/24px/SC.png"},{"revision":"3a7b922cac919ef07f24c2524db4d93e","url":"assets/images/flags/24px/SD.png"},{"revision":"6e8bba4492d46675396c3f7fb61dca90","url":"assets/images/flags/24px/SE.png"},{"revision":"21d96759c919f6f358936d1e862ba9df","url":"assets/images/flags/24px/SG.png"},{"revision":"d455e898c835bafaa8d79800ca076bec","url":"assets/images/flags/24px/SH.png"},{"revision":"e53fd79caeda439eefa6159a86b3d91e","url":"assets/images/flags/24px/SI.png"},{"revision":"3fbf574e592f62d231e4457a1283702f","url":"assets/images/flags/24px/SK.png"},{"revision":"b372693f77b03f00a81cfba80e4c64a6","url":"assets/images/flags/24px/SL.png"},{"revision":"5a431e5a05df5e991198af7b6bdf30e3","url":"assets/images/flags/24px/SM.png"},{"revision":"b05bce7fe672108138328a67e9cfb13f","url":"assets/images/flags/24px/SN.png"},{"revision":"f3e13f2f3e28ff9b57de27d39e6c63ec","url":"assets/images/flags/24px/SO.png"},{"revision":"3ecbe3b383337a803830ccb94d404a12","url":"assets/images/flags/24px/SR.png"},{"revision":"7b930932da7763271919148471b0c101","url":"assets/images/flags/24px/SS.png"},{"revision":"8315118bf5fb7e82b511192e0690f62b","url":"assets/images/flags/24px/ST.png"},{"revision":"2ffcab0eccf8ee3c51365e0eb09c8d79","url":"assets/images/flags/24px/SV.png"},{"revision":"ab800d2ca515e05ba7ac04a80f5a772a","url":"assets/images/flags/24px/SX.png"},{"revision":"2165cfed092af9f8865db043af61dc94","url":"assets/images/flags/24px/SY.png"},{"revision":"d3013045fd9a03c9fe30dc39a978d85e","url":"assets/images/flags/24px/SZ.png"},{"revision":"7b7c54745974e6790abab3cdcc81608e","url":"assets/images/flags/24px/TC.png"},{"revision":"56340a64a2f721dd300eb28fc1f915b1","url":"assets/images/flags/24px/TD.png"},{"revision":"962a6af0268e8041a7ceb069a95318c6","url":"assets/images/flags/24px/TF.png"},{"revision":"fc759544ee69945ef5ce7b60d5b5204c","url":"assets/images/flags/24px/TG.png"},{"revision":"ac6896b211b6e57bcce3ced85058950e","url":"assets/images/flags/24px/TH.png"},{"revision":"52f1b3ae06874224204245d5013509b8","url":"assets/images/flags/24px/TJ.png"},{"revision":"b15a9cad5da9e3b578e4a7ee4933dc3b","url":"assets/images/flags/24px/TK.png"},{"revision":"60c726b2d8deea5161f9d1fb06ff2575","url":"assets/images/flags/24px/TL.png"},{"revision":"3e70669d72cc2b36a2ad70ac9dbfe710","url":"assets/images/flags/24px/TM.png"},{"revision":"e712f1eeede2fd6e60b0b2ca88213596","url":"assets/images/flags/24px/TN.png"},{"revision":"bc55b7977c7f681f327c3982c098aee4","url":"assets/images/flags/24px/TO.png"},{"revision":"307807804497010b7780db3d6a51ad4a","url":"assets/images/flags/24px/TR.png"},{"revision":"a655bb86b5fdcc71ec5608bcd0954a70","url":"assets/images/flags/24px/TT.png"},{"revision":"80931fa264add4649d0a5116a2d4187c","url":"assets/images/flags/24px/TV.png"},{"revision":"f4706e92bfc988b499a2dad96f2a4065","url":"assets/images/flags/24px/TW.png"},{"revision":"ede573306b5314df2f6da9316ad0fd72","url":"assets/images/flags/24px/TZ.png"},{"revision":"5880998828e3ce09d0e840f2f3692ff3","url":"assets/images/flags/24px/UA.png"},{"revision":"971551d00d9ad32e15727c3522398dad","url":"assets/images/flags/24px/UG.png"},{"revision":"70f724f6d4e48d1a1b667d409d4a9374","url":"assets/images/flags/24px/UM.png"},{"revision":"70f724f6d4e48d1a1b667d409d4a9374","url":"assets/images/flags/24px/US.png"},{"revision":"2fe5cfacb7f6fdb4432db919e12a0680","url":"assets/images/flags/24px/UY.png"},{"revision":"5b8bc021b6f6bf5696bc45e0e0866640","url":"assets/images/flags/24px/UZ.png"},{"revision":"55b73f0bea53ca037d4528382cdcee89","url":"assets/images/flags/24px/VA.png"},{"revision":"8660ffc74b3a2e51930778276ddc454a","url":"assets/images/flags/24px/VC.png"},{"revision":"054afd096287bc1e1476b887f82b98ef","url":"assets/images/flags/24px/VE.png"},{"revision":"39afc17aafb3bd361f62438307ac8be9","url":"assets/images/flags/24px/VG.png"},{"revision":"0a4bad0f9d3b8b020cebeecf4ae1901f","url":"assets/images/flags/24px/VI.png"},{"revision":"415ae9783d099f374ea18e75186f499f","url":"assets/images/flags/24px/VN.png"},{"revision":"af7624a749be2c59eadc3748c2ee96fd","url":"assets/images/flags/24px/VU.png"},{"revision":"460e9a385d45d16b40c129f3b7a7246f","url":"assets/images/flags/24px/WALES.png"},{"revision":"1e07996fab365e7c25213e820be79d30","url":"assets/images/flags/24px/WF.png"},{"revision":"31ba9f11492a268dbf6a22257d7a65df","url":"assets/images/flags/24px/WS.png"},{"revision":"0aa3ba81d8caa9098b6e0d0db867089a","url":"assets/images/flags/24px/YE.png"},{"revision":"2b444612161cd659e6b6c817c7207cb0","url":"assets/images/flags/24px/YT.png"},{"revision":"1288176a94c0c8940baa7cb39d938373","url":"assets/images/flags/24px/ZA.png"},{"revision":"511b6256ff0e667b14ede082def85f01","url":"assets/images/flags/24px/ZM.png"},{"revision":"90aabdecd334b795d5d5f0b12092ff32","url":"assets/images/flags/24px/ZW.png"},{"revision":"6a5ba16a1fdf2c6fc4dbc41811e9a78f","url":"assets/images/flags/48px/AD.png"},{"revision":"0faee4138a2bb1d14cd770f89c8574c3","url":"assets/images/flags/48px/AE.png"},{"revision":"23fa7a777dd66688fc0cb5824a14884c","url":"assets/images/flags/48px/AF.png"},{"revision":"23fa7a777dd66688fc0cb5824a14884c","url":"assets/images/flags/48px/AFR.png"},{"revision":"4e5ced90e43cfd9d782a6d3a3000588c","url":"assets/images/flags/48px/AG.png"},{"revision":"8b22d01e6cdf2d5712bd2877e32a4b15","url":"assets/images/flags/48px/AI.png"},{"revision":"fb773dfb81aeafc1bfd8b3cc4631f27d","url":"assets/images/flags/48px/AL.png"},{"revision":"06d0a3390b60780fe1eb3698440c27c6","url":"assets/images/flags/48px/AM.png"},{"revision":"8a874e00cfb1b1b03830c7ba837ccc91","url":"assets/images/flags/48px/AO.png"},{"revision":"a9b75bdd7aa26df1a6b37b98e385ded8","url":"assets/images/flags/48px/AR.png"},{"revision":"a9b75bdd7aa26df1a6b37b98e385ded8","url":"assets/images/flags/48px/ARG.png"},{"revision":"b91f387aa8ad3433ca84a2e7117086a7","url":"assets/images/flags/48px/AS.png"},{"revision":"faa3c28e2f2052eecf89c501277d33d6","url":"assets/images/flags/48px/AT.png"},{"revision":"7f36fe5660f76ad79bdf0e60b7bd0cf0","url":"assets/images/flags/48px/AU.png"},{"revision":"7f36fe5660f76ad79bdf0e60b7bd0cf0","url":"assets/images/flags/48px/AUS.png"},{"revision":"faa3c28e2f2052eecf89c501277d33d6","url":"assets/images/flags/48px/AUT.png"},{"revision":"f9922d8a43e0333acf6221598b13598e","url":"assets/images/flags/48px/AW.png"},{"revision":"8523804a281a9383a1a9b5bc4a57c70a","url":"assets/images/flags/48px/AX.png"},{"revision":"79fe04e56a57ed0a22dca0fc3969101d","url":"assets/images/flags/48px/AZ.png"},{"revision":"6c480b8c37f81c8f7dace018901db915","url":"assets/images/flags/48px/BA.png"},{"revision":"c4401d73290fc979aa3beeff61c1760e","url":"assets/images/flags/48px/BB.png"},{"revision":"021e14ce03670d95235b54688efdcfb8","url":"assets/images/flags/48px/BD.png"},{"revision":"37936b5df1febd460e7745f8fb91f47d","url":"assets/images/flags/48px/BE.png"},{"revision":"c71e547b2dc55f246dc34aacc8eb12bd","url":"assets/images/flags/48px/BF.png"},{"revision":"ce9acf0054e6091e4f6136652bdb39af","url":"assets/images/flags/48px/BG.png"},{"revision":"47a36783273d2a5450caa6e89853d46a","url":"assets/images/flags/48px/BH.png"},{"revision":"dcda5c385ae0344ee201c58371eed998","url":"assets/images/flags/48px/BI.png"},{"revision":"2f52e570a8900de8606503352bc1580b","url":"assets/images/flags/48px/BJ.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/BL.png"},{"revision":"4f6eec903c06e7dd67f0c94f3124906b","url":"assets/images/flags/48px/BM.png"},{"revision":"7ba03a7db04f81a4f071a97bd3feecca","url":"assets/images/flags/48px/BN.png"},{"revision":"cb6bc2a3290f9f44b9fafd82013b4dd1","url":"assets/images/flags/48px/BO.png"},{"revision":"a4127f30e96c1cde6e69569dd7da77ec","url":"assets/images/flags/48px/BQ.png"},{"revision":"2f65347a2f692cb6da31cbf48d9c5639","url":"assets/images/flags/48px/BR.png"},{"revision":"8fa035a2eb3bfb49e3a010f40a5737b2","url":"assets/images/flags/48px/BS.png"},{"revision":"020b1b9e4528ee0faf2536a21c72fb11","url":"assets/images/flags/48px/BT.png"},{"revision":"215b9c827edc9afcae0696844a65dd98","url":"assets/images/flags/48px/BV.png"},{"revision":"54a34ab65517c172aa4624d9f2c233ab","url":"assets/images/flags/48px/BW.png"},{"revision":"1890d0dbfae5b8833eff46fa8d0cfeec","url":"assets/images/flags/48px/BY.png"},{"revision":"0183f6f883ea02b6c71da6abdfa4a6e4","url":"assets/images/flags/48px/BZ.png"},{"revision":"0d149e80ed0884dc95198990b50ac112","url":"assets/images/flags/48px/CA.png"},{"revision":"9148f39f04750337d9183497205f6af0","url":"assets/images/flags/48px/CC.png"},{"revision":"454a0222d31a8280659b58b0274096ad","url":"assets/images/flags/48px/CD.png"},{"revision":"ef8a6302c3360059dc4eeedf01ef1d89","url":"assets/images/flags/48px/CF.png"},{"revision":"f152beb66ce2efe34a857ed7e8f5ebcf","url":"assets/images/flags/48px/CG.png"},{"revision":"c5ebf65b6aff6229517fcff3c2c972e9","url":"assets/images/flags/48px/CH.png"},{"revision":"b33a3cf993f56ad6727a928da786d9bc","url":"assets/images/flags/48px/CI.png"},{"revision":"5497e825ff2b5d89be83fdb51648282a","url":"assets/images/flags/48px/CK.png"},{"revision":"20b48860cf6099a7bd3b0c7cb94a8906","url":"assets/images/flags/48px/CL.png"},{"revision":"63ed324f41f2e377b57602ccbe6cb2f4","url":"assets/images/flags/48px/CM.png"},{"revision":"610ccbf9d77232ff4ea4e79d74e414c3","url":"assets/images/flags/48px/CN.png"},{"revision":"c42703f741cec62c56dcfb402492f9ed","url":"assets/images/flags/48px/CO.png"},{"revision":"f6611c3bbfc042bbbe96ed455ba68e6f","url":"assets/images/flags/48px/CR.png"},{"revision":"b4ccca27910584cda29bd6f3a01d5399","url":"assets/images/flags/48px/CU.png"},{"revision":"5ffc4270ee66174c62f28a4d84bf5980","url":"assets/images/flags/48px/CV.png"},{"revision":"eb2ef43e5484951a06ccdbe15904bc02","url":"assets/images/flags/48px/CW.png"},{"revision":"6a2490e2e3974678cc0fea31a9f111aa","url":"assets/images/flags/48px/CX.png"},{"revision":"6c34ae0ad83fd689a83af88f044284f1","url":"assets/images/flags/48px/CY.png"},{"revision":"36fcb48fd80526ba01b8fb0b6dd690c3","url":"assets/images/flags/48px/CZ.png"},{"revision":"80cccb9dd4f7dbfe71119b4e2efb87e1","url":"assets/images/flags/48px/DE.png"},{"revision":"80cccb9dd4f7dbfe71119b4e2efb87e1","url":"assets/images/flags/48px/DEU.png"},{"revision":"619de9ae3d52a8eedb9aad747763befc","url":"assets/images/flags/48px/DJ.png"},{"revision":"837df7f8b289397ac54d561baaa3352c","url":"assets/images/flags/48px/DK.png"},{"revision":"f6e8ea0551d3e283da0640807c760384","url":"assets/images/flags/48px/DM.png"},{"revision":"a69edeeb1d9777100e031ce180940e81","url":"assets/images/flags/48px/DO.png"},{"revision":"55ce0563da2c449f88143b1bde3a9132","url":"assets/images/flags/48px/DZ.png"},{"revision":"13e278ed6396f1b0bc712959d11ec105","url":"assets/images/flags/48px/EC.png"},{"revision":"0d136ef2548c69b80a9431fbc01937f0","url":"assets/images/flags/48px/EE.png"},{"revision":"e3e10c414b33403eafd93b4a9a87329c","url":"assets/images/flags/48px/EG.png"},{"revision":"de31e706dd039d68661af5c92f2637ea","url":"assets/images/flags/48px/ER.png"},{"revision":"2c1771785425fa6948ea16848ccf9148","url":"assets/images/flags/48px/ESP.png"},{"revision":"efde27761ae75fd05d90433f34044e1f","url":"assets/images/flags/48px/ET.png"},{"revision":"4ed0016f37403911b54d3a4b2357fd77","url":"assets/images/flags/48px/EUR.png"},{"revision":"16fa47cf699f577abb39516aeae4860c","url":"assets/images/flags/48px/FI.png"},{"revision":"696ead62d4154ca1732de62353c5446e","url":"assets/images/flags/48px/FJ.png"},{"revision":"0413ff331f26e071efff61a6f18f796a","url":"assets/images/flags/48px/FK.png"},{"revision":"48cfe10c906f0d036c0eb8b6ed784cd1","url":"assets/images/flags/48px/FM.png"},{"revision":"6dd4dc8d822ef0ddd6d22bb5d91c36f3","url":"assets/images/flags/48px/FO.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/FR.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/FRA.png"},{"revision":"8eade7c001f731504cbdcb9427c1cdd5","url":"assets/images/flags/48px/GA.png"},{"revision":"b2d3974843961adb87bf4fbb3127ce04","url":"assets/images/flags/48px/GB.png"},{"revision":"4deb36e37dbfd4ac036b289902f9f351","url":"assets/images/flags/48px/GD.png"},{"revision":"02aa8fbbca318fd3ce3bbec5da14ac08","url":"assets/images/flags/48px/GE.png"},{"revision":"6391e4a2807259d4da924550f84bdf76","url":"assets/images/flags/48px/GF.png"},{"revision":"47c746619da072e59baa9b21990fcb4b","url":"assets/images/flags/48px/GG.png"},{"revision":"cd77a21096a0ded32bfb006b96dcd9bd","url":"assets/images/flags/48px/GH.png"},{"revision":"8f0e0f628b84752cc4e2659938d37dfb","url":"assets/images/flags/48px/GI.png"},{"revision":"a9082e1362f1f5d7a5187faebb978dd9","url":"assets/images/flags/48px/GL.png"},{"revision":"dbf9b470421de3896c2ecfad0be017e2","url":"assets/images/flags/48px/GM.png"},{"revision":"77b8ec72496ed910b2e043ad240d4a74","url":"assets/images/flags/48px/GN.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/GP.png"},{"revision":"b36b2293de6a9ae029dfea1d2837ed88","url":"assets/images/flags/48px/GQ.png"},{"revision":"0c002f9bcc1def4a30473542a9c310b9","url":"assets/images/flags/48px/GR.png"},{"revision":"ad9c238107c0281e623ee8ecbf89d6f4","url":"assets/images/flags/48px/GS.png"},{"revision":"4c9ae883171be0188c0c934567e02af5","url":"assets/images/flags/48px/GT.png"},{"revision":"5cf0f1d286c87167a5f3ea485a782ed6","url":"assets/images/flags/48px/GU.png"},{"revision":"767d2fd3475c9395f37ebb10be41555c","url":"assets/images/flags/48px/GW.png"},{"revision":"712c38359d2823abe7e6794386551ced","url":"assets/images/flags/48px/GY.png"},{"revision":"993f75cd46b5934d0f94ff5ba5075f4a","url":"assets/images/flags/48px/HK.png"},{"revision":"3ba010b78fa88cbd9a3cf45f6fc91da5","url":"assets/images/flags/48px/HN.png"},{"revision":"f4dede4af1da5c9d365d0c7208ed4633","url":"assets/images/flags/48px/HR.png"},{"revision":"a73067ce5579807354001dfcc1d07757","url":"assets/images/flags/48px/HT.png"},{"revision":"b3e65d87afb21d5e2a1458c4cceba17f","url":"assets/images/flags/48px/HU.png"},{"revision":"2ef64a00fd9404cf87bd31a606c83a94","url":"assets/images/flags/48px/ID.png"},{"revision":"2ef64a00fd9404cf87bd31a606c83a94","url":"assets/images/flags/48px/IDN.png"},{"revision":"8076da981f1d906808c5d8781910fd5a","url":"assets/images/flags/48px/IE.png"},{"revision":"064ae51d203558af5eeb4e51dfb69686","url":"assets/images/flags/48px/IL.png"},{"revision":"9f10556ded6e30add6c6caf8e8ba53fa","url":"assets/images/flags/48px/IM.png"},{"revision":"8ba0660d3000fef50ff0d496548d92a4","url":"assets/images/flags/48px/IN.png"},{"revision":"45e5bfb6f9fe88aba5fc3e9075945b65","url":"assets/images/flags/48px/IO.png"},{"revision":"3a91dc0ae4a1c55e7075a4c8f10b06a5","url":"assets/images/flags/48px/IQ.png"},{"revision":"79027efa726ca1ea37126b03f29ad325","url":"assets/images/flags/48px/IR.png"},{"revision":"7c55a6f453839590c2a59433c4e21dff","url":"assets/images/flags/48px/IS.png"},{"revision":"4ebadedfa09f872550b5d15afbcce72d","url":"assets/images/flags/48px/IT.png"},{"revision":"afca75d42018cc573ff55b2ea836b5a0","url":"assets/images/flags/48px/JE.png"},{"revision":"4ba4ed495b614e33a6df14ac6e7b60c7","url":"assets/images/flags/48px/JM.png"},{"revision":"ed3e986db22cb6ad80a753ac1c1aaac3","url":"assets/images/flags/48px/JO.png"},{"revision":"b83f3bd9d0aa33b65c3ed7c5a68ee6a7","url":"assets/images/flags/48px/JP.png"},{"revision":"79edcd1801987aa4fbe0330a132cfb85","url":"assets/images/flags/48px/KE.png"},{"revision":"26ee8c555988a5958d18a993d88d7837","url":"assets/images/flags/48px/KG.png"},{"revision":"941b49bdd11379da98436ccf01a8b98f","url":"assets/images/flags/48px/KH.png"},{"revision":"ac37a600f5665bb17cc857328b8b4198","url":"assets/images/flags/48px/KI.png"},{"revision":"1e2082cf6a9e84461f58564f30908c4c","url":"assets/images/flags/48px/KM.png"},{"revision":"3a61cddc283f746ebcc7524077be2a62","url":"assets/images/flags/48px/KN.png"},{"revision":"a6e35cf7c433eb13ec6024afa45f4191","url":"assets/images/flags/48px/KP.png"},{"revision":"47038d492f939136af674321f7f65d03","url":"assets/images/flags/48px/KR.png"},{"revision":"ef3777f075609901700c0a360bdd989d","url":"assets/images/flags/48px/KW.png"},{"revision":"4c737844a2cdb88f0b5778152eda8907","url":"assets/images/flags/48px/KY.png"},{"revision":"ba5449f42faed2746ccbfc0d4a3f972c","url":"assets/images/flags/48px/KZ.png"},{"revision":"1504610cdfe2b74c6f88e42c5742c2ef","url":"assets/images/flags/48px/LA.png"},{"revision":"fb4d74bb5ab27ac65ae97ae82c5dca65","url":"assets/images/flags/48px/LB.png"},{"revision":"7961052b15be9d22caf141ede2484256","url":"assets/images/flags/48px/LC.png"},{"revision":"f4457b7e088635ce2faa069c3f97ca14","url":"assets/images/flags/48px/LI.png"},{"revision":"ab4b6df894fec434ed7864313ef8464c","url":"assets/images/flags/48px/LK.png"},{"revision":"4495ccbcac4c7033f1eb522f3d6152f8","url":"assets/images/flags/48px/LR.png"},{"revision":"8bbd2fc47cc9e2d52f9e1bbd1afe5202","url":"assets/images/flags/48px/LS.png"},{"revision":"173d0956b3911186e874a7bd138ac6e7","url":"assets/images/flags/48px/LT.png"},{"revision":"93c12f8fab51e667a1d2a88e17f7f774","url":"assets/images/flags/48px/LU.png"},{"revision":"7437b083dfb595711044bbee277eb645","url":"assets/images/flags/48px/LV.png"},{"revision":"1c795b135c408a7e8f47448baf5545f8","url":"assets/images/flags/48px/LY.png"},{"revision":"6584d029f9b9199c251f445958e4e0c0","url":"assets/images/flags/48px/MA.png"},{"revision":"c13d785caf0874c4ca55241908b62419","url":"assets/images/flags/48px/MC.png"},{"revision":"d51ff6e02ff4ad92448ff182084b7c96","url":"assets/images/flags/48px/MD.png"},{"revision":"e5d2e65ea3ed447d9b7783e53b9a8518","url":"assets/images/flags/48px/ME.png"},{"revision":"605e05f7a611908238a5157cf6d4a050","url":"assets/images/flags/48px/MG.png"},{"revision":"e8248c3914175f1ad025de7a2982284b","url":"assets/images/flags/48px/MH.png"},{"revision":"7836fc9bddf9b1fed658e98a48e8efae","url":"assets/images/flags/48px/MK.png"},{"revision":"4e0de29ca13fad165772bd642737fd96","url":"assets/images/flags/48px/ML.png"},{"revision":"61f5fc404a3ec3c0fd0b5bd0a2565429","url":"assets/images/flags/48px/MM.png"},{"revision":"8b35dd46fa306bf1f71aed4007c58a7a","url":"assets/images/flags/48px/MN.png"},{"revision":"f8d9fc06dae7ba54744cae35dc99da41","url":"assets/images/flags/48px/MO.png"},{"revision":"1c05fbf1ac6a54cd9886e1aa73aa9bd1","url":"assets/images/flags/48px/MP.png"},{"revision":"28b6ac2193613a9533ff15bd50035c04","url":"assets/images/flags/48px/MQ.png"},{"revision":"89abc3254c0dd5aaa4be8cf4bbc8413f","url":"assets/images/flags/48px/MR.png"},{"revision":"2b20aa3a80b7f7162a112f3444b565b0","url":"assets/images/flags/48px/MS.png"},{"revision":"7da4313b64f0248a4d17b924aa1acfb7","url":"assets/images/flags/48px/MT.png"},{"revision":"8e670ea74adf855912bc4c4226457bae","url":"assets/images/flags/48px/MU.png"},{"revision":"bf0a05a9860dc925f7671f86e12123e6","url":"assets/images/flags/48px/MV.png"},{"revision":"9c7753032dfbdd4b8c6c9d6f2b1f1c0e","url":"assets/images/flags/48px/MW.png"},{"revision":"8fa3ae516491c3f27a5cdc15aa43a9da","url":"assets/images/flags/48px/MX.png"},{"revision":"8da02bcf04f375d2a16e32b3d2877dfa","url":"assets/images/flags/48px/MY.png"},{"revision":"658645de449401654a772398757f0ca9","url":"assets/images/flags/48px/MZ.png"},{"revision":"d02e9b3cd97442d9b7e134e08ef2581b","url":"assets/images/flags/48px/NA.png"},{"revision":"2f2eb76739507210392e83a4777b18ae","url":"assets/images/flags/48px/NC.png"},{"revision":"d87160d9176c257a98372a658c1bbe4a","url":"assets/images/flags/48px/NE.png"},{"revision":"0f3c075a5188f07bbd6701e50151ff3a","url":"assets/images/flags/48px/NF.png"},{"revision":"053ee25ff5d88e15f8ee77b59688673f","url":"assets/images/flags/48px/NG.png"},{"revision":"927c09af42ef9dc8f06ec0e76fbf09bd","url":"assets/images/flags/48px/NI.png"},{"revision":"2b8aee1f9e6133ca4c59f967b407ac01","url":"assets/images/flags/48px/NL.png"},{"revision":"2b8aee1f9e6133ca4c59f967b407ac01","url":"assets/images/flags/48px/NLD.png"},{"revision":"223873d65069de19abde52d9e9c810c8","url":"assets/images/flags/48px/NO.png"},{"revision":"748768741539fa06a681fb89977c9096","url":"assets/images/flags/48px/NP.png"},{"revision":"8db4dc8f4259b1a55736a3845a10f398","url":"assets/images/flags/48px/NR.png"},{"revision":"c959c812d48204fe7df212890142dd9c","url":"assets/images/flags/48px/NU.png"},{"revision":"5c876587c832e9b2181c87337d24528f","url":"assets/images/flags/48px/NZ.png"},{"revision":"b2a0cff055de06a1fddb0379ac14519b","url":"assets/images/flags/48px/OM.png"},{"revision":"1adc883fba41ed53419fee8a08379ed8","url":"assets/images/flags/48px/PA.png"},{"revision":"0a9e692763da876d35195eeda70274f8","url":"assets/images/flags/48px/PE.png"},{"revision":"6f567a9b5759b81c080f24e85fc5cf3c","url":"assets/images/flags/48px/PF.png"},{"revision":"9a6db45221396cd434187b8740e2efeb","url":"assets/images/flags/48px/PG.png"},{"revision":"ff75c54213c5764444719a1fefc7057b","url":"assets/images/flags/48px/PH.png"},{"revision":"2867f39205990b18ec4afe31264628ab","url":"assets/images/flags/48px/PK.png"},{"revision":"a61e42baab7c8c9df7d70449ab938ff3","url":"assets/images/flags/48px/PL.png"},{"revision":"2b0360b815db4ce1d723e5d387830e32","url":"assets/images/flags/48px/PM.png"},{"revision":"2a262abff0eeec69ea222e294464ab8f","url":"assets/images/flags/48px/PN.png"},{"revision":"c034a955c2a5967dcc973879f65d5d5f","url":"assets/images/flags/48px/PR.png"},{"revision":"3bf8a49e17edcbd8b72de41e0e4b9855","url":"assets/images/flags/48px/PS.png"},{"revision":"a30eb5682f8b4b073c5b485f3cfec5fa","url":"assets/images/flags/48px/PT.png"},{"revision":"49660440540566ad9d458478effa844a","url":"assets/images/flags/48px/PW.png"},{"revision":"c221ce314832921b87d7d16f1652ad52","url":"assets/images/flags/48px/PY.png"},{"revision":"8a248d5b03911c06381ef4fefd48c8c6","url":"assets/images/flags/48px/QA.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/RE.png"},{"revision":"51a1f62d28d2e296d13344c83c11e947","url":"assets/images/flags/48px/RO.png"},{"revision":"3a6a9c67dadafa8dfa955b4bd0b3fbc0","url":"assets/images/flags/48px/RS.png"},{"revision":"78e9b075e12f51886381edc7fdb1be92","url":"assets/images/flags/48px/RU.png"},{"revision":"212bd544ee0baf6f85cdfb230c17c4f9","url":"assets/images/flags/48px/RW.png"},{"revision":"dfe0e7497734b99881fc22519d00256d","url":"assets/images/flags/48px/SA.png"},{"revision":"d13175d1dddb97434fca5ba963490fe9","url":"assets/images/flags/48px/SB.png"},{"revision":"3a60e293a547dbd5d3102c5bee6a83d1","url":"assets/images/flags/48px/SC.png"},{"revision":"da8492c80d921b5c28f279598b248d96","url":"assets/images/flags/48px/SD.png"},{"revision":"5755248ddcfcf3a48c6f7b5d39e74af4","url":"assets/images/flags/48px/SE.png"},{"revision":"5cd507f910dc58c83bb7fe72f9aabc36","url":"assets/images/flags/48px/SG.png"},{"revision":"b2d3974843961adb87bf4fbb3127ce04","url":"assets/images/flags/48px/SH.png"},{"revision":"18e84effe02ac229ab2ae40996a8c8e8","url":"assets/images/flags/48px/SI.png"},{"revision":"ebe7b6cb6893be295e62222e1d76390a","url":"assets/images/flags/48px/SK.png"},{"revision":"50aa6d92177fc7d06e5947187f0746bc","url":"assets/images/flags/48px/SL.png"},{"revision":"ca7486780f54e3928a5e0d1c3aa358ee","url":"assets/images/flags/48px/SM.png"},{"revision":"1236123f91acb96fbca39f8cb746ffdd","url":"assets/images/flags/48px/SN.png"},{"revision":"2086fd0deb0f5390e65cc8b6e896b738","url":"assets/images/flags/48px/SO.png"},{"revision":"9f0e30be52f38c44c9777a7509b4bc58","url":"assets/images/flags/48px/SR.png"},{"revision":"88898cacee29f551abe6bd97c2785b35","url":"assets/images/flags/48px/SS.png"},{"revision":"fa72b7012121eab85cc6d532c1acdcaf","url":"assets/images/flags/48px/ST.png"},{"revision":"6c3f47a4a0dbcec97f35219b527eae57","url":"assets/images/flags/48px/SV.png"},{"revision":"8917322b5ed407cf3750bc80c41fd995","url":"assets/images/flags/48px/SX.png"},{"revision":"cfeab2aa5e7806c1ca19ed1a96261f07","url":"assets/images/flags/48px/SY.png"},{"revision":"ce531aa9b38f225e6286d35a233bf45c","url":"assets/images/flags/48px/SZ.png"},{"revision":"4a28490b8a43d3c303053a2f0b915c0b","url":"assets/images/flags/48px/TC.png"},{"revision":"9a82365ca6254f2cd2b5da82f7158d6e","url":"assets/images/flags/48px/TD.png"},{"revision":"bb9851e8976cc7fb42be437bae182c18","url":"assets/images/flags/48px/TF.png"},{"revision":"47b3b8747c2632ba4dacb64641785ed0","url":"assets/images/flags/48px/TG.png"},{"revision":"bbc9c56ca4cb0ee5b58eaba41d78027f","url":"assets/images/flags/48px/TH.png"},{"revision":"181482a7cf92fc79a8654d7fb7d6cbe3","url":"assets/images/flags/48px/TJ.png"},{"revision":"33a6d62456068dfe6c4ded7e09b51591","url":"assets/images/flags/48px/TK.png"},{"revision":"804871a6927f6248213c5615bbbe7838","url":"assets/images/flags/48px/TL.png"},{"revision":"78f4a3a1e9720ca161d113d16ca78789","url":"assets/images/flags/48px/TM.png"},{"revision":"a66dc53e9ac894e512f044ea089ade97","url":"assets/images/flags/48px/TN.png"},{"revision":"28d78cd2af289ae8f593d3e69680aca5","url":"assets/images/flags/48px/TO.png"},{"revision":"14eba81aa01c3108825339f84fbeb7dd","url":"assets/images/flags/48px/TR.png"},{"revision":"3007aff5b86d49e3af3e9ed8421e4f6b","url":"assets/images/flags/48px/TT.png"},{"revision":"45b04d93a4af2fed2b262c9afd3d84d1","url":"assets/images/flags/48px/TV.png"},{"revision":"130a933732f4c4a00c13dfff78069b31","url":"assets/images/flags/48px/TW.png"},{"revision":"52ab65d8d6f9d4957d36d48a2c2d28e4","url":"assets/images/flags/48px/TZ.png"},{"revision":"97e09f7156fe597fbabae5fb00a9194b","url":"assets/images/flags/48px/UA.png"},{"revision":"09d96c6f9b977e279342053bc620018a","url":"assets/images/flags/48px/UG.png"},{"revision":"2e8b1ed07e1b77c2b9a2c12f499f01ec","url":"assets/images/flags/48px/UM.png"},{"revision":"2e8b1ed07e1b77c2b9a2c12f499f01ec","url":"assets/images/flags/48px/US.png"},{"revision":"b41c443077934382b5a67b18f6ca14ba","url":"assets/images/flags/48px/UY.png"},{"revision":"7ad0f9f62a4c2a663f8ecdf60bdb3ee6","url":"assets/images/flags/48px/UZ.png"},{"revision":"8e9811ddb9dda1a74b0a90e1d0cc0a88","url":"assets/images/flags/48px/VA.png"},{"revision":"41e378e339e35291bada06a1f58ea16b","url":"assets/images/flags/48px/VC.png"},{"revision":"2d71b48c1dd1a8888fb2201f2a99ee32","url":"assets/images/flags/48px/VE.png"},{"revision":"3a0d5dcdc7efe1935414fae547a060b2","url":"assets/images/flags/48px/VG.png"},{"revision":"65fec910d65e2c421257c3879e4fa08f","url":"assets/images/flags/48px/VI.png"},{"revision":"ce700aa8b30f8e8ba4754526418a4611","url":"assets/images/flags/48px/VN.png"},{"revision":"afc823cbcf026f56dd3bd37a11e5bf69","url":"assets/images/flags/48px/VU.png"},{"revision":"2791e15ab6c1319a3a82ac96d4dd90fb","url":"assets/images/flags/48px/WALES.png"},{"revision":"3e042a7902de5ab18d14469465227df4","url":"assets/images/flags/48px/WF.png"},{"revision":"34b3a7af8911091da6f630f94744ed74","url":"assets/images/flags/48px/WS.png"},{"revision":"d0f3469721ed0325c5cd2bb2828b6609","url":"assets/images/flags/48px/YE.png"},{"revision":"9fad8882d4ed2ec27c545463d68efb46","url":"assets/images/flags/48px/YT.png"},{"revision":"0a1455642ffa390920ed4025846ab339","url":"assets/images/flags/48px/ZA.png"},{"revision":"ee2bb395860e9a02a8f06a717005b543","url":"assets/images/flags/48px/ZM.png"},{"revision":"bb49b4b66ae8873a459f8913690134dd","url":"assets/images/flags/48px/ZW.png"},{"revision":"a1520e369d6e7a1ae6fbc16c5271b0d7","url":"assets/images/flags/96px/AD.png"},{"revision":"5a8001dc52b0edb2fbb60b3d569684f1","url":"assets/images/flags/96px/AE.png"},{"revision":"ba5f9d2cb9773a4429cd11d16f0f5703","url":"assets/images/flags/96px/AF.png"},{"revision":"ba5f9d2cb9773a4429cd11d16f0f5703","url":"assets/images/flags/96px/AFR.png"},{"revision":"f2f782bc85bbd724d4dde9a993bc3804","url":"assets/images/flags/96px/AG.png"},{"revision":"57884499bf9e0db4e3dfd2b8a16e65f0","url":"assets/images/flags/96px/AI.png"},{"revision":"ac7e3ff7229998d70580b64709327107","url":"assets/images/flags/96px/AL.png"},{"revision":"2f992f1f192a500f66ef9191a8e88c87","url":"assets/images/flags/96px/AM.png"},{"revision":"cd1a153ef4f96bdf4d8281948d6a80b0","url":"assets/images/flags/96px/AO.png"},{"revision":"183005cb8df87c06f17494754ee9ff43","url":"assets/images/flags/96px/AR.png"},{"revision":"183005cb8df87c06f17494754ee9ff43","url":"assets/images/flags/96px/ARG.png"},{"revision":"7890ed74b196c427ed1d43db59828e30","url":"assets/images/flags/96px/AS.png"},{"revision":"f2c28005a9e39bacea5946a1222f10a6","url":"assets/images/flags/96px/AT.png"},{"revision":"9781312ad16c031d538e1eef669cdb02","url":"assets/images/flags/96px/AU.png"},{"revision":"9781312ad16c031d538e1eef669cdb02","url":"assets/images/flags/96px/AUS.png"},{"revision":"f2c28005a9e39bacea5946a1222f10a6","url":"assets/images/flags/96px/AUT.png"},{"revision":"bb69faa5fcfc5d77b0576c0227ee7d50","url":"assets/images/flags/96px/AW.png"},{"revision":"f8505e5e5f349f32588cf560a6dbbeb2","url":"assets/images/flags/96px/AX.png"},{"revision":"13c5be148369e1a79ec034fec74cf4fe","url":"assets/images/flags/96px/AZ.png"},{"revision":"55f1042c92a1018ff70a5ffcf5fc385e","url":"assets/images/flags/96px/BA.png"},{"revision":"690ae2d3506a16d0c8f0b9dd67b249e1","url":"assets/images/flags/96px/BB.png"},{"revision":"c1d3e727e1118614496290200adc6eb9","url":"assets/images/flags/96px/BD.png"},{"revision":"19717508b31a79a40af3eebe9892411d","url":"assets/images/flags/96px/BE.png"},{"revision":"6ac541813f9b8662c1128473c41dd5f6","url":"assets/images/flags/96px/BF.png"},{"revision":"f55c72e93a7477be0f0cdfec294c3bc3","url":"assets/images/flags/96px/BG.png"},{"revision":"889234592abf148e6abf446d05e5771d","url":"assets/images/flags/96px/BH.png"},{"revision":"58ecdbf7d7906c621b67c8bbecefc9ea","url":"assets/images/flags/96px/BI.png"},{"revision":"91fdbac2ef9538d6937a071f979e42ed","url":"assets/images/flags/96px/BJ.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/BL.png"},{"revision":"fe83c347b859c1671a2a09cde1c7a4cb","url":"assets/images/flags/96px/BM.png"},{"revision":"bf120533624a051d24ae7fbc4c8ed34d","url":"assets/images/flags/96px/BN.png"},{"revision":"96e185868c542586aac874d3e7d4a27e","url":"assets/images/flags/96px/BO.png"},{"revision":"e2b57774f298d8b31c844e5856fc9fc7","url":"assets/images/flags/96px/BQ.png"},{"revision":"86c1b5814d0ba7624da67e19f1c75822","url":"assets/images/flags/96px/BR.png"},{"revision":"363162ac11e0c0c210d460b7c9291e47","url":"assets/images/flags/96px/BS.png"},{"revision":"7f0d2d2553a7c2f77679dbbcf11441c0","url":"assets/images/flags/96px/BT.png"},{"revision":"441024dc74a817948d9632fdae459b18","url":"assets/images/flags/96px/BV.png"},{"revision":"16581166c109de23dd16bfff965f95b1","url":"assets/images/flags/96px/BW.png"},{"revision":"4f7c08d370203f90ddb9d05cd8772d47","url":"assets/images/flags/96px/BY.png"},{"revision":"57cb31a85f29f7d6360a4db7365909a0","url":"assets/images/flags/96px/BZ.png"},{"revision":"b7016aa339c6f9e99d0f655fb3a4c78f","url":"assets/images/flags/96px/CA.png"},{"revision":"ccf8c14e1dd9d4d4fdb5be8740d17f10","url":"assets/images/flags/96px/CC.png"},{"revision":"e40213d8ca2423bada108df68a8e8b5d","url":"assets/images/flags/96px/CD.png"},{"revision":"2f183071296d16ac4e94430c83a6c2b8","url":"assets/images/flags/96px/CF.png"},{"revision":"ceeb4299c02d251e40a4b055306ebc64","url":"assets/images/flags/96px/CG.png"},{"revision":"22f1a8f3d4a7d2c972fea057227fb81e","url":"assets/images/flags/96px/CH.png"},{"revision":"89468e199b1c02641f0a88474614ab9d","url":"assets/images/flags/96px/CI.png"},{"revision":"5c8d8f95984d753d1d4f8d78f6f1a779","url":"assets/images/flags/96px/CK.png"},{"revision":"3649de7a67df3f1a9da466c03a53d574","url":"assets/images/flags/96px/CL.png"},{"revision":"63e4f4c791b95b144600ed8150dc2844","url":"assets/images/flags/96px/CM.png"},{"revision":"667aeb1ed735a9bb7226011b18ef238a","url":"assets/images/flags/96px/CN.png"},{"revision":"bad1556477710064ad40f70e1063ebd6","url":"assets/images/flags/96px/CO.png"},{"revision":"725eab7ef3521ce0515340f287ee9388","url":"assets/images/flags/96px/CR.png"},{"revision":"c105e620dee9696a4736104cc3dac933","url":"assets/images/flags/96px/CU.png"},{"revision":"f15e31c1c71d09e2cd68a548d9ec5db5","url":"assets/images/flags/96px/CV.png"},{"revision":"e76b259cefad930c551b6ff1771d4945","url":"assets/images/flags/96px/CW.png"},{"revision":"f57b5fecf7b057701f6122a0c618197d","url":"assets/images/flags/96px/CX.png"},{"revision":"d8d4073be8deab36d7847359bbd53bef","url":"assets/images/flags/96px/CY.png"},{"revision":"c311705b1728f53a64f765321393f3e3","url":"assets/images/flags/96px/CZ.png"},{"revision":"6362307d7f6d3342fae0701a9334545a","url":"assets/images/flags/96px/DE.png"},{"revision":"6362307d7f6d3342fae0701a9334545a","url":"assets/images/flags/96px/DEU.png"},{"revision":"cb9e2b8ee0ff916fa0426f45b9b43562","url":"assets/images/flags/96px/DJ.png"},{"revision":"ba562ecadc1fd13d87c485b577b35597","url":"assets/images/flags/96px/DK.png"},{"revision":"508d06f7030ce522213991c40484f83b","url":"assets/images/flags/96px/DM.png"},{"revision":"759ea173100e868cdf25b2702545688a","url":"assets/images/flags/96px/DO.png"},{"revision":"002f9c73e6a19ec7c00596474fee5958","url":"assets/images/flags/96px/DZ.png"},{"revision":"d3ece0e2c211562e7b5562bdaf43172a","url":"assets/images/flags/96px/EC.png"},{"revision":"60401456bd514b5d90dbb87f0627fbf7","url":"assets/images/flags/96px/EE.png"},{"revision":"3e9db308ef111294442305b74ae99c2a","url":"assets/images/flags/96px/EG.png"},{"revision":"585b1dcde30b489cc1075417c89563c4","url":"assets/images/flags/96px/ER.png"},{"revision":"f8490d491cfcc547bc99184c71c6c2e4","url":"assets/images/flags/96px/ES.png"},{"revision":"f8490d491cfcc547bc99184c71c6c2e4","url":"assets/images/flags/96px/ESP.png"},{"revision":"2c4db47b2ca7763f83192b3f53ca89be","url":"assets/images/flags/96px/ET.png"},{"revision":"5886fb27119438695d7a52390b8b5c0d","url":"assets/images/flags/96px/EUR.png"},{"revision":"44c40e0859a2638a1340950dcd95ca3b","url":"assets/images/flags/96px/FI.png"},{"revision":"2e42d488aa473491b47b09416fd90ec4","url":"assets/images/flags/96px/FJ.png"},{"revision":"4457f3a3fef9995319542f8264f8f2c2","url":"assets/images/flags/96px/FK.png"},{"revision":"9aa4e690d3ace43e3d56ba5baf0c7e1e","url":"assets/images/flags/96px/FM.png"},{"revision":"ea03b297d1853b3025e605ca54e6ac28","url":"assets/images/flags/96px/FO.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/FR.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/FRA.png"},{"revision":"61d244d450de9415bccc87b32ffce675","url":"assets/images/flags/96px/GA.png"},{"revision":"74db19d626158f753e53f3ea3f8d1eda","url":"assets/images/flags/96px/GB.png"},{"revision":"72d729713b0712296af0b8da72c16164","url":"assets/images/flags/96px/GD.png"},{"revision":"1ca6f1a47bd1f77834f94ef41820ee92","url":"assets/images/flags/96px/GE.png"},{"revision":"de098b8b1763e28e1b0132fa60d3a1be","url":"assets/images/flags/96px/GF.png"},{"revision":"ef14d6a8b443d54e2c9d4cc4940eab22","url":"assets/images/flags/96px/GG.png"},{"revision":"d58af85183fd324917fc803d6a8af1ea","url":"assets/images/flags/96px/GH.png"},{"revision":"7f63ab51876fb369334062fcb91eb94a","url":"assets/images/flags/96px/GI.png"},{"revision":"f815db288bb2a88212f17ae8daab4dcc","url":"assets/images/flags/96px/GL.png"},{"revision":"d538359864580972938f6f6e150364e7","url":"assets/images/flags/96px/GM.png"},{"revision":"8398f44c2c9e370074b2f4016027ea13","url":"assets/images/flags/96px/GN.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/GP.png"},{"revision":"bacd567708104cf31b4f0f1195c5b018","url":"assets/images/flags/96px/GQ.png"},{"revision":"ba6da77cb7eb5cd075937588ca4dfc68","url":"assets/images/flags/96px/GR.png"},{"revision":"9cb30c3921599278b49aea798f0d438d","url":"assets/images/flags/96px/GS.png"},{"revision":"266ee007f4d8f1aceeb918cc84a3dcd3","url":"assets/images/flags/96px/GT.png"},{"revision":"be7f2a55b0374fd79ab320e8b539c56d","url":"assets/images/flags/96px/GU.png"},{"revision":"8173155fdc90867c7a1d23a3d9e72d29","url":"assets/images/flags/96px/GW.png"},{"revision":"9d1e7323559270cf04f5e37d01e26f2f","url":"assets/images/flags/96px/GY.png"},{"revision":"7a724118915b7897ed82c9ff498d78cc","url":"assets/images/flags/96px/HK.png"},{"revision":"6849e89a7cf8047f8763499338166267","url":"assets/images/flags/96px/HN.png"},{"revision":"7858ac7de6d2ba8b179febe10c1b2b4f","url":"assets/images/flags/96px/HR.png"},{"revision":"5f62e380b7cbb4cedbcd4365c4962e43","url":"assets/images/flags/96px/HT.png"},{"revision":"80631f20a8692015b373c72c3e673b2f","url":"assets/images/flags/96px/HU.png"},{"revision":"863db9a715a5cbd7831beed5578ae8ce","url":"assets/images/flags/96px/ID.png"},{"revision":"863db9a715a5cbd7831beed5578ae8ce","url":"assets/images/flags/96px/IDN.png"},{"revision":"fa50a2eda8b73986e4bdf4f65cdef20e","url":"assets/images/flags/96px/IE.png"},{"revision":"784af1188023787b80d870c83f5e49f5","url":"assets/images/flags/96px/IL.png"},{"revision":"c9f3155a2707ca128d2feb942396f1b6","url":"assets/images/flags/96px/IM.png"},{"revision":"f609bc3f7ac1b372b12dee4658909faf","url":"assets/images/flags/96px/IN.png"},{"revision":"f9924679425e2d9a10354c07b588b0b9","url":"assets/images/flags/96px/IO.png"},{"revision":"a4aed1b12fea9fda80112c978ce2dea6","url":"assets/images/flags/96px/IQ.png"},{"revision":"62f62f273fbef5065d01dac0b096c678","url":"assets/images/flags/96px/IR.png"},{"revision":"f69678874f5fd6e22e3224fc5a28054a","url":"assets/images/flags/96px/IS.png"},{"revision":"95578f45394342b8fd106f34b86e80f1","url":"assets/images/flags/96px/IT.png"},{"revision":"23cc92730713cc809b9014c73ee09aba","url":"assets/images/flags/96px/JE.png"},{"revision":"e6e3c700071ef1887e3ac1873926ff39","url":"assets/images/flags/96px/JM.png"},{"revision":"12860d6a9f4d76069ad3951a67436fe5","url":"assets/images/flags/96px/JO.png"},{"revision":"bb027ade0757b6fc5a97140546f55d2b","url":"assets/images/flags/96px/JP.png"},{"revision":"24cdba870244e30b0ef3f2e615250767","url":"assets/images/flags/96px/KE.png"},{"revision":"cc6f5a41c56734e1e026f9e242dc46d1","url":"assets/images/flags/96px/KG.png"},{"revision":"2c8280ed33cb298cd00fbcf1043ca546","url":"assets/images/flags/96px/KH.png"},{"revision":"b58b5030691b2b9bd6e8c7e18566d05c","url":"assets/images/flags/96px/KI.png"},{"revision":"babf17db28d84c9c9e4a505549db8d5f","url":"assets/images/flags/96px/KM.png"},{"revision":"d605839022d290ff9a84af72fb9e2b9f","url":"assets/images/flags/96px/KN.png"},{"revision":"803e6be7fe827a92be8c5623122699c2","url":"assets/images/flags/96px/KP.png"},{"revision":"1a799e5bceeaab4d64789ff7365a92e5","url":"assets/images/flags/96px/KR.png"},{"revision":"a64fd4a182b8d0db9c938fa692b84224","url":"assets/images/flags/96px/KW.png"},{"revision":"d48b67b43025bd79a8f6cbfb2d31e1c2","url":"assets/images/flags/96px/KY.png"},{"revision":"12589b5e7fe53def89a46509af28034e","url":"assets/images/flags/96px/KZ.png"},{"revision":"7faa5f29b2758c507441201b591bbcd2","url":"assets/images/flags/96px/LA.png"},{"revision":"a576e3c09ab939cb2101dbb29fde4c02","url":"assets/images/flags/96px/LB.png"},{"revision":"a1bb66306cfb980db054022fc5d544e6","url":"assets/images/flags/96px/LC.png"},{"revision":"a9a364f8dac8bc6ebde4cc3d22603d18","url":"assets/images/flags/96px/LI.png"},{"revision":"bd9d112b8aa31ac129ce5d067eebd991","url":"assets/images/flags/96px/LK.png"},{"revision":"3aafe71a5e2b13a343e95d815e59584d","url":"assets/images/flags/96px/LR.png"},{"revision":"1423a1fcead8c6cbe5e341279e9b159b","url":"assets/images/flags/96px/LS.png"},{"revision":"6f3047590f0c968705d44c1f86086690","url":"assets/images/flags/96px/LT.png"},{"revision":"09585c5ada3d8792dec552556db7ab40","url":"assets/images/flags/96px/LU.png"},{"revision":"63f6d2ef8be4c310c430ff0356e25451","url":"assets/images/flags/96px/LV.png"},{"revision":"f27f178b70a7c22b573ac3feb23b2727","url":"assets/images/flags/96px/LY.png"},{"revision":"efd82c0bab427f1a35c59c7098728beb","url":"assets/images/flags/96px/MA.png"},{"revision":"3e8685e01f8f6f3cce088faf5e73eda3","url":"assets/images/flags/96px/MC.png"},{"revision":"512a001eed9d76dbbd56645f8b1b3baf","url":"assets/images/flags/96px/MD.png"},{"revision":"d9acb5b79b352ab86567a672efe03af4","url":"assets/images/flags/96px/ME.png"},{"revision":"5a35a978a1e8750d6010155779e94674","url":"assets/images/flags/96px/MG.png"},{"revision":"097be11d0039337dfb02db92bcb0df0d","url":"assets/images/flags/96px/MH.png"},{"revision":"655f8b3714345e08757588ef4556bdf5","url":"assets/images/flags/96px/MK.png"},{"revision":"5f66900ccf9984853097dbd7d12f7466","url":"assets/images/flags/96px/ML.png"},{"revision":"86b32327a9dab831182327d6b6542254","url":"assets/images/flags/96px/MM.png"},{"revision":"52c4b56ae4a1a38b77a5789a0aa57f41","url":"assets/images/flags/96px/MN.png"},{"revision":"26c536266c823be9efc602298ed8939e","url":"assets/images/flags/96px/MO.png"},{"revision":"8376f4c33271fbd5336cf335cfd2a6e5","url":"assets/images/flags/96px/MP.png"},{"revision":"e2b4ae55f44bc5f84a43547b5007d8be","url":"assets/images/flags/96px/MQ.png"},{"revision":"7c8a2d8a5e1a5a5eb2bf0c772f3c49f5","url":"assets/images/flags/96px/MR.png"},{"revision":"340d0dd05d42797a06d9f98e931a989f","url":"assets/images/flags/96px/MS.png"},{"revision":"4e36b209bc299ef51076c9edf9d724c6","url":"assets/images/flags/96px/MT.png"},{"revision":"6dc81b462f28d2c5e0d0e1d0cf35fcd5","url":"assets/images/flags/96px/MU.png"},{"revision":"dc14eb98ec91b4c3360a5cc181955d74","url":"assets/images/flags/96px/MV.png"},{"revision":"8849601983f4f229ebfd784317040344","url":"assets/images/flags/96px/MW.png"},{"revision":"16a5116b070a81d193846463952c6b10","url":"assets/images/flags/96px/MX.png"},{"revision":"02fe81843e3fa948f4f1fcf412c50c36","url":"assets/images/flags/96px/MY.png"},{"revision":"4e6de475a4822c58869b1ea6a33d4fe9","url":"assets/images/flags/96px/MZ.png"},{"revision":"9813046ac5789e2d84d24fe7ef6f7295","url":"assets/images/flags/96px/NA.png"},{"revision":"ada4fd1ae2523f1d16de3085ebfc2268","url":"assets/images/flags/96px/NC.png"},{"revision":"27b3b80c38241148e9397fc9c6c9c277","url":"assets/images/flags/96px/NE.png"},{"revision":"70f0c8fc14cab365d6d80abcd764ee34","url":"assets/images/flags/96px/NF.png"},{"revision":"39c29eda5c8718317a2ff4e83818e147","url":"assets/images/flags/96px/NG.png"},{"revision":"0708ceaedab702839070c8d36389f39d","url":"assets/images/flags/96px/NI.png"},{"revision":"9a228695ae5d818fce1c178cc59f44e8","url":"assets/images/flags/96px/NL.png"},{"revision":"9a228695ae5d818fce1c178cc59f44e8","url":"assets/images/flags/96px/NLD.png"},{"revision":"25172c7c35dcdcfa879d90a515c473bf","url":"assets/images/flags/96px/NO.png"},{"revision":"d004fdc6f1db7171adb75a5706ea3456","url":"assets/images/flags/96px/NP.png"},{"revision":"6dd195398477d5af55b36024f32aefa3","url":"assets/images/flags/96px/NR.png"},{"revision":"4c333fa1ade0b4fff07b962abc56f5ef","url":"assets/images/flags/96px/NU.png"},{"revision":"a36e90842a51261c9fedd985f82f1f99","url":"assets/images/flags/96px/NZ.png"},{"revision":"6e2048430bd908bef522dd1a48a81485","url":"assets/images/flags/96px/OM.png"},{"revision":"b811ac4bf2b6da7a58e62daf165a3395","url":"assets/images/flags/96px/PA.png"},{"revision":"1bdc594716b03b4af2f57d2270711e4d","url":"assets/images/flags/96px/PE.png"},{"revision":"157ce9032c5ca8eca2d0c0d90b94cae3","url":"assets/images/flags/96px/PF.png"},{"revision":"c0d4ed366ecbb4c40049d85eb0d7cc9f","url":"assets/images/flags/96px/PG.png"},{"revision":"4eb05e422a872b87f983ecbda403b64f","url":"assets/images/flags/96px/PH.png"},{"revision":"5ca651026cc8b6c1ba963a1d5a90b20c","url":"assets/images/flags/96px/PK.png"},{"revision":"1cc93148adf20d565b63a1d3cc6ca5d1","url":"assets/images/flags/96px/PL.png"},{"revision":"205078b5ae2191f73674a2939a45fbe8","url":"assets/images/flags/96px/PM.png"},{"revision":"6d84069ef8962069a3b19104be15fa45","url":"assets/images/flags/96px/PN.png"},{"revision":"9c5aeca56b58ce599d651c3eaf5b4e1f","url":"assets/images/flags/96px/PR.png"},{"revision":"b31d716859d34da9d097afe946274be6","url":"assets/images/flags/96px/PS.png"},{"revision":"a5297eb7ad8294e215551b9b8fef12f9","url":"assets/images/flags/96px/PT.png"},{"revision":"c6d945e4cdc91d0a99b262c8e756e7b3","url":"assets/images/flags/96px/PW.png"},{"revision":"b54fcd54abcbccbf218d0cacc5dc2732","url":"assets/images/flags/96px/PY.png"},{"revision":"c0111e8626841c93ceb89e7d91a22a40","url":"assets/images/flags/96px/QA.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/RE.png"},{"revision":"bc5a335a386adb03570f6f253d9d52c2","url":"assets/images/flags/96px/RO.png"},{"revision":"5764dad4c3dbe4694be2294507d44b0c","url":"assets/images/flags/96px/RS.png"},{"revision":"d6dd3ce302366c7da36f4ba7e51fe71e","url":"assets/images/flags/96px/RU.png"},{"revision":"3b5c62c736cfce8db5fb175a1629263a","url":"assets/images/flags/96px/RW.png"},{"revision":"92856dc759eb54e0da2b67df6314817e","url":"assets/images/flags/96px/SA.png"},{"revision":"9e1f4950326496d251f7dcf1e41e3662","url":"assets/images/flags/96px/SB.png"},{"revision":"ab6c75ad7899ce924bcd8da55ad4cc2d","url":"assets/images/flags/96px/SC.png"},{"revision":"3cef44cb98ffba78655556a0e8c32693","url":"assets/images/flags/96px/SD.png"},{"revision":"c28da214b09be5464e81fa39b896b88c","url":"assets/images/flags/96px/SE.png"},{"revision":"4ff56e91e4fd77eb8f8c58ed89510df0","url":"assets/images/flags/96px/SG.png"},{"revision":"74db19d626158f753e53f3ea3f8d1eda","url":"assets/images/flags/96px/SH.png"},{"revision":"06baa8c57ad8136953b97b126d22ea47","url":"assets/images/flags/96px/SI.png"},{"revision":"086dc29445cfb845fe2644f2f5ed9f22","url":"assets/images/flags/96px/SK.png"},{"revision":"76784915086fd3f2e9cc2a123d3b5ada","url":"assets/images/flags/96px/SL.png"},{"revision":"0e959b5cbc8d3f1e9fd7a90cab464943","url":"assets/images/flags/96px/SM.png"},{"revision":"f2acf56aafa81c1dbc037d7e5e95b6b0","url":"assets/images/flags/96px/SN.png"},{"revision":"c03345f5890647d49581b1fbe6d31388","url":"assets/images/flags/96px/SO.png"},{"revision":"2da589c6ac7688387e6159d6d10bf49d","url":"assets/images/flags/96px/SR.png"},{"revision":"e8776905327a0d3c1e6d2d5b6b0544d0","url":"assets/images/flags/96px/SS.png"},{"revision":"ac8967280f724e0d86b05104134d26f9","url":"assets/images/flags/96px/ST.png"},{"revision":"d64e5d01fa386b5348762f506d035399","url":"assets/images/flags/96px/SV.png"},{"revision":"45a4e12be4709de2f1b6ea4ec540943e","url":"assets/images/flags/96px/SX.png"},{"revision":"d8089ad27be1e201675c2919ef054818","url":"assets/images/flags/96px/SY.png"},{"revision":"f6058c6be36b51d59264e2139fc00679","url":"assets/images/flags/96px/SZ.png"},{"revision":"1acb4568f25fbbeef99fc4263efe0617","url":"assets/images/flags/96px/TC.png"},{"revision":"5ea04e553d16cd21953c2c884b130914","url":"assets/images/flags/96px/TD.png"},{"revision":"ced0b3c1630247283a49f5531a00efca","url":"assets/images/flags/96px/TF.png"},{"revision":"f2a67c56c5f6781a8c8b3acf8c027fb1","url":"assets/images/flags/96px/TG.png"},{"revision":"ee4ce29682dcab9b9f8e9db0d07eb55d","url":"assets/images/flags/96px/TH.png"},{"revision":"6612cfcc87a387ed9743b886c60c1bdd","url":"assets/images/flags/96px/TJ.png"},{"revision":"f5ea9e0f4b253f1abd591c1bd25a4812","url":"assets/images/flags/96px/TK.png"},{"revision":"770176f98429d102deab3045906461ad","url":"assets/images/flags/96px/TL.png"},{"revision":"8021496df4ae29b04c1367e485eb385e","url":"assets/images/flags/96px/TM.png"},{"revision":"35d27b5bfa50203a7de933a8cb395dbf","url":"assets/images/flags/96px/TN.png"},{"revision":"83c11045f2666687d89a64e7fc283f58","url":"assets/images/flags/96px/TO.png"},{"revision":"623ab7d807e3613b9ed3ebd488b971bf","url":"assets/images/flags/96px/TR.png"},{"revision":"f3c53ec5879ead77fe9ce8ae2c97f1dc","url":"assets/images/flags/96px/TT.png"},{"revision":"5732f16dabb50e81a78dbf43feaf28ea","url":"assets/images/flags/96px/TV.png"},{"revision":"164b5a4700a70818e8d1a36e7006e870","url":"assets/images/flags/96px/TW.png"},{"revision":"2529e85347a86c3d0e3854e521d9fe99","url":"assets/images/flags/96px/TZ.png"},{"revision":"e3d98fad693ad1642564522f12855042","url":"assets/images/flags/96px/UA.png"},{"revision":"9504879642cea0063cc0047f01382dae","url":"assets/images/flags/96px/UG.png"},{"revision":"fd96700a83b8b799af7d9ef582f2a2eb","url":"assets/images/flags/96px/UM.png"},{"revision":"03179b96d0b6cf8f521c0fc944dc5163","url":"assets/images/flags/96px/US.png"},{"revision":"bace022db495fe93dd5c80107e7912cf","url":"assets/images/flags/96px/UY.png"},{"revision":"5d1c7a84df12c3e5b1ed1019453528ed","url":"assets/images/flags/96px/UZ.png"},{"revision":"2b8cc98250bcc4037d4b2bf3f71e4971","url":"assets/images/flags/96px/VA.png"},{"revision":"2469872c137e69a11ee9aab62b3dc9b8","url":"assets/images/flags/96px/VC.png"},{"revision":"ca5f3fdab0b195254637956378294844","url":"assets/images/flags/96px/VE.png"},{"revision":"45fa1ebd69520a0b0f0fe7a316ca0136","url":"assets/images/flags/96px/VG.png"},{"revision":"ad6912bd0dbd87682d5c7ae454bfcdd8","url":"assets/images/flags/96px/VI.png"},{"revision":"e61a10dcfb2080a93d9d0c72cad19c47","url":"assets/images/flags/96px/VN.png"},{"revision":"79d8b6adb582ea761f40b159ec2bf845","url":"assets/images/flags/96px/VU.png"},{"revision":"b064e7961b5c8ee05f7296f6f9d57ca1","url":"assets/images/flags/96px/WALES.png"},{"revision":"1298523758a78994999694151d12eb24","url":"assets/images/flags/96px/WF.png"},{"revision":"4d425305d40a3c939e799167f40cc4c3","url":"assets/images/flags/96px/WS.png"},{"revision":"c9640a77c09b798004fdb2e873f33723","url":"assets/images/flags/96px/YE.png"},{"revision":"1989daf42389b5ff2c8e43b52f079f8c","url":"assets/images/flags/96px/YT.png"},{"revision":"8cbe7a01e90f3d58c302ec9a6ed9adb6","url":"assets/images/flags/96px/ZA.png"},{"revision":"e992f7710f5ed2dfd4dd8b89df7d0a9f","url":"assets/images/flags/96px/ZM.png"},{"revision":"71b503be3e4513131661ccf2aa302d9e","url":"assets/images/flags/96px/ZW.png"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery1.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery2.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery3.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery4.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery5.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery6.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery7.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/gallery8.jpg"},{"revision":"019d21aaeb441c47b75fa7c7575e02b5","url":"assets/images/gradient1.jpg"},{"revision":"27b4ad28ae41f61dbd0642fe7b22d7ad","url":"assets/images/heart-outline.png"},{"revision":"e4190a2485dbbf884090a00aa747a2e6","url":"assets/images/heart.png"},{"revision":"65093df492d655522bdd7b5dc65b7df7","url":"assets/images/image1.jpg"},{"revision":"3d6760ffcdfaba62413890062e78b8a9","url":"assets/images/image2.jpg"},{"revision":"3bcb3575825949dadf8a56ed0205281d","url":"assets/images/image3.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/latest-news1.jpg"},{"revision":"8f02b35138e6b34659b8108f7eb51cd9","url":"assets/images/latest-news2.jpg"},{"revision":"c8f19b56cb1c9b9d07d5510735407a9d","url":"assets/images/logo-smol.png"},{"revision":"d7398eb078bbf985b4d95d0f630011f2","url":"assets/images/logo.png"},{"revision":"31f15875975aab69085470aabbfec802","url":"assets/images/next.png"},{"revision":"84b76dee6b27b795e89e3649078a11c2","url":"assets/images/prev.png"},{"revision":"b03894a7d0b1d6154c1bd2c5aa7409bb","url":"assets/images/reload.png"},{"revision":"2090ae07663fce802f106c3419bb3028","url":"assets/images/slider-epl1.jpg"},{"revision":"dface3e8d32038681c7a3567076839bd","url":"assets/images/slider-uefa1.jpg"},{"revision":"2d4bde1425b9683f790af01c37d807b6","url":"assets/images/slider-uefa2.jpg"},{"revision":"219a08873930c93bf748b9493a7c77c6","url":"assets/images/slider1.jpg"},{"revision":"219a08873930c93bf748b9493a7c77c6","url":"assets/images/slider2.jpg"},{"revision":"219a08873930c93bf748b9493a7c77c6","url":"assets/images/slider3.jpg"},{"revision":"c0ac548b47172450a46bd67028ddb535","url":"assets/images/stadium1.jpg"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/teacher-small1.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/teacher-small2.png"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher1.jpg"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher2.jpg"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher3.jpg"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher4.jpg"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher5.jpg"},{"revision":"0664d3ac142927401b8ad7f858bf53ec","url":"assets/images/teacher6.jpg"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/testimonial1.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/testimonial2.png"},{"revision":"73a891fef3ec23af4d3355271e85410d","url":"assets/images/testimonial3.png"},{"revision":"d10bc07005bb2d604f4905183690ac04","url":"assets/images/ui/ui-icons_444444_256x240.png"},{"revision":"00dd0ec0a16a1085e714c7906ff8fb06","url":"assets/images/ui/ui-icons_555555_256x240.png"},{"revision":"4e7e3e142f3939883cd0a7e00cabdaef","url":"assets/images/ui/ui-icons_777620_256x240.png"},{"revision":"40bf25799e4fec8079c7775083de09df","url":"assets/images/ui/ui-icons_777777_256x240.png"},{"revision":"093a819138276b446611d1d2a45b98a2","url":"assets/images/ui/ui-icons_cc0000_256x240.png"},{"revision":"ea4ebe072be75fbbea002631916836de","url":"assets/images/ui/ui-icons_ffffff_256x240.png"},{"revision":"c15b1008dec3c8967ea657a7bb4baaec","url":"assets/js/jquery-ui.min.js"},{"revision":"c9f5aeeca3ad37bf2aa006139b935f0a","url":"assets/js/jquery.min.js"},{"revision":"ec01bec1ed16bf4c15d39a2697765864","url":"assets/js/lightbox.js"},{"revision":"c2afbb247e054b83d4c686b490c65cdd","url":"assets/js/main.js"},{"revision":"e97da5c8b60e6673b98b286c2acf437d","url":"assets/js/materialize.js"},{"revision":"72604b4dd26e411dd6d7290b9f6c1d9c","url":"assets/js/materialize.min.js"},{"revision":"7b3adc3f29d48879dfab4a8161e5186f","url":"assets/js/moment.min.js"},{"revision":"2fba96fbe453e1e3add4261f583ae637","url":"assets/js/numscroller.js"},{"revision":"ccdf893e7d8b26933af0c336bcc3943e","url":"assets/js/owl.carousel.js"},{"revision":"f416f9031fef25ae25ba9756e3eb6978","url":"assets/js/owl.carousel.min.js"},{"revision":"5e8c88ee1e06f4a3a332818e76b659b5","url":"assets/js/social.js"},{"revision":"e892dcf5ab886966b199e7ed7b8a2aac","url":"assets/json/en.json"},{"revision":null,"url":"fa-brands-400.3e30e90a9ee4f9476559.svg"},{"revision":null,"url":"fa-brands-400.418d54a4a9df0e7b3e28.ttf"},{"revision":null,"url":"fa-brands-400.5e405c16c959bec402cc.woff"},{"revision":null,"url":"fa-brands-400.877baf6278a6f1506a07.eot"},{"revision":null,"url":"fa-brands-400.f80b8a05dd76fdb40e63.woff2"},{"revision":null,"url":"fa-regular-400.06b3153d3d537a854dc8.woff"},{"revision":null,"url":"fa-regular-400.323b749d60730fa9ab61.ttf"},{"revision":null,"url":"fa-regular-400.569693c9f5d42d769c7f.woff2"},{"revision":null,"url":"fa-regular-400.e54c6ae126dd37d48c47.svg"},{"revision":null,"url":"fa-regular-400.ec813c5b36705e64ba12.eot"},{"revision":null,"url":"fa-solid-900.1eba168c1b8603ab4dd2.svg"},{"revision":null,"url":"fa-solid-900.59ea9019c9b9bc4d83ab.woff2"},{"revision":null,"url":"fa-solid-900.686e245a4f1a9894d10a.woff"},{"revision":null,"url":"fa-solid-900.b9c86e3abec102a2c991.ttf"},{"revision":null,"url":"fa-solid-900.f9103ae53b2dbcb0a146.eot"},{"revision":"b9aa7c338693424aae99599bec875b5f","url":"favicon.ico"},{"revision":"c3d19bcb8f164b668ef410ccfb499e31","url":"firebase-messaging-sw.js"},{"revision":null,"url":"gradient1.019d21aaeb441c47b75f.jpg"},{"revision":null,"url":"heart-outline.27b4ad28ae41f61dbd06.png"},{"revision":null,"url":"heart.e4190a2485dbbf884090.png"},{"revision":"34e8e606ebab4ae266d13d4ad8a09d60","url":"index.html"},{"revision":null,"url":"Lobster-Regular.9406d0ab606cf8cb91c4.ttf"},{"revision":null,"url":"main-es2015.a0f3fe521da545ccd41a.js"},{"revision":"08dc786887432a67a43e7f6788e2472d","url":"manifest.webmanifest"},{"revision":"3317b3e29f8221d8b18d080bf623f608","url":"ngsw-worker.js"},{"revision":"6a33067170be9a9825f470ab7937007b","url":"ngsw.json"},{"revision":null,"url":"owl.video.play.4a37f8008959c75f619b.png"},{"revision":null,"url":"polyfills-es2015.22a10e60a50c4504a999.js"},{"revision":null,"url":"reload.b03894a7d0b1d6154c1b.png"},{"revision":null,"url":"Roboto-Bold.ab96cca26751239828b8.woff2"},{"revision":null,"url":"Roboto-Bold.ad140ff02a7091257e2b.woff"},{"revision":null,"url":"Roboto-Light.37fbbbad5577a95bdf05.woff"},{"revision":null,"url":"Roboto-Light.8e0860f3581b197e9fa4.woff2"},{"revision":null,"url":"Roboto-Medium.2741a14e49524efa6059.woff2"},{"revision":null,"url":"Roboto-Medium.303ded6436dcf7ea7515.woff"},{"revision":null,"url":"Roboto-Regular.081b11ebaca8ad30fd09.woff"},{"revision":null,"url":"Roboto-Regular.b2a6341ae7440130ec4b.woff2"},{"revision":null,"url":"Roboto-Thin.790ebf41d0214f5eda4e.woff2"},{"revision":null,"url":"Roboto-Thin.90d3804f0231704c15cc.woff"},{"revision":null,"url":"runtime-es2015.86500b5e344961d1db25.js"},{"revision":"9963b75a25ae24de13db3e8e39ab027b","url":"safety-worker.js"},{"revision":null,"url":"scripts.cd02ae2d0fa6f19a5b52.js"},{"revision":null,"url":"stadium1.c0ac548b47172450a46b.jpg"},{"revision":null,"url":"styles.4473f365ba55d8bd7d0c.css"},{"revision":null,"url":"ui-icons_444444_256x240.d10bc07005bb2d604f49.png"},{"revision":null,"url":"ui-icons_555555_256x240.00dd0ec0a16a1085e714.png"},{"revision":null,"url":"ui-icons_777620_256x240.4e7e3e142f3939883cd0.png"},{"revision":null,"url":"ui-icons_777777_256x240.40bf25799e4fec8079c7.png"},{"revision":null,"url":"ui-icons_cc0000_256x240.093a819138276b446611.png"},{"revision":null,"url":"ui-icons_ffffff_256x240.ea4ebe072be75fbbea00.png"},{"revision":"9963b75a25ae24de13db3e8e39ab027b","url":"worker-basic.min.js"}];
// To customize the assets afterwards:
// assetsToCache = [...assetsToCache, ???];
if (DEBUG_MODE) {
    // tslint:disable-next-line:no-console
    console.trace(`${componentName}:: Assets that will be cached: `, assetsToCache);
}
Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_2__["precacheAndRoute"])(assetsToCache);
// -------------------------------------------------------------
// Routes
// -------------------------------------------------------------
// Default page handler for offline usage,
// where the browser does not how to handle deep links
// it's a SPA, so each path that is a navigation should default to index.html
const defaultRouteHandler = Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_2__["createHandlerBoundToURL"])('/index.html');
const defaultNavigationRoute = new workbox_routing__WEBPACK_IMPORTED_MODULE_3__["NavigationRoute"](defaultRouteHandler, {
// allowlist: [],
// denylist: [],
});
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(defaultNavigationRoute);
// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/^https:\/\/fonts\.googleapis\.com/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["StaleWhileRevalidate"]({
    cacheName: 'google-fonts-stylesheets',
}));
// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/^https:\/\/fonts\.gstatic\.com/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["CacheFirst"]({
    cacheName: 'google-fonts-webfonts',
    plugins: [
        new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_0__["CacheableResponsePlugin"]({
            statuses: [0, 200],
        }),
        new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["ExpirationPlugin"]({
            maxAgeSeconds: YEAR_IN_SECONDS,
            maxEntries: 30,
            purgeOnQuotaError: true,
        }),
    ],
}));
// Make JS/CSS fast by returning assets from the cache
// But make sure they're updating in the background for next use
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:js|css)$/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["StaleWhileRevalidate"]());
// Cache images
// But clean up after a while
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["CacheFirst"]({
    cacheName: 'images',
    plugins: [
        new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["ExpirationPlugin"]({
            maxEntries: 250,
            maxAgeSeconds: MONTH_IN_SECONDS,
            purgeOnQuotaError: true,
        }),
    ],
}));
// Anything authentication related MUST be performed online
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/(https:\/\/)?([^\/\s]+\/)api\/v1\/auth\/.*/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["NetworkOnly"]());
// Database access is only supported while online
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/(https:\/\/)?([^\/\s]+\/)database\/.*/, new workbox_strategies__WEBPACK_IMPORTED_MODULE_4__["NetworkOnly"]());
// -------------------------------------------------------------
// Messages
// -------------------------------------------------------------
self.addEventListener('message', (event) => {
    // TODO define/use correct data type
    if (event && event.data && event.data.type) {
        // return the version of this service worker
        if ('GET_VERSION' === event.data.type) {
            if (DEBUG_MODE) {
                // tslint:disable-next-line:no-console
                console.debug(`${componentName}:: Returning the service worker version: ${SERVICE_WORKER_VERSION}`);
            }
            event.ports[0].postMessage(SERVICE_WORKER_VERSION);
        }
        // When this message is received, we can skip waiting and become active
        // (i.e., this version of the service worker becomes active)
        // Reference about why we wait:
        // https://stackoverflow.com/questions/51715127/what-are-the-downsides-to-using-skipwaiting-and-clientsclaim-with-workbox
        if ('SKIP_WAITING' === event.data.type) {
            if (DEBUG_MODE) {
                // tslint:disable-next-line:no-console
                console.debug(`${componentName}:: Skipping waiting...`);
            }
            self.skipWaiting();
        }
        // When this message is received, we can take control of the clients with this version
        // of the service worker
        if ('CLIENTS_CLAIM' === event.data.type) {
            if (DEBUG_MODE) {
                // tslint:disable-next-line:no-console
                console.debug(`${componentName}:: Claiming clients and cleaning old caches`);
            }
            self.clients.claim();
        }
    }
});


/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponsePlugin"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"]; });

/* harmony import */ var _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__["CacheableResponsePlugin"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-cacheable-response
 */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return CacheableResponse; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * This class allows you to set up rules determining what
 * status codes and/or headers need to be present in order for a
 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * to be considered cacheable.
 *
 * @memberof module:workbox-cacheable-response
 */
class CacheableResponse {
    /**
     * To construct a new CacheableResponse instance you must provide at least
     * one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config = {}) {
        if (true) {
            if (!(config.statuses || config.headers)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('statuses-or-headers-required', {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                });
            }
            if (config.statuses) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(config.statuses, {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                    paramName: 'config.statuses',
                });
            }
            if (config.headers) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.headers, 'object', {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                    paramName: 'config.headers',
                });
            }
        }
        this._statuses = config.statuses;
        this._headers = config.headers;
    }
    /**
     * Checks a response to see whether it's cacheable or not, based on this
     * object's configuration.
     *
     * @param {Response} response The response whose cacheability is being
     * checked.
     * @return {boolean} `true` if the `Response` is cacheable, and `false`
     * otherwise.
     */
    isResponseCacheable(response) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(response, Response, {
                moduleName: 'workbox-cacheable-response',
                className: 'CacheableResponse',
                funcName: 'isResponseCacheable',
                paramName: 'response',
            });
        }
        let cacheable = true;
        if (this._statuses) {
            cacheable = this._statuses.includes(response.status);
        }
        if (this._headers && cacheable) {
            cacheable = Object.keys(this._headers).some((headerName) => {
                return response.headers.get(headerName) === this._headers[headerName];
            });
        }
        if (true) {
            if (!cacheable) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`The request for ` +
                    `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(response.url)}' returned a response that does ` +
                    `not meet the criteria for being cached.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View cacheability criteria here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Cacheable statuses: ` +
                    JSON.stringify(this._statuses));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Cacheable headers: ` +
                    JSON.stringify(this._headers, null, 2));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                const logFriendlyHeaders = {};
                response.headers.forEach((value, key) => {
                    logFriendlyHeaders[key] = value;
                });
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View response status and headers here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Response status: ` + response.status);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Response headers: ` +
                    JSON.stringify(logFriendlyHeaders, null, 2));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View full response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(response.headers);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
            }
        }
        return cacheable;
    }
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method returns true if the current context is a service worker.
 */
const isSWEnv = (moduleName) => {
    if (!('ServiceWorkerGlobalScope' in self)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-in-sw', { moduleName });
    }
};
/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (let item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isSWEnv,
    isType,
    isArrayOfClass,
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        let message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-in-sw': ({ moduleName }) => {
        if (!moduleName) {
            throw new Error(`Unexpected input to 'not-in-sw' error.`);
        }
        return `The '${moduleName}' must be used in a service worker.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `is unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed with an HTTP ` +
            `status of ${status}.`;
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    if (urlObj.origin === location.origin) {
        return urlObj.pathname;
    }
    return urlObj.href;
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:cacheable-response:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return CacheableResponsePlugin; });
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
 * easier to add in cacheability checks to requests made via Workbox's built-in
 * strategies.
 *
 * @memberof module:workbox-cacheable-response
 */
class CacheableResponsePlugin {
    /**
     * To construct a new CacheableResponsePlugin instance you must provide at
     * least one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config) {
        /**
         * @param {Object} options
         * @param {Response} options.response
         * @return {Response|null}
         * @private
         */
        this.cacheWillUpdate = async ({ response }) => {
            if (this._cacheableResponse.isResponseCacheable(response)) {
                return response;
            }
            return null;
        };
        this._cacheableResponse = new _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"](config);
    }
}



/***/ }),
/* 13 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheExpiration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["ExpirationPlugin"]; });



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__["CacheExpiration"]; });

/* harmony import */ var _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__["ExpirationPlugin"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return CacheExpiration; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */
class CacheExpiration {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     */
    constructor(cacheName, config = {}) {
        this._isRunning = false;
        this._rerunRequested = false;
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cacheName, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'constructor',
                paramName: 'cacheName',
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
                // TODO: Assert is positive
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
                // TODO: Assert is positive
            }
        }
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheName = cacheName;
        this._timestampModel = new _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__["CacheTimestampsModel"](cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
        if (this._isRunning) {
            this._rerunRequested = true;
            return;
        }
        this._isRunning = true;
        const minTimestamp = this._maxAgeSeconds ?
            Date.now() - (this._maxAgeSeconds * 1000) : 0;
        const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
        // Delete URLs from the cache
        const cache = await self.caches.open(this._cacheName);
        for (const url of urlsExpired) {
            await cache.delete(url);
        }
        if (true) {
            if (urlsExpired.length > 0) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Expired ${urlsExpired.length} ` +
                    `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` +
                    `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` +
                    `'${this._cacheName}' cache.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Expired the following ${urlsExpired.length === 1 ?
                    'URL' : 'URLs'}:`);
                urlsExpired.forEach((url) => workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`    ${url}`));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Cache expiration ran and found no entries to remove.`);
            }
        }
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            Object(workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__["dontWaitFor"])(this.expireEntries());
        }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(url, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'updateTimestamp',
                paramName: 'url',
            });
        }
        await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
        if (!this._maxAgeSeconds) {
            if (true) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"](`expired-test-without-max-age`, {
                    methodName: 'isURLExpired',
                    paramName: 'maxAgeSeconds',
                });
            }
            return false;
        }
        else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
            return (timestamp < expireOlderThan);
        }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
        // Make sure we don't attempt another rerun if we're called in the middle of
        // a cache expiration.
        this._rerunRequested = false;
        await this._timestampModel.expireEntries(Infinity); // Expires all.
    }
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dontWaitFor", function() { return dontWaitFor; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    promise.then(() => { });
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheTimestampsModel", function() { return CacheTimestampsModel; });
/* harmony import */ var workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var workbox_core_private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const DB_NAME = 'workbox-expiration';
const OBJECT_STORE_NAME = 'cache-entries';
const normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = '';
    return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._cacheName = cacheName;
        this._db = new workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_0__["DBWrapper"](DB_NAME, 1, {
            onupgradeneeded: (event) => this._handleUpgrade(event),
        });
    }
    /**
     * Should perform an upgrade of indexedDB.
     *
     * @param {Event} event
     *
     * @private
     */
    _handleUpgrade(event) {
        const db = event.target.result;
        // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
        // have to use the `id` keyPath here and create our own values (a
        // concatenation of `url + cacheName`) instead of simply using
        // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
        const objStore = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
        // TODO(philipwalton): once we don't have to support EdgeHTML, we can
        // create a single index with the keyPath `['cacheName', 'timestamp']`
        // instead of doing both these indexes.
        objStore.createIndex('cacheName', 'cacheName', { unique: false });
        objStore.createIndex('timestamp', 'timestamp', { unique: false });
        // Previous versions of `workbox-expiration` used `this._cacheName`
        // as the IDBDatabase name.
        Object(workbox_core_private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_1__["deleteDatabase"])(this._cacheName);
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
        url = normalizeURL(url);
        const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url),
        };
        await this._db.put(OBJECT_STORE_NAME, entry);
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number}
     *
     * @private
     */
    async getTimestamp(url) {
        const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
        return entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
        const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, 'readwrite', (txn, done) => {
            const store = txn.objectStore(OBJECT_STORE_NAME);
            const request = store.index('timestamp').openCursor(null, 'prev');
            const entriesToDelete = [];
            let entriesNotDeletedCount = 0;
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const result = cursor.value;
                    // TODO(philipwalton): once we can use a multi-key index, we
                    // won't have to check `cacheName` here.
                    if (result.cacheName === this._cacheName) {
                        // Delete an entry if it's older than the max age or
                        // if we already have the max number allowed.
                        if ((minTimestamp && result.timestamp < minTimestamp) ||
                            (maxCount && entriesNotDeletedCount >= maxCount)) {
                            // TODO(philipwalton): we should be able to delete the
                            // entry right here, but doing so causes an iteration
                            // bug in Safari stable (fixed in TP). Instead we can
                            // store the keys of the entries to delete, and then
                            // delete the separate transactions.
                            // https://github.com/GoogleChrome/workbox/issues/1978
                            // cursor.delete();
                            // We only need to return the URL, not the whole entry.
                            entriesToDelete.push(cursor.value);
                        }
                        else {
                            entriesNotDeletedCount++;
                        }
                    }
                    cursor.continue();
                }
                else {
                    done(entriesToDelete);
                }
            };
        });
        // TODO(philipwalton): once the Safari bug in the following issue is fixed,
        // we should be able to remove this loop and do the entry deletion in the
        // cursor loop above:
        // https://github.com/GoogleChrome/workbox/issues/1978
        const urlsDeleted = [];
        for (const entry of entriesToDelete) {
            await this._db.delete(OBJECT_STORE_NAME, entry.id);
            urlsDeleted.push(entry.url);
        }
        return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        return this._cacheName + '|' + normalizeURL(url);
    }
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrapper", function() { return DBWrapper; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */
class DBWrapper {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {!Function} [callbacks.onupgradeneeded]
     * @param {!Function} [callbacks.onversionchange] Defaults to
     *     DBWrapper.prototype._onversionchange when not specified.
     * @private
     */
    constructor(name, version, { onupgradeneeded, onversionchange, } = {}) {
        this._db = null;
        this._name = name;
        this._version = version;
        this._onupgradeneeded = onupgradeneeded;
        this._onversionchange = onversionchange || (() => this.close());
    }
    /**
     * Returns the IDBDatabase instance (not normally needed).
     * @return {IDBDatabase|undefined}
     *
     * @private
     */
    get db() {
        return this._db;
    }
    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     * @private
     */
    async open() {
        if (this._db)
            return;
        this._db = await new Promise((resolve, reject) => {
            // This flag is flipped to true if the timeout callback runs prior
            // to the request failing or succeeding. Note: we use a timeout instead
            // of an onblocked handler since there are cases where onblocked will
            // never never run. A timeout better handles all possible scenarios:
            // https://github.com/w3c/IndexedDB/issues/223
            let openRequestTimedOut = false;
            setTimeout(() => {
                openRequestTimedOut = true;
                reject(new Error('The open request was blocked and timed out'));
            }, this.OPEN_TIMEOUT);
            const openRequest = indexedDB.open(this._name, this._version);
            openRequest.onerror = () => reject(openRequest.error);
            openRequest.onupgradeneeded = (evt) => {
                if (openRequestTimedOut) {
                    openRequest.transaction.abort();
                    openRequest.result.close();
                }
                else if (typeof this._onupgradeneeded === 'function') {
                    this._onupgradeneeded(evt);
                }
            };
            openRequest.onsuccess = () => {
                const db = openRequest.result;
                if (openRequestTimedOut) {
                    db.close();
                }
                else {
                    db.onversionchange = this._onversionchange.bind(this);
                    resolve(db);
                }
            };
        });
        return this;
    }
    /**
     * Polyfills the native `getKey()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @return {Array}
     * @private
     */
    async getKey(storeName, query) {
        return (await this.getAllKeys(storeName, query, 1))[0];
    }
    /**
     * Polyfills the native `getAll()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAll(storeName, query, count) {
        return await this.getAllMatching(storeName, { query, count });
    }
    /**
     * Polyfills the native `getAllKeys()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAllKeys(storeName, query, count) {
        const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
        return entries.map((entry) => entry.key);
    }
    /**
     * Supports flexible lookup in an object store by specifying an index,
     * query, direction, and count. This method returns an array of objects
     * with the signature .
     *
     * @param {string} storeName
     * @param {Object} [opts]
     * @param {string} [opts.index] The index to use (if specified).
     * @param {*} [opts.query]
     * @param {IDBCursorDirection} [opts.direction]
     * @param {number} [opts.count] The max number of results to return.
     * @param {boolean} [opts.includeKeys] When true, the structure of the
     *     returned objects is changed from an array of values to an array of
     *     objects in the form {key, primaryKey, value}.
     * @return {Array}
     * @private
     */
    async getAllMatching(storeName, { index, query = null, // IE/Edge errors if query === `undefined`.
    direction = 'next', count, includeKeys = false, } = {}) {
        return await this.transaction([storeName], 'readonly', (txn, done) => {
            const store = txn.objectStore(storeName);
            const target = index ? store.index(index) : store;
            const results = [];
            const request = target.openCursor(query, direction);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    results.push(includeKeys ? cursor : cursor.value);
                    if (count && results.length >= count) {
                        done(results);
                    }
                    else {
                        cursor.continue();
                    }
                }
                else {
                    done(results);
                }
            };
        });
    }
    /**
     * Accepts a list of stores, a transaction type, and a callback and
     * performs a transaction. A promise is returned that resolves to whatever
     * value the callback chooses. The callback holds all the transaction logic
     * and is invoked with two arguments:
     *   1. The IDBTransaction object
     *   2. A `done` function, that's used to resolve the promise when
     *      when the transaction is done, if passed a value, the promise is
     *      resolved to that value.
     *
     * @param {Array<string>} storeNames An array of object store names
     *     involved in the transaction.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {!Function} callback
     * @return {*} The result of the transaction ran by the callback.
     * @private
     */
    async transaction(storeNames, type, callback) {
        await this.open();
        return await new Promise((resolve, reject) => {
            const txn = this._db.transaction(storeNames, type);
            txn.onabort = () => reject(txn.error);
            txn.oncomplete = () => resolve();
            callback(txn, (value) => resolve(value));
        });
    }
    /**
     * Delegates async to a native IDBObjectStore method.
     *
     * @param {string} method The method name.
     * @param {string} storeName The object store name.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {...*} args The list of args to pass to the native method.
     * @return {*} The result of the transaction.
     * @private
     */
    async _call(method, storeName, type, ...args) {
        const callback = (txn, done) => {
            const objStore = txn.objectStore(storeName);
            // TODO(philipwalton): Fix this underlying TS2684 error.
            // @ts-ignore
            const request = objStore[method].apply(objStore, args);
            request.onsuccess = () => done(request.result);
        };
        return await this.transaction([storeName], type, callback);
    }
    /**
     * Closes the connection opened by `DBWrapper.open()`. Generally this method
     * doesn't need to be called since:
     *   1. It's usually better to keep a connection open since opening
     *      a new connection is somewhat slow.
     *   2. Connections are automatically closed when the reference is
     *      garbage collected.
     * The primary use case for needing to close a connection is when another
     * reference (typically in another tab) needs to upgrade it and would be
     * blocked by the current, open connection.
     *
     * @private
     */
    close() {
        if (this._db) {
            this._db.close();
            this._db = null;
        }
    }
}
// Exposed on the prototype to let users modify the default timeout on a
// per-instance or global basis.
DBWrapper.prototype.OPEN_TIMEOUT = 2000;
// Wrap native IDBObjectStore methods according to their mode.
const methodsToWrap = {
    readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
    readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
        if (method in IDBObjectStore.prototype) {
            // Don't use arrow functions here since we're outside of the class.
            DBWrapper.prototype[method] =
                async function (storeName, ...args) {
                    return await this._call(method, storeName, mode, ...args);
                };
        }
    }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDatabase", function() { return deleteDatabase; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Deletes the database.
 * Note: this is exported separately from the DBWrapper module because most
 * usages of IndexedDB in workbox dont need deleting, and this way it can be
 * reused in tests to delete databases without creating DBWrapper instances.
 *
 * @param {string} name The database name.
 * @private
 */
const deleteDatabase = async (name) => {
    await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(name);
        request.onerror = () => {
            reject(request.error);
        };
        request.onblocked = () => {
            reject(new Error('Delete blocked'));
        };
        request.onsuccess = () => {
            resolve();
        };
    });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:expiration:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return ExpirationPlugin; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in the Workbox APIs to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the used Cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */
class ExpirationPlugin {
    /**
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when a `Response` is about to be returned
         * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
         * the handler. It allows the `Response` to be inspected for freshness and
         * prevents it from being used if the `Response`'s `Date` header value is
         * older than the configured `maxAgeSeconds`.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache the response is in.
         * @param {Response} options.cachedResponse The `Response` object that's been
         *     read from a cache and whose freshness should be checked.
         * @return {Response} Either the `cachedResponse`, if it's
         *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
         *
         * @private
         */
        this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
                return null;
            }
            let isFresh = this._isResponseDateFresh(cachedResponse);
            // Expire entries to ensure that even if the expiration date has
            // expired, it'll only be used once.
            const cacheExpiration = this._getCacheExpiration(cacheName);
            Object(workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__["dontWaitFor"])(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (true) {
                        // The event may not be a fetch event; only log the URL if it is.
                        if ('request' in event) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                                `updating cache entry for ` +
                                `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(event.request.url)}'.`);
                        }
                    }
                }
            }
            return isFresh ? cachedResponse : null;
        };
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when an entry is added to a cache.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache that was updated.
         * @param {string} options.request The Request for the cached entry.
         *
         * @private
         */
        this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (true) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cacheName, 'string', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'cacheName',
                });
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'request',
                });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (true) {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            Object(workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__["registerQuotaErrorCallback"])(() => this.deleteCacheAndMetadata());
        }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
        if (cacheName === workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName()) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__["CacheExpiration"](cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
            // We aren't expiring by age, so return true, it's fresh
            return true;
        }
        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
            // Unable to parse date, so assume it's fresh.
            return true;
        }
        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        const now = Date.now();
        return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
            return null;
        }
        const dateHeader = cachedResponse.headers.get('date');
        const parsedDate = new Date(dateHeader);
        const headerTime = parsedDate.getTime();
        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
            return null;
        }
        return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
        // Do this one at a time instead of all at once via `Promise.all()` to
        // reduce the chance of inconsistency if a promise rejects.
        for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
        }
        // Reset this._cacheExpirations to its initial state.
        this._cacheExpirations = new Map();
    }
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return registerQuotaErrorCallback; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */
function registerQuotaErrorCallback(callback) {
    if (true) {
        _private_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"].isType(callback, 'function', {
            moduleName: 'workbox-core',
            funcName: 'register',
            paramName: 'callback',
        });
    }
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__["quotaErrorCallbacks"].add(callback);
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Registered a callback to respond to quota errors.', callback);
    }
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),
/* 25 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cleanupOutdatedCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandlerBoundToURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getCacheKeyForURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["matchPrecache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]; });



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_js__WEBPACK_IMPORTED_MODULE_1__["addPlugins"]; });

/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_js__WEBPACK_IMPORTED_MODULE_2__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_3__["cleanupOutdatedCaches"]; });

/* harmony import */ var _createHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _createHandler_js__WEBPACK_IMPORTED_MODULE_4__["createHandler"]; });

/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_5__["createHandlerBoundToURL"]; });

/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_6__["getCacheKeyForURL"]; });

/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _matchPrecache_js__WEBPACK_IMPORTED_MODULE_7__["matchPrecache"]; });

/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_js__WEBPACK_IMPORTED_MODULE_8__["precache"]; });

/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_9__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_js__WEBPACK_IMPORTED_MODULE_10__["PrecacheController"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












if (true) {
    workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isSWEnv('workbox-precaching');
}
/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to determine when performed.
 *
 * @module workbox-precaching
 */



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(newPlugins) {
    _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__["precachePlugins"].add(newPlugins);
}
;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precachePlugins", function() { return precachePlugins; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        plugins.push(...newPlugins);
    },
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var _utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let listenerAdded = false;
/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    if (!listenerAdded) {
        Object(_utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__["addFetchListener"])(options);
        listenerAdded = true;
    }
}
;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFetchListener", function() { return addFetchListener; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 */
const addFetchListener = ({ ignoreURLParametersMatching = [/^utm_/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = Object(_getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__["getCacheKeyForURL"])(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Precaching did not find a match for ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
            }
            return;
        }
        let responsePromise = self.caches.open(cacheName).then((cache) => {
            return cache.match(precachedURL);
        }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(`The precached response for ` +
                    `${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(precachedURL)} in ${cacheName} was not found. ` +
                    `Falling back to the network instead.`);
            }
            return fetch(precachedURL);
        });
        if (true) {
            responsePromise = responsePromise.then((response) => {
                // Workbox is going to handle the route.
                // print the routing details to the console.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Precaching is responding to: ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Serving the precached url: ${precachedURL}`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View request details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(event.request);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                return response;
            });
        }
        event.respondWith(responsePromise);
    }));
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
    const precacheController = Object(_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of Object(_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__["generateURLVariations"])(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
    }
    return precacheController;
};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName);
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = Object(_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__["createCacheKey"])(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * @param {Object} options
     * @param {Event} [options.event] The install event (if needed).
     * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
     * and caching during install.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    async install({ event, plugins } = {}) {
        if (true) {
            if (plugins) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(plugins, {
                    moduleName: 'workbox-precaching',
                    className: 'PrecacheController',
                    funcName: 'install',
                    paramName: 'plugins',
                });
            }
        }
        const toBePrecached = [];
        const alreadyPrecached = [];
        const cache = await self.caches.open(this._cacheName);
        const alreadyCachedRequests = await cache.keys();
        const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
            if (existingCacheKeys.has(cacheKey)) {
                alreadyPrecached.push(url);
            }
            else {
                toBePrecached.push({ cacheKey, url });
            }
        }
        const precacheRequests = toBePrecached.map(({ cacheKey, url }) => {
            const integrity = this._cacheKeysToIntegrities.get(cacheKey);
            const cacheMode = this._urlsToCacheModes.get(url);
            return this._addURLToCache({
                cacheKey,
                cacheMode,
                event,
                integrity,
                plugins,
                url,
            });
        });
        await Promise.all(precacheRequests);
        const updatedURLs = toBePrecached.map((item) => item.url);
        if (true) {
            Object(_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__["printInstallDetails"])(updatedURLs, alreadyPrecached);
        }
        return {
            updatedURLs,
            notUpdatedURLs: alreadyPrecached,
        };
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    async activate() {
        const cache = await self.caches.open(this._cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
            if (!expectedCacheKeys.has(request.url)) {
                await cache.delete(request);
                deletedURLs.push(request.url);
            }
        }
        if (true) {
            Object(_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__["printCleanupDetails"])(deletedURLs);
        }
        return { deletedURLs };
    }
    /**
     * Requests the entry and saves it to the cache if the response is valid.
     * By default, any response with a status code of less than 400 (including
     * opaque responses) is considered valid.
     *
     * If you need to use custom criteria to determine what's valid and what
     * isn't, then pass in an item in `options.plugins` that implements the
     * `cacheWillUpdate()` lifecycle event.
     *
     * @private
     * @param {Object} options
     * @param {string} options.cacheKey The string to use a cache key.
     * @param {string} options.url The URL to fetch and cache.
     * @param {string} [options.cacheMode] The cache mode for the network request.
     * @param {Event} [options.event] The install event (if passed).
     * @param {Array<Object>} [options.plugins] An array of plugins to apply to
     * fetch and caching.
     * @param {string} [options.integrity] The value to use for the `integrity`
     * field when making the request.
     */
    async _addURLToCache({ cacheKey, url, cacheMode, event, plugins, integrity }) {
        const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: 'same-origin',
        });
        let response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            event,
            plugins,
            request,
        });
        // Allow developers to override the default logic about what is and isn't
        // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
        // a `CacheableResponsePlugin` instance.
        let cacheWillUpdatePlugin;
        for (const plugin of (plugins || [])) {
            if ('cacheWillUpdate' in plugin) {
                cacheWillUpdatePlugin = plugin;
            }
        }
        const isValidResponse = cacheWillUpdatePlugin ?
            // Use a callback if provided. It returns a truthy value if valid.
            // NOTE: invoke the method on the plugin instance so the `this` context
            // is correct.
            await cacheWillUpdatePlugin.cacheWillUpdate({ event, request, response }) :
            // Otherwise, default to considering any response status under 400 valid.
            // This includes, by default, considering opaque responses valid.
            response.status < 400;
        // Consider this a failure, leading to the `install` handler failing, if
        // we get back an invalid response.
        if (!isValidResponse) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await Object(workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__["copyResponse"])(response);
        }
        await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            event,
            plugins,
            response,
            // `request` already uses `url`. We may be able to reuse it.
            request: cacheKey === url ? request : new Request(cacheKey),
            cacheName: this._cacheName,
            matchOptions: {
                ignoreSearch: true,
            },
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this._cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that can be used within a
     * {@link module:workbox-routing.Route} that will find a response for the
     * incoming request against the precache.
     *
     * If for an unexpected reason there is a cache miss for the request,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandler(fallbackToNetwork = true) {
        return async ({ request }) => {
            try {
                const response = await this.matchPrecache(request);
                if (response) {
                    return response;
                }
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].debug(`Unable to respond with precached response. ` +
                            `Falling back to network.`, error);
                    }
                    return fetch(request);
                }
                throw error;
            }
        };
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * If for an unexpected reason there is a cache miss when looking up `url`,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url, fallbackToNetwork = true) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return cacheWrapper; });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions, }) => {
    if (true) {
        if (request.method && request.method !== 'GET') {
            throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('attempt-to-cache-non-get-request', {
                url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url),
                method: request.method,
            });
        }
    }
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot cache non-existent response for ` +
                `'${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}'.`);
        }
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('cache-put-with-no-response', {
            url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url),
        });
    }
    let responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Response '${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}' will ` +
                `not be cached.`, responseToCache);
        }
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    let oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Updating the '${cacheName}' cache with a new Response for ` +
            `${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}.`);
    }
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await Object(_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["executeQuotaErrorCallbacks"])();
        }
        throw error;
    }
    for (let plugin of updatePlugins) {
        await plugin["cacheDidUpdate" /* CACHE_DID_UPDATE */].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest,
        });
    }
};
/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that prompted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [], }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'read'
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
        if (cachedResponse) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Found a cached response in '${cacheName}'.`);
        }
        else {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No cached response found in '${cacheName}'.`);
        }
    }
    for (const plugin of plugins) {
        if ("cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */ in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */];
            cachedResponse = await pluginMethod.call(plugin, {
                cacheName,
                event,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
            });
            if (true) {
                if (cachedResponse) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(cachedResponse, Response, {
                        moduleName: 'Plugin',
                        funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                        isReturnValueProblem: true,
                    });
                }
            }
        }
    }
    return cachedResponse;
};
/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({ request, response, event, plugins = [], }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (let plugin of plugins) {
        if ("cacheWillUpdate" /* CACHE_WILL_UPDATE */ in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate" /* CACHE_WILL_UPDATE */];
            responseToCache = await pluginMethod.call(plugin, {
                request,
                response: responseToCache,
                event,
            });
            if (true) {
                if (responseToCache) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(responseToCache, Response, {
                        moduleName: 'Plugin',
                        funcName: "cacheWillUpdate" /* CACHE_WILL_UPDATE */,
                        isReturnValueProblem: true,
                    });
                }
            }
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (true) {
            if (responseToCache) {
                if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The response for '${request.url}' is an opaque ` +
                            `response. The caching strategy that you're using will not ` +
                            `cache opaque responses by default.`);
                    }
                    else {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`The response for '${request.url}' returned ` +
                            `a status code of '${response.status}' and won't be cached as a ` +
                            `result.`);
                    }
                }
            }
        }
        responseToCache = responseToCache && responseToCache.status === 200 ?
            responseToCache : undefined;
    }
    return responseToCache ? responseToCache : null;
};
/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({ request, mode, plugins = [], }) => {
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (true) {
            _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(effectiveRequest, Request, {
                moduleName: 'Plugin',
                funcName: "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */,
                isReturnValueProblem: true,
            });
        }
    }
    return effectiveRequest;
};
const cacheWrapper = {
    put: putWrapper,
    match: matchWrapper,
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
    }
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUtils", function() { return pluginUtils; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const pluginUtils = {
    filter: (plugins, callbackName) => {
        return plugins.filter((plugin) => callbackName in plugin);
    },
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {ExtendableEvent} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({ request, fetchOptions, event, plugins = [], }) => {
    if (typeof request === 'string') {
        request = new Request(request);
    }
    // We *should* be able to call `await event.preloadResponse` even if it's
    // undefined, but for some reason, doing so leads to errors in our Node unit
    // tests. To work around that, explicitly check preloadResponse's value first.
    if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
            if (true) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`Using a preloaded navigation response for ` +
                    `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}'`);
            }
            return possiblePreloadResponse;
        }
    }
    if (true) {
        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
            paramName: 'request',
            expectedClass: Request,
            moduleName: 'workbox-core',
            className: 'fetchWrapper',
            funcName: 'wrappedFetch',
        });
    }
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = failedFetchPlugins.length > 0 ?
        request.clone() : null;
    try {
        for (let plugin of plugins) {
            if ("requestWillFetch" /* REQUEST_WILL_FETCH */ in plugin) {
                const pluginMethod = plugin["requestWillFetch" /* REQUEST_WILL_FETCH */];
                const requestClone = request.clone();
                request = (await pluginMethod.call(plugin, {
                    request: requestClone,
                    event,
                }));
                if (true) {
                    if (request) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
                            moduleName: 'Plugin',
                            funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('plugin-error-request-will-fetch', {
            thrownError: err,
        });
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (Most likely from a `fetch` event) to be different
    // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
    let pluginFilteredRequest = request.clone();
    try {
        let fetchResponse;
        // See https://github.com/GoogleChrome/workbox/issues/1796
        if (request.mode === 'navigate') {
            fetchResponse = await fetch(request);
        }
        else {
            fetchResponse = await fetch(request, fetchOptions);
        }
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' returned a response with ` +
                `status '${fetchResponse.status}'.`);
        }
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (true) {
                    if (fetchResponse) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(fetchResponse, Response, {
                            moduleName: 'Plugin',
                            funcName: "fetchDidSucceed" /* FETCH_DID_SUCCEED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' threw an error.`, error);
        }
        for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail" /* FETCH_DID_FAIL */].call(plugin, {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone(),
            });
        }
        throw error;
    }
};
const fetchWrapper = {
    fetch: wrappedFetch,
};



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return copyResponse; });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = Object(_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__["canConstructResponseFromBodyStream"])() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}
;



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return canConstructResponseFromBodyStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching, directoryIndex, cleanURLs, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
        event.waitUntil(Object(_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}
;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return createHandler; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandler} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandler} on that instance,
 * instead of using this function.
 *
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandler(fallbackToNetwork = true) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandler(fallbackToNetwork);
}
;



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return createHandlerBoundToURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandlerBoundToURL(url);
}
;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.getCacheKeyForURL(url);
}
;



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return matchPrecache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.matchPrecache(request);
}
;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    const plugins = _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error(`Service worker installation failed. It will ` +
                `be retried automatically during the next navigation.`);
        }
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    event.waitUntil(precacheController.activate());
};
/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    precacheController.addToCacheList(entries);
    if (entries.length > 0) {
        // NOTE: these listeners will only be added once (even if the `precache()`
        // method is called multiple times) because event listeners are implemented
        // as a set, where each listener must be unique.
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('install', installListener);
        self.addEventListener('activate', activateListener);
    }
}
;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    Object(_precache_js__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
    Object(_addRoute_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
}
;



/***/ }),
/* 54 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NavigationRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["RegExpRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["registerRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["setCatchHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["setDefaultHandler"]; });



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__["NavigationRoute"]; });

/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__["RegExpRoute"]; });

/* harmony import */ var _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__["registerRoute"]; });

/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route_js__WEBPACK_IMPORTED_MODULE_3__["Route"]; });

/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router_js__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony import */ var _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__["setCatchHandler"]; });

/* harmony import */ var _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__["setDefaultHandler"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return NavigationRoute; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class NavigationRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * If both `denylist` and `allowlist` are provided, the `denylist` will
     * take precedence and the request will not match this route.
     *
     * The regular expressions in `allowlist` and `denylist`
     * are matched against the concatenated
     * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
     * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
     * portions of the requested URL.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {Object} options
     * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
     * the route will not handle the request (even if a allowlist RegExp matches).
     * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
     * match the URL's pathname and search parameter, the route will handle the
     * request (assuming the denylist doesn't match).
     */
    constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(allowlist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.allowlist',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(denylist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.denylist',
            });
        }
        super((options) => this._match(options), handler);
        this._allowlist = allowlist;
        this._denylist = denylist;
    }
    /**
     * Routes match handler.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request
     * @return {boolean}
     *
     * @private
     */
    _match({ url, request }) {
        if (request && request.mode !== 'navigate') {
            return false;
        }
        const pathnameAndSearch = url.pathname + url.search;
        for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route ${pathnameAndSearch} is not ` +
                        `being used, since the URL matches this denylist pattern: ` +
                        `${regExp}`);
                }
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The navigation route ${pathnameAndSearch} ` +
                    `is being used.`);
            }
            return true;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route ${pathnameAndSearch} is not ` +
                `being used, since the URL being navigated to doesn't ` +
                `match the allowlist.`);
        }
        return false;
    }
}



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["defaultMethod"]) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validMethods"], { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__["normalizeHandler"])(handler);
        this.match = match;
        this.method = method;
    }
}



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMethod", function() { return defaultMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMethods", function() { return validMethods; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:routing:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHandler", function() { return normalizeHandler; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return RegExpRoute; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The regular expression '${regExp}' only partially matched ` +
                        `against the cross-origin URL '${url}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return registerRoute; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http') ?
                captureUrl.pathname : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (valueToCheck.match(new RegExp(`${wildcards}`))) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if ((url.pathname === captureUrl.pathname) &&
                    (url.origin !== captureUrl.origin)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__["RegExpRoute"](capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"]) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__["getOrCreateDefaultRouter"])();
    defaultRouter.registerRoute(route);
    return route;
}
;



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateDefaultRouter", function() { return getOrCreateDefaultRouter; });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            if (event.data && event.data.type === 'CACHE_URLS') {
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle (this is usually
     *     from a fetch event, but it does not have to be).
     * @param {FetchEvent} [options.event] The event that triggered the request,
     *     if applicable.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        let { params, route } = this.findMatchingRoute({ url, request, event });
        let handler = route && route.handler;
        let debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        if (!handler && this._defaultHandler) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler.`);
            }
            handler = this._defaultHandler;
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`No route found for: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Router is responding to: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        if (responsePromise instanceof Promise && this._catchHandler) {
            responsePromise = responsePromise.catch((err) => {
                if (true) {
                    // Still include URL here as it will be async from the console group
                    // and may not make sense without the URL
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Error thrown when responding to: ` +
                        ` ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}. Falling back to Catch Handler.`);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Error thrown by:`, route);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(err);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
                }
                return this._catchHandler.handle({ url, request, event });
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request The request to match.
     * @param {Event} [options.event] The corresponding event (unless N/A).
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(url, URL, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'findMatchingRoute',
                paramName: 'options.url',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'findMatchingRoute',
                paramName: 'options.request',
            });
        }
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            let matchResult = route.match({ url, request, event });
            if (matchResult) {
                // See https://github.com/GoogleChrome/workbox/issues/2079
                params = matchResult;
                if (Array.isArray(matchResult) && matchResult.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object &&
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setDefaultHandler(handler) {
        this._defaultHandler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('unregister-route-route-not-registered');
        }
    }
}



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return setCatchHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setCatchHandler(handler) {
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
    defaultRouter.setCatchHandler(handler);
}
;



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return setDefaultHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setDefaultHandler(handler) {
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
    defaultRouter.setDefaultHandler(handler);
}
;



/***/ }),
/* 67 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["StaleWhileRevalidate"]; });



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__["CacheFirst"]; });

/* harmony import */ var _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__["CacheOnly"]; });

/* harmony import */ var _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]; });

/* harmony import */ var _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__["NetworkOnly"]; });

/* harmony import */ var _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__["StaleWhileRevalidate"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return CacheFirst; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class CacheFirst {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'CacheFirst',
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        let response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (!response) {
            if (true) {
                logs.push(`No response found in the '${this._cacheName}' cache. ` +
                    `Will respond with a network request.`);
            }
            try {
                response = await this._getFromNetwork(request, event);
            }
            catch (err) {
                error = err;
            }
            if (true) {
                if (response) {
                    logs.push(`Got response from network.`);
                }
                else {
                    logs.push(`Unable to get a response from the network.`);
                }
            }
        }
        else {
            if (true) {
                logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('CacheFirst', request));
            for (let log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
    /**
     * Handles the network and cache part of CacheFirst.
     *
     * @param {Request} request
     * @param {Event} [event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getFromNetwork(request, event) {
        const response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        // Keep the service worker while we put the request to the cache
        const responseClone = response.clone();
        const cachePutPromise = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            cacheName: this._cacheName,
            request,
            response: responseClone,
            event,
            plugins: this._plugins,
        });
        if (event) {
            try {
                event.waitUntil(cachePutPromise);
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                        `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                }
            }
        }
        return response;
    }
}



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`View the final response here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(response || '[No response returned]');
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
        }
    },
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:strategies:5.0.0'] && _();
}
catch (e) { }


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return CacheOnly; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class CacheOnly {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'CacheOnly',
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        const response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__["messages"].strategyStart('CacheOnly', request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Found a cached response in the '${this._cacheName}'` +
                    ` cache.`);
                _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__["messages"].printFinalResponse(response);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`No response found in the '${this._cacheName}' cache.`);
            }
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('no-response', { url: request.url });
        }
        return response;
    }
}



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return NetworkFirst; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_9__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class NetworkFirst {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} options.networkTimeoutSeconds If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        if (options.plugins) {
            let isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (true) {
            if (this._networkTimeoutSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(this._networkTimeoutSeconds, 'number', {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkFirst',
                    funcName: 'constructor',
                    paramName: 'networkTimeoutSeconds',
                });
            }
        }
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'NetworkFirst',
                funcName: 'handle',
                paramName: 'makeRequest',
            });
        }
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, event, logs });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, event, logs });
        promises.push(networkPromise);
        // Promise.race() will resolve as soon as the first promise resolves.
        let response = await Promise.race(promises);
        // If Promise.race() resolved with null, it might be due to a network
        // timeout + a cache miss. If that were to happen, we'd rather wait until
        // the networkPromise resolves instead of returning null.
        // Note that it's fine to await an already-resolved promise, so we don't
        // have to check to see if it's still "in flight".
        if (!response) {
            response = await networkPromise;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('NetworkFirst', request));
            for (let log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, event }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (true) {
                    logs.push(`Timing out the network response at ` +
                        `${this._networkTimeoutSeconds} seconds.`);
                }
                resolve(await this._respondFromCache({ request, event }));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, event }) {
        let error;
        let response;
        try {
            response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
                request,
                event,
                fetchOptions: this._fetchOptions,
                plugins: this._plugins,
            });
        }
        catch (err) {
            error = err;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (true) {
            if (response) {
                logs.push(`Got response from network.`);
            }
            else {
                logs.push(`Unable to get a response from the network. Will respond ` +
                    `with a cached response.`);
            }
        }
        if (error || !response) {
            response = await this._respondFromCache({ request, event });
            if (true) {
                if (response) {
                    logs.push(`Found a cached response in the '${this._cacheName}'` +
                        ` cache.`);
                }
                else {
                    logs.push(`No response found in the '${this._cacheName}' cache.`);
                }
            }
        }
        else {
            // Keep the service worker alive while we put the request in the cache
            const responseClone = response.clone();
            const cachePut = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
                cacheName: this._cacheName,
                request,
                response: responseClone,
                event,
                plugins: this._plugins,
            });
            if (event) {
                try {
                    // The event has been responded to so we can keep the SW alive to
                    // respond to the request
                    event.waitUntil(cachePut);
                }
                catch (err) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                            `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                    }
                }
            }
        }
        return response;
    }
    /**
     * Used if the network timeouts or fails to make the request.
     *
     * @param {Object} options
     * @param {Request} request The request to match in the cache
     * @param {Event} [options.event]
     * @return {Promise<Object>}
     *
     * @private
     */
    _respondFromCache({ event, request }) {
        return workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
    }
}



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheOkAndOpaquePlugin", function() { return cacheOkAndOpaquePlugin; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return NetworkOnly; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class NetworkOnly {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     */
    constructor(options = {}) {
        this._plugins = options.plugins || [];
        this._fetchOptions = options.fetchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request The request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'NetworkOnly',
                funcName: 'handle',
                paramName: 'request',
            });
        }
        let error;
        let response;
        try {
            response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__["fetchWrapper"].fetch({
                request,
                event,
                fetchOptions: this._fetchOptions,
                plugins: this._plugins,
            });
        }
        catch (err) {
            error = err;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__["messages"].strategyStart('NetworkOnly', request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Got response from network.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Unable to get a response from the network.`);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return StaleWhileRevalidate; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_9__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class StaleWhileRevalidate {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        if (options.plugins) {
            let isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
        }
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'StaleWhileRevalidate',
                funcName: 'handle',
                paramName: 'request',
            });
        }
        const fetchAndCachePromise = this._getFromNetwork({ request, event });
        let response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (response) {
            if (true) {
                logs.push(`Found a cached response in the '${this._cacheName}'` +
                    ` cache. Will update with the network response in the background.`);
            }
            if (event) {
                try {
                    event.waitUntil(fetchAndCachePromise);
                }
                catch (error) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                            `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                    }
                }
            }
        }
        else {
            if (true) {
                logs.push(`No response found in the '${this._cacheName}' cache. ` +
                    `Will wait for the network response.`);
            }
            try {
                response = await fetchAndCachePromise;
            }
            catch (err) {
                error = err;
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('StaleWhileRevalidate', request));
            for (let log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getFromNetwork({ request, event }) {
        const response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        const cachePutPromise = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            cacheName: this._cacheName,
            request,
            response: response.clone(),
            event,
            plugins: this._plugins,
        });
        if (event) {
            try {
                event.waitUntil(cachePutPromise);
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                        `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                }
            }
        }
        return response;
    }
}



/***/ })
/******/ ]);