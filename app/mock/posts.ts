export type AD = {
  imgSrc: string
  link: string
}

// export type Cases = {
//   label?: string // segment label
//   value?: string // segment value
//   title: string
//   subTitle: string

//   caseType?: 'multiple' | 'single'

//   imgSrc?: string
//   imgTitle?: string
//   imgDescription?: string
//   content?: string

//   suggestions: {
//     label: string
//     link: string
//   }[]
//   download: {
//     type: string
//     title: string
//     link: string
//   }[]
// }[]

export type SingleCase = {
  label?: string // segment label
  value?: string // segment value
  title: string
  subTitle: string
  imgSrc?: string
  imgTitle?: string
  imgDescription?: string
  content?: string
  suggestions: {
    label: string
    link: string
  }[]
  download: {
    type: string
    title: string
    link: string
  }[]
}

export type MultipleCase = {
  title: string
  subTitle: string
  imgSrc?: string
  imgTitle?: string
  caseContent?: {
    imgSrc?: string
    content?: {
      title: string
      content: string
    }[]
  }[]
  note?: string
  suggestions: {
    label: string
    link: string
  }[]

  download: {
    type: string
    title: string
    link: string
  }[]
}

export type Post = {
  id: number
  category?: string[]
  title: string
  content?: string
  imgSrc?: string
  ad?: AD
  readMore?: {
    title: string
    link: string
  }[]
  cases?: SingleCase[] | MultipleCase[]
}

const AD: AD = {
  imgSrc: 'https://placehold.co/400x400/2c3847/ffffff/?text=AD',
  link: '#'
}

import PostImg1 from '~/assets/images/post/post-1.png'
import PostImg1_1 from '~/assets/images/post/post1-1.png'
import PostImg1_2 from '~/assets/images/post/post1-2.png'
import PostImg2 from '~/assets/images/post/post2.png'
import PostImg2_1 from '~/assets/images/post/post2-1.png'
import PostImg3 from '~/assets/images/post/post3.png'
import PostImg3_1 from '~/assets/images/post/post3-1.png'
import PostImg4 from '~/assets/images/post/post4.jpg'
import PostImg4_1 from '~/assets/images/post/post4_1.png'
import PostImg4_2 from '~/assets/images/post/post4_2.png'
// category: waterIssue 各種積水問題, howToChoose 我該如何選擇

