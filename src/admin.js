import './admin.css'

const CATEGORIES = [
  { id: '',            label: '— No category —' },
  { id: 'solar',       label: 'Solar Control' },
  { id: 'privacy',     label: 'Privacy' },
  { id: 'safety',      label: 'Safety & Security' },
  { id: 'antigraffiti',label: 'Anti-Graffiti' },
  { id: 'decorative',  label: 'Decorative' },
  { id: 'smartfilm',   label: 'Smart Film' },
]

const CAT_LABELS = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]))

const app = document.getElementById('admin-app')

// ── State ──────────────────────────────
let password     = sessionStorage.getItem('admin_pass') || ''
let igPosts      = []          // all fetched Instagram posts
let nextCursor   = null        // pagination cursor
let hasMore      = false
let localState   = {}          // postId → { visible, caption, category }
let unsaved      = false
let filterMode   = 'all'       // 'all' | 'visible' | 'hidden' | category id

// ── Boot ───────────────────────────────
if (password) {
  renderShell()
  loadData()
} else {
  renderLogin()
}

// ── Login ──────────────────────────────
function renderLogin() {
  app.innerHTML = `
    <div class="admin-login">
      <div class="admin-login-card">
        <img class="admin-login-logo" src="/solcrest-logo-header-dark.png" alt="Solcrest" />
        <h1>Portfolio Manager</h1>
        <p>Enter your password to manage which posts appear on the website.</p>
        <input class="admin-input" id="a-pass" type="password" placeholder="Admin password" autocomplete="current-password" />
        <button class="admin-btn-primary" id="a-login-btn">Sign In</button>
        <p class="admin-login-error" id="a-error"></p>
      </div>
    </div>
  `
  const input = document.getElementById('a-pass')
  const btn   = document.getElementById('a-login-btn')
  const err   = document.getElementById('a-error')

  const attempt = async () => {
    const val = input.value.trim()
    if (!val) return
    btn.disabled = true
    btn.textContent = 'Checking…'
    err.textContent = ''

    // Verify password against API before proceeding
    try {
      const res = await fetch('/api/curated', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: val, posts: null, _check: true }),
      })
      if (res.status === 401) {
        err.textContent = 'Wrong password. Try again.'
        btn.disabled = false
        btn.textContent = 'Sign In'
        input.focus()
        return
      }
    } catch {
      err.textContent = 'Network error. Check your connection and try again.'
      btn.disabled = false
      btn.textContent = 'Sign In'
      return
    }

    password = val
    sessionStorage.setItem('admin_pass', val)
    renderShell()
    loadData()
  }

  btn.addEventListener('click', attempt)
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') attempt() })
  input.focus()
}

