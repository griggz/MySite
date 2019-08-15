(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(42),r=a.n(s),l=(a(55),a(3)),c=a(4),i=a(6),u=a(5),d=a(7),h=a(152),m=a(154),p=a(153),f=(a(56),a(57),a(2)),b=(a(14),a(10)),v=a.n(b),g=a(151),E=a(15),k=a.n(E),y=a(16),C=a.n(y),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.post,t=this.props.elClass,a="card"===t?"d-block":"d-none";return o.a.createElement("div",{className:t},o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{src:e.unsplash_url,class:"card-img-top",alt:"sigil"}),o.a.createElement("small",{class:"image_source"},o.a.createElement("a",{href:"https://unsplash.com/photos/{post.unsplash_url}",TARGET:"_blank"},"Image Source")),o.a.createElement("h1",{class:"title"},o.a.createElement(g.a,{maintainScrollPosition:!1,to:{pathname:"/posts/".concat(e.slug),state:{fromDashboard:!1}}},e.title)),o.a.createElement("h4",null,o.a.createElement("small",{class:"publish_date"}," Published: ",o.a.createElement(C.a,{fromNow:!0,ago:!0},e.timestamp)," ago")),o.a.createElement("h4",null,"Read time: ",e.read_time," min:"),o.a.createElement("hr",null),o.a.createElement("p",{className:a},o.a.createElement(k.a,{source:e.content.slice(0,200).trim().concat("...")}),o.a.createElement(g.a,{maintainScrollPosition:!1,to:{pathname:"/posts/".concat(e.slug),state:{fromDashboard:!1}}},"Read More"))))}}]),t}(n.Component),O=a(43),S=a.n(O),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).togglePostListClass=a.togglePostListClass.bind(Object(f.a)(a)),a.handleNewPost=a.handleNewPost.bind(Object(f.a)(a)),a.loadMorePosts=a.loadMorePosts.bind(Object(f.a)(a)),a.state={posts:[],postsListClass:"card",next:null,previous:null,author:!1,count:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"loadMorePosts",value:function(){var e=this.state.next;null===e&&void 0===e||this.loadPosts(e)}},{key:"loadPosts",value:function(e){var t="/api/posts/";void 0!==e&&(t=e);var a=this,n={method:"GET",headers:{"Content-Type":"application/json"}},o=v.a.load("csrftoken");void 0!==o&&(n.credentials="include",n.headers["X-CSRFToken"]=o),fetch(t,n).then(function(e){return e.json()}).then(function(e){console.log(e);a.state.posts;a.setState({posts:a.state.posts.concat(e.results),next:e.next,previous:e.previous,author:e.author,count:e.count})}).catch(function(e){console.log("error",e)})}},{key:"handleNewPost",value:function(e){var t=this.state.posts;t.unshift(e),this.setState({posts:t})}},{key:"togglePostListClass",value:function(e){e.preventDefault(),""===this.state.postsListClass?this.setState({postsListClass:"card"}):this.setState({postsListClass:""})}},{key:"componentDidMount",value:function(){this.setState({posts:[],postsListClass:"card",next:null,previous:null,author:!0,count:0}),this.loadPosts()}},{key:"render",value:function(){var e=this.state.posts,t=this.state.postsListClass,a=(this.state.author,this.state.next);return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("br",null),o.a.createElement("div",{className:"card-columns"},e.length>0?e.map(function(e,a){return o.a.createElement(j,{post:e,elClass:t})}):o.a.createElement("p",null,"No Posts Found"),null!==a?o.a.createElement(S.a,{onClick:this.loadMorePosts},"Load more"):""))}}]),t}(n.Component),N=a(44),w=a.n(N),D=a(45),I=a.n(D),T=a(46),F=a.n(T),L=a(47),R=a.n(L),x=a(21),M=a(17),U=a.n(M),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(f.a)(a)),a.handleDraftChange=a.handleDraftChange.bind(Object(f.a)(a)),a.clearForm=a.clearForm.bind(Object(f.a)(a)),a.postTitleRef=o.a.createRef(),a.postContentRef=o.a.createRef(),a.state={draft:!1,title:null,content:null,publish:null,errors:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"createPost",value:function(e){var t=v.a.load("csrftoken"),a=this;if(void 0!==t){var n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify(e),credentials:"include"};fetch("/api/posts/",n).then(function(e){return e.json()}).then(function(e){console.log(e),a.props.newPostItemCreated&&a.props.newPostItemCreated(e),a.clearForm()}).catch(function(e){console.log("error",e),alert("An error occured, please try again later.")})}}},{key:"updatePost",value:function(e){var t=this.props.post,a="/api/posts/".concat(t.slug,"/"),n=v.a.load("csrftoken"),o=this;if(void 0!==n){var s={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(e),credentials:"include"};fetch(a,s).then(function(e){return e.json()}).then(function(e){o.props.postItemUpdated&&o.props.postItemUpdated(e)}).catch(function(e){console.log("error",e),alert("An error occured, please try again later.")})}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state;void 0!==this.props.post?this.updatePost(t):this.createPost(t)}},{key:"handleInputChange",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;"title"===t&&a.length>120&&alert("This title is too long"),this.setState(Object(x.a)({},t,a))}},{key:"handleDraftChange",value:function(e){this.setState({draft:!this.state.draft})}},{key:"clearForm",value:function(e){e&&e.preventDefault(),this.postCreateForm.reset(),this.defaultState()}},{key:"clearFormRefs",value:function(){this.postTitleRef.current="",this.postContentRef.current=""}},{key:"defaultState",value:function(){this.setState({draft:!1,title:null,content:null,publish:U()(new Date).format("YYYY-MM-DD")})}},{key:"componentDidMount",value:function(){var e=this.props.post;void 0!==e?this.setState({draft:e.draft,title:e.title,content:e.content,publish:U()(e.publish).format("YYYY-MM-DD")}):this.defaultState()}},{key:"render",value:function(){var e=this,t=this.state.publish,a=this.state.title,n=this.state.content;this.props.post;return o.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){return e.postCreateForm=t}},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"title"},"Post title"),o.a.createElement("input",{type:"text",id:"title",name:"title",value:a,className:"form-control",placeholder:"Blog post title",ref:this.postTitleRef,onChange:this.handleInputChange,required:"required"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"content"},"Content"),o.a.createElement("textarea",{id:"content",ref:this.postContentRef,name:"content",value:n,className:"form-control",placeholder:"Post content",onChange:this.handleInputChange,required:"required"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"draft"},o.a.createElement("input",{type:"checkbox",checked:this.state.draft,id:"draft",name:"draft",className:"mr-2",onChange:this.handleDraftChange}),"Draft "),o.a.createElement("button",{onClick:function(t){t.preventDefault(),e.handleDraftChange()}},"Toggle Draft")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"publish"},"Publish Date"),o.a.createElement("input",{type:"date",id:"publish",name:"publish",className:"form-control",onChange:this.handleInputChange,value:t,required:"required"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),o.a.createElement("button",{className:"btn btn-secondary",onClick:this.clearForm},"Clear"))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handlePostItemUpdated=a.handlePostItemUpdated.bind(Object(f.a)(a)),a.state={slug:null,post:null,doneLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handlePostItemUpdated",value:function(e){this.setState({post:e})}},{key:"loadPost",value:function(e){var t="/api/posts/".concat(e,"/"),a=this,n={method:"GET",headers:{"Content-Type":"application/json"}},o=v.a.load("csrftoken");void 0!==o&&(n.credentials="include",n.headers["X-CSRFToken"]=o),fetch(t,n).then(function(e){return 404===e.status&&console.log("Page not found"),e.json()}).then(function(e){e.detail?a.setState({doneLoading:!0,post:null}):a.setState({doneLoading:!0,post:e})}).catch(function(e){console.log("error",e)})}},{key:"componentDidMount",value:function(){if(this.setState({slug:null,post:null}),this.props.match){var e=this.props.match.params.slug;this.setState({slug:e,doneLoading:!1}),this.loadPost(e)}}},{key:"buildUrl",value:function(){var e=this.state.post;return"https://vvayne.io/posts/".concat(e.slug)}},{key:"render",value:function(){var e=this.state.doneLoading,t=this.state.post,a={display:"block",height:"1px",border:0,borderTop:"1px solid #ccc",margin:"1em 0",padding:"0",color:"white"};return o.a.createElement("p",null,!0===e?o.a.createElement("div",{class:"Main"},null===t?"Not Found":o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10"},o.a.createElement("h1",{id:"alt"},t.title),o.a.createElement("h4",{id:"alt"},"By ",t.author.username),o.a.createElement("hr",{style:a}),o.a.createElement("h4",null,o.a.createElement("small",{className:"publish_date",id:"alt"}," Published: ",o.a.createElement(C.a,{fromNow:!0,ago:!0},t.timestamp)," ago\xa0")),o.a.createElement("hr",{style:a}),o.a.createElement("img",{src:t.unsplash_url,class:"rounded img-fluid",alt:"sigil"}),o.a.createElement("hr",{style:a}),o.a.createElement("small",{id:"shareIconsContainer"},o.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(this.buildUrl()),id:"shareIcons"},o.a.createElement("img",{src:R.a,alt:"facebook"}))," |\xa0",o.a.createElement("a",{href:"https://twitter.com/home?status=".concat(this.buildUrl()),id:"shareIcons"},o.a.createElement("img",{src:w.a,alt:"twitter"}))," |\xa0",o.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(this.buildUrl(),"&title=").concat(t.title,"&summary=").concat(t.title,"}&source=").concat(this.buildUrl(),"&"),id:"shareIcons"},o.a.createElement("img",{src:I.a,alt:"linkdin"}))," |\xa0",o.a.createElement("a",{href:" http://www.reddit.com/submit?url=".concat(this.buildUrl(),"&title=").concat(t.title,"&"),id:"shareIcons"},o.a.createElement("img",{src:F.a,alt:"reddit"}))),o.a.createElement("p",{id:"alt"},o.a.createElement(k.a,{source:t.content}))),o.a.createElement("div",{className:"col-md-2"},o.a.createElement("br",null))))):"Loading...")}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Create Post"),o.a.createElement(Y,null))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(f.a)(a)),a.clearForm=a.clearForm.bind(Object(f.a)(a)),a.scrapeLinkRef=o.a.createRef(),a.state={link:null,errors:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"createScrape",value:function(e){var t=v.a.load("csrftoken"),a=this;if(void 0!==t){console.log("csrf works");var n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify(e),credentials:"include"};fetch("/api/scrape/",n).then(function(e){return e.json()}).then(function(e){console.log(e),a.props.newScrapeItemCreated&&(a.props.newScrapeItemCreated(e),console.log("fetch worked")),a.clearForm()}).catch(function(e){console.log("error",e),alert("An error occurred, please try again later.")})}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state;void 0!==this.props.scrape?(this.createScrape(t),console.log("trying to submit")):this.clearFormRefs()}},{key:"handleInputChange",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;"link"===t&&a.length>120&&alert("This link is too long"),this.setState(Object(x.a)({},t,a))}},{key:"clearForm",value:function(e){e&&e.preventDefault(),this.scrapeCreateForm.reset(),this.defaultState(),console.log("form cleared")}},{key:"clearFormRefs",value:function(){this.scrapeLinkRef.current=""}},{key:"defaultState",value:function(){this.setState({link:null})}},{key:"componentDidMount",value:function(){var e=this.props.scrape;void 0!==e?this.setState({link:e.link}):this.defaultState()}},{key:"render",value:function(){var e=this,t=this.state.link;return o.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){return e.scrapeCreateForm=t}},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"title"},"Scrape title"),o.a.createElement("input",{type:"text",id:"link",name:"link",value:t,className:"form-control",placeholder:"Yelp Link",ref:this.scrapeLinkRef,onChange:this.handleInputChange,required:"required"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),o.a.createElement("button",{className:"btn btn-secondary",onClick:this.clearForm},"Clear"))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handlePostItemUpdated=a.handlePostItemUpdated.bind(Object(f.a)(a)),a.state={slug:null,scrape:null,doneLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handlePostItemUpdated",value:function(e){this.setState({scrape:e})}},{key:"loadPost",value:function(e){var t="/api/scrape/".concat(e,"/"),a=this,n={method:"GET",headers:{"Content-Type":"application/json"}},o=v.a.load("csrftoken");void 0!==o&&(n.credentials="include",n.headers["X-CSRFToken"]=o),fetch(t,n).then(function(e){return 404===e.status&&console.log("Page not found"),e.json()}).then(function(e){e.detail?a.setState({doneLoading:!0,scrape:null}):a.setState({doneLoading:!0,scrape:e})}).catch(function(e){console.log("error",e)})}},{key:"componentDidMount",value:function(){if(this.setState({slug:null,scrape:null}),this.props.match){var e=this.props.match.params.slug;this.setState({slug:e,doneLoading:!1}),this.loadPost(e)}}},{key:"buildUrl",value:function(){var e=this.state.scrape;return"https://vvayne.io/scrape/".concat(e.slug)}},{key:"render",value:function(){var e=this.state.doneLoading,t=this.state.scrape;return o.a.createElement("p",null,!0===e?o.a.createElement("div",{class:"Main"},null===t?"Not Found":o.a.createElement("div",{className:"container-fluid"},o.a.createElement(g.a,{maintainScrollPosition:!1,to:{pathname:"/scrape/create",state:{fromDashboard:!1}}},"New Scrape"),o.a.createElement("br",null),o.a.createElement("h1",null,"test"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("td",{className:"dash"},o.a.createElement("b",null,t.author)," | "),o.a.createElement("td",{className:"dash"},o.a.createElement("b",null,t.date)," | "),o.a.createElement("td",{className:"dash"},o.a.createElement("b",null,t.rating)),o.a.createElement("p",{className:"dash"},t.review),o.a.createElement("hr",{style:"border-color: white"}))))):"Loading...")}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Create Scrape"),o.a.createElement(X,null))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,{exact:!0,path:"/posts/create",component:_}),o.a.createElement(p.a,{exact:!0,path:"/posts/",component:P}),o.a.createElement(p.a,{exact:!0,path:"/posts/:slug",component:q}),o.a.createElement(p.a,{exact:!0,path:"/scrape/create",component:J}),o.a.createElement(p.a,{exact:!0,path:"/scrape/results/:slug",component:A})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){e.exports=a.p+"static/media/twitter.bdda731e.png"},45:function(e,t,a){e.exports=a.p+"static/media/linkin.34ca7885.png"},46:function(e,t,a){e.exports=a.p+"static/media/reddit.12eae182.svg"},47:function(e,t,a){e.exports=a.p+"static/media/facebook.a75369d0.svg"},49:function(e,t,a){e.exports=a(149)},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},57:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.e6bb1678.chunk.js.map