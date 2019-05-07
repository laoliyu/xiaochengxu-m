// miniprogram/pages/index/index.js
import Notify from '../dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  createGroup() {
    let self = this;
    if (self.data.groupName === '') {
      Notify({
        text: '起个名字',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      });
      //   // self.setData({
      //   //   newGroupModal: true
      //   // })
      //   // dialog自带方法
      self.selectComponent('#new-group-modal').stopLoading()
      return
    } else {
      // 调用云函数
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: self.data.groupName
        },
        success(res) {
          self.setData({
            newGroupModal: false,
            groupName: ''
          })
          Notify({
            text: '新建成功',
            duration: 1500,
            selector: '#notify-selector',
            backgroundColor: '#fa5645'
          });
          setTimeout(() => {
            // tabbar 的页面跳转
            wx.switchTab({
              url: '/pages/group/group'
            })
          })
        },
        fail(error) {
          console.log(error);
        }
      })
    }
  },
  onGroupNameChange(event) {
    console.log(event);
    this.setData({
      groupName: event.detail
    })

  },
  onLoad: function (options) {

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