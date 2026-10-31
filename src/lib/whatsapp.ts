const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

export function openWhatsApp(message = 'Olá! Gostaria de consultar a disponibilidade de um iPhone.') {
  if (!rawNumber) return null;
  const number = rawNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function hasWhatsApp() {
  return Boolean(rawNumber?.replace(/\D/g, ''));
}
