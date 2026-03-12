import PTDImg from '~/assets/images/waterManagement/PTD.png'
import RODImg from '~/assets/images/waterManagement/ROD.png'
import GRDImg from '~/assets/images/waterManagement/GRD.png'
import EGRDImg from '~/assets/images/waterManagement/EGRD.png'
import PGRDImg from '~/assets/images/waterManagement/PGRD.png'
import SPDImg from '~/assets/images/waterManagement/SPD.png'
import DPDImg from '~/assets/images/waterManagement/DPD.png'
import CWSDImg from '~/assets/images/waterManagement/CWSD.png'
import SGRDImg from '~/assets/images/waterManagement/SGRD.png'
import DIDImg from '~/assets/images/waterManagement/DID.png'
import RLDImg from '~/assets/images/waterManagement/RLD.png'
import HPDImg from '~/assets/images/waterManagement/HPD.png'
import GSWImg from '~/assets/images/waterManagement/GSW.png'
import CCDImg from '~/assets/images/waterManagement/CCD.png'
import CWDImg from '~/assets/images/waterManagement/CWD.png'
import LEPImg from '~/assets/images/waterManagement/LEP.png'
import CWSImg from '~/assets/images/waterManagement/CWS.png'
import NRNImg from '~/assets/images/waterManagement/NRN.png'
import URSImg from '~/assets/images/waterManagement/URS.png'
import RNImg from '~/assets/images/waterManagement/RN.png'
import GSDImg from '~/assets/images/waterManagement/GSD.png'
import EWImg from '~/assets/images/waterManagement/EW.png'
import LDImg from '~/assets/images/waterManagement/LD.png'
import SRQ5Img from '~/assets/images/waterManagement/SRQ5.png'
import SRQ6Q7Img from '~/assets/images/waterManagement/SRQ6Q7.png'
import GCDImg from '~/assets/images/waterManagement/GCD.png'
import SSIImg from '~/assets/images/waterManagement/SSI.png'

