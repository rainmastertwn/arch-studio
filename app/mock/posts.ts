export type AD = {
  imgSrc: string
  link: string
}

export type Cases = {
  label?: string // segment label
  value?: string // segment value
  title: string
  subTitle: string
  imgSrc?: string
  imgTitle: string
  imgDescription: string
  content: string
  suggestions: {
    label: string
    link: string
  }[]
  download: {
    type: string
    title: string
    link: string
  }[]
}[]

export type Post = {
  id: number
  title: string
  content: string
  imgSrc?: string
  ad: AD
  readMore: {
    title: string
    link: string
  }[]
  cases: Cases
}

const AD: AD = {
  imgSrc: 'https://placehold.co/400x400/2c3847/ffffff/?text=AD',
  link: '#'
}

import PostImg1 from '~/assets/images/post/post-1.webp'
import PostImg1_1 from '~/assets/images/post/post1-1.webp'
import PostImg1_2 from '~/assets/images/post/post1-2.webp'
import PostImg2 from '~/assets/images/post/post2.webp'
import PostImg2_1 from '~/assets/images/post/post2-1.webp'
import PostImg3 from '~/assets/images/post/post3.webp'
import PostImg3_1 from '~/assets/images/post/post3-1.webp'
export const postList: Post[] = [
  {
    id: 1,
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
    ]
  },
  {
    id: 2,
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
    ]
  },
  {
    id: 3,
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
    ]
  }
]
