import { openChatWidget } from './chat-widget.js'

/**
 * Post-submit state for the estimate forms.
 *
 * The form is left alone until the server confirms the request: on success the
 * fields are hidden and replaced, in place, by a confirmation panel. Nothing
 * here touches the endpoint, the payload or the field names — it only decides
 * what the visitor sees once the existing request has already succeeded.
 */

/** Markup goes inside the form itself, so the card keeps its frame and the
 *  section keeps its theme. Hidden until the request succeeds. */
export const estimateSuccessMarkup = `
          <div class="estimate-success" role="status" aria-live="polite" hidden>
            <div class="estimate-success-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="2" opacity="0.35" />
                <path d="M15 24.5 21 30.5 33 18.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <h3 class="estimate-success-title" tabindex="-1">Request received</h3>

            <p class="estimate-success-text">
              Thank you! We’ve received your estimate request and will review the project details shortly.
            </p>

            <p class="estimate-success-secondary">
              Need a faster response? Start a chat with our window film specialist.
            </p>

            <div class="estimate-success-actions">
              <button type="button" class="button button-primary estimate-success-chat">Start a Chat</button>
              <button type="button" class="button button-secondary estimate-success-again">Submit Another Request</button>
            </div>
          </div>
`

export const ERROR_MESSAGE = 'Something went wrong. Please try again or start a chat with us.'

/**
 * Single point of truth for the status line: it either carries a message or it
 * is not in the layout at all. Called with no text it clears and hides, so an
 * empty status can never reserve a blank gap under the submit button — which is
 * what it did on first load before.
 */
export function setFormStatus(status, text = '') {
  if (!status) return
  status.textContent = text
  status.hidden = !text
}

/** Fires a GA event through the tag the site already loads. No form data is
 *  ever included. */
function track(name) {
  if (typeof window.gtag === 'function') window.gtag('event', name)
}

/**
 * Wires the success panel to a form and returns the three UI transitions the
 * submit handler needs. Every lookup is optional, so a page without the panel
 * keeps working exactly as before.
 */
export function setupEstimateSuccess({ form, status }) {
  const success = form?.querySelector('.estimate-success')
  const submitButton = form?.querySelector('.submit-button')
  const originalLabel = submitButton?.textContent?.trim() ?? 'Submit'
  // Disabling the button stops clicks but not Enter, which submits the form
  // directly — so the guard lives here rather than on the button.
  let sending = false

  const showForm = () => {
    form.classList.remove('estimate-submitted')
    if (success) success.hidden = true
  }

  const resetForm = () => {
    form.reset()
    const replyTo = form.querySelector('input[name="_replyto"]')
    if (replyTo) replyTo.value = ''
    const filename = form.querySelector('.file-upload-filename')
    if (filename) filename.textContent = 'No file chosen'
    setFormStatus(status)
    if (submitButton) {
      submitButton.disabled = false
      submitButton.textContent = originalLabel
    }
  }

  success?.querySelector('.estimate-success-chat')?.addEventListener('click', () => {
    track('estimate_start_chat_clicked')
    openChatWidget()
  })

  success?.querySelector('.estimate-success-again')?.addEventListener('click', () => {
    track('estimate_submit_another_clicked')
    showForm()
    resetForm()
    form.querySelector('input[name="Name"]')?.focus()
  })

  return {
    /** True while a request is in flight, so a second submit can be ignored. */
    isSending: () => sending,

    /** Request in flight: the form stays visible, the button stops accepting clicks. */
    setSending() {
      sending = true
      setFormStatus(status)
      if (!submitButton) return
      submitButton.disabled = true
      submitButton.textContent = 'Sending…'
    },

    /** Confirmed success only. */
    showSuccess() {
      sending = false
      resetForm()
      form.classList.add('estimate-submitted')
      if (success) {
        success.hidden = false
        success.querySelector('.estimate-success-title')?.focus()
      }
      track('estimate_form_success')
    },

    /** Failure: the form comes back untouched, with whatever was typed still in it. */
    showError(message = ERROR_MESSAGE) {
      sending = false
      setFormStatus(status, message)
      if (submitButton) {
        submitButton.disabled = false
        submitButton.textContent = originalLabel
      }
      track('estimate_form_error')
    },
  }
}
