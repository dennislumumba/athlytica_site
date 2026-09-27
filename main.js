/* =====================================================================
   ATHLYTICA — page behaviour
   =====================================================================
   A marketing site for record infrastructure needs almost no JavaScript, and
   this file is deliberately almost none. Everything that states a claim —
   evidence states, the sample record, NOT RECORDED, provenance — is HTML, so
   it exists for a crawler, for a reader without JS, and at first paint.

   No charts. The retired site drew a "Passport Radar"; a radar chart is a
   composite of incommensurable axes presented as a shape, which is exactly
   the comparison the production guidelines prohibit. It was removed rather
   than redrawn.
   ===================================================================== */

(function () {
    'use strict';

    var byId = function (id) { return document.getElementById(id); };

    /* Vercel Web Analytics. The shim in each <head> defines window.va first,
       so an event fired before the script lands is queued rather than lost.
       Only route-level intent is ever recorded — this site collects nothing. */
    var track = function (name) {
        if (typeof window.va === 'function') {
            window.va('event', { name: name, data: {} });
        }
    };

    function initNav() {
        var toggle = byId('navToggle');
        var list = byId('navList');
        if (!toggle || !list) return;

        toggle.addEventListener('click', function () {
            var open = list.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && list.classList.contains('open')) {
                list.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
            }
        });
    }

    function initTracking() {
        document.addEventListener('click', function (e) {
            var el = e.target.closest ? e.target.closest('[data-track]') : null;
            if (el) track(el.getAttribute('data-track'));
        });
    }

    function boot() { initNav(); initTracking(); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
