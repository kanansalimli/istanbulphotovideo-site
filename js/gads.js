/* Google Ads: WhatsApp click conversion (counted once per click) */
(function () {
  var ID = 'AW-18378849501';
  var SEND_TO = 'AW-18378849501/y4bgCMz_tLodEN3527tE';
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  window.gtag('config', ID);

  var KEY = 'ipv_gads_click', fromAd = false;
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('gclid') || q.get('gbraid') || q.get('wbraid') || q.get('gad_source')) {
      localStorage.setItem(KEY, String(Date.now()));
    }
    var t = Number(localStorage.getItem(KEY));
    fromAd = !!t && Date.now() - t < 30 * 864e5;
  } catch (e) {}

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me/"]');
    if (!a) return;
    window.gtag('event', 'conversion', { send_to: SEND_TO, transport_type: 'beacon' });
    if (fromAd && !a.getAttribute('data-gads')) {
      try {
        var u = new URL(a.href);
        var txt = u.searchParams.get('text') || '';
        u.searchParams.set('text', txt.replace(/^Hi!/, 'Hi! I found you on Google.'));
        a.href = u.toString();
        a.setAttribute('data-gads', '1');
      } catch (err) {}
    }
  }, true);
})();
