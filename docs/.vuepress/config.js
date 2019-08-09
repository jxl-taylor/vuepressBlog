module.exports = {
	title: '个人主页',
	description: 'Personal Website',
	head: [ // 注入到当前页面的 HTML <head> 中的标签
		['link', {rel: 'icon', href: '/images/photo.jpg'}],
		['link', {rel: 'manifest', href: '/images/photo.jpg'}],
		['link', {rel: 'apple-touch-icon', href: '/images/photo.jpg'}],
		['meta', {'http-quiv': 'pragma', cotent: 'no-cache'}],
		['meta', {'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
		['meta', {'http-quiv': 'expires', cotent: '0'}]
	],
	serviceWorker: true, // 是否开启 PWA
	base: '/', // 部署到github相关的配置
	markdown: {
		lineNumbers: true // 代码块是否显示行号
	},
	themeConfig: {
		nav: [ // 导航栏配置
			{text: '前端基础', link: '/accumulate/'},
			{text: '算法题库', link: '/algorithm/'},
			{text: '诗和远方', link: '/others/'},
			{text: '微博', link: 'https://baidu.com'},
			{text: '菜单4',
				items:[
					{text:'菜单4-1',link: '/accumulate/1.md'},
					{text:'菜单4-2',link: '/algorithm/'}
				]
			}
		],

		sidebar: {
			'/accumulate/': [
				{
					title: 'AAAAA',
					children: [
						'/accumulate/1.html',
						'/accumulate/2.html',
						'/accumulate/3.html'
					]
				}
			],
			'/algorithm/': [
				'/algorithm/',
				{
					title: '第二组侧边栏下拉框的标题1',
					children: [
						'/algorithm/'
					]
				}
			]
		},
		// sidebar: 'auto', // 侧边栏配置
		sidebarDepth: 1,
		lastUpdated: 'Last Updated', // string | boolean

		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'vuejs/vuepress',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',

		// 以下为可选的编辑链接选项

		// 假如你的文档仓库和项目本身不在一个仓库：
		docsRepo: 'vuejs/vuepress',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '帮助我们改善此页面！',



	}
};
