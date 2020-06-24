/*
 * @Author: your name
 * @Date: 2020-06-15 15:52:58
 * @LastEditTime: 2020-06-16 17:06:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fwsyPlatform\pages\result\result.js
 */
// pages/result/result.js
const contentDatas = [
  {title: '包装生产', src: '../../assets/imgs/package_icon.png'},
  {title: '物流配送', src: '../../assets/imgs/wlps_icon.png'},
  {title: '防伪查验', src: '../../assets/imgs/fw_icon.png'},
  {title: 'OID注册', src: '../../assets/imgs/OID_icon.png'},
  {title: '区块链', src: '../../assets/imgs/qkl_icon.png'},
  {title: '企业介绍', src: '../../assets/imgs/company_icon.png'},
]
Page({
  data: {
    isDialog: true, //弹框显示
    contentData: [
      {title: '包装生产', src: '../../assets/imgs/package_icon.png'},
      {title: '物流配送', src: '../../assets/imgs/wlps_icon.png'},
      {title: '防伪查验', src: '../../assets/imgs/fw_icon.png'},
      {title: 'OID注册', src: '../../assets/imgs/OID_icon.png'},
      {title: '区块链', src: '../../assets/imgs/qkl_icon.png'},
      {title: '企业介绍', src: '../../assets/imgs/company_icon.png'},
    ],
    dialogData: [
      {title: '生产包装信息', src: '../../assets/imgs/Production_popup_icon.png'},
      {title: '物流信息', src: '../../assets/imgs/Logistics_popup_icon.png'},
      {title: '防伪查验', src: '../../assets/imgs/Security_popup_icon.png'},
      {title: 'OID注册', src: '../../assets/imgs/OID_popup_icon.png'},
      {title: '区块链', src: '../../assets/imgs/Blockchain_popup_icon.png'},
      {title: '企业介绍', src: '../../assets/imgs/company_popup_icon.png'}
    ],
    imgText: {},
    currentIndex: 0,
    axis: [
      {
        time: '08:30-10:00',
        event: '垃圾太多'
      },
      {
        time: '10:00-11:00',
        event: '垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多111'
      },
      {
        time: '11:00-12:00',
        event: '垃圾太多'
      },
      {
        time: '12:00-13:00',
        event: '垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多222'
      },
      {
        time: '13:00-14:00',
        event: '垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多333'
      },
      {
        time: '14:-16:00',
        event: '垃圾太多'
      },
      {
        time: '16:00-17:00',
        event: '垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多垃圾太多444'
      }
    ]

  },

  onready() {

  },
  showDialog(e) {
    const currentIndex = e.currentTarget.dataset.index;
    const dialogChecked = this.data.dialogData[currentIndex];
    this.setData({
      isDialog: true,
      imgText: dialogChecked
    })
  },
  hideDialog() {
    this.setData({
      isDialog: false
    })
  }
})