(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=(n(10),n(1)),c="https://www.linkedin.com/in/tushar-shahi/",s="https://www.instagram.com/shahi_tushar/",m="https://github.com/TusharShahi",u={javascript:{name:"Javascript",imageLink:"javaScript",link:"https://www.javascript.com/",color:"yellow"},node:{name:"NodeJs",imageLink:"nodejs",link:"https://nodejs.org/en/",color:"green"},typescript:{name:"TypeScript",imageLink:"typeScript",link:"https://www.typescriptlang.org/",color:"blue"},react:{name:"ReactJS",imageLink:"react",link:"https://reactjs.org/",color:"blue"},salesforce:{name:"Salesforce",imageLink:"salesforce",link:"https://developer.salesforce.com/",color:"blue"},html:{name:"HTML",imageLink:"html5",link:"https://html.com/",color:"red"},css:{name:"CSS",imageLink:"css3",link:"https://www.w3.org/Style/CSS/Overview.en.html",color:"blue"},mongo:{name:"Mongo",imageLink:"mongo",link:"https://www.mongodb.com/",color:"green"},es:{name:"ElasticSearch",imageLink:"elasticSearch",link:"https://www.elastic.co/",color:"blue"},cpp:{name:"C++",imageLink:"cplusplus",link:"https://www.cplusplus.com/",color:"red"},python:{name:"Python",imageLink:"python3",link:"https://www.python.org/",color:"blue"},git:{name:"Git",imageLink:"git",link:"https://git-scm.com/",color:"red"},vsc:{name:"VSCode",imageLink:"vsCode",link:"https://code.visualstudio.com/",color:"blue"},linux:{name:"Linux",imageLink:"linux",link:"https://www.linux.org/",color:"yellow"}},d={project:"flixRemote",description:"Chrome extension which lets you control Netflix using phone",mockup:"/images/work/flixremote-mockup.png",link:"https://chrome.google.com/webstore/detail/flixremote-your-netflix-r/jkhffbfbokiincaebolhpcfdkhiipalh?hl=en",altMockupText:"FlixRemote Mockup"},p={project:"WorkForce",description:"Desktop application to manage work force at a college campus",mockup:"/images/work/workforce-mockup.png",link:"",altMockupText:"WorkForce Mockup"},h={project:"MRM Website",description:"Official Website for Mars Rover Manipal",mockup:"/images/work/mrmwebsite-mockup.png",link:"http://www.marsrovermanipal.com",altMockupText:"MRM Website Mockup"},f={project:"Emergency Zone",description:"Online biology based quiz game for college tech fest",mockup:"/images/work/emergencyzone-mockup.png",link:"",altMockupText:"Emergency Zone Mockup"},k={companyLink:"https://play.google.com/store/apps/details?id=com.shell.sitibv.myjiffylube&hl=en&gl=US",role:"Software Engineer",company:"Shell IT",description:"As a salesforce developer, pivotal in golive and updates of MyJiffyLube app. Responsible for front end development focusing on accessibility.",timePeriod:"July 2019 - ",skillsUsed:[u.salesforce,u.javascript,u.css]},g={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built online review analysis tool. Enhanced existing product dashboard with more insightful data analysis features. Created influencer discovery platform from scratch. Mentored interns to successfully onboard them to the project.",timePeriod:"December 2018 - June 2019",skillsUsed:[u.es,u.mongo,u.typescript,u.python]},E={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built the new product dashboard of the B2B Online Reputation Management tool. The dashboard provided efficient searching, filtering and aggregations of social media data.",timePeriod:"June 2018 - July 2018",skillsUsed:[u.es,u.typescript]},b={companyLink:"https://www.facebook.com/MarsRoverManipal/",company:"Mars Rover Manipal",description:"Handled finance, sponsorship, public relations, social media and other documentation. Ensured smooth working of the team. Mentored juniors to take on same role.",timePeriod:"November 2016 - July 2018"},v={companyLink:"https://www.facebook.com/TeachCodeforGood/",company:"Teach Code for Good",description:"Volunteered as an HTML and Python teacher in schools in proximity. Went on to design the curriculum for the same.",timePeriod:"November 2016 - December 2018"},w={web:[u.javascript,u.typescript,u.node,u.react,u.html,u.css],database:[u.mongo,u.es],core:[u.cpp],tools:[u.git,u.vsc,u.linux]},y={web:"Web Technologies",database:"Databases",core:"Core",tools:"Tools and Platforms"},x={dark:{background:"#222629",paraText:"#fff",headerText:"#fff",base:"#fff",pressed:"#c5c6c8",shade:"#2d3235"},light:{background:"#fffff",paraText:"#15202b",headerText:"#212121",base:"#212121",pressed:"#22303c",shade:"#f5f5f5"}},j=o.a.createContext({theme:null!=localStorage.getItem("themeSwitch")?localStorage.getItem("themeSwitch"):"LIGHT",toggleTheme:function(){}}),T=(n(11),n(2)),L=n.n(T),S=(n(12),Object(a.memo)((function(e){var t=function(t){return t.preventDefault(),e.navChangeFunction(e.linkAddress)},n=e.contentType==e.linkAddress;return o.a.createElement("div",{className:"Navlink"},o.a.createElement("div",{onClick:t,onKeyDown:function(e){"13"!=e.keyCode&&32!=e.keyCode||t(e)},tabIndex:"0",role:"button",className:L()({clicked:n})},e.linkText))}))),O=(n(13),Object(a.memo)((function(e){return o.a.createElement("div",{className:"Navbar"},o.a.createElement(S,{linkAddress:"experience",linkText:"Exp",navChangeFunction:e.navChangeFunction,contentType:e.contentType}),o.a.createElement(S,{linkAddress:"work",linkText:"Work",navChangeFunction:e.navChangeFunction,contentType:e.contentType}),o.a.createElement(S,{linkAddress:"else",linkText:"Else",navChangeFunction:e.navChangeFunction,contentType:e.contentType}))}))),C=Object(a.memo)((function(e){var t=Object(a.useContext)(j),n=t.theme,r=t.toggleTheme,i=Object(a.useRef)();return o.a.createElement("div",{className:"modeChangeButton",ref:i,role:"button",tabIndex:"0",onClick:r,onKeyDown:function(e){"13"!=e.keyCode&&"32"!=e.keyCode||i.current.click()}},n.toUpperCase())})),M=(n(14),Object(a.memo)((function(e){return o.a.createElement("div",{className:"Header"},o.a.createElement(C,null),o.a.createElement(O,{navChangeFunction:e.navChangeFunction,contentType:e.contentType}))}))),N=(n(15),n(16),Object(a.memo)((function(e){var t=Object(a.useContext)(j),n=t.theme,r=(t.themeToggler,"/images/icons/socialMediaIcon-instagram.svg".split("-"));r[1]=e.website+".svg";var i,l=r[0]+"-"+r[1],c=e.website+" link",s=e.link;i=o.a.createElement("a",{href:s,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{width:"21",height:"21",src:""+l,alt:c}));var m="SocialMediaLink "+n;return o.a.createElement("div",{className:m},o.a.createElement("div",{className:"MediaIconBox"},i))}))),B=Object(a.memo)((function(e){return o.a.createElement("div",{className:"contactArea"},o.a.createElement("div",{id:"socialMediaBox"},o.a.createElement(N,{website:"linkedin",link:c}),o.a.createElement(N,{website:"instagram",link:s}),o.a.createElement(N,{website:"github",link:m})),o.a.createElement("div",{id:"emailAndPhoneBox"},o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:shahi.tushar8@gmail.com"},"shahi.tushar8@gmail.com"))),o.a.createElement("div",{id:"copyrightBox"},o.a.createElement("p",null," \xa9 Tushar Shahi")))})),R=Object(a.memo)(Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!0),r=Object(l.a)(n,2),i=r[0],c=r[1];Object(a.useEffect)((function(){(new Image).src=""+m}),[]),Object(a.useLayoutEffect)((function(){var e=function(){c(window.innerWidth>768)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var s=null;e.aside&&(s={role:"complementary"});var m=e.displayPictureLink;return o.a.createElement("div",Object.assign({className:"SideBar",ref:t.sideBarRef},s),o.a.createElement("div",{className:"SideBarBox",ref:t.sideBarBoxRef},o.a.createElement("div",{id:"welcomeArea"},o.a.createElement("div",{id:"displayPhotoArea"},o.a.createElement("img",{src:""+m,alt:"Display Picture"})),o.a.createElement("div",{id:"textArea"},o.a.createElement("h1",null,"Hey! I am Tushar.\n  I like to code."))),i&&o.a.createElement(B,null)))}))),I=Object(a.memo)((function(e){var t=!0,n=o.a.createElement("h3",null,o.a.createElement("a",{href:e.link,className:L()({projectHasLink:t}),rel:"noopener noreferrer",target:"_blank"},e.name));""==e.link&&(t=!1,n=o.a.createElement("h3",null,e.name));var a=e.mockupImage;return o.a.createElement("div",{className:"WorkBlock"},n,o.a.createElement("div",{className:"WorkScreenShotsBox"},o.a.createElement("img",{src:""+a,alt:e.mockupImageText})),o.a.createElement("div",{className:"WorkDescription"},o.a.createElement("p",null,e.description)))})),P=(n(17),Object(a.memo)((function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Work"),o.a.createElement("div",null,[d,h,f,p].map((function(e){return o.a.createElement(I,{name:e.project,mockupImage:e.mockup,link:e.link,description:e.description,mockupImageText:e.altMockupText,role:e.role,key:e.project})}))))}))),A=(n(18),Object(a.memo)((function(e){var t=Object(a.useContext)(j),n=t.theme;t.toggleTheme;return o.a.createElement("div",{className:"SkillsBox"},function(e,t,a){var r=e,i="Skills Used : ";if("abilities"==t&&(r=w[a],i="".concat(y[a]," :")),null!=r){var l=r.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{className:e.color+" "+n,rel:"noopener noreferrer",target:"_blank",href:e.link},e.name))})),c=o.a.createElement("ul",null,l);return o.a.createElement("div",null,o.a.createElement("p",null,i),c)}return null}(e.skillsList,e.type,e.groupName))}))),W=Object(a.memo)((function(e){var t=e.skillsUsed,n=o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},e.name)),o.a.createElement("h4",null,e.duration),o.a.createElement("div",{className:"DescriptionBox"},o.a.createElement("p",null,e.description)));null!=e.role&&(n=o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},e.role)),o.a.createElement("h4",null,e.name," / ",e.duration),o.a.createElement("div",{className:"DescriptionBox"},o.a.createElement("p",null,e.description))));var a=null;return null==t||(a=o.a.createElement(A,{skillsList:t})),o.a.createElement("div",{className:"ExperienceBlock"},n,a)})),D=(n(19),Object(a.memo)((function(){var e=function(e){return e.map((function(e){return o.a.createElement(W,{name:e.company,description:e.description,duration:e.timePeriod,skillsUsed:e.skillsUsed,link:e.companyLink,role:e.role,key:e.timePeriod})}))};return o.a.createElement("div",null,o.a.createElement("h2",null,"Experience"),o.a.createElement("div",{id:"corporate"},e([k,g,E])),o.a.createElement("div",{id:"school"},o.a.createElement("h2",null,"College"),o.a.createElement("div",null),o.a.createElement("div",null,e([b,v]))))}))),F=function(){return o.a.createElement("div",{className:"AbilitiesBox"},o.a.createElement("h2",null,"Abilities"),o.a.createElement(A,{groupName:"web",type:"abilities"}),o.a.createElement(A,{groupName:"database",type:"abilities"}),o.a.createElement(A,{groupName:"tools",type:"abilities"}),o.a.createElement(A,{groupName:"core",type:"abilities"}))},J=(n(20),Object(a.memo)((function(){return o.a.createElement("div",{className:"Myself"},o.a.createElement("h2",null,"Myself"),o.a.createElement("div",{id:"description"},o.a.createElement("p",null,"Software Engineer based out of Delhi who enjoys product development. Has experience working at an early stage startup as well as a Fortune 500 company.")),o.a.createElement("div",{id:"javascriptBrag"},o.a.createElement("p",null,"Very comfortable with Javascript. Loves to automate.")),o.a.createElement("div",{id:"hobbies"},o.a.createElement("p",null,"Plays football for the chills and has a fondness for the hills.")),o.a.createElement("div",{id:"freeTime"},o.a.createElement("p",null,"In his freetime - reads, lifts.")),o.a.createElement("p",{id:"resumeLink"},o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/Resume.pdf",download:!0},"Download Resume  \u2b07")),o.a.createElement(F,null))}))),H=Object(a.memo)((function(){var e=function(e){["background","paraText","headerText","base","pressed","shade"].forEach((function(t){document.documentElement.style.setProperty("--".concat(t),x[e.toLowerCase()][t])}))},t="DARK";null!==localStorage.getItem("themeSwitch")&&"LIGHT"===localStorage.getItem("themeSwitch")&&(t="LIGHT");var n=Object(a.createRef)(),r=Object(a.createRef)(),i=Object(a.createRef)(),c={sideBarRef:r,sideBarBoxRef:i};e(t);var s=Object(a.useState)(!1),m=Object(l.a)(s,2),u=m[0],d=(m[1],Object(a.useState)("main")),p=Object(l.a)(d,2),h=p[0],f=p[1],k=Object(a.useState)(t),g=Object(l.a)(k,2),E=g[0],b=g[1],v=Object(a.useState)(window.innerWidth<768),w=Object(l.a)(v,2),y=w[0];w[1];return o.a.createElement(j.Provider,{value:{theme:E,toggleTheme:function(){document.body.classList.contains("preLoad")&&document.body.classList.remove("preLoad");var t="DARK"===E?"LIGHT":"DARK";b(t),localStorage.setItem("themeSwitch",t),e(t)}}},o.a.createElement("div",{className:"App"},o.a.createElement(M,{navChangeFunction:function(e){u||(window.innerWidth>768?(n.current.classList.add("showMainContent"),r.current.classList.add("sideBarCompressed"),i.current.classList.add("sideBarBoxFullWidth")):(setTimeout((function(){window.scrollBy(0,500-document.body.scrollTop)}),200),n.current.classList.add("displayMainContent"))),f(e)},contentType:h}),o.a.createElement(R,{ref:c,displayPictureLink:"/images/displayPicture-experience-phone.jpg",aside:"main"!==h}),o.a.createElement("div",{className:"ContentArea",ref:n},function(e){switch(e){case"experience":return o.a.createElement(D,null);case"work":return o.a.createElement(P,null);case"else":return o.a.createElement(J,null);default:return null}}(h)),y&&o.a.createElement(B,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.82122a93.chunk.js.map