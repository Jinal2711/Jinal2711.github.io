(window.webpackJsonpcinemaapp=window.webpackJsonpcinemaapp||[]).push([[0],{27:function(e,t,a){e.exports=a(50)},32:function(e,t,a){},33:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=(a(32),a(33),a(1)),l=a(3),s=a(2),u=a(4),m=a(5),p=a(20),h=a(14),d=a(15),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={genreName:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/genre/".concat(this.props.genreID,"?api_key=17ce301be4e248433e79e555fb543fb8")).then((function(e){return e.json()})).then((function(t){e.setState({genreName:t.name})}))}},{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-pill badge-success",style:{backgroundColor:this.getRandomColor()}},this.state.genreName))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isActive:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(null!=localStorage.getItem("favorites")){var e=localStorage.getItem("favorites").split(",");this.setState({isActive:e.indexOf(String(this.props.Data.id))>-1})}}},{key:"checkFav",value:function(){this.setState((function(e){return{isActive:!e.isActive}}));var e=String(this.props.Data.id),t=localStorage.getItem("favorites");if(null==t)localStorage.setItem("favorites",[e]);else{var a=(t=t.split(",")).indexOf(e);a>-1?t.splice(a,1):t.push(e),localStorage.setItem("favorites",t)}}},{key:"render",value:function(){var e=this,t=this.props.Data,a=this.state.isActive?"active":"favorite";return r.a.createElement("div",{className:"col-sm-3 mb-3",key:t.id},r.a.createElement("span",{className:"badge badge-warning"},t.vote_average),r.a.createElement(d.a,{className:"".concat(a),onClick:function(){return e.checkFav()}}),r.a.createElement(h.b,{to:"/".concat(t.id)},r.a.createElement("div",{className:"card card-container"},r.a.createElement("div",{className:"card-header cardImg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.poster_path,")")}}),r.a.createElement("div",{className:"card-body card-body-container"},r.a.createElement("p",{className:"card-text"},t.title)))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchData:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"keyPress",value:function(e,t){"Enter"===e.key&&this.props.onSearch(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"form-control searchInput",type:"text",placeholder:"Search","aria-label":"Search",onInput:function(t){return e.setState({searchData:t.target.value})},onKeyDown:function(t){return e.keyPress(t,e.state.searchData)}}))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{color:"white"}},r.a.createElement("div",{className:"active-grey-3 active-grey-4 mb-4 pt-3 col-sm-8"},r.a.createElement(b,{onSearch:function(t){return e.props.onSearch(t)}})),r.a.createElement("div",{className:"col-sm-3 mt-3 ml-3",style:{cursor:"pointer"}},r.a.createElement(d.a,{className:"favTitle"}),r.a.createElement("h3",null,r.a.createElement("a",null,"Favorite Films")))))}}]),t}(n.Component),y=a(24),E=a.n(y),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movieData:[],pageNo:1,queryVal:""},a.loadmoreClick=function(){a.setState((function(e){return{pageNo:e.pageNo+1}}),(function(){return a.loadMovies()}))},a.loadMovies=function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=17ce301be4e248433e79e555fb543fb8&page=".concat(a.state.pageNo);""!=a.state.queryVal.trim()&&(e+="&query=".concat(a.state.queryVal)),fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({movieData:[].concat(Object(p.a)(a.state.movieData),Object(p.a)(e.results))})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"searchResult",value:function(e){var t=this;this.setState({queryVal:e}),fetch("https://api.themoviedb.org/3/search/movie?api_key=17ce301be4e248433e79e555fb543fb8&query=".concat(e)).then((function(e){return e.json()})).then((function(e){t.setState({movieData:e.results})}))}},{key:"render",value:function(){var e=this,t=this.state.movieData.sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return r.a.createElement(f,{Data:e,key:e.id})}));return r.a.createElement("div",null,r.a.createElement(g,{onSearch:function(t){return e.searchResult(t)}}),r.a.createElement("div",{className:"container pt-3"},r.a.createElement(E.a,{dataLength:this.state.movieData.length,next:this.loadmoreClick,hasMore:!0,scrollThreshold:.99,loader:r.a.createElement("div",{className:"text-center",style:{margin:"0 auto",display:"block"}},r.a.createElement("div",{className:"spinner-grow text-warning"}),r.a.createElement("div",{className:"spinner-grow text-danger"}),r.a.createElement("div",{className:"spinner-grow text-info"}))},r.a.createElement("div",{className:"row pt-3"},t))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null))}}]),t}(n.Component),k=a(10),w=(a(42),a(25)),N=a.n(w),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Detail;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{color:"white",fontFamily:"serif"}},r.a.createElement("div",{style:{fontSize:"30px"}},r.a.createElement("span",null,r.a.createElement("i",null,e.title))),r.a.createElement(N.a,{rating:e.vote_average,starRatedColor:"yellow",numberOfStars:10,starSpacing:"2px",starDimension:"25px",name:"rating"}),r.a.createElement("h4",null,e.vote_average),r.a.createElement("div",{className:"mt-3"},r.a.createElement("h5",null,"en"==e.original_language?"English":""),r.a.createElement("h5",null,r.a.createElement("p",null,e.overview)),r.a.createElement("h5",null,e.status," on date   ",e.release_date),r.a.createElement("div",{className:"cardGenre text-left"},e.genres.map((function(e,t){return r.a.createElement(v,{genreID:e.id,key:t})}))))))}}]),t}(n.Component),D=a(26),I=a.n(D),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={swiper:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.castId;fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=17ce301be4e248433e79e555fb543fb8")).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({swiper:t})}))}},{key:"render",value:function(){var e=this.state.swiper;if(null==e)return null;var t=e.cast.filter((function(e){return null!=e.profile_path})).map((function(e){return r.a.createElement("div",{className:"card swiper_card",key:e.id},r.a.createElement("div",{className:"card-header swiperImg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w200".concat(e.profile_path,")")}}),r.a.createElement("div",{className:"card-body swiperBody"},r.a.createElement("span",{className:"card-title"},e.name," (",e.character,")")))}));return r.a.createElement(I.a,{slidesPerView:6,setWrapperSize:!0,spaceBetween:10,autoplay:{delay:2e3},breakpoints:{1024:{slidesPerView:6},767:{slidesPerView:2},320:{slidesPerView:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},t)}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movieInfo:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=17ce301be4e248433e79e555fb543fb8")).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({movieInfo:t})}))}},{key:"render",value:function(){var e=this.state.movieInfo;return null==e?null:r.a.createElement("div",{className:"contanier-fluid movieInfoCard",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(e.backdrop_path,")"),paddingTop:"36px"}},r.a.createElement("div",{className:"infoBg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 pt-3 pb-3"},r.a.createElement("img",{className:"detailImg",src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})),r.a.createElement("div",{className:"col-sm-8 mt-3"},r.a.createElement(S,{Detail:e}))),r.a.createElement(C,{castId:e.id})))}}]),t}(n.Component);var _=function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App mainBg",style:{backgroundColor:"black"}},r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:O}),r.a.createElement(k.a,{exact:!0,path:"/:id",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3da57513.chunk.js.map