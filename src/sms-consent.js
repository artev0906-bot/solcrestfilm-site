/**
 * A2P / TCPA consent block for the lead forms.
 *
 * The checkboxes themselves carry no `name`, so they never enter FormData. Each
 * one drives a hidden field that always submits "Yes" or "No", which keeps the
 * payload shape stable for n8n and GoHighLevel whether or not the box is
 * ticked — and means the submit handler needs no changes at all.
 *
 * Both start unchecked: consent has to be given, not withdrawn.
 */

export const TRANSACTIONAL_CONSENT_TEXT =
  'I agree to receive calls and text messages from Solcrest Film Co about my request, including estimate updates, appointment scheduling, and service follow-ups. Message frequency varies. Msg &amp; data rates may apply. Reply HELP for help or STOP to opt out.'

export const MARKETING_CONSENT_TEXT =
  'I agree to receive occasional promotional text messages from Solcrest Film Co. Message frequency varies. Msg &amp; data rates may apply. Reply HELP for help or STOP to opt out.'

export const smsConsentFields = `
          <div class="sms-consent">
            <input type="hidden" name="SMS Consent" id="sms-consent-value" value="No" />
            <label class="sms-consent-item">
              <input type="checkbox" id="sms-consent" class="sms-consent-box" />
              <span>${TRANSACTIONAL_CONSENT_TEXT}</span>
            </label>

            <input type="hidden" name="Marketing SMS Consent" id="sms-marketing-value" value="No" />
            <label class="sms-consent-item">
              <input type="checkbox" id="sms-marketing" class="sms-consent-box" />
              <span>${MARKETING_CONSENT_TEXT}</span>
            </label>

            <p class="sms-consent-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span aria-hidden="true">·</span>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            </p>
          </div>
`

/** Mirrors each checkbox into its hidden field, and makes the transactional one
 *  required as soon as a phone number is entered. Safe to call when the block is
 *  absent — every lookup is optional. */
export function mountSmsConsent() {
  const pairs = [
    ['#sms-consent', '#sms-consent-value'],
    ['#sms-marketing', '#sms-marketing-value'],
  ]

  for (const [boxSelector, fieldSelector] of pairs) {
    const box = document.querySelector(boxSelector)
    const field = document.querySelector(fieldSelector)
    if (!box || !field) continue
    const sync = () => {
      field.value = box.checked ? 'Yes' : 'No'
    }
    box.addEventListener('change', sync)
    sync()
  }

  // Consent is required to call or text, so it becomes required exactly when a
  // phone number is given. Someone who leaves only an email can still submit.
  // Constraint validation runs before the submit event fires, so the existing
  // submit handler is never reached and never had to change.
  const consentBox = document.querySelector('#sms-consent')
  const phoneField = document.querySelector('#contact-form input[name="Phone"]')
  if (!consentBox || !phoneField) return

  const syncRequired = () => {
    const wanted = phoneField.value.trim().length > 0
    consentBox.required = wanted
    consentBox.setAttribute('aria-required', String(wanted))
  }

  phoneField.addEventListener('input', syncRequired)
  phoneField.addEventListener('change', syncRequired)
  consentBox.addEventListener('invalid', () => {
    consentBox.setCustomValidity(
      'Please confirm you agree to receive calls and text messages, or leave an email instead of a phone number.',
    )
  })
  consentBox.addEventListener('change', () => consentBox.setCustomValidity(''))
  syncRequired()
}
