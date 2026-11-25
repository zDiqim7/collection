export interface LinkItem {
  title: string;
  url: string;
  desc: string;
  category: string;
}

export function parseLinks(content: string): LinkItem[] {
  const items: LinkItem[] = [];
  let currentCategory = 'General';

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
      currentCategory = trimmed.replace(/^#{2,3}\s+/, '').trim();
      continue;
    }

    const markdownLink = trimmed.match(
      /^-\s+\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)(?:\s*[-–—:]\s*(.+))?$/,
    );
    if (markdownLink) {
      items.push({
        title: markdownLink[1].trim(),
        url: markdownLink[2].trim(),
        desc: (markdownLink[3] || '').trim(),
        category: currentCategory,
      });
      continue;
    }

    const rawUrlMatch = trimmed.match(
      /^-\s+(https?:\/\/\S+)(?:\s*[-–—:]\s*(.+))?$/,
    );
    if (rawUrlMatch) {
      const cleanHost = rawUrlMatch[1]
        .replace(/^https?:\/\/(www\.)?/, '')
        .split('/')[0];
      items.push({
        title: cleanHost,
        url: rawUrlMatch[1].trim(),
        desc: (rawUrlMatch[2] || '').trim(),
        category: currentCategory,
      });
    }
  }

  return items;
}