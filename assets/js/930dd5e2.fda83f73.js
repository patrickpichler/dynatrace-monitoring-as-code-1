(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[8791],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2557:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={sidebar_position:3},l={unversionedId:"commands/experimental-new-cli",id:"version-1.5.2/commands/experimental-new-cli",isDocsHomePage:!1,title:"Experimental New CLI",description:"Starting with version 1.2.0 a new experimental CLI is available. The plan is that it will gradually become the new default in the next few releases.",source:"@site/versioned_docs/version-1.5.2/commands/experimental-new-cli.md",sourceDirName:"commands",slug:"/commands/experimental-new-cli",permalink:"/dynatrace-monitoring-as-code/1.5.2/commands/experimental-new-cli",editUrl:"https://github.com/cruzancaramele/dynatrace-monitoring-as-code/edit/main/versioned_docs/version-1.5.2/commands/experimental-new-cli.md",version:"1.5.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-1.5.2/tutorialSidebar",previous:{title:"Deploying Projects",permalink:"/dynatrace-monitoring-as-code/1.5.2/commands/deploying-projects"},next:{title:"Downloading Configuration",permalink:"/dynatrace-monitoring-as-code/1.5.2/commands/downloading-configuration"}},c=[{value:"Deploy",id:"deploy",children:[]},{value:"Download",id:"download",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting with version 1.2.0 a new experimental CLI is available. The plan is that it will gradually become the new default in the next few releases.\nTo activate the new experimental cli simply set an the env variable NEW_CLI to 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n$ NEW_CLI=1 monaco\n\n")),(0,a.kt)("p",null,"By running the above example you will notice that instead of being flag based, the new cli is based around commands.\nAs of right now the following commands are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deploy"),(0,a.kt)("li",{parentName:"ul"},"download")),(0,a.kt)("h3",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"This command is basically doing what the old tool did. It is used to deploy a specified config to a dynatrace environment. The flags to things like the environments files are mostly the same."),(0,a.kt)("h3",{id:"download"},"Download"),(0,a.kt)("p",null,"This feature allows you to download the configuration from a Dynatrace tenant as Monaco files. You can use this feature to avoid starting from scratch when using Monaco."),(0,a.kt)("p",null,"(it is also possible to revert back to the old CLI from the new CLI)"))}u.isMDXComponent=!0}}]);