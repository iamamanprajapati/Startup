export default function deteFormater(isoDateStr) {
  const date = new Date(isoDateStr);

  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return date.toLocaleString('en-IN', options);
}
