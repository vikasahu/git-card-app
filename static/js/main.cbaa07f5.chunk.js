(this["webpackJsonpgit-card-app"]=this["webpackJsonpgit-card-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(11),c=a.n(s),o=(a(17),a(18),a(9)),u=a(1),i=a.n(u),l=a(8),m=a(7),p=a(6),d=a(2),h=a(3),f=a(5),v=a(4),g=(a(20),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleChange=function(e){r.setState({value:e.target.value})},r.handleSubmit=function(e){e.preventDefault(),r.state.value&&(r.props.setCurrentUserList(r.state.value),r.setState({value:""}))},r.state={value:""},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"gca-search_wrapper"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"gca-search_form",autoComplete:"off"},n.a.createElement("div",{className:"gca-search_form_label"},n.a.createElement("input",{className:"gca-search_form_input",type:"text",name:"name",target:"_blank",value:this.state.value,placeholder:"Enter Github Username...",onChange:function(t){return e.handleChange(t)}}),n.a.createElement("img",{src:"./images/icons8-search.svg",className:"gca-search_form_img_btn",alt:"img",onClick:function(t){return e.handleSubmit(t)}}))))}}]),a}(r.Component)),_=(a(21),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.user,a=t.avatar_url,r=t.login,s=t.score,c=t.id;return n.a.createElement("div",{className:"gca-card",onClick:function(){return e.props.handleUserDetail(e.props.user.login,!0)}},n.a.createElement("div",{className:"gca-card_avatar"},n.a.createElement("img",{className:"gca-card_avatar_img",src:a,alt:"img"})),n.a.createElement("div",{className:"gca-card_name"},"@",r),n.a.createElement("div",{className:"as"},"Id: ",c," "),n.a.createElement("div",{className:"gca-card_score"},"Score: ",s))}}]),a}(r.Component)),E=(a(22),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.currentUser,a=t.public_repos,r=t.following,s=t.followers,c=t.created_at,o=t.site_admin,u=t.html_url,i=t.name,l=t.login,m=t.avatar_url;return n.a.createElement("div",null,n.a.createElement("div",{className:"gca-overlay"}),n.a.createElement("div",{className:"gca-popup"},n.a.createElement("div",{className:"gca-popup_img"}),o?n.a.createElement("div",{className:"gca-popup_admin"},"ADMIN"):null,n.a.createElement("div",{className:"gca-popup_cont_wrap"},n.a.createElement("div",{className:"gca-popup_cont_wrap_tr"},n.a.createElement("div",{className:"gca-popup_cont"},n.a.createElement("img",{className:"gca-popup_cont_img",src:m,alt:"img"}),n.a.createElement("div",{className:"gca-popup_cont_name"}," ",i),n.a.createElement("div",{className:"gca-popup_cont_username"},"@",l)),n.a.createElement("div",{className:"gca-popup_info_wrap"},n.a.createElement("div",{className:"gca-popup_info_created"},"Created at ",c),n.a.createElement("div",{className:"gca-popup_info"},n.a.createElement("div",{className:"gca-popup_info_item"},n.a.createElement("div",{className:"gca-popup_info_count"},a),n.a.createElement("div",{className:"gca-popup_info_head"},n.a.createElement("a",{href:u+"?tab=repositories",target:"_blank",rel:"noopener noreferrer"},"Repo"))),n.a.createElement("div",{className:"gca-popup_info_item gca-popup_info_item_c"},n.a.createElement("div",{className:"gca-popup_info_count"},s),n.a.createElement("div",{className:"gca-popup_info_head"},n.a.createElement("a",{href:u+"/followers",target:"_blank",rel:"noopener noreferrer"},"Followers"))),n.a.createElement("div",{className:"gca-popup_info_item"},n.a.createElement("div",{className:"gca-popup_info_count"},r),n.a.createElement("div",{className:"gca-popup_info_head"},n.a.createElement("a",{href:u+"/following",target:"_blank",rel:"noopener noreferrer"},"Following"))))))),n.a.createElement("span",{className:"gca-popup_close",onClick:function(){return e.props.handlePopup(!1)}},"X")))}}]),a}(r.Component)),w=(a(23),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleDropDown=function(){e.setState({showDropdown:!e.state.showDropdown})},e.getCurrentSort=function(){return e.props.sortItems.listItems.find((function(t){return t.id===e.props.sortItems.currentSortId})).name},e.handleSort=function(t){t!==e.props.sortItems.currentSortId&&e.props.sortHandler(t),e.handleDropDown()},e.state={openListItem:!1,showDropdown:!1},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"gca-dropdown_wrapper gca-card_list_items"},n.a.createElement("div",{className:"gca-dropdown_head",onClick:function(){return e.handleDropDown()}},this.getCurrentSort()),this.state.showDropdown?n.a.createElement("div",{className:"gca-dropdown_list"},this.props.sortItems.listItems.map((function(t){return n.a.createElement("div",{className:"gca-dropdown_listItems",onClick:function(){return e.handleSort(t.id)},key:t.id},t.name)}))):null)}}]),a}(r.Component)),b={fetchCurrentUser:function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=(a(24),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).fetchUserDetails=function(){var e=Object(p.a)(i.a.mark((function e(t){var a,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.getCurrentUserDetails(t)){e.next=11;break}return e.next=4,b.fetchCurrentUser(t);case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,r.setState((function(e){return{userDetails:[].concat(Object(o.a)(e.userDetails),[s]),currentUser:Object(m.a)({},s)}})),e.next=12;break;case 11:r.setState({currentUser:a});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleUserDetail=function(){var e=Object(p.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.fetchUserDetails(t);case 2:return r.handlePopup(a),e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.handlePopup=function(e){r.setState({showPopup:e})},r.state={currentUserName:r.props.userList,userDetails:[],currentUser:{},showPopup:!1},r}return Object(h.a)(a,[{key:"getCurrentUserDetails",value:function(e){return this.state.userDetails.find((function(t){return t.login===e}))}},{key:"render",value:function(){var e=this,t=this.state.currentUserName.userList.length;return n.a.createElement("div",null,this.state.currentUserName.userList&&t?n.a.createElement("div",{className:"gca-card_list_wrapper"},n.a.createElement("div",{className:"gca-card_list_drop_card_wrap"},n.a.createElement("div",{className:"gca-card_list_wrapper_details"},n.a.createElement("div",{className:"gca-card_list_wrapper_result gca-card_list_items"},"Search Results(",30===t?"30+":t,")"),n.a.createElement("div",{className:"gca-card_list_wrapper_username gca-card_list_items"},"Username Searched -"," ",n.a.createElement("strong",null,this.state.currentUserName.name)),n.a.createElement(w,{sortItems:this.props.sortItems,sortHandler:function(t){return e.props.sortHandler(t)}})),n.a.createElement("div",{className:"gca-card_list"},this.state.currentUserName.userList.map((function(t){return n.a.createElement(_,{user:t,key:t.id,handleUserDetail:function(t,a){return e.handleUserDetail(t,a)}})})))),this.state.showPopup?n.a.createElement(E,{currentUser:this.state.currentUser,handlePopup:function(t){return e.handlePopup(t)}}):null):null)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.userList!==t.currentUserName?{currentUserName:e.userList}:null}}]),a}(r.Component)),j=(a(25),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"gca-loader"},n.a.createElement("img",{src:"./images/2.svg",alt:"img"}))}}]),a}(r.Component));a(26);var O=function(){return n.a.createElement("div",{className:"gca-empty-wrapper"},n.a.createElement("img",{src:"./images/no_results_found.png",className:"gca-empty-result",alt:"no_result_found"}))},U={fetchAllUser:function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/users?q=".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).fetchAllUsers=function(){var t=Object(p.a)(i.a.mark((function t(a){var r,n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({showLoader:!0,showEmpty:!1}),t.next=4,U.fetchAllUser(a);case 4:return r=t.sent,t.next=7,r.json();case 7:if(n=t.sent,s=!1,n.items.length){t.next=15;break}return s=!0,e.setState((function(){return{showLoader:!1,showEmpty:s}})),t.abrupt("return");case 15:e.setState((function(e){return{userList:Object(m.a)(Object(l.a)({},a,n.items),e.userList),showLoader:!1,showEmpty:s}}));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),e.setState((function(){return{showLoader:!1,showEmpty:!1}}));case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}(),e.setCurrentUserList=function(){var t=Object(p.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.userList[a]){t.next=9;break}return t.next=4,e.fetchAllUsers(a);case 4:return r=e.state.userList[a],e.setState({currentUserName:{name:a,userList:r}}),t.abrupt("return");case 9:e.setState({currentUserName:{name:a,userList:r},showEmpty:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.sortHandler=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=JSON.parse(JSON.stringify(e.state.currentUserName));switch(t){case 1:a.userList.sort((function(e,t){return t.id-e.id})),e.setState((function(e){return{currentUserName:a,sortItems:Object(m.a)({},e.sortItems,{currentSortId:t})}}));break;case 2:a.userList.sort((function(e,t){return e.id-t.id})),e.setState((function(e){return{currentUserName:a,sortItems:Object(m.a)({},e.sortItems,{currentSortId:t})}}));break;default:e.setState((function(r){return{currentUserName:{name:a.name,userList:Object(o.a)(e.state.userList[a.name])},sortItems:Object(m.a)({},r.sortItems,{currentSortId:t})}}))}},e.state={userList:{},currentUserName:[],showLoader:!1,showEmpty:!1,sortItems:{title:"Sort By",currentSortId:0,listItems:[{name:"Relevance",id:0},{name:"High to Low Score",id:1},{name:"Low to High Score",id:2}]}},e}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{setCurrentUserList:this.setCurrentUserList}),this.state.showLoader?n.a.createElement(j,null):null,this.state.currentUserName&&!this.state.showLoader&&this.state.currentUserName.userList&&this.state.currentUserName.userList.length>0?n.a.createElement(N,{userList:this.state.currentUserName,sortHandler:this.sortHandler,sortItems:this.state.sortItems}):null,this.state.showEmpty?n.a.createElement(O,null):null)}}]),a}(r.Component);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.cbaa07f5.chunk.js.map