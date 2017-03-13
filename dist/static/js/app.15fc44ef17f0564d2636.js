webpackJsonp([0,2],[,,function(e,t,a){var i=a(1)(a(4),a(8),null,null);e.exports=i.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(0);t.default={name:"toggle-button",props:{value:{type:Boolean,required:!0},onChanged:{type:Function,required:!0},trueText:{type:String},falseText:{type:String},disabled:{required:!1,default:function(){return!1}},animate:{required:!1,default:function(){return!0}}},data:function(){return{localValue:this.value,localAnimate:this.animate}},watch:{trueText:function(e){this.$nextTick(function(){this.width()})},falseText:function(e){this.$nextTick(function(){this.width()})},animate:function(e){this.localAnimate=e}},computed:{css:function(){return{"bootstrap-switch":!0,"bootstrap-switch-wrapper":!1,"bootstrap-switch-animate":this.localAnimate,"bootstrap-switch-disabled":this.disabled}}},methods:{toggle:function(){this.disabled||(this.localValue=!this.localValue,this.localValue?this.$refs.container.style.marginLeft=0:this.$refs.container.style.marginLeft=-1*this.$refs.on.offsetWidth+"px",this.onChanged(this.localValue))},width:function(){var e=this.localAnimate;this.localAnimate=!1,this.$refs.on.style.width=0,this.$refs.label.style.width=0,this.$refs.off.style.width=0;var t=Math.round(Math.max(this.$refs.on.offsetWidth,this.$refs.off.offsetWidth));this.$refs.on.style.width=t+"px",this.$refs.label.style.width=t+"px",this.$refs.off.style.width=t+"px";var a=0;a=this.$refs.label.offsetWidth<t?t:this.$refs.label.offsetWidth,this.localValue?this.$refs.container.style.marginLeft=0:this.$refs.container.style.marginLeft=-1*a+"px",this.$refs.label.style.width=a+"px",this.$refs.container.style.width=2*t+a+"px",this.$refs.wrapper.style.width=t+a+"px",setTimeout(function(){this.localAnimate=e}.bind(this),.5)}},mounted:function(){this.width()}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(a(0),a(6)),s=a.n(i);t.default={name:"app",components:{ToggleButton:s.a},data:function(){return{value:!0,trueText:"ON",falseText:"OFF",disabled:!1,animate:!0}},watch:{value:function(){console.log(this.value)}},methods:{onChanged:function(e){this.value=e}}}},function(e,t){},function(e,t,a){a(5);var i=a(1)(a(3),a(7),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"wrapper",class:e.css,on:{click:e.toggle}},[a("div",{ref:"container",staticClass:"bootstrap-switch-container"},[a("span",{ref:"on",staticClass:"bootstrap-switch-handle-on bootstrap-switch-primary",domProps:{textContent:e._s(e.trueText)}}),e._v(" "),a("span",{ref:"label",staticClass:"bootstrap-switch-label"},[e._v(" ")]),e._v(" "),a("span",{ref:"off",staticClass:"bootstrap-switch-handle-off bootstrap-switch-default",domProps:{textContent:e._s(e.falseText)}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:"switch-state",type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{__c:function(t){var a=e.value,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=e._i(a,n);s?r<0&&(e.value=a.concat(n)):r>-1&&(e.value=a.slice(0,r).concat(a.slice(r+1)))}else e.value=s}}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("toggle-button",{attrs:{value:e.value,"true-text":e.trueText,"false-text":e.falseText,"on-changed":e.onChanged,disabled:e.disabled,animate:e.animate}}),e._v(" "),a("div",[e._v("\n    True text: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.trueText,expression:"trueText"}],attrs:{type:"text"},domProps:{value:e.trueText},on:{input:function(t){t.target.composing||(e.trueText=t.target.value)}}})]),e._v(" "),a("div",[e._v("\n    False text:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.falseText,expression:"falseText"}],attrs:{type:"text"},domProps:{value:e.falseText},on:{input:function(t){t.target.composing||(e.falseText=t.target.value)}}})]),e._v(" "),a("div",[e._v("\n    Disabled:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.disabled,expression:"disabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.disabled)?e._i(e.disabled,null)>-1:e.disabled},on:{__c:function(t){var a=e.disabled,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=e._i(a,n);s?r<0&&(e.disabled=a.concat(n)):r>-1&&(e.disabled=a.slice(0,r).concat(a.slice(r+1)))}else e.disabled=s}}})]),e._v(" "),a("div",[e._v("\n    Animate:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.animate,expression:"animate"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.animate)?e._i(e.animate,null)>-1:e.animate},on:{__c:function(t){var a=e.animate,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=e._i(a,n);s?r<0&&(e.animate=a.concat(n)):r>-1&&(e.animate=a.slice(0,r).concat(a.slice(r+1)))}else e.animate=s}}})])],1)},staticRenderFns:[]}},,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),s=a(2),n=a.n(s);i.a.config.productionTip=!1,new i.a({el:"#app",render:function(e){return e(n.a)}})}],[11]);
//# sourceMappingURL=app.15fc44ef17f0564d2636.js.map