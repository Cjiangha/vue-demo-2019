<template>
  <div class="shouye">
    <!-- <button @click="show()">123</button> -->
    <header class="header">
      <img src="../assets/images/shouyelogo.png" />
    </header>
    <!-- <div class="search">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>-->
    <Search />
    <div class="swipter">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="`${image}`" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 图片 -->
    <div class="banner">
      <img src="../assets/images/shouyebanner.webp" class="floor-banner-poster" />
    </div>

    <div class="List">
      <!-- 列表1 -->
      <List>
        <!-- banner图 -->
        <img src="../assets/images/banner1.webp" class="list-banner1" />
        <div class="list-div">
          <ul class="clearfix">
            <li class="clearfix listitem" v-for="(i,index) in listimgurl[0].list1" :key="index">
              <div class="grey_div">
                <img :src="i.url" alt />
              </div>
              <div class="title">
                <h2 v-text="i.title"></h2>
              </div>
              <p>
                <span>￥</span>
                <span>{{i.price}}</span>
                <b class="tag">优惠券</b>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表2 -->
      <List>
        <!-- banner图 -->
        <img src="../assets/images/banner1.webp" class="list-banner1" />
        <div class="list-div">
          <ul class="clearfix list2">
            <li class="clearfix listitem" v-for="(i,index) in listimgurl[1].list2" :key="index">
              <div class="grey_div">
                <img :src="i.url" alt />
              </div>
              <div class="title">
                <h2 v-text="i.title"></h2>
              </div>
              <p>
                <span>￥</span>
                <span>{{i.price}}</span>
                <b class="tag">优惠券</b>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表3 -->
      <List>
        <!-- banner图 -->
        <img
          src="   https://resource.smartisan.com/resource/2ac0e92a2dea54340cac7f93bfd61820.png?x-oss-process=image/resize,w_700/format,webp"
          class="list-banner1"
        />
        <div class="list-div">
          <ul class="clearfix list3">
            <li class="clearfix listitem" v-for="(i,index) in listimgurl[2].list3" :key="index">
              <div class="grey_div">
                <img :src="i.url" alt />
              </div>
              <div class="title">
                <h2 v-text="i.title"></h2>
              </div>
              <p>
                <span>￥</span>
                <span>{{i.price}}</span>
                <b class="tag">优惠券</b>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表4 -->
      <List>
        <!-- banner图 -->
        <img
          src="https://resource.smartisan.com/resource/8983e641bf48a573096521716227cc5c.png?x-oss-process=image/resize,w_1008/format,webp"
          class="list-banner1"
        />
        <div class="list-div list-small" style="width: 100%;overflow:hideden;">
          <ul class="clearfix listsmall">
            <li
              class="clearfix listitem"
              v-for="(i,index) in listimgurl[3].list4"
              :key="index"
              style
            >
              <div class="grey_div" style="width:100%;">
                <img :src="i.url" alt style="width:100%;height:100%;" />
              </div>
              <div class="title">
                <h2 v-text="i.title"></h2>
              </div>
              <p>
                <span style>￥</span>
                <span style>{{i.price}}</span>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表5 -->
      <List>
        <img
          src="https://resource.smartisan.com/resource/3a0cb2a3870d491958dfa0e58f146547.jpg?x-oss-process=image/resize,w_1008/format,webp"
          class="list-banner1"
        />
        <div class="list-div list-small" style="width: 100%;overflow:hideden;;">
          <ul class="clearfix listsmall">
            <li
              @click="btn"
              class="clearfix listitem"
              v-for="(i,index) in this.shanpinbottom[0]"
              :key="index"
              style
              ref="companyStyle"
            >
              <div class="grey_div" style="width:100%;">
                <img :src="i.images" alt style="width:100%;height:100%;" />
              </div>
              <div class="title">
                <h2 v-text="i.skuTitle"></h2>
              </div>
              <p>
                <span style>￥</span>
                <span style>{{i.originalPrice}}</span>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表6 -->
      <List>
        <img
          src="https://resource.smartisan.com/resource/e6f7b32e4a942fd4a8c436495febd022.png?x-oss-process=image/resize,w_1050/format,webp"
          class="list-banner1"
        />
        <div class="list-div list-small" style="width: 100%;overflow:hideden;">
          <ul class="clearfix listsmall">
            <li
              @click="btn"
              class="clearfix listitem"
              v-for="(i,index) in this.shanpinbottom[1]"
              :key="index"
              style
              ref="companyStyle"
            >
              <div class="grey_div" style="width:100%;">
                <img :src="i.images" alt style="width:100%;height:100%;" />
              </div>
              <div class="title">
                <h2 v-text="i.skuTitle"></h2>
              </div>
              <p>
                <span style>￥</span>
                <span style>{{i.originalPrice}}</span>
              </p>
            </li>
          </ul>
        </div>
      </List>

      <List>
        <img
          src="https://resource.smartisan.com/resource/5bff6880a3b6ada21116860cde4e7ad0.png?x-oss-process=image/resize,w_1050/format,webp"
          class="list-banner1"
        />
        <div class="list-div list-small" style="width: 100%;overflow:hideden;">
          <ul class="clearfix listsmall">
            <li
              @click="btn"
              class="clearfix listitem"
              v-for="(i,index) in this.shanpinbottom[2]"
              :key="index"
              style
              ref="companyStyle"
            >
              <div class="grey_div" style="width:100%;">
                <img :src="i.images" alt style="width:100%;height:100%;" />
              </div>
              <div class="title">
                <h2 v-text="i.skuTitle"></h2>
              </div>
              <p>
                <span style>￥</span>
                <span style>{{i.originalPrice}}</span>
              </p>
            </li>
          </ul>
        </div>
      </List>
      <!-- 列表8 -->
      <List>
        <!-- banner图 -->
        <img
          src="https://resource.smartisan.com/resource/37e77f3ab4abc61b10c4275a52336cf5.png?x-oss-process=image/resize,w_1050/format,webp"
          class="list-banner1"
        />
        <div class="list-div">
          <ul class="clearfix">
            <li class="clearfix listitem" v-for="(i,index) in this.shanpinbottom[3]" :key="index">
              <div class="grey_div">
                <img :src="i.images" alt />
              </div>
              <div class="title">
                <h2 v-text="i.skuTitle"></h2>
              </div>
              <p>
                <span>￥</span>
                <span>{{i.originalPrice}}</span>
                <b class="tag">优惠券</b>
              </p>
            </li>
          </ul>
        </div>
      </List>
    </div>

    <div class="Listbottom">
      <Listbottom />
    </div>
  </div>
