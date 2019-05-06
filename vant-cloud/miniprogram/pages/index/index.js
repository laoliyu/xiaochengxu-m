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
    if( self.data.groupName === '' ){
      Notify({
        text: '输入框不能为空',
        duration: 1500,
        // 持续多久
        selector: '#notify-selector',
        // 选中id名，相当于DOM操作
        backgroundColor: '#dc3545'
      });
      self.selectComponent('#new-group-modal').stopLoading();
      return 
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