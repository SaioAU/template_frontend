const mqPhone = window.matchMedia('(max-width : 480px)');
const mqTablet = window.matchMedia('(max-width : 768px)');

export const getMediaType = () => {
  if (mqPhone.matches) return 'PHONE';
  if (mqTablet.matches) return 'TABLET';
  return 'DESKTOP';
};
