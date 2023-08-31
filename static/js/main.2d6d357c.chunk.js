(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{12:function(e,a,c){},14:function(e,a,c){"use strict";c.r(a);c(1);var t=c(4),s=c.n(t),r=(c(10),c(11),c(3)),i=(c(12),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),n=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],l=c(5),d=c.n(l),o=c(0),j=function(e){var a=e.product;return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:a.id}),Object(o.jsx)("td",{"data-cy":"ProductName",children:a.name}),Object(o.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(a.categoryIcon," - ").concat(a.categoryTitle)}),Object(o.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===a.userSex,"has-text-danger":"f"===a.userSex}),children:a.userName})]})},h=function(e){var a=e.products;return Object(o.jsx)("tbody",{children:a.map((function(e){return Object(o.jsx)(j,{product:e},e.id)}))})},b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=n.find((function(a){var c=a.id;return e.categoryId===c}))||null,c=i.find((function(e){return e.id===a.ownerId}))||null;return Object(r.a)(Object(r.a)({},e),{},{categoryIcon:a.icon,categoryTitle:a.title,categoryId:a.id,userName:c.name,userId:c.id,userSex:c.sex})})),x=function(){return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 1"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"is-active",children:"User 2"}),Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 3"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(o.jsx)("span",{className:"icon is-right",children:Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(o.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(o.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)(h,{products:b})]})]})]})})};s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2d6d357c.chunk.js.map