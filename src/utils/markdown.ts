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

    // paragraph
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
  const regex = /(https?:\/\/\S+)|\*\*([^*]+)\*\*|\*([^*]+)\*/g

  const result: InlineText[] = []
  let lastIndex = 0

  for (const match of text.matchAll(regex)) {
    const index = match.index ?? 0

    // Add text before the match
    if (index > lastIndex) {
      result.push({
        type: 'text',
        content: text.slice(lastIndex, index),
      })
    }

    const url = match[1]
    const strong = match[2]
    const italic = match[3]

    if (url) {
      const urlMatch = url.match(/^(.*?)([),.;!?]+)?$/)

      if (urlMatch?.[1]) {
        result.push({
          type: 'link',
          content: urlMatch[1],
        })

        if (urlMatch[2]) {
          result.push({
            type: 'text',
            content: urlMatch[2],
          })
        }
      }
    } else if (strong) {
      result.push({
        type: 'strong',
        content: strong,
      })
    } else if (italic) {
      result.push({
        type: 'em',
        content: italic,
      })
    }

    lastIndex = index + match[0].length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    result.push({
      type: 'text',
      content: text.slice(lastIndex),
    })
  }

  return result
}
