/**
 * Created 2017/10/18.
 */

module.exports = function (app) {
  // app.use('/weixin', require('./wechat'));
  // app.use('/', function (req, res, next) {
  //   // res.cookie('unionid','test')
  //   if (/\/card\/apply/.test(req.path)) {
  //     let userinfo = req.cookies['userinfo']
  //     let unionid = null
  //     if (userinfo) {
  //       let _userinfo = typeof userinfo === 'object' ? userinfo : JSON.parse(userinfo)
  //       unionid = _userinfo.unionid || null
  //     }
  //     if (is_weixn(req) && !unionid) {
  //       console.log(userinfo,'userinfo')
  //       let redirectUrl = new Buffer(config.api.host + req.url)
  //       return res.redirect(301, `${config.api.host}/api/wxauto/auto?redirect_uri=${redirectUrl.toString('base64')}`)
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }
  // });
  app.use('/', require('./router'));
}


function is_weixn(req) {
  var userAgent = req.headers['user-agent'];
  var ua = userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

