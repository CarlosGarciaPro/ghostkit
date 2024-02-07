(()=>{"use strict";const e=window.wp.i18n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}const n=function(){var n=1,s=2,o=4,r=8,i=16,u=32,a=64,c=128,l=c|a|i|r|o|s,d=c|a|u|i|r|o|s|n,m=1e3,h=60,y=60,f=24,g=f*y*h*m,w=7,k=12,M=Math.ceil,b=Math.floor;function v(e,t){var n=e.getTime();return e.setMonth(e.getMonth()+t),Math.round((e.getTime()-n)/g)}function S(e){var t=e.getTime(),n=new Date(t);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-t)/g)}function N(e,t){if(t=t instanceof Date||null!==t&&Number.isFinite(t)?new Date(+t):new Date,!e)return t;var n=+e.value||0;return n?(t.setTime(t.getTime()+n),t):((n=+e.milliseconds||0)&&t.setMilliseconds(t.getMilliseconds()+n),(n=+e.seconds||0)&&t.setSeconds(t.getSeconds()+n),(n=+e.minutes||0)&&t.setMinutes(t.getMinutes()+n),(n=+e.hours||0)&&t.setHours(t.getHours()+n),(n=+e.weeks||0)&&(n*=w),(n+=+e.days||0)&&t.setDate(t.getDate()+n),(n=+e.months||0)&&t.setMonth(t.getMonth()+n),(n+=+e.years||0)&&t.setFullYear(t.getFullYear()+n),t)}function D(){}function p(e,t,n,s,o,r){return e[n]>=0&&(t+=e[n],delete e[n]),1+(t/=o)<=1?0:e[s]>=0?(e[s]=+(e[s]+t).toFixed(r),function(e,t){switch(t){case"seconds":if(e.seconds!==h||Number.isNaN(e.minutes))return;e.minutes+=1,e.seconds=0;case"minutes":if(e.minutes!==y||Number.isNaN(e.hours))return;e.hours+=1,e.minutes=0;case"hours":if(e.hours!==f||Number.isNaN(e.days))return;e.days+=1,e.hours=0;case"days":if(e.days!==w||Number.isNaN(e.weeks))return;e.weeks+=1,e.days=0;case"weeks":if(e.weeks!==S(e.refMonth)/w||Number.isNaN(e.months))return;e.months+=1,e.weeks=0;case"months":if(e.months!==k||Number.isNaN(e.years))return;e.years+=1,e.months=0}}(e,s),0):t}function T(e,t,l,d,N,D){var T=new Date;if(t=t||T,l=l||T,e.start=t,e.end=l,e.units=d,e.value=l.getTime()-t.getTime(),e.value<0){var H=l;l=t,t=H}e.refMonth=new Date(t.getFullYear(),t.getMonth(),15,12,0,0);try{e.years=l.getFullYear()-t.getFullYear(),e.months=l.getMonth()-t.getMonth(),e.weeks=0,e.days=l.getDate()-t.getDate(),e.hours=l.getHours()-t.getHours(),e.minutes=l.getMinutes()-t.getMinutes(),e.seconds=l.getSeconds()-t.getSeconds(),e.milliseconds=l.getMilliseconds()-t.getMilliseconds(),function(e){var t;for(e.milliseconds<0?(t=M(-e.milliseconds/m),e.seconds-=t,e.milliseconds+=t*m):e.milliseconds>=m&&(e.seconds+=b(e.milliseconds/m),e.milliseconds%=m),e.seconds<0?(t=M(-e.seconds/h),e.minutes-=t,e.seconds+=t*h):e.seconds>=h&&(e.minutes+=b(e.seconds/h),e.seconds%=h),e.minutes<0?(t=M(-e.minutes/y),e.hours-=t,e.minutes+=t*y):e.minutes>=y&&(e.hours+=b(e.minutes/y),e.minutes%=y),e.hours<0?(t=M(-e.hours/f),e.days-=t,e.hours+=t*f):e.hours>=f&&(e.days+=b(e.hours/f),e.hours%=f);e.days<0;)e.months-=1,e.days+=v(e.refMonth,1);e.days>=w&&(e.weeks+=b(e.days/w),e.days%=w),e.months<0?(t=M(-e.months/k),e.years-=t,e.months+=t*k):e.months>=k&&(e.years+=b(e.months/k),e.months%=k)}(e),function(e,t,l,d){var M=0;!(t&c)||M>=l?(e.months+=e.years*k,delete e.years):e.years&&(M+=1),!(t&a)||M>=l?(e.months&&(e.days+=v(e.refMonth,e.months)),delete e.months,e.days>=w&&(e.weeks+=b(e.days/w),e.days%=w)):e.months&&(M+=1),!(t&u)||M>=l?(e.days+=e.weeks*w,delete e.weeks):e.weeks&&(M+=1),!(t&i)||M>=l?(e.hours+=e.days*f,delete e.days):e.days&&(M+=1),!(t&r)||M>=l?(e.minutes+=e.hours*y,delete e.hours):e.hours&&(M+=1),!(t&o)||M>=l?(e.seconds+=e.minutes*h,delete e.minutes):e.minutes&&(M+=1),!(t&s)||M>=l?(e.milliseconds+=e.seconds*m,delete e.seconds):e.seconds&&(M+=1),t&n&&!(M>=l)||function(e,t){var n,s,o,r=p(e,0,"milliseconds","seconds",m,t);if(r&&(r=p(e,r,"seconds","minutes",h,t))&&(r=p(e,r,"minutes","hours",y,t))&&(r=p(e,r,"hours","days",f,t))&&(r=p(e,r,"days","weeks",w,t))&&(r=p(e,r,"weeks","months",S(e.refMonth)/w,t))&&(r=p(e,r,"months","years",(s=(n=e.refMonth).getTime(),(o=new Date(s)).setFullYear(n.getFullYear()+1),Math.round((o.getTime()-s)/g)/S(e.refMonth)),t))&&r)throw new Error("Fractional unit overflow")}(e,d)}(e,d,N,D)}finally{delete e.refMonth}return e}function H(e,n,s,o){var r=s.length>0?s.length:NaN;o=o>0?o<20?Math.round(o):20:0;var i=null;e instanceof Date||(null!==e&&Number.isFinite(e)?e=new Date(+e):("object"===t(i)&&(i=e),e=null));var u=null;if(n instanceof Date||(null!==n&&Number.isFinite(n)?n=new Date(+n):("object"===t(n)&&(u=n),n=null)),i&&(e=N(i,n)),u&&(n=N(u,e)),!e&&!n)return new D;var a=function(e){var t=~d;return e.forEach((function(e){H[e.toUpperCase()]&&(t|=H[e.toUpperCase()])})),t=+t||l}(s);return T(new D,e,n,a,r,o)}return H.MILLISECONDS=n,H.SECONDS=s,H.MINUTES=o,H.HOURS=r,H.DAYS=i,H.WEEKS=u,H.MONTHS=a,H.YEARS=c,H.DEFAULTS=l,H.ALL=d,H.getDelay=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return-1!==e.indexOf("milliseconds")?m/30:-1!==e.indexOf("seconds")?m:-1!==e.indexOf("minutes")?m*h:-1!==e.indexOf("hours")?m*h*y:-1!==e.indexOf("days")?m*h*y*f:m*h*y*f*w},H.formatUnit=function(t,n){switch(n){case"years":n=(0,e._n)("Year","Years",t,"ghostkit");break;case"months":n=(0,e._n)("Month","Months",t,"ghostkit");break;case"weeks":n=(0,e._n)("Week","Weeks",t,"ghostkit");break;case"days":n=(0,e._n)("Day","Days",t,"ghostkit");break;case"hours":n=(0,e._n)("Hour","Hours",t,"ghostkit");break;case"minutes":n=(0,e._n)("Minute","Minutes",t,"ghostkit");break;case"seconds":n=(0,e._n)("Second","Seconds",t,"ghostkit")}return{number:t="".concat(t<10?"0":"").concat(t),label:n}},H}();var s=window,o=s.GHOSTKIT,r=o.events,i=o.timezone,u=s.luxon;r.on(document,"init.blocks.gkt",(function(){function e(t,s,o,r){var a=new Date(u.DateTime.now().setZone(i).toFormat("yyyy-LL-dd'T'HH:mm:ss")),c=n(t,a,s,0);if(c.value>=0)return r.querySelectorAll(":scope > .ghostkit-countdown-unit").forEach((function(e){e.style.display="none"})),void(r.querySelector(":scope > .ghostkit-countdown-expire-action").style.display="block");Object.keys(o).forEach((function(e){var t=!1;c&&void 0!==c[e]&&(t=n.formatUnit(c[e],e));var s=t?t.number:"00",r=t?t.label:e;o[e].$number.innerHTML!==s&&(o[e].$number.innerHTML=s),o[e].$label.innerHTML!==r&&(o[e].$label.innerHTML=r)})),setTimeout((function(){e(t,s,o,r)}),n.getDelay(s))}document.querySelectorAll(".ghostkit-countdown:not(.ghostkit-countdown-ready)").forEach((function(t){r.trigger(t,"prepare.countdown.gkt"),t.classList.add("ghostkit-countdown-ready");var n=new Date(t.getAttribute("data-date")),s=[],o=["years","months","weeks","days","hours","minutes","seconds"].filter((function(e){var n=t.querySelector(":scope > .ghostkit-countdown-unit-".concat(e));return!!n&&(s[e]={$number:n.querySelector(".ghostkit-countdown-unit-number"),$label:n.querySelector(".ghostkit-countdown-unit-label")},!0)}));r.trigger(t,"prepared.countdown.gkt"),e(n,o,s,t)}))}))})();