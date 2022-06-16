@extends('page.layouts.main')

@section('content')
<section id="mainslider_1" class="sliderHomeBullets staticSlider slider_engine_revo slider_alias_sale no_padding_container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div id="rev_slider_wrapper" class="rev_slider_wrapper fullwidthbanner-container">
                    <div id="rev_slider" class="rev_slider fullwidthabanner">
                        <ul>
                            <!-- SLIDE  -->
                            <li data-transition="slotfade-horizontal" data-slotamount="7" data-masterspeed="300" data-thumb="assets/page/multimedia/images/slider/320x200.png"  data-saveperformance="off"  data-title="Slide">
                                <!-- MAIN IMAGE -->
                                <img src="assets/page/multimedia/images/slider/1900x760.png"  alt="slider-1"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                                <!-- LAYERS -->
                            </li>
                            <!-- SLIDE  -->
                            <li data-transition="slotfade-horizontal" data-slotamount="7" data-masterspeed="300" data-thumb="assets/page/multimedia/images/slider/320x200.png"  data-saveperformance="off"  data-title="Slide">
                                <!-- MAIN IMAGE -->
                                <img src="assets/page/multimedia/images/slider/1900x760.png"  alt="slider-2"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                                <!-- LAYERS -->
                            </li>
                            <!-- SLIDE  -->
                            <li data-transition="slotfade-horizontal" data-slotamount="7" data-masterspeed="300" data-thumb="assets/page/multimedia/images/slider/320x200.png"  data-saveperformance="off"  data-title="Slide">
                                <!-- MAIN IMAGE -->
                                <img src="assets/page/multimedia/images/slider/1900x760.png"  alt="slider-3"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                                <!-- LAYERS -->
                            </li>
                            <!-- SLIDE  -->
                            <li data-transition="slotfade-horizontal" data-slotamount="7" data-masterspeed="300" data-thumb="assets/page/multimedia/images/slider/320x200.png"  data-saveperformance="off"  data-title="Slide">
                                <!-- MAIN IMAGE -->
                                <img src="assets/page/multimedia/images/slider/1900x760.png"  alt="slider-4"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                                <!-- LAYERS -->
                            </li>
                        </ul>
                        <div class="tp-static-layers">
                        <!-- LAYER NR. 1 -->
                            <div class="tp-caption TRX_no_style tp-fade tp-static-layer" 
                                data-x="right" data-hoffset="-82" 
                                data-y="center" data-voffset="-20" 
                                data-speed="300" 
                                data-start="600" 
                                data-easing="Power3.easeInOut" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-startslide="0" 
                                data-endslide="3" 
                                data-elementdelay="0.1" 
                                data-endelementdelay="0.1" 
                                data-endspeed="300" 
                                >
                                <div class="dark sc_contact_form sc_boxed_form sc_contact_form_contact">
                                    <h4 class="title">
                                        <b>Request</b> Free Consultation
                                    </h4>
                                    <form data-formtype="boxed" method="post" action="#">
                                        <input placeholder="Name" class="sc_contact_form_username" type="text" name="username">
                                        <input placeholder="Email" class="sc_contact_form_email" type="text" name="email">
                                        <div class="message">
                                            <textarea placeholder="Message" class="sc_contact_form_message" name="message"></textarea>
                                        </div>
                                        <div class="date_time">
                                            <div class="form_date">
                                                <span class="icon"></span>
                                                <input placeholder="Date" class="sc_contact_form_date js__datepicker" type="text" name="date">
                                            </div>
                                            <div class="form_time">
                                                <span class="icon"></span>
                                                <input placeholder="Time" class="sc_contact_form_time js__timepicker" type="text" name="time">
                                            </div>
                                        </div>
                                        <div class="sc_contact_form_button">
                                            <div class="squareButton sc_button_style_accent_2 sc_button_size_big global big">
                                                <a href="#" class="sc_contact_form_submit">Submit</a>
                                            </div>
                                        </div>
                                        <div class="result sc_infobox"></div>
                                    </form>
                                </div> 
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption TRX_no_style tp-fade tp-static-layer" 
                                 data-x="right" data-hoffset="-251" 
                                 data-y="center" data-voffset="14" 
                                data-speed="300" 
                                data-start="0" 
                                data-easing="Power3.easeInOut" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-startslide="0" 
                                data-endslide="3" 
                                data-elementdelay="0.1" 
                                data-endelementdelay="0.1" 
                                data-endspeed="300" 
                                >
                                <span class="sc_button sc_button_style_global sc_button_size_big slider_form_btn squareButton global big  ico">
                                    <a href="#form_popup" class="icon-mail-alt user-popup-link"></a>
                                </span> 
                            </div>
                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption TRX_no_style tp-fade tp-static-layer" 
                                data-x="right" data-hoffset="-66" 
                                data-y="center" data-voffset="45" 
                                data-speed="300" 
                                data-start="0" 
                                data-easing="Power3.easeInOut" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-startslide="0" 
                                data-endslide="3" 
                                data-elementdelay="0.1" 
                                data-endelementdelay="0.1" 
                                data-endspeed="300" 
                                >
                                <div id="form_popup" class="sc_popup sc_popup_light mfp-with-anim mfp-hide">
                                    <div class="dark sc_contact_form sc_boxed_form sc_contact_form_contact">
                                        <h4 class="title">
                                        <b>Request</b> Free Consultation</h4>
                                        <form data-formtype="boxed" method="post" action="include/contact-form.php">
                                            <input placeholder="Name" class="sc_contact_form_username" type="text" name="username">
                                            <input placeholder="Email" class="sc_contact_form_email" type="text" name="email">
                                            <div class="message">
                                                <textarea placeholder="Message" class="sc_contact_form_message" name="message"></textarea>
                                            </div>
                                            <div class="date_time">
                                                <div class="form_date">
                                                    <span class="icon"></span>
                                                    <input placeholder="Date" class="sc_contact_form_date js__datepicker" type="text" name="date">
                                                </div>
                                                <div class="form_time">
                                                    <span class="icon"></span>
                                                    <input placeholder="Time" class="sc_contact_form_time js__timepicker" type="text" name="time">
                                                </div>
                                            </div>
                                            <div class="sc_contact_form_button">
                                                <div class="squareButton sc_button_style_accent_2 sc_button_size_big global big">
                                                    <a href="#" class="sc_contact_form_submit">Submit</a>
                                                </div>
                                            </div>
                                            <div class="result sc_infobox"></div>
                                        </form>
                                    </div>
                                </div> 
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption trx-big-white-main tp-fade tp-resizeme tp-static-layer" 
                                data-x="80" 
                                data-y="100"  
                                data-speed="300" 
                                data-start="600" 
                                data-easing="Power3.easeInOut" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-startslide="0" 
                                data-endslide="3" 
                                data-elementdelay="0.1" 
                                data-endelementdelay="0.1" 
                                data-endspeed="300" 
                                >
                                    <b>123 QuickSale  Street<br/>Chicago, IL 60606</b> 
                            </div>

                            <!-- LAYER NR. 5 -->
                            <div class="tp-caption trx-italic-white-main tp-fade tp-resizeme tp-static-layer" 
                                data-x="85" 
                                data-y="231"  
                                data-speed="300" 
                                data-start="600" 
                                data-easing="Power3.easeInOut" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-startslide="0" 
                                data-endslide="3" 
                                data-elementdelay="0.1" 
                                data-endelementdelay="0.1" 
                                data-endspeed="300"
                                >
                                $599,000 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="sc_section sc_aligncenter light_section">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="sc_content sc_aligncenter text_styling"> A few words about the house </div>
                <h2 class="sc_title_align_center sc_title sc_title_underline  color_1">Property <span class="sc_highlight">Description</span>
                </h2>
                <div class="sc_columns sc_columns_count_5 margin_top_mini">
                    <div class="col-md-2 col-sm-4 sc_column_item sc_column_item_1">
                        
                        <i class="sc_icon_round_big no_bg_icon sc_aligncenter theme_accent theme_accent_border fa fa-home"></i>
                        <div class="sc_content sc_aligncenter text_styling">Square Feet</div>
                        <div class="sc_skills sc_skills_counter" data-type="counter" data-subtitle="Skills">
                            <div class="sc_skills_columns">
                                <div class="sc_skills_column">
                                    <div class="sc_skills_item sc_skills_style_2">
                                        <div class="sc_skills_count">
                                            <div class="sc_skills_total" data-start="0" data-stop="2500" data-step="23" data-max="2300" data-speed="25" data-duration="2717" data-ed="">0</div>
                                        </div>
                                        <div class="sc_skills_info"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 sc_column_item sc_column_item_2">
                        <i class="sc_icon_round_big no_bg_icon sc_aligncenter theme_accent theme_accent_border fa fa-home"></i>
                        <div class="sc_content sc_aligncenter text_styling">Bedrooms</div>
                        <div class="sc_skills sc_skills_counter" data-type="counter" data-subtitle="Skills">
                            <div class="sc_skills_columns">
                                <div class="sc_skills_column">
                                    <div class="sc_skills_item sc_skills_style_2">
                                        <div class="sc_skills_count">
                                            <div class="sc_skills_total" data-start="0" data-stop="3" data-step="1" data-max="10" data-speed="27" data-duration="81" data-ed="">0</div>
                                        </div>
                                        <div class="sc_skills_info"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 sc_column_item sc_column_item_3 odd">
                        <i class="sc_icon_round_big no_bg_icon sc_aligncenter theme_accent theme_accent_border fa fa-home"></i>
                        <div class="sc_content  sc_aligncenter text_styling">Bathrooms</div>
                        <div class="sc_skills sc_skills_counter" data-type="counter" data-subtitle="Skills">
                            <div class="sc_skills_columns">
                                <div class="sc_skills_column">
                                    <div class="sc_skills_item sc_skills_style_2">
                                        <div class="sc_skills_count">
                                            <div class="sc_skills_total" data-start="0" data-stop="2" data-step="1" data-max="10" data-speed="23" data-duration="46" data-ed="">0</div>
                                        </div>
                                        <div class="sc_skills_info"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 sc_column_item sc_column_item_4 even">
                        <i class="sc_icon_round_big no_bg_icon sc_aligncenter theme_accent theme_accent_border fa fa-home"></i>
                        <div class="sc_content sc_aligncenter text_styling">Year Built</div>
                        <div class="sc_skills sc_skills_counter" data-type="counter" data-subtitle="Skills">
                            <div class="sc_skills_columns">
                                <div class="sc_skills_column">
                                    <div class="sc_skills_item sc_skills_style_2">
                                        <div class="sc_skills_count">
                                            <div class="sc_skills_total" data-start="0" data-stop="1997" data-step="20" data-max="2000" data-speed="39" data-duration="3894" data-ed="">0</div>
                                        </div>
                                        <div class="sc_skills_info"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 sc_column_item sc_column_item_5 odd">
                        <i class="sc_icon_round_big no_bg_icon sc_aligncenter theme_accent theme_accent_border fa fa-home"></i>
                        <div class="sc_content sc_aligncenter text_styling">Car Parking</div>
                        <div class="sc_skills sc_skills_counter" data-type="counter" data-subtitle="Skills">
                            <div class="sc_skills_columns">
                                <div class="sc_skills_column">
                                    <div class="sc_skills_item sc_skills_style_2">
                                        <div class="sc_skills_count">
                                            <div class="sc_skills_total" data-start="0" data-stop="3" data-step="1" data-max="10" data-speed="36" data-duration="108" data-ed="">0</div>
                                        </div>
                                        <div class="sc_skills_info"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

