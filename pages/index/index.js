const app = getApp()
import {translate} from '../../utils/api'

Page({
    data: {
        query: '',
        result: [],
        curLang: {},
        hideClearIcon: 'true'
    },
    onLoad(options) {
        if (options.query) {
            this.setData({query: options.query})
            this.setData({result: [options]})
        }
    },
onShow() {
    this.setData({ 'curLang': app.globalData.curLang })
},

    onInput(e) {
        this.setData({'query': e.detail.value})
        if (this.data.query.length > 0) {
            this.setData({'hideClearIcon': false})
        } else {
            this.setData({'hideClearIcon': true})
        }
    },

    onTapClose() {
        this.setData({query: ''})
        this.setData({'hideClearIcon': true})
    },

    onConfirm() {
        if (this.data.query === '') return
        console.log(this.data.curLang.lang);
        translate(this.data.query, {from: 'zh', to: this.data.curLang.lang}).then(res => {
            console.log(res.trans_result);
            this.setData({'result': res.trans_result})
            let history = wx.getStorageSync('history') || []
            if (history.length < 10) {
                history.push(res.trans_result[0])
                wx.setStorageSync('history', history)
            } else {
                history.shift().push(res.trans_result[0])
            }
        })
    }

})
