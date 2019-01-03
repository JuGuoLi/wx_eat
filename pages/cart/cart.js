wx.cloud.init();
const db = wx.cloud.database()

// pages/cart/cart.js
Page({
  upper(e) {
    wx.showToast({
      title: '已到顶部',
      icon: 'none',
      duration: 1500
    })
  },
  lower(e) {
    wx.showToast({
      title: '已到底部',
      icon: 'none',
      duration: 1500
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    cartList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // collection 方法获取一个集合的引用
    //获取菜品信息
    db.collection('cart').where({
    }).get({ // get 方法会触发网络请求，往数据库取数据
      success:(res)=>{
        this.setData({
          cartList:res.data
        })
      }
    });
    //获取轮播图片
    db.collection('swiper').where({
    }).get({ // get 方法会触发网络请求，往数据库取数据
      success: (res) => {
        this.setData({
          imgUrls: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})