// ── Shell ───────────────────────────────
function renderShell() {
  app.innerHTML = `
    <header class="admin-header">
      <div class="admin-header-left">
        <img class="admin-header-logo" src="/solcrest-logo-header-dark.png" alt="Solcrest" />
        <div class="admin-header-sep"></div>
        <span class="admin-header-title">Portfolio Manager</span>
      </div>
      <div class="admin-header-right">
        <span class="admin-save-status" id="a-save-status"></span>
        <button class="admin-save-btn" id="a-save-btn">Save changes</button>
        <button class="admin-logout-btn" id="a-logout-btn">Log out</button>
      </div>
    </header>

    <main class="admin-main">
      <div class="admin-stats" id="a-stats"></div>
      <div class="admin-filter-bar" id="a-filter-bar"></div>
      <div class="admin-grid" id="a-grid">
        ${Array(12).fill('<div class="admin-skeleton"></div>').join('')}
      </div>
      <div class="admin-load-more" id="a-load-more" style="display:none">
        <button class="admin-load-more-btn" id="a-load-more-btn">Load more posts</button>
      </div>
    </main>

    <div class="admin-toast" id="a-toast"></div>

    <!-- ── Preview Modal ── -->
    <div class="admin-pv-modal" id="a-pv" hidden>
      <div class="admin-pv-bd" id="a-pv-bd"></div>
      <div class="admin-pv-wrap">
        <button class="admin-pv-close" id="a-pv-close" title="Close (Esc)">×</button>
        <button class="admin-pv-postnav prev" id="a-pv-prev" title="Previous post">‹</button>
        <button class="admin-pv-postnav next" id="a-pv-next" title="Next post">›</button>
        <div class="admin-pv-card">
          <div class="admin-pv-media-wrap">
            <div class="admin-pv-media" id="a-pv-media"></div>
            <div class="admin-pv-slides" id="a-pv-slides" style="display:none">
              <button id="a-pv-slide-prev">‹</button>
              <span id="a-pv-slide-count"></span>
              <button id="a-pv-slide-next">›</button>
            </div>
          </div>
          <div class="admin-pv-sidebar">
            <p class="admin-pv-cap" id="a-pv-cap"></p>
            <p class="admin-pv-date" id="a-pv-date"></p>
            <hr class="admin-pv-hr" />
            <div class="admin-pv-controls">
              <label class="admin-pv-label">Category</label>
              <select class="admin-card-category" id="a-pv-cat"></select>
              <button class="admin-pv-vis-btn" id="a-pv-vis"></button>
              <a class="admin-pv-ig-link" id="a-pv-ig-link" href="" target="_blank" rel="noopener noreferrer">View on Instagram ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  document.getElementById('a-save-btn').addEventListener('click', saveAll)
  document.getElementById('a-logout-btn').addEventListener('click', logout)

  // Preview modal controls
  document.getElementById('a-pv-close').addEventListener('click', closePreview)
  document.getElementById('a-pv-bd').addEventListener('click', closePreview)
  document.getElementById('a-pv-prev').addEventListener('click', () => navigatePost(-1))
  document.getElementById('a-pv-next').addEventListener('click', () => navigatePost(1))
  document.getElementById('a-pv-slide-prev').addEventListener('click', () => navigateSlide(-1))
  document.getElementById('a-pv-slide-next').addEventListener('click', () => navigateSlide(1))

  document.addEventListener('keydown', handlePreviewKey)
}

// ── Preview state ────────────────────────
let previewPostId  = null
let previewSlideIdx = 0

function getFilteredPosts() {
  return igPosts.filter((p) => {
    const state = localState[p.id]
    if (filterMode === 'visible') return state?.visible
    if (filterMode === 'hidden')  return !state?.visible
    if (filterMode !== 'all')     return state?.category === filterMode
    return true
  })
}

function openPreview(postId) {
  previewPostId  = postId
  previewSlideIdx = 0
  document.getElementById('a-pv').removeAttribute('hidden')
  document.body.style.overflow = 'hidden'
  updatePreviewContent()
}

function closePreview() {
  document.getElementById('a-pv').setAttribute('hidden', '')
  document.body.style.overflow = ''
  previewPostId = null
}

function navigatePost(dir) {
  const list = getFilteredPosts()
  const idx  = list.findIndex((p) => p.id === previewPostId)
  const next = list[idx + dir]
  if (next) { previewPostId = next.id; previewSlideIdx = 0; updatePreviewContent() }
}

function navigateSlide(dir) {
  const post = igPosts.find((p) => p.id === previewPostId)
  if (!post) return
  const slides = post.children?.data || []
  previewSlideIdx = Math.max(0, Math.min(slides.length - 1, previewSlideIdx + dir))
  updatePreviewContent()
}

function handlePreviewKey(e) {
  const modal = document.getElementById('a-pv')
  if (!modal || modal.hidden) return
  if (e.key === 'Escape')      { e.preventDefault(); closePreview() }
  if (e.key === 'ArrowLeft')   { e.preventDefault(); navigatePost(-1) }
  if (e.key === 'ArrowRight')  { e.preventDefault(); navigatePost(1) }
}

function updatePreviewContent() {
  const post = igPosts.find((p) => p.id === previewPostId)
  if (!post) return
  const state      = localState[post.id] || { visible: false, caption: '', category: '', pinned: false }
  const isCarousel = post.media_type === 'CAROUSEL_ALBUM'
  const slides     = isCarousel ? (post.children?.data || []) : [post]
  const current    = slides[previewSlideIdx] || post

  // Media
  const mediaEl = document.getElementById('a-pv-media')
  if (current.media_type === 'VIDEO') {
    const poster = current.thumbnail_url || post.thumbnail_url || ''
    mediaEl.innerHTML = `<video src="${current.media_url}" poster="${poster}" controls playsinline></video>`
  } else {
    const src = current.media_url || current.thumbnail_url || post.media_url || post.thumbnail_url
    mediaEl.innerHTML = `<img src="${src}" alt="" />`
  }

  // Carousel nav
  const slidesNav = document.getElementById('a-pv-slides')
  if (isCarousel && slides.length > 1) {
    slidesNav.style.display = 'flex'
    document.getElementById('a-pv-slide-count').textContent = `${previewSlideIdx + 1} / ${slides.length}`
    document.getElementById('a-pv-slide-prev').disabled = previewSlideIdx === 0
    document.getElementById('a-pv-slide-next').disabled = previewSlideIdx === slides.length - 1
  } else {
    slidesNav.style.display = 'none'
  }

  // Post nav arrows
  const list = getFilteredPosts()
  const idx  = list.findIndex((p) => p.id === previewPostId)
  document.getElementById('a-pv-prev').disabled = idx <= 0
  document.getElementById('a-pv-next').disabled = idx >= list.length - 1

  // Caption
  document.getElementById('a-pv-cap').textContent = post.caption || '(no caption)'

  // Date
  const date = post.timestamp
    ? new Date(post.timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''
  document.getElementById('a-pv-date').textContent = date

  // Category selector
  const catEl = document.getElementById('a-pv-cat')
  catEl.innerHTML = CATEGORIES.map((c) =>
    `<option value="${c.id}" ${state.category === c.id ? 'selected' : ''}>${c.label}</option>`
  ).join('')
  catEl.onchange = () => {
    if (!localState[post.id]) localState[post.id] = { visible: false, caption: '', category: '', pinned: false }
    localState[post.id].category = catEl.value
    markUnsaved()
    renderStats()
    // Sync with grid card
    const gridSel = document.querySelector(`.admin-card-category[data-id="${post.id}"]`)
    if (gridSel) gridSel.value = catEl.value
  }

  // Visibility toggle
  const visBtn = document.getElementById('a-pv-vis')
  const refreshVis = () => {
    const v = localState[post.id]?.visible
    visBtn.textContent = v ? '👁  Visible on site' : '🚫  Hidden from site'
    visBtn.classList.toggle('is-on', !!v)
  }
  refreshVis()
  visBtn.onclick = () => {
    if (!localState[post.id]) localState[post.id] = { visible: false, caption: '', category: '', pinned: false }
    localState[post.id].visible = !localState[post.id].visible
    markUnsaved()
    renderStats()
    refreshVis()
    // Sync grid card
    const card = document.querySelector(`.admin-toggle-btn[data-id="${post.id}"]`)?.closest('.admin-card')
    if (card) {
      card.classList.toggle('is-visible', localState[post.id].visible)
      const toggleIcon = card.querySelector('.admin-toggle-btn')
      if (toggleIcon) toggleIcon.innerHTML = eyeIcon(localState[post.id].visible)
    }
  }

  // Instagram link
  const igLink = document.getElementById('a-pv-ig-link')
  igLink.href = post.permalink || `https://instagram.com/solcrestfilmco`
}

