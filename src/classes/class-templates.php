<?php
/**
 * Templates
 *
 * @deprecated since v3.1.0
 *
 * @package @@plugin_name
 */

/**
 * GhostKit_Templates
 */
class GhostKit_Templates {
    /**
     * Is templates feature allowed to display in UI.
     *
     * @var boolean
     */
    public static $is_allowed = null;

    /**
     * GhostKit_Templates constructor.
     */
    public static function init() {
        add_action( 'init', 'GhostKit_Templates::add_custom_post_type' );
        add_filter( 'admin_notices', 'GhostKit_Templates::add_templates_page_notice' );

        add_action(
            'wp_loaded',
            function () {
                if ( ! is_admin() ) {
                    return;
                }

                $allow_templates = GhostKit_Templates::is_allowed() ? 'true' : 'false';

                // Disable customizer settings from GhostKit.
                wp_add_inline_script( 'ghostkit-helper', 'if (ghostkitVariables) { ghostkitVariables.allowTemplates = ' . $allow_templates . '; }', 'before' );
            },
            9
        );
    }

    /**
     * Check if displaying Templates allowed.
     *
     * @return boolean
     */
    public static function is_allowed() {
        if ( null !== self::$is_allowed ) {
            return self::$is_allowed;
        }

        self::$is_allowed = false;

        /*
         * Check theme templates.
         */
        if ( count( glob( get_template_directory() . '/ghostkit/templates/*/content.php' ) ) ) {
            self::$is_allowed = true;
        }

        /*
         * Check child theme templates.
         */
        if ( ! self::$is_allowed && get_stylesheet_directory() !== get_template_directory() && count( glob( get_stylesheet_directory() . '/ghostkit/templates/*/content.php' ) ) ) {
            self::$is_allowed = true;
        }

        /**
         * Check Templates posts.
         */
        if ( ! self::$is_allowed ) {
            $db_templates = new WP_Query(
                array(
                    'post_type'      => 'ghostkit_template',
                    'posts_per_page' => 1,
                    'showposts'      => 1,
                )
            );

            self::$is_allowed = $db_templates->have_posts();
        }

        return self::$is_allowed;
    }

    /**
     * Register custom post type.
     */
    public static function add_custom_post_type() {
        register_post_type(
            'ghostkit_template',
            array(
                'labels'              => array(
                    'name'                => _x( 'Templates', 'Post Type General Name', '@@text_domain' ),
                    'singular_name'       => _x( 'Template', 'Post Type Singular Name', '@@text_domain' ),
                    'menu_name'           => __( 'Templates', '@@text_domain' ),
                    'parent_item_colon'   => __( 'Parent Template', '@@text_domain' ),
                    'all_items'           => __( 'Templates', '@@text_domain' ),
                    'view_item'           => __( 'View Template', '@@text_domain' ),
                    'add_new_item'        => __( 'Add New Template', '@@text_domain' ),
                    'add_new'             => __( 'Add New', '@@text_domain' ),
                    'edit_item'           => __( 'Edit Template', '@@text_domain' ),
                    'update_item'         => __( 'Update Template', '@@text_domain' ),
                    'search_items'        => __( 'Search Template', '@@text_domain' ),
                    'not_found'           => __( 'Not Found', '@@text_domain' ),
                    'not_found_in_trash'  => __( 'Not found in Trash', '@@text_domain' ),
                ),
                'public'              => false, // true?
                'publicly_queryable'  => false, // true?
                'has_archive'         => false,
                'show_ui'             => true,
                'exclude_from_search' => true,
                'show_in_nav_menus'   => false,
                'rewrite'             => false,
                'hierarchical'        => false,
                'show_in_menu'        => false,
                'show_in_admin_bar'   => true,
                'show_in_rest'        => true,
                'taxonomies'          => array(
                    'ghostkit_template_category',
                ),
                'capability_type'     => 'post',
                'supports'            => array(
                    'title',
                    'editor',
                    'thumbnail',
                ),
            )
        );

        register_taxonomy(
            'ghostkit_template_category',
            'ghostkit_template',
            array(
                'label'              => esc_html__( 'Categories', '@@text_domain' ),
                'labels'             => array(
                    'menu_name' => esc_html__( 'Categories', '@@text_domain' ),
                ),
                'rewrite'            => false,
                'hierarchical'       => false,
                'publicly_queryable' => false,
                'show_in_nav_menus'  => false,
                'show_in_rest'       => true,
                'show_admin_column'  => true,
            )
        );
    }

    /**
     * Show notice in templates list admin page.
     */
    public static function add_templates_page_notice() {
        $current_screen = get_current_screen();

        if ( ! isset( $current_screen->post_type ) || 'ghostkit_template' !== $current_screen->post_type ) {
            return;
        }

        ?>
        <div class="notice notice-error">
            <h3>
                <?php echo esc_html__( 'Templates Deprecated', '@@text_domain' ); ?>
            </h3>
            <p>
                <?php
                echo esc_html__( 'Please avoid using the Templates feature. It has been deprecated since Ghost Kit v3.1.0 and will be removed in future updates.', '@@text_domain' );
                ?>
                <br />
                <?php
                echo wp_kses_post( sprintf( __( 'To create a block template, you can use the built-in WordPress feature named Patterns.', '@@text_domain' ), 'https://wordpress.org/documentation/article/site-editor-patterns/' ) );
                ?>
            </p>
            <p>
                <a href="https://wordpress.org/documentation/article/site-editor-patterns/" target="_blank" class="button button-primary"><?php echo esc_html__( 'Read About Patterns', '@@text_domain' ); ?></a>
            </p>
        </div>
        <?php
    }
}

GhostKit_Templates::init();