<section class="sc_section image_bg_1">
    <div class="container">
        <div class="row">
            <div class="columnsFloat autoHeight columnsWrap">
                <div class="col-sm-6 sc_column_img sc_column_item sc_column_item_1">
                    <div id="sc_slider_1" class="sc_slider sc_slider_autoheight sc_slider_swiper sc_slider_controls sc_slider_pagination swiper-slider-container sc_slider_1" data-interval="5000">
                        <ul class="slides swiper-wrapper">
                            <li class="swiper-slide">
                                <img src="assets/page/multimedia/images/slider/750x680.png" alt="">
                            </li>
                            <li class="swiper-slide">
                                <img src="assets/page/multimedia/images/slider/750x680.png" alt="">
                            </li>
                            <li class="swiper-slide">
                                <img src="assets/page/multimedia/images/slider/750x680.png" alt="">
                            </li>
                        </ul>
                        <ul class="flex-direction-nav">
                            <li>
                                <a class="flex-prev" href="#">
                            </a>
                            </li>
                            <li>
                                <a class="flex-next" href="#">
                            </a>
                            </li>
                        </ul>
                        <div class="flex-control-nav">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 sc_column_item sc_column_item_2 even">
                    <h2 class="sc_title_align_left sc_title sc_title_underline  color_2">
                        Property <span class="sc_highlight">Highlights</span>
                    </h2>
                    <div class="sc_content  sc_alignleft margin_bottom_mini"> 
                        Extensive upgrades and thorough maintenance have kept this home in prime condition. Hardwood floors and new carpets create a very comfortable living space. 
                    </div>
                    <div class="row">
                        <div class="sc_section col-sm-6 no_margin_top">
                            <div class="sc_content theme_accent_2 sc_alignleft text_styling_big">1.</div>
                            <div class="sc_content">
                                <span class="sc_highlight">
                                    <b>Quiet Neighbourhood</b>
                                </span>
                            </div>
                            <div class="sc_content margin_bottom_mini">
                                Enjoy tranquil and relaxed atmosphere of the place
                            </div>
                            <div class="sc_content theme_accent_2 sc_alignleft text_styling_big">
                                2.
                            </div>
                            <div class="sc_content">
                                <span class="sc_highlight">
                                    <b>Fabulous views</b>
                                </span>
                            </div>
                            <div class="sc_content margin_bottom_mini">
                                Get yourself surrounded by the stunning view opening
                            </div>
                        </div>
                        <div class="sc_section col-sm-6 no_margin_top">
                            <div class="sc_content theme_accent_2 sc_alignleft text_styling_big">
                                3.
                            </div>
                            <div class="sc_content">
                                <span class="sc_highlight">
                                    <b>Great local community</b>
                                </span>
                            </div>
                            <div class="sc_content margin_bottom_mini">
                                You will be delighted by the fantastic local community
                            </div>
                            <div class="sc_content theme_accent_2 sc_alignleft text_styling_big">
                                4.
                            </div>
                            <div class="sc_content">
                                <span class="sc_highlight">
                                    <b>Large play center in yard</b>
                                </span>
                            </div>
                            <div class="sc_content margin_bottom_mini">
                                Your kids will be happy having all these things around
                            </div>
                        </div>
                    </div>
                    <span class="sc_button sc_button_style_accent_2 sc_button_size_big squareButton accent_2 big">
                        <a href="#" class="">learn more</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</section> 

