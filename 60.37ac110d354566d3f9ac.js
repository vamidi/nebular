(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{VaiE:function(t,n,e){"use strict";e.r(n);var o=e("Valr"),c=e("UPDU"),i=e("gM8K"),u=e("TYT/"),r=function(){function t(){}return t.\u0275mod=u.Sb({type:t}),t.\u0275inj=u.Rb({factory:function(n){return new(n||t)},imports:[[o.c,c.a,i.a]]}),t}(),s=e("F4EV"),a=e("GZfg"),b=e("0AKQ"),l=e("4aFR"),m=e("DUip"),p=e("MGne"),f=e("VnD/"),h=e("67Y/"),y=e("jiCe"),g=e("vuB0"),d=e("C74+"),x=e("ny24"),C=e("K9Ia"),M=e("4x4d"),v=e("o2lE"),O=e("HsLP"),w=e("2nRg"),P=e("UURD"),Z=e("o4D4"),k=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),_=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.items=[],n.context={items:[]},n}return k(n,t),n.prototype.renderContent=function(){},n.\u0275fac=function(t){return j(t||n)},n.\u0275cmp=u.Ob({type:n,selectors:[["nb-context-menu"]],inputs:{items:"items",tag:"tag",context:"context"},features:[u.Db],decls:1,vars:2,consts:[[1,"context-menu",3,"items","tag"]],template:function(t,n){1&t&&u.Vb(0,"nb-menu",0),2&t&&u.wc("items",n.context.items)("tag",n.context.tag)},directives:[Z.a],encapsulation:2}),n}(P.b),j=u.cc(_),T=function(){function t(t,n,e){this.hostRef=t,this.menuService=n,this.dynamicOverlayHandler=e,this.contextMenuHost=!0,this.position=O.b.BOTTOM,this.adjustment=O.a.CLOCKWISE,this.trigger=w.a.CLICK,this.contextMenuClass="",this.destroy$=new C.a,this._items=[]}return Object.defineProperty(t.prototype,"items",{set:function(t){this.validateItems(t),this._items=t},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.dynamicOverlayHandler.host(this.hostRef).componentType(_)},t.prototype.ngOnChanges=function(){this.rebuild()},t.prototype.ngAfterViewInit=function(){this.dynamicOverlay=this.configureDynamicOverlay().build(),this.subscribeOnItemClick()},t.prototype.rebuild=function(){this.dynamicOverlay=this.configureDynamicOverlay().rebuild()},t.prototype.show=function(){this.dynamicOverlay.show()},t.prototype.hide=function(){this.dynamicOverlay.hide()},t.prototype.toggle=function(){this.dynamicOverlay.toggle()},t.prototype.ngOnDestroy=function(){this.dynamicOverlayHandler.destroy()},t.prototype.configureDynamicOverlay=function(){return this.dynamicOverlayHandler.position(this.position).trigger(this.trigger).adjustment(this.adjustment).context({position:this.position,items:this._items,tag:this.tag}).overlayConfig({panelClass:this.contextMenuClass})},t.prototype.validateItems=function(t){if(!t||!t.length)throw Error("List of menu items expected, but given: "+t)},t.prototype.subscribeOnItemClick=function(){var t=this;this.menuService.onItemClick().pipe(Object(f.a)((function(n){return n.tag===t.tag})),Object(x.a)(this.destroy$)).subscribe((function(){return t.hide()}))},t.\u0275fac=function(n){return new(n||t)(u.Ub(u.l),u.Ub(y.b),u.Ub(v.a))},t.\u0275dir=u.Pb({type:t,selectors:[["","nbContextMenu",""]],hostVars:2,hostBindings:function(t,n){2&t&&u.Lb("context-menu-host",n.contextMenuHost)},inputs:{position:["nbContextMenuPlacement","position"],adjustment:["nbContextMenuAdjustment","adjustment"],tag:["nbContextMenuTag","tag"],items:["nbContextMenu","items"],trigger:["nbContextMenuTrigger","trigger"],contextMenuClass:["nbContextMenuClass","contextMenuClass"]},features:[u.Fb([v.a,M.a]),u.Eb()]}),t}(),I=function(){function t(t,n){this.nbMenuService=t,this.window=n,this.items=[{title:"Profile"},{title:"Logout"}]}return t.prototype.ngOnInit=function(){var t=this;this.nbMenuService.onItemClick().pipe(Object(f.a)((function(t){return"my-context-menu"===t.tag})),Object(h.a)((function(t){return t.item.title}))).subscribe((function(n){return t.window.alert(n+" was clicked!")}))},t.\u0275fac=function(n){return new(n||t)(u.Ub(y.b),u.Ub(p.f))},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-click"]],decls:5,vars:1,consts:[["name","Nikita Poltoratsky","title","full-stack developer","nbContextMenuTag","my-context-menu",3,"nbContextMenu"],[1,"colored-column-basic"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-header"),u.Vb(2,"nb-user",0),u.Zb(),u.ac(3,"nb-layout-column",1),u.Pc(4,"Hello World!"),u.Zb(),u.Zb()),2&t&&(u.Gb(2),u.wc("nbContextMenu",n.items))},directives:[g.b,g.d,d.a,T,g.a],styles:["[_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav {\n      justify-content: flex-end;\n    }"]}),t}(),B=e("b9/t"),D=function(){function t(){this.items=[{title:"Profile"},{title:"Logout"}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-showcase"]],decls:6,vars:1,consts:[["outline","","nbButton","",3,"nbContextMenu"],[1,"colored-column-basic"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-header"),u.ac(2,"button",0),u.Pc(3," Show Menu "),u.Zb(),u.Zb(),u.ac(4,"nb-layout-column",1),u.Pc(5,"Hello World!"),u.Zb(),u.Zb()),2&t&&(u.Gb(2),u.wc("nbContextMenu",n.items))},directives:[g.b,g.d,B.a,T,g.a],styles:["[_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav {\n      justify-content: flex-end;\n    }"]}),t}(),L=e("S+eJ"),V=[{path:"context-menu-click.component",component:I},{path:"context-menu-showcase.component",component:D},{path:"context-menu-test.component",component:function(){function t(){this.items=[{title:"Profile",link:"/user"},{title:"Logout",link:"/popover"},{title:"Another action"}],this.itemsWithIcons=[{title:"Profile",link:"/user",icon:"person-outline"},{title:"Logout",link:"/popover",icon:"settings-outline"}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-test"]],decls:12,vars:2,consts:[["name","Nikita Poltoratsky","title","full-stack developer",3,"nbContextMenu"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-column"),u.ac(2,"nb-card"),u.ac(3,"nb-card-header"),u.Pc(4,"Context Menu"),u.Zb(),u.ac(5,"nb-card-body"),u.Vb(6,"nb-user",0),u.Zb(),u.Zb(),u.ac(7,"nb-card"),u.ac(8,"nb-card-header"),u.Pc(9,"Context Menu"),u.Zb(),u.ac(10,"nb-card-body"),u.Vb(11,"nb-user",0),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Gb(6),u.wc("nbContextMenu",n.items),u.Gb(5),u.wc("nbContextMenu",n.itemsWithIcons))},directives:[g.b,g.a,L.b,L.d,L.a,d.a,T],encapsulation:2}),t}()},{path:"context-menu-modes.component",component:function(){function t(){this.items=[{title:"Profile"},{title:"Logout"}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-modes"]],decls:8,vars:3,consts:[["nbButton","","nbContextMenuTrigger","click",3,"nbContextMenu"],["nbButton","","nbContextMenuTrigger","focus",3,"nbContextMenu"],["nbButton","","nbContextMenuTrigger","hover",3,"nbContextMenu"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-column"),u.ac(2,"button",0),u.Pc(3," Click Mode "),u.Zb(),u.ac(4,"button",1),u.Pc(5," Focus (Tab) Mode "),u.Zb(),u.ac(6,"button",2),u.Pc(7," Hover Mode "),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Gb(2),u.wc("nbContextMenu",n.items),u.Gb(2),u.wc("nbContextMenu",n.items),u.Gb(2),u.wc("nbContextMenu",n.items))},directives:[g.b,g.a,B.a,T],styles:["[_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%] {\n      height: 50vw;\n    }\n\n    button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n    }"]}),t}()},{path:"context-menu-noop.component",component:function(){function t(){this.items=[{title:"Profile"},{title:"Logout"}]}return t.prototype.open=function(){this.contextMenu.show()},t.prototype.close=function(){this.contextMenu.hide()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-noop"]],viewQuery:function(t,n){var e;1&t&&u.Vc(T,!0),2&t&&u.Dc(e=u.nc())&&(n.contextMenu=e.first)},decls:9,vars:1,consts:[["nbButton","","nbContextMenuTrigger","noop",1,"menu-target",3,"nbContextMenu"],["nbButton","","size","small","status","success",3,"click"],["nbButton","","size","small","status","danger",3,"click"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-column"),u.ac(2,"button",0),u.Pc(3,"Menu Target"),u.Zb(),u.ac(4,"div"),u.ac(5,"button",1),u.mc("click",(function(){return n.open()})),u.Pc(6,"Open Context Menu"),u.Zb(),u.ac(7,"button",2),u.mc("click",(function(){return n.close()})),u.Pc(8,"Close Context Menu"),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Gb(2),u.wc("nbContextMenu",n.items))},directives:[g.b,g.a,B.a,T],styles:["[_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%] {\n      height: 50vw;\n    }\n    .menu-target[_ngcontent-%COMP%] {\n      margin-bottom: 7rem;\n    }\n    button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }"]}),t}()},{path:"context-menu-right-click.component",component:function(){function t(){this.items=[{title:"Profile"},{title:"Logout"}]}return t.prototype.open=function(){return this.contextMenu.show(),!1},t.prototype.close=function(){this.contextMenu.hide()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Ob({type:t,selectors:[["nb-context-menu-right-click"]],viewQuery:function(t,n){var e;1&t&&u.Vc(T,!0),2&t&&u.Dc(e=u.nc())&&(n.contextMenu=e.first)},hostBindings:function(t,n){1&t&&u.mc("click",(function(){return n.close()}),!1,u.Fc)},decls:4,vars:1,consts:[[1,"colored-column-basic"],["nbButton","","nbContextMenuTrigger","noop",1,"menu-target",3,"nbContextMenu","contextmenu"]],template:function(t,n){1&t&&(u.ac(0,"nb-layout"),u.ac(1,"nb-layout-column",0),u.ac(2,"button",1),u.mc("contextmenu",(function(){return n.open()})),u.Pc(3," Right Click "),u.Zb(),u.Zb(),u.Zb()),2&t&&(u.Gb(2),u.wc("nbContextMenu",n.items))},directives:[g.b,g.a,B.a,T],styles:["button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }"]}),t}()}],G=function(){function t(){}return t.\u0275mod=u.Sb({type:t}),t.\u0275inj=u.Rb({factory:function(n){return new(n||t)},imports:[[m.g.forChild(V)],m.g]}),t}();e.d(n,"ContextMenuModule",(function(){return H}));var H=function(){function t(){}return t.\u0275mod=u.Sb({type:t}),t.\u0275inj=u.Rb({factory:function(n){return new(n||t)},imports:[[r,s.a,a.a,b.a,l.a,i.a.forRoot(),G]]}),t}()}}]);