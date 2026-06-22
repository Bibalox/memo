export function parseMarkdown(markdown: string) {
  const lines = markdown.split('\n')
  const result = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i] ?? ''

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

    // Divider: '---' or '***'
    if (/^(---|\*\*\*)$/.test(line.trim())) {
      result.push({ type: 'divider' })
      i++
      continue
    }

    // List: consecutive lines starting with '- '
    if (/^- /.test(line)) {
      const items = []
      while (i < lines.length) {
        const line = lines[i]

        if (line === undefined || !/^- /.test(line)) break

        items.push(line.slice(2))
        i++
      }
      result.push({ type: 'unordered-list', items })
      continue
    }

    // Ordered list: consecutive lines starting with a number followed by '. '
    if (/^\d+\. /.test(line)) {
      const items = []
      while (i < lines.length) {
        const line = lines[i]
        if (line === undefined || !/^\d+\. /.test(line)) break
        items.push(line.replace(/^\d+\. /, ''))
        i++
      }
      result.push({ type: 'ordered-list', items })
      continue
    }

    // Blockquote: consecutive lines starting with '> '
    if (/^> /.test(line)) {
      const items = []
      while (i < lines.length) {
        const line = lines[i]

        if (line === undefined || !/^> /.test(line)) break

        items.push(line.slice(2))
        i++
      }
      result.push({ type: 'blockquote', lines: items })
      continue
    }

    // Single line = one paragraph (empty lines are now separators, not consumed)
    result.push({ type: 'paragraph', content: line })
    i++
  }

  return result
}