<section class="sc_section sc_aligncenter light_section">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">			
                <h2 class="sc_title_align_center sc_title sc_title_underline  color_1">
                    Our <span class="sc_highlight">Gallery</span>
                </h2>
                <div class="sc_content sc_aligncenter text_styling">
                    You are welcome to check out our house gallery to make sure that this home<br>
                    is in prime condition which makes it a perfect living space. 
                </div> 
                <div class="sc_blogger sc_blogger_horizontal style_portfolio3 portfolioWrap no_description">
                    <div class="isotopeFiltr"></div>
                    <div class="masonry isotope masonry-colums-3" data-columns="3">
                        <article class="isotopeElement flt_64">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">5 Steps To Buy A Home</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="5 Steps To Buy A Home" href="assets/page/multimedia/images/isotope/1900x1262.png"></a>
                                        </span>
                                    </div>
                                    <img alt="5 Steps To Buy A Home" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                        <article class="isotopeElement flt_65">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">The Perfect Apartment</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="The Perfect Apartment" href="assets/page/multimedia/images/isotope/1900x1262.png"></a>
                                        </span>
                                    </div>
                                    <img alt="The Perfect Apartment" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                        <article class="isotopeElement flt_46 flt_64">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">The Art of House Hunting</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="The Art of House Hunting" href="assets/page/multimedia/images/isotope/1900x1262.png"></a>
                                        </span>
                                    </div>
                                    <img alt="The Art of House Hunting" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                        <article class="isotopeElement flt_11 flt_8">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">Freehold Vs. Condo</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="Freehold Vs. Condo" href="assets/page/multimedia/images/isotope/1900x1262.png"></a>
                                        </span>
                                    </div>
                                    <img alt="Freehold Vs. Condo" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                        <article class="isotopeElement flt_65 flt_10">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">To Buy or Not To Buy</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="To Buy or Not To Buy" href="assets/page/multimedia/images/isotope/1900x1262.png"></a>
                                        </span>
                                    </div>
                                    <img alt="To Buy or Not To Buy" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                        <article class="isotopeElement flt_46 flt_8 flt_64">
                            <div class="isotopePadding">
                                <div class="thumb hoverIncreaseOut">
                                    <span class="hoverShadow"></span>
                                    <div class="wrap_hover">
                                        <div class="portfolioInfo">
                                            <h4>
                                                <a href="#">Selling Your House?</a>
                                            </h4>
                                            <span class="datePost">
                                                <a href="#" class="post_date">December 22, 2014</a>
                                            </span>
                                        </div>
                                        <span class="hoverIcon">
                                            <a title="Selling Your House?" href="assets/page/multimedia/images/isotope/1900x1266.png"></a>
                                        </span>
                                    </div>
                                    <img alt="Selling Your House?" src="assets/page/multimedia/images/isotope/714x540.png">
                                </div>
                            </div>
                        </article>
                    </div>
                </div> 
                <span class="sc_button sc_button_style_global sc_button_size_big squareButton global big">
                    <a href="#" class="">view all</a>
                </span>
            </div>
        </div>
    </div>