// ── Load data ───────────────────────────
async function loadData() {
  try {
    const [igData, curatedData] = await Promise.all([
      fetch('/api/instagram?limit=50').then((r) => r.json()),
      fetch('/api/curated').then((r) => r.json()),
    ])

    // Init Instagram posts
    igPosts = igData.data || []
    nextCursor = igData.paging?.cursors?.after || null
    hasMore = !!igData.paging?.next

    // Init localState from curated list
    localState = {}
    for (const saved of (curatedData.posts || [])) {
      localState[saved.id] = {
        visible:  saved.visible  ?? false,
        caption:  saved.caption  ?? '',
        category: saved.category ?? '',
        pinned:   saved.pinned   ?? false,
      }
    }

    renderAll()
  } catch (err) {
    console.error(err)
    showToast('Failed to load data. Check connection.', 'error')
  }
}

// ── Load more Instagram posts ───────────
async function loadMore() {
  if (!nextCursor) return
  const btn = document.getElementById('a-load-more-btn')
  if (btn) { btn.disabled = true; btn.textContent = 'Loading...' }

  try {
    const data = await fetch(`/api/instagram?limit=50&cursor=${encodeURIComponent(nextCursor)}`).then((r) => r.json())
    const newPosts = data.data || []
    igPosts = [...igPosts, ...newPosts]
    nextCursor = data.paging?.cursors?.after || null
    hasMore = !!data.paging?.next
    renderAll()
  } catch {
    showToast('Failed to load more posts.', 'error')
    if (btn) { btn.disabled = false; btn.textContent = 'Load more posts' }
  }
}

// ── Render everything ───────────────────
function renderAll() {
  renderStats()
  renderFilterBar()
  renderGrid()
  const lm = document.getElementById('a-load-more')
  if (lm) lm.style.display = hasMore ? 'block' : 'none'

  const lmBtn = document.getElementById('a-load-more-btn')
  if (lmBtn) {
    lmBtn.disabled = false
    lmBtn.textContent = 'Load more posts'
    lmBtn.onclick = loadMore
  }
}

