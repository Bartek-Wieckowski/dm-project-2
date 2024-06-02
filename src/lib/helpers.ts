export const BASE_URL = 'http://localhost:3000';

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

export function formatFileName(fileName: string) {
  const cleanedFileName = fileName.replace(/[-_]/g, ' ');

  return cleanedFileName.charAt(0).toUpperCase() + cleanedFileName.slice(1);
}