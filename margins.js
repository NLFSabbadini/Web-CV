function setMargins() {
  const page = document.getElementById('page');

  const contentHeightPx = page.offsetHeight;
  const contentWidthPx = page.offsetWidth;
  const contentWidthEm = (
    parseFloat(getComputedStyle(document.body).getPropertyValue('--column-width-1').trim()) +
    parseFloat(getComputedStyle(document.body).getPropertyValue('--column-width-2').trim()) +
    parseFloat(getComputedStyle(document.body).getPropertyValue('--column-break').trim()) +
    parseFloat(getComputedStyle(document.body).getPropertyValue('--min-page-margins').trim()) * 2
  );
  const minMarginEm = parseFloat(getComputedStyle(document.body).getPropertyValue('--min-page-margins').trim());
  const aspectRatio = parseFloat(getComputedStyle(document.body).getPropertyValue('--page-aspect-ratio').trim());

  const PxPerEm = contentWidthPx / contentWidthEm

  if (contentWidthPx / contentHeightPx > aspectRatio) {
    const padding = (contentWidthPx / aspectRatio - contentHeightPx) / PxPerEm + minMarginEm
    console.log(padding)
    page.style.paddingBottom = `${padding}em`;
  } else {
    const padding = (contentHeightPx * aspectRatio / PxPerEm - contentWidthEm) / 2 + minMarginEm;
    page.style.paddingLeft = `${padding}em`;
    page.style.paddingRight = `${padding}em`;
  }

  console.log(page.offsetWidth/page.offsetHeight)
}

window.addEventListener('load', setMargins);