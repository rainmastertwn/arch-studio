<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

import ExternalIcon from '~/assets/images/icons/external-link.webp'
import img2_3_2 from '~/assets/images/calc/2-3-2.png'
import img2_3_4 from '~/assets/images/calc/2-3-4.png'
import img2_3_5 from '~/assets/images/calc/2-3-5.png'
import img2_3_6 from '~/assets/images/calc/2-3-6.png'
import img2_3_7 from '~/assets/images/calc/2-3-7.png'
import img2_3_8 from '~/assets/images/calc/2-3-8.png'
import img2_3_9 from '~/assets/images/calc/2-3-9.png'
import img2_3_10 from '~/assets/images/calc/2-3-10.png'
import img2_3_11 from '~/assets/images/calc/2-3-11.png'
import img2_3_12 from '~/assets/images/calc/2-3-12.png'

import InfoNotice from '~/components/common/infoNotice.vue'

const tableData = [
  {
    id: 'Q1',
    category: '常用保水設計項目',
    name: '綠地、被覆地、草溝',
    formula: 'Q₁=A₁*f*t ',
    variableDesc: 'A₁: 綠地、被覆地、草溝面積m²，草溝面積可算入草溝立體周邊面積。',
    referenceFig: '-',
    totalScore: 'Q1 ='
  },
  {
    id: 'Q2',
    category: '常用保水設計項目',
    name: '透水鋪面',
    formula: 'Q₂=0.5*A₂*f*t+0.05*h*A₂(連鎖磚型) \n Q₂=0.5*A₂*f*t+0.3*h*A₂  (通氣管型)',
    variableDesc:
      'A₂: 透水鋪面面積(m²) \n h: 透水鋪面級配層厚度(m)≤0.25。 \n (若基層為混凝土等不透水鋪面，則Q₂=0)',
    referenceFig: [
      {
        text: '圖 2-3.2',
        href: '2_3_2'
      },
      {
        text: '圖 2-3.3',
        href: ''
      }
    ],
    totalScore: 'Q2 ='
  },
  {
    id: 'Q3',
    category: '常用保水設計項目',
    name: '人工地盤花園土壤貯集設計',
    formula: 'Q₃=0.05*V₃',
    variableDesc: 'V₃: 花園土壤設施總設置體積(m³)，最多計入深度0.6m以內之體積。',
    referenceFig: [
      {
        text: '圖 2-3.9',
        href: '2_3_9'
      }
    ],
    totalScore: 'Q3 ='
  },
  {
    id: 'Q4',
    category: '特殊保水設計項目',
    name: '貯集滲透空地或景觀貯集滲透池',
    formula: 'Q₄=0.36*A₄*f*t+V₄',
    variableDesc:
      'A₄: 貯集滲透空地面積或貯景觀貯集滲透 \n 水池可透水面積(m²)，池身安全根據規定(9) \n V₄: 貯集滲透空地可貯集體積或景觀貯集滲透 \n 水池高低水位間之體積。',
    // referenceFig: '圖 2-3.4 \n 圖 2-3.10',
    referenceFig: [
      {
        text: '圖 2-3.4',
        href: '2_3_4'
      },
      {
        text: '圖 2-3.10',
        href: '2_3_10'
      }
    ],
    totalScore: 'Q4 ='
  },
  {
    id: 'Q5',
    category: '特殊保水設計項目',
    name: '地下貯集滲透設施',
    formula: 'Q₅=0.36*A₅*f*t+rV₅',
    variableDesc:
      'A₅: 地下貯集滲透設施可透水區域之總側表面積(m²)，頂部及底部面積不予計算。 \n r: 孔隙率，礫石貯集設施為0.2，組合式蓄水框架為0.9。 \n V₅: 蓄水貯集空間體積(m³)，但若為礫石貯集時則最多計入地表深度1m以內之體積。',
    // referenceFig: '圖 2-3.11',
    referenceFig: [
      {
        text: '圖 2-3.11',
        href: '2_3_11'
      }
    ],
    totalScore: 'Q5 ='
  },
  {
    id: 'Q6',
    category: '特殊保水設計項目',
    name: '滲透管',
    formula: 'Q₆=2.88*x0.2*f*L₆*t)+(0.1*L₆)',
    variableDesc:
      'A₆: 為滲透管總長度(m)。 \n x: 開孔率，無單位，以小數點表之。 \n 滲透管末端必須外連置基地外排水系統始被認定有效。',
    // referenceFig: '圖 2-3.5',
    referenceFig: [
      {
        text: '圖 2-3.5',
        href: '2_3_5'
      }
    ],
    totalScore: 'Q6 ='
  },
  {
    id: 'Q7',
    category: '特殊保水設計項目',
    name: '滲透管',
    formula:
      '獨立滲透設計: \n Q₇=(1.08*f*n*t)+0.015*n \n 搭配滲透設計(滲透管或滲透側溝) \n Q₇=(0.54*f*n*t)+0.015*n',
    variableDesc: 'n: 滲透陰井個數(個)。',
    // referenceFig: '圖 2-3.6',
    referenceFig: [
      {
        text: '圖 2-3.6',
        href: '2_3_6'
      }
    ],
    totalScore: 'Q7 ='
  },
  {
    id: 'Q8',
    category: '特殊保水設計項目',
    name: '滲透側溝',
    formula: 'Q₈=(0.36*a*f*L₈*t+(0.1*L₈)',
    variableDesc:
      'L₈: 滲透側溝總長度(m) \n a: 側溝材質為透水磚或透水混凝土為18.0，紅磚為15.0。 \n 側溝末端必須外連至基地外排水系統始被認定有效。',
    // referenceFig: '圖 2-3.8',
    referenceFig: [
      {
        text: '圖 2-3.8',
        href: '2_3_8'
      }
    ],
    totalScore: 'Q8 ='
  }
]

