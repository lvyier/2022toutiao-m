module.exports = {
  plugins: {
    // 设置浏览器前缀
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    // 转换单位
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 70
      },
      propList: ['*'],
    },
  },
}
