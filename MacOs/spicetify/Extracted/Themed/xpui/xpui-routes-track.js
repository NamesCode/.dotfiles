"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[730],{41762:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});n(10817);var a=n(59496),r=n(77646),i=n(86695),c=n(88585),s=n.n(c),l=n(31274),o=n(38550),u=n(39252),f=n(32693),d=n(86262);const k=a.memo((function(){const e=(0,i.k6)(),t=(0,i.TH)(),n=(0,a.useContext)(d.ZF),c=(0,f.g)(),{trackId:k}=(0,i.UO)(),{isAnonymous:h}=(0,r.v9)(o.Gg),g=new URLSearchParams(t.search).get("context"),b=s().trackURI(k).toURI(),p=(0,l.QN)({uri:b},{cacheTime:30*u.y}),m=(0,a.useCallback)(((t,n)=>{const a=c.getState(),r=s().from(n)?.toURLPath(!0),i=`${r}?highlight=${b}`;h?e.push(i):(a&&!a.isPaused||t>-1&&c.play({uri:n},{featureIdentifier:"track",referrerIdentifier:"deeplink"},{skipTo:{index:t}}),e.replace(i))}),[e,h,c,b]),U=(0,a.useCallback)((()=>{if(p.loading||!p.data?.trackUnion)return;const e=p.data.trackUnion;m(e.trackNumber-1,e?.albumOfTrack?.uri||"")}),[m,p?.data?.trackUnion,p.loading]);return(0,a.useEffect)((()=>{const e=s().isPlaylistV1OrV2(g);g&&e?n.getContents(g).then((e=>{const t=e.items.findIndex((e=>e?.uri===b));t<0?U():m(t,g)})):U()}),[g,U,m,n,b]),null})),h=k}}]);
//# sourceMappingURL=xpui-routes-track.js.map