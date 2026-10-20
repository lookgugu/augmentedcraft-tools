(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={colors:{id:`colors`,name:`Chroma & Contrast`,shortName:`Colors`,path:`/colors`,subdomain:`colors.augmentedcraft.com`,tagline:`Precision shade scales, harmony, gradients, WCAG 2.1 contrast, and CSS token export.`,category:`Design Systems & Accessibility`},ascii:{id:`ascii`,name:`Glyph Raster Studio`,shortName:`ASCII`,path:`/ascii`,subdomain:`ascii.augmentedcraft.com`,tagline:`Client-side image-to-ASCII rasterizer with custom charsets, color modes, and TXT/PNG/HTML export.`,category:`Typography & Raster Media`},data:{id:`data`,name:`Tabular CSV Inspector`,shortName:`CSV Data`,path:`/data`,subdomain:`data.augmentedcraft.com`,tagline:`RFC 4180 CSV parser, structural validation, missing/duplicate audit, and formula-safe export.`,category:`Data Hygiene & Security`},terrahour:{id:`terrahour`,name:`TerraHour World Clock`,shortName:`TerraHour`,path:`/terrahour`,subdomain:`terrahour.augmentedcraft.com`,tagline:`Solar day/night terminator map, IANA world clocks, DST & date rollover, and weekday working-hour overlap.`,category:`Distributed Time & Solar Geography`}},t={colors:`colors`,ascii:`ascii`,data:`data`,terrahour:`terrahour`};function n(e=``){let n=String(e||``).toLowerCase().trim().split(`:`)[0];if(!n)return null;for(let[e,r]of Object.entries(t))if(n===`${e}.augmentedcraft.com`||n===`${e}.localhost`)return r;return null}function r(e=`/`){let t=String(e||`/`).trim();return t.startsWith(`/`)||(t=`/`+t),t=t.replace(/\/index\.html$/i,``),t.length>1&&t.endsWith(`/`)&&(t=t.slice(0,-1)),t||`/`}function i({hostname:t=`localhost`,pathname:i=`/`}={}){let a=r(i),o=n(t),s=o?`subdomain`:`path`;for(let t of Object.values(e))if(a===t.path)return{appId:t.id,hostMode:s,subdomainApp:o,pathname:a,notFound:!1};return a===`/directory`?{appId:`directory`,hostMode:s,subdomainApp:o,pathname:a,notFound:!1}:a===`/`?o?{appId:o,hostMode:`subdomain`,subdomainApp:o,pathname:`/`,notFound:!1}:{appId:`directory`,hostMode:`path`,subdomainApp:null,pathname:`/`,notFound:!1}:{appId:`directory`,hostMode:s,subdomainApp:o,pathname:a,notFound:!0}}function a(t,{hostname:r=`localhost`}={}){let i=n(r);if(t===`directory`)return i?`/directory`:`/`;let a=e[t];return!a||i===t?`/`:a.path}function o(e){let t=String(e??``).trim().replace(/^#/,``);if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(t))return{ok:!1,error:`Enter a valid 3-digit or 6-digit hexadecimal color (e.g. #0d6e6e or #f80).`};let n=t.length===3?t.split(``).map(e=>e+e).join(``):t,r=`#${n.toLowerCase()}`,i=parseInt(n,16),a={r:i>>16&255,g:i>>8&255,b:i&255};return{ok:!0,hex:r,rgb:a,hsl:u(a.r,a.g,a.b),hslExact:l(a.r,a.g,a.b)}}function s(e,t,n){return Math.min(n,Math.max(t,e))}function c(e,t,n){let r=e=>s(Math.round(e),0,255).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function l(e,t,n){let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=Math.min(r,i,a),c=0,l=0,u=(o+s)/2;if(o!==s){let e=o-s;switch(l=u>.5?e/(2-o-s):e/(o+s),o){case r:c=(i-a)/e+(i<a?6:0);break;case i:c=(a-r)/e+2;break;case a:c=(r-i)/e+4}c/=6}return{h:c*360,s:l*100,l:u*100}}function u(e,t,n){let r=l(e,t,n);return{h:Math.round(r.h)%360,s:Math.round(r.s),l:Math.round(r.l)}}function d(e,t,n){let r=(e%360+360)%360/360,i=s(t,0,100)/100,a=s(n,0,100)/100;if(i===0){let e=Math.round(a*255);return{r:e,g:e,b:e}}let o=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e},c=a<.5?a*(1+i):a+i-a*i,l=2*a-c;return{r:Math.round(o(l,c,r+1/3)*255),g:Math.round(o(l,c,r)*255),b:Math.round(o(l,c,r-1/3)*255)}}function f({r:e,g:t,b:n}){let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return .2126*r(e)+.7152*r(t)+.0722*r(n)}function p(e,t){let n=o(e),r=o(t);if(!n.ok||!r.ok)return{ok:!1,error:n.error||r.error};let i=f(n.rgb),a=f(r.rgb),s=Math.max(i,a),c=Math.min(i,a),l=(s+.05)/(c+.05),u=Math.floor(l*100+1e-9)/100;return{ok:!0,fgHex:n.hex,bgHex:r.hex,ratio:u,formatted:`${u.toFixed(2)}:1`,aaNormal:l>=4.5,aaLarge:l>=3,aaaNormal:l>=7,aaaLarge:l>=4.5,grade:l>=7?`AAA`:l>=4.5?`AA`:l>=3?`AA Large`:`Fail`}}var m=[{step:50,l:95},{step:100,l:89},{step:200,l:79},{step:300,l:68},{step:400,l:56},{step:500,l:45},{step:600,l:36},{step:700,l:28},{step:800,l:20},{step:900,l:12}];function h(e){let t=o(e),{h:n,s:r}=(t.ok?t:o(`#0d6e6e`)).hsl;return m.map(({step:e,l:t})=>{let i=r===0?0:s(Math.round(r*(e<=100?.75:e>=800?.85:1)),8,100),a=d(n,i,t),o=c(a.r,a.g,a.b),l=p(o,`#ffffff`),u=p(o,`#181816`);return{step:e,hex:o,rgb:a,hsl:{h:n,s:i,l:t},contrastOnWhite:l.ratio,contrastOnInk:u.ratio}})}function g(e,t){let n=o(e),r=n.ok?n:o(`#0d6e6e`),i=r.hslExact||r.hsl,a=((i.h+t)%360+360)%360,s=d(a,i.s,i.l);return{hex:c(s.r,s.g,s.b),rgb:s,hsl:{h:Math.round(a)%360,s:r.hsl.s,l:r.hsl.l}}}function _(e){let t=o(e),n=t.ok?t:o(`#0d6e6e`);return{base:{hex:n.hex,hsl:n.hsl},complement:g(n.hex,180),analogous:[g(n.hex,-30),g(n.hex,30)],triadic:[g(n.hex,120),g(n.hex,240)],splitComplement:[g(n.hex,150),g(n.hex,210)]}}function v({startHex:e,endHex:t,midHex:n=null,angle:r=135}={}){let i=o(e),a=o(t),c=i.ok?i.hex:`#0d6e6e`,l=a.ok?a.hex:`#6e0d0d`,u=s(Math.round(Number(r)||0),0,360);if(n){let e=o(n);if(e.ok)return`linear-gradient(${u}deg, ${c} 0%, ${e.hex} 50%, ${l} 100%)`}return`linear-gradient(${u}deg, ${c} 0%, ${l} 100%)`}function y(e=`color`){return String(e??`color`).toLowerCase().replace(/[^a-z0-9-]+/g,`-`).replace(/^-+|-+$/g,``).replace(/-{2,}/g,`-`)||`color`}function b({baseHex:e=`#0d6e6e`,secondaryHex:t=null,angle:n=135,prefix:r=`color`}={}){let i=y(r),a=o(e),s=a.ok?a.hex:`#0d6e6e`,c=_(s),l=h(s),u=t?o(t):null,d=u&&u.ok?u.hex:c.complement.hex,f=p(s,d),m=v({startHex:s,endHex:c.complement.hex,angle:n}),g=[`/* Generated by AugmentedCraft Colors — Local-Only CSS Token Export */`,`/* Primary: ${s} | Complement: ${c.complement.hex} | Pair Contrast: ${f.formatted} (${f.grade}) */`,`:root {`,`  --${i}-primary: ${s};`,`  --${i}-secondary: ${d};`,`  --${i}-complement: ${c.complement.hex};`,`  --${i}-analogous-1: ${c.analogous[0].hex};`,`  --${i}-analogous-2: ${c.analogous[1].hex};`,`  --${i}-triadic-1: ${c.triadic[0].hex};`,`  --${i}-triadic-2: ${c.triadic[1].hex};`];for(let e of l)g.push(`  --${i}-${e.step}: ${e.hex};`);return g.push(`  --${i}-gradient: ${m};`),g.push(`}`),g.join(`
`)}function x(e,t,n=`text/plain;charset=utf-8`){let r=t instanceof Blob?t:new Blob([t],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,a.style.display=`none`,document.body.appendChild(a),a.click(),setTimeout(()=>{document.body.removeChild(a),URL.revokeObjectURL(i)},250)}function S(e){let t={baseHex:`#0d6e6e`,secondaryHex:`#f6f3ec`,angle:135,prefix:`craft`,primaryError:``,secondaryError:``};e.innerHTML=`
    <div class="workspace-header">
      <div>
        <p class="workspace-kicker">01 · Design Systems &amp; Accessibility</p>
        <h1 class="workspace-title">Chroma &amp; Contrast Workbench</h1>
        <p class="workspace-subtitle">Deterministic 50–900 shade scales, color harmonies, linear gradients, WCAG 2.1 contrast auditing, and ready-to-use CSS custom property exports.</p>
      </div>
      <div class="control-row">
        <button type="button" class="btn btn-primary" data-testid="colors-export-css">Download palette.css</button>
      </div>
    </div>

    <div data-testid="colors-error" role="alert" class="alert-banner" hidden></div>

    <div class="panel-grid">
      <section class="panel col-5" aria-labelledby="colors-controls-heading">
        <h2 class="panel-title" id="colors-controls-heading">Color &amp; Contrast Controls</h2>

        <div class="control-group">
          <label for="colors-hex-input">Primary Hex Color</label>
          <div class="control-row">
            <input type="color" id="colors-picker-input" data-testid="colors-picker-input" value="#0d6e6e" aria-label="Primary color picker" />
            <input type="text" id="colors-hex-input" data-testid="colors-hex-input" class="mono-input" value="#0d6e6e" style="flex:1" placeholder="#0d6e6e" />
          </div>
        </div>

        <div class="control-group">
          <label for="colors-secondary-input">Comparison / Background Hex (WCAG &amp; Pair)</label>
          <div class="control-row">
            <input type="color" id="colors-sec-picker" value="#f6f3ec" aria-label="Comparison color picker" />
            <input type="text" id="colors-secondary-input" data-testid="colors-secondary-input" class="mono-input" value="#f6f3ec" style="flex:1" placeholder="#f6f3ec" />
            <button type="button" class="btn btn-sm" data-testid="colors-use-complement">Use Complement</button>
          </div>
        </div>

        <div class="control-group">
          <label for="colors-angle-input">Gradient Angle (<span data-testid="colors-angle-label">135</span>°)</label>
          <input type="range" id="colors-angle-input" data-testid="colors-angle-input" min="0" max="360" step="5" value="135" />
        </div>

        <div class="control-group">
          <label for="colors-prefix-input">CSS Variable Prefix</label>
          <input type="text" id="colors-prefix-input" data-testid="colors-prefix-input" class="mono-input" value="craft" />
        </div>

        <div class="contrast-preview-box" data-testid="colors-contrast-sample">
          <div style="font-weight:700; font-size:1.08rem; margin-bottom:0.25rem;">Editorial Sample Headline (Large Text)</div>
          <div style="font-size:0.88rem;">Body copy rendered directly with the active primary foreground against the comparison background color.</div>
        </div>

        <div>
          <div class="field-label" style="margin-bottom:0.35rem;">WCAG 2.1 Contrast Ratio</div>
          <div class="control-row" style="justify-content:space-between;">
            <strong style="font-family:var(--font-mono); font-size:1.35rem;" data-testid="colors-contrast-ratio">5.73:1</strong>
            <div class="control-row" data-testid="colors-wcag-badges"></div>
          </div>
        </div>
      </section>

      <section class="panel col-7" aria-labelledby="colors-shades-heading">
        <h2 class="panel-title" id="colors-shades-heading">
          <span>Shade Scale (50–900)</span>
          <span class="badge badge-pass" data-testid="colors-hsl-readout">HSL</span>
        </h2>
        <div class="shades-grid" data-testid="colors-shades-grid"></div>

        <h3 class="panel-title" style="margin-top:1.15rem;">Complement &amp; Harmonies</h3>
        <div class="harmony-strip" data-testid="colors-harmonies"></div>

        <h3 class="panel-title" style="margin-top:1.15rem;">Linear Gradient Preview</h3>
        <div class="gradient-preview" data-testid="colors-gradient-preview"></div>
        <code class="mono-input" style="display:block; padding:0.4rem 0.6rem; background:var(--bg-paper); border:1px solid var(--border-hairline); border-radius:4px;" data-testid="colors-gradient-css"></code>
      </section>

      <section class="panel col-12" aria-labelledby="colors-export-heading">
        <h2 class="panel-title" id="colors-export-heading">Usable CSS Custom Properties Export</h2>
        <label for="colors-css-output" class="field-label">Generated CSS (:root palette tokens)</label>
        <textarea id="colors-css-output" data-testid="colors-css-output" class="mono-input" rows="10" readonly></textarea>
      </section>
    </div>
  `;let n=e.querySelector(`[data-testid="colors-hex-input"]`),r=e.querySelector(`[data-testid="colors-picker-input"]`),i=e.querySelector(`[data-testid="colors-secondary-input"]`),a=e.querySelector(`#colors-sec-picker`),s=e.querySelector(`[data-testid="colors-use-complement"]`),c=e.querySelector(`[data-testid="colors-angle-input"]`),l=e.querySelector(`[data-testid="colors-angle-label"]`),u=e.querySelector(`[data-testid="colors-prefix-input"]`),d=e.querySelector(`[data-testid="colors-error"]`),f=e.querySelector(`[data-testid="colors-shades-grid"]`),m=e.querySelector(`[data-testid="colors-harmonies"]`),g=e.querySelector(`[data-testid="colors-gradient-preview"]`),y=e.querySelector(`[data-testid="colors-gradient-css"]`),S=e.querySelector(`[data-testid="colors-contrast-sample"]`),C=e.querySelector(`[data-testid="colors-contrast-ratio"]`),w=e.querySelector(`[data-testid="colors-wcag-badges"]`),T=e.querySelector(`[data-testid="colors-hsl-readout"]`),E=e.querySelector(`[data-testid="colors-css-output"]`),D=e.querySelector(`[data-testid="colors-export-css"]`);function O(){let e=[];t.primaryError&&e.push(`Primary color: ${t.primaryError}`),t.secondaryError&&e.push(`Comparison color: ${t.secondaryError}`);let n=e.length>0;d.hidden=!n,d.textContent=e.join(` `),D.disabled=n,D.title=n?`Fix the invalid color input to export`:``;let i=o(t.baseHex),s=_(t.baseHex),c=h(t.baseHex),u=p(t.baseHex,t.secondaryHex),x=v({startHex:t.baseHex,endHex:s.complement.hex,angle:t.angle});i.ok&&(r.value=i.hex,T.textContent=`H:${i.hsl.h}° S:${i.hsl.s}% L:${i.hsl.l}%`);let O=o(t.secondaryHex);O.ok&&(a.value=O.hex),l.textContent=String(t.angle),f.innerHTML=``;for(let e of c){let t=document.createElement(`div`);t.className=`shade-card`,t.setAttribute(`data-testid`,`shade-${e.step}`);let n=document.createElement(`div`);n.className=`shade-swatch`,n.style.backgroundColor=e.hex;let r=document.createElement(`div`);r.className=`shade-meta`,r.innerHTML=`<strong>${e.step}</strong><span>${e.hex}</span>`,t.append(n,r),f.appendChild(t)}let k=[{label:`Complement`,hex:s.complement.hex,testId:`colors-complement-hex`},{label:`Analogous -30°`,hex:s.analogous[0].hex},{label:`Analogous +30°`,hex:s.analogous[1].hex},{label:`Triadic +120°`,hex:s.triadic[0].hex},{label:`Triadic +240°`,hex:s.triadic[1].hex}];m.innerHTML=``;for(let e of k){let t=document.createElement(`div`);t.className=`harmony-item`;let n=document.createElement(`div`);n.className=`harmony-color-box`,n.style.backgroundColor=e.hex;let r=document.createElement(`div`);r.textContent=e.label;let i=document.createElement(`strong`);e.testId&&i.setAttribute(`data-testid`,e.testId),i.textContent=e.hex,t.append(n,r,i),m.appendChild(t)}if(g.style.background=x,y.textContent=`background: ${x};`,u.ok){S.style.color=u.fgHex,S.style.backgroundColor=u.bgHex,C.textContent=u.formatted,w.innerHTML=``;let e=[{label:`AA Normal (${u.aaNormal?`Pass`:`Fail`})`,pass:u.aaNormal},{label:`AA Large (${u.aaLarge?`Pass`:`Fail`})`,pass:u.aaLarge},{label:`AAA Normal (${u.aaaNormal?`Pass`:`Fail`})`,pass:u.aaaNormal},{label:`AAA Large (${u.aaaLarge?`Pass`:`Fail`})`,pass:u.aaaLarge}];for(let t of e){let e=document.createElement(`span`);e.className=`badge ${t.pass?`badge-pass`:`badge-fail`}`,e.textContent=t.label,w.appendChild(e)}}n?E.value=`/* Export unavailable: fix the invalid color input above. */`:E.value=b({baseHex:t.baseHex,secondaryHex:t.secondaryHex,angle:t.angle,prefix:t.prefix})}n.addEventListener(`input`,e=>{let n=o(e.target.value);n.ok?(t.primaryError=``,t.baseHex=n.hex):t.primaryError=n.error,O()}),r.addEventListener(`input`,e=>{t.baseHex=e.target.value,n.value=e.target.value,t.primaryError=``,O()}),i.addEventListener(`input`,e=>{let n=o(e.target.value);n.ok?(t.secondaryError=``,t.secondaryHex=n.hex):t.secondaryError=n.error,O()}),a.addEventListener(`input`,e=>{t.secondaryHex=e.target.value,i.value=e.target.value,t.secondaryError=``,O()}),s.addEventListener(`click`,()=>{let e=_(t.baseHex);t.secondaryHex=e.complement.hex,i.value=t.secondaryHex,t.secondaryError=``,O()}),c.addEventListener(`input`,e=>{t.angle=Number(e.target.value)||0,O()}),u.addEventListener(`input`,e=>{t.prefix=e.target.value,O()}),D.addEventListener(`click`,()=>{t.primaryError||t.secondaryError||x(`palette.css`,b({baseHex:t.baseHex,secondaryHex:t.secondaryHex,angle:t.angle,prefix:t.prefix}),`text/css;charset=utf-8`)}),O()}var C=8192;function w(e,t,n,r){let i=Math.max(1,Math.round(Number(e)||1)),a=Math.max(1,Math.round(Number(t)||1)),o=Math.min(1,n/i,r/a);return{width:Math.max(1,Math.min(n,Math.round(i*o))),height:Math.max(1,Math.min(r,Math.round(a*o)))}}var T={standard:{id:`standard`,label:`Editorial Standard (10 glyphs)`,chars:`@%#*+=-:. `},dense:{id:`dense`,label:`Dense Halftone (32 glyphs)`,chars:'$@B%8&WM#*oahkbdpqwmZO0QLCJUYXvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`. '},blocks:{id:`blocks`,label:`Block Shade (5 glyphs)`,chars:`█▓▒░ `},minimal:{id:`minimal`,label:`Minimal Line (5 glyphs)`,chars:`#+=. `},binary:{id:`binary`,label:`Binary Matrix (3 glyphs)`,chars:`01 `}};function E(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function D({fileSize:e=1024,mimeType:t=`image/png`,width:n=100,height:r=100,charset:i=`@%#*+=-:. `,columns:a=80}={}){if(typeof e==`number`){if(e<=0)return{ok:!1,error:`Selected file is empty (0 bytes).`};if(e>10485760)return{ok:!1,error:`File size (${(e/1048576).toFixed(1)} MB) exceeds the 10 MB safety limit.`}}if(t&&!/^image\/(png|jpe?g|webp|gif|svg\+xml|bmp|avif)$/i.test(t))return{ok:!1,error:`Unsupported file type "${t}". Please provide a PNG, JPEG, WebP, GIF, BMP, or SVG image.`};if(n!==void 0&&r!==void 0){if(n<=0||r<=0||!Number.isFinite(n)||!Number.isFinite(r))return{ok:!1,error:`Image dimensions must be positive numbers.`};if(n>8192||r>8192)return{ok:!1,error:`Image dimensions (${n}x${r}) exceed the ${C}x${C} safety limit.`}}if(Array.from(String(i??``)).length<2)return{ok:!1,error:`Character set must contain at least 2 characters to map luminance values.`};let o=Number(a);return!Number.isFinite(o)||o<2||o>160?{ok:!1,error:`Detail columns must be between 2 and 160.`}:{ok:!0}}function O(e,{columns:t=80,charset:n=T.standard.chars,invert:r=!1,contrast:i=1,aspectRatio:a=.5}={}){if(!e||!e.data||!e.width||!e.height)return{ok:!1,error:`Invalid image pixel buffer.`};let{width:o,height:s,data:c}=e,l=D({width:o,height:s,charset:n,columns:t});if(!l.ok)return l;let u=Array.from(String(n)),d=Math.max(2,Math.min(160,Math.round(t))),f=Math.max(1,Math.round(s/o*d*a)),p=Math.min(300,f),m=f>p,h=Math.max(.2,Math.min(3,Number(i)||1)),g=[],_=[];for(let e=0;e<p;e++){let t=Math.floor(e*s/p),n=Math.max(t+1,Math.floor((e+1)*s/p)),i=[],a=``;for(let e=0;e<d;e++){let l=Math.floor(e*o/d),f=Math.max(l+1,Math.floor((e+1)*o/d)),p=0,m=0,g=0,_=0,v=0;for(let e=t;e<n&&e<s;e++)for(let t=l;t<f&&t<o;t++){let n=(e*o+t)*4,r=c[n+3]/255,i=c[n]*r+246*(1-r),a=c[n+1]*r+243*(1-r),s=c[n+2]*r+236*(1-r);p+=i,m+=a,g+=s,_+=r,v++}let y=v?Math.round(p/v):246,b=v?Math.round(m/v):243,x=v?Math.round(g/v):236,S=(.299*y+.587*b+.114*x)/255;S=(S-.5)*h+.5,S=Math.max(0,Math.min(1,S));let C=r?1-S:S,w=u[Math.min(u.length-1,Math.max(0,Math.floor(C*u.length)))];i.push({char:w,r:y,g:b,b:x,lum:S}),a+=w}g.push(i),_.push(a)}return{ok:!0,cols:d,rows:p,lines:_,text:_.join(`
`),grid:g,rowsClamped:m}}function k(e){return!e||!e.lines?``:e.lines.join(`
`)+`
`}function A(e,{title:t=`AugmentedCraft ASCII Export`,colorMode:n=`ink`}={}){let r=E(t),i={ink:`#f6f3ec`,terminal:`#121616`,teal:`#0b2c2c`,truecolor:`#141413`},a={ink:`#181816`,terminal:`#68e8c8`,teal:`#a3f0dc`,truecolor:`#f6f3ec`},o=i[n]||i.ink,s=a[n]||a.ink,c=``;return c=n===`truecolor`&&Array.isArray(e?.grid)?e.grid.map(e=>e.map(e=>{let t=E(e.char);return`<span style="color:rgb(${Math.max(0,Math.min(255,Number(e.r)||0))},${Math.max(0,Math.min(255,Number(e.g)||0))},${Math.max(0,Math.min(255,Number(e.b)||0))})">${t}</span>`}).join(``)).join(`
`):(e?.lines||[]).map(e=>E(e)).join(`
`),[`<!DOCTYPE html>`,`<html lang="en">`,`<head>`,`  <meta charset="utf-8">`,`  <title>${r}</title>`,`  <style>`,`    body { margin: 2rem; background: ${o}; color: ${s}; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }`,`    pre { font-size: 10px; line-height: 1.05; letter-spacing: 0.04em; overflow-x: auto; }`,`  </style>`,`</head>`,`<body>`,`  <h1>${r}</h1>`,`  <pre>${c}</pre>`,`</body>`,`</html>`].join(`
`)}(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function j(e=`prism`,t=160,n=100){let r=new Uint8ClampedArray(t*n*4);for(let i=0;i<n;i++){let a=i/n;for(let n=0;n<t;n++){let o=n/t,s=(i*t+n)*4;if(e===`waves`){let e=Math.sin(o*14+Math.cos(a*8)*2.5)*.5+.5;r[s]=Math.round(13+e*220),r[s+1]=Math.round(90+e*145),r[s+2]=Math.round(95+e*130),r[s+3]=255}else if(e===`monogram`){let e=o-.5,t=a-.5,n=Math.sqrt(e*e+t*t),i=Math.round((Math.abs(e)<.04||Math.abs(t)<.04?.15:n>.22&&n<.38?.12:n<.12?.2:.92)*245);r[s]=i,r[s+1]=Math.round(i*.96),r[s+2]=Math.round(i*.9),r[s+3]=255}else{let e=o-.5,t=a-.5,n=Math.sqrt(e*e+t*t)<.38?(e+t+.7)*.65:.92-(o*.18+a*.18),i=Math.max(.05,Math.min(.98,n));r[s]=Math.round(i*235),r[s+1]=Math.round(i*225),r[s+2]=Math.round((.2+i*.8)*215),r[s+3]=255}}}return{width:t,height:n,data:r}}var M=320,N=960,P=new Set([`terminal`,`teal`,`truecolor`]);function F(e){let t={sourceLabel:`Built-in Sample: Geometric Prism`,imageData:j(`prism`,160,100),presetId:`standard`,customCharset:``,columns:76,colorMode:`ink`,invert:!1,contrast:1.15,error:``,lastResult:null,loadToken:0,pendingImage:null};e.innerHTML=`
    <div class="workspace-header">
      <div>
        <p class="workspace-kicker">02 · Typography &amp; Raster Media</p>
        <h1 class="workspace-title">Glyph Raster Studio</h1>
        <p class="workspace-subtitle">Convert local images into structured ASCII compositions with customizable character sets, column density, color modes, and verified TXT, PNG, and escaped HTML exports.</p>
      </div>
      <div class="control-row">
        <button type="button" class="btn" data-testid="ascii-export-txt">Export .TXT</button>
        <button type="button" class="btn" data-testid="ascii-export-html">Export .HTML</button>
        <button type="button" class="btn btn-primary" data-testid="ascii-export-png">Export .PNG</button>
      </div>
    </div>

    <div data-testid="ascii-error" role="alert" class="alert-banner" hidden></div>
    <div data-testid="ascii-notice" role="status" class="notice-banner" hidden></div>

    <div class="panel-grid">
      <section class="panel col-4" aria-labelledby="ascii-controls-heading">
        <h2 class="panel-title" id="ascii-controls-heading">Source &amp; Raster Controls</h2>

        <div class="dropzone" data-testid="ascii-dropzone" tabindex="0" role="button" aria-label="Drop an image file here or click to select">
          <div style="font-weight:700; margin-bottom:0.25rem;">Drop image file or click to browse</div>
          <div style="font-size:0.78rem; color:var(--ink-muted);">PNG, JPEG, WebP, GIF, SVG · Local-only · Max 10 MB</div>
          <input type="file" id="ascii-file-input" data-testid="ascii-file-input" accept="image/*" style="margin-top:0.5rem;" aria-label="Upload image file" />
        </div>

        <div class="control-group">
          <span class="field-label">Procedural Sample Artworks</span>
          <div class="control-row">
            <button type="button" class="btn btn-sm" data-testid="ascii-sample-prism">Prism</button>
            <button type="button" class="btn btn-sm" data-testid="ascii-sample-waves">Waves</button>
            <button type="button" class="btn btn-sm" data-testid="ascii-sample-monogram">Monogram</button>
          </div>
        </div>

        <div class="control-group">
          <label for="ascii-charset-select">Character Set Preset</label>
          <select id="ascii-charset-select" data-testid="ascii-charset-select">
            ${Object.values(T).map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}
            <option value="custom">Custom Character Ramp</option>
          </select>
        </div>

        <div class="control-group">
          <label for="ascii-custom-charset">Custom Charset (Dark &rarr; Light, min 2 chars)</label>
          <input type="text" id="ascii-custom-charset" data-testid="ascii-custom-charset" class="mono-input" placeholder="e.g. @#+=. " value="" />
        </div>

        <div class="control-group">
          <label for="ascii-columns-input">Detail Width (<span data-testid="ascii-columns-label">76</span> columns)</label>
          <input type="range" id="ascii-columns-input" data-testid="ascii-columns-input" min="20" max="160" step="2" value="76" />
        </div>

        <div class="control-group">
          <label for="ascii-color-select">Color &amp; Palette Mode</label>
          <select id="ascii-color-select" data-testid="ascii-color-select">
            <option value="ink">Editorial Ink on Warm Paper</option>
            <option value="terminal">Terminal Phosphor Dark</option>
            <option value="teal">Deep Teal Duotone</option>
            <option value="truecolor">Sampled RGB Truecolor</option>
          </select>
        </div>

        <div class="control-row">
          <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
            <input type="checkbox" id="ascii-invert-checkbox" data-testid="ascii-invert-checkbox" />
            Invert Luminance Ramp
          </label>
        </div>
      </section>

      <section class="panel col-8" aria-labelledby="ascii-preview-heading">
        <h2 class="panel-title" id="ascii-preview-heading">
          <span data-testid="ascii-source-label">Built-in Sample: Geometric Prism</span>
          <span class="badge badge-pass" data-testid="ascii-dimensions-badge">76×38</span>
        </h2>

        <div class="ascii-output-wrap">
          <div>
            <div class="field-label" style="margin-bottom:0.3rem;">Live Text Matrix (&lt;pre&gt;)</div>
            <pre class="ascii-pre" data-testid="ascii-pre-output" aria-label="ASCII text output"></pre>
          </div>
          <div>
            <div class="field-label" style="margin-bottom:0.3rem;">Rendered Bitmap Preview (&lt;canvas&gt;)</div>
            <canvas class="ascii-canvas" data-testid="ascii-canvas-output" width="456" height="380"></canvas>
          </div>
        </div>
      </section>
    </div>
  `;let n=e.querySelector(`[data-testid="ascii-file-input"]`),r=e.querySelector(`[data-testid="ascii-dropzone"]`),i=e.querySelector(`[data-testid="ascii-charset-select"]`),a=e.querySelector(`[data-testid="ascii-custom-charset"]`),o=e.querySelector(`[data-testid="ascii-columns-input"]`),s=e.querySelector(`[data-testid="ascii-columns-label"]`),c=e.querySelector(`[data-testid="ascii-color-select"]`),l=e.querySelector(`[data-testid="ascii-invert-checkbox"]`),u=e.querySelector(`[data-testid="ascii-error"]`),d=e.querySelector(`[data-testid="ascii-source-label"]`),f=e.querySelector(`[data-testid="ascii-dimensions-badge"]`),p=e.querySelector(`[data-testid="ascii-pre-output"]`),m=e.querySelector(`[data-testid="ascii-canvas-output"]`),h=e.querySelector(`[data-testid="ascii-notice"]`),g=[`ascii-export-txt`,`ascii-export-html`,`ascii-export-png`].map(t=>e.querySelector(`[data-testid="${t}"]`));function _(e){for(let t of g)t.disabled=!e}function v(){t.lastResult=null,p.textContent=``,m.width=1,m.height=1,f.textContent=`—`,h.hidden=!0,_(!1)}function y(){t.loadToken++;let e=t.pendingImage;e&&(e.img.onload=null,e.img.onerror=null,e.img.src=``,URL.revokeObjectURL(e.url),t.pendingImage=null)}function b(){return t.customCharset.length>0||t.presetId===`custom`?t.customCharset:T[t.presetId]?.chars||T.standard.chars}function S(e){m.width=e.cols*7,m.height=e.rows*12;let n=m.getContext(`2d`);if(!n)return;let r={ink:`#f6f3ec`,terminal:`#121616`,teal:`#0b2c2c`,truecolor:`#141413`},i={ink:`#181816`,terminal:`#68e8c8`,teal:`#a3f0dc`,truecolor:`#f6f3ec`};n.fillStyle=r[t.colorMode]||r.ink,n.fillRect(0,0,m.width,m.height),n.font=`11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let r=0;r<e.rows;r++){let a=e.grid[r];for(let o=0;o<e.cols;o++){let e=a[o];e.char!==` `&&(n.fillStyle=t.colorMode===`truecolor`?`rgb(${e.r},${e.g},${e.b})`:i[t.colorMode]||i.ink,n.fillText(e.char,o*7,r*12))}}}function C(){s.textContent=String(t.columns),d.textContent=t.sourceLabel;let e=b(),n=P.has(t.colorMode)?!t.invert:t.invert,r=O(t.imageData,{columns:t.columns,charset:e,invert:n,contrast:t.contrast,aspectRatio:.5}),i=t.error||(r.ok?``:r.error);if(i){u.hidden=!1,u.textContent=i,v();return}u.hidden=!0,u.textContent=``,t.lastResult=r,_(!0),f.textContent=`${r.cols}×${r.rows}`,h.hidden=!r.rowsClamped,h.textContent=r.rowsClamped?`Output height capped at ${r.rows} rows for this very tall image; vertical proportions are compressed.`:``;let a={ink:`#f6f3ec`,terminal:`#121616`,teal:`#0b2c2c`,truecolor:`#141413`},o={ink:`#181816`,terminal:`#68e8c8`,teal:`#a3f0dc`,truecolor:`#f6f3ec`};p.style.backgroundColor=a[t.colorMode]||a.ink,p.style.color=o[t.colorMode]||o.ink,p.textContent=r.text,S(r)}function E(e){if(!e)return;y();let n=t.loadToken,r=D({fileSize:e.size,mimeType:e.type||`image/png`,charset:b()||T.standard.chars,columns:t.columns});if(!r.ok){t.error=r.error,C();return}let i=URL.createObjectURL(e),a=new Image;t.pendingImage={img:a,url:i};let o=()=>{URL.revokeObjectURL(i),t.pendingImage&&t.pendingImage.img===a&&(t.pendingImage=null)};a.onload=()=>{if(o(),n!==t.loadToken)return;let r=a.naturalWidth||a.width,i=a.naturalHeight||a.height,s=D({fileSize:e.size,mimeType:e.type||`image/png`,width:r,height:i,charset:b()||T.standard.chars,columns:t.columns});if(!s.ok){t.error=s.error,C();return}let c=w(r,i,M,N),l=document.createElement(`canvas`);l.width=c.width,l.height=c.height;let u=l.getContext(`2d`);u?(u.drawImage(a,0,0,c.width,c.height),t.imageData=u.getImageData(0,0,c.width,c.height),t.sourceLabel=`Uploaded: ${e.name}`,t.error=``,C()):(t.error=`Canvas 2D context is unavailable in this browser.`,C())},a.onerror=()=>{o(),n===t.loadToken&&(t.error=`Could not decode image file "${e.name}". The file may be corrupted or not a valid raster image.`,C())},a.src=i}function F(e,n){y(),t.imageData=j(e,160,100),t.sourceLabel=n,t.error=``,C()}r.addEventListener(`click`,e=>{e.target!==n&&n.click()}),r.addEventListener(`keydown`,e=>{e.target===r&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.click())}),n.addEventListener(`change`,e=>{let t=e.target.files?.[0];t&&E(t)}),r.addEventListener(`dragover`,e=>{e.preventDefault(),r.classList.add(`dragover`)}),r.addEventListener(`dragleave`,()=>{r.classList.remove(`dragover`)}),r.addEventListener(`drop`,e=>{e.preventDefault(),r.classList.remove(`dragover`);let t=e.dataTransfer?.files?.[0];t&&E(t)}),e.querySelector(`[data-testid="ascii-sample-prism"]`).addEventListener(`click`,()=>F(`prism`,`Built-in Sample: Geometric Prism`)),e.querySelector(`[data-testid="ascii-sample-waves"]`).addEventListener(`click`,()=>F(`waves`,`Built-in Sample: Harmonic Waves`)),e.querySelector(`[data-testid="ascii-sample-monogram"]`).addEventListener(`click`,()=>F(`monogram`,`Built-in Sample: Target Reticle`)),i.addEventListener(`change`,e=>{t.presetId=e.target.value,t.presetId!==`custom`&&(t.customCharset=``,a.value=``),t.error=``,C()}),a.addEventListener(`input`,e=>{t.customCharset=e.target.value,t.customCharset.length>0?(i.value=`custom`,t.presetId=`custom`):(i.value=`standard`,t.presetId=`standard`),t.error=``,C()}),o.addEventListener(`input`,e=>{t.columns=Number(e.target.value)||76,t.error=``,C()}),c.addEventListener(`change`,e=>{t.colorMode=e.target.value,C()}),l.addEventListener(`change`,e=>{t.invert=e.target.checked,C()}),e.querySelector(`[data-testid="ascii-export-txt"]`).addEventListener(`click`,()=>{t.lastResult&&x(`ascii-art.txt`,k(t.lastResult),`text/plain;charset=utf-8`)}),e.querySelector(`[data-testid="ascii-export-html"]`).addEventListener(`click`,()=>{t.lastResult&&x(`ascii-art.html`,A(t.lastResult,{title:t.sourceLabel,colorMode:t.colorMode}),`text/html;charset=utf-8`)}),e.querySelector(`[data-testid="ascii-export-png"]`).addEventListener(`click`,()=>{t.lastResult&&m.toBlob(e=>{e?x(`ascii-art.png`,e,`image/png`):(u.hidden=!1,u.textContent=`PNG encoding failed in this browser.`)},`image/png`)}),C()}var I=5242880,L=5e4,R=/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;function ee(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t+=1:r<2048?t+=2:r>=55296&&r<=56319&&n+1<e.length?(t+=4,n++):t+=3}return t}function z(e){let t=String(e??``);if(t.length===0||t[0]===`'`||R.test(t)&&Number.isFinite(Number(t)))return!1;if(/^[=+\-@|\t\r]/.test(t))return!0;let n=t.replace(/^[\s\u0000-\u001f\u007f-\u009f\u00a0\u200b-\u200f\ufeff]+/,``);return!!(n.length>0&&/^[=+\-@|]/.test(n))}function te(e){let t=String(e??``);return z(t)?`'${t}`:t}function ne(e,{sanitize:t=!0}={}){let n=String(e??``),r=t?te(n):n;return/[,"\r\n]/.test(r)||/^[\s\u0000-\u001f]|[\s\u0000-\u001f]$/.test(r)?`"${r.replace(/"/g,`""`)}"`:r}function re(e=[],t=[],{sanitize:n=!0}={}){return[e,...t].map(e=>e.map(e=>ne(e,{sanitize:n})).join(`,`)).join(`\r
`)+`\r
`}function ie(e,{maxBytes:t=I,maxRows:n=L}={}){if(typeof e!=`string`)return{ok:!1,error:`CSV input must be a text string.`};let r=e.length>t?e.length:ee(e);if(r>t)return{ok:!1,error:`CSV size (${(r/1048576).toFixed(2)} MB) exceeds the ${(t/1048576).toFixed(0)} MB local safety limit.`};let i=e.charCodeAt(0)===65279?e.slice(1):e;if(i.trim().length===0)return{ok:!1,error:`CSV input is empty. Provide at least a header row.`};let a=[],o=[],s=``,c=!1,l=!1,u=!1,d=1,f=1,p=1,m=i.length;for(let e=0;e<m;e++){let t=i[e];if(c)t===`"`?e+1<m&&i[e+1]===`"`?(s+=`"`,e++):(c=!1,l=!0):(s+=t,(t===`
`||t===`\r`&&i[e+1]!==`
`)&&d++);else{if(l){if(t===`,`){o.push(s),s=``,l=!1,u=!1;continue}if(t===`\r`||t===`
`){if(t===`\r`&&i[e+1]===`
`&&e++,o.push(s),a.push({cells:o,line:d}),a.length>n+1)return{ok:!1,error:`CSV exceeds maximum row limit of ${n} rows.`};o=[],s=``,l=!1,u=!1,d++;continue}return{ok:!1,error:`Malformed CSV at row ${a.length+1} (line ${d}): unexpected character after closing quote ("${t}").`}}if(t===`"`){if(!u&&s.length===0)c=!0,u=!0,f=d,p=a.length+1;else return{ok:!1,error:`Malformed CSV at row ${a.length+1} (line ${d}): unescaped quote inside unquoted field.`}}else if(t===`,`)o.push(s),s=``,u=!1;else if(t===`\r`||t===`
`){if(t===`\r`&&i[e+1]===`
`&&e++,o.push(s),a.push({cells:o,line:d}),a.length>n+1)return{ok:!1,error:`CSV exceeds maximum row limit of ${n} rows.`};o=[],s=``,u=!1,d++}else s+=t,u=!0}}if(c)return{ok:!1,error:`Malformed CSV at row ${p} (starting line ${f}): unclosed quoted field reached end of input.`};if((u||l||o.length>0)&&(o.push(s),a.push({cells:o,line:d})),a.length===0)return{ok:!1,error:`CSV contains no valid records.`};let h=a[0].cells,g=h.length;if(g===0||g===1&&h[0].trim()===``&&a.length===1)return{ok:!1,error:`CSV header row cannot be empty.`};let _=[],v=[];for(let e=1;e<a.length;e++){let t=a[e];e===a.length-1&&t.cells.length===1&&t.cells[0]===``&&g>1||(t.cells.length!==g&&v.push(`data row ${e} (line ${t.line}): expected ${g} columns, found ${t.cells.length}`),_.push(t.cells))}return v.length>0?{ok:!1,error:`Inconsistent column count detected — ${v.slice(0,3).join(`; `)}${v.length>3?` (+${v.length-3} more)`:``}.`}:{ok:!0,headers:h,rows:_}}function B(e=[],t=[]){let n=t.length,r=e.length,i=0,a=0,o=e.map((e,t)=>({header:e,index:t,count:0})),s=0;for(let t of e)z(t)&&s++;let c=new Map,l=[];for(let e=0;e<t.length;e++){let n=t[e],u=!1;for(let e=0;e<r;e++){let t=String(n[e]??``);t.trim()===``&&(i++,u=!0,o[e]&&o[e].count++),z(t)&&s++}u&&a++;let d=JSON.stringify(n);l.push(d),c.set(d,(c.get(d)||0)+1)}let u=0,d=new Set,f=new Set;for(let e=0;e<t.length;e++){let t=l[e];(c.get(t)||0)>1&&(d.add(e),f.has(t)?u++:f.add(t))}return{totalRows:n,totalColumns:r,missingCells:i,rowsWithMissing:a,missingByColumn:o,duplicateRows:u,duplicateGroupRowCount:d.size,duplicateRowIndices:d,formulaRiskCells:s}}function ae(e=[],t=[],{search:n=``,filterMode:r=`all`,sortCol:i=null,sortDir:a=`asc`}={}){let o=B(e,t),s=String(n??``).trim().toLowerCase(),c=t.filter((e,t)=>{if(r===`missing`){if(!e.some(e=>String(e??``).trim()===``))return!1}else if(r===`duplicates`){if(!o.duplicateRowIndices.has(t))return!1}else if(r===`formula`&&!e.some(e=>z(e)))return!1;return!s||e.some(e=>String(e??``).toLowerCase().includes(s))});if(i!=null&&i>=0&&i<e.length){let e=a===`desc`?-1:1;c=[...c].sort((t,n)=>{let r=String(t[i]??``).trim(),a=String(n[i]??``).trim();if(r===``&&a===``)return 0;if(r===``)return 1;if(a===``)return-1;let o=Number(r),s=Number(a);return!Number.isNaN(o)&&!Number.isNaN(s)&&Number.isFinite(o)&&Number.isFinite(s)?(o-s)*e:r.localeCompare(a,void 0,{numeric:!0,sensitivity:`base`})*e})}return c}var V=`id,component,region,latency_ms,owner_email,notes
101,Edge Router,us-east,14.2,netops@augmentedcraft.com,"Primary ingress, active"
102,Auth Worker,eu-west,28.7,sec@augmentedcraft.com,"Rotated keys
Verified quorum"
103,Cache Node,ap-south,,cache@augmentedcraft.com,Missing latency sample
101,Edge Router,us-east,14.2,netops@augmentedcraft.com,"Primary ingress, active"
104,Telemetry Sink,us-west,9.4,metrics@augmentedcraft.com,"Quoted ""canary"" build"
105,Audit Export,eu-central,41.0,audit@augmentedcraft.com,"  =SUM(10,20)"
`;function oe(e){let t={rawCsv:V,headers:[],rows:[],error:``,search:``,filterMode:`all`,sortCol:null,sortDir:`asc`};e.innerHTML=`
    <div class="workspace-header">
      <div>
        <p class="workspace-kicker">03 · Data Hygiene &amp; Security</p>
        <h1 class="workspace-title">Tabular CSV Inspector</h1>
        <p class="workspace-subtitle">Strict RFC 4180 parser handling quoted commas, newlines, escaped quotes, CRLF, and UTF-8 BOM — with structural validation, missing/duplicate summaries, and spreadsheet formula-injection protection.</p>
      </div>
      <div class="control-row">
        <button type="button" class="btn" data-testid="csv-load-sample">Reset Sample CSV</button>
        <button type="button" class="btn btn-primary" data-testid="csv-export-btn">Export Formula-Safe .CSV</button>
      </div>
    </div>

    <div data-testid="csv-error" role="alert" class="alert-banner" hidden></div>

    <div class="metrics-strip">
      <div class="metric-box">
        <div class="metric-label">Total Rows</div>
        <div class="metric-value" data-testid="csv-stat-rows">0</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">Columns</div>
        <div class="metric-value" data-testid="csv-stat-cols">0</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">Missing Cells</div>
        <div class="metric-value" data-testid="csv-stat-missing">0</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">Duplicate Rows</div>
        <div class="metric-value" data-testid="csv-stat-duplicates">0</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">Formula-Risk Cells</div>
        <div class="metric-value" data-testid="csv-stat-formulas">0</div>
      </div>
    </div>

    <div class="panel-grid">
      <section class="panel col-5" aria-labelledby="csv-input-heading">
        <h2 class="panel-title" id="csv-input-heading">Raw CSV Input &amp; File Loader</h2>
        <div class="control-group">
          <label for="csv-file-input">Load Local .CSV File (Max 5 MB)</label>
          <input type="file" id="csv-file-input" data-testid="csv-file-input" accept=".csv,text/csv,text/plain" />
        </div>
        <div class="control-group">
          <label for="csv-textarea">CSV Source Text</label>
          <textarea id="csv-textarea" data-testid="csv-textarea" class="mono-input" rows="11"></textarea>
        </div>
        <div class="control-row">
          <button type="button" class="btn btn-primary" data-testid="csv-parse-btn">Parse &amp; Validate CSV</button>
        </div>
      </section>

      <section class="panel col-7" aria-labelledby="csv-table-heading">
        <h2 class="panel-title" id="csv-table-heading">
          <span>Inspected Records</span>
          <span class="badge badge-pass" data-testid="csv-visible-count">0 shown</span>
        </h2>

        <div class="control-row" style="margin-bottom:0.85rem;">
          <div style="flex:2; min-width:160px;">
            <label for="csv-search-input">Search Cells</label>
            <input type="search" id="csv-search-input" data-testid="csv-search-input" placeholder="Filter by substring..." />
          </div>
          <div style="flex:1; min-width:140px;">
            <label for="csv-filter-mode">Row Filter</label>
            <select id="csv-filter-mode" data-testid="csv-filter-mode">
              <option value="all">All Rows</option>
              <option value="missing">Missing Values Only</option>
              <option value="duplicates">Duplicate Groups Only</option>
              <option value="formula">Formula Risks Only</option>
            </select>
          </div>
          <div style="flex:1; min-width:140px;">
            <label for="csv-sort-col">Sort Column</label>
            <select id="csv-sort-col" data-testid="csv-sort-col">
              <option value="">Original Order</option>
            </select>
          </div>
          <div style="min-width:95px;">
            <label for="csv-sort-dir">Direction</label>
            <select id="csv-sort-dir" data-testid="csv-sort-dir">
              <option value="asc">Asc &uarr;</option>
              <option value="desc">Desc &darr;</option>
            </select>
          </div>
        </div>

        <div class="table-scroll">
          <table class="data-table" data-testid="csv-table">
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </div>
  `;let n=e.querySelector(`[data-testid="csv-textarea"]`),r=e.querySelector(`[data-testid="csv-file-input"]`),i=e.querySelector(`[data-testid="csv-parse-btn"]`),a=e.querySelector(`[data-testid="csv-load-sample"]`),o=e.querySelector(`[data-testid="csv-export-btn"]`),s=e.querySelector(`[data-testid="csv-error"]`),c=e.querySelector(`[data-testid="csv-stat-rows"]`),l=e.querySelector(`[data-testid="csv-stat-cols"]`),u=e.querySelector(`[data-testid="csv-stat-missing"]`),d=e.querySelector(`[data-testid="csv-stat-duplicates"]`),f=e.querySelector(`[data-testid="csv-stat-formulas"]`),p=e.querySelector(`[data-testid="csv-search-input"]`),m=e.querySelector(`[data-testid="csv-filter-mode"]`),h=e.querySelector(`[data-testid="csv-sort-col"]`),g=e.querySelector(`[data-testid="csv-sort-dir"]`),_=e.querySelector(`[data-testid="csv-visible-count"]`),v=e.querySelector(`[data-testid="csv-table"]`),y=v.querySelector(`thead`),b=v.querySelector(`tbody`);function S(e){t.rawCsv=e,n.value=e;let r=ie(e);r.ok?(t.error=``,t.headers=r.headers,t.rows=r.rows):(t.error=r.error,t.headers=[],t.rows=[]),C(),T()}function C(){let e=h.value;h.innerHTML=``;let n=document.createElement(`option`);n.value=``,n.textContent=`Original Order`,h.appendChild(n),t.headers.forEach((e,t)=>{let n=document.createElement(`option`);n.value=String(t),n.textContent=e||`Column ${t+1}`,h.appendChild(n)}),e!==``&&Number(e)<t.headers.length?h.value=e:(t.sortCol=null,h.value=``)}function w(e){t.error=e,t.headers=[],t.rows=[],C(),T()}function T(){o.disabled=!!t.error||t.headers.length===0,t.error?(s.hidden=!1,s.textContent=t.error):(s.hidden=!0,s.textContent=``);let e=B(t.headers,t.rows);c.textContent=String(e.totalRows),l.textContent=String(e.totalColumns),u.textContent=String(e.missingCells),d.textContent=String(e.duplicateRows),f.textContent=String(e.formulaRiskCells);let n=ae(t.headers,t.rows,{search:t.search,filterMode:t.filterMode,sortCol:t.sortCol,sortDir:t.sortDir});if(_.textContent=n.length>250?`${n.length} of ${t.rows.length} rows · showing first 250 (export includes all ${n.length})`:`${n.length} of ${t.rows.length} rows`,y.innerHTML=``,b.innerHTML=``,t.headers.length>0){let e=document.createElement(`tr`);t.headers.forEach(t=>{let n=document.createElement(`th`);n.textContent=t,z(t)&&(n.title=`Formula injection risk detected in header (will be escaped on export)`,n.style.color=`var(--status-err-ink)`),e.appendChild(n)}),y.appendChild(e)}let r=Math.min(n.length,250);for(let e=0;e<r;e++){let r=n[e],i=document.createElement(`tr`);for(let e=0;e<t.headers.length;e++){let t=document.createElement(`td`),n=String(r[e]??``);n.trim()===``?(t.className=`cell-missing`,t.textContent=`(missing)`):(t.textContent=n,z(n)&&(t.className=`cell-formula`,t.title=`Formula trigger detected — protected on CSV export`)),i.appendChild(t)}b.appendChild(i)}}i.addEventListener(`click`,()=>{S(n.value)}),a.addEventListener(`click`,()=>{t.search=``,t.filterMode=`all`,t.sortCol=null,t.sortDir=`asc`,p.value=``,m.value=`all`,g.value=`asc`,S(V)}),r.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(!t)return;if(t.size>5242880){w(`CSV file "${t.name}" exceeds the 5 MB safety limit.`);return}let n=new FileReader;n.onload=()=>{S(String(n.result??``))},n.onerror=()=>{w(`Failed to read file "${t.name}".`)},n.readAsText(t,`utf-8`)}),p.addEventListener(`input`,e=>{t.search=e.target.value,T()}),m.addEventListener(`change`,e=>{t.filterMode=e.target.value,T()}),h.addEventListener(`change`,e=>{t.sortCol=e.target.value===``?null:Number(e.target.value),T()}),g.addEventListener(`change`,e=>{t.sortDir=e.target.value,T()}),o.addEventListener(`click`,()=>{if(t.error||t.headers.length===0)return;let e=ae(t.headers,t.rows,{search:t.search,filterMode:t.filterMode,sortCol:t.sortCol,sortDir:t.sortDir});x(`sanitized-export.csv`,re(t.headers,e,{sanitize:!0}),`text/csv;charset=utf-8`)}),S(V)}var H={inspiration:`TerraHour by Alessio Coci (Copyright (c) 2026 Alessio Coci, MIT License)`,cityData:`Curated city coordinates & IANA timezones adapted from TerraHour / GeoNames (CC BY 4.0)`,mapData:`Simplified world land geometry derived from Natural Earth (Public Domain)`,solarNote:`Approximate solar declination and equation-of-time model (no weather or atmospheric refraction).`},U=[{name:`San Francisco`,country:`United States`,zone:`America/Los_Angeles`,lat:37.77,lon:-122.42},{name:`Los Angeles`,country:`United States`,zone:`America/Los_Angeles`,lat:34.05,lon:-118.24},{name:`Seattle`,country:`United States`,zone:`America/Los_Angeles`,lat:47.61,lon:-122.33},{name:`Vancouver`,country:`Canada`,zone:`America/Vancouver`,lat:49.28,lon:-123.12},{name:`Denver`,country:`United States`,zone:`America/Denver`,lat:39.74,lon:-104.99},{name:`Phoenix`,country:`United States`,zone:`America/Phoenix`,lat:33.45,lon:-112.07},{name:`Chicago`,country:`United States`,zone:`America/Chicago`,lat:41.88,lon:-87.63},{name:`Austin`,country:`United States`,zone:`America/Chicago`,lat:30.27,lon:-97.74},{name:`Houston`,country:`United States`,zone:`America/Chicago`,lat:29.76,lon:-95.37},{name:`Mexico City`,country:`Mexico`,zone:`America/Mexico_City`,lat:19.43,lon:-99.13},{name:`New York`,country:`United States`,zone:`America/New_York`,lat:40.71,lon:-74.01},{name:`Boston`,country:`United States`,zone:`America/New_York`,lat:42.36,lon:-71.06},{name:`Washington DC`,country:`United States`,zone:`America/New_York`,lat:38.91,lon:-77.04},{name:`Miami`,country:`United States`,zone:`America/New_York`,lat:25.76,lon:-80.19},{name:`Toronto`,country:`Canada`,zone:`America/Toronto`,lat:43.65,lon:-79.38},{name:`Montreal`,country:`Canada`,zone:`America/Toronto`,lat:45.5,lon:-73.57},{name:`Halifax`,country:`Canada`,zone:`America/Halifax`,lat:44.65,lon:-63.57},{name:`St. John's`,country:`Canada`,zone:`America/St_Johns`,lat:47.56,lon:-52.71},{name:`Honolulu`,country:`United States`,zone:`Pacific/Honolulu`,lat:21.31,lon:-157.86},{name:`Anchorage`,country:`United States`,zone:`America/Anchorage`,lat:61.22,lon:-149.9},{name:`Bogota`,country:`Colombia`,zone:`America/Bogota`,lat:4.71,lon:-74.07},{name:`Lima`,country:`Peru`,zone:`America/Lima`,lat:-12.05,lon:-77.04},{name:`Santiago`,country:`Chile`,zone:`America/Santiago`,lat:-33.45,lon:-70.67},{name:`Buenos Aires`,country:`Argentina`,zone:`America/Argentina/Buenos_Aires`,lat:-34.6,lon:-58.38},{name:`Sao Paulo`,country:`Brazil`,zone:`America/Sao_Paulo`,lat:-23.55,lon:-46.63},{name:`Rio de Janeiro`,country:`Brazil`,zone:`America/Sao_Paulo`,lat:-22.91,lon:-43.17},{name:`Reykjavik`,country:`Iceland`,zone:`Atlantic/Reykjavik`,lat:64.15,lon:-21.94},{name:`London`,country:`United Kingdom`,zone:`Europe/London`,lat:51.51,lon:-.13},{name:`Dublin`,country:`Ireland`,zone:`Europe/Dublin`,lat:53.35,lon:-6.26},{name:`Lisbon`,country:`Portugal`,zone:`Europe/Lisbon`,lat:38.72,lon:-9.14},{name:`Madrid`,country:`Spain`,zone:`Europe/Madrid`,lat:40.42,lon:-3.7},{name:`Barcelona`,country:`Spain`,zone:`Europe/Madrid`,lat:41.39,lon:2.17},{name:`Paris`,country:`France`,zone:`Europe/Paris`,lat:48.86,lon:2.35},{name:`Amsterdam`,country:`Netherlands`,zone:`Europe/Amsterdam`,lat:52.37,lon:4.9},{name:`Brussels`,country:`Belgium`,zone:`Europe/Brussels`,lat:50.85,lon:4.35},{name:`Berlin`,country:`Germany`,zone:`Europe/Berlin`,lat:52.52,lon:13.4},{name:`Munich`,country:`Germany`,zone:`Europe/Berlin`,lat:48.14,lon:11.58},{name:`Zurich`,country:`Switzerland`,zone:`Europe/Zurich`,lat:47.38,lon:8.54},{name:`Milan`,country:`Italy`,zone:`Europe/Rome`,lat:45.46,lon:9.19},{name:`Rome`,country:`Italy`,zone:`Europe/Rome`,lat:41.9,lon:12.5},{name:`Vienna`,country:`Austria`,zone:`Europe/Vienna`,lat:48.21,lon:16.37},{name:`Prague`,country:`Czechia`,zone:`Europe/Prague`,lat:50.08,lon:14.44},{name:`Warsaw`,country:`Poland`,zone:`Europe/Warsaw`,lat:52.23,lon:21.01},{name:`Stockholm`,country:`Sweden`,zone:`Europe/Stockholm`,lat:59.33,lon:18.07},{name:`Oslo`,country:`Norway`,zone:`Europe/Oslo`,lat:59.91,lon:10.75},{name:`Copenhagen`,country:`Denmark`,zone:`Europe/Copenhagen`,lat:55.68,lon:12.57},{name:`Helsinki`,country:`Finland`,zone:`Europe/Helsinki`,lat:60.17,lon:24.94},{name:`Athens`,country:`Greece`,zone:`Europe/Athens`,lat:37.98,lon:23.73},{name:`Istanbul`,country:`Turkey`,zone:`Europe/Istanbul`,lat:41.01,lon:28.98},{name:`Kyiv`,country:`Ukraine`,zone:`Europe/Kyiv`,lat:50.45,lon:30.52},{name:`Moscow`,country:`Russia`,zone:`Europe/Moscow`,lat:55.76,lon:37.62},{name:`Cairo`,country:`Egypt`,zone:`Africa/Cairo`,lat:30.04,lon:31.24},{name:`Lagos`,country:`Nigeria`,zone:`Africa/Lagos`,lat:6.52,lon:3.38},{name:`Nairobi`,country:`Kenya`,zone:`Africa/Nairobi`,lat:-1.29,lon:36.82},{name:`Johannesburg`,country:`South Africa`,zone:`Africa/Johannesburg`,lat:-26.2,lon:28.05},{name:`Cape Town`,country:`South Africa`,zone:`Africa/Johannesburg`,lat:-33.92,lon:18.42},{name:`Casablanca`,country:`Morocco`,zone:`Africa/Casablanca`,lat:33.57,lon:-7.59},{name:`Tel Aviv`,country:`Israel`,zone:`Asia/Jerusalem`,lat:32.09,lon:34.78},{name:`Riyadh`,country:`Saudi Arabia`,zone:`Asia/Riyadh`,lat:24.71,lon:46.68},{name:`Tehran`,country:`Iran`,zone:`Asia/Tehran`,lat:35.69,lon:51.39},{name:`Dubai`,country:`United Arab Emirates`,zone:`Asia/Dubai`,lat:25.2,lon:55.27},{name:`Karachi`,country:`Pakistan`,zone:`Asia/Karachi`,lat:24.86,lon:67.01},{name:`Delhi`,country:`India`,zone:`Asia/Kolkata`,lat:28.61,lon:77.21},{name:`Mumbai`,country:`India`,zone:`Asia/Kolkata`,lat:19.08,lon:72.88},{name:`Bangalore`,country:`India`,zone:`Asia/Kolkata`,lat:12.97,lon:77.59},{name:`Kathmandu`,country:`Nepal`,zone:`Asia/Kathmandu`,lat:27.72,lon:85.32},{name:`Dhaka`,country:`Bangladesh`,zone:`Asia/Dhaka`,lat:23.81,lon:90.41},{name:`Bangkok`,country:`Thailand`,zone:`Asia/Bangkok`,lat:13.76,lon:100.5},{name:`Ho Chi Minh City`,country:`Vietnam`,zone:`Asia/Ho_Chi_Minh`,lat:10.82,lon:106.63},{name:`Jakarta`,country:`Indonesia`,zone:`Asia/Jakarta`,lat:-6.21,lon:106.85},{name:`Singapore`,country:`Singapore`,zone:`Asia/Singapore`,lat:1.35,lon:103.82},{name:`Kuala Lumpur`,country:`Malaysia`,zone:`Asia/Kuala_Lumpur`,lat:3.14,lon:101.69},{name:`Manila`,country:`Philippines`,zone:`Asia/Manila`,lat:14.6,lon:120.98},{name:`Hong Kong`,country:`China`,zone:`Asia/Hong_Kong`,lat:22.32,lon:114.17},{name:`Shanghai`,country:`China`,zone:`Asia/Shanghai`,lat:31.23,lon:121.47},{name:`Beijing`,country:`China`,zone:`Asia/Shanghai`,lat:39.9,lon:116.41},{name:`Taipei`,country:`Taiwan`,zone:`Asia/Taipei`,lat:25.03,lon:121.57},{name:`Seoul`,country:`South Korea`,zone:`Asia/Seoul`,lat:37.57,lon:126.98},{name:`Tokyo`,country:`Japan`,zone:`Asia/Tokyo`,lat:35.68,lon:139.69},{name:`Osaka`,country:`Japan`,zone:`Asia/Tokyo`,lat:34.69,lon:135.5},{name:`Perth`,country:`Australia`,zone:`Australia/Perth`,lat:-31.95,lon:115.86},{name:`Adelaide`,country:`Australia`,zone:`Australia/Adelaide`,lat:-34.93,lon:138.6},{name:`Brisbane`,country:`Australia`,zone:`Australia/Brisbane`,lat:-27.47,lon:153.03},{name:`Sydney`,country:`Australia`,zone:`Australia/Sydney`,lat:-33.87,lon:151.21},{name:`Melbourne`,country:`Australia`,zone:`Australia/Melbourne`,lat:-37.81,lon:144.96},{name:`Auckland`,country:`New Zealand`,zone:`Pacific/Auckland`,lat:-36.85,lon:174.76},{name:`Chatham Islands`,country:`New Zealand`,zone:`Pacific/Chatham`,lat:-43.95,lon:-176.55},{name:`Fiji`,country:`Fiji`,zone:`Pacific/Fiji`,lat:-18.14,lon:178.44},{name:`UTC`,country:`Global Reference`,zone:`UTC`,lat:0,lon:0}],se=[`San Francisco`,`New York`,`London`,`Mumbai`,`Tokyo`,`Sydney`],ce=[[[-168,65],[-140,70],[-125,70],[-95,72],[-78,72],[-62,66],[-53,47],[-66,44],[-75,35],[-81,25],[-90,21],[-97,26],[-83,9],[-78,8],[-85,11],[-92,15],[-105,20],[-117,32],[-124,40],[-125,49],[-135,58],[-152,60],[-165,60]],[[-55,60],[-44,60],[-20,70],[-18,81],[-45,83],[-68,76],[-58,68]],[[-78,9],[-62,10],[-50,0],[-35,-6],[-38,-15],[-42,-23],[-53,-33],[-62,-40],[-68,-54],[-73,-52],[-75,-42],[-71,-30],[-71,-18],[-81,-5],[-79,2]],[[-9,36],[-9,43],[-2,43],[-4,48],[2,51],[8,54],[10,58],[5,62],[16,69],[28,71],[40,68],[60,68],[60,50],[42,42],[29,41],[24,37],[15,38],[12,44],[5,43],[-5,36]],[[-10,51],[-6,58],[-2,58],[1,51],[-5,50]],[[-17,15],[-13,28],[-6,35],[10,37],[11,33],[32,31],[40,15],[51,12],[41,-2],[40,-15],[33,-26],[20,-35],[17,-28],[12,-16],[9,-2],[5,5],[-8,5],[-16,11]],[[44,-25],[49,-12],[50,-16],[47,-25]],[[29,41],[42,42],[60,50],[60,68],[105,74],[140,72],[170,66],[160,55],[142,50],[135,35],[122,31],[120,22],[108,16],[104,1],[100,13],[92,21],[88,22],[78,8],[68,23],[58,25],[55,22],[44,13],[35,30],[36,37]],[[130,31],[136,35],[141,41],[145,44],[141,38],[133,33]],[[95,5],[106,-6],[119,-8],[140,-5],[140,-8],[115,-9],[102,-4]],[[114,-22],[122,-16],[131,-12],[136,-12],[136,-16],[142,-11],[150,-22],[153,-28],[150,-37],[140,-38],[130,-32],[115,-34]],[[167,-46],[174,-36],[178,-38],[170,-46]]],W=`augmentedcraft.terrahour.v1`,G=new Map,K=new Set,q=new Map;function J(e){let t=G.get(e);return t||(t=new Intl.DateTimeFormat(`en-US`,{timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,weekday:`short`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`}),G.set(e,t)),t}function Y(e){if(typeof e!=`string`||!e.trim())return!1;let t=e.trim();if(G.has(t))return!0;if(K.has(t))return!1;try{return J(t),!0}catch{return K.size<256&&K.add(t),!1}}function le(e=``,t=10){let n=String(e??``).trim().toLowerCase();if(!n)return U.slice(0,t);let r=n.split(/\s+/).filter(Boolean),i=[];for(let e of U){let t=e.name.toLowerCase(),a=(e.country||``).toLowerCase(),o=e.zone.toLowerCase(),s=`${t} ${a} ${o}`;if(r.every(e=>s.includes(e))){let a=3;t===n||o===n?a=0:t.startsWith(r[0])?a=1:o.includes(r[0])&&(a=2),i.push({score:a,city:e})}}return i.sort((e,t)=>e.score-t.score||e.city.name.localeCompare(t.city.name)),i.slice(0,t).map(e=>e.city)}function X(e,t){let n=e instanceof Date?e:new Date(e),r=J(t).formatToParts(n),i={};for(let e of r)e.type!==`literal`&&(i[e.type]=e.value);let a=parseInt(i.year,10),o=parseInt(i.month,10),s=parseInt(i.day,10),c=parseInt(i.hour,10)%24,l=parseInt(i.minute,10),u=parseInt(i.second,10),d=i.weekday||`Mon`,f={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[d]??1,p=f>=1&&f<=5,m=Date.UTC(a,o-1,s,c,l,u),h=Math.floor(n.getTime()/1e3)*1e3,g=Math.round((m-h)/6e4),_=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),v=Date.UTC(a,o-1,s);return{year:a,month:o,day:s,hour:c,minute:l,second:u,weekdayShort:d,weekdayIndex:f,isWeekday:p,offsetMinutes:g,dayDeltaFromUtc:Math.round((v-_)/864e5),localDateIso:`${String(a).padStart(4,`0`)}-${String(o).padStart(2,`0`)}-${String(s).padStart(2,`0`)}`}}function ue(e){let t=e<0?`-`:`+`,n=Math.abs(e),r=Math.floor(n/60),i=n%60;return`UTC${t}${r}${i?`:${String(i).padStart(2,`0`)}`:``}`}function de(e,t,n=!1){if(!n)return`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`;let r=e>=12?`PM`:`AM`;return`${e%12||12}:${String(t).padStart(2,`0`)} ${r}`}function fe(e,t){let n=`${e}|${t}`,r=q.get(n);if(!r){let i=X(new Date(Date.UTC(t,0,15,12,0,0)),e),a=X(new Date(Date.UTC(t,6,15,12,0,0)),e);r={standardOffset:Math.min(i.offsetMinutes,a.offsetMinutes),observesDst:i.offsetMinutes!==a.offsetMinutes},q.size>512&&q.clear(),q.set(n,r)}return r}function Z(e,t=new Date,{workStart:n=9,workEnd:r=17,use12Hour:i=!1}={}){let a=t instanceof Date?t:new Date(t),o=Y(e?.zone)?e.zone:`UTC`,s=X(a,o),{standardOffset:c,observesDst:l}=fe(o,s.year),u=l&&s.offsetMinutes>c,d=s.dayDeltaFromUtc>0?`+${s.dayDeltaFromUtc} day`:s.dayDeltaFromUtc<0?`${s.dayDeltaFromUtc} day`:`Same day`,f=s.hour*60+s.minute,p=n*60,m=r*60,h=p<=m?f>=p&&f<m:f>=p||f<m,g=s.isWeekday&&h;return{name:e.name,country:e.country||``,zone:o,lat:e.lat,lon:e.lon,...s,offsetLabel:ue(s.offsetMinutes),observesDst:l,isDst:u,dayRolloverLabel:d,formattedTime:de(s.hour,s.minute,i),isWorkingNow:g}}function pe(e=[],t=new Date,{workStart:n=9,workEnd:r=17,weekdaysOnly:i=!0}={}){let a=t instanceof Date?t:new Date(t),o=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),0,0,0);if(!Array.isArray(e)||e.length===0)return{hasOverlap:!1,totalOverlapMinutes:0,windows:[],slots:[],summaryLabel:`Add at least one city to compute working-hour overlap.`};let s=[],c=0;for(let t=0;t<96;t++){let a=t*15,l=new Date(o+a*6e4),u=0;for(let t of e){let e=Z(t,l,{workStart:n,workEnd:r});(i?e.isWorkingNow:e.hour*60+e.minute>=n*60&&e.hour*60+e.minute<r*60)&&u++}let d=u===e.length;d&&(c+=15),s.push({minuteOfDay:a,activeCount:u,allOpen:d})}let l=[],u=null;for(let e=0;e<96;e++)s[e].allOpen&&u===null?u=s[e].minuteOfDay:!s[e].allOpen&&u!==null&&(l.push({startMin:u,endMin:s[e].minuteOfDay}),u=null);u!==null&&l.push({startMin:u,endMin:1440});let d=e=>{let t=Math.floor(e%1440/60),n=e%60;return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`},f=c>0,p=Math.floor(c/60),m=c%60,h=`${p}h${m?` ${m}m`:``}`,g=f?`Weekday overlap: ${l.map(e=>`${d(e.startMin)}–${d(e.endMin)} UTC`).join(`, `)} (${h})`:`No weekday working-hour overlap across all selected cities on this UTC date.`;return{hasOverlap:f,totalOverlapMinutes:c,windows:l,slots:s,summaryLabel:g}}function Q(e=new Date){let t=e instanceof Date?e:new Date(e),n=Date.UTC(t.getUTCFullYear(),0,1),r=Math.floor((t.getTime()-n)/864e5)+1,i=t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600,a=r+i/24,o=2*Math.PI/365*(a-1),s=.006918-.399912*Math.cos(o)+.070257*Math.sin(o)-.006758*Math.cos(2*o)+907e-6*Math.sin(2*o)-.002697*Math.cos(3*o)+.00148*Math.sin(3*o),c=229.18*(75e-6+.001868*Math.cos(o)-.032077*Math.sin(o)-.014615*Math.cos(2*o)-.040849*Math.sin(2*o)),l=((12-(i+c/60))*15+540)%360-180;return{declinationRad:s,equationOfTimeMin:c,utcHours:i,subsolarLat:s*180/Math.PI,subsolarLon:l}}function me(e,t,n=new Date,r=null){let i=r||Q(n),a=(15*(i.utcHours+i.equationOfTimeMin/60-12)+t)*Math.PI/180,o=e*Math.PI/180,s=(Math.sin(o)*Math.sin(i.declinationRad)+Math.cos(o)*Math.cos(i.declinationRad)*Math.cos(a)+.08)/.16;return Math.max(0,Math.min(1,s))}function he(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i][0],s=n[i][1],c=n[a][0],l=n[a][1];s>t!=l>t&&e<(c-o)*(t-s)/(l-s+1e-12)+o&&(r=!r)}return r}var $=null;function ge(){if($)return $;let e=new Uint8Array(28800);for(let t=0;t<120;t++){let n=90-(t+.5)/120*180;for(let r=0;r<240;r++){let i=-180+(r+.5)/240*360,a=!1;for(let e of ce)if(he(i,n,e)){a=!0;break}e[t*240+r]=+!!a}}return $={width:240,height:120,cells:e},$}function _e(){return se.map(e=>U.find(t=>t.name===e)).filter(Boolean)}function ve(e){if(!e||typeof e!=`object`)return null;let t=String(e.name??``).trim(),n=String(e.zone??``).trim(),r=Number(e.lat),i=Number(e.lon);return!t||!Y(n)||!Number.isFinite(r)||r<-90||r>90||!Number.isFinite(i)||i<-180||i>180?null:{name:t.slice(0,80),country:String(e.country??``).slice(0,80),zone:n,lat:r,lon:i}}function ye(e){return e===void 0?globalThis.localStorage:e}function be(e){let t={cities:_e(),workStart:9,workEnd:17,use12Hour:!1,recoveredFromError:!1,storageError:``},n=null;try{let r=ye(e);if(!r||typeof r.getItem!=`function`)return t;n=r.getItem(W)}catch(e){return{...t,recoveredFromError:!0,storageError:`Browser storage is unavailable (${e?.message||`access denied`}). Changes will not be saved.`}}if(!n)return t;let r=null;try{r=JSON.parse(n)}catch{return{...t,recoveredFromError:!0}}if(!r||typeof r!=`object`||Array.isArray(r)||r.version!==void 0&&r.version!==1||!Array.isArray(r.cities))return{...t,recoveredFromError:!0};let i=!1,a;if(r.cities.length===0)a=[];else{let e=r.cities.map(ve).filter(Boolean);e.length!==r.cities.length&&(i=!0),a=e.length>0?e.slice(0,24):_e()}let o=Number(r.workStart),s=Number(r.workEnd),c=Number.isInteger(o)&&Number.isInteger(s)&&o>=0&&o<=23&&s>=1&&s<=24&&o<s;return!c&&(r.workStart!==void 0||r.workEnd!==void 0)&&(i=!0),{cities:a,workStart:c?o:9,workEnd:c?s:17,use12Hour:!!r.use12Hour,recoveredFromError:i,storageError:``}}function xe(e,t={}){try{let n=ye(e);if(!n||typeof n.setItem!=`function`)return{ok:!1,error:`Local storage is unavailable.`};let r={version:1,cities:Array.isArray(t.cities)?t.cities.map(ve).filter(Boolean):[],workStart:Number.isInteger(t.workStart)?t.workStart:9,workEnd:Number.isInteger(t.workEnd)?t.workEnd:17,use12Hour:!!t.use12Hour};return n.setItem(W,JSON.stringify(r)),{ok:!0}}catch(e){return{ok:!1,error:`Could not save to browser storage: ${e?.message||`unknown error`}`}}}function Se(e){let t=be(),n={cities:t.cities,workStart:t.workStart,workEnd:t.workEnd,use12Hour:t.use12Hour,recoveredFromError:t.recoveredFromError,scrubMinutes:0,searchQuery:``,storageError:t.storageError||``},r=[],i=``,a=null,o=0;e.innerHTML=`
    <div class="workspace-header">
      <div>
        <p class="workspace-kicker">04 · Distributed Time &amp; Solar Geography</p>
        <h1 class="workspace-title">TerraHour World Clock</h1>
        <p class="workspace-subtitle">Native solar day/night terminator projection, curated IANA timezone clocks with fractional offsets and calendar rollover, UTC time scrubbing, and weekday working-hour overlap.</p>
      </div>
      <div class="control-row">
        <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
          <input type="checkbox" data-testid="terrahour-12h-toggle" ${n.use12Hour?`checked`:``} />
          12-Hour Format
        </label>
        <button type="button" class="btn btn-primary" data-testid="terrahour-reset-btn">Reset to Live UTC</button>
      </div>
    </div>

    <div data-testid="terrahour-storage-notice" role="status" class="notice-banner" hidden></div>

    <div class="panel-grid">
      <section class="panel col-8" aria-labelledby="terrahour-map-heading">
        <div class="panel-title" id="terrahour-map-heading">
          <span>Solar Day / Night World Projection</span>
          <span class="badge badge-pass" data-testid="terrahour-utc-readout">UTC</span>
        </div>

        <div class="terrahour-map-wrap">
          <canvas class="terrahour-canvas" data-testid="terrahour-map-canvas" width="720" height="360" aria-label="World map showing approximate solar day and night terminator and selected cities"></canvas>
        </div>

        <div class="control-group">
          <div class="control-row" style="justify-content:space-between;">
            <label for="terrahour-scrub-slider">UTC Time Scrubber (<span data-testid="terrahour-scrub-label">Live (0m)</span>)</label>
            <div class="control-row">
              <button type="button" class="btn btn-sm" data-testid="terrahour-step-minus-60">-1h</button>
              <button type="button" class="btn btn-sm" data-testid="terrahour-step-plus-60">+1h</button>
            </div>
          </div>
          <input type="range" id="terrahour-scrub-slider" data-testid="terrahour-scrub-slider" min="-720" max="720" step="15" value="0" />
        </div>

        <div style="margin-top:0.85rem; padding-top:0.75rem; border-top:1px solid var(--border-hairline);">
          <div class="control-row" style="justify-content:space-between;">
            <strong style="font-size:0.88rem;" data-testid="terrahour-overlap-summary">Weekday overlap</strong>
            <span style="font-family:var(--font-mono); font-size:0.76rem; color:var(--ink-muted);">24h UTC Window (00:00 &rarr; 24:00)</span>
          </div>
          <div class="overlap-bar-grid" data-testid="terrahour-overlap-bar" aria-label="24-hour UTC working hours overlap bar"></div>
        </div>
      </section>

      <section class="panel col-4" aria-labelledby="terrahour-search-heading">
        <h2 class="panel-title" id="terrahour-search-heading">Add Curated City &amp; Hours</h2>

        <div class="control-row" style="margin-bottom:0.85rem;">
          <div style="flex:1;">
            <label for="terrahour-work-start">Work Start (Local Hour)</label>
            <input type="number" id="terrahour-work-start" data-testid="terrahour-work-start" min="0" max="22" value="${n.workStart}" />
          </div>
          <div style="flex:1;">
            <label for="terrahour-work-end">Work End (Local Hour)</label>
            <input type="number" id="terrahour-work-end" data-testid="terrahour-work-end" min="1" max="24" value="${n.workEnd}" />
          </div>
        </div>

        <div class="control-group">
          <label for="terrahour-city-search">Search Curated Cities or IANA Zones</label>
          <input type="search" id="terrahour-city-search" data-testid="terrahour-city-search" placeholder="Search city, country, or zone (e.g. Kathmandu, UTC)..." />
          <ul class="search-results-list" data-testid="terrahour-search-results"></ul>
        </div>

        <div class="notice-banner" data-testid="terrahour-attribution" style="margin-top:0.9rem; margin-bottom:0; font-size:0.76rem; line-height:1.4;">
          <strong>Honest Solar Model &amp; Attribution:</strong> ${H.solarNote} No weather or telemetry requests. ${H.inspiration}. ${H.cityData}. ${H.mapData}.
        </div>
      </section>

      <section class="panel col-12" aria-labelledby="terrahour-clocks-heading">
        <h2 class="panel-title" id="terrahour-clocks-heading">
          <span>Selected World Clocks</span>
          <span class="badge badge-pass" data-testid="terrahour-city-count">${n.cities.length} cities</span>
        </h2>
        <div class="clocks-grid" data-testid="terrahour-clocks-list"></div>
      </section>
    </div>
  `;let s=e.querySelector(`[data-testid="terrahour-map-canvas"]`),c=e.querySelector(`[data-testid="terrahour-utc-readout"]`),l=e.querySelector(`[data-testid="terrahour-scrub-slider"]`),u=e.querySelector(`[data-testid="terrahour-scrub-label"]`),d=e.querySelector(`[data-testid="terrahour-step-minus-60"]`),f=e.querySelector(`[data-testid="terrahour-step-plus-60"]`),p=e.querySelector(`[data-testid="terrahour-reset-btn"]`),m=e.querySelector(`[data-testid="terrahour-12h-toggle"]`),h=e.querySelector(`[data-testid="terrahour-work-start"]`),g=e.querySelector(`[data-testid="terrahour-work-end"]`),_=e.querySelector(`[data-testid="terrahour-overlap-summary"]`),v=e.querySelector(`[data-testid="terrahour-overlap-bar"]`),y=e.querySelector(`[data-testid="terrahour-city-search"]`),b=e.querySelector(`[data-testid="terrahour-search-results"]`),x=e.querySelector(`[data-testid="terrahour-clocks-list"]`),S=e.querySelector(`[data-testid="terrahour-city-count"]`);function C(){return new Date(Date.now()+n.scrubMinutes*6e4)}let w=e.querySelector(`[data-testid="terrahour-storage-notice"]`);function T(){let e=``;n.storageError?e=n.storageError:n.recoveredFromError&&(e=`Recovered from invalid or corrupted saved data; invalid entries were discarded and validated defaults restored where needed.`),w.hidden=!e,w.textContent=e}function E(){let e=xe(void 0,{cities:n.cities,workStart:n.workStart,workEnd:n.workEnd,use12Hour:n.use12Hour});e.ok||(n.storageError=`${e.error}. Changes will not be saved.`),T()}function D(e){let t=s.getContext(`2d`);if(!t)return;let r=s.width,i=s.height,a=ge(),o=Q(e),c=r/a.width,l=i/a.height;for(let n=0;n<a.height;n++){let r=90-(n+.5)/a.height*180;for(let i=0;i<a.width;i++){let s=-180+(i+.5)/a.width*360,u=a.cells[n*a.width+i]===1,d=me(r,s,e,o);t.fillStyle=u?`rgb(${Math.round(32+d*198)},${Math.round(62+d*160)},${Math.round(66+d*138)})`:`rgb(${Math.round(12+d*26)},${Math.round(28+d*68)},${Math.round(36+d*78)})`,t.fillRect(i*c,n*l,Math.ceil(c),Math.ceil(l))}}t.strokeStyle=`rgba(255, 255, 255, 0.14)`,t.lineWidth=1,t.beginPath(),t.moveTo(0,i/2),t.lineTo(r,i/2),t.moveTo(r/2,0),t.lineTo(r/2,i),t.stroke();let u=(o.subsolarLon+180)/360*r,d=(90-o.subsolarLat)/180*i;t.fillStyle=`#f5c242`,t.beginPath(),t.arc(u,d,5,0,Math.PI*2),t.fill();for(let e of n.cities){let n=(e.lon+180)/360*r,a=(90-e.lat)/180*i;t.fillStyle=`#ff6b4a`,t.strokeStyle=`#ffffff`,t.lineWidth=1.5,t.beginPath(),t.arc(n,a,4.5,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle=`#ffffff`,t.font=`bold 10px sans-serif`,t.fillText(e.name,Math.min(r-65,n+7),Math.max(12,a+3))}}function O(){let e=le(n.searchQuery,8);b.innerHTML=``;for(let t of e){let e=document.createElement(`li`);e.className=`search-result-item`;let r=document.createElement(`span`);r.textContent=`${t.name} (${t.zone})`;let i=n.cities.some(e=>e.name===t.name&&e.zone===t.zone),a=document.createElement(`button`);a.type=`button`,a.className=`btn btn-sm`,a.setAttribute(`data-testid`,`terrahour-add-${t.name.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`),a.textContent=i?`Added`:`+ Add`,a.disabled=i,a.addEventListener(`click`,()=>{i||(n.cities=[...n.cities,t],E(),F())}),e.append(r,a),b.appendChild(e)}}function k(e){return Math.floor(e.getTime()/6e4)}function A(e){if(c.textContent=e.toISOString().slice(0,16).replace(`T`,` `)+` UTC`,n.scrubMinutes===0)u.textContent=`Live (0m)`;else{let e=n.scrubMinutes>0?`+`:``;u.textContent=`${e}${n.scrubMinutes} min`}}function j(e){let t=pe(n.cities,e,{workStart:n.workStart,workEnd:n.workEnd,weekdaysOnly:!0});_.textContent=t.summaryLabel,v.innerHTML=``;for(let e of t.slots){let t=document.createElement(`div`);t.className=`overlap-slot `+(e.allOpen?`slot-open`:e.activeCount>0?`slot-partial`:``),v.appendChild(t)}}function M(e,t){return Z(e,t,{workStart:n.workStart,workEnd:n.workEnd,use12Hour:n.use12Hour})}function N(e,t){e.bigTime.textContent=t.formattedTime,e.dateLine.textContent=`${t.weekdayShort} ${t.localDateIso}`,e.offsetBadge.textContent=t.offsetLabel,e.rolloverBadge.className=`badge ${t.dayDeltaFromUtc===0?`badge-pass`:`badge-warn`}`,e.rolloverBadge.textContent=t.dayRolloverLabel,e.workBadge.className=`badge ${t.isWorkingNow?`badge-pass`:`badge-fail`}`,e.workBadge.textContent=t.isWorkingNow?`Working Hours`:`Off Hours`}function P(e){if(S.textContent=`${n.cities.length} cities`,x.innerHTML=``,r=[],n.cities.length===0){let e=document.createElement(`p`);e.setAttribute(`data-testid`,`terrahour-empty`),e.style.margin=`0`,e.style.color=`var(--ink-secondary)`,e.textContent=`No cities selected. Search above to add a city.`,x.appendChild(e)}else n.cities.forEach((t,i)=>{let a=M(t,e),o=document.createElement(`article`);o.className=`clock-card`,o.setAttribute(`data-testid`,`terrahour-clock-card`);let s=document.createElement(`div`);s.className=`clock-card-top`;let c=document.createElement(`div`),l=document.createElement(`h3`);l.className=`clock-city-name`,l.textContent=a.name;let u=document.createElement(`div`);u.style.fontSize=`0.76rem`,u.style.fontFamily=`var(--font-mono)`,u.style.color=`var(--ink-muted)`,u.textContent=`${a.zone} · ${a.lat.toFixed(2)}°, ${a.lon.toFixed(2)}°`,c.append(l,u);let d=document.createElement(`div`);d.style.textAlign=`right`;let f=document.createElement(`div`);f.className=`clock-time-big`;let p=document.createElement(`div`);p.style.fontSize=`0.76rem`,p.style.color=`var(--ink-secondary)`,d.append(f,p),s.append(c,d);let m=document.createElement(`div`);m.className=`clock-badges`;let h=document.createElement(`span`);h.className=`badge badge-pass`;let g=document.createElement(`span`),_=document.createElement(`span`);m.append(h,g,_);let v=document.createElement(`div`);v.style.display=`flex`,v.style.justifyContent=`flex-end`;let y=document.createElement(`button`);y.type=`button`,y.className=`btn btn-sm remove-city-btn`,y.setAttribute(`data-testid`,`terrahour-remove-${i}`),y.setAttribute(`aria-label`,`Remove ${a.name}`),y.textContent=`Remove`,y.addEventListener(`click`,()=>{n.cities=n.cities.filter((e,t)=>t!==i),E(),F()}),v.appendChild(y),o.append(s,m,v),x.appendChild(o);let b={city:t,bigTime:f,dateLine:p,offsetBadge:h,rolloverBadge:g,workBadge:_};N(b,a),r.push(b)})}function F(){let e=C();i=k(e),A(e),D(e),O(),j(e),P(e),T()}function I(){if(!e.isConnected){R();return}let t=C();A(t);for(let e of r)N(e,M(e.city,t));let n=k(t);n!==i&&(i=n,D(t),j(t))}function L(){o||=requestAnimationFrame(()=>{o=0,F()})}function R(){a!==null&&(clearInterval(a),a=null),o&&=(cancelAnimationFrame(o),0)}return l.addEventListener(`input`,e=>{n.scrubMinutes=Number(e.target.value)||0,L()}),d.addEventListener(`click`,()=>{n.scrubMinutes=Math.max(-720,n.scrubMinutes-60),l.value=String(n.scrubMinutes),F()}),f.addEventListener(`click`,()=>{n.scrubMinutes=Math.min(720,n.scrubMinutes+60),l.value=String(n.scrubMinutes),F()}),p.addEventListener(`click`,()=>{n.scrubMinutes=0,l.value=`0`,F()}),m.addEventListener(`change`,e=>{n.use12Hour=e.target.checked,E(),F()}),h.addEventListener(`change`,e=>{let t=parseInt(e.target.value,10);Number.isInteger(t)&&t>=0&&t<n.workEnd?(n.workStart=t,E(),F()):e.target.value=String(n.workStart)}),g.addEventListener(`change`,e=>{let t=parseInt(e.target.value,10);Number.isInteger(t)&&t>n.workStart&&t<=24?(n.workEnd=t,E(),F()):e.target.value=String(n.workEnd)}),y.addEventListener(`input`,e=>{n.searchQuery=e.target.value,O()}),F(),a=setInterval(I,1e3),R}function Ce(t,n,r){t.innerHTML=`
    ${n.notFound?`<div role="alert" class="alert-banner" data-testid="route-not-found"></div>`:``}
    <section class="directory-hero" aria-labelledby="directory-title">
      <p class="workspace-kicker">AugmentedCraft Maker Suite · Private-by-Default Browser Utilities</p>
      <h1 class="workspace-title" id="directory-title">Restrained, Local-First Instruments for Makers</h1>
      <p class="workspace-subtitle">
        Every utility in this suite executes 100% locally inside your browser. Zero telemetry, zero external font or CDN requests, zero file uploads. Supports both path routing (<code>/colors</code>, <code>/ascii</code>, <code>/data</code>, <code>/terrahour</code>) and subdomain root routing (<code>*.augmentedcraft.com</code>).
      </p>
    </section>
    <section class="directory-grid" aria-label="Available maker tools">
      ${Object.values(e).map((e,t)=>{let n=a(e.id,{hostname:window.location.hostname});return`
        <article class="tool-card" data-testid="card-${e.id}">
          <div>
            <div class="tool-card-meta">
              <span>0${t+1} · ${e.category}</span>
              <span>${e.subdomain}</span>
            </div>
            <h2>${e.name}</h2>
            <p>${e.tagline}</p>
          </div>
          <div class="tool-card-actions">
            <span class="badge badge-pass">Local-Only · Zero Network</span>
            <a href="${n}" class="btn btn-primary" data-nav-app="${e.id}" data-testid="open-${e.id}">Open ${e.shortName} &rarr;</a>
          </div>
        </article>
      `}).join(``)}
    </section>
  `;let i=t.querySelector(`[data-testid="route-not-found"]`);i&&(i.textContent=`Route "${n.pathname}" was not recognized — showing the AugmentedCraft Suite Directory.`),t.querySelectorAll(`[data-nav-app]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),r(e.getAttribute(`href`))})})}function we(){let t=document.getElementById(`app`);if(!t)return;let n=null;function r(){typeof n==`function`&&n(),n=null;let o=window.location.hostname,s=window.location.pathname,c=i({hostname:o,pathname:s}),l=a(`directory`,{hostname:o});t.innerHTML=`
      <div class="suite-shell">
        <header class="suite-header">
          <div class="header-inner">
            <div class="brand-group">
              <a href="${l}" class="brand-link" data-nav-href="${l}" data-testid="nav-directory">AugmentedCraft Tools</a>
              <span class="brand-badge">Local-Only Suite</span>
            </div>
            <nav class="suite-nav" aria-label="Tool Suite Navigation">
              <a href="${l}" class="nav-link" data-nav-href="${l}" data-testid="nav-link-directory" ${c.appId===`directory`?`aria-current="page"`:``}>
                Directory
              </a>
              ${Object.values(e).map(e=>{let t=a(e.id,{hostname:o}),n=c.appId===e.id?`aria-current="page"`:``;return`
                    <a href="${t}" class="nav-link" data-nav-href="${t}" data-testid="nav-${e.id}" ${n}>
                      <span>${e.shortName}</span>
                      <span class="nav-code">${e.path}</span>
                    </a>
                  `}).join(``)}
            </nav>
          </div>
        </header>

        <main id="main-content" class="suite-main" tabindex="-1" data-active-app="${c.appId}"></main>

        <footer class="suite-footer">
          <div class="footer-inner">
            <span>AugmentedCraft Tools · Zero External Network · Private-by-Default</span>
            <span>MIT Licensed · TerraHour inspiration &amp; curated data © 2026 Alessio Coci (MIT) · Natural Earth · GeoNames</span>
          </div>
        </footer>
      </div>
    `;let u=t.querySelector(`#main-content`),d=e=>{window.history.pushState({},``,e),r()};t.querySelectorAll(`[data-nav-href]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),d(e.getAttribute(`href`))})}),c.appId===`colors`?(document.title=`Colors — AugmentedCraft Tools`,S(u)):c.appId===`ascii`?(document.title=`ASCII — AugmentedCraft Tools`,F(u)):c.appId===`data`?(document.title=`CSV Data — AugmentedCraft Tools`,oe(u)):c.appId===`terrahour`?(document.title=`TerraHour — AugmentedCraft Tools`,n=Se(u)):(document.title=`AugmentedCraft Tools — Browser-Native Maker Suite`,Ce(u,c,d))}window.addEventListener(`popstate`,r),r()}we();