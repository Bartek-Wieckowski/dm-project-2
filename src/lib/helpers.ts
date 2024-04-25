export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

export function isInvalidText(text: string) {
  return !text || text.trim() === '';
}
