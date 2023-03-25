const app = getApp();
Page({
    curLang: {},
    data: {
        langList: app.globalData.langList
    },

    onShow() {
        this.setData({ 'curLang': app.globalData.curLang })
      },

    onTapItem(e) {
        let selectLang = e.currentTarget.dataset
        wx.setStorageSync('curLang', selectLang)
        app.globalData.curLang = selectLang
        this.setData({'curLang': selectLang})
        wx.switchTab({url: '/pages/index/index'})
    }
})