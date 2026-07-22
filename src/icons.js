const paths = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  eyeOff:
    '<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9 4.5 10 8-.35 1.22-1 2.5-1.9 3.66M6.5 6.6C4.4 8.1 2.9 10 2 12c1 3.5 5 8 10 8 1.44 0 2.8-.3 4-.86"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/><path d="M2 2l20 20"/>',
  shield:
    '<path d="M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6l8-3.5Z"/>',
  shieldCheck:
    '<path d="M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6l8-3.5Z"/><path d="M9 12l2 2 4-4"/>',
  store:
    '<path d="M3 9.5 4.5 4h15L21 9.5"/><path d="M3 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M5 10v9.5h14V10"/><path d="M10 19.5V15h4v4.5"/>',
  smartphone:
    '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  sprayCan:
    '<path d="M9 3v3M6 6h6M6 6l-1.2 15A1 1 0 0 0 5.8 22h6.4a1 1 0 0 0 1-1.1L11 6"/><path d="M15 8h.01M18 6h.01M17 11h.01M19 14h.01"/>',
  layers:
    '<path d="M12 3 2.5 8 12 13l9.5-5L12 3Z"/><path d="M2.5 13 12 18l9.5-5"/>',
  sparkles:
    '<path d="M11 3l1.3 3.6L16 8l-3.7 1.4L11 13l-1.3-3.6L6 8l3.7-1.4L11 3Z"/><path d="M18.5 13l.8 2.2L21.5 16l-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/>',
  mapPin:
    '<path d="M12 21.5s7-6.2 7-11.7A7 7 0 0 0 5 9.8c0 5.5 7 11.7 7 11.7Z"/><circle cx="12" cy="9.8" r="2.4"/>',
  badgeCheck:
    '<path d="M12 2.5l2.2 1.6 2.7-.2 1 2.5 2.4 1.3-.6 2.7.6 2.7-2.4 1.3-1 2.5-2.7-.2L12 18.3l-2.2-1.6-2.7.2-1-2.5-2.4-1.3.6-2.7-.6-2.7 2.4-1.3 1-2.5 2.7.2L12 2.5Z"/><path d="M9 10.5l2 2 4-4"/>',
  messageCircle:
    '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20l1.1-4.7A8.5 8.5 0 1 1 21 11.5Z"/>',
  ruler:
    '<path d="M3.5 16.5 16.5 3.5a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L7.5 20.5a1.4 1.4 0 0 1-2 0l-2-2a1.4 1.4 0 0 1 0-2Z"/><path d="M14.5 6.5l2 2M11.5 9.5l2 2M8.5 12.5l2 2"/>',
  wrench:
    '<path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2-2 2.6-2.6Z"/>',
  mail:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 6.5l8 6 8-6"/>',
  camera:
    '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.5" r="3.5"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  check: '<path d="M4 12.5l5 5L20 6"/>',
  diamond:
    '<path d="M5 3h14l3 5-10 13L2 8Z"/><path d="M2 8h20M8.5 3l3.5 5-3 12M15.5 3l-3.5 5 3 12"/>',
  fileBolt:
    '<path d="M7 2.5h7l4 4V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z"/><path d="M14 2.5V7h4"/><path d="M13 10.5l-3 4h2.3l-1.3 3.5 3.7-4.3h-2.2l1.5-3.2Z"/>',
  x: '<path d="M5 5l14 14M19 5L5 19"/>',
  chevronDown: '<path d="M5.5 8.5l6.5 6.5 6.5-6.5"/>',
  send: '<path d="M4 4l16 8-16 8 3.5-8L4 4Z"/><path d="M7.5 12H20"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><path d="M17.5 6.5h.01"/>',
  facebook:
    '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
  google:
    '<path d="M20.945 11a9 9 0 1 1-3.284-5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945Z"/>',
}

export function icon(name, className = '') {
  const body = paths[name]
  if (!body) return ''
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`
}