// ── Stats ───────────────────────────────
function renderStats() {
  const el = document.getElementById('a-stats')
  if (!el) return
  const visible = igPosts.filter((p) => localState[p.id]?.visible).length
  const total   = igPosts.length
  const byCat   = {}
  for (const p of igPosts) {
    const cat = localState[p.id]?.category
    if (localState[p.id]?.visible && cat) byCat[cat] = (byCat[cat] || 0) + 1
  }

  el.innerHTML = `
    <div class="admin-stat"><div class="admin-stat-value">${total}${hasMore ? '+' : ''}</div><div class="admin-stat-label">Fetched</div></div>
    <div class="admin-stat"><div class="admin-stat-value">${visible}</div><div class="admin-stat-label">Visible on site</div></div>
    ${CATEGORIES.filter((c) => c.id && byCat[c.id]).map((c) => `
      <div class="admin-stat"><div class="admin-stat-value">${byCat[c.id]}</div><div class="admin-stat-label">${c.label}</div></div>
    `).join('')}
  `
}

// ── Filter bar ───────────────────────────
function renderFilterBar() {
  const el = document.getElementById('a-filter-bar')
  if (!el) return

  const filters = [
    { id: 'all',     label: 'All posts' },
    { id: 'visible', label: '✓ On site' },
    { id: 'hidden',  label: '✗ Hidden' },
    ...CATEGORIES.filter((c) => c.id),
  ]

  el.innerHTML = `
    <span class="admin-filter-label">Filter:</span>
    ${filters.map((f) => `
      <button class="admin-filter-chip ${filterMode === f.id ? 'active' : ''}" data-filter="${f.id}">
        ${f.label}
      </button>
    `).join('')}
  `

  el.querySelectorAll('.admin-filter-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      filterMode = btn.dataset.filter
      renderFilterBar()
      renderGrid()
    })
  })
}

// ── Grid ────────────────────────────────
function renderGrid() {
  const grid = document.getElementById('a-grid')
  if (!grid) return

  const filtered = igPosts.filter((p) => {
    const state = localState[p.id]
    if (filterMode === 'visible') return state?.visible
    if (filterMode === 'hidden')  return !state?.visible
    if (filterMode !== 'all')     return state?.category === filterMode
    return true
  })

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="admin-empty">No posts match this filter.</div>'
    return
  }

  grid.innerHTML = filtered.map((post) => renderCard(post)).join('')

  // Thumbnail click → open preview
  grid.querySelectorAll('.admin-card-thumb-click').forEach((thumb) => {
    thumb.addEventListener('click', () => openPreview(thumb.dataset.id))
  })

  // Pin button
  grid.querySelectorAll('.admin-pin-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = btn.dataset.id
      if (!localState[id]) localState[id] = { visible: false, caption: '', category: '', pinned: false }
      const cat = localState[id].category
      if (!cat) { showToast('Set a category first, then pin.', 'error'); return }
      const wasPinned = localState[id].pinned
      // Unpin all others in same category
      for (const [otherId, st] of Object.entries(localState)) {
        if (otherId !== id && st.category === cat) st.pinned = false
      }
      localState[id].pinned = !wasPinned
      markUnsaved()
      renderGrid()
      renderStats()
    })
  })

  // Wire up events
  grid.querySelectorAll('.admin-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = btn.dataset.id
      if (!localState[id]) localState[id] = { visible: false, caption: '', category: '' }
      localState[id].visible = !localState[id].visible
      markUnsaved()
      // Update card class without full re-render
      const card = btn.closest('.admin-card')
      card.classList.toggle('is-visible', localState[id].visible)
      btn.closest('.admin-card').querySelector('.admin-toggle-btn').innerHTML = eyeIcon(localState[id].visible)
      renderStats()
    })
  })

  grid.querySelectorAll('.admin-card-caption').forEach((ta) => {
    ta.addEventListener('input', () => {
      const id = ta.dataset.id
      if (!localState[id]) localState[id] = { visible: false, caption: '', category: '' }
      localState[id].caption = ta.value
      markUnsaved()
    })
  })

  grid.querySelectorAll('.admin-card-category').forEach((sel) => {
    sel.addEventListener('change', () => {
      const id = sel.dataset.id
      if (!localState[id]) localState[id] = { visible: false, caption: '', category: '' }
      localState[id].category = sel.value
      markUnsaved()
      renderStats()
    })
  })
}

