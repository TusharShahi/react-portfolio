(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(15),n(1)),l=n(2),s=n(5),m=n(3),u=n(4),p=(n(16),n(17),n(18),"https://www.linkedin.com/in/tushar-shahi/"),h="https://www.instagram.com/shahi_tushar/",d="https://github.com/TusharShahi",g={project:"flixRemote",description:"Chrome extension which lets you control Netflix using phone",mockup:"/images/work/flixremote-mockup.png",link:"https://chrome.google.com/webstore/detail/flixremote-your-netflix-r/jkhffbfbokiincaebolhpcfdkhiipalh?hl=en",altMockupText:"FlixRemote Mockup"},k={project:"WorkForce",description:"Desktop application to manage work force at a college campus",mockup:"/images/work/workforce-mockup.png",link:"",altMockupText:"WorkForce Mockup"},f={project:"MRM Website",description:"Official Website for Mars Rover Manipal",mockup:"/images/work/mrmwebsite-mockup.png",link:"http://www.marsrovermanipal.com",altMockupText:"MRM Website Mockup"},y={project:"Emergency Zone",description:"Online biology based quiz game for college tech fest",mockup:"/images/work/emergencyzone-mockup.png",link:"",altMockupText:"Emergency Zone Mockup"},b={companyLink:"https://play.google.com/store/apps/details?id=com.shell.sitibv.myjiffylube&hl=en&gl=US",role:"Software Engineer",company:"Shell IT",description:"As a salesforce developer, pivotal in golive and updates of MyJiffyLube app. Responsible for front end development focusing on accessibility.",timePeriod:"July 2019 - ",skillsUsed:[{name:"Salesforce",imageLink:"salesforce",link:"https://developer.salesforce.com/"},{name:"Javascript",imageLink:"javaScript",link:"https://www.javascript.com/"},{name:"CSS",imageLink:"css3",link:"https://www.w3.org/Style/CSS/Overview.en.html"}]},v={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built online review analysis tool. Enhanced existing product dashboard with more insightful data analysis features. Created influencer discovery platform from scratch. Mentored interns to successfully onboard them to the project.",timePeriod:"December 2018 - June 2019",skillsUsed:[{name:"ElasticSearch",imageLink:"elasticSearch",link:"https://www.elastic.co/"},{name:"Mongo",imageLink:"mongo",link:"https://www.mongodb.com/"},{name:"TypeScript",imageLink:"typeScript",link:"https://www.typescriptlang.org/"},{name:"Python 3",imageLink:"python3",link:"https://www.typescriptlang.org/"}]},E={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built the new product dashboard of the B2B Online Reputation Management tool. The dashboard provided efficient searching, filtering and aggregations of social media data.",timePeriod:"June 2018 - July 2018",skillsUsed:[{name:"ElasticSearch",imageLink:"elasticSearch",link:"https://www.elastic.co/"},{name:"TypeScript",imageLink:"typeScript",link:"https://www.typescriptlang.org/"}]},w={companyLink:"https://www.facebook.com/MarsRoverManipal/",company:"Mars Rover Manipal",description:"Handled finance, sponsorship, public relations, social media and other documentation. Ensured smooth working of the team. Mentored juniors to take on same role.",timePeriod:"November 2016 - July 2018"},j={companyLink:"https://www.facebook.com/TeachCodeforGood/",company:"Teach Code for Good",description:"Volunteered as an HTML and Python teacher in schools in proximity. Went on to design the curriculum for the same.",timePeriod:"November 2016 - December 2018"},C={web:[{name:"NodeJs",imageLink:"nodejs",link:"https://nodejs.org/en/"},{name:"TypeScript",imageLink:"typeScript",link:"https://www.typescriptlang.org/"},{name:"ReactJS",imageLink:"react",link:"https://reactjs.org/"},{name:"HTML",imageLink:"html5",link:"https://html.com/"},{name:"CSS",imageLink:"css3",link:"https://www.w3.org/Style/CSS/Overview.en.html"}],database:[{name:"Mongo",imageLink:"mongo",link:"https://www.mongodb.com/"},{name:"ElasticSearch",imageLink:"elasticSearch",link:"https://www.elastic.co/"}],core:[{name:"C++",imageLink:"cplusplus",link:"https://www.cplusplus.com/"}],tools:[{name:"Git",imageLink:"git",link:"https://git-scm.com/"},{name:"VS Code",imageLink:"vsCode",link:"https://code.visualstudio.com/"},{name:"Linux",imageLink:"linux",link:"https://www.linux.org/"}],design:[]},O={web:"Web Technologies",database:"Databases",core:"Core",tools:"Tools and Platforms"},P={dark:{background:"#222629",paraText:"#6b6e70",headers:"#fff",base:"#fff",pressed:"#c5c6c8",shade:"#2d3235"},light:{background:"#fffff",paraText:"#15202b",headers:"#212121",base:"#212121",pressed:"#22303c",shade:"#f5f5f5"}},S=n(9),T=r.a.createContext({theme:null!=localStorage.getItem("themeSwitch")?localStorage.getItem("themeSwitch"):"LIGHT",toggleTheme:function(){}}),L=(n(20),n(6)),x=n.n(L),B=(n(21),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeMainPageContent=a.changeMainPageContent.bind(Object(s.a)(a)),a.keyPressChangeMainContent=a.keyPressChangeMainContent.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"changeMainPageContent",value:function(e){return e.preventDefault(),this.props.navChangeFunction(this.props.linkAddress)}},{key:"keyPressChangeMainContent",value:function(e){"13"!=e.keyCode&&32!=e.keyCode||this.changeMainPageContent(e)}},{key:"render",value:function(){var e=this.props.contentType==this.props.linkAddress;return r.a.createElement("div",{className:"Navlink"},r.a.createElement("div",{onClick:this.changeMainPageContent,onKeyDown:this.keyPressChangeMainContent,tabIndex:"0",role:"button",className:x()({clicked:e})},this.props.linkText))}}]),n}(r.a.PureComponent)),M=(n(22),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement(B,{linkAddress:"experience",linkText:"Exp",navChangeFunction:this.props.navChangeFunction,changeDisplayPicture:this.props.changeDisplayPicture,contentType:this.props.contentType}),r.a.createElement(B,{linkAddress:"work",linkText:"Work",navChangeFunction:this.props.navChangeFunction,changeDisplayPicture:this.props.changeDisplayPicture,contentType:this.props.contentType}),r.a.createElement(B,{linkAddress:"else",linkText:"Else",navChangeFunction:this.props.navChangeFunction,changeDisplayPicture:this.props.changeDisplayPicture,contentType:this.props.contentType}))}}]),n}(r.a.PureComponent)),N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a.keyDown=a.keyDown.bind(Object(s.a)(a)),a.buttonRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"keyDown",value:function(e){"13"!=e.keyCode&&"32"!=e.keyCode||this.buttonRef.current.click()}},{key:"render",value:function(){var e=this;return r.a.createElement(T.Consumer,null,(function(t){var n=t.theme,a=t.toggleTheme;return r.a.createElement("div",{className:"modeChangeButton",ref:e.buttonRef,role:"button",tabIndex:"0",onClick:a,onKeyDown:e.keyDown},n.toUpperCase())}))}}]),n}(r.a.PureComponent),D=(n(23),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(N,null),r.a.createElement(M,{navChangeFunction:this.props.navChangeFunction,changeDisplayPicture:this.props.changeDisplayPicture,contentType:this.props.contentType}))}}]),n}(r.a.PureComponent)),A=(n(24),n(25),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={socialMediaType:a.props.website},a}return Object(l.a)(n,[{key:"render",value:function(){var e="/images/icons/socialMediaIcon-instagram.svg".split("-");e[1]=this.state.socialMediaType+".svg";var t,n=e[0]+"-"+e[1],a=this.props.website+" link",i=this.props.link;t=r.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:""+n,alt:a}));var o="SocialMediaLink "+this.context.theme;return r.a.createElement("div",{className:o},r.a.createElement("div",{className:"MediaIconBox"},t))}}]),n}(r.a.PureComponent));A.contextType=T;var I=A,R=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"contactArea"},r.a.createElement("div",{id:"socialMediaBox"},r.a.createElement(I,{website:"linkedin",link:p}),r.a.createElement(I,{website:"instagram",link:h}),r.a.createElement(I,{website:"github",link:d})),r.a.createElement("div",{id:"emailAndPhoneBox"},r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:shahi.tushar8@gmail.com"},"shahi.tushar8@gmail.com")),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:+91-8860129729"},"+91-8860129729"))),r.a.createElement("div",{id:"copyrightBox"},r.a.createElement("p",null," \xa9 Tushar Shahi")))}}]),n}(r.a.PureComponent),W=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;this.props.aside&&(e={role:"complementary"});var t=this.props.displayPictureLink;return r.a.createElement("div",Object.assign({className:"SideBar",id:"mainPageSideBar"},e),r.a.createElement("div",{className:"SideBarBox"},r.a.createElement("div",{id:"welcomeArea"},r.a.createElement("div",{id:"displayPhotoArea"},r.a.createElement("img",{src:""+t,alt:"Display Picture"})),r.a.createElement("div",{id:"textArea"},r.a.createElement("h1",null,"Hey! My name is  ",r.a.createElement("span",{id:"nameSpan"},"Tushar Shahi"),"."),r.a.createElement("h1",null,"I code for a living."))),r.a.createElement(R,null)))}}]),n}(r.a.PureComponent),F=(r.a.PureComponent,function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=!0,t=r.a.createElement("h3",null,r.a.createElement("a",{href:this.props.link,className:x()({projectHasLink:e}),rel:"noopener noreferrer",target:"_blank"},this.props.name));""==this.props.link&&(e=!1,t=r.a.createElement("h3",null,this.props.name));var n=this.props.mockupImage;return r.a.createElement("div",{className:"WorkBlock"},t,r.a.createElement("div",{className:"WorkScreenShotsBox"},r.a.createElement("img",{src:""+n,alt:this.props.mockupImageText})),r.a.createElement("div",{className:"WorkDescription"},r.a.createElement("p",null,this.props.description)))}}]),n}(r.a.PureComponent)),H=(n(26),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"createWorkBlock",value:function(e){return e.map((function(e){return r.a.createElement(F,{name:e.project,mockupImage:e.mockup,link:e.link,description:e.description,mockupImageText:e.altMockupText,role:e.role,key:e.project})}))}},{key:"createScribblesBlock",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Work"),r.a.createElement("div",null,this.createWorkBlock([g,f,y,k])))}}]),n}(r.a.PureComponent)),J=(n(27),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"createAbilitiesBox",value:function(e){var t=C[e].map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.link,title:e.name},r.a.createElement("img",{src:"/images/icons/"+e.imageLink+"-icon.svg",alt:e.name})))})),n=r.a.createElement("ul",null,t);return r.a.createElement("div",null,r.a.createElement("p",null,O[e]," :"),n)}},{key:"createSkillsBox",value:function(e){if(null!=e){var t=e.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.link,title:e.name},r.a.createElement("img",{src:"/images/icons/"+e.imageLink+"-icon.svg",alt:e.name})))})),n=r.a.createElement("ul",null,t);return r.a.createElement("div",null,r.a.createElement("p",null,"Skills Used : "),n)}return null}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"SkillsBox"},this.createSkillsBox(this.props.skillsList));return"abilities"==this.props.type&&(e=r.a.createElement("div",{className:"SkillsBox"},this.createAbilitiesBox(this.props.groupName))),e}}]),n}(r.a.PureComponent)),G=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"AbilitiesBox"},r.a.createElement("h2",null,"Abilities"),r.a.createElement(J,{groupName:"web",type:"abilities"}),r.a.createElement(J,{groupName:"database",type:"abilities"}),r.a.createElement(J,{groupName:"tools",type:"abilities"}),r.a.createElement(J,{groupName:"core",type:"abilities"}))}}]),n}(r.a.PureComponent),U=(n(28),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Myself"},r.a.createElement("h2",null,"Myself"),r.a.createElement("div",{id:"description"},r.a.createElement("p",null,"Software Engineer based out of Delhi who enjoys product development. Has experience working at an early stage startup as well as a Fortune 500 company.")),r.a.createElement("div",{id:"javascriptBrag"},r.a.createElement("p",null,"Very comfortable with Javascript. Loves to automate.")),r.a.createElement("div",{id:"hobbies"},r.a.createElement("p",null,"Plays football for the chills and has a fondness for the hills.")),r.a.createElement("div",{id:"freeTime"},r.a.createElement("p",null,"In his freetime - reads, lifts.")),r.a.createElement("p",{id:"resumeLink"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/Resume.pdf",download:!0},"Download Resume  \u2b07")),r.a.createElement(G,null))}}]),n}(r.a.PureComponent)),V=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.skillsUsed,t=r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:this.props.link,rel:"noopener noreferrer",target:"_blank"},this.props.name)),r.a.createElement("h4",null,this.props.duration),r.a.createElement("div",{className:"DescriptionBox"},r.a.createElement("p",null,this.props.description)));null!=this.props.role&&(t=r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:this.props.link,rel:"noopener noreferrer",target:"_blank"},this.props.role)),r.a.createElement("h4",null,this.props.name," / ",this.props.duration),r.a.createElement("div",{className:"DescriptionBox"},r.a.createElement("p",null,this.props.description))));var n=null;return null==e||(n=r.a.createElement(J,{skillsList:e})),r.a.createElement("div",{className:"ExperienceBlock"},t,n)}}]),n}(r.a.PureComponent),_=(n(29),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"createExperienceBlock",value:function(e){return e.map((function(e){return r.a.createElement(V,{name:e.company,description:e.description,duration:e.timePeriod,skillsUsed:e.skillsUsed,link:e.companyLink,role:e.role,key:e.timePeriod})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Experience"),r.a.createElement("div",{id:"corporate"},this.createExperienceBlock([b,v,E])),r.a.createElement("div",{id:"school"},r.a.createElement("h2",null,"College"),r.a.createElement("div",null),r.a.createElement("div",null,this.createExperienceBlock([w,j]))))}}]),n}(r.a.PureComponent)),K=(n(30),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:a.props.content},a}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this.props.content;return"experience"==t?e=r.a.createElement(_,null):"work"==t?e=r.a.createElement(H,null):"else"==t&&(e=r.a.createElement(U,null)),r.a.createElement("div",{className:"ContentArea"},e)}}]),n}(r.a.PureComponent)),z=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"bottomContactArea"},r.a.createElement(R,null))}}]),n}(r.a.PureComponent),Z=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).changeContent=a.changeContent.bind(Object(s.a)(a)),a.changeDisplayPicture=a.changeDisplayPicture.bind(Object(s.a)(a)),a.createNewDisplayPictureLink=a.createNewDisplayPictureLink.bind(Object(s.a)(a)),a.changeAccordingtToResize=a.changeAccordingtToResize.bind(Object(s.a)(a));var r="DARK";return null!==localStorage.getItem("themeSwitch")&&"LIGHT"===localStorage.getItem("themeSwitch")&&(r="LIGHT"),a.changeColorsTo(r),a.toggleTheme=function(){document.body.classList.contains("preLoad")&&document.body.classList.remove("preLoad"),"DARK"==a.state.theme?(a.setState({theme:"LIGHT"}),localStorage.setItem("themeSwitch","LIGHT"),a.changeColorsTo("LIGHT")):"LIGHT"==a.state.theme&&(a.setState({theme:"DARK"}),localStorage.setItem("themeSwitch","DARK"),a.changeColorsTo("DARK"))},a.state={sideBarCompressed:!1,contentAreaView:"main",displayPictureLink:(S.isMobile,"/images/displayPicture-experience-phone.jpg"),theme:r,toggleTheme:a.toggleTheme},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.changeAccordingtToResize()}},{key:"changeAccordingtToResize",value:function(){window.innerWidth<=768?(document.getElementsByClassName("SideBarBox")[0].getElementsByClassName("contactArea")[0].style.display="none",document.getElementsByClassName("bottomContactArea")[0].style.display="block"):document.getElementsByClassName("bottomContactArea")[0].style.display="none"}},{key:"changeColorsTo",value:function(e){document.documentElement.style.setProperty("--background",P[e.toLowerCase()].background),document.documentElement.style.setProperty("--paraText",P[e.toLowerCase()].text),document.documentElement.style.setProperty("--headerText",P[e.toLowerCase()].headers),document.documentElement.style.setProperty("--base",P[e.toLowerCase()].base),document.documentElement.style.setProperty("--pressed",P[e.toLowerCase()].pressed),document.documentElement.style.setProperty("--shade",P[e.toLowerCase()].shade)}},{key:"createNewDisplayPictureLink",value:function(e){var t="/images/displayPicture-experience-phone.jpg".split("-");return t[1]=e,t[0]+"-"+t[1]+".png"}},{key:"changeContent",value:function(e){this.state.sideBarCompressed||(window.innerWidth>768?(document.getElementById("mainPageSideBar").classList.add("sideBarCompressed"),document.getElementsByClassName("SideBarBox")[0].classList.add("sideBarBoxFullWidth"),document.getElementsByClassName("ContentArea")[0].classList.add("showMainContent")):(setTimeout((function(){window.scrollBy(0,500-document.body.scrollTop)}),200),document.getElementsByClassName("ContentArea")[0].classList.add("displayMainContent"))),this.state.contentAreaView!=e&&this.setState({contentAreaView:e})}},{key:"changeDisplayPicture",value:function(e){}},{key:"render",value:function(){return r.a.createElement(T.Provider,{value:{theme:this.state.theme,toggleTheme:this.toggleTheme}},r.a.createElement("div",{className:"App"},r.a.createElement(D,{navChangeFunction:this.changeContent,changeDisplayPicture:this.changeDisplayPicture,contentType:this.state.contentAreaView}),r.a.createElement(W,{displayPictureLink:this.state.displayPictureLink,aside:"main"!==this.state.contentAreaView}),r.a.createElement(K,{content:this.state.contentAreaView}),r.a.createElement(z,null)))}}]),n}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.8529c51b.chunk.js.map