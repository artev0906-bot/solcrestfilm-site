/**
 * A2P / TCPA consent block for the lead forms.
 *
 * The checkboxes themselves carry no `name`, so they never enter FormData. Each
 * one drives a hidden field that always submits "Yes" or "No", which keeps the
 * payload shape stable for n8n and GoHighLevel whether or not the box is
 * ticked — and means the submit handler needs no changes at all.
 *
 * Both start unchecked and both stay optional. Carrier A2P review requires that
 * the form still submit when a phone number is entered and consent is not
 * given: the lead is accepted, and "SMS Consent: No" is what tells the CRM this
 * contact must not be messaged.
 */

export const INFORMATIONAL_CONSENT_TEXT =
  'I agree to receive informational text messages from Solcrest Film Co LLC regarding estimates, appointment scheduling, installation updates, reminders, and service follow-ups. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.'

export const MARKETING_CONSENT_TEXT =
  'I agree to receive occasional promotional text messages from Solcrest Film Co LLC. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.'

export const smsConsentFields = `
          <div class="sms-consent">
            <input type="hidden" name="SMS Consent" id="sms-consent-value" value="No" />
            <label class="sms-consent-item">
              <input type="checkbox" id="sms-consent" class="sms-consent-box" />
              <span>${INFORMATIONAL_CONSENT_TEXT}</span>
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

/** Mirrors each checkbox into its hidden field. Neither box is ever made
 *  required, so this never blocks a submit. Safe to call when the block is
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
}
