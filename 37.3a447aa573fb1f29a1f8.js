(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{YLNe:function(t,e,n){"use strict";n.r(e);var o=n("Valr"),i=n("n81q"),s=n("0AKQ"),r=n("YNTD"),a=n("DUip"),c=n("TYT/"),l=n("dEwP"),h=n("t9fZ"),b=n("Qgas");function p(t,e,n){return 0===n?[e]:(t.push(e),t)}var d=n("MGne"),u=n("jXul"),g=n("67Y/"),f=n("vubp"),m=n("cUzu"),w=function(){function t(t){this.http=t}return t.prototype.load=function(t,e){var n=(t-1)%7*e;return this.http.get("assets/data/news.json").pipe(Object(g.a)((function(t){return t.splice(n,e)})),Object(f.a)(1500))},t.\u0275fac=function(e){return new(e||t)(c.ic(m.b))},t.\u0275prov=c.Qb({token:t,factory:t.\u0275fac}),t}(),v=n("kztb"),P=n("V+dw"),y=n("S+eJ"),x=n("eBxF"),S=n("66B6"),O=function(){function t(){this.label="Loading"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ob({type:t,selectors:[["nb-news-post-placeholder"]],hostVars:1,hostBindings:function(t,e){2&t&&c.Hb("aria-label",e.label)},decls:3,vars:0,consts:[[1,"title-placeholder"],[1,"text-placeholder"],[1,"link-placeholder"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"div",1),c.Vb(2,"div",2))},styles:["[_nghost-%COMP%]{display:block;width:100%}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}.nb-theme-dark   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#101426}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#13132b}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}"]}),t}(),N=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ob({type:t,selectors:[["nb-news-post"]],inputs:{post:"post"},decls:7,vars:3,consts:[[1,"h5"]],template:function(t,e){1&t&&(c.ac(0,"article"),c.ac(1,"h2",0),c.Pc(2),c.Zb(),c.ac(3,"p"),c.Pc(4),c.Zb(),c.ac(5,"a"),c.Pc(6,"Read full article"),c.Zb(),c.Zb()),2&t&&(c.Gb(2),c.Qc(e.post.title),c.Gb(2),c.Qc(e.post.text),c.Gb(1),c.Hb("href",e.post.link,c.Jc))},encapsulation:2}),t}();function C(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}function T(t,e){if(1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post",2),c.Zb()),2&t){var n=e.$implicit;c.Gb(1),c.wc("post",n)}}function Z(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}var k=function(){function t(t,e,n,i,s,r,a){this.newsService=t,this.router=e,this.route=n,this.scrollService=i,this.layoutService=s,this.platformId=r,this.window=a,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(o.A)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=a.history.scrollRestoration,history.scrollRestoration="manual")}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.queryParams.page;this.startPage=t?Number.parseInt(t,10):100,this.pageToLoadNext=this.startPage},t.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},t.prototype.updateUrl=function(t){this.router.navigate(["."],{queryParams:{page:t},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},t.prototype.loadPrevious=function(){var t=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe((function(e){var n;t.topPlaceholders=[],(n=t.news).unshift.apply(n,e),t.loadingPrevious=!1}),(function(e){return t.startPage++})))},t.prototype.loadNext=function(){var t=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe((function(e){var n;t.bottomPlaceholders=[],(n=t.news).push.apply(n,e),t.loadingNext=!1,t.pageToLoadNext++})))},t.prototype.restoreScrollPosition=function(){var t=this;Object(l.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(h.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(Object(b.a)(p,[])).subscribe((function(e){var n=e[4].y,o=e[3].scrollHeight-e[0].scrollHeight;e[1].y+o!==n&&t.scrollService.scrollTo(null,n+o)}))},t.\u0275fac=function(e){return new(e||t)(c.Ub(w),c.Ub(a.c),c.Ub(a.a),c.Ub(v.a),c.Ub(P.a),c.Ub(c.C),c.Ub(d.f))},t.\u0275cmp=c.Ob({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&c.Vc(u.b,!0,c.l),2&t&&c.Dc(n=c.nc())&&(e.listItems=n)},features:[c.Fb([w])],decls:5,vars:6,consts:[["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(c.ac(0,"nb-card"),c.ac(1,"nb-list",0),c.mc("topThreshold",(function(){return e.loadPrevious()}))("bottomThreshold",(function(){return e.loadNext()}))("pageChange",(function(t){return e.updateUrl(t)})),c.Nc(2,C,2,0,"nb-list-item",1),c.Nc(3,T,2,1,"nb-list-item",1),c.Nc(4,Z,2,0,"nb-list-item",1),c.Zb(),c.Zb()),2&t&&(c.Gb(1),c.wc("threshold",500)("pageSize",e.pageSize)("startPage",e.startPage),c.Gb(1),c.wc("ngForOf",e.topPlaceholders),c.Gb(1),c.wc("ngForOf",e.news),c.Gb(1),c.wc("ngForOf",e.bottomPlaceholders))},directives:[y.b,u.a,x.a,S.a,o.m,u.b,O,N],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}();function G(t,e){if(1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post",4),c.Zb()),2&t){var n=e.$implicit;c.Gb(1),c.wc("post",n)}}function M(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}function F(t,e){if(1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post",4),c.Zb()),2&t){var n=e.$implicit;c.Gb(1),c.wc("post",n)}}function I(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}var z=function(){function t(t){this.newsService=t,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return t.prototype.loadNext=function(t){t.loading||(t.loading=!0,t.placeholders=new Array(this.pageSize),this.newsService.load(t.pageToLoadNext,this.pageSize).subscribe((function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loading=!1,t.pageToLoadNext++})))},t.\u0275fac=function(e){return new(e||t)(c.Ub(w))},t.\u0275cmp=c.Ob({type:t,selectors:[["ng-component"]],features:[c.Fb([w])],decls:12,vars:6,consts:[[1,"own-scroll"],["nbInfiniteList","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[3,"post"]],template:function(t,e){1&t&&(c.ac(0,"nb-card",0),c.ac(1,"nb-card-header"),c.Pc(2," Own scroll "),c.Zb(),c.ac(3,"nb-list",1),c.mc("bottomThreshold",(function(){return e.loadNext(e.firstCard)})),c.Nc(4,G,2,1,"nb-list-item",2),c.Nc(5,M,2,0,"nb-list-item",2),c.Zb(),c.Zb(),c.ac(6,"nb-card"),c.ac(7,"nb-card-header"),c.Pc(8," Window scroll "),c.Zb(),c.ac(9,"nb-list",3),c.mc("bottomThreshold",(function(){return e.loadNext(e.secondCard)})),c.Nc(10,F,2,1,"nb-list-item",2),c.Nc(11,I,2,0,"nb-list-item",2),c.Zb(),c.Zb()),2&t&&(c.Gb(3),c.wc("threshold",500),c.Gb(1),c.wc("ngForOf",e.firstCard.news),c.Gb(1),c.wc("ngForOf",e.firstCard.placeholders),c.Gb(4),c.wc("threshold",500),c.Gb(1),c.wc("ngForOf",e.secondCard.news),c.Gb(1),c.wc("ngForOf",e.secondCard.placeholders))},directives:[y.b,y.d,u.a,x.a,o.m,u.b,N,O],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}","[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]}),t}();function L(t,e){if(1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post",2),c.Zb()),2&t){var n=e.$implicit;c.Gb(1),c.wc("post",n)}}function U(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}var V=function(){function t(t){this.newsService=t,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return t.prototype.loadNext=function(){var t=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe((function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loading=!1,t.pageToLoadNext++})))},t.\u0275fac=function(e){return new(e||t)(c.Ub(w))},t.\u0275cmp=c.Ob({type:t,selectors:[["ng-component"]],features:[c.Fb([w])],decls:4,vars:3,consts:[["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(c.ac(0,"nb-card"),c.ac(1,"nb-list",0),c.mc("bottomThreshold",(function(){return e.loadNext()})),c.Nc(2,L,2,1,"nb-list-item",1),c.Nc(3,U,2,0,"nb-list-item",1),c.Zb(),c.Zb()),2&t&&(c.Gb(1),c.wc("threshold",500),c.Gb(1),c.wc("ngForOf",e.news),c.Gb(1),c.wc("ngForOf",e.placeholders))},directives:[y.b,u.a,x.a,o.m,u.b,N,O],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}(),_=n("VnD/"),R=n("1Ei1");function j(t,e){if(1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post",3),c.Zb()),2&t){var n=e.$implicit;c.Gb(1),c.wc("post",n)}}function A(t,e){1&t&&(c.ac(0,"nb-list-item"),c.Vb(1,"nb-news-post-placeholder"),c.Zb())}function D(t,e){var n=t.getComputedStyle(e),o=parseInt(n.getPropertyValue("margin-top"),10),i=parseInt(n.getPropertyValue("margin-bottom"),10);return e.offsetHeight+o+i}var $=[{path:"infinite-list-placeholders.component",component:k},{path:"infinite-list-scroll-modes.component",component:z},{path:"infinite-list-showcase.component",component:V},{path:"infinite-news-list.component",component:function(){function t(t,e,n,i,s,r){this.newsService=t,this.router=e,this.route=n,this.scrollService=i,this.platformId=s,this.window=r,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(o.A)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=r.history.scrollRestoration,history.scrollRestoration="manual")}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.queryParams.page;this.startPage=t?Number.parseInt(t,10):1,this.pageToLoadNext=this.startPage},t.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},t.prototype.updateUrl=function(t){this.router.navigate(["."],{queryParams:{page:t},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},t.prototype.loadPrevious=function(){var t=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe((function(e){var n;(n=t.news).unshift.apply(n,e),t.loadingPrevious=!1,t.restoreScrollPosition(),t.startPage--})))},t.prototype.loadNext=function(){var t=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe((function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loadingNext=!1,t.pageToLoadNext++})))},t.prototype.restoreScrollPosition=function(){var t=this,e=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(g.a)((function(){return t.listItems.first.nativeElement})),Object(_.a)((function(t){return t!==e})),Object(h.a)(1)).subscribe((function(){for(var n=0,o=0,i=t.listItems.toArray();o<i.length;o++){var s=i[o].nativeElement;if(s===e)break;n+=D(t.window,s)}t.scrollService.scrollTo(null,n)}))},t.\u0275fac=function(e){return new(e||t)(c.Ub(w),c.Ub(a.c),c.Ub(a.a),c.Ub(v.a),c.Ub(c.C),c.Ub(d.f))},t.\u0275cmp=c.Ob({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&c.Vc(u.b,!0,c.l),2&t&&c.Dc(n=c.nc())&&(e.listItems=n)},features:[c.Fb([w])],decls:5,vars:6,consts:[[3,"nbSpinner"],["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(c.ac(0,"nb-card"),c.Vb(1,"div",0),c.ac(2,"nb-list",1),c.mc("topThreshold",(function(){return e.loadPrevious()}))("bottomThreshold",(function(){return e.loadNext()}))("pageChange",(function(t){return e.updateUrl(t)})),c.Nc(3,j,2,1,"nb-list-item",2),c.Nc(4,A,2,0,"nb-list-item",2),c.Zb(),c.Zb()),2&t&&(c.Gb(1),c.wc("nbSpinner",e.loadingPrevious),c.Gb(1),c.wc("threshold",500)("pageSize",e.pageSize)("startPage",e.startPage),c.Gb(1),c.wc("ngForOf",e.news),c.Gb(1),c.wc("ngForOf",e.placeholders))},directives:[y.b,R.a,u.a,x.a,S.a,o.m,u.b,N,O],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}()}],q=function(){function t(){}return t.\u0275mod=c.Sb({type:t}),t.\u0275inj=c.Rb({factory:function(e){return new(e||t)},imports:[[a.g.forChild($)],a.g]}),t}();n.d(e,"InfiniteListModule",(function(){return H}));var H=function(){function t(){}return t.\u0275mod=c.Sb({type:t}),t.\u0275inj=c.Rb({factory:function(e){return new(e||t)},imports:[[o.c,i.a,s.a,r.a,q]]}),t}()}}]);