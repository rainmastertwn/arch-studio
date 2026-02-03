export type SRData = {
  label: string
  value: string
  title: string
  subTitle: string
  infoImg: {
    imgSrc: string
    label: string
  }[]
  info: {
    title: string
    items: {
      label: string
      content: string
    }[]
  }[]
  suggestions?: {
    label: string
    link: string
  }[]
  comment?: {
    label: string
    href: string
  }[]
}
export const srDataList: SRData[] = [
  {
    label: 'Q₁綠地及草溝',
    value: 'Q₁綠地及草溝',
    title: '基地保水Q₁ × 綠地、被覆地、草溝',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '綠地、被覆地、草溝 設計定義',
        items: [
          {
            label: '綠地',
            content: '草地或植栽區'
          },
          {
            label: '被覆地',
            content: '地披，樹木，木屑，礫石覆蓋區'
          },
          {
            label: '草溝',
            content: '利用地形創造自然雨水排水路'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'A₁',
            content: '綠地、被覆地、草溝面積(m²)<br/>草溝面積可算入草溝立體周邊面積'
          },
          {
            label: 'f',
            content: '最終入滲率'
          },
          {
            label: 't',
            content:
              '最大降雨延時，基準值為: 86400秒。<br/><span class="text-sm">*Q₁不計入有地下室的地面層與無植栽的裸露地。</span>'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式',
        items: [
          {
            label: '',
            content: 'Q₁=A₁×f×t'
          }
        ]
      }
    ],
    comment: [
      {
        label: '> 推薦深入閱讀 草溝排水 文章',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₂透水鋪面',
    value: 'Q₂透水鋪面',
    title: '基地保水Q₂ × 透水鋪面',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '透水鋪面 設計定義',
        items: [
          {
            label: '',
            content:
              '車道，步道，廣場等人類活動的地面構造。通常由連鎖磚、石塊、水泥塊、磁磚塊、木塊、HDPE格框等硬質材料以乾砌方式拚成，藉由表面材的乾砌間隙達成透水性能。'
          }
        ]
      },
      {
        title: '變數說明:',
        items: [
          {
            label: 'A₂',
            content: '透水鋪面面積(m²)'
          },
          {
            label: 'h',
            content: '鋪面下級配層厚度 ≤0.25m'
          },
          {
            label: 'f',
            content: '最終入滲率。'
          },
          {
            label: 't',
            content:
              '最大降雨延時，基準值為: 86400秒。<br/><ul><li>*Q₂不計入鋪面下1m內有構造物之面積</li><li>*Q₂實體塊材面積 ≤0.25m²</li><li>*Q₂基層厚度 ≤25cm</li></ul>'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式',
        items: [
          {
            label: '',
            content: 'Q₂=(0.5×A₂×f×t)+(0.05×h×A₂)'
          }
        ]
      }
    ],
    comment: [
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₃花園土壤',
    value: 'Q₃花園土壤',
    title: '基地保水Q₃ × 花園土壤',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '人工地盤花園土壤貯集 設計定義',
        items: [
          {
            label: '',
            content: '人工地盤或不透水黏土層上設計綠地花園，利用土壤孔隙之含水性能來截留雨水的設計'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'V₃',
            content: '花園土壤深度總體積(m³) ≤0.6m'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式',
        items: [
          {
            label: '',
            content: 'Q₃=0.05×V₃'
          }
        ]
      }
    ],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'SC 小蓄水排水板',
        link: 'https://www.coinn.tw/product/SX'
      },
      {
        label: 'SL 微型陰井',
        link: 'https://www.coinn.tw/product/SL'
      },
      {
        label: 'SW 滲透排水網管',
        link: 'https://www.coinn.tw/product/SW'
      }
    ],
    comment: [
      {
        label: '> 推薦深入閱讀 人工地盤排水 文章',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₄貯集滲透空地',
    value: 'Q₄貯集滲透空地',
    title: '基地保水Q₄ × 貯集滲透空地或貯集滲透池',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      },
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '貯集滲透空地 設計定義',
        items: [
          {
            label: '',
            content:
              '停車場、廣場、球場、遊戲場、庭園廣場空間，將之做成能匯集周邊雨水之下凹式透水窪地'
          }
        ]
      },
      {
        title: '貯集滲透池 設計定義',
        items: [
          {
            label: '',
            content:
              '具備滲透型功能的滯洪池，讓雨水暫時貯存於水池，然後再以自然滲透方式滲入大地土壤的設計。低水位部分底層以不透水層為之，高水位部分四周則以自然緩坡土壤設計做成'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'A₄',
            content: '可滲透水之面積(m²)'
          },
          {
            label: 'V₄',
            content: '可貯集水之體積(m³)'
          },
          {
            label: 'f',
            content: '最終入滲率'
          },
          {
            label: 't',
            content: '最大降雨延時，基準值為: 86400秒'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式',
        items: [
          {
            label: '',
            content: 'Q₄=(0.36×A₄×f×t)+(V₄)'
          }
        ]
      }
    ],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'TKS 坦克士不透水布',
        link: 'https://www.coinn.tw/product/TKS'
      },
      {
        label: 'SBR 地工織布',
        link: 'https://www.coinn.tw/product/SBR'
      },
      {
        label: 'GCL 複層式皂土毯',
        link: 'https://www.coinn.tw/product/GCL'
      }
    ],
    comment: [
      {
        label: '> 推薦深入閱讀 人工濕地滯水 文章',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₅地下滲透貯集',
    value: 'Q₅地下滲透貯集',
    title: '基地保水Q₅ × 地下貯集滲透設施',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      },
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '地下貯集滲透 設計定義',
        items: [
          {
            label: '',
            content:
              '藉由創造地下儲水空間來保水的方法，亦即在空地地下挖掘蓄水空間，填入礫石、廢棄混凝土骨料或組合式蓄水框架，外包不織布後再以自然滲透方式入滲至土壤的方法'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'A₅',
            content: '滲透設施可滲透區域總側表面積'
          },
          {
            label: 'r',
            content: '礫石孔隙率: 0.2，蓄水框架孔隙率: 0.9'
          },
          {
            label: 'V₅',
            content: '蓄水貯集空間體積(m³)，礫石僅計 ≤1m'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式',
        items: [
          {
            label: '',
            content: 'Q₅=(0.36×A₅×f×t)+(r×V₅)'
          }
        ]
      }
    ],
    suggestions: [
      {
        label: 'RS 儲集框架',
        link: 'https://www.coinn.tw/product/RS'
      }
    ],
    comment: [
      {
        label: '> 推薦前往 RS雨水積磚 官方網頁',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₆透滲透排水管',
    value: 'Q₆透滲透排水管',
    title: '基地保水Q₆ × 滲透排水管',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '透水管 設計定義',
        items: [
          {
            label: '',
            content:
              '將基地內無法自然入滲排除之降水集中於排水管內，然後慢慢往土壤內入滲至地層中，以達輔助入滲的效果。'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'L₆',
            content: '滲透排水管總長度(m)。'
          },
          {
            label: 'x',
            content: '開孔率'
          },
          {
            label: 'f',
            content: '最終入滲率'
          },
          {
            label: 't',
            content:
              '最大降雨延時，基準值為: 86400秒<br/>*Q₆滲透管末端需連接至基地外排水系統始為有效。'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式:',
        items: [
          {
            label: '',
            content: 'Q₆=(2.88×x⁰·²×f×L₆×t)+(0.1×L₆)'
          }
        ]
      }
    ],
    suggestions: [
      {
        label: 'SW 滲透排水管',
        link: 'https://www.coinn.tw/product/SW'
      }
    ],
    comment: [
      {
        label: '> 推薦前往 SW滲透排水管 官方網頁',
        href: '#'
      },
      {
        label: '> 推薦深入閱讀 綠地草溝排水 文章',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₇滲透陰井',
    value: 'Q₇滲透陰井',
    title: '基地保水Q₇ × 滲透陰井',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      },
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '滲透陰井 設計定義',
        items: [
          {
            label: '',
            content: '將基地內無法自然入滲排除之降水集中於垂直式的滲透陰井內，緩慢輔助入滲至地層中'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: '',
            content: 'n:滲透陰井個數(個)'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式:',
        items: [
          {
            label: '',
            content: '獨立滲透設計<br/>Q₇=(1.08×f×n×t)+(0.015×n)'
          },
          {
            label: '',
            content: '搭配滲透設計(滲透管或滲透側溝)<br/>Q₇=(0.54×f×n×t)+(0.015×n)'
          }
        ]
      }
    ],
    suggestions: [
      {
        label: 'TK 滲透陰井',
        link: 'https://www.coinn.tw/product/TK'
      },
      {
        label: 'RF 滲透保水井',
        link: 'https://www.coinn.tw/product/RF'
      },
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      }
    ],
    comment: [
      {
        label: '> 推薦前往 TK滲透陰井 官方網頁',
        href: '#'
      },
      {
        label: '> 推薦深入閱讀 一個積水的點 文章',
        href: '#'
      },
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  },
  {
    label: 'Q₈滲透側溝',
    value: 'Q₈滲透側溝',
    title: '基地保水Q₈ × 滲透側溝',
    subTitle: '核心理念: 經開發後的土地仍擁有其原始的保水及滲透水等能力',
    infoImg: [
      {
        imgSrc: '',
        label: ''
      }
    ],
    info: [
      {
        title: '滲透側溝 設計定義',
        items: [
          {
            label: '',
            content:
              '滲透側溝是收集屋頂排水或地表面逕流水的地表排水系統，必須以多孔隙的透水混凝土、紅磚、水泥磚為材料，或是以多孔型的預鑄管涵為設計基材。'
          }
        ]
      },
      {
        title: '變數說明',
        items: [
          {
            label: 'L₈',
            content: '滲透側溝總長度(m)'
          },
          {
            label: 'a',
            content: '透水磚或混凝土取值: 18，紅磚取值: 15'
          },
          {
            label: 'f',
            content: '最終入滲率。'
          },
          {
            label: 't',
            content:
              '最大降雨延時，基準值為: 86400秒。<br/><span>*Q₈滲透側溝末端需連接至基地外排水系統始為有效。</span>'
          }
        ]
      },
      {
        title: '保水量(m³)計算公式:',
        items: [
          {
            label: '',
            content: 'Q₈=(0.36×a×f×L₈×t)+(0.1×L₈)'
          }
        ]
      }
    ],
    comment: [
      {
        label: '> 我想更進一步了解關於 綠建築評估手冊',
        href: '#'
      }
    ]
  }
]
