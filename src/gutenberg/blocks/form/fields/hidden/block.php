<?php
/**
 * Form Field Hidden block.
 *
 * @package ghostkit
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class GhostKit_Form_Field_Hidden_Block
 */
class GhostKit_Form_Field_Hidden_Block {
    /**
     * GhostKit_Form_Field_Hidden_Block constructor.
     */
    public function __construct() {
        add_action( 'init', array( $this, 'init' ) );
    }

    /**
     * Init.
     */
    public function init() {
        register_block_type_from_metadata(
            dirname( __FILE__ ),
            array(
                'render_callback' => array( $this, 'block_render' ),
                'attributes'      => GhostKit_Form_Field_Attributes::get_block_attributes(
                    array(
                        'label' => array(
                            'default' => esc_html__( 'Hidden', '@@text_domain' ),
                        ),
                    )
                ),
            )
        );
    }

    /**
     * Register gutenberg block output
     *
     * @param array $attributes - block attributes.
     *
     * @return string
     */
    public function block_render( $attributes ) {
        ob_start();

        $class = 'ghostkit-form-field ghostkit-form-field-hidden';

        if ( isset( $attributes['className'] ) ) {
            $class .= ' ' . $attributes['className'];
        }

        ?>

        <div class="<?php echo esc_attr( $class ); ?>">
            <?php
            GhostKit_Form_Field_Label::get(
                array_merge(
                    $attributes,
                    array(
                        'removeLabel' => true,
                    )
                )
            );
            ?>

            <input type="hidden" <?php GhostKit_Form_Field_Attributes::get( $attributes ); ?> />
        </div>

        <?php

        return ob_get_clean();
    }
}
new GhostKit_Form_Field_Hidden_Block();
