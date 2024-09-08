export const formatDate = (date) => {
  let day = String(new Date(date).getUTCDate()).padStart(2, '0');
  let month = String(new Date(date).getUTCMonth() + 1).padStart(2, '0');
  let year = String(new Date(date).getUTCFullYear());

  return `${day}/${month}/${year}`;
};
