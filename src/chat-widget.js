import { icon } from './icons.js'

const faqItems = [
  {
    q: 'How much does window film cost?',
    a: 'Most residential solar, privacy, frosted, and decorative films start around $7–$10 per sq ft depending on the film type, window size, access, and total project scope. Safety, security, anti-graffiti, exterior, and specialty films are priced based on material thickness, installation difficulty, and whether extra preparation is needed. The fastest way to get an accurate estimate is to send photos, rough measurements, and your main goal.',
  },
  {
    q: 'How long does installation take?',
    a: 'Small residential projects can often be completed in a few hours. Larger homes, storefronts, commercial glass, exterior installations, safety film, or smart film projects may take longer depending on glass size, access, preparation, and scheduling. After we review photos and measurements, we can give you a more accurate timeline.',
  },
  {
    q: 'Can window film reduce heat?',
    a: 'Yes. Solar control window film can help reduce heat, glare, and UV exposure, making rooms more comfortable during the day. It can also help protect floors, furniture, artwork, and interior finishes from sun damage. The best film depends on how much heat reduction, light, privacy, and appearance you want.',
  },
  {
    q: 'Does privacy film work at night?',
    a: 'Privacy film depends on lighting. Some reflective privacy films work best during the day when it is brighter outside than inside. At night, if the lights are on inside, visibility can change. For stronger privacy, we may recommend frosted, blackout, decorative, or specialty privacy film depending on the location and your goal.',
  },
  {
    q: 'What is safety film?',
    a: 'Safety and security film is a thicker protective film designed to help hold shattered glass together after impact. It can add another layer of protection for glass doors, storefronts, windows, and vulnerable entry points. It does not make glass unbreakable, but it can make break-ins, impact, and glass failure more difficult and less dangerous.',
  },
  {
    q: 'Is anti-graffiti film replaceable?',
    a: 'Yes. Anti-graffiti film is designed as a sacrificial protective layer for glass. If the surface gets scratched, tagged, etched, or damaged, the film can often be removed and replaced without replacing the actual glass. This is especially useful for storefronts, elevators, commercial glass, and high-traffic areas.',
  },
  {
    q: 'Can smart film be installed on existing glass?',
    a: 'In many cases, yes. Smart film can be applied to existing glass to create switchable privacy, turning the glass from clear to private when powered. The final recommendation depends on the glass condition, size, wiring access, controller location, and whether the project is residential, office, clinic, conference room, or commercial space.',
  },
  {
    q: 'Do I need photos and measurements for an estimate?',
    a: 'Yes. Photos and rough measurements help us provide a faster and more accurate estimate. Clear photos of the glass, approximate width and height, location, and your main goal — heat reduction, privacy, safety, anti-graffiti, decorative, or smart film — are usually enough to start. For larger or more complex projects, we may recommend an in-person visit.',
  },
]

const GREETING = "Hi! Happy to help — ask a question or leave your info and we'll get back to you."
const MORE_QUESTIONS_PROMPT =
  "Looks like you have more questions — leave your info below and we'll get back to you personally."
const GENERIC_ACK = "Thanks for the question — we'll make sure to cover that when we follow up with you."

const renderQuickQuestions = () =>
  faqItems
    .map((item, i) => `<button type="button" class="chat-quick-question" data-faq-index="${i}">${item.q}</button>`)
    .join('')

function escapeHtml(value) {
  const div = document.createElement('div')
  div.textContent = value
  return div.innerHTML
}

