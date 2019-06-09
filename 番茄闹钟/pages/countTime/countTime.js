function countdown(that) {
  var second = that.data.second
  if (second == 0) {
    that.setData({
      second: "计时结束"
    });
    return;
  }
  var time = setTimeout(function(){
    that.setData({
     second: second - 1
    });
    countdown(that);
   }
   ,1000)
}

Page({
  data: {
    second: 3600
  },
  onLoad: function () {
    countdown(this);
  },
  timeClose: function () {
    wx.switchTab({
      url: '../time/time'
    })
  },
  timeBg: function () {
    
    this.setData({
      second:3600
    })
  }
});
