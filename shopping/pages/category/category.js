// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'hello',
    detail: [],
    heightArr: [],
    containerH: 0,

  },
  switchTab(e) {
    console.log(e, '测试index')
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },
  scroll(e) {
    const that = this;
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr
    if (scrollTop >= scrollArr[scrollArr.length-1] - that.data.containerH) {
      return
    } else {
      for (let i = 0; i < scrollArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
          that.setData({
            curIndex: 0
          })
        } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
          this.setData({
            curIndex: i
          })
        }
      }
    }
  },
  onLoad: function (options) {
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this;
    let query = wx.createSelectorQuery().in(self);
    let heightArr = [];
    let s = 0
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success(res) {
        console.log(res)
        self.setData({
          detail: res.data
        })
      }
    })
    setTimeout(function () {
      query.selectAll('.cate-box').boundingClientRect((react => {
        console.log(react, 'heihie')
        react.forEach((res) => {
          s += res.height;
          heightArr.push(s)
          console.log(heightArr, '测试高度数组')
        });
        self.setData({
          heightArr: heightArr
        })

      }))
      query.select('.main').boundingClientRect((res) => {
        self.setData({
          containerH: res.height
        })
        console.log(res, 'haha')
      }).exec()
    }, 6000)
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

}
)
