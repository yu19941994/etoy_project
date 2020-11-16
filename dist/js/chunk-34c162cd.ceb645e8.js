(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c162cd"],{"2cf6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container my-md-5"},[a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-md-6"},[a("ul",{staticClass:"list-group list-group-flush checkoutdetail"},[a("li",{staticClass:"list-group-item bg-third h4 text-secondary"},[t._v("購物清單")]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"d-flex table mb-0"},[a("table",{staticClass:"table mb-0 table-borderless"},[a("tbody",t._l(t.carts.carts,(function(e){return a("tr",{key:e.id},[a("td",{on:{click:function(a){return a.preventDefault(),t.removeCartItem(e.id)}}},[a("i",{staticClass:"fas fa-trash-alt pr-1"})]),a("td",[t._v(t._s(e.product.title))]),a("td",[t._v(t._s(e.qty)),a("span",[t._v(t._s(e.product.unit))])]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])})),0)])])]),a("li",{staticClass:"list-group-item"},[a("p",{staticClass:"text-primary text-right h5"},[a("b",[t._v("總計:"+t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?a("p",{staticClass:"text-fifth text-right h5"},[a("b",[t._v("折扣價:"+t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),a("div",{staticClass:"checkoutdetail my-3 p-2"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入優惠券代碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text bg-third text-muted",attrs:{id:"basic-addon2"},on:{click:function(e){return e.preventDefault(),t.addCoupon(e)}}},[t._v("使用優惠券")])])])])]),a("ValidationObserver",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[a("form",{staticClass:"bg-primary px-4 py-4 text-forth",on:{submit:function(e){return e.preventDefault(),r(t.createOrder)}}},[a("p",{staticClass:"h1"},[t._v("資料")]),a("div",{staticClass:"row "},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"username"}},[t._v("姓名")]),a("ValidationProvider",{attrs:{rules:"required",name:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":r[0]},attrs:{type:"text",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"usertel"}},[t._v("電話")]),a("ValidationProvider",{attrs:{rules:"required|numeric|min:8|max:10",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":r[0]},attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":r[0]},attrs:{type:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件地址")]),a("ValidationProvider",{attrs:{rules:"required",name:"address"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":r[0]},attrs:{type:"text",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("備註（選填）")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"btn-group w-100 mt-2",attrs:{role:"group"}},[a("router-link",{staticClass:"btn btn-forth btn-checkout rounded-0 text-primary btn-lg",attrs:{to:"/customerorders",type:"button"}},[a("b",[t._v("返回購物")])]),a("button",{staticClass:"btn btn-forth btn-checkout rounded-0 text-primary btn-lg",attrs:{type:"submit"}},[a("b",[t._v("金流付款")])])],1)])]}}])})],1)])])},s=[],o=(a("99af"),{data:function(){return{carts:{carts:[]},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("yu19941994","/cart");t.$http.get(e).then((function(e){t.carts=e.data.data}))},removeCartItem:function(t){var e=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("yu19941994","/cart/").concat(t);e.$http.delete(a).then((function(t){e.getCart()}))},addCoupon:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("yu19941994","/coupon"),a={code:t.coupon_code};t.$http.post(e,{data:a}).then((function(e){t.getCart()}))},createOrder:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("yu19941994","/order"),a=t.form;t.$http.post(e,{data:a}).then((function(e){e.data.success&&t.$router.push("/pay/".concat(e.data.orderId))}))}},created:function(){this.getCart()}}),i=o,n=a("2877"),l=Object(n["a"])(i,r,s,!1,null,null,null);e["default"]=l.exports},"99af":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),m=a("b622"),p=a("2d00"),f=m("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=d("concat"),_=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},b=!h||!C;r({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,r,s,o,i=n(this),d=u(i,0),m=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],_(o)){if(s=l(o.length),m+s>v)throw TypeError(g);for(a=0;a<s;a++,m++)a in o&&c(d,m,o[a])}else{if(m>=v)throw TypeError(g);c(d,m++,o)}return d.length=m,d}})}}]);
//# sourceMappingURL=chunk-34c162cd.ceb645e8.js.map