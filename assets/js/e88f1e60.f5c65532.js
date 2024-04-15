"use strict";(self.webpackChunkwealth=self.webpackChunkwealth||[]).push([[126],{1564:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=i(4848),l=i(8453);const d={title:"Golang\u7684\u591a\u7ebf\u7a0b\u548cdefer",id:"golang_defer"},s=void 0,o={id:"golang/golang_defer",title:"Golang\u7684\u591a\u7ebf\u7a0b\u548cdefer",description:"\u7ebf\u7a0b",source:"@site/docs/golang/001.defer.mdx",sourceDirName:"golang",slug:"/golang/golang_defer",permalink:"/wealth/docs/golang/golang_defer",draft:!1,unlisted:!1,editUrl:"https://github.com/Jixiangup/wealth/tree/main/docs/golang/001.defer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Golang\u7684\u591a\u7ebf\u7a0b\u548cdefer",id:"golang_defer"},sidebar:"tutorialSidebar",next:{title:"\u667a\u80fd\u5408\u7ea6Solidity\u8bed\u8a00",permalink:"/wealth/docs/web3/Solidity/solidity_lang"}},t={},c=[{value:"\u7ebf\u7a0b",id:"\u7ebf\u7a0b",level:2},{value:"Goroutines",id:"goroutines",level:3},{value:"\u542f\u52a8goroutine",id:"\u542f\u52a8goroutine",level:4},{value:"\u7406\u89e3\u5e76\u53d1\u548c\u5e76\u884c",id:"\u7406\u89e3\u5e76\u53d1\u548c\u5e76\u884c",level:3},{value:"Go\u8fd0\u884c\u65f6\u8c03\u5ea6\u5668",id:"go\u8fd0\u884c\u65f6\u8c03\u5ea6\u5668",level:3},{value:"\u540c\u6b65\u673a\u5236",id:"\u540c\u6b65\u673a\u5236",level:3},{value:"WaitGroup(\u7ebf\u7a0b\u7b49\u5f85\u7ec4)",id:"waitgroup\u7ebf\u7a0b\u7b49\u5f85\u7ec4",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u5f02\u6b65\u7f16\u6392",id:"\u5f02\u6b65\u7f16\u6392",level:3},{value:"\u793a\u4f8b\uff1a\u5f02\u6b65\u4efb\u52a1\u7f16\u6392",id:"\u793a\u4f8b\u5f02\u6b65\u4efb\u52a1\u7f16\u6392",level:4},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406-1",level:5},{value:"\u5f02\u6b65\u7f16\u6392\u7684\u6a21\u5f0f",id:"\u5f02\u6b65\u7f16\u6392\u7684\u6a21\u5f0f",level:4},{value:"\u4f7f\u7528\u573a\u666f\u4e0e\u6700\u4f73\u5b9e\u8df5",id:"\u4f7f\u7528\u573a\u666f\u4e0e\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u5173\u952e\u5b57defer",id:"\u5173\u952e\u5b57defer",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u6267\u884c\u987a\u5e8f",id:"\u6267\u884c\u987a\u5e8f",level:3},{value:"\u53c2\u6570\u8bc4\u4f30",id:"\u53c2\u6570\u8bc4\u4f30",level:3},{value:"\u5e38\u89c1\u7528\u9014",id:"\u5e38\u89c1\u7528\u9014",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"\u533a\u522b",id:"\u533a\u522b",level:3},{value:"Golang",id:"golang",level:4},{value:"Java",id:"java",level:4},{value:"\u5e76\u53d1\u548c\u5e76\u884c",id:"\u5e76\u53d1\u548c\u5e76\u884c",level:2},{value:"\u5e76\u53d1(Concurrency)",id:"\u5e76\u53d1concurrency",level:3},{value:"\u5e76\u884c(Parallelism)",id:"\u5e76\u884cparallelism",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u7ebf\u7a0b",children:"\u7ebf\u7a0b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728Go\u8bed\u8a00\u4e2d\uff0c\u591a\u7ebf\u7a0b\u7684\u6982\u5ff5\u4e00\u822c\u662f\u7528",(0,r.jsx)(n.code,{children:"goroutines"}),"\u5b9e\u73b0\u7684\uff0c\u4e0d\u662f\u60f3",(0,r.jsx)(n.code,{children:"Java"}),"\u8fd9\u79cd\u8bed\u8a00\u7684\u90a3\u79cd\u4f20\u7edf\u610f\u4e49\u4e0a\u7684\u64cd\u4f5c\u7cfb\u7edf\u7ebf\u7a0b\u3002goroutine\u662fGo\u8bed\u8a00\u7684\u6838\u5fc3\u7279\u6027\u4e4b\u4e00\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u975e\u5e38\u8f7b\u91cf\u7ea7\u7684\u7ebf\u7a0b\u5b9e\u73b0\uff0c\u7531Go\u8fd0\u884c\u65f6\u7ba1\u7406\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"goroutines",children:"Goroutines"}),"\n",(0,r.jsx)(n.p,{children:"goroutine\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u79cd\u865a\u62df\u7ebf\u7a0b\uff0c\u5b83\u5728Go\u8fd0\u884c\u7684\u65f6\u5019\u5185\u90e8\u88ab\u591a\u4e2aOS\u7ebf\u7a0b\u4e4b\u95f4\u9ad8\u6548\u7684\u8c03\u5ea6\u3002goroutine\u7684\u8c03\u5ea6\u4e0d\u662f\u7531\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u7ba1\u7406\u7684\uff0c\u800c\u662f\u7531Go\u8fd0\u884c\u65f6\u81ea\u5df1\u5904\u7406\uff0c\u8fd9\u5c31\u8ba9goroutine\u5177\u6709\u975e\u5e38\u5c0f\u7684\u5185\u5b58\u5f00\u9500(\u4e00\u822c\u51e0KB)\uff0c\u6240\u4ee5\u53ef\u4ee5\u5141\u8bb8\u540c\u65f6\u8fd0\u884c\u6210\u5343\u4e0a\u4e07\u4e2agoroutine"}),"\n",(0,r.jsx)(n.h4,{id:"\u542f\u52a8goroutine",children:"\u542f\u52a8goroutine"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5728Go\u4e2d\u542f\u52a8\u4e00\u4e2agoroutine\uff0c\u53ea\u8981\u7528",(0,r.jsx)(n.code,{children:"go"}),"\u5173\u952e\u5b57\u7136\u540e\u5c31\u662f\u51fd\u6570\u8c03\u7528\u5c31\u53ef\u4ee5\u4e86"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func TestGoroutine(t *testing.T) {\n\tgo say("world") // \u5f00\u542f\u4e00\u4e2a\u65b0\u7684goroutine\n\tsay("hello")    // \u5728\u5f53\u524dgoroutine\u4e2d\u6267\u884c\n}\n\nfunc say(s string) {\n\tfor i := 0; i < 5; i++ {\n\t\ttime.Sleep(100 * time.Millisecond)\n\t\tprintln("s: ", s, "\\ti: ", i)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'say("world")'}),"\u5728\u65b0\u7684goroutine\u4e2d\u5f02\u6b65\u6267\u884c\uff0c\u800c",(0,r.jsx)(n.code,{children:'say("hello")'}),"\u5728\u4e3bgoroutine(\u4e5f\u5c31\u662f\u4e3b\u7ebf\u7a0b)\u4e2d\u6267\u884c\u3002\u56e0\u6b64\uff0c\u8f93\u51fa\u662f\u4f1a\u4e24\u8005\u4ea4\u66ff\u6267\u884c\u7684\u7ed3\u679c\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u7406\u89e3\u5e76\u53d1\u548c\u5e76\u884c",children:["\u7406\u89e3",(0,r.jsx)(n.a,{href:"#%E5%B9%B6%E5%8F%91%E5%92%8C%E5%B9%B6%E8%A1%8C",children:"\u5e76\u53d1\u548c\u5e76\u884c"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5e76\u53d1(Concurrency)\uff1a\u6307\u7684\u662f\u591a\u4e2a\u4efb\u52a1\u4ea4\u66ff\u6267\u884c\uff0c\u5355\u6838CPU\u4e0a\u7684\u591a\u4efb\u52a1\u5b9e\u9645\u4e0a\u5c31\u662f\u5e76\u53d1\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5e76\u884c(Parallelism)\uff1a\u6307\u7684\u662f\u591a\u4e2a\u4efb\u52a1\u5728\u591a\u6838CPU\u4e0a\u540c\u65f6\u6267\u884c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Go\u8bed\u8a00\u7684goroutine\u5728\u5355\u6838\u4e0a\u8868\u73b0\u4e3a\u5e76\u53d1\uff0c\u5728\u591a\u6838\u4e0a\u5219\u53ef\u80fd\u8868\u73b0\u4e3a\u771f\u6b63\u7684\u5e76\u884c\u3002Go\u8fd0\u884c\u65f6\u5305\u542b\u4e00\u4e2a\u8c03\u5ea6\u5668\uff0c\u8be5\u8c03\u5ea6\u5668\u5c06goroutines\u5206\u914d\u7ed9\u53ef\u7528\u7684\u903b\u8f91CPU\u6838\u5fc3\u4e0a\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"go\u8fd0\u884c\u65f6\u8c03\u5ea6\u5668",children:"Go\u8fd0\u884c\u65f6\u8c03\u5ea6\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["Go\u8fd0\u884c\u65f6\u8c03\u5ea6\u5668\u7684\u8bbe\u8ba1\u91c7\u7528\u4e86",(0,r.jsx)(n.code,{children:"M"}),"(\u673a\u5668)\uff0c",(0,r.jsx)(n.code,{children:"P"}),"(\u5904\u7406\u5668)\uff0c",(0,r.jsx)(n.code,{children:"G"}),"(goroutine)\u7684\u6a21\u578b"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"G(goroutine)\uff1a\u4e00\u4e2a\u5f85\u6267\u884c\u7684\u4efb\u52a1"}),"\n",(0,r.jsx)(n.li,{children:"P(Processor)\uff1a\u4ee3\u8868\u4e86\u7cfb\u7edf\u7684\u903b\u8f91\u5904\u7406\u5668\u6570\u91cf\uff0c\u5e76\u4e14\u7ef4\u62a4\u4e86\u4e00\u7ec4\u672c\u5730goroutine\u961f\u5217\u3002\u6bcf\u4e2aP\u90fd\u9700\u8981\u4e00\u4e2aM\u6765\u6267\u884c\u5176\u961f\u5217\u4e2d\u7684G\u3002"}),"\n",(0,r.jsx)(n.li,{children:"M(Machine)\uff1a\u4e00\u4e2a\u6267\u884c\u7cfb\u7edf\u7ea7\u7ebf\u7a0b\uff0c\u4ed6\u6267\u884c\u5177\u4f53\u7684\u4efb\u52a1\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Go\u8fd0\u884c\u65f6\u81ea\u52a8\u7ba1\u7406\u8fd9\u4e9b\u8d44\u6e90\uff0c\u5c06G\u5206\u914d\u5230P\u7684\u672c\u5730\u961f\u5217\uff0cM\u4eceP\u90a3\u91cc\u83b7\u53d6G\u6765\u6267\u884c\u3002\u8fd9\u4e00\u5207\u90fd\u662f\u81ea\u52a8\u4e14\u5bf9\u7a0b\u5e8f\u5458\u900f\u660e\u7684\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u540c\u6b65\u673a\u5236",children:"\u540c\u6b65\u673a\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u867d\u7136goroutines\u6781\u5927\u5730\u7b80\u5316\u4e86\u5e76\u53d1\u7f16\u7a0b\uff0c\u4f46\u6b63\u786e\u5730\u540c\u6b65\u548c\u901a\u4fe1\u4ecd\u7136\u662f\u5fc5\u9700\u7684\u3002Go\u63d0\u7528channels\uff08\u901a\u9053\uff09\uff0c\u4e3agoroutines\u4e4b\u95f4\u7684\u540c\u6b65\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f18\u96c5\u7684\u65b9\u5f0f\u3002\u901a\u8fc7channels\uff0c\u53ef\u4ee5\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u9ed8\u8ba4\u662f\u963b\u585e\u7684"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func TestGoroutine(t *testing.T) {\n\tgoroutineNickname := make(chan string)\n\tgo func() {\n\t\tgoroutineNickname <- "zhuzhuxia"\n\t}()\n\tnickname := <-goroutineNickname\n\tprintln(nickname) // \u8f93\u51fazhuzhuxia\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"waitgroup\u7ebf\u7a0b\u7b49\u5f85\u7ec4",children:"WaitGroup(\u7ebf\u7a0b\u7b49\u5f85\u7ec4)"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u6709\u70b9\u50cf\u5f02\u6b65\u7f16\u6392\u5427\uff0c\u4f46\u662f\u4e5f\u4e0d\u662f\u5b8c\u5168\u4e00\u6837\u3002\u8fd9\u662f\u8ba9\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\u91cc\u9762\u7684\u6240\u6709\u7ebf\u7a0b\u4e00\u8d77\u6267\u884c\uff0c\u4f46\u662f\u8c03\u7528\u4ed6\u7684Wait()\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u6240\u6709goroutine\u6267\u884c\u5b8c\u6bd5\uff0c\u5373WaitGroup\u8ba1\u6570\u5668\u5f52\u96f6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func TestGoroutine(t *testing.T) {\n\tvar waitGroup sync.WaitGroup\n\tfor i := 0; i < 10; i++ {\n\t\t// \u7b49\u5f85\u7ec4+1\n\t\twaitGroup.Add(1)\n\t\tgo worker(i, &waitGroup)\n\t}\n\t// Wait()\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u6240\u6709goroutine\u6267\u884c\u5b8c\u6bd5\uff0c\u5373WaitGroup\u8ba1\u6570\u5668\u5f52\u96f6\n\twaitGroup.Wait()\n\tprintln("All worker done")\n}\n\nfunc worker(id int, waitGroup *sync.WaitGroup) {\n\tdefer waitGroup.Done() // goroutine\u7ed3\u675f\u5c31\u5c06waitGroup\u8ba1\u6570-1, \u5728\u51fd\u6570\u8fd4\u56de\u65f6\u8c03\u7528Done()\u6765\u901a\u77e5WaitGroup\u4efb\u52a1\u5df2\u5b8c\u6210\n\tfmt.Printf("Worker %d starting.\\n", id)\n\ttime.Sleep(time.Second)\n\tfmt.Printf("Worker %d done.\\n", id)\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u521d\u59cb\u5316WaitGroup: ",(0,r.jsx)(n.code,{children:"var waitGroup sync.WaitGroup"}),"\u58f0\u660e\u4e86\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"WaitGroup"}),"\u53d8\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8bbe\u7f6e\u8ba1\u6570\u5668\uff1a\u4f7f\u7528",(0,r.jsx)(n.code,{children:"waitGroup.add(1)"}),"(\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u5faa\u73af\u5916\u8c03\u7528",(0,r.jsx)(n.code,{children:"waitGroup.add(10)"}),")\u8bbe\u7f6e\u8ba1\u6570\u5668\u7684\u503c\uff0c\u8fd9\u91cc\u7684\u503c",(0,r.jsx)(n.code,{children:"1"}),"\u8868\u793a\u6709\u4e94\u4e2agoroutine\u8981\u7b49\u5f85\u3002\u6bcf\u6b21\u8c03\u7528",(0,r.jsx)(n.code,{children:"Add"}),"\u7684\u65f6\u5019\u90fd\u4f1a\u589e\u52a0\u8ba1\u6570\u5668\u7684\u503c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u542f\u52a8goroutine\uff1a\u5728\u5faa\u73af\u4e2d\u542f\u52a810\u4e2a",(0,r.jsx)(n.code,{children:"goroutine"}),"\uff0c\u6bcf\u4e2agoroutine\u7ed3\u675f\u524d\u4f1a\u8c03\u7528",(0,r.jsx)(n.code,{children:"waitGroup.Done()"}),"\u3002\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5c06",(0,r.jsx)(n.code,{children:"WaitGroup"}),"\u7684\u8ba1\u6570\u5668",(0,r.jsx)(n.code,{children:"\u51cf1(-1)"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7b49\u5f85\u5b8c\u6210\uff1a",(0,r.jsx)(n.code,{children:"waitGroup.Wait()"}),"\u4f1a\u963b\u585e\uff0c\u76f4\u5230",(0,r.jsx)(n.code,{children:"WaitGroup"}),"\u7684\u8ba1\u6570\u5668\u51cf\u52300\uff0c\u5373\u6240\u6709\u7684goroutine\u6267\u884c\u5b8c\u6bd5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u786e\u4fdd\u6bcf\u4e2a\u542f\u52a8\u7684goroutine\u6700\u7ec8\u90fd\u4f1a\u8c03\u7528",(0,r.jsx)(n.code,{children:"waitGroup.Done()"}),"\uff0c\u5426\u5219",(0,r.jsx)(n.code,{children:"waitGroup.Wait()"}),"\u5c06\u4f1a\u6c38\u8fdc\u963b\u585e\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"waitGroup.Add()"}),"\u5e94\u8be5\u5728\u542f\u52a8goroutine\u4e4b\u524d\u8c03\u7528\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d",(0,r.jsx)(n.code,{children:"race condition(\u7ade\u6001\u6761\u4ef6)"}),"\uff0c\u5373\u5728\u6240\u6709goroutine\u542f\u52a8\u4e4b\u524d\uff0c\u4e3b\u7a0b\u5e8f\u5c31\u5df2\u7ecf\u5f00\u59cb\u7b49\u5f85\u7684\u60c5\u51b5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"defer waitGroup.Done()"}),"\u53ef\u4ee5\u786e\u4fdd\u5373\u4f7fgoroutine\u4e2d\u53d1\u751f\u4e86panic\uff0c",(0,r.jsx)(n.code,{children:"waitGroup.Done()"}),"\u4e5f\u4f1a\u88ab\u8c03\u7528\uff0c\u907f\u514d\u6b7b\u9501\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5c31\u53ef\u4ee5\u63a7\u5236\u591a\u4e2agoroutine\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u5728\u6240\u6709\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u7ee7\u7eed\u4e3b\u7a0b\u5e8f\u7684\u6267\u884c\u3002\u8fd9\u5bf9\u4e8e\u5e76\u53d1\u7f16\u7a0b\u6765\u8bf4\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5f02\u6b65\u7f16\u6392",children:"\u5f02\u6b65\u7f16\u6392"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728Go\u4e2d\u5b9e\u73b0\u7c7b\u4f3c\u4e8e\u5f02\u6b65\u7f16\u6392\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"channels"}),"\u548c",(0,r.jsx)(n.code,{children:"select"}),"\u8bed\u53e5\u6765\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u548c\u901a\u4fe1\uff0c\u4ece\u800c\u5728goroutines\u4e4b\u95f4\u534f\u8c03\u5f02\u6b65\u4efb\u52a1\u7684\u6267\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u9700\u8981\u8fdb\u884c\u4efb\u52a1\u7684\u7ec4\u5408\u3001\u4e32\u8054\u3001\u5e76\u8054\u7b49\u590d\u6742\u7684\u64cd\u4f5c\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528channels\u6765\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u7684\u7f16\u6392\uff0c\u5305\u62ec\u5e76\u53d1\u6267\u884c\u3001\u4efb\u52a1\u4ee5\u6765\u548c\u7ed3\u679c\u805a\u5408\u7b49\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u793a\u4f8b\u5f02\u6b65\u4efb\u52a1\u7f16\u6392",children:"\u793a\u4f8b\uff1a\u5f02\u6b65\u4efb\u52a1\u7f16\u6392"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u4e09\u4e2a\u4efb\u52a1\uff0c\u7b2c\u4e00\u4e2a\u4efb\u52a1\u548c\u7b2c\u4e8c\u4e2a\u4efb\u52a1\u53ef\u4ee5\u5e76\u884c\u6267\u884c\uff0c\u4f46\u662f\u7b2c\u4e09\u4e2a\u4efb\u52a1\u9700\u8981\u7b49\u5f85\u524d\u4e24\u4e2a\u4efb\u52a1\u90fd\u5b8c\u6210\u540e\u624d\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func TestGoroutine(t *testing.T) {\n\tt1str := make(chan string)\n\tt2str := make(chan string)\n\tt3str := make(chan string)\n\n\tgo task1(t1str)\n\tgo task2(t2str)\n\n\tvar waitGroup sync.WaitGroup\n\twaitGroup.Add(1)\n\tgo func() {\n\t\tdefer waitGroup.Done()\n\t\tr1 := <-t1str           // \u963b\u585e\u7b49\u5f85task1\u7684\u7ed3\u679c\n\t\tr2 := <-t2str           // \u963b\u585e\u7b49\u5f85task2\u7684\u7ed3\u679c\n\t\tgo task3(t3str, r1, r2) // task3\u4f9d\u8d56task1\u548ctask2\u7684\u7ed3\u679c\n\t}()\n\n\twaitGroup.Wait()\n\n\tresult := <-t3str // \u963b\u585e\u7b49\u5f85task3\u7684\u7ed3\u679c\n\tprintln(result)\n}\n\nfunc task1(str chan<- string) {\n\ttime.Sleep(2 * time.Second) // \u6a21\u62df\u64cd\u4f5c\u8017\u65f6\n\tstr <- "Result of task1"\n}\n\nfunc task2(str chan<- string) {\n\ttime.Sleep(2 * time.Second) // \u6a21\u62df\u64cd\u4f5c\u8017\u65f6\n\tstr <- "Result of task2"\n}\n\nfunc task3(str chan<- string, r1, r2 string) {\n\tprintln("Received: ", r1, "\\tand\\t", r2)\n\ttime.Sleep(1 * time.Second) // \u6a21\u62df\u64cd\u4f5c\u8017\u65f6\n\tstr <- "Result of task3 based on previous results"\n}\n// \u8f93\u51fa\uff1a\n//  Received:  Result of task1 \tand\t Result of task2\n//  Result of task3 based on previous results\n'})}),"\n",(0,r.jsx)(n.h5,{id:"\u5de5\u4f5c\u539f\u7406-1",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5e76\u53d1\u6267\u884c\u4efb\u52a11\u548c\u4efb\u52a12\uff1a\u4f7f\u7528",(0,r.jsx)(n.code,{children:"go task1(t1str)"}),"\u548c",(0,r.jsx)(n.code,{children:"go task2(t2str)"}),"\u542f\u52a8\u4efb\u52a11\u548c\u4efb\u52a12\uff0c\u8fd9\u4e24\u4e2a\u4efb\u52a1\u4f1a\u5e76\u884c\u6267\u884c\uff0c\u5e76\u5c06\u7ed3\u679c\u53d1\u9001\u5230\u5404\u81ea\u7684channel\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7b49\u5f85\u7ed3\u679c\u5e76\u6267\u884c\u4efb\u52a13:\u4e00\u4e2a\u533f\u540d\u7684goroutine\u7b49\u5f85\u6765\u81ea",(0,r.jsx)(n.code,{children:"task1"}),"\u548c",(0,r.jsx)(n.code,{children:"task2"}),"\u7684\u7ed3\u679c\u3002\u4e00\u65e6\u4e24\u4e2a\u7ed3\u679c\u90fd\u51c6\u5907\u597d\uff0c\u5b83\u5c06\u8fd9\u4e9b\u7ed3\u679c\u4f20\u9012\u7ed9",(0,r.jsx)(n.code,{children:"task3"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u540c\u6b65\u7b49\u5f85\uff1a\u4f7f\u7528",(0,r.jsx)(n.code,{children:"syns.WaitGroup"}),"\u7b49\u5f85\u533f\u540dgoroutine\u5b8c\u6210\u4efb\u52a1\u7684\u8c03\u5ea6\uff0c\u8fd9\u786e\u4fdd\u5728\u7ee7\u7eed\u6267\u884c\u524d",(0,r.jsx)(n.code,{children:"task3"}),"\u5df2\u7ecf\u88ab\u5b89\u6392\u597d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7ed3\u679c\u805a\u5408\uff1a\u7b49\u5f85\u6700\u7ec8\u4efb\u52a1",(0,r.jsx)(n.code,{children:"task3"}),"\u7684\u7ed3\u679c\uff0c\u7136\u540e\u6253\u5370\u51fa\u6765\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u5f02\u6b65\u7f16\u6392\u7684\u6a21\u5f0f",children:"\u5f02\u6b65\u7f16\u6392\u7684\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5e76\u53d1\u6267\u884c\uff1a\u540c\u65f6\u5f00\u59cb\u591a\u4e2a\u72ec\u7acb\u7684\u4efb\u52a1\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4efb\u52a1\u94fe\uff1a\u4e00\u4e2a\u4efb\u52a1\u7684\u8f93\u51fa\u662f\u53e6\u4e00\u4e2a\u4efb\u52a1\u7684\u8f93\u5165\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9519\u8bef\u5904\u7406\uff1a\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a\u4efb\u52a1\u91cd\u52a0\u5165\u9519\u8bef\u68c0\u67e5\uff0c\u5e76\u6839\u636e\u9700\u8981\u8c03\u6574\u6d41\u7a0b\uff08\u5982\u901a\u8fc7\u989d\u5916\u7684channel\u4f20\u9012\u9519\u8bef\u72b6\u6001\uff09\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u8d85\u65f6\u63a7\u5236\uff1a\u901a\u8fc7",(0,r.jsx)(n.code,{children:"select"}),"\u548c",(0,r.jsx)(n.code,{children:"time.After"}),"\u6765\u5b9e\u73b0\u8d85\u65f6\u63a7\u5236\uff0c\u9632\u6b62goroutine\u6c38\u4e45\u963b\u585e\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528Go\u7684channels\u548cgoroutines\uff0c\u53ef\u4ee5\u6784\u5efa\u590d\u6742\u7684\u5f02\u6b65\u6267\u884c\u6d41\u7a0b\uff0c\u8fd9\u4e9b\u6d41\u7a0b\u5177\u6709\u826f\u597d\u7684\u9519\u8bef\u5904\u7406\u548c\u8d85\u65f6\u63a7\u5236\u80fd\u529b\uff0c\u975e\u5e38\u9002\u5408\u6784\u5efa\u9ad8\u5e76\u53d1\u7684\u670d\u52a1\u548c\u5e94\u7528\u3002\u8fd9\u79cd\u6a21\u5f0f\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684",(0,r.jsx)(n.code,{children:"Promise"}),"\u6216",(0,r.jsx)(n.code,{children:"Reactive"}),"\u7f16\u7a0b\u6a21\u578b\u6bd4\u5982",(0,r.jsx)(n.code,{children:"JavaScript"}),"\uff0c\u4f46\u662f\u66f4\u52a0\u76f4\u89c2\u548c\u7075\u6d3b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528\u573a\u666f\u4e0e\u6700\u4f73\u5b9e\u8df5",children:"\u4f7f\u7528\u573a\u666f\u4e0e\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0cgoroutine\u9002\u5408\u7528\u4e8e\u5904\u7406\u5e76\u884c\u4efb\u52a1\u3001\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u540e\u53f0\u4efb\u52a1\u4ee5\u53ca\u9700\u8981\u9ad8\u5e76\u53d1\u7684\u60c5\u51b5\uff0c\u5982\u7f51\u7edc\u670d\u52a1\u5668\u3002\u5728\u8bbe\u8ba1\u5e76\u53d1\u7a0b\u5e8f\u65f6\uff0c\u5e94\u8be5\u6ce8\u610f\u907f\u514d\u7ade\u6001\u6761\u4ef6\u3001\u6b7b\u9501\u548c\u8d44\u6e90\u6cc4\u6f0f\u7b49\u95ee\u9898\uff0c\u786e\u4fdd\u4f7f\u7528\u6b63\u786e\u7684\u540c\u6b65\u6280\u672f\u6216\u6d88\u606f\u4f20\u9012\u65b9\u6cd5\u6765\u7ba1\u7406\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u611f\u89c9Go\u5728\u5f00\u53d1\u5e76\u53d1\u5e94\u7528\u7684\u65f6\u5019\u53d8\u5f97\u597d\u65b9\u4fbf\uff0c\u7529\u5f00Java\u4e0d\u77e5\u9053\u591a\u5c11\u6761\u8857\u3002\u3002\u3002\u3002\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5173\u952e\u5b57defer",children:"\u5173\u952e\u5b57defer"}),"\n",(0,r.jsx)(n.p,{children:"\u5148\u8bb0\u4e00\u4e0b\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u5728 Go \u8bed\u8a00\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"defer"}),"\u5173\u952e\u5b57\u4e00\u822c\u7528\u4e8e\u786e\u4fdd\u51fd\u6570\u6267\u884c\u7ed3\u675f\u65f6\u53ef\u4ee5\u8c03\u7528\u67d0\u4e9b\u4ee3\u7801\u7247\u6bb5\uff0c\u65e0\u8bba\u51fd\u6570\u662f\u901a\u8fc7\u8fd4\u56de\u6b63\u5e38\u7ed3\u675f\uff0c\u8fd8\u662f\u7531\u4e8e\u9519\u8bef\u800c\u63d0\u524d\u9000\u51fa\u3002",(0,r.jsx)(n.code,{children:"defer"}),"\u7684\u7528\u9014\u6709\u70b9\u7c7b\u4f3c\u4e8e",(0,r.jsx)(n.code,{children:"Java"}),"\u4e2d\u7684",(0,r.jsx)(n.code,{children:"try-catch-finally"}),"\u5757\u3002\u7528\u6765\u505a\u8d44\u6e90\u6e05\u7406\uff0c\u6d41\u5173\u95ed\uff0c\u89e3\u9501\u4ee5\u53ca\u4e00\u4e9b\u5fc5\u987b\u8981\u6e05\u7406\u6216\u8005\u6267\u884c\u7684\u4ee3\u7801\u6216\u8005\u8bf4\u903b\u8f91\u7528\u3002"]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u4f46\u662f\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\u5982\u679c\u5728",(0,r.jsx)(n.code,{children:"\u5b95\u673a"}),"\u3001\u8c03\u7528",(0,r.jsx)(n.code,{children:"os.exit(-1)"}),"\u7b49\u7a0b\u5e8f\u5f3a\u5236\u9000\u51fa\u7684\u72b6\u6001\u65f6",(0,r.jsx)(n.code,{children:"defer"}),"\u51fd\u6570\u5c31\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u7ebf\u7a0b\u5df2\u7ecf\u88ab\u6740\u6389\u4e86\u6ca1\u529e\u6cd5\u6267\u884c\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func readFile(filename string) {\n    f, err := os.Open(filename)\n    if err != nil {\n        log.Fatalf("error opening the file: %v", err)\n    }\n    defer f.Close()  // \u786e\u4fdd\u6587\u4ef6\u5728\u51fd\u6570\u7ed3\u675f\u65f6\u5173\u95ed\n\n    // \u6267\u884c\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"defer f.Close()\u786e\u4fdd\u5728readFile\u51fd\u6570\u7ed3\u675f\u65f6\uff08\u65e0\u8bba\u662f\u56e0\u4e3a\u51fd\u6570\u6b63\u5e38\u7ed3\u675f\u8fd8\u662f\u56e0\u4e3a\u53d1\u751f\u4e86\u9519\u8bef\u800c\u63d0\u524d\u8fd4\u56de\uff09\uff0c\u6587\u4ef6\u90fd\u4f1a\u88ab\u5173\u95ed\u3002\u8fd9\u662f\u5904\u7406\u8d44\u6e90\u6e05\u7406\u975e\u5e38\u65b9\u4fbf\u7684\u65b9\u5f0f\u3002"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6267\u884c\u987a\u5e8f",children:"\u6267\u884c\u987a\u5e8f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u6709\u591a\u4e2a",(0,r.jsx)(n.code,{children:"defer"}),"\u8bed\u53e5\uff0c\u5b83\u4eec\u6267\u884c\u7684\u987a\u5e8f\u4e0e\u58f0\u660e\u987a\u5e8f\u76f8\u53cd\uff0c\u5373",(0,r.jsx)(n.code,{children:"\u540e\u8fdb\u5148\u51fa(LIFO)"}),"\u539f\u5219\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func multipleDefers() {\n    defer fmt.Println("first")\n    defer fmt.Println("second")\n    defer fmt.Println("third")\n\n    fmt.Println("function body")\n}\n\n// \u8f93\u51fa\uff1a\n// function body\n// third\n// second\n// first\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u53c2\u6570\u8bc4\u4f30",children:"\u53c2\u6570\u8bc4\u4f30"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"defer"}),"\u8bed\u53e5\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u7684\u53c2\u6570\u4f1a\u5728",(0,r.jsx)(n.code,{children:"defer"}),"\u8bed\u53e5\u88ab\u6267\u884c\u65f6\u7acb\u5373\u6c42\u503c\uff0c\u800c\u4e0d\u662f\u5728\u5305\u542b\u51fd\u6570\u9000\u51fa\u65f6\u3002\u4e5f\u5c31\u662f\u8bf4\u5982\u679c",(0,r.jsx)(n.code,{children:"defer"}),"\u4e86\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u6539\u8c03\u7528\u7684\u51fd\u6570\u4e2d\u4f20\u5165\u7684\u53c2\u6570\u4f1a\u5728",(0,r.jsx)(n.code,{children:"defer"}),"\u8bed\u53e5\u6240\u5728\u7684\u4f4d\u7f6e\u88ab\u6c42\u503c\uff0c\u4f46\u662f\u8fd9\u4e2a\u51fd\u6570\u672c\u8eab\u662f\u5728\u51fd\u6570\u7ed3\u675f\u7684\u65f6\u5019\u8c03\u7528\u7684\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func deferArguments() {\n    i := 10\n    defer fmt.Println("deferred:", i)\n    i = 20\n    fmt.Println("in function:", i)\n}\n\n// \u8f93\u51fa\uff1a\n// in function: 20\n// deferred: 10\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u867d\u7136i\u5728defer\u8bed\u53e5\u6267\u884c\u540e\u88ab\u4fee\u6539\uff0c\u4f46\u662fdefer\u8bed\u53e5\u4f7f\u7528\u7684\u662fi\u7684\u539f\u59cb\u503c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5e38\u89c1\u7528\u9014",children:"\u5e38\u89c1\u7528\u9014"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8d44\u6e90\u7ba1\u7406\uff1a\u786e\u4fdd\u6587\u4ef6\u3001\u6570\u636e\u5e93\u8fde\u63a5\u3001\u9501\u4ee5\u53ca\u6d41\u7b49\u8d44\u6e90\u88ab\u9002\u65f6\u91ca\u653e\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9519\u8bef\u5904\u7406\uff1a\u5728\u6267\u884c\u6e05\u7406\u64cd\u4f5c\u4e4b\u524d\uff0c\u5904\u7406\u53ef\u80fd\u53d1\u751f\u7684\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u590d\u6742\u51fd\u6570\u4e2d\u7684\u6e05\u7406\u64cd\u4f5c\uff1a\u5728\u5904\u7406\u591a\u4e2a\u9519\u8bef\u8fd4\u56de\u70b9\u65f6\uff0c\u7b80\u5316\u6e05\u7406\u903b\u8f91\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879-1",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u907f\u514d\u5728\u5faa\u73af\u5185\u4f7f\u7528",(0,r.jsx)(n.code,{children:"defer"}),"\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u5bfc\u81f4\u8d44\u6e90\u5728\u5faa\u73af\u7ed3\u675f\u524d\u4e0d\u88ab\u91ca\u653e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8d44\u6e90\u8017\u5c3d\u6216\u6027\u80fd\u7684\u95ee\u9898\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7406\u89e3",(0,r.jsx)(n.code,{children:"defer"}),"\u7684\u6267\u884c\u987a\u5e8f\u548c\u53c2\u6570\u8bc4\u4f30\u89c4\u5219\uff0c\u907f\u514d\u5e38\u89c1\u7684\u9519\u8bef\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u5728",(0,r.jsx)(n.code,{children:"\u5b95\u673a"}),"\u3001\u8c03\u7528",(0,r.jsx)(n.code,{children:"os.exit(-1)"}),"\u7b49\u7a0b\u5e8f\u5f3a\u5236\u9000\u51fa\u7684\u72b6\u6001\u65f6",(0,r.jsx)(n.code,{children:"defer"}),"\u51fd\u6570\u5c31\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u7ebf\u7a0b\u5df2\u7ecf\u88ab\u6740\u6389\u4e86\u6ca1\u529e\u6cd5\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"defer"}),"\u662fGo\u8bed\u8a00\u63d0\u4f9b\u7684\u4e00\u79cd\u5f3a\u5927\u7684\u8bed\u8a00\u7ed3\u6784\u5427\u6211\u89c9\u5f97\uff0c\u7528\u6765\u7b80\u5316\u548c\u786e\u4fdd\u51fd\u6570\u5728\u5b8c\u6210\u540e\u80fd\u6e05\u7406\u5176\u4ed6\u4f7f\u7528\u7684\u8d44\u6e90\u3002\u6b63\u786e\u4f7f\u7528",(0,r.jsx)(n.code,{children:"defer"}),"\u611f\u89c9\u4ee3\u7801\u6bd4Java\u7684",(0,r.jsx)(n.code,{children:"try-catch-finally"}),"\u5757\u7b80\u6d01\u5f88\u591a\u3002\u5f53\u7136\u8fd9\u6837\u505a\u6d41\u5173\u95ed\u7b49\u64cd\u4f5c\u4e5f\u4f1a\u8ba9\u7a0b\u5e8f\u66f4\u5b89\u5168\u4e86\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u533a\u522b",children:"\u533a\u522b"}),"\n",(0,r.jsx)(n.h4,{id:"golang",children:"Golang"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func readFile(filename string) {\n    f, err := os.Open(filename)\n    if err != nil {\n        log.Fatalf("error opening the file: %v", err)\n    }\n    defer f.Close()  // \u786e\u4fdd\u6587\u4ef6\u5728\u51fd\u6570\u7ed3\u675f\u65f6\u5173\u95ed\n\n    // \u6267\u884c\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"java",children:"Java"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728Java\u4e2d\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"defer"}),"\u5173\u952e\u5b57\u7684\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"try-catch-finally"}),"\u7136\u540e\u5728",(0,r.jsx)(n.code,{children:"finally"}),"\u5757\u91cc\u9762\u6267\u884c\u5fc5\u987b\u8981\u6267\u884c\u7684\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Test\nvoid finallyTest() {\n    try {\n        System.out.println("try");\n    } finally {\n        System.out.println("finally");\n    }\n}\n// \u8f93\u51fa\n// try\n// finally\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u6211\u611f\u89c9\u8fd8\u662f\u6709\u533a\u522b\u5427",(0,r.jsx)(n.code,{children:"finally"}),"\u548c",(0,r.jsx)(n.code,{children:"defer"}),"\u4e0d\u4e00\u6837\u7684\u662f\u4ed6\u5fc5\u987b\u8981\u6709",(0,r.jsx)(n.code,{children:"try\u5757"}),"\u7ed3\u6784\uff0c\u4e0d\u50cf",(0,r.jsx)(n.code,{children:"defer fun1()"}),"\u53ef\u4ee5\u76f4\u63a5\u8fd9\u6837\u8c03\u7528\u3002\u800c\u4e14",(0,r.jsx)(n.code,{children:"defer"}),"\u662f\u9488\u5bf9\u6574\u4e2a\u65b9\u6cd5\u800c\u8a00\uff0c\u4f46\u662f",(0,r.jsx)(n.code,{children:"finally"}),"\u9488\u5bf9\u6574\u4e2a",(0,r.jsx)(n.code,{children:"try-catch(\u5982\u679c\u6709\u7684\u8bdd)-finally"})]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e76\u53d1\u548c\u5e76\u884c",children:"\u5e76\u53d1\u548c\u5e76\u884c"}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u53d1concurrency",children:"\u5e76\u53d1(Concurrency)"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5e76\u53d1\u662f\u6307\u7cfb\u7edf\u80fd\u591f\u5904\u7406\u591a\u4e2a\u4efb\u52a1\u7684\u80fd\u529b\uff0c\u4f46\u4e0d\u4e00\u5b9a\u540c\u65f6\u3002\u5728\u5355\u6838\u5904\u7406\u5668\u4e0a\uff0c\u4e00\u4e2a\u6838\u5fc3\u5728\u540c\u4e00\u65f6\u95f4\u5185\u53ea\u80fd\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\uff0c\u4f46\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u65f6\u95f4\u7247\u8f6e\u8f6c\u7b49\u6280\u672f\uff0c\u8ba9\u591a\u4e2a\u4efb\u52a1\u4ea4\u66ff\u6267\u884c\uff0c\u4ece\u5b8f\u89c2\u4e0a\u770b\uff0c\u597d\u50cf\u662f\u540c\u65f6\u6267\u884c\u7684\u3002\u8fd9\u5c31\u50cf\u662f\u4e00\u4e2a\u4eba\u5728\u505a\u591a\u9879\u5de5\u4f5c\uff0c\u6bd4\u5982\u540c\u65f6\u5904\u7406\u90ae\u4ef6\u3001\u63a5\u542c\u7535\u8bdd\u548c\u7f16\u5199\u62a5\u544a\uff0c\u4ed6\u4f1a\u5728\u8fd9\u4e9b\u4efb\u52a1\u4e4b\u95f4\u5feb\u901f\u5207\u6362\uff0c\u6bcf\u4e2a\u4efb\u52a1\u90fd\u6709\u70b9\u8fdb\u5c55\uff0c\u4f46\u5728\u4efb\u4f55\u7ed9\u5b9a\u7684\u77ac\u95f4\uff0c\u4ed6\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u7684\u7406\u89e3\uff1a\u4e00\u4f4d\u53a8\u5e08\u5728\u53a8\u623f\u91cc\u505a\u996d\u3002\u4ed6\u9700\u8981\u540c\u65f6\u716e\u6c64\u3001\u7092\u83dc\u548c\u70e4\u9762\u5305\u3002\u5c3d\u7ba1\u4ed6\u4e00\u6b21\u53ea\u80fd\u4e13\u6ce8\u4e8e\u4e00\u9879\u4efb\u52a1\uff0c\u4f46\u4ed6\u53ef\u4ee5\u5728\u8fd9\u4e9b\u4efb\u52a1\u4e4b\u95f4\u5feb\u901f\u5207\u6362\uff1a\u68c0\u67e5\u6c64\uff0c\u7136\u540e\u53bb\u7ffb\u7092\u83dc\uff0c\u518d\u53bb\u770b\u770b\u70e4\u7bb1\u3002\u4ece\u5916\u9762\u770b\uff0c\u597d\u50cf\u8fd9\u4e9b\u4e8b\u60c5\u90fd\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u4ed6\u540c\u4e00\u65f6\u523b\u4e00\u6b21\u53ea\u505a\u4e86\u4e00\u4ef6\u4e8b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u884cparallelism",children:"\u5e76\u884c(Parallelism)"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5e76\u884c\u662f\u6307\u591a\u4e2a\u4efb\u52a1\u771f\u6b63\u540c\u65f6\u6267\u884c\u3002\u8fd9\u901a\u5e38\u9700\u8981\u591a\u6838\u6216\u591a\u7ebf\u7a0b\u5904\u7406\u5668\uff0c\u6bcf\u4e2a\u6838\u5fc3\u6216\u7ebf\u7a0b\u53ef\u4ee5\u540c\u65f6\u5904\u7406\u4e0d\u540c\u7684\u4efb\u52a1\u3002\u8fd9\u5c31\u50cf\u6709\u591a\u4f4d\u53a8\u5e08\u5728\u53a8\u623f\u4e2d\uff0c\u6bcf\u4e2a\u4eba\u90fd\u5728\u540c\u65f6\u5904\u7406\u4e0d\u540c\u7684\u83dc\u54c1\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u7684\u7406\u89e3\uff1a\u4e00\u628a\u82f1\u96c4\u8054\u76df\u6e38\u620f\u5bf9\u5c40\u91cc\u9762\uff0c\u6e38\u620f\u91cc\u7684\u6bcf\u4e2a\u4f4d\u7f6e(\u4e0a\u5355\u3001\u6253\u91ce\u3001\u4e2d\u5355\u3001ADC\u3001\u8f85\u52a9)\u90fd\u5728\u540c\u65f6\u505a\u4e0d\u540c\u7684\u4efb\u52a1\uff0c\u6bd4\u5982\uff1a\u8865\u5200\u3001\u5237\u91ce\u3001\u6e38\u8d70\u3002\u4ed6\u4eec\u4e0d\u9700\u8981\u7b49\u522b\u4eba\u5b8c\u6210\u4efb\u52a1\u624d\u5f00\u59cb\u81ea\u5df1\u7684\u4efb\u52a1\uff0c\u4ed6\u4eec\u662f\u771f\u6b63\u7684\u540c\u65f6\u5728\u505a\u4e0d\u540c\u7684\u4e8b\u60c5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u5e76\u53d1\u662f\u5173\u4e8e\u5982\u4f55\u6709\u6548\u7684\u5904\u7406\u591a\u4e2a\u4efb\u52a1\uff0c\u4ee5\u4f7f\u5b83\u4eec\u770b\u4f3c\u540c\u65f6\u8fdb\u884c\uff0c\u901a\u5e38\u7528\u4e8e\u5355\u6838\u5904\u7406\u5668\u3002\u5e76\u884c\u5219\u662f\u5173\u4e8e\u5982\u4f55\u5b9e\u9645\u540c\u65f6\u6267\u884c\u591a\u4e2a\u4efb\u52a1\uff0c\u9700\u8981\u591a\u6838\u6216\u591a\u5904\u7406\u5668\u7cfb\u7edf\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u8fd9\u4e24\u79cd\u6280\u672f\u53ef\u4ee5\u540c\u65f6\u7528\uff0c\u63d0\u9ad8\u7cfb\u7edf\u6548\u7387\u548c\u54cd\u5e94\u901f\u5ea6\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/golang/go/issues",children:"Golang Issues"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://go.dev/doc/",children:"Golang Doc"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://chat.openai.com",children:"ChatGPT"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const l={},d=r.createContext(l);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);