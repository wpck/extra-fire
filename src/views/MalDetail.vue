<template>
  <DataNav title="事故报告">
    <template v-slot:right>
      <div class="top">
        <Icon class="top-back" icon="humbleicons:arrow-go-back" />
      </div>
    </template>

  </DataNav>

  <div class="detail-title">
    <h3>{{ detailData.title }}</h3>
  </div>

  <div class="detail">
    <div class="con">
      <!-- 原文 -->
      <div class="con-item">
        <h3 class="title">事故调查报告</h3>
        <div class="content" style="height: calc(100% - 60px);">
          <PreviewDetail :url="`${detailData.content.file}#scrollbars=0&toolbar=0&statusbar=0`" />
        </div>
      </div>
      <!-- echarts图谱 -->
      <div class="con-item">
        <h3 class="title">事故图谱</h3>
        <div class="content" style="height: 100%">
          <LinkChart :data="detailData" />
        </div>
      </div>
    </div>
    <div class="con">
      <!-- 规范推荐 -->
      <div class="wrap-br">
        <div class="con-item">
          <h3 class="title">事故图片</h3>
          <Carousel :imgs="detailData.pics" />
        </div>
        <div class="con-item bot-list">
          <h3 class="title">法律规范推荐</h3>
          <div class="content">
            <div v-for="(item,index) in recList" :key="index">
              <div class="flex item">
                <span class="pointer flex-1 hover" @click="nodeClick(item)">{{ item.title }}</span>
                
                <div class="icon">
                  <template v-if="!!item.children">
                    <Icon v-if="item.show" icon="mingcute:down-fill" @click="toggleExpand(index)" />
                    <Icon v-else icon="mingcute:right-fill" @click="toggleExpand(index)" />
                  </template>
                </div>
              </div>
              <div class="child" v-show="item.show">
                <div v-for="(c, j) in item.children">
                  <p>{{ c.title }}</p>
                  <div>{{ c.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-br">
        <div class="con-item">
          <h3 class="title">意见</h3>
          <div class="content opn-list">
            <div v-for="(item, index) in opnList" class="item flex">
              <div class="opinion flex-1" :class="{'hide-text': !item.show}">
                <span>{{ index + 1 }}.</span>
                <span>{{ item.title }}</span>
              </div>
              <div class="opn-btn icon">
                <Icon v-if="item.show" icon="mingcute:down-fill" @click="togOpnShow(index)" />
                <Icon v-else icon="mingcute:right-fill" @click="togOpnShow(index)" />
              </div>
            </div>
          </div>
        </div>
        <div class="con-item bot-list" style="margin-bottom: 0">
          <h3 class="title">相似案例推荐</h3>
          <div class="content">
            <div v-for="(item, index) in caseList" class="item pointer hover">
              <span>{{ index + 1 }}.</span>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="showContent" :title="previewFile.title">
    <div style="height: 400px">
      <PreviewDetail :url="`${previewFile.file}#scrollbars=0&toolbar=0&statusbar=0`" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showContent = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PreviewDetail from '@/components/PreviewDetail.vue'
import LinkChart from '@/components/LinkChart.vue'
import Carousel from '@/components/Carousel.vue'
import { Icon } from '@iconify/vue'
import DataNav from '@/components/DataNav.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { getDetailData } from '@/api/detail'

const defaultProps = {
  label: 'title',
}

const showContent = ref<boolean>(false)

const recList = ref<any[]>([
  {
    title: '消防法',
    children: [
      {
        title: '第一条',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
      },{
        title: '第二条',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
      },
    ],
  },
  { title: '建筑规范' },
  { title: '山东省生产安全条例' },
  // {
  //   id: '1',
  //   title: '消防法',
  //   children: [
  //     {
  //       title: '第一条',
  //       // content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
  //     },
  //     {
  //       title: '第二条',
  //       // content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
  //     },
  //   ],
  // },
  // { title: '建筑规范' },
  // { title: '山东省生产安全条例' },
])
const previewFile = ref({})
const opnList = ref([{
        id:"26",
        title:"（一）强化组织领导，全面开展自建民房消防安全专项整治。各县（市、区）人民政府要全面部署开展自建民房消防安全专项整治，重点整治自建民房是否存在违规用电用火，疏散通道、安全出口是否畅通，消防设施是否符合规范并完好有效，有无电动自行车违规停放充电等问题。对排查发现的隐患问题，各县（市、区）人民政府按照不同隐患问题分类进行整治，并以各县（市、区）人民政府按照火灾风险等级分别挂牌督办一批自建房、“多合一”场所集中区域，严格对照治理标准和要求，逐项整改。要明确工作任务和职责，将自建民房消防安全整治工作纳入消防安全整治三年行动的重要内容，纳入政府目标责任、绩效管理和平安建设（综治工作）、市域社会治理现代化考核范围，与绩效考评、表彰挂钩，强化工作考评结果运用，作为领导干部提拔任用和评先评优的重要参考依据。"
        },
        {
        id:"27",
        title:"（二）深入研判形势，大力提升社会火灾防控水平。认真分析研判各地各行业消防安全形势，紧盯高层建筑、地下空间、大空间大跨度、石化危化等火灾高危单位，以及“九小场所”、出租屋、木业加工作坊等不托底场所、不放心区域和电气火灾、电动自行车违规停放充电等突出问题，分行业、分领域开展消防安全排查整治，推动隐患“清零”，深入研究火灾风险类别及防范监管措施。加快完成城市物联网消防远程监控平台建设，加大消防设施远程监控、智慧安全用电、智能型独立烟感的推广使用力度，实现消防物联信息并网监测，推动全市火灾高危单位和高层建筑自动消防设施、智慧安全用电监测信息接入远程监控平台，推动“九小场所”、出租屋安装智能独立烟感装置、简易喷淋和防火门等消防设施。"
        },
        {
        id:"28",
        title:"（三）加强部门监管，严格落实部门职责。各部门要坚持“谁主管、谁负责”“谁审批、谁负责”的原则，依法履行消防安全职责，按照职责范围开展行业系统消防安全监管。应急管理部门及消防救援机构负责对自建民房合用场所消防安全管理工作实施监督管理，督促指导各县（市、区）人民政府、各相关部门严格履行自建民房合用场所消防监督管理工作职责；依法开展消防监督检查和专项治理，将自建民房合用场所专项治理工作列入消防安全工作三年专项整治行动内容，按照火灾风险高低、隐患整改难易分类分批次落实整改。消防救援、应急管理部门牵头，自然资源、住建、司法等协同配合开展自建房消防安全管理调研，制定自建民房合用场所消防安全管理规范性文件和技术标准，报市人民政府审批出台。"
        },
        {
        id:"29",
        title:"（四）强化基层派出所日常监管职责。公安派出所要依照《中华人民共和国消防法》《国务院办公厅关于印发消防安全责任制实施办法的通知》（国办发〔2017〕87 号）、《广西壮族自治区实施<中华人民共和国消防法>办法》《广西壮族自治区公安派出所消防监督检查工作规定》等法律法规对本辖区的有关单位和场所实施日常消防监督检查、开展消防安全知识教育，督促本辖区内的物业服务企业、村民委员会、居民委员会以及其他单位和个人履行消防安全职责，落实防火、灭火措施。"
        },
        {
        id:"30",
        title:"（五）完善基层消防安全防控网络。彻底解决基层消防监督执法力量不足、基层网格员无执法权问题，由市委政法委牵头协调消防救援机构、公安机关等部门，依托各乡镇人民政府（街道办事处）综治中心、国土规建环保安监交通站，创新社会消防管理行政执法模式，制定执法委托实施工作制度，将消防行政执法职能委托各乡镇人民政府（街道办事处）综治中心、国土规建环保安监交通站履行；健全完善基层综治网格员消防安全管理工作机制，开展消防隐患排查、整改销号、宣传教育等工作，落实网格员消防经费补助；将自建民房合用场所消防安全治理工作纳入各级政府综治（平安建设）和市域社会治理现代化工作的督导考核内容，强化考评结果运用。"
        },
        {
        id:"31",
        title:"（六）进一步加强消防安全宣传教育工作。有针对性的对火灾风险较高的“多合一”场所、老旧城区及低收入群体、农村留守老人、儿童等弱势群体开展常态化、多角度宣传，各级人民政府要将消防安全教育纳入城乡科普教育范畴，通过建立社区科普教育馆、购买服务等措施加大对自建民房、“多合一”场所人员的消防安全培训力度；消防救援机构要结合近年来全国“多合一”场所经典案例，制作视频警示教育片，利用主流媒体、微信、微博、宣传栏等普及消防法律法规、防火灭火和逃生自救等基本常识。各乡镇（街道办）要定期组织基层网格员、消防志愿者等走街串巷开展“上门教育”活动，并组织开展灭火疏散逃生演练，切实提高群众自防自救能力。"
        }])
const caseList = [{ title: '安徽省阜阳市颍上县2020.3.23较大火灾事故' }, { title: '深圳市宝安区沙井街道马安山社区二区14-15号出租屋“8·29”火灾事故调查' }]

const detailData = ref({content: {}})

onMounted(() => {
  getDetail()
})

function getDetail() {
  getDetailData().then(res => {
    console.log(res)
    detailData.value = res.data
    recList.value = res.data.recList
  })
}

const nodeClick = file => {
  previewFile.value = file
  showContent.value = true
}

function toggleExpand(index) {
  const isShow = recList.value[index].show
  recList.value[index].show=!isShow
}
function goBack() {g
  router.go(-1)
}
function togOpnShow(index) {
  const isShow = opnList.value[index].show
  opnList.value[index].show=!isShow
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 16px;
  height: 100%;
  font-size: 14px;
  &-title {
    text-align: center;
    h3 {
      font-size: 20px;
    }
  }
}
.top {
  text-align: right;
  &-back {
    cursor: pointer;
    float: right;
    font-size: 24px;
    color: $color-btn;
    &:hover {
      color: $color-btn-hover;
    }
  }
}
.con {
  display: flex;
  height: 50%;
  &-item {
    // min-width: 0;
    flex: 1;
    border-top-color: 1px solid $color-main;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    margin-left: 12px;
    border-radius: 6px;
    background-color: $color-content;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    overflow: auto;
    .title {
      padding: 8px 16px;
      background: $color-main;
      border-bottom: 1px solid $color-border;
      box-shadow: 0px -1px 1px 0px rgba(213, 213, 213, 0.6);
    }
  }

  .content {
    padding: 0 16px;
    min-height: 280px;
  }
  .wrap-br {
    flex: 1;
    margin-bottom: 16px;
    margin-bottom: 16px;
    width: 0;
    margin-left: 12px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    .content {
      min-height: 0;
      &.opn-list {
        height: 124px;
        overflow: auto;
      }
    }
    .con-item {
      margin-left: 0;
    }
    .bot-list {
        height: calc(100% - 178px);
        .content {
          height: calc(100% - 54px);
          overflow: auto;
        }
      }
  }
}

.item {
      line-height: 28px;
    }
.icon {
  width: 16px;
  padding-top: 7px;
  cursor: pointer;
  color: $color-btn;
  &:hover {
    color: $color-btn-hover;
  }
}
.child {
  padding-left: 16px;
}
.pointer {
  cursor: pointer;
}

.hover:hover {
  color: $color-btn-hover;
}

.opinion.hide-text {
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
}

.opn-btn {
    width: 20px;
    cursor: pointer;
  }
</style>
