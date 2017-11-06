
var changeLangEvent = function () {
  this.$confirm('确定切换语言吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    if (this.lang === 'zh-CN') {
      this.lang = 'en-US'
      this.$i18n.locale = this.lang// @important
    } else {
      this.lang = 'zh-CN'
      this.$i18n.locale = this.lang// @important
    }
  }).catch(() => {
    this.$message({
      type: 'info'
    })
  })
}

export default changeLangEvent()