// 處理第一欄合併邏輯
const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex
}: {
  row: any
  column: TableColumnCtx<any>
  rowIndex: number
  columnIndex: number
}) => {
  if (columnIndex === 0) {
    if (rowIndex === 0) return { rowspan: 3, colspan: 1 }
    if (rowIndex < 3) return { rowspan: 0, colspan: 0 }
    if (rowIndex === 3) return { rowspan: 5, colspan: 1 }
    if (rowIndex > 3) return { rowspan: 0, colspan: 0 }
  }
}

const tableDialogVisible = ref(false)
const dialogImageSrc = ref('')
const handleDialogOpen = (imgNum: string) => {
  tableDialogVisible.value = true
  dialogImageSrc.value = (() => {
    switch (imgNum) {
      case '2_3_2':
        return img2_3_2
      case '2_3_4':
        return img2_3_4
      case '2_3_5':
        return img2_3_5
      case '2_3_6':
        return img2_3_6
      case '2_3_7':
        return img2_3_7
      case '2_3_8':
        return img2_3_8
      case '2_3_9':
        return img2_3_9
      case '2_3_10':
        return img2_3_10
      case '2_3_11':
        return img2_3_11
      case '2_3_12':
        return img2_3_12
      default:
        return ''
    }
  })()
}
const handleDialogClose = () => {
  tableDialogVisible.value = false
}
</script>

