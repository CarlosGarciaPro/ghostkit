/**
 * Internal dependencies
 */
import { maybeDecode } from '../../utils/encode-decode';

/**
 * Block TOC
 */
const { jQuery: $ } = window;
const $doc = $(document);

/**
 * Prepare TOCs.
 */
$doc.on('click', '.ghostkit-toc a', (evt) => {
  evt.preventDefault();

  if (!evt.target || !evt.target.hash) {
    return;
  }

  const offset = $(maybeDecode(evt.target.hash)).offset();

  if (typeof offset === 'undefined') {
    return;
  }

  const $adminBar = $('#wpadminbar');
  let { top } = offset;

  // Admin bar offset.
  if ($adminBar.length && $adminBar.css('position') === 'fixed') {
    top -= $adminBar.outerHeight();
  }

  // Limit max offset.
  top = Math.max(0, top);

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
});
