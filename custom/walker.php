<?php
class WCAG_Compliant_Nav_Walker extends Walker_Nav_Menu {

     function start_lvl( &$output, $depth = 0, $args = array() ) {
          $indent = str_repeat("\t", $depth);
          $output .= "\n$indent<ul class=\"sub-menu\" aria-hidden=\"true\">\n";
     }

     function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
          $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
          $classes = empty( $item->classes ) ? array() : (array) $item->classes;
          $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
          $class_names = ' class="' . esc_attr( $class_names ) . '"';

          $has_children = in_array( 'menu-item-has-children', $classes );

          if ( $has_children ) {
               $output .= $indent . '<li' . $class_names . ' aria-haspopup="true" aria-expanded="false">';
          } else {
               $output .= $indent . '<li' . $class_names . '>';
          }

          $attributes = ' class="menu-link"';
          $attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) . '"' : '';

          if ( $has_children ) {
               $attributes .= ' aria-controls="sub-menu-' . $item->ID . '"';
          }

          $title = apply_filters( 'the_title', $item->title, $item->ID );

          // Check if $args is an object and if the properties exist
          $item_output = isset( $args->before ) ? $args->before : '';
          $item_output .= '<a' . $attributes . '>';
          $item_output .= isset( $args->link_before ) ? $args->link_before : '';
          $item_output .= $title;
          $item_output .= isset( $args->link_after ) ? $args->link_after : '';
          $item_output .= '</a>';
          $item_output .= isset( $args->after ) ? $args->after : '';

          $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
     }


     function end_el( &$output, $item, $depth = 0, $args = array() ) {
          $output .= "</li>\n";
     }
}