</section> 

<section class="sc_section post grey_section">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 sc_column_item sc_column_item_1">
                <h2 class="sc_title_align_left sc_title sc_title_underline color_2">
                    About <span class="sc_highlight">Agent</span>
                </h2>
                <div class="sc_content uppercase_on">
                    <b>Markus Doe</b>
                </div>
                <div class="sc_content text_styling">Real Estate Group</div>
                <div class="sc_content"> Markus is a Certified Residential Specialist with over 10 years experience of helping local residents sell homes. He achieved success due to his commitment to the enhancement of the real estate profession, client service, and the community. </div>
                <div class="sc_line sc_line_style_solid"></div>
                <div class="row">
                    <div class="sc_section col-sm-6 no_margin_top">
                        <ul class="sc_list sc_list_style_arrows">
                            <li class="sc_list_item icon-envelope">markus@yoursite.com</li>
                            <li class="sc_list_item icon-globe-4">httt://example.com</li>
                        </ul>
                    </div>
                    <div class="sc_section col-sm-6 no_margin_top">
                        <ul class="sc_list sc_list_style_arrows">
                            <li class="sc_list_item icon-phone-handle">(123) 456-78-99</li>
                            <li class="sc_list_item icon-printer-1">(123) 456-78-90</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 sc_column_item sc_column_item_2">
                <div class="sc_content  margin_right_mini margin_left_mini">
                    <figure class="sc_image  sc_image_shape_square">
                        <img src="assets/page/multimedia/images/873x641.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section> 

