/**
 * GA4 conversion events.
 *
 * The tag itself only ever recorded page views, so nothing told us which pages
 * produce calls, texts or leads. These are the four actions worth counting.
 * Nothing here changes what the forms send or where they send it — the events
 * are fired alongside the existing behaviour, never instead of it.
 *
 * Mark `call_click`, `sms_click` and `generate_lead` as key events in the GA4
 * interface once they start arriving.
 */

/** Safe in every context: no tag, no consent, blocked script — all no-ops. */
export function trackEvent(name, params = {}) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

/**
 * One delegated listener covers every tel:/sms: link on the page — header,
 * hero, sticky bar, footer and anything rendered later — so no call site has
 * to remember to instrument a new button.
 */
export function mountOutboundTracking() {
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest?.('a[href^="tel:"], a[href^="sms:"]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      trackEvent(href.startsWith('tel:') ? 'call_click' : 'sms_click', {
        link_url: href,
        link_text: link.textContent.trim().slice(0, 80),
        page_path: window.location.pathname,
      })
    },
    // Capture, so the event is recorded even if something downstream stops
    // propagation before it reaches the document.
    true,
  )
}

/** Fired once a submission has actually been accepted, not when it is attempted. */
export function trackLead(method) {
  trackEvent('generate_lead', { method, page_path: window.location.pathname })
}
