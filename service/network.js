// 网络封装的好处：1.降低代码耦合度；2：使用promise链式封装防止出现回调地域
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve, 
      fali: reject
    })
  })
}