function renderCard(post) {
  const state    = localState[post.id] || { visible: false, caption: '', category: '', pinned: false }
  const thumb    = post.thumbnail_url || post.media_url || ''
  const isVisible = !!state.visible
  const isPinned  = !!state.pinned
  const isVideo   = post.media_type === 'VIDEO'
  const isCarousel = post.media_type === 'CAROUSEL_ALBUM'
  const typeLabel = isVideo ? '▶ Reel' : isCarousel ? '⧉ Album' : ''
  const date = post.timestamp ? new Date(post.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''
  const igCaption = (post.caption || '').slice(0, 120)

  const catOptions = CATEGORIES.map((c) => `
    <option value="${c.id}" ${state.category === c.id ? 'selected' : ''}>${c.label}</option>
  `).join('')

  return `
    <div class="admin-card ${isVisible ? 'is-visible' : ''}">
      <div class="admin-card-thumb admin-card-thumb-click" data-id="${post.id}" title="Click to preview">
        <img src="${thumb}" alt="" loading="lazy" decoding="async" />
        <div class="admin-thumb-expand">⤢</div>
        ${typeLabel ? `<span class="admin-type-badge">${typeLabel}</span>` : ''}
        <button class="admin-toggle-btn" data-id="${post.id}" title="${isVisible ? 'Hide from site' : 'Show on site'}">
          ${eyeIcon(isVisible)}
        </button>
        <button class="admin-pin-btn ${isPinned ? 'is-pinned' : ''}" data-id="${post.id}" title="${isPinned ? 'Unpin from homepage' : 'Pin to homepage'}">
          📌
        </button>
      </div>
      <div class="admin-card-body">
        <textarea
          class="admin-card-caption"
          data-id="${post.id}"
          placeholder="${igCaption ? escAttr(igCaption.slice(0, 60)) + '…' : 'Custom caption for site…'}"
        >${escAttr(state.caption)}</textarea>
        <select class="admin-card-category" data-id="${post.id}">
          ${catOptions}
        </select>
        ${date ? `<div class="admin-card-meta">${date}</div>` : ''}
      </div>
    </div>
  `
}

function eyeIcon(visible) {
  return visible
    ? `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>`
    : `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zm5.53 5.53l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 01-5-5c0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`
}

// ── Save ────────────────────────────────
async function saveAll() {
  const btn = document.getElementById('a-save-btn')
  const status = document.getElementById('a-save-status')
  if (btn) btn.disabled = true
  if (status) { status.className = 'admin-save-status'; status.textContent = 'Saving…' }

  // Build posts array — only include posts we know about
  const posts = igPosts
    .filter((p) => localState[p.id]?.visible || localState[p.id]?.caption || localState[p.id]?.category)
    .map((p) => ({
      id:        p.id,
      visible:   localState[p.id]?.visible   ?? false,
      caption:   localState[p.id]?.caption   ?? '',
      category:  localState[p.id]?.category  ?? '',
      pinned:    localState[p.id]?.pinned    ?? false,
      permalink: p.permalink || '',
      thumb:     p.thumbnail_url || p.media_url || '',
      media_type: p.media_type || 'IMAGE',
    }))

  try {
    const res = await fetch('/api/curated', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, posts }),
    })
    const data = await res.json()

    if (res.status === 401) {
      showToast('Wrong password. Please log in again.', 'error')
      logout()
      return
    }
    if (!res.ok) throw new Error(data.error || 'Save failed')

    unsaved = false
    if (status) { status.className = 'admin-save-status success'; status.textContent = 'Saved ✓' }
    showToast('Changes saved! Site updated.', 'success')
    setTimeout(() => { if (status) status.textContent = '' }, 4000)
  } catch (err) {
    if (status) { status.className = 'admin-save-status error'; status.textContent = 'Save failed' }
    showToast('Save failed. Try again.', 'error')
  } finally {
    if (btn) btn.disabled = false
  }
}

function markUnsaved() {
  if (!unsaved) {
    unsaved = true
    const s = document.getElementById('a-save-status')
    if (s) { s.className = 'admin-save-status unsaved'; s.textContent = 'Unsaved changes' }
  }
}

// ── Logout ───────────────────────────────
function logout() {
  sessionStorage.removeItem('admin_pass')
  password = ''
  igPosts = []
  localState = {}
  renderLogin()
}

// ── Toast ────────────────────────────────
function showToast(msg, type = '') {
  const t = document.getElementById('a-toast')
  if (!t) return
  t.textContent = msg
  t.className = `admin-toast ${type} show`
  setTimeout(() => { t.classList.remove('show') }, 3500)
}

// ── Utils ────────────────────────────────
function escAttr(s) {
  return (s || '').replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' }[c]))
}
