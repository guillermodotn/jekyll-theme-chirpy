import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid,
  loadCustomImageSlider,
} from './modules/components';

loadImg();
initToc();
imgPopup();
initSidebar();
initLocaleDatetime();
initClipboard();
initTopbar();
loadMermaid();
basic();
loadCustomImageSlider();