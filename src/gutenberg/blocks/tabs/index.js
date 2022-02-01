/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';

import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
  ...metadata,
  title: __('Tabs', '@@text_domain'),
  description: __('Separate content on the tabs with titles.', '@@text_domain'),
  icon: getIcon('block-tabs', true),
  keywords: [__('tabs', '@@text_domain'), __('tab', '@@text_domain')],
  ghostkit: {
    previewUrl: 'https://ghostkit.io/blocks/tabs/',
    supports: {
      styles: true,
      spacings: true,
      display: true,
      scrollReveal: true,
      customCSS: true,
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Tabs', '@@text_domain'),
      isDefault: true,
    },
    {
      name: 'pills',
      label: __('Pills', '@@text_domain'),
    },
  ],
  edit,
  save,
  transforms,
};
