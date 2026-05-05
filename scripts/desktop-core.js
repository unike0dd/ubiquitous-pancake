(function () {
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  document.documentElement.dataset.deviceProfile = isDesktop ? 'desktop' : (document.documentElement.dataset.deviceProfile || 'adaptive');
})();
