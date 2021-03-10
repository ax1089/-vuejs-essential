<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-5 col-lg-5">
          <p class="padding-top-xsm">{{ description }}</p>

          <div class="text-md">
            <a v-for="item in contacts" v-title="item.title" :href="item.link" :style="contactStyle" :key="item.num"  target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

          <br>

          <span v-html="designer"></span>
        </div>

        <div class="col-sm-6 col-lg-6 col-lg-offset-1">
          <div class="row">
            <div class="col-sm-4">
              <h4>{{ sponsor.title }}</h4>

<!--              <ul class="list-unstyled">-->
<!--                <li v-for="item in sponsor.list" :key="item.num">-->
<!--                  <a :href="item.link" target="_blank">-->
<!--                    <img :title=@"item.title" :src="item.logo" :alt="item.title" class="footer-sponsor-link" width="98">-->
<!--                  </a>-->
<!--               </li>-->
<!--              </ul>-->
              <ul class="list-unstyled">
                <li v-for="item in sponsor.list">
                  <a :href="item.link" target="_blank">
                    <img v-title="item.title" :src="item.logo" :alt="item.title" class="footer-sponsor-link" width="98">
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in statistics.list" :key="item.num">{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in other.list" :key="item.num">
                  <a :href="item.link" v-title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i> {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
  import title from "@/directives/title";
  export default {
    name:'TheFooter',
    directives:{
      title
    },
    data(){
      return {
        description:'Vue.js 是一个 Vue.js 的知识社区',
        contacts:[
          {
            icon:'envelope',
            title:'反馈问题',
            link:'mailto:wencai159@126.com'
          },
          {
            icon:'weibo',
            title:'站长微博',
            link:'https://weibo.com/1837553788/profile?topnav=1&wvr=33'
          },
          {
            icon:'weixin',
            title: '加我微信',
            link: 'https://vue.com/vuejs/contact'
          }
        ],
        contactStyle:{
          paddingRight:'8px'
        },
        designer:`
          <span style="font-size:0.9em">Designed by
            <span style="color: #e27575;font-size: 14px;">❤</span>
            <a href="https://github.com/ax1089"target="_blank"style="color:inherit">LEE</a>
          </span>`,
        sponsor: {
            title:'赞助商',
            list:[
                {
                  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAABECAMAAADtPbq8AAAAOVBMVEX///8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP8QVP/OCy9uAAAAEnRSTlMAECAwQFBgcICQnKCwwNDg7/DM3zbSAAADHElEQVRo3u2Z2badIAyGwyDGYqTw/g/bi32UGdnartWL/HcyxHwQGSIAi8VisVgsFovFYv17GQlk4PcvxvifJLW6ayL0j+RZoletxdiqQUQ098Yb0pfu26IEMhgQA8X+eCq2W6wLUW5HCQD4eSLaW9Rm90kXWiMw/WiLQXEWAQCoIxTytMohBqkaA6/uF4QrDQdsNoxafeXLetZdaPUrAQB0aGmXExGldJz4yjvbsHqD0eoS7BuM4M1gNowhg4EoMVp6t7WMLkMM2/Zke4PxeWdbAT8RNcBoW9UjjK4j+hWGH64noLQ++hjUNKlGGNRzhF5hBBysVYEoN5p7p9oWYYAhkwG0iDb52uUEhsRMSYC65xjJl2GXaylfRxhrHH0BACDiCrpOYFTB4rIYGEVUH+Nywat6BNpv38tgFtd87A8wkihb+2tVZTT3rlxmJjBcucLGlctNBZUutv3a4LcYulhlZjCuYlOH2fwn7shUo0DvMWAWQ9bkOovu2ZUKq2r/FAO/x4g+izbZ1xgmDL+dbzDoAUYjzh5haMZgDMZgjCkM9wZDNDHcLMbyGsO82Td0u6juNrv9hfe7uPr+MLLUwymeYFyn7KOLsVdTbNPXiMHpsofh+37kh2Y5iXHcn6mwDIF4qqbsdOnELAZVI+Myk1QdHccYcuL6F293ThV3nC2fmyM542qZYawdvLU84G5Z/TUyY4x9cMqGasZCaN04Tf9WvSS35DM+lMku01YDaJtf4ZN+h5EAUscWGYZVAKBMvNn7UZKxd4HfikivMERa4IiIjs9H7Hom3cjkfUrBjhIjW7vPIcoQyZIt3XSU7nWJHwM+xBgnDu2IIou64oXSd3JRR2dkzt3QPcLYbrKfjfmguC5J1x0Z5dvJJNUMG3+NpvIPMOx9Ep56aWMAAEHdBGCd/f6sL7LR5UhiQh3fYnic+puQZrXWcovQe+nSdjYxZdXeLj+KTLI5vsE4VjH9XwSRaEMj+7VEtCMaXfy/QfvzewIxSc2I5SzfcWkYjfU/fRGX83/QmTLcaENEPc3AYrFYLBaLxWKxWH9BfwAw7emuyXeZSwAAAABJRU5ErkJggg==',
                  title: '本站服务器由 UCloud 赞助',
                  link: 'http://www.ucloud.cn'
                },
                {
                    logo:'https://ax1089.github.io/vuejs-essential/dist/img/logo.82b9c7a5.png',
                    title:'本站CDN 服务由七牛赞助',
                    link:'http://www.qiniu.com/?utm_source=phphub'
                },
                {
                    logo: 'https://img.alicdn.com/tfs/TB13DzOjXP7gK0jSZFjXXc5aXXa-212-48.png',
                    title: '订阅邮件赞助商：AliCloud',
                    link: 'https://www.aliyun.com/'
                },
                {
                    logo: 'https://www.phpcomposer.com/assets/img/phpcomposer.png',
                    title: 'Composer 镜像赞助商',
                    link: 'https://www.phpcomposer.com/'
                }
            ]
        },

        statistics:{
            title:'统计信息',
            list:[
                {
                  title: '社区会员',
                  description: '22889'
                },
                {
                  title: '话题数',
                  description: '7397'
                },
                {
                  title: '评论数',
                  description: '39375'
                }
            ]
        },

        other:{
            title:'其他信息',
            list:[
                  {
                    icon: 'thumbs-up',
                    title: '软件测试平台',
                    link: 'https://vue.com'
                  },
                  {
                    icon: 'globe',
                    title: '推荐网站',
                    link: 'https://vue.js'
                  }
            ]
        }
      }
    }
  }
</script>
<style scoped>
a:hover, a:focus { color: #e27575; transition: color .15s;}
</style>