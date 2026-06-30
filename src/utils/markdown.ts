import type { TextBlock, InlineText } from "@types"

export const parseMarkdown = (markdown: string): TextBlock[] => {
  const lines = markdown.split('\n')
  const result: TextBlock[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i] ?? ''

    if (line.trim() === '') {
      i++
      continue
    }

    if (line.startsWith('# ')) {
      result.push({
        type: 'title',
        content: line.slice(2),
      })
      i++
      continue
    }

    if (/^(---|\*\*\*)$/.test(line.trim())) {
      result.push({ type: 'divider' })
      i++
      continue
    }

    // unordered list
    if (line.startsWith('- ')) {
      const items: { raw: string; parts: InlineText[] }[] = []

      while (i < lines.length) {
        const l = lines[i]
        if (!l || !l.startsWith('- ')) break

        const raw = l.slice(2)

        items.push({
          raw,
          parts: parseInline(raw),
        })

        i++
      }

      result.push({
        type: 'unordered-list',
        items,
      })

      continue
    }

    // ordered list
    if (/^\d+\. /.test(line)) {
      const items: { raw: string; parts: InlineText[] }[] = []

      while (i < lines.length) {
        const l = lines[i]
        if (!l || !/^\d+\. /.test(l)) break

        const raw = l.replace(/^\d+\. /, '')

        items.push({
          raw,
          parts: parseInline(raw),
        })

        i++
      }

      result.push({
        type: 'ordered-list',
        items,
      })

      continue
    }

    // blockquote
    if (line.startsWith('> ')) {
      const linesBlock: string[] = []

      while (i < lines.length) {
        const l = lines[i]
        if (!l || !l.startsWith('> ')) break

        linesBlock.push(l.slice(2))
        i++
      }

      result.push({
        type: 'blockquote',
        lines: linesBlock,
      })

      continue
    }

    // paragraph (NOW includes inline parsing)
    result.push({
      type: 'paragraph',
      content: line,
      parts: parseInline(line),
    })

    i++
  }

  return result
}

export const parseInline = (text: string): InlineText[] => {
  const regex = /(https?:\/\/\S+)/g

  const parts = text.split(regex).filter(Boolean)

  const result: InlineText[] = []

  for (const part of parts) {
    if (!/^https?:\/\//.test(part)) {
      result.push({
        type: 'text' as const,
        content: part,
      })
      continue
    }

    const match = part.match(/^(.*?)([),.;!?]+)?$/)

    if (!match || !match[1]) continue

    const url = match[1]
    const trailing = match[2] ?? ''

    result.push({
      type: 'link' as const,
      content: url,
    })

    if (trailing) {
      result.push({
        type: 'text' as const,
        content: trailing,
      })
    }
  }

  return result
}
