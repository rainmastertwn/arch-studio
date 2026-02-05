import PTDImg from '~/assets/images/waterManagement/PTD.webp'
import RODImg from '~/assets/images/waterManagement/ROD.webp'
import GRDImg from '~/assets/images/waterManagement/GRD.webp'
import EGRDImg from '~/assets/images/waterManagement/EGRD.webp'
import PGRDImg from '~/assets/images/waterManagement/PGRD.webp'
import SPDImg from '~/assets/images/waterManagement/SPD.webp'
import DPDImg from '~/assets/images/waterManagement/DPD.webp'
import CWSDImg from '~/assets/images/waterManagement/CWSD.webp'
import SGRDImg from '~/assets/images/waterManagement/SGRD.webp'
import DIDImg from '~/assets/images/waterManagement/DID.webp'
import RLDImg from '~/assets/images/waterManagement/RLD.webp'
import HPDImg from '~/assets/images/waterManagement/HPD.webp'
import GSWImg from '~/assets/images/waterManagement/GSW.webp'
import CCDImg from '~/assets/images/waterManagement/CCD.webp'
import CWDImg from '~/assets/images/waterManagement/CWD.webp'
import LEPImg from '~/assets/images/waterManagement/LEP.webp'
import CWSImg from '~/assets/images/waterManagement/CWS.webp'
import NRNImg from '~/assets/images/waterManagement/NRN.webp'
import URSImg from '~/assets/images/waterManagement/URS.webp'
import RNImg from '~/assets/images/waterManagement/RN.webp'
import GSDImg from '~/assets/images/waterManagement/GSD.webp'

// category: 雨水排水 SD、儲存雨水 RS、滲透雨水 RI

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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
    }
  ]
}
// 屋頂點排水
export const ROD = {
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
// 人工溼地滯水
export const CWD = {
  category: ['SD', 'RS'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
  category: ['SD', 'RS'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
// 人工溼地儲水
export const CWS = {
  category: ['SD', 'RS'],
  value: '人工溼地儲水',
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
// 流出抑制不滲透
export const NRN = {
  category: ['SD', 'RS'],
  value: '流出抑制不滲透',
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
// 地下儲存雨水
export const URS = {
  category: ['SD', 'RS'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
// 流出抑制滲透
export const RN = {
  category: ['SD', 'RI'],
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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
      title: '2026 型錄 PDF',
      link: '#'
    },
    {
      type: 'CAD',
      title: '2027 圖說 CAD',
      link: '#'
    },
    {
      type: 'XLS',
      title: '2027 圖說 XLS',
      link: '#'
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

export const watermanagementData = [
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
  RLD,
  HPD,
  GSW,
  CCD,
  CWD,
  LEP,
  CWS,
  NRN,
  URS,
  RN,
  GSD
]
