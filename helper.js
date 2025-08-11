// Helper function to calculate duration between dates
export function calculateDuration(startDate, endDate) {
  if (!startDate || !endDate) return "Not specified";

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `${diffDays} days`;
}
