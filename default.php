<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_custom
 *
 * @copyright   (C) 2009 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die; 
use Joomla\CMS\Factory;
use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Uri\Uri;
$modId = 'mod-custom' . $module->id; ?>

<script src="modules/mod_custom/tmpl/highlight.min.js"></script>
<script src="modules/mod_custom/tmpl/burns.js" defer></script>
<script src="modules/mod_custom/tmpl/ShadowPictures.js" defer></script>
<script src="modules/mod_custom/tmpl/CarouselFrame.js" defer></script>
<carousel-frame></carousel-frame>
<?php
// echo '<script src="modules/mod_custom/tmpl/burns.js" defer></script>';
echo '<link rel="stylesheet" href="modules/mod_custom/tmpl/burns.css">'; ?>
