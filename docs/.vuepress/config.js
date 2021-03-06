module.exports = {
    title: '系统架构设计与优化',
    description: '拥抱云时代容器化微服务化系统架构',
    base: '/architecture/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://i.loli.net/2020/02/25/AOjBhkIxtb8dRgl.png'
        }]
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        ['@vuepress/google-analytics', {
            ga: 'UA-131744342-1'
        }]
    ],
    themeConfig: {
        repo: 'https://github.com/colin-chang/architecture',
        nav: [{
                text: 'Get Start',
                link: '/architecture/intro'
            },
            {
                text: 'Books',
                items: [{
                        text: 'Python',
                        link: 'https://ccstudio.org/python'
                    },
                    {
                        text: '.Net Core',
                        link: 'https://ccstudio.org/dotnet'
                    },
                    {
                        text: 'Linux',
                        link: 'https://ccstudio.org/linux'
                    }
                ]
            },
            {
                text: 'Blog',
                link: 'https://ccstudio.org/'
            }
        ],
        sidebar: [{
                title: '系统架构',
                collapsable: false,
                children: [
                    '/architecture/intro',
                ]
            },{
                title: '数据库优化',
                collapsable: false,
                children: [
                    '/database/lock',
                ]
            },
            {
                title: 'NoSQL',
                collapsable: false,
                children: [
                    '/nosql/intro',
                    '/nosql/redis',
                    '/nosql/mongo'
                ]
            },
            {
                title: '分布式日志',
                collapsable: false,
                children: [
                    '/log/elk',
                    '/log/exceptionless',
                ]
            },
            {
                title: 'TODO',
                collapsable: false,
                children: [
                    '/todo'
                ]
            },
        ],
        displayAllHeaders: true,
        lastUpdated: '更新时间',
    },
    markdown: {
        lineNumbers: true
    }
}