<template>
  <section class="mb-20">
    <div class="sr-table bg-medium-gray relative mx-auto mb-20 max-w-[1000px] rounded-2xl p-5">
      <p class="font-medium">表2-3.2 各類保水設計之寶水量計算及變數說明</p>
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        header-cell-class-name="text-blue-set"
      >
        <el-table-column prop="category" label="項目" width="50" align="center" />
        <el-table-column label="各類保水項目" width="170">
          <template #default="scope">
            <span class="font-bold">{{ scope.row.id }}</span> {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="formula" label="保水量 m³ 公式" min-width="250">
          <template #default="scope">
            <div class="whitespace-pre-line">
              {{ scope.row.formula }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="variableDesc" label="變數說明" min-width="300">
          <template #default="scope">
            <div class="text-blue-set whitespace-pre-line">
              {{ scope.row.variableDesc }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="referenceFig" label="參照圖示" width="110" align="center">
          <template #default="scope">
            <div class="text-blue-set whitespace-pre-line">
              <ul>
                <li v-for="(fig, index) in scope.row.referenceFig" :key="index">
                  <button
                    class="text-blue-set cursor-pointer underline"
                    @click="handleDialogOpen(fig.href)"
                    v-if="fig.href"
                  >
                    {{ fig.text }}
                  </button>
                  <span v-else>{{ fig.text }}</span>
                </li>
              </ul>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="totalScore" label="總得分" width="auto" align="center" />
      </el-table>

      <div class="text-blue-set border-blue-set border border-t-0 p-4 text-sm">
        <p class="mb-2">
          1. 其中 <br />
          f: 最終入滲率(m/s)。其定義請參閱式2-3.2 <br />
          k: 水利傳導係數(m/s):
          係指土體完全飽和時水在土體的流動能力，應在現地進行土壤滲透試驗求之，或以地表層2m內土壤認定之。應先依建築技術規則建築構造編第六十四條的規定做鑽探調查，將鑽探結果中表層2m以內土壤之「統一土壤分類」代入表2-3.1以取得f質，f質界於10-5~10-7。有多孔鑽探資料不一致時，由技師或建築師之經驗依資料分布取其代表值。未符合規定條件而無須做鑽探調查者可由臨地鑽探資料判斷，或以其表土狀況依建築師經驗判斷之。<br />
          t: 最大降雨延時，基準值為86,400秒。
        </p>
        <p class="mb-2">
          2. 上述「滲透排水管」Q₆中x為開孔率，為滲透排水管之開孔面積與其表面積之比，以小數點表之。
        </p>
        <p class="mb-2">
          3.上述「滲透排水管」Q₆、「滲透陰井」Q₇ 、滲透側溝Q₈
          的公式均以一個標準尺寸的設施來做為設計與計算上的依據，詳見圖2-3.5、2-3.6、2-3.8，如實際尺寸與標準圖差異過大，則須另行做認定及計算。
        </p>
      </div>

      <InfoNotice class="right-0 bottom-0 lg:absolute lg:right-0 lg:-bottom-15">
        <p class="mb-2">
          以上資料整理自《內政部建研所綠建築評估手冊》 <br />
          主要目的是讓更多人了解開發土地的必要之惡與環境保護的重要性，以此取得平衡我們才配得開發的權力進而取得永續的未來。
        </p>
        <a
          class="mb-1 flex items-center self-start underline"
          href="https://www.abri.gov.tw/News.aspx?n=20916&sms=9512"
          target="_blank"
          rel="noopener noreferrer"
        >
          *我想更進一步了解關於綠建築評估手冊
          <img class="ml-2" alt="external link icon" :src="ExternalIcon" width="15" height="15" />
        </a>
      </InfoNotice>
    </div>

    <!-- el dialog -->
    <el-dialog
      class="info-dialog"
      v-model="tableDialogVisible"
      :show-close="false"
      :before-close="handleDialogClose"
      :center="true"
      :align-center="true"
    >
      <div class="bg-medium-gray rounded-2xl p-5">
        <img class="w-full" alt="" :src="dialogImageSrc" srcset="" />
      </div>
    </el-dialog>
  </section>
</template>

<style lang="scss" scoped>
.sr-table ::v-deep(.el-table) {
  --el-table-bg-color: var(--color-medium-gray);
  --el-table-text-color: var(--color-blue-set);
  --el-table-tr-bg-color: var(--color-medium-gray);
  --el-table-border: 1px solid var(--color-blue-set);
  --el-table-border-color: var(--color-blue-set);
  --el-table-header-bg-color: var(--color-medium-gray);
  --el-table-row-hover-bg-color: var(--color-table-hover);
}
</style>
