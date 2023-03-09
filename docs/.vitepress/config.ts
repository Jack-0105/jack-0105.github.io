import { getThemeConfig, defineConfig } from '@sugarat/theme/node';

const authorNickName = '牛儿不吃草';
const description = '生命不息，奋斗不止💪';

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: authorNickName,
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖，拥有改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top/',
    },
  ],
  search: false,
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 10,
    empty: '暂无精选内容',
  },
  recommend: {
    title: '🔍 相关文章',
    nextText: '换一组',
    pageSize: 10,
    empty: '暂无推荐文章',
  },
  article: {
    /**
     * 是否展示文章的预计阅读时间
     */
    readingTime: true,
  },
  popover: {
    title: '公告',
    duration: -1,
    body: [
      { type: 'text', content: '👇 公众号 👇 --- 👇 微信 👇' },
      {
        type: 'image',
        src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210',
      },
      {
        type: 'text',
        content: '欢迎大家私信交流',
      },
    ],
  },
});

export default defineConfig({
  lang: 'zh-cmn-Hans',
  title: authorNickName,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    ['meta', { name: 'author', content: authorNickName }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#ffffff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.ico', sizes: '180x180' },
    ],
  ],
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme'],
    },
  },
  lastUpdated: true,
  themeConfig: {
    ...blogTheme,
    lastUpdatedText: '上次更新于',
    footer: {
      message: '自定义底部内容',
      copyright: `MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @${authorNickName} </a>`,
    },
    logo: '/logo.png',

    nav: [
      {
        text: '大前端',
        items: [
          { text: 'JavaScript', link: '/pages/javascript/' },
          {
            text: 'React',
            link: '/pages/react/',
          },
        ],
      },
      {
        text: '关于我',
        link: '/about_me',
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jack-0105' }],
  },
  base: '/',
});
