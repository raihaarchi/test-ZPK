export const createLink = (path: string, isMobile?: boolean) => {
  if (!window || !document) return;
  const link = document.createElement('a');
  link.setAttribute('href', path);
  if (!isMobile) {
    link.setAttribute('target', '_blank');
  }
  document.body.appendChild(link);
  link.click();
};
