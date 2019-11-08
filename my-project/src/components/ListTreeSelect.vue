<template>
  <div class="tree_select">
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <!-- 右边的列表 -->
        <div v-if="gridsComputed.length>0&&activeIndex === 0 " class="right-wrap">
          <div class="category-sub">
            <div
              class="banner-wrap"
              v-if="gridsComputed[1].banner!=null&&gridsComputed[0].banner.length>0"
            >
              <img
                data-v-72261d12
                :src="gridsComputed[1].banner[0].image"
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[0].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>

        <div v-if="gridsComputed.length>0&&activeIndex === 1 " class="right-wrap">
          <div class="category-sub">
            <div class="banner-wrap" v-if="gridsComputed[1].banner!=null">
              <img
                data-v-72261d12
                :src="gridsComputed[1].banner.length>0?gridsComputed[1].banner[0].image:'' "
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[1].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>

        <div v-if="gridsComputed.length>0&&activeIndex === 2 " class="right-wrap">
          <div class="category-sub">
            <div class="banner-wrap" v-if="gridsComputed[2].banner!=null">
              <img
                data-v-72261d12
                :src="gridsComputed[2].banner.length>0?gridsComputed[2].banner[0].image:'' "
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[2].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>

        <div v-if="gridsComputed.length>0&&activeIndex === 3 " class="right-wrap">
          <div class="category-sub">
            <div class="banner-wrap" v-if="gridsComputed[3].banner!=null">
              <img
                data-v-72261d12
                :src="gridsComputed[3].banner.length>0?gridsComputed[3].banner[0].image:'' "
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[3].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>

        <div v-if="gridsComputed.length>0&&activeIndex === 4 " class="right-wrap">
          <div class="category-sub">
            <div class="banner-wrap" v-if="gridsComputed[4].banner!=null">
              <img
                data-v-72261d12
                :src="gridsComputed[3].banner.length>0?gridsComputed[3].banner[0].image:'' "
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[4].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>

        <div v-if="gridsComputed.length>0&&activeIndex === 5 " class="right-wrap">
          <div class="category-sub">
            <div class="banner-wrap" v-if="gridsComputed[5].banner != null">
              <img
                data-v-72261d12
                :src="'gridsComputed[5].banner.length>0'?'gridsComputed[5].banner[0].image':'' "
                alt="banner"
                class="banner-img"
              />
            </div>
          </div>
          <div
            class="second-and-third-list"
            v-for="(i,index) in gridsComputed[3].second"
            :key="index"
          >
            <h1>{{i.classifyName}}</h1>
            <div class="list-flex-wrap">
              <li class="flex-item" v-for="(item,index2) in i.third" :key="index2">
                <div class="img-cover">
                  <img :src="item.image" />
                </div>
                <b>{{item.classifyName}}</b>
              </li>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect, Image } from "vant";
Vue.use(TreeSelect).use(Image);
// window.document.querySelector(".van-tree-select__nav").style() = "";
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "手机数码" },
        { text: "官方配件" },
        { text: "鞋包服饰" },
        { text: "畅呼吸" },
        { text: "医疗保健" },
        { text: "电脑办公" }
      ],
      listtype: []
    };
  },
  methods: {
    async getdata() {
      await this.$axios
        .get("http://shopapi.smartisan.com/mobile/classify")
        .then(({ data }) => {
          // this.restaurants = this.restaurants.concat(data);
          // this.restaurants = [...this.restaurants, ...data];
          window.console.log(data.data);
          // 加载状态结束
          // this.loading = false;
          // 数据全部加载完成
          // if (this.restaurants.length >= 10) {
          //   this.finished = true;
          // }
          this.listtype = data.data;
        });
    }
  },
  created() {
    this.getdata();
    window.console.log(this.listtype[0]);
  },
  mounted() {
    // window.console.log(this.listtype[1].banner);
  },
  computed: {
    // 14->10宫格
    gridsComputed() {
      // slice  切割数组
      return this.listtype;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/base.css";

@function s($n) {
  @return ($n / 2) / 18.5 + rem;
}
// html {
//   font-size: calc(100vw / 3.75);
// }
// 边框样式
.van-search {
  border-bottom: 1px #ccc solid;
}
.right-wrap {
  border-left: 1px #ccc solid;
}

body {
  height: 100%;
  font-weight: bolder;
  font-family: Helvetica Neue, Helvetica, Arial, SCREEN GP Sans SC, PingFang SC,
    Hiragino Sans GB, Microsoft Yahei, 微软雅黑, STHeiti, 华文细黑, sans-serif;
  -webkit-tap-highlight-color: transparent;
}

.tree_select {
  width: 100%;
  height: calc (100% - s(108));
  box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1);
  box-sizing: border-box;
  position: absolute;
  left: 0;
  margin-top: 48px;
}
.van-tree-select__nav-item {
  padding: s(8.3) s(3.3);
  // position: absolute;
  // left: 0;
}
// li
.van-sidebar-item {
  margin-bottom: 10px;
  border-radius: 0.2rem;
  border-left: 3px solid transparent;
}
// 高亮样式
.van-sidebar-item--select {
  color: #d44d44;
  background: #f6ebea;
  border-radius: 0.2rem;
  border-left: 3px solid transparent;
}

.van-tree-select__nav {
  height: calc(100% - 100px);
  padding-top: 27px;
  background: white;
  flex: 0.6;
  position: fixed;
}

.tree_select {
}
// 右边
.van-tree-select__content {
  padding-left: 90px;
  .banner-img {
    width: 256px;
    height: 97px;
  }
  .right-wrap {
    overflow-x: hidden;
    overflow-y: auto; //出现滚动条
    height: 110%;
    display: flex;
    flex-direction: column;
    .category-sub {
      width: 100%;
      box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1);
    }

    img {
      width: 256px;
      height: 97px;
      border-radius: 12px;
    }
    .second-and-third-list {
      // display: flex;
      // flex-wrap: wrap;
      h1 {
        color: rgba(0, 0, 0, 0.8);
        font-size: 16px;
        font-weight: 700;
        line-height: 55px;
        margin-left: 20px;
        text-align: left;
      }
      .list-flex-wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        padding: 0 0 s(8);
        .flex-item {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.333%;
          flex: 0 0 33.333%;
          padding: 0 0.15rem;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          margin: 16px 0;
          .img-cover {
            overflow: hidden;
            background: rgba(0, 0, 0, 0.03);
            height: s(82);
            border-radius: 5px;
          }
          img {
            position: relative;
            top: 50%;
            left: 50%;
            width: 100%;
            height: s(80);
            transform: translate(-50%, -50%);
            mix-blend-mode: multiply;
          }
          b {
            text-align: center;
            font-size: 10px;
            margin-top: 5px;
          }
        }
      }
    }
  }

  .second-and-third-list {
    h1 {
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
      font-weight: 700;
      line-height: 54px;
      margin-left: 20px;
    }
  }
}
</style>
