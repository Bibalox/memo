export function parseMarkdown(markdown: string) {
  const lines = markdown !== null ? markdown.split('\n') : []
  const result = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Skip empty lines
    if (line.trim() === '') {
      i++
      continue
    }

    // Title: starts with single '#' (not '##')
    if (/^# /.test(line)) {
      result.push({ type: 'title', content: line.slice(2) })
      i++
      continue
    }

    // Horizontal rule: '---' or '***'
    if (/^(---|\*\*\*)$/.test(line.trim())) {
      result.push({ type: 'horizontal-rule' })
      i++
      continue
    }

    // Unordered list: consecutive lines starting with '- '
    if (/^- /.test(line)) {
      const items = []
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2))
        i++
      }
      result.push({ type: 'unordered-list', items })
      continue
    }

    // Blockquote: consecutive lines starting with '> '
    if (/^> /.test(line)) {
      const lines_ = []
      while (i < lines.length && /^> /.test(lines[i])) {
        lines_.push(lines[i].slice(2))
        i++
      }
      result.push({ type: 'blockquote', lines: lines_ })
      continue
    }

    // Unrecognized line — skip
    i++
  }

  return result
}