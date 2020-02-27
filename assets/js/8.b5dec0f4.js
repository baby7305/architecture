(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elk"}},[t._v("#")]),t._v(" ELK")]),t._v(" "),s("p",[t._v("ELK是三个开源软件的缩写，分别表示：Elasticsearch , Logstash, Kibana。ELK是经典的分布日志框架组合。")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Elasticsearch")]),t._v(" "),s("p",[t._v("Elasticsearch是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。")])]),t._v(" "),s("li",[s("p",[t._v("Logstash")]),t._v(" "),s("p",[t._v("Logstash 主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为c/s架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。")])]),t._v(" "),s("li",[s("p",[t._v("Kibana")]),t._v(" "),s("p",[t._v("Kibana 也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助汇总、分析和搜索重要数据日志。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-elk环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-elk环境搭建"}},[t._v("#")]),t._v(" 2. ELK环境搭建")]),t._v(" "),s("p",[t._v("ELK分别安装配置部署工作比较繁琐，以Docker为代表的容器化技术让这一切变得异常简单。Docker三剑客之一的Compose主要负责容器编排，在Compose中单个容器称为Task，多个同镜像任务构成Service，多个关联服务称为Stack。这里我们就可以使用Compose来配置一个ELK Stack。关于Docker的基础知识，这里就不做赘述了。")]),t._v(" "),s("p",[t._v("网上有些爱好者分享了ELK的Docker Compose的配置，为了方便大家使用，笔者基于现有实际项目应用的Compose配置整理，分享在"),s("a",{attrs:{href:"https://github.com/colin-chang/ELK.Stack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("。大家可以fork后按需定制修改。Thanks @"),s("a",{attrs:{href:"https://github.com/deviantony",target:"_blank",rel:"noopener noreferrer"}},[t._v("deviantony"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("https://github.com/colin-chang/ELK.Stack")]),t._v(" "),s("h3",{attrs:{id:"_2-1-clone-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-clone-repository"}},[t._v("#")]),t._v(" 2.1 Clone Repository")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/colin-chang/ELK.Stack.git "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ELK.Stack\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-2-logstash-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-logstash-configuration"}},[t._v("#")]),t._v(" 2.2 Logstash Configuration")]),t._v(" "),s("p",[t._v("如前面提到Logstash可以搜集、分析、过滤日志，我们可以按需定制 logstash pipeline,其包含两个必须的元素input和output，和一个可选元素filter。\n"),s("img",{attrs:{src:"https://i.loli.net/2020/02/25/z2Of6jNIFBK1Awi.png",alt:"logstash pipeline"}})]),t._v(" "),s("p",[t._v("input负责日志采集，output负责日志输出，而filter则负责日志分析和过滤。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-filter"}},[t._v("#")]),t._v(" 2.2.1 Filter")]),t._v(" "),s("p",[t._v("通过 grok 可以把非结构化日志数据通过正则解析成结构化和可查询化数据，grok语法如下表。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("适用")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("%{SYNTAX:SEMANTIC}")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("官方既定正则")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("%{正则:自定义字段名}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("%{DATE:timestamp}")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("(?<filed> pattern)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("自定义模式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("(?<字段> 自定义正则)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("(?<phone> \\d{11})")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方提供"),s("OutboundLink")],1),t._v("了一些常用正则的grok pattern可以直接使用，当然我们也可以自定义pattern分析日志。")]),t._v(" "),s("p",[s("strong",[t._v("grok匹配时换行符会导致匹配失败，建议在匹配前将日志中换行替换掉。")])]),t._v(" "),s("p",[s("strong",[t._v("在"),s("code",[t._v("/logstash/pipeline/logstash.conf")]),t._v("文件中默添加了以下 grok pattern,反注释即可使用。")])]),t._v(" "),s("p",[t._v("例如，定义grok pattern如下。")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("grok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    match => "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("=>"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%{LOGLEVEL:level}#%{USERNAME:logger}#%{DATA:callsite}#%{DATA:msg}#%{DATA:event_property}#%{DATA:exception_message}\\|%{GREEDYDATA:exception_stacktrace}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("示例错误日志。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FATAL#Xiaoyang.EmotionAnalyze.Program#Xiaoyang.EmotionAnalyze.Program.RunThrift 61#RunThrift failed.##System.TypeInitializationException: “Xiaoyang.EmotionAnalyze.Contract.Implement.EmotionAnalyzer”的类型初始值设定项引发异常。 ---\x3e System.IO.FileNotFoundException: 未能加载文件 或程序集“Affdex, Version=4.0.0.615, Culture=neutral, PublicKeyToken=null”或它的某一个依赖项。系统找不到指定的文件。|   在 Xiaoyang.EmotionAnalyze.Contract.Implement.EmotionAnalyzer..cctor()|   --- 内部异常堆栈跟踪的结尾 ---|   在 Xiaoyang.EmotionAnalyze.Contract.Implement.EmotionAnalyzer..ctor(RedisHelper redis, ILogger`1 logger)|   在 invoker-94fbbdc3-6029-4ba8-bd06-c3b11de6d8a1(Object[] )|   在 AspectCore.Injector.ServiceCallSiteResolver.<>c__DisplayClass4_0.<ResolveCallback>b__0(ServiceResolver resolver)|   在 AspectCore.Injector.ServiceCallSiteResolver.<>c__DisplayClass8_0.<ResolveProxyService>b__0(ServiceResolver resolver)|   在 AspectCore.Injector.ServiceCallSiteResolver.<>c__DisplayClass4_0.<ResolveCallback>b__0(ServiceResolver resolver)|   在 System.Collections.Concurrent.ConcurrentDictionary`2.GetOrAdd(TKey key, Func`2 valueFactory)|   在 Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetService[T](IServiceProvider provider)|   在 Xiaoyang.EmotionAnalyze.Program.RunThrift(Int32 port) 位置 Z:\\桌面\\Xiaoyang\\smartclass\\EmotionAnalyze\\Xiaoyang.EmotionAnalyze\\Program.cs:行号 61\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("我们通过使用"),s("a",{attrs:{href:"http://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grok Debugger(Pattern填写正则即可)"),s("OutboundLink")],1),t._v("来快速测试匹配结果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/02/25/j85x9BITSrP4uap.jpg",alt:"Grok Debugger"}})]),t._v(" "),s("p",[t._v("更多logstash配置详解，可以参阅")]),t._v(" "),s("ul",[s("li",[t._v("https://www.elastic.co/guide/en/logstash/6.7/event-dependent-configuration.html")]),t._v(" "),s("li",[t._v("https://www.cnblogs.com/xiaobaozi-95/p/9214307.html")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-output"}},[t._v("#")]),t._v(" 2.2.2 Output")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("output "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\telasticsearch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thosts => "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elasticsearch:9200"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\tindex => "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template"')]),t._v("\n\t\tdocument_type => "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("我们将日志输出到elasticsearch中，其中index参数为日志检索索引，后续在Kibana中要以此索引检索日志,读者可以根据项目修改index配置。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-启动-停止-elk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-启动-停止-elk"}},[t._v("#")]),t._v(" 2.3 启动/停止 ELK")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动 stack")]),t._v("\n$ docker-compose up -d\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 stack 服务信息")]),t._v("\n$ docker-compose "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止 stack 并删除相关资源")]),t._v("\n$ docker-compose down\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"_3-记录日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-记录日志"}},[t._v("#")]),t._v(" 3. 记录日志")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Logstash pipeline > input")]),t._v(" 中我们配置了日志输入为"),s("code",[t._v("tcp:5000")]),t._v("端口。这意味着，可以直接请求此地址以记录日志。此处我们以 "),s("code",[t._v("Asp.Net.Core + NLog")]),t._v(" 为例进行演示。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://nlog-project.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NLog"),s("OutboundLink")],1),t._v("是.Net平台下常用的日志框架，其支持日志记录Targets支持Network，即将日志发送到指定网络地址。")]),t._v(" "),s("p",[t._v("参照"),s("a",{attrs:{href:"https://github.com/NLog/NLog.web/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("NLog文档"),s("OutboundLink")],1),t._v("进行简单配置，可以通过控制台输出测试的日志内容和格式是否正确。")]),t._v(" "),s("p",[t._v("以上基本配置完成后，在"),s("code",[t._v("nlog.config")]),t._v("文件中"),s("code",[t._v("nlong")]),t._v("下添加如下配置。")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("targets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 打印日志到控制台 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${date} | ${level:uppercase=true} | ${logger} | ${message} | ${replace-newlines:${exception:format=toString}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 记录日志到 logstash --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Network"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logstash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keepConnection")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tcp://192.168.0.211:5000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${level:uppercase=true}#${logger}#${callsite:includeSourcePath=true} ${callsite-linenumber}#${message}#${replace-newlines:${event-properties:item=EventId}}#${replace-newlines:replacement=|:${exception:format=ToString}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("targets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 忽略系统Info级别以下日志 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Microsoft.*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxlevel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("final")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Trace级别以上日志输出到控制台 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("minlevel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Trace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("writeTo")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Info级别以上日志输出logstash --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("minlevel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("writeTo")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logstash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[t._v("Targets")])]),t._v(" "),s("p",[s("code",[t._v("address")]),t._v("为logstash服务地址和监听端口，此处"),s("code",[t._v("layout")]),t._v("设定的日志输出格式需要与"),s("code",[t._v("logstash pipeline > filter > grok")]),t._v("中日志解析规则一致。详细layout参数配置参见 https://nlog-project.org/config/?tab=layout-renderers")]),t._v(" "),s("p",[t._v("需要注意的是"),s("code",[t._v("NLog.Web.AspNetCore 4.6.2")]),t._v("中"),s("code",[t._v("Web, ASP.NET and ASP.NET Core")]),t._v("相关的layout参数如"),s("code",[t._v("${aspnet-request}")]),t._v("在"),s("code",[t._v("Asp.Net Core 2.2")]),t._v("中不起作用。我们可以暂时可以通过其他参数代替，如"),s("code",[t._v("${event-properties}")]),t._v(","),s("code",[t._v("${var}")]),t._v("等。在"),s("code",[t._v("ILogger")]),t._v("标准日志接口扩展中提供了含有"),s("code",[t._v("EventId")]),t._v("类型的日记记录方法，可以借此记录需要的附加信息，如Web请求地址等。")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将Web请求地址记录到EventId中，按照以上配置最终被logstash解析为event_property字段")]),t._v("\n_logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDisplayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Rules")]),t._v("\n详细Rules配置参阅 https://github.com/NLog/NLog/wiki/Configuration-file#rules")])])]),t._v(" "),s("p",[s("code",[t._v(".NET Core + NLog + ELK")]),t._v(" 的完整"),s("a",{attrs:{href:"https://github.com/colin-chang/ELK.Sample",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("使用案例")]),s("OutboundLink")],1),t._v("已分享到 https://github.com/colin-chang/ELK.Sample")]),t._v(" "),s("h2",{attrs:{id:"_4-查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看日志"}},[t._v("#")]),t._v(" 4. 查看日志")]),t._v(" "),s("p",[t._v("访问Kibana地址http://127.0.0.1:5601，")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/02/25/iC1EYAWF7lX4nGD.jpg",alt:"Kibana创建索引"}})]),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("Logstash pipeline > output")]),t._v(" 设置的"),s("code",[t._v("index")]),t._v("参数创建检索参数后即可检索相关日志。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/02/25/GHLhx5roQMWd1nB.jpg",alt:"Kibana查看日志"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);