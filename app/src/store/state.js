/**
 * Created  *  2017/5/4.
 */

const state = {
  tabbarSelectedIndex: 0,
  isLoading: false,
  showBack: false,
  direction: 'forward',
  mobile: '',
  uid: '',
  applyForm: {
    remark: '',
    mobile: '',
    city: '北京',
    streetAddress: '',
    deliveryAddress: '请选择您的写字楼，小区或学校等',
    deliveryDate: '',
    lng: 0,
    lat: 0
  },
  questionObj: [
    '请问您的性别是？',
    '请问您的家庭成员有？（多选）',
    '您想给谁买保险呢？（给谁买谁就是被保险人）',
    '接下来是被保险人的几个问题\n告诉我被保险人的常住城市吧',
    '告诉我被保险人的年龄吧',
    '被保人职业是？',
    '被保险人是否有不良习惯？',
    '被保人主要出行方式是？（多选）',
    '被保险人有社保吗？',
    '被保险人的年收入？',
    '被保险人当前是否已有保险配置？',
    '为了更精准的推荐，还请告诉我您家庭的收入情况？（含租金、理财及其他家庭成员收入）',
    '请问您家庭的负债情况和待还年限分别为？'
  ],
  compNames:['EvaluationSex','EvaluationFamily','EvaluationFamily','EvaluationCity'],
  currentCompName:'EvaluationSex',
  list:[],
  listIndex:0,
  // currentComp: {},
  currentAns: {
    answer:'',
    answertpl: ''
  },
  // dynamicComp: [
  //   {
  //     index:0,
  //     component: 'sex',
  //     q:'',
  //     ans:''
  //   }
  // ]
}

export default state
