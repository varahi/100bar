page.includeCSS {
  css_file1 = {$template_path}/Resources/Public/Styles/normalize.css
  css_file2 = {$template_path}/Resources/Public/Styles/bootstrap.min.css
  css_file3 = {$template_path}/Resources/Public/Styles/sm-core-css.css
  css_file4 = {$template_path}/Resources/Public/Styles/sm-clean/sm-clean.css  
  css_file5 = {$template_path}/Resources/Public/Styles/fonts/stylesheet.css
  css_file6 = {$template_path}/Resources/Public/Styles/carousel.css
  css_file100 = {$template_path}/Resources/Public/Styles/style.css
  css_file101 = {$template_path}/Resources/Public/Styles/menu.css
  css_file102 = {$template_path}/Resources/Public/Styles/mailform.css
  css_file200 = {$template_path}/Resources/Public/Styles/media_queries.css 
}

page.includeJS {
 js_file1 = {$template_path}/Resources/Public/Javascript/modernizr-custom.js
 js_file2 = {$template_path}/Resources/Public/Javascript/bootstrap.min.js
 js_file3 = {$template_path}/Resources/Public/Javascript/jquery.smartmenus.js
 js_file10 = {$template_path}/Resources/Public/Javascript/jquery.cycle2.min.js
 js_file11 = {$template_path}/Resources/Public/Javascript/jquery.cycle2.carousel.min.js
 js_file12 = {$template_path}/Resources/Public/Javascript/pace.min.js
 #js_file12 = {$template_path}/Resources/Public/Javascript/jquery.cycle2.tile.min.js
 js_file100 = {$template_path}/Resources/Public/Javascript/main.js
}

page.headerData.10 >
page.headerData.10 = TEXT
page.headerData.10.value ( 
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
     
  <script data-pace-options='{ "ajax": false }' src='fileadmin/templates/Resources/Public/Javascript/pace.min.js'></script>
)

page.headerData.20 = TEXT
page.headerData.20.value (
	<script>$.fn.cycle.defaults.autoSelector = '.slideshow';</script>
)

#page.headerData.10 >
page.headerData.20 >