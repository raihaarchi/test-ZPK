export const downloadFile = ({
  file,
  fileName,
}: {
  file: Blob;
  fileName: string;
}) => {
  if (!window || !document) return;
  const url = window.URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};