export const postList: Post[] = [
  {
    id: 1,
    category: ['waterIssue'],
    title: '中庭排水不良，花台溢水，且經常發生積水問題的改善方法',
    content:
      '最近有位新店的吳大哥來電告訴我們，他們的社區每逢大雨必定淹水，花台溢水，中庭淹水，雨水甚至漫流至管理中心。漫流後的中庭清理困難，住戶有心想解決，可是卻苦無方法，我們深入了解歸納後將分成兩個方向來解決問題。1. 改善既有的花台排水，2. 硬鋪面積水的排水，以下詳細解析。',
    ad: AD,
    imgSrc: PostImg1,
    readMore: [
      {
        title: '在裸露土地上尋找一種既能讓雨水滲入土壤，又能防止雜草生長的方式。',
        link: '#'
      },
      {
        title: '綠地造景時，如何將地表紋理分隔處理，使空間配置更清楚、視覺更整齊。',
        link: '#'
      },
      {
        title:
          '要如何在不進行綠化的前提下，讓屋頂降溫也增加活動空間並帶來遮蔽屋頂管線好處的新解方。',
        link: '#'
      }
    ],
    cases: [
      {
        label: '改善既有花台排水的方式',
        value: '改善既有花台排水的方式',
        title: '經典案例解析 × 改善既有花台排水的方式',
        subTitle:
          '本案例中，社區中庭排水不良起因於地坪與排水陰井的高程問題，我們即將深入分析此案例。',
        imgSrc: PostImg1_1,
        imgTitle: '改善既有的花台排水 設計原則:',
        imgDescription: '改善花台排水 方式',
        content:
          '<article><h5>我們應該要怎麼做?</h5><p>首先，在花台的溢流線設置一套獨立的排水系統。透過開挖草溝、鋪設不透水布、配置透水管與碎石級配，形成一條高效的礫石排水帶，讓多餘的水能順利排出，從而改善並解決花台的溢流問題。</p></article><article><h5>我們有更簡單的方式嗎?</h5><p>可直接使用PP截水溝，攔截表面雨水，快又省事。</p></article>',
        suggestions: [
          {
            label: 'TKS 不透水布',
            link: 'https://www.coinn.tw/product/TKS'
          },
          {
            label: 'SW 透水網管',
            link: 'https://www.coinn.tw/product/SW'
          },
          {
            label: 'LDT 透水不織布',
            link: 'https://www.coinn.tw/product/LDT'
          },
          {
            label: 'RL 預鑄截水溝',
            link: 'https://www.coinn.tw/product/RL'
          }
        ],
        download: [
          {
            type: 'PDF',
            title: '2027 圖說 PDF',
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
      },
      {
        label: '如何排走低漥地區的硬鋪面積水',
        value: '如何排走低漥地區的硬鋪面積水',
        title: '經典案例解析 × 硬鋪面積水問題',
        subTitle:
          '本案例中，社區中庭排水不良起因於地坪與排水陰井的高程問題，我們即將深入分析此案例。',
        imgSrc: PostImg1_2,
        imgTitle: '改善既有硬鋪面排水 設計原則:',
        imgDescription: '改善硬鋪面排水 方式',
        content:
          '<article><h5>我們應該要怎麼做?</h5><p>找出既有硬鋪面的低漥處，切割打除後，埋設 SL微型陰井 或 FL落水頭的空間，並配置連接至陰井的PVC底部排水管，直接將表面雨水快速排至陰井。</p></article><article><h5>我們有其他方式嗎?</h5><p>SL 微型陰井及FL落水頭為點狀排水方式，在最低影響鋪面外觀的情況下可考慮使用RN PP截水溝採線型排水的方式加強排水。</p></article>',
        suggestions: [
          {
            label: 'SL 微型陰井',
            link: 'https://www.coinn.tw/product/SL'
          },
          {
            label: 'FL 落水頭',
            link: 'https://www.coinn.tw/product/FL'
          },
          {
            label: 'RL 預鑄截水溝',
            link: 'https://www.coinn.tw/product/RL'
          }
        ],
        download: [
          {
            type: 'PDF',
            title: '2027 型錄 PDF',
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
    ]
  },
  {
    id: 2,
    category: ['waterIssue'],
    title: '在一個裸露地面上經常積水，又無法接設排水管將水導出，這時我們如何處理。',
    content:
      '我們觀察到很多綠植栽帶因下雨出現積水情形，可能因前期建置過程的種種因素導致無法對外排水，我們將提出無法對外排水區域的積水改善方法。',
    ad: AD,
    imgSrc: PostImg2,
    readMore: [
      {
        title: '在裸露土地上尋找一種既能讓雨水滲入土壤，又能防止雜草生長的方式。',
        link: '#'
      },
      {
        title: '綠地造景時，如何將地表紋理分隔處理，使空間配置更清楚、視覺更整齊。',
        link: '#'
      },
      {
        title:
          '要如何在不進行綠化的前提下，讓屋頂降溫也增加活動空間並帶來遮蔽屋頂管線好處的新解方。',
        link: '#'
      }
    ],
    cases: [
      {
        title: '經典案例解析 × 捷運線形公園積水',
        subTitle: '本案例起因於種種因素導致積水問題，我們即將深入分析並提出改善方法。',
        imgSrc: PostImg2_1,
        imgTitle: '改善綠植栽帶排水 設計原則:',
        imgDescription: '改善花台排水 方式',
        content:
          '<article><h5>我們應該要怎麼做?</h5><p>首先以小乖乖在積水的地方先挖掘出我們要滯留雨水的體積大小，挖掘完成後安裝滲透框架，安裝完成後回填夯實並於上方安裝微型陰井，此後我們即將與積水道別。</p></article><article><h5>我們有更簡單的方式嗎?</h5><p>小區域的積水可使用TK滲透陰井，挖掘範圍更小，施工期程更短。</p></article>',
        suggestions: [
          {
            label: 'SL 微型陰井',
            link: 'https://www.coinn.tw/product/SL'
          },
          {
            label: 'RS 與水積磚',
            link: 'https://www.coinn.tw/product/RS'
          },
          {
            label: 'TK 滲透陰井',
            link: 'https://www.coinn.tw/product/TK'
          },
          {
            label: 'RF 排保水井',
            link: 'https://www.coinn.tw/product/RF'
          }
        ],
        download: [
          {
            type: 'PDF',
            title: '2027 圖說 PDF',
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
    ]
  },
  {
    id: 3,
    category: ['waterIssue'],
    title: '針對人工地盤的排水設計，我們與您分享從防水、排水、防潮濕到防根酸蝕的設計準則。',
    content:
      '什麼是人工地盤排水，人工地盤可理解成為構造物上方的綠化排水，任何位置的構造物、結構物上方之排水都可以稱之為人工地盤排水，在這個位置的綠化我們必須考慮排水，防水，防潮濕及防止植物根部酸蝕構造物，地下停車場上方的綠化將簡易於此篇文章內呈現，如有特殊需求可與COINN意動創新人員討論設計細節。',
    ad: AD,
    imgSrc: PostImg3,
    readMore: [
      {
        title: '在裸露土地上尋找一種既能讓雨水滲入土壤，又能防止雜草生長的方式。',
        link: '#'
      },
      {
        title: '綠地造景時，如何將地表紋理分隔處理，使空間配置更清楚、視覺更整齊。',
        link: '#'
      },
      {
        title:
          '要如何在不進行綠化的前提下，讓屋頂降溫也增加活動空間並帶來遮蔽屋頂管線好處的新解方。',
        link: '#'
      }
    ],
    cases: [
      {
        title: '經典案例解析 × 人工地盤的排水方式',
        subTitle: '人工地盤的類型眾多，排水方式多元，我們在此分享人工地盤正上方的經典設計方式',
        imgSrc: PostImg3_1,
        imgTitle: '經典的地下停車場上方排水 設計原則:',
        imgDescription: '人工地盤排水 方式之一',
        content:
          '<article><h5>我們應該要怎麼做?</h5><p>停車場上方的綠化首重防根酸蝕，防潮濕，防止積水等事項，設計方式非常多元化，圖說僅說明停車場正上方的排水防根。</p></article><article><h5>我們有更簡單的方式嗎?</h5><p>這是最簡單陽春的了。案例會因覆土深度，未來使用方式的不同我們可以做更為全面性的排水規畫。</p></article>',
        suggestions: [
          {
            label: 'CNS 地工不織布',
            link: 'https://www.coinn.tw/product/CNS'
          },
          {
            label: 'SC 雙面排水板',
            link: 'https://www.coinn.tw/product/SC'
          },
          {
            label: 'TKS 不透水阻根布',
            link: 'https://www.coinn.tw/product/TKS'
          }
        ],
        download: [
          {
            type: 'PDF',
            title: '2027 圖說 PDF',
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
    ]
  },
  {
    id: 4,
    category: ['waterIssue'],
    title: '滲透設施雜草叢生並於隔柵蓋內堆積垃圾，這時我們應該這樣做',
    content:
      '漫步在人行徒步區時，看到水溝蓋上面長滿著雜草，仔細湊近看完了解設計用意時發現這樣做有很多的好處，不過在維護上會有相當的難度，現在我們思考一下如何在維持原設計理念並稍微改良一下工法，達到降低並減少未來維護上的頻率以及方便度。',
    ad: AD,
    imgSrc: PostImg4,
    readMore: [
      {
        title: '在裸露土地上尋找一種既能讓雨水滲入土壤，又能防止雜草生長的方式。',
        link: '#'
      },
      {
        title: '綠地造景時，如何將地表紋理分隔處理，使空間配置更清楚、視覺更整齊。',
        link: '#'
      },
      {
        title:
          '要如何在不進行綠化的前提下，讓屋頂降溫也增加活動空間並帶來遮蔽屋頂管線好處的新解方。',
        link: '#'
      }
    ],
    cases: [
      {
        title: '經典案例解析 × 雜草漫生 × 小垃圾堆積',
        subTitle:
          '本案例中，設計師創造一個在貯集滲透區域上方的人行空間，但因雜草漫生，小垃圾堆積後成為一個<br/>行人不會去且看起來無序的一個區域，我們即將深入分析此案例。',
        imgTitle: '改善雜草叢生的 設計方式:',
        caseContent: [
          {
            imgSrc: PostImg4_1,
            content: [
              {
                title: '原始的設計方式',
                content:
                  '看了現場的配置後感受到設計師希望讓人與水岸更加親近的理念，所以在植栽槽內喬木間的灌木區設計了隔柵蓋，用以保留雨水貯集與滲透區的完整功能，也讓經過的人們得以用更近的距離欣賞美麗河道的用心之處。'
              },
              {
                title: '目前的實際使用情形',
                content:
                  '我們看到了保留雨水的貯集滲透區域長出了雜草，並且在隔柵蓋的縫隙中發現了許多的菸蒂以及小垃圾，導致設計師用心的美意變成一個需要頻繁維護，否則使用者會不想靠近的地方。這個優良的設計很棒，但有一些小細節需要調整，我們即將做出一些改變，讓我們的未來變得更好'
              }
            ]
          },
          {
            imgSrc: PostImg4_2,
            content: [
              {
                title: '我們看見的現況整理',
                content:
                  '1. 格柵下方碎石沉陷。<br />2. 雜草透由貯集滲透通道漫生。<br />3. 菸蒂及小垃圾掉入格柵間隙。'
              },
              {
                title: '建議做出的細節調整',
                content:
                  '在土體與碎石的中間必須先舖上一層地工織布防止碎石沉陷，碎石上方鋪上抗紫外線型抑草蓆。鋪設完成後選擇以粗砂將貯集滲透通道填滿，以減少事後的清潔維護'
              }
            ]
          }
        ],
        note: '本篇文章由 蔡政家/編輯整理',
        suggestions: [
          {
            label: 'SBR 地工織布',
            link: 'https://www.coinn.tw/product/SBR'
          },
          {
            label: 'CNS 地工不織布',
            link: 'https://www.coinn.tw/product/CNS'
          },
          {
            label: 'SE 雜草抑制蓆',
            link: 'https://www.coinn.tw/product/SE'
          }
        ],
        download: [
          {
            type: 'PDF',
            title: '2027 圖說 PDF',
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
    ]
  },
  {
    id: 5,
    category: ['waterIssue'],
    title: '大雨時花台的水會滿上來並夾帶泥水外流，我該做些什麼改變來解決問題'
  },
  {
    id: 6,
    category: ['waterIssue'],
    title: '住家社區中庭的花台都很潮濕，會長青苔，我應該怎麼改善才能讓我的花台潤而不濕。'
  },
  {
    id: 7,
    category: ['waterIssue'],
    title: '由於外部道路高於住家地坪，在雨季時常發生雨水倒流至家門口及車庫，我應該如何改善。'
  },
  {
    id: 8,
    category: ['waterIssue'],
    title: '大雨時花台的水會滿上來並夾帶泥水外流，我該做些什麼改變來解決問題。'
  },
  {
    id: 9,
    category: ['waterIssue'],
    title: '排水截水面積，溝體大小與排水速度的相對應關係討論。'
  },
  {
    id: 10,
    category: ['waterIssue'],
    title: '什麼是人工地盤，針對各種形式的人工地盤排水，由本篇資料與您詳細解說。'
  },
  {
    id: 11,
    category: ['howToChoose'],
    title: '棒壘球場，大草坪的排水管徑與排水速度有正相關嗎?'
  },
  {
    id: 12,
    category: ['howToChoose'],
    title: '滲透排水管有分成不透水型，2/3透水型，全周透水型，我該怎麼選擇哪種型式。'
  },
  {
    id: 13,
    category: ['howToChoose'],
    title: '集水陰井，滲透陰井，微型陰井，該在什麼時候選擇適合使用的產品'
  },
  {
    id: 14,
    category: ['howToChoose'],
    title: '屋頂如果不積水就不容易漏水，從傳統點排水到線排水進而成為面排水的萬無一失排水方式。'
  },
  {
    id: 15,
    category: ['howToChoose'],
    title: '落葉或雜物堵塞落水頭產生排水不良，植物於落水頭周邊生長而導致房屋漏水，該如何解決?'
  },
  {
    id: 16,
    category: ['howToChoose'],
    title: '在設計景觀水池，垃圾掩埋場或地表防滲工程時，我們應該如何選擇坦克士不透水布的厚度?'
  },
  {
    id: 17,
    category: ['howToChoose'],
    title: '縫隙式的化妝排水溝應該在何處使用，以及如何做後續的清潔。'
  },
  {
    id: 18,
    category: ['howToChoose'],
    title: '綠地造景時，如何將地表紋理分隔處理，使空間配置更清楚、視覺更整齊。'
  },
  {
    id: 19,
    category: ['howToChoose'],
    title: '排水板的種類很多，對於高度，是否要有蓄水功能，該用雙面型還單面型，我們完整與您說明。'
  },
  {
    id: 20,
    category: ['howToChoose'],
    title: '一個生態水池用皂土毯比較適合還是使用坦克士不透水布比較合適。'
  },
  {
    id: 21,
    category: ['howToChoose'],
    title: '要如何在不進行綠化的前提下，讓屋頂降溫也增加活動空間並帶來遮蔽屋頂管線好處的新解方。'
  },
  {
    id: 22,
    category: ['howToChoose'],
    title: '在裸露土地上尋找一種既能讓雨水滲入土壤，又能防止雜草生長的方式。'
  },
  {
    id: 23,
    category: ['howToChoose'],
    title: '車輛進出停車場截水溝時會產生噪音，長期下來容易造成精神疲勞，我們即刻解決。'
  },
  {
    id: 24,
    category: ['howToChoose'],
    title: '排水陰井埋設後發現高度不足，這時我應該怎麼辦?'
  },
  {
    id: 25,
    category: ['howToChoose'],
    title: '草地下盲溝與硬木面的暗溝設計方式解析。'
  },
  {
    id: 26,
    category: ['howToChoose'],
    title: '預鑄塑膠陰井與預鑄水泥製陰井有什麼差別'
  },
  {
    id: 27,
    category: ['howToChoose'],
    title: '重力式排水應該使用HDPE管還是RCP管'
  },
  {
    id: 28,
    category: ['howToChoose'],
    title: '塑膠截水溝與RC水泥溝的差異'
  },
  {
    id: 29,
    category: ['howToChoose'],
    title: '我買了塑膠陰井，我在各種情況下該如何安裝?'
  }
]