</template>
<script>
// 搜索框
import Vue from "vue";
import Search from "../components/search.vue";
import List from "../components/shouyelist.vue";
import Listbottom from "../components/shouyelistbottom.vue";

// 使用是用jquery进行操作
// const jQuery = require("jquery");
const axios = require("axios");
// import { Search } from "vant";
Vue.use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
// 轮播图
import "vant/lib/index.css";
import { Swipe, SwipeItem, Lazyload } from "vant";

export default {
  // 注册组件
  components: {
    Search,
    List,
    Listbottom
  },
  // 数据
  data() {
    return {
      value: "",
      images: [
        require("../assets/images/lunbo1.webp"),
        require("../assets/images/lunbo2.webp"),
        require("../assets/images/lunbo3.webp"),
        require("../assets/images/lunbo4.webp")
      ],
      // 首页列表的图片和内容  1-4楼
      listimgurl: [
        {
          list1: [
            {
              url:
                "https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_498/format,webp",
              title: "坚果 Pro 3",
              price: 2899
            },
            {
              url:
                "https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_498/format,webp",
              title: "坚果 Pro 3",
              price: 3199
            },
            {
              url:
                "https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_498/format,webp",
              title: "坚果 Pro 3",
              price: 3199
            },
            {
              url:
                "https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_498/format,webp",
              title: "坚果 Pro 3",
              price: 3199
            },
            {
              url:
                "https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_498/format,webp",
              title: "smartisan  颈挂蓝牙耳机",
              price: 199
            },
            {
              url:
                "https://resource.smartisan.com/resource/8e822aa7cbab24fec7eacf0bbb2f6526.jpg?x-oss-process=image/resize,w_498/format,webp",
              title: "smartisan  颈挂蓝牙耳机",
              price: 29
            }
          ]
        },
        {
          list2: [
            {
              url:
                "https://resource.smartisan.com/resource/9368c948ea81a5b8bc2efa165488ccc6.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "坚果 Pro 3 足迹保护套 人类首次公开使用乙醚",
              price: 49
            },
            {
              url:
                "https://resource.smartisan.com/resource/db1f9c8eadd0164a34e73465a34776a3.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "坚果 Pro 3 足迹保护套 德国天文学家开普勒出生",
              price: 49
            },
            {
              url:
                "https://resource.smartisan.com/resource/3e94ac101870deff0a0178c6a714bde7.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "坚果 Pro 3 足迹保护套 数学家哈密顿首次发现四元数",
              price: 49
            },
            {
              url:
                "https://resource.smartisan.com/resource/b93f8e0265cf372e774d0a76e32f2c0f.png?x-oss-process=image/resize,w_332/format,webp",
              title: "坚果 Pro 3 足迹保护套 克里斯蒂安·多普勒出生",
              price: 49
            },
            {
              url:
                "https://resource.smartisan.com/resource/31c8be42fbbabad10490835d953be356.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "坚果 Pro 3 足迹保护套 莫里斯·詹姆士·麦当劳出生",
              price: 49
            }
          ]
        },
        {
          list3: [
            {
              url:
                "https://resource.smartisan.com/resource/3899737bb15dae97d261a080d3b9894d.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "足迹保护套 人类首次公开使用乙醚 for iPhone 11",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/b466c9c2f8948309a8d9e4a9d1a437ef.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "足迹保护套  英国科学杂志《自然》出版 for iPhone 11",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/5bcb5d70f8c17efb0a2b4f9852a03128.jpg?x-oss-process=image/resize,w_332/format,webp",
              title: "足迹保护套 克里斯蒂安·多普勒出生 for iPhone 11",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/f060313b58a72053a89e1309bac4c3ab.jpg?x-oss-process=image/resize,w_332/format,webp",

              title: "足迹保护套 莫里斯·詹姆士·麦当劳出生 for iPhone 11",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/5888f9b53cd1184ac32f2ae778cd7804.jpg?x-oss-process=image/resize,w_332/format,webp",
              title:
                "足迹保护套 莱卡成为第一只进入地球轨道的动物 for iPhone 11",
              price: 69
            }
          ]
        },
        {
          list4: [
            {
              url:
                "https://resource.smartisan.com/resource/f46b707ac60f2dc7e000fcbb764b8d9c.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/9f4cb6ffecd8d063bd1caaf0f8b57df5.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/3ed99332f7fc6531d1448140b7dc0e46.jpg?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/c35a34f96fdec77c08c7f2935af5a972.png?x-oss-process=image/resize,w_330/format,webp",

              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/7ea928359aae13eab37139824e416c0e.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },

            {
              url:
                "https://resource.smartisan.com/resource/1db1a8bfee3623fded41c9115b5a5335.jpg?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/68fcf404dafd3baaa2031343c4414021.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/87ea9f04e38d26a8eea1537c029a6bb2.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/7ea928359aae13eab37139824e416c0e.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            },
            {
              url:
                "https://resource.smartisan.com/resource/c4aec07a9b618d020b1f00b9ce9d3656.png?x-oss-process=image/resize,w_330/format,webp",
              title: "落栗 卫衣 圆领 开普勒轨道",
              price: 69
            }
          ]
        }
      ],

      // style属性:
      styleObject: {
        color: "red",
        fontSize: "13px"
      },
      // list5-9楼数据
      shanpinbottom: [],
      grid1s: []
    };
  },
  methods: {
    btn() {
      // window.console.log(this.shanpinbottom[0]);
    },
    show() {
      // axios拿到后台接口的数据
      axios.get("http://shopapi.smartisan.com/mobile/home").then(({ data }) => {
        // window.console.log(data.data);
        let i = 6;
        let shanpinlist = data.data;
        //渲染3层
        for (i; i <= 9; i++) {
          this.shanpinbottom.push(shanpinlist[i].skuInfo);
        }
      });
    }
  },
  computed: {},
  // 创建生命周期方法
  created() {
    this.show();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/base.css";
@import "../assets/css/shouye.scss"; //引入的首页的scss的文件
@function s($n) {
  @return ($n / 2) / 18.725 + rem;
}

// 图片外面盒子高度
.list1 .list-small ul .listitem .grey_div {
  height: s(95);
}
// li宽度
.list1 .list-small ul .listitem {
  width: s(95);
}
</style>