export function mountChatWidget() {
  if (document.querySelector('.chat-widget')) return

  const widget = document.createElement('div')
  widget.className = 'chat-widget'
  widget.innerHTML = `
    <div class="chat-panel" id="chat-panel" hidden>
      <div class="chat-panel-header">
        <div class="chat-panel-heading">
          <span class="chat-status-dot" aria-hidden="true"></span>
          <div>
            <p class="chat-panel-title">Chat Assistant</p>
            <p class="chat-panel-subtitle">Online</p>
          </div>
        </div>
        <button type="button" class="chat-close" id="chat-close" aria-label="Close chat">${icon('x')}</button>
      </div>
      <div class="chat-panel-body" id="chat-panel-body">
        <div class="chat-messages" id="chat-messages">
          <div class="chat-bubble chat-bubble-assistant">${GREETING}</div>
        </div>

        <div class="chat-quick-questions" id="chat-quick-questions">
          ${renderQuickQuestions()}
        </div>

        <form class="chat-text-form" id="chat-text-form">
          <input type="text" id="chat-text-input" placeholder="Type your question…" aria-label="Type your question" />
          <button type="submit" class="chat-text-send" aria-label="Send message">${icon('send')}</button>
        </form>

        <div class="chat-lead-form-wrap" id="chat-lead-form-wrap" hidden>
          <form class="chat-form" id="chat-form">
            <p class="chat-form-heading">Leave your info and we'll get back to you.</p>
            <input type="text" name="Name" placeholder="Name" autocomplete="name" required />
            <div class="chat-form-row">
              <input type="tel" name="Phone" placeholder="Phone" autocomplete="tel" />
              <input type="email" name="Email" placeholder="Email" autocomplete="email" />
            </div>
            <textarea name="Message" rows="3" placeholder="Message (optional)"></textarea>
            <button type="submit" class="button button-primary chat-send">Send</button>
            <p class="chat-form-status" id="chat-form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(widget)

  const stickyBar = document.querySelector('.sticky-cta-bar')
  const toggleButton = document.createElement('button')
  toggleButton.type = 'button'
  toggleButton.id = 'chat-toggle'
  toggleButton.setAttribute('aria-expanded', 'false')
  toggleButton.setAttribute('aria-controls', 'chat-panel')
  toggleButton.setAttribute('aria-label', 'Open chat')
  if (stickyBar) {
    toggleButton.className = 'sticky-cta-chat'
    toggleButton.innerHTML = `${icon('messageCircle')}<span>Chat</span><span class="chat-toggle-dot" aria-hidden="true"></span>`
    stickyBar.appendChild(toggleButton)
  } else {
    toggleButton.className = 'chat-toggle'
    toggleButton.innerHTML = `${icon('messageCircle')}<span class="chat-toggle-dot" aria-hidden="true"></span>`
    widget.appendChild(toggleButton)
  }
  const closeButton = widget.querySelector('#chat-close')
  const panel = widget.querySelector('#chat-panel')
  const panelBody = widget.querySelector('#chat-panel-body')
  const messagesEl = widget.querySelector('#chat-messages')
  const quickQuestionsEl = widget.querySelector('#chat-quick-questions')
  const textForm = widget.querySelector('#chat-text-form')
  const textInput = widget.querySelector('#chat-text-input')
  const leadFormWrap = widget.querySelector('#chat-lead-form-wrap')
  const leadForm = widget.querySelector('#chat-form')
  const leadFormStatus = widget.querySelector('#chat-form-status')
  const messageField = leadForm.querySelector('textarea[name="Message"]')

  const askedQuestions = []
  let leadFormRevealed = false

  const setOpen = (open) => {
    panel.hidden = !open
    toggleButton.setAttribute('aria-expanded', String(open))
    widget.classList.toggle('chat-widget-open', open)
  }

  const scrollToBottom = () => {
    panelBody.scrollTop = panelBody.scrollHeight
  }

  const addBubble = (text, role) => {
    const bubble = document.createElement('div')
    bubble.className = `chat-bubble chat-bubble-${role}`
    bubble.textContent = text
    messagesEl.appendChild(bubble)
    scrollToBottom()
  }

  const syncMessageField = () => {
    messageField.value = askedQuestions.join('\n')
  }

  const revealLeadForm = () => {
    if (leadFormRevealed) return
    leadFormRevealed = true
    textForm.hidden = true
    leadFormWrap.hidden = false
    syncMessageField()
    scrollToBottom()
  }

  const handleUserQuestion = (questionText, matchedFaq) => {
    if (!quickQuestionsEl.hidden) {
      quickQuestionsEl.hidden = true
    }

    addBubble(questionText, 'client')
    askedQuestions.push(questionText)

    if (matchedFaq) {
      addBubble(matchedFaq.a, 'assistant')
    } else {
      addBubble(GENERIC_ACK, 'assistant')
    }

    if (askedQuestions.length === 2) {
      addBubble(MORE_QUESTIONS_PROMPT, 'assistant')
      revealLeadForm()
    } else if (leadFormRevealed) {
      syncMessageField()
    }
  }

  toggleButton.addEventListener('click', () => {
    setOpen(panel.hidden)
  })

  closeButton.addEventListener('click', () => setOpen(false))

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false)
      toggleButton.focus()
    }
  })

  widget.querySelector('#chat-quick-questions').addEventListener('click', (event) => {
    const button = event.target.closest('.chat-quick-question')
    if (!button) return
    const faq = faqItems[Number(button.dataset.faqIndex)]
    if (!faq) return
    handleUserQuestion(faq.q, faq)
  })

  textForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const value = textInput.value.trim()
    if (!value) return
    handleUserQuestion(value, null)
    textInput.value = ''
    textInput.focus()
  })

  leadForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const phoneField = leadForm.querySelector('input[name="Phone"]')
    const emailField = leadForm.querySelector('input[name="Email"]')
    const phoneValue = phoneField.value.trim()
    const emailValue = emailField.value.trim()

    if (!phoneValue && !emailValue) {
      leadFormStatus.textContent = 'Please leave either a phone number or an email so we can get back to you.'
      emailField.focus()
      return
    }

    const data = Object.fromEntries(new FormData(leadForm).entries())
    // TODO: wire up to the real intake endpoint once n8n is configured for the chat widget.
    console.log('[chat-widget] lead submitted (stub, not sent anywhere yet):', data)

    leadForm.reset()
    leadFormStatus.textContent = "Thanks! We'll get back to you soon."
    addBubble("Thanks — we'll get back to you soon!", 'assistant')
  })
}
