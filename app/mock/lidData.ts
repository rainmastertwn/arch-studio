import lid1_1 from '~/assets/images/lid/LID_1-1.webp'
import lid1_2 from '~/assets/images/lid/LID_1-2.webp'
import lid2_1 from '~/assets/images/lid/LID_2-1.webp'
import lid2_2 from '~/assets/images/lid/LID_2-2.webp'
import lid3_1 from '~/assets/images/lid/LID_3-1.webp'
import lid3_2 from '~/assets/images/lid/LID_3-2.webp'
import lid4_1 from '~/assets/images/lid/LID_4-1.webp'
import lid4_2 from '~/assets/images/lid/LID_4-2.webp'
import lid5_1 from '~/assets/images/lid/LID_5-1.webp'
import lid5_2 from '~/assets/images/lid/LID_5-2.webp'
import lid6_1 from '~/assets/images/lid/LID_6-1.webp'
import lid6_2 from '~/assets/images/lid/LID_6-2.webp'
import lid7_1 from '~/assets/images/lid/LID_7-1.webp'
import lid7_2 from '~/assets/images/lid/LID_7-2.webp'
export type LIDData = {
  label: string
  value: string
  title: string
  subTitle: string
  infoTitle: string
  infoImg: {
    imgSrc: string
    label: string
  }[]
  info: {
    title?: string
    items: {
      label: string
      content: string
    }[]
  }[]
  commonLabel: string
  commonContent: string[]
  suggestions: {
    label: string
    link: string
  }[]
}
export const lidDataList: LIDData[] = [
  {
    label: '綠屋頂',
    value: '綠屋頂',
    title: '海綿城市 × LID 低衝擊開發 × 綠屋頂',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '綠屋頂 設計原則',
    infoImg: [
      {
        imgSrc: lid1_2,
        label: '綠屋頂類型與生長介質層的關聯性'
      },
      {
        imgSrc: lid1_1,
        label: '綠屋頂組成結構 剖面示意圖'
      }
    ],
    info: [
      {
        title: '粗放型綠屋頂 設計參考資訊',
        items: [
          {
            label: '植栽類型',
            content: '草皮，苔癬等景天科植物'
          },
          {
            label: '生長介質層',
            content: '10~15公分'
          },
          {
            label: '排保水層',
            content: '3~5公分'
          },
          {
            label: '屋面承載能力',
            content: '≧ 300kg/m²'
          }
        ]
      },
      {
        title: '半精養型綠屋頂 設計參考資訊',
        items: [
          {
            label: '植栽類型',
            content: '依需求規劃'
          },
          {
            label: '生長介質層',
            content: '15~25公分'
          },
          {
            label: '排保水層',
            content: '3~5公分'
          },
          {
            label: '屋面承載能力',
            content: '≧ 300~450kg/m²'
          }
        ]
      },
      {
        title: '精養型綠屋頂 設計參考資訊',
        items: [
          {
            label: '植栽類型',
            content: '草花，灌木，小喬木'
          },
          {
            label: '生長介質層',
            content: '15~30cm'
          },
          {
            label: '排保水層',
            content: '3~5公分'
          },
          {
            label: '屋面承載能力',
            content: '≧ 450kg/m²'
          }
        ]
      }
    ],
    commonLabel: '綠屋頂類型',
    commonContent: ['粗放型綠屋頂', '精養型綠屋頂', '半精養型綠屋頂'],
    suggestions: [
      {
        label: 'SC 排保水板',
        link: 'https://www.coinn.tw/product/SC'
      },
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'RTS 導根板',
        link: 'https://www.coinn.tw/product/RTS'
      }
    ]
  },
  {
    label: '生態滯留單元(雨水花園)',
    value: '生態滯留單元(雨水花園)',
    title: '海綿城市 × LID 低衝擊開發 × 生態滯留單元',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '生態滯留單元 設計原則',
    infoImg: [
      {
        imgSrc: lid2_1,
        label: '生態滯留單元設計圖'
      },
      {
        imgSrc: lid2_2,
        label: '溢流設施結構示意圖'
      }
    ],
    info: [
      {
        title: '生態滯留單元 設計參考資訊',
        items: [
          {
            label: '基本組成結構',
            content: '植栽<br/>覆蓋層<br/>生長介質層<br/>過濾貯水層<br/>溢流設施<br/>出流管'
          },
          {
            label: '覆蓋層',
            content: '2.5~7.5cm之圓礫石'
          },
          {
            label: '注意事項',
            content:
              '需設置溢流設施<br/>溢流高程應 ≥15cm<br/>地表貯水層≤30cm<br/>過濾貯水層建議 15~30cm<br/>需安裝出流管<br/>需使用多孔排水管坡度 >0.5%<br/>蓄水排乾時間 ≤8~12小時'
          }
        ]
      }
    ],
    commonLabel: '適用區域',
    commonContent: [
      '公共道路景觀用地',
      '停車場景觀安全島',
      '建築物透水區景觀設施',
      '加長型樹坑',
      '路緣擴展設施',
      '道路圓環綠化',
      '停車場分隔設施綠化',
      '中央分隔島綠化'
    ],
    suggestions: [
      {
        label: 'LF 雜草抑制蓆',
        link: 'https://www.coinn.tw/product/LF'
      },
      {
        label: 'SW 滲透排水管',
        link: 'https://www.coinn.tw/product/SW'
      },
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      }
    ]
  },
  {
    label: '透水鋪面',
    value: '透水鋪面',
    title: '海綿城市 × LID 低衝擊開發 × 透水鋪面',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '透水鋪面 設計原則',
    infoImg: [
      {
        imgSrc: lid3_1,
        label: '表層透水鋪面'
      },
      {
        imgSrc: lid3_2,
        label: '底層透水鋪面'
      }
    ],
    info: [
      {
        title: '人行道 設計參考資訊',
        items: [
          {
            label: '透水鋪面層',
            content: '6~8公分'
          },
          {
            label: '襯墊層',
            content: '3~5公分'
          },
          {
            label: '級配基層',
            content: '15~45公分'
          },
          {
            label: '級配底基層',
            content: '15~25公分'
          },
          {
            label: '路基',
            content: '夯實'
          }
        ]
      },
      {
        title: '停車場 設計參考資訊',
        items: [
          {
            label: '透水鋪面層',
            content: '10公分'
          },
          {
            label: '襯墊層',
            content: '3~5公分'
          },
          {
            label: '級配基層',
            content: '15~60公分'
          },
          {
            label: '級配底基層',
            content: '15~30公分'
          },
          {
            label: '路基',
            content: '夯實'
          }
        ]
      },
      {
        title: '底層結構透水 設計參考資訊',
        items: [
          {
            label: '鋪面層',
            content: '6~15公分'
          },
          {
            label: '襯墊層',
            content: '3~5公分'
          },
          {
            label: '透水混凝土',
            content: '15~25公分'
          },
          {
            label: '路基',
            content: '夯實'
          }
        ]
      }
    ],
    commonLabel: '透水鋪面類型',
    commonContent: [
      '透水混凝土磚',
      'HDPE 透水鋪面',
      '透水混凝土鋪面',
      '多孔隙瀝青鋪面',
      '管孔式透水鋪面',
      '非連續拼接或鏤空鋪面'
    ],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'SBR 地工織布',
        link: 'https://www.coinn.tw/product/SBR'
      },
      {
        label: 'LDT 透水不織布',
        link: 'https://www.coinn.tw/product/LDT'
      }
    ]
  },
  {
    label: '樹箱過濾設施',
    value: '樹箱過濾設施',
    title: '海綿城市 × LID 低衝擊開發 × 樹箱過濾設施',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '樹箱過濾設施 設計原則',
    infoImg: [
      {
        imgSrc: lid4_1,
        label: '樹箱過濾設施組成 剖面示意圖'
      },
      {
        imgSrc: lid4_2,
        label: '柵欄護蓋'
      }
    ],
    info: [
      {
        items: [
          {
            label: '組成結構及設計原則:',
            content:
              '格柵護蓋<br />入流設施 5~15cm<br />覆蓋層 2.5~7.5cm圓礫石<br />生長介質層 ≥90~150cm<br />礫石貯水層 15~30cm<br />出流排水管 10~15cm<br />排水管坡度 ≥0.5%<br />混凝土箱 ≥1.2m'
          }
        ]
      }
    ],
    commonLabel: '適用地點',
    commonContent: ['公共設施', '停車場', '人行道'],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'SBR 地工織布',
        link: 'https://www.coinn.tw/product/SBR'
      },
      {
        label: 'LDT 透水不織布',
        link: 'https://www.coinn.tw/product/LDT'
      }
    ]
  },
  {
    label: '植生草溝',
    value: '植生草溝',
    title: '海綿城市 × LID 低衝擊開發 × 植生溝',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '植生草溝 設計原則',
    infoImg: [
      {
        imgSrc: lid5_1,
        label: '植生溝組成結構 示意圖'
      },
      {
        imgSrc: lid5_2,
        label: '植生溝剖面 示意圖'
      }
    ],
    info: [
      {
        items: [
          {
            label: '植生溝組成結構',
            content:
              '植生溝槽體<br/>過濾貯水層<br/>入流設施<br/>地工織布<br/>多孔隙排水管<br/>生長介質<br/>植栽'
          },
          {
            label: '設計原則事項',
            content:
              '邊坡最大斜率 (H:V ≤2.5:1)<br/>邊坡最佳斜率 (H:V =4:1)<br/>底部寬度: 0.75~3m<br/>縱向坡度: ≤3%<br/>最佳坡度: 1~2%<br/>溝體長度: ≤30m'
          }
        ]
      }
    ],
    commonLabel: '植生溝適用區域',
    commonContent: ['停車場', '庭院', '公園', '社區道路', '都市間的公共設施空間'],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'SBR 地工織布',
        link: 'https://www.coinn.tw/product/SBR'
      },
      {
        label: 'LDT 透水不織布',
        link: 'https://www.coinn.tw/product/LDT'
      },
      {
        label: 'SW 滲透排水管',
        link: 'https://www.coinn.tw/product/SW'
      }
    ]
  },
  {
    label: '雨水桶',
    value: '雨水桶',
    title: '海綿城市 × LID 低衝擊開發 × 雨水桶',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '雨水桶 設計原則',
    infoImg: [
      {
        imgSrc: lid6_1,
        label: '儲水雨撲滿 示意圖'
      },
      { imgSrc: lid6_2, label: '儲水雨撲滿 示意圖' }
    ],
    info: [
      {
        items: [
          {
            label: '功能',
            content: '貯留雨水'
          },
          {
            label: '設計尺寸',
            content: '150L~5000L'
          },
          {
            label: '注意事項',
            content: '取水口應距底部 ≥15cm<br/>需為不透光材質<br/>溢流水應沿安全地方排放'
          }
        ]
      }
    ],
    commonLabel: '雨水桶適用地點',
    commonContent: ['高度都市化地區', '高密度住宅開發區'],
    suggestions: [
      {
        label: 'RWT 地上型水撲滿',
        link: 'https://www.coinn.tw/product/RWT'
      },
      {
        label: 'STL-5000 大雨撲滿',
        link: 'https://www.coinn.tw/product/RWT'
      }
    ]
  },
  {
    label: '滲透及滲透陰井',
    value: '滲透及滲透陰井',
    title: '海綿城市 × LID 低衝擊開發 × 滲透陰井及滲透側溝',
    subTitle: '核心理念: 減低暴雨逕流，淨化水質，提升生態效益及景觀功能',
    infoTitle: '滲透及滲透陰井 設計原則',
    infoImg: [
      {
        imgSrc: lid7_1,
        label: '滲透側溝/陰井組成結構 示意圖'
      },
      {
        imgSrc: lid7_2,
        label: '滲透陰井/側溝 組成剖面圖'
      }
    ],
    info: [
      {
        items: [
          {
            label: '組成結構',
            content:
              '滲透側溝或滲透陰井結構<br/>過濾貯水層<br/>(底部 ≥10cm，兩側 ≥20cm) <br/>過濾砂層<br/>(厚度: 5~10cm)<br/>透水地工織物<br/>(搭接: ≥30cm)'
          },
          {
            label: '注意事項',
            content:
              '滲透側溝坡度 ≤20°<br/>土壤入滲速度需 ≥1.3m/h<br/>土壤入滲速度需 ≤6cm/h<br/>距離最高地下水位 ≥1.2m'
          }
        ]
      }
    ],
    commonLabel: '適用地點',
    commonContent: ['社區開放空間', '建築物周圍', '街道', '人行道', '停車場', '庭院'],
    suggestions: [
      {
        label: 'CNS 地工不織布',
        link: 'https://www.coinn.tw/product/CNS'
      },
      {
        label: 'SBR 地工織布',
        link: 'https://www.coinn.tw/product/SBR'
      },

      {
        label: 'LDT 透水不織布',
        link: 'https://www.coinn.tw/product/LDT'
      },
      {
        label: 'TK 透水陰井',
        link: 'https://www.coinn.tw/product/TK'
      },

      {
        label: 'RF 滲透保水井',
        link: 'https://www.coinn.tw/product/RF'
      }
    ]
  }
]
