// components/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabItems: {
      type: Array,
      value: []
    }
  },
  externalClasses: ['active1'],
  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getIndex(event) {
      // get click index
      const index = event.currentTarget.dataset.index;
      // change activeIndex
      this.setData({
        activeIndex: index
      });
      // trigger self evetn
      this.triggerEvent('tabClick', {index}, {})
    }
  },

  properties: {
    title: {
      type: '',
      value: '',
      observer: function(newValue, oldValue) {
        
      }
    }
  }
})
