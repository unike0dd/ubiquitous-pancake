(function () {
  const isAdaptive = window.matchMedia('(max-width: 1024px)').matches;
  if (isAdaptive) {
    document.documentElement.dataset.deviceProfile = 'mobile-tablet';
  }
})();
