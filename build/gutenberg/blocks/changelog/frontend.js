(()=>{var e=window.GHOSTKIT.events;e.on(document,"init.blocks.gkt",(function(){document.querySelectorAll(".ghostkit-changelog:not(.ghostkit-changelog-ready)").forEach((function(a){e.trigger(a,"prepare.changelog.gkt"),a.classList.add("ghostkit-changelog-ready"),a.querySelector(":scope > .ghostkit-changelog-more").querySelectorAll(":scope > ul li, :scope > ol li").forEach((function(e){var a=e.innerHTML.trim().match(/^\[(new|added|fixed|improved|updated|removed|changed)\]\s(.*)/i);if(a){var o=a[1],t=a[2],c="ghostkit-badge";switch(o.toLowerCase()){case"added":case"new":c+=" ghostkit-badge-success";break;case"fixed":case"improved":case"updated":c+=" ghostkit-badge-primary";break;case"removed":c+=" ghostkit-badge-danger"}e.innerHTML='<span class="'.concat(c,'">').concat(o,"</span> ").concat(t)}})),e.trigger(a,"prepared.changelog.gkt")}))}))})();