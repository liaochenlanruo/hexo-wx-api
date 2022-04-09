/***
 * @Description: 主要的配置文件
 * @Author: liaochenlanruo
 * @Date: 2021-12-12 15:03:59
 * @Url: https://www.liaochenlanruo.fun
 * @github: https://github.com/liaochenlanruo
 * @LastEditTime: 2021-12-12 20:06:49
 * @LastEditors: liaochenlanruo
 */


//配置域名,域名只修改此处。可以配置为根域名
const DOMAIN = "www.liaochenlanruo.fun";
const WEBSITENAME = "了尘兰若的小坑"; //网站名称
const ZANIMAGEURL = '../../static/images/zanshang.jpg'; //微信鼓励的图片链接，用于个人小程序的赞赏
const LOGO = "../../static/images/logo-icon.png"; // 网站的logo图片
const ARTICLE_AUTHOR_NAME = "了尘兰若" // 文章作者的名称
const ARTICLE_AUTHOR_img = "../../static/images/author.jpg" // 文章作者的头像,这里是相对于文章页的地址
//首页图标导航
//参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
//redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
//redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
//'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
//'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
const ISAD = {
  "enable": false,
  "bannerId":'adunit-c9dae21126085de9'
};  // 是否开启广告

const INDEXNAV = [{
    id: '1',
    name: '热门标签',
    image: '../../static/icon/index/1.png',
    url: '../../pages/list_tags/list',
    //url: '../hot/hot',
    redirecttype: 'apppage',
    appid: '',
    extraData: ''
  },
  {
    id: '5',
    name: '搜索文章',
    image: '../../static/icon/index/2.png',
    url: '../../components/search/search',
    //url: '../search/search',
    redirecttype: 'apppage',
    appid: '',
    extraData: ''
  },
  {
    id: '7',
    name: '图片展示',
    image: '../../static/icon/data/haib.png',
    //url: '../../pages/category/category',
    url: '../../pages/gallery/gallery',
    //url: 'https://www.liaochenlanruo.fun/about/',
    redirecttype: 'apppage',
    appid: '',
    extraData: ''
  },
  {
    id: '10',
    name: '关于我',
    image: '../../static/icon/index/4.png',
    url: '../../pages/about/about',
    redirecttype: 'apppage',
    appid: '',
    extraData: ''
  }
];




export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getIndexNav: INDEXNAV,
  getZanImageUrl: ZANIMAGEURL,
  getLogo: LOGO,
  getAuthorname: ARTICLE_AUTHOR_NAME,
  getAuthorImg: ARTICLE_AUTHOR_img,
  getAd: ISAD
}