/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';

import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import deprecated from './deprecated';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
  ...metadata,
  title: __('Video', '@@text_domain'),
  description: __('Plain and Fullscreen YouTube, Vimeo and Self-Hosted videos.', '@@text_domain'),
  icon: getIcon('block-video', true),
  keywords: [
    __('video', '@@text_domain'),
    __('youtube', '@@text_domain'),
    __('vimeo', '@@text_domain'),
  ],
  ghostkit: {
    previewUrl: 'https://ghostkit.io/blocks/video/',
    supports: {
      styles: true,
      frame: true,
      spacings: true,
      display: true,
      scrollReveal: true,
      customCSS: true,
    },
  },
  example: {
    attributes: {
      poster: 1,
      posterUrl: 'https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Plain', '@@text_domain'),
      isDefault: true,
    },
    {
      name: 'icon-only',
      label: __('Icon Only', '@@text_domain'),
    },
  ],
  edit,
  save,
  transforms,
  deprecated,
};
