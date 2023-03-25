const app = getApp()

Page({
    data: {
        history: []
    },

    onShow() {
        const history = wx.getStorageSync('history') || []
        if (history.length === 0) return
        const reverHis = JSON.parse(JSON.stringify(history)).reverse()
        this.setData({ history: reverHis })
        console.log(this.data.history);
    },

    onTapItem(e) {
console.log(e);
        wx.reLaunch({
          url: `/pages/index/index?query=${e.currentTarget.dataset.query}&dst=${e.currentTarget.dataset.dst}`,
        })
    }
})