// category: 雨水排水 SD、儲存雨水 RS、滲透雨水 RI
// == 雨水排水 SD ==
// 犬走的排水
export const PTD = {
  category: ['SD'],
  value: '犬走的排水',
  title: '犬走，建築邊溝的排水',
  subTitle: '建築 犬走，建築邊溝排水設計',
  infoImg: {
    imgSrc: PTDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RL PP截水溝',
      link: 'https://www.coinn.tw/product/RL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/PTD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/PTD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/PTD/2027_drainage_Budget.xls'
    }
  ]
}
// 屋頂點排水
export const ROD = {
  category: ['SD'],
  value: '屋頂點排水',
  title: '屋頂點排水',
  subTitle: '建築 屋頂點排水設計',
  infoImg: {
    imgSrc: RODImg,
    label: ''
  },
  suggestions: [
    {
      label: 'FL 落水頭',
      link: 'https://www.coinn.tw/product/FL'
    },
    {
      label: 'SL 微型陰井',
      link: 'https://www.coinn.tw/product/SL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/ROD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/ROD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/ROD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 綠屋頂排水
export const GRD = {
  category: ['SD'],
  value: '綠屋頂排水',
  title: '人工地盤排水 × 綠屋頂排水',
  subTitle: '建築 綠屋頂排水設計',
  infoImg: {
    imgSrc: GRDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'FL 落水頭',
      link: 'https://www.coinn.tw/product/FL'
    },
    {
      label: 'SL 微型陰井',
      link: 'https://www.coinn.tw/product/SL'
    },
    {
      label: 'SC²大蓄水排水板',
      link: 'https://www.coinn.tw/product/SC'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/GRD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/GRD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/GRD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 薄層綠屋頂
export const EGRD = {
  category: ['SD'],
  value: '薄層綠屋頂',
  title: '人工地盤排水 × 薄層綠屋頂排水',
  subTitle: '建築薄層 綠屋頂排水設計',
  infoImg: {
    imgSrc: EGRDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'FL 落水頭',
      link: 'https://www.coinn.tw/product/FL'
    },
    {
      label: 'SL 微型陰井',
      link: 'https://www.coinn.tw/product/SL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/EGRD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/EGRD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/EGRD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 停車場上方綠屋頂排水
export const PGRD = {
  category: ['SD'],
  value: '停車場屋頂排水',
  title: '人工地盤排水 × 停車場上方綠屋頂排水',
  subTitle: '停車場上方 綠地排水設計',
  infoImg: {
    imgSrc: PGRDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'SD 雙面排水板',
      link: 'https://www.coinn.tw/product/SD'
    },
    {
      label: 'TKS 阻根防潮布',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/PGRD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/PGRD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/PGRD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 淺型花台排水
export const SPD = {
  category: ['SD'],
  value: '淺型花台排水',
  title: '人工地盤排水 × ≤60cm 淺型花台，社區中庭排水',
  subTitle: '草本植物與小灌木的淺型花台 排水設計',
  infoImg: {
    imgSrc: SPDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'FL 落水頭',
      link: 'https://www.coinn.tw/product/FL'
    },
    {
      label: 'SL 微型陰井',
      link: 'https://www.coinn.tw/product/SL'
    },
    {
      label: 'SC 小蓄水排水板',
      link: 'https://www.coinn.tw/product/SC'
    },
    {
      label: 'SW 滲透排水管',
      link: 'https://www.coinn.tw/product/SW'
    },
    {
      label: 'US 導水板',
      link: 'https://www.coinn.tw/product/US'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/SPD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/SPD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/SPD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 深型花台排水
export const DPD = {
  category: ['SD'],
  value: '深型花台排水',
  title: '人工地盤排水 × 深型花台排水≥60cm',
  subTitle: '灌木，喬木等木本植物的植栽槽排水設計',
  infoImg: {
    imgSrc: DPDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'TK 滲透水陰井',
      link: 'https://www.coinn.tw/product/TK'
    },
    {
      label: 'RF 滲透型陰井',
      link: 'https://www.coinn.tw/product/RF'
    },
    {
      label: 'SC 小蓄水排水板',
      link: 'https://www.coinn.tw/product/SC'
    },
    {
      label: 'TKS 阻根防潮布',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'US 防潮導水板',
      link: 'https://www.coinn.tw/product/US'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/DPD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/DPD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/DPD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 洗車場表面排水
export const CWSD = {
  category: ['SD'],
  value: '洗車場表面排水',
  title: '洗車場地坪排水 設計',
  subTitle: '洗車場表面排水 設計',
  infoImg: {
    imgSrc: CWSDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RL 塑膠截水溝',
      link: 'https://www.coinn.tw/product/RL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/CWSD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/CWSD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/CWSD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 斜屋頂綠化排水
export const SGRD = {
  category: ['SD'],
  value: '斜屋頂綠化排水',
  title: '斜屋頂的綠化排水',
  subTitle: '斜屋頂綠化排水 設計',
  infoImg: {
    imgSrc: SGRDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'US 導水排水板',
      link: 'https://www.coinn.tw/product/US'
    },
    {
      label: 'TKS 阻根防潮布',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'FP 滲透排水管',
      link: 'https://www.coinn.tw/product/FP'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/SGRD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/SGRD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/SGRD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 車道路口排水
export const DID = {
  category: ['SD'],
  value: '車道路口排水',
  title: '車道路口排水',
  subTitle: '車道路口排水 設計',
  infoImg: {
    imgSrc: DIDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RL 塑膠截水溝',
      link: 'https://www.coinn.tw/product/RL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/DID/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/DID/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/DID/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 屋頂線形排水
export const RLD = {
  category: ['SD'],
  value: '屋頂線形排水',
  title: '屋頂線形排水',
  subTitle: '屋頂線形排水設計',
  infoImg: {
    imgSrc: RLDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RL 塑膠截水溝',
      link: 'https://www.coinn.tw/product/RL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/RLD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/RLD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/RLD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 ≤60cm淺型花台排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 ≥60cm淺型花台排水',
      href: '#'
    }
  ]
}
// 硬鋪面點排水
export const HPD = {
  category: ['SD'],
  value: '硬鋪面點排水',
  title: '一個積水的點 × 硬鋪面',
  subTitle: '硬鋪面點排水 設計',
  infoImg: {
    imgSrc: HPDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'SL 微型陰井',
      link: 'https://www.coinn.tw/product/SL'
    },
    {
      label: 'FL 微型陰井',
      link: 'https://www.coinn.tw/product/FL'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/HPD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/HPD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/HPD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 草溝滯留排水
export const GSW = {
  category: ['SD'],
  value: '草溝滯留排水',
  title: '草溝滯留排水',
  subTitle: '透過地形收集雨水的草溝排水 設計',
  infoImg: {
    imgSrc: GSWImg,
    label: ''
  },
  suggestions: [
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'FP 滲透排水管',
      link: 'https://www.coinn.tw/product/FP'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/GSW/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/GSW/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/GSW/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 風雨球場排水
export const CCD = {
  category: ['SD'],
  value: '風雨球場排水',
  title: '風雨球場排水',
  subTitle: '風雨球場排水 設計',
  infoImg: {
    imgSrc: CCDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RN 塑膠截水溝',
      link: 'https://www.coinn.tw/product/RN'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/CCD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/CCD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/CCD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦 深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 植生綠地點排水
export const GSD = {
  category: ['SD'],
  value: '植生綠地點排水',
  title: '綠地排水 × 植生綠地點排水',
  subTitle: '收集地表逕流水並轉為滲透水的 設計方式',
  infoImg: {
    imgSrc: GSDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RF 滲透陰井',
      link: 'https://www.coinn.tw/product/RF'
    },
    {
      label: 'TK 滲透型陰井',
      link: 'https://www.coinn.tw/product/TK'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/GSD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/GSD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/GSD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 下凹式綠地排水
export const SGD = {
  category: ['SD'],
  value: '下凹式綠地排水',
  title: '草溝滯留排水',
  subTitle: '透過地形收集雨水的草溝排水 設計',
  infoImg: {
    imgSrc: GSWImg,
    label: ''
  },
  suggestions: [
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'FP 滲透排水管',
      link: 'https://www.coinn.tw/product/FP'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/SD/SGD/2027_drainage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/SD/SGD/2027_drainage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/SD/SGD/2027_drainage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}

// == 儲存雨水分類 RS ==
// 不滲透型流出抑制
export const NRN = {
  category: ['RS'],
  value: '不滲透型流出抑制',
  title: '流出抑制 × 不滲透型',
  subTitle: '流出抑制 × 不滲透型 設計',
  infoImg: {
    imgSrc: NRNImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RS 雨水積磚',
      link: 'https://www.coinn.tw/product/RS'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'TKS 坦克士不透水膜',
      link: 'https://www.coinn.tw/product/TKS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/NRN/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/NRN/2027_storage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RS/NRN/2027_storage_Budget.xlsx'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 景觀生態水池
export const LEP = {
  category: ['RS'],
  value: '景觀生態水池',
  title: '景觀生態水池',
  subTitle: '全蓄水型設計 設計',
  infoImg: {
    imgSrc: LEPImg,
    label: ''
  },
  suggestions: [
    {
      label: 'TKS 坦克士不透水膜',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/LEP/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/LEP/2027_storage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RS/LEP/2027_storage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 人工溼地滯水
export const CWD = {
  category: ['RS'],
  value: '人工溼地滯水',
  title: '人工溼地滯水',
  subTitle: '全滯水型 設計',
  infoImg: {
    imgSrc: CWDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'GCL 複層式皂土毯',
      link: 'https://www.coinn.tw/product/GCL'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/CWD/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/CWD/2027_storage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RS/CWD/2027_storage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 地上儲水澆灌
export const SSI = {
  category: ['RS'],
  value: '地上儲水澆灌',
  title: '地上型水撲滿',
  subTitle: '地上型水撲滿 設計',
  infoImg: {
    imgSrc: SSIImg,
    label: ''
  },
  suggestions: [
    {
      label: 'GCL 複層式皂土毯',
      link: 'https://www.coinn.tw/product/GCL'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/SSI/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/SSI/2027_storage.dwg'
    }
    // {
    //   type: 'XLS',
    //   title: '2027 預算 XLS',
    //   link: '#'
    // }
  ]
}
// 地下儲存雨水
export const URS = {
  category: ['RS'],
  value: '地下儲存雨水',
  title: '地下儲存雨水 × 防災再利用',
  subTitle: '地下儲存雨水防災 設計',
  infoImg: {
    imgSrc: URSImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RS 雨水積磚',
      link: 'https://www.coinn.tw/product/RS'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/URS/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/URS/2027_storage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RS/URS/2027_storage_Budget.xlsx'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}

// 景觀生態水道（待新增
export const EW = {
  category: ['RS'],
  value: '景觀生態水道',
  title: '景觀生態水道',
  subTitle: '滯水兼儲水型設計 設計',
  infoImg: {
    imgSrc: EWImg,
    label: ''
  },
  suggestions: [
    {
      label: 'TKS 坦克士不透水膜',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/EW/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/EW/2027_storage.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RS/EW/2027_storage_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}

// 地下儲水再利用(人工溼地滯水)
export const CWS = {
  category: ['RS'],
  value: '地下儲水再利用',
  title: '人工溼地儲滯水及水道設計',
  subTitle: '滯水兼儲水型設計 設計',
  infoImg: {
    imgSrc: CWSImg,
    label: ''
  },
  suggestions: [
    {
      label: 'TKS 坦克士不透水膜',
      link: 'https://www.coinn.tw/product/TKS'
    },
    {
      label: 'GCL 複層式皂土毯',
      link: 'https://www.coinn.tw/product/GCL'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RS/CWS/2027_storage_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RS/CWS/2027_storage.dwg'
    }
    // {
    //   type: 'XLS',
    //   title: '2027 預算 XLS',
    //   link: '#'
    // }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}

// == 滲透雨水分類 RI ==
// 滲透型流出抑制
export const RN = {
  category: ['RI'],
  value: '流出抑制滲透',
  title: '流出抑制 × 滲透保水型',
  subTitle: '滲透保水型流出抑制 設計',
  infoImg: {
    imgSrc: RNImg,
    label: ''
  },
  suggestions: [
    {
      label: 'RS 雨水積磚',
      link: 'https://www.coinn.tw/product/RS'
    },
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/RN/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/RN/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/RN/2027_infiltration_Budget.xlsx'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}
// 中時短濕地（人工溼地滯水）
export const ZYW = {
  category: ['RI'],
  value: '中時短濕地',
  title: '中時短濕地',
  subTitle: '全滯水型 設計',
  infoImg: {
    imgSrc: CWDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'GCL 複層式皂土毯',
      link: 'https://www.coinn.tw/product/GCL'
    },
    {
      label: 'SBR 地工織布',
      link: 'https://www.coinn.tw/product/SBR'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/ZYW/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/ZYW/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/ZYW/2027_infiltration_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 停車場頂板上方綠化排水',
      href: '#'
    },
    {
      label: '> ≥60cm花台排水',
      href: '#'
    }
  ]
}

// 公園草溝排水（草溝滯留排水）
export const PGS = {
  category: ['RI'],
  value: '公園草溝排水',
  title: '草溝滯留排水',
  subTitle: '透過地形收集雨水的草溝排水 設計',
  infoImg: {
    imgSrc: GSWImg,
    label: ''
  },
  suggestions: [
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'FP 滲透排水管',
      link: 'https://www.coinn.tw/product/FP'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/PGS/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/PGS/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/PGS/2027_infiltration_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}

// 綠地草坪排水（待新增
export const LD = {
  category: ['RI'],
  value: '綠地草坪排水',
  title: '綠地，平草地，球場排水',
  subTitle: '平草地排水 設計',
  infoImg: {
    imgSrc: LDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'CNS 地工不織布',
      link: 'https://www.coinn.tw/product/CNS'
    },
    {
      label: 'FP 滲透排水管',
      link: 'https://www.coinn.tw/product/FP'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/LD/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/LD/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/LD/2027_infiltration_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}

// 基地保水Q5（待新增
export const SRQ5 = {
  category: ['RI'],
  value: '基地保水Q5',
  title: '建築基地保水 Q₅',
  subTitle: 'Q₅貯集滲透框架 設計',
  infoImg: {
    imgSrc: SRQ5Img,
    label: ''
  },
  suggestions: [
    {
      label: 'SW 滲透排水網管',
      link: 'https://www.coinn.tw/product/SW'
    },
    {
      label: 'TK 滲透排水陰井',
      link: 'https://www.coinn.tw/product/TK'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/SRQ5/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/SRQ5/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/SRQ5/2027_infiltration_Budget.xlsx'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}
// 基地保水Q6+Q7（待新增
export const SRQ6Q7 = {
  category: ['RI'],
  value: '基地保水Q6+Q7',
  title: '建築基地保水 Q₆ + Q₇',
  subTitle: 'Q₆ 滲透排水管+ Q₇滲透陰井',
  infoImg: {
    imgSrc: SRQ6Q7Img,
    label: ''
  },
  suggestions: [
    {
      label: 'SW 滲透排水網管',
      link: 'https://www.coinn.tw/product/SW'
    },
    {
      label: 'TK 滲透排水陰井',
      link: 'https://www.coinn.tw/product/TK'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/SRQ6Q7/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/SRQ6Q7/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/SRQ6Q7/2027_infiltration_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}

// 高爾夫球場排水（待新增
export const GCD = {
  category: ['RI'],
  value: '高爾夫球場排水',
  title: '高爾夫球場綠地排水',
  subTitle: '軟式透水管綠地排水 設計',
  infoImg: {
    imgSrc: GCDImg,
    label: ''
  },
  suggestions: [
    {
      label: 'FD 軟式透水管',
      link: 'https://www.coinn.tw/product/FD'
    }
  ],
  download: [
    {
      type: 'PDF',
      title: '2027 圖說 PDF',
      link: '/file/RI/GCD/2027_infiltration_Model.pdf'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '/file/RI/GCD/2027_infiltration.dwg'
    },
    {
      type: 'XLS',
      title: '2027 預算 XLS',
      link: '/file/RI/GCD/2027_infiltration_Budget.xls'
    }
  ],
  comment: [
    {
      label: '> 推薦深入閱讀 平屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 綠屋頂排水',
      href: '#'
    },
    {
      label: '> 推薦深入閱讀 屋頂線形排水',
      href: '#'
    }
  ]
}

export const watermanagementData = {
  PTD,
  ROD,
  GRD,
  EGRD,
  PGRD,
  SPD,
  DPD,
  CWSD,
  SGRD,
  DID,
  SGD,
  RLD,
  HPD,
  GSW,
  CCD,
  GSD,
  NRN,
  LEP,
  CWD,
  SSI,
  URS,
  EW,
  CWS,
  RN,
  ZYW,
  PGS,
  LD,
  SRQ5,
  SRQ6Q7,
  GCD
}
