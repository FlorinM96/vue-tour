(function(t){function e(e){for(var n,r,a=e[0],u=e[1],c=e[2],p=0,h=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,a=1;a<s.length;a++){var u=s[a];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-tour/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0f89":function(t,e,s){},"133a":function(t,e,s){"use strict";var n=s("0f89"),i=s.n(n);i.a},"22ef":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section section-hero bg-gray"},[n("div",{staticClass:"grid-hero container grid-lg text-center",attrs:{id:"overview"}},[n("div",{staticClass:"docs-brand"},[n("a",{staticClass:"docs-logo",attrs:{href:"#",id:"v-step-0"},on:{click:function(e){return t.$tours["myTour"].start()}}},[n("img",{attrs:{src:s("cf05"),alt:"Vue Tour"}}),n("h2",[t._v("VUE TOUR")])])]),t._m(0),n("h1",[t._v("vue-tour")]),t._m(1),t._m(2),t._m(3),n("p",{staticClass:"text-gray"},[t._v("Latest version: "),n("span",{staticClass:"version"},[t._v(t._s(t.version))])]),t._m(4)])]),n("div",{staticClass:"section section-features bg-primary text-light text-center"},[n("div",{staticClass:"container grid-lg"},[n("h2",[t._v("Introduction")]),n("div",{staticClass:"columns"},[t._m(5),n("div",{staticClass:"column col-10 col-sm-12 col-mx-auto"},[n("my-tour")],1),t._m(6)])])]),t._m(7),n("footer",{staticClass:"section section-footer"},[n("div",{staticClass:"grid-footer container grid-lg",attrs:{id:"copyright"}},[n("p",[n("a",{attrs:{href:"https://github.com/pulsardev/vue-tour/wiki",target:"_blank"}},[t._v("Documents")]),t._v(" | "),n("a",{attrs:{href:"https://github.com/pulsardev/vue-tour",target:"_blank"}},[t._v("GitHub")]),t._v(" | "),n("a",{attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8",target:"_blank"}},[t._v("PayPal Donate")]),t._v(" | Version "),n("span",{staticClass:"version"},[t._v(t._s(t.version))])]),t._m(8)])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"docs-brand docs-brand--pulsar"},[s("a",{staticClass:"docs-logo bg-dark",attrs:{href:"https://pulsar.surge.sh/",target:"_blank",id:"v-step-0-1"}},[s("h2",{staticClass:"text-light"},[t._v("PULSAR")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[t._v("a "),s("u",[t._v("Lightweight")]),t._v(", "),s("u",[t._v("Simple")]),t._v(" and "),s("u",[t._v("Customizable")]),t._v(" tour plugin for use with Vue.js")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{staticClass:"btn btn-primary btn-lg mr-2",attrs:{href:"https://github.com/pulsardev/vue-tour/wiki"}},[t._v("Docs")]),s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"https://github.com/pulsardev/vue-tour",target:"_blank",rel:"noopener"}},[t._v("GitHub")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{staticClass:"github-button",attrs:{href:"https://github.com/pulsardev/vue-tour","data-size":"large","data-show-count":"true","aria-label":"Star pulsardev/vue-tour on GitHub"}},[t._v("Star")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Lightweight")])]),s("div",{staticClass:"card-body"},[t._v(" Vue Tour is composed of just two Vue components and a very small JavaScript file. ")])])]),s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center",attrs:{id:"v-step-1"}},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Simple")])]),s("div",{staticClass:"card-body"},[t._v(" Add an array of steps in your component and a 'v-tour' component in your template and you're good to go! ")])])]),s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Customizable")])]),s("div",{staticClass:"card-body"},[t._v(" You can change the DOM of every steps independently, use your own classes and even add custom animations. ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column col-10 col-sm-12 col-mx-auto text-left"},[s("p",{staticClass:"text-secondary"},[t._v(" Vue Tour provides a quick and easy way to guide your users through your application. You can control the tour on this page by clicking the following buttons. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column col-10 col-sm-12 col-mx-auto"},[s("a",{staticClass:"btn btn-lg",attrs:{href:"https://github.com/pulsardev/vue-tour",id:"v-step-2"}},[t._v("Install Vue Tour")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-updates bg-gray"},[s("div",{staticClass:"container grid-lg"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-6 col-xs-12"},[s("div",{staticClass:"card",attrs:{id:"v-step-3"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title h6"},[t._v("PayPal Donate")])]),s("div",{staticClass:"card-body"},[t._v(" Vue Tour is completely free to use. If you enjoy it, please consider donating for the further development. ♥ ")]),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8",target:"_blank"}},[t._v("Donate")])])])]),s("div",{staticClass:"column col-6 col-xs-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title h6"},[t._v("Vue Tour Docs")])]),s("div",{staticClass:"card-body"},[t._v(" Go to our documentation if you want to use Vue Tour in a more advanced way. ")]),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"https://github.com/pulsardev/vue-tour/wiki"}},[t._v("Explore")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Built with "),s("span",{staticClass:"text-error"},[t._v("♥")]),t._v(" by "),s("a",{attrs:{href:"https://pulsar.surge.sh",target:"_blank"}},[t._v("Pulsar")]),t._v(". Licensed under the "),s("a",{attrs:{href:"https://github.com/pulsardev/vue-tour/blob/master/LICENSE",target:"_blank"}},[t._v("MIT License")]),t._v(". ")])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-lg mr-2",on:{click:function(e){return t.$tours["myTour"].start()}}},[t._v("Start the tour")]),s("button",{staticClass:"btn btn-lg mr-2",on:{click:t.nextStep}},[t._v("Next step")]),s("button",{staticClass:"btn btn-lg",on:{click:t.showLastStep}},[t._v("Show last step")]),s("v-tour",{attrs:{name:"myTour",steps:t.steps,callbacks:t.callbacks,options:{highlight:!0,debug:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[s("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(n,i){return e.currentStep===i?s("v-step",{key:i,attrs:{step:n,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,skip:e.skip,finish:e.finish,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels,highlight:e.highlight,debug:e.debug}},[2===e.currentStep?[s("div",{attrs:{slot:"actions"},slot:"actions"},[s("button",{staticClass:"btn btn-primary mr-2",on:{click:e.previousStep}},[t._v("Previous step")]),s("button",{staticClass:"btn btn-primary",on:{click:e.nextStep}},[t._v("Next step")])])]:t._e()],2):t._e()})),1)]}}])})],1)},a=[],u={name:"my-tour",data:function(){return{steps:[{target:"#v-step-0",content:"Discover <strong>Vue Tour</strong>!",params:{highlight:!1}},{target:"#v-step-0-1",content:'Created by <a href="https://github.com/pulsardev" target="_blank" rel="noopener">Pulsar</a> and its <a href="https://github.com/pulsardev/vue-tour/graphs/contributors" target="_blank" rel="noopener">contributors</a>.'},{target:"#v-step-1",header:{title:"Vue Tour"},content:"An awesome plugin made with Vue.js!"},{target:"#v-step-2",content:"Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",params:{placement:"top"}},{target:"#v-step-3",params:{placement:"left"}}],callbacks:{onPreviousStep:this.myCustomPreviousStepCallback,onNextStep:this.myCustomNextStepCallback,onFinish:this.myCustomOnFinishCallback,onSkip:this.myCustomOnSkipCallback}}},mounted:function(){this.$tours["myTour"].start(),this.callbacks.onStop=function(){document.querySelector("#v-step-0").scrollIntoView({behavior:"smooth"})}},methods:{nextStep:function(){this.$tours["myTour"].nextStep()},showLastStep:function(){this.$tours["myTour"].currentStep=this.steps.length-1},myCustomPreviousStepCallback:function(t){console.log("[Vue Tour] A custom previousStep callback has been called on step "+(t+1))},myCustomNextStepCallback:function(t){console.log("[Vue Tour] A custom nextStep callback has been called on step "+(t+1)),1===t&&console.log("[Vue Tour] A custom nextStep callback has been called from step 2 to step 3")},myCustomOnSkipCallback:function(){console.log("[Vue Tour] Tour has been skipped")},myCustomOnFinishCallback:function(){console.log("[Vue Tour] Tour has been finished")}}},c=u,l=(s("133a"),s("2877")),p=Object(l["a"])(c,r,a,!1,null,null,null),h=p.exports,d=s("d76e"),v=d.version,b={name:"app",components:{MyTour:h},data:function(){return{version:v}}},f=b,m=(s("5c0b"),Object(l["a"])(f,i,o,!1,null,null,null)),g=m.exports,_=(s("3d77"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-tour"},[t._t("default",[t.steps[t.currentStep]?s("v-step",{key:t.currentStep,attrs:{step:t.steps[t.currentStep],"previous-step":t.previousStep,"next-step":t.nextStep,stop:t.stop,skip:t.skip,finish:t.finish,"is-first":t.isFirst,"is-last":t.isLast,labels:t.customOptions.labels,"enabled-buttons":t.customOptions.enabledButtons,highlight:t.customOptions.highlight,"stop-on-fail":t.customOptions.stopOnTargetNotFound,debug:t.customOptions.debug},on:{targetNotFound:function(e){return t.$emit("targetNotFound",e)}}}):t._e()],{currentStep:t.currentStep,steps:t.steps,previousStep:t.previousStep,nextStep:t.nextStep,stop:t.stop,skip:t.skip,finish:t.finish,isFirst:t.isFirst,isLast:t.isLast,labels:t.customOptions.labels,enabledButtons:t.customOptions.enabledButtons,highlight:t.customOptions.highlight,debug:t.customOptions.debug})],2)}),y=[],S=(s("58bc"),s("83bc"),s("544d"),s("c134"),s("3eea"),s("2aaf"),s("2a72"),s("ade3")),C={onStart:function(){},onPreviousStep:function(t){},onNextStep:function(t){},onStop:function(){},onSkip:function(){},onFinish:function(){}},O={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,useKeyboardNavigation:!0,debug:!1},k={CLASSES:{ACTIVE:"v-tour--active",TARGET_HIGHLIGHTED:"v-tour__target--highlighted",TARGET_RELATIVE:"v-tour__target--relative"},TRANSITION:"box-shadow 0s ease-in-out 0s",useKeyboardNavigation:!0,startTimeout:0,stopOnTargetNotFound:!0},T={enableScrolling:!0,highlight:O.highlight,enabledButtons:O.enabledButtons,modifiers:{arrow:{element:".v-step__arrow"}},placement:"bottom"},w={ARROW_RIGHT:39,ARROW_LEFT:37,ESCAPE:27};function E(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?E(Object(s),!0).forEach((function(e){Object(S["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var j={name:"v-tour",props:{steps:{type:Array,default:function(){return[]}},name:{type:String},options:{type:Object,default:function(){return O}},callbacks:{type:Object,default:function(){return C}}},data:function(){return{currentStep:-1}},mounted:function(){this.$tours[this.name]=this,this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup)},beforeDestroy:function(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions:function(){return x({},O,{},this.options)},customCallbacks:function(){return x({},C,{},this.callbacks)},isRunning:function(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst:function(){return 0===this.currentStep},isLast:function(){return this.currentStep===this.steps.length-1},numberOfSteps:function(){return this.steps.length}},methods:{start:function(t){var e=this;setTimeout((function(){e.customCallbacks.onStart(),e.currentStep="undefined"!==typeof t?parseInt(t,10):0}),this.customOptions.startTimeout)},previousStep:function(){this.currentStep>0&&(this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep--)},nextStep:function(){this.currentStep<this.numberOfSteps-1&&-1!==this.currentStep&&(this.customCallbacks.onNextStep(this.currentStep),this.currentStep++)},stop:function(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip:function(){this.customCallbacks.onSkip(),this.stop()},finish:function(){this.customCallbacks.onFinish(),this.stop()},handleKeyup:function(t){switch(this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t),t.keyCode){case w.ARROW_RIGHT:this.nextStep();break;case w.ARROW_LEFT:this.previousStep();break;case w.ESCAPE:this.stop();break}}}},P=j,L=(s("f14b"),Object(l["a"])(P,_,y,!1,null,null,null)),A=L.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"v-step-"+t.hash,staticClass:"v-step",attrs:{id:"v-step-"+t.hash}},[t._t("header",[t.step.header?s("div",{staticClass:"v-step__header"},[t.step.header.title?s("div",{domProps:{innerHTML:t._s(t.step.header.title)}}):t._e()]):t._e()]),t._t("content",[s("div",{staticClass:"v-step__content"},[t.step.content?s("div",{domProps:{innerHTML:t._s(t.step.content)}}):s("div",[t._v("This is a demo step! The id of this step is "+t._s(t.hash)+" and it targets "+t._s(t.step.target)+".")])])]),t._t("actions",[s("div",{staticClass:"v-step__buttons"},[!t.isLast&&t.isButtonEnabled("buttonSkip")?s("button",{staticClass:"v-step__button v-step__button-skip",on:{click:function(e){return e.preventDefault(),t.skip(e)}}},[t._v(t._s(t.labels.buttonSkip))]):t._e(),!t.isFirst&&t.isButtonEnabled("buttonPrevious")?s("button",{staticClass:"v-step__button v-step__button-previous",on:{click:function(e){return e.preventDefault(),t.previousStep(e)}}},[t._v(t._s(t.labels.buttonPrevious))]):t._e(),!t.isLast&&t.isButtonEnabled("buttonNext")?s("button",{staticClass:"v-step__button v-step__button-next",on:{click:function(e){return e.preventDefault(),t.nextStep(e)}}},[t._v(t._s(t.labels.buttonNext))]):t._e(),t.isLast&&t.isButtonEnabled("buttonStop")?s("button",{staticClass:"v-step__button v-step__button-stop",on:{click:function(e){return e.preventDefault(),t.finish(e)}}},[t._v(t._s(t.labels.buttonStop))]):t._e()])]),s("div",{staticClass:"v-step__arrow",class:{"v-step__arrow--dark":t.step.header&&t.step.header.title}})],2)},I=[],N=(s("3a9a"),s("c69d"),s("8ba3"),s("4ce8"),s("45c4"),s("b5d0")),D=s("75ed"),F=s("91da"),R=s.n(F);function H(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function $(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?H(Object(s),!0).forEach((function(e){Object(S["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var B={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean}},data:function(){return{hash:R()(this.step.target),targetElement:document.querySelector(this.step.target)}},computed:{params:function(){return $({},T,{},{highlight:this.highlight},{},{enabledButtons:Object.assign({},this.enabledButtons)},{},this.step.params)}},methods:{createStep:function(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.targetElement?(this.enableScrolling(),this.createHighlight(),new N["a"](this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail&&this.stop())},enableScrolling:function(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){var t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};Object(D["a"])(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled:function(){return this.debug&&console.log("[Vue Tour] Highlight is ".concat(this.params.highlight?"enabled":"disabled",' for .v-step[id="').concat(this.hash,'"]')),this.params.highlight},createHighlight:function(){if(this.isHighlightEnabled()){document.body.classList.add(k.CLASSES.ACTIVE);var t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition="".concat(t,", ").concat(k.TRANSITION)),this.targetElement.classList.add(k.CLASSES.TARGET_HIGHLIGHTED),this.targetElement.style.position||this.targetElement.classList.add(k.CLASSES.TARGET_RELATIVE)}else document.body.classList.remove(k.CLASSES.ACTIVE)},removeHighlight:function(){if(this.isHighlightEnabled()){var t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(k.CLASSES.TARGET_HIGHLIGHTED),this.targetElement.classList.remove(k.CLASSES.TARGET_RELATIVE),e.includes(k.TRANSITION)&&setTimeout((function(){t.style.transition=e.replace(", ".concat(k.TRANSITION),"")}),0)}},isButtonEnabled:function(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]}},mounted:function(){this.createStep()},destroyed:function(){this.removeHighlight()}},G=B,M=(s("ef78"),Object(l["a"])(G,V,I,!1,null,"e4396838",null)),K=M.exports,z={install:function(t,e){t.component(A.name,A),t.component(K.name,K),t.prototype.$tours={}}},q=z;"undefined"!==typeof window&&window.Vue&&window.Vue.use(z),n["a"].use(q),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),i=s.n(n);i.a},"9c0c":function(t,e,s){},b31a:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d76e:function(t){t.exports=JSON.parse('{"name":"vue-tour","version":"1.3.0","description":"Vue Tour is a lightweight, simple and customizable tour plugin for use with Vue.js. It provides a quick and easy way to guide your users through your application.","author":"Pulsar <pulsar.dev.team@gmail.com>","license":"MIT","main":"dist/vue-tour.common.js","module":"dist/vue-tour.umd.js","repository":{"type":"git","url":"https://github.com/pulsardev/vue-tour.git"},"keywords":["vue","tour"],"homepage":"https://pulsardev.github.io/vue-tour","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --target lib src/main.js","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint"},"dependencies":{"hash-sum":"^2.0.0","jump.js":"^1.0.2","popper.js":"^1.16.0","vue":"^2.6.10"},"devDependencies":{"@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.0","@vue/cli-plugin-unit-jest":"^4.1.0","@vue/cli-service":"^4.1.0","@vue/eslint-config-standard":"^4.0.0","@vue/test-utils":"1.0.0-beta.29","babel-eslint":"^10.0.3","core-js":"^3.4.3","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","sass":"^1.23.7","sass-loader":"^8.0.0","vue-template-compiler":"^2.6.10"}}')},ef78:function(t,e,s){"use strict";var n=s("b31a"),i=s.n(n);i.a},f14b:function(t,e,s){"use strict";var n=s("22ef"),i=s.n(n);i.a}});
//# sourceMappingURL=app.075aa7a4.js.map