<section class="sc_section sc_aligncenter image_bg_2" >
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">		
                <div class="sc_testimonials sc_testimonials_style sc_testimonials_controls_on">
                    <h2 class="sc_title sc_title_underline color_1 sc_testimonials_title">Testimonials</h2>
                    <div class="sc_slider sc_slider_swiper sc_slider_controls sc_slider_controls_on sc_slider_nopagination sc_slider_autoheight swiper-slider-container swiper_testimonials" data-interval="7000" id="swiper_testimonials">
                        <ul class="sc_testimonials_items slides swiper-wrapper">
                            <li class="sc_testimonials_item swiper-slide" data-autoheight="153">
                                <div class="sc_testimonials_item_content">
                                    <div class="sc_testimonials_item_quote">
                                        <div class="sc_testimonials_item_text"> 
                                            If you are looking for a right place for your property to be taken care of you are right here.<br>
                                            Amazed by the professionalism and attitude to the client. Highly recommended. 
                                        </div>
                                    </div>
                                    <div class="sc_testimonials_item_author">
                                        <div class="sc_testimonials_item_avatar">
                                            <img alt="testimonials_1.jpg" src="assets/page/multimedia/images/testimonials/70x70.png">
                                        </div>
                                        <div class="sc_testimonials_item_name">Marcus Smith</div>
                                        <div class="sc_testimonials_item_position">Manager, New York</div>
                                    </div>
                                </div>
                            </li>
                            <li class="sc_testimonials_item swiper-slide" data-autoheight="153">
                                <div class="sc_testimonials_item_content">
                                    <div class="sc_testimonials_item_quote">
                                        <div class="sc_testimonials_item_text"> 
                                            If you are looking for a cv template you are right here. Purchased and surprised about<br>
                                            handling and the quick support. highly recommended. 
                                        </div>
                                    </div>
                                    <div class="sc_testimonials_item_author">
                                        <div class="sc_testimonials_item_avatar">
                                            <img alt="testimonials_2.jpg" src="assets/page/multimedia/images/testimonials/70x70.png">
                                        </div>
                                        <div class="sc_testimonials_item_name">Amanda Sitam</div>
                                        <div class="sc_testimonials_item_position">Family residential, New York</div>
                                    </div>
                                </div>
                            </li>
                            <li class="sc_testimonials_item swiper-slide" data-autoheight="153">
                                <div class="sc_testimonials_item_content">
                                    <div class="sc_testimonials_item_quote">
                                        <div class="sc_testimonials_item_text"> 
                                            This theme is top quality. Find an issue? Worry not, because the support that this team provides is amazing! I would definitely	<br />recommend this theme for your next project or any other theme from ThemeREX for that matter. 
                                        </div>
                                    </div>
                                    <div class="sc_testimonials_item_author">
                                        <div class="sc_testimonials_item_avatar">
                                            <img alt="testimonials_3.jpg" src="assets/page/multimedia/images/testimonials/70x70.png">
                                        </div>
                                        <div class="sc_testimonials_item_name">Jeniffer King</div>
                                        <div class="sc_testimonials_item_position">Designer, New York</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul class="flex-direction-nav">
                        <li>
                            <a class="flex-prev" href="#"></a>
                        </li>
                        <li>
                            <a class="flex-next" href="#"></a>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    </div>
