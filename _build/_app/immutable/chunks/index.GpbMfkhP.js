import{O as $,y as _,a0 as m,h as S,d as b,a1 as E,N as w,a2 as O,a3 as x,a4 as C,a5 as I,a6 as p,a7 as N,a8 as j,a9 as B,aa as L,ab as M}from"./scheduler.V0TdfqMU.js";const o=new Set;let d;function D(){d={r:0,c:[],p:d}}function F(){d.r||$(d.c),d=d.p}function P(t,e){t&&t.i&&(o.delete(t),t.i(e))}function G(t,e,n,a){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function H(t,e,n){const a=t.$$.props[e];a!==void 0&&(t.$$.bound[a]=n,n(t.$$.ctx[a]))}function J(t){t&&t.c()}function K(t,e){t&&t.l(e)}function R(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(N).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function U(t,e){const n=t.$$;n.fragment!==null&&(C(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){t.$$.dirty[0]===-1&&(j.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,a,i,f,c=null,v=[-1]){const u=I;p(t);const s=t.$$={fragment:null,ctx:[],props:f,update:_,not_equal:i,bound:m(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:m(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,l,...g)=>{const y=g.length?g[0]:l;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&V(t,r)),l}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){L();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&P(t.$$.fragment),R(t,e.target,e.anchor),M(),E()}p(u)}class T{$$=void 0;$$set=void 0;$destroy(){U(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(z);export{T as S,P as a,J as b,F as c,K as d,U as e,H as f,D as g,Q as i,R as m,G as t};