</section> 

<section class="sc_section section_contacts light_section">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 sc_column_item sc_column_item_1">
                <div id="sc_googlemap_1" class="sc_googlemap" data-address="San Francisco, CA 94102, US" data-latlng="" data-zoom="14" data-style="default" data-point="images/icon/60x80.png" data-title="San Francisco" data-description="San Francisco, CA 94102, US"></div>
            </div>
            <div class="col-sm-6 sc_column_item sc_column_item_2 even">
                <h2 class="sc_title_align_left sc_title sc_title_underline color_2">
                    Our <span class="sc_highlight">Contacts</span>
                </h2>
                <div class="sc_section margin_bottom_mini"> 
                    Our broker centers are located throughout the entire country ensuring you get helped almost in every place. Our professional real estate team made sure you get the highest level of help with your property issues. 
                </div>
                <div class="sc_section ">
                    <ul>
                        <li class="sc_icon icon-location-pin no_bg_icon theme_accent" >
                            <span>2277 Lorem Ave., San Diego, CA 22553</span>
                        </li>
                        <li class="sc_icon icon-clock-2 no_bg_icon theme_accent">
                            <span>Monday – Saturday</span>
                        </li>
                        <li>
                            <span>from 8:00 to 20:00</span>
                        </li>
                        <li class="margin_top_micro margin_bottom_micro">
                            <span>Free day – Sunday</span>
                        </li>
                        <li class="sc_icon icon-phone-handle no_bg_icon theme_accent">
                            <span>123 – 456 – 7890</span>
                        </li>
                    </ul>
                </div>								
            </div>
        </div>
    </div>
</section>
@endsection