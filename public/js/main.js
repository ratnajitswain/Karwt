jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";
$.ajax({  
    url:'/fetchAllStates',
    method:'get',
    success:function(res){  
        res.forEach((s)=>{  
            $('.states').append(`<option value="${s.TSM_State}">${s.TSM_State_Name}</option>`)
        })
    }
})



    var login =

        `
     
        <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">
              Login </button>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                      ×</button>
                    <h4 class="modal-title" id="myModalLabel">
                      Login/Registration - </h4>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-12">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs col-12" >
                          <li class="active"><a href="#Login" data-toggle="tab">Login</a></li>
                          <li><a href="#Registration" data-toggle="tab">Sign Up</a></li>
                           <li><a href="#VRegistration" data-toggle="tab">Vendor Registration</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                          <div class="tab-pane active" id="Login">
                            <form  role="form" class="form-horizontal">
                            <div id="loginCheck"></div>
                              <div class="form-group">
                                <label for="email" class="col-sm-2 control-label">
                                  Email</label>
                                <div class="col-sm-12">
                                  <input type="email" class="form-control" id="loginEmail" placeholder="Email" />
                                </div>
                              </div>
                              <div  class="form-group">
                                <label for="exampleInputPassword1" class="col-sm-2 control-label">
                                  Password</label>
                                <div class="col-sm-12">
                                  <input type="password" class="form-control" id="loginPassword"
                                    placeholder="Password" />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-6">

                                <button type="button" id="login" class="btn btn-primary btn-sm">
                                    Sign In</button>
                                    
                                </div>
                                <div class="col-sm-12">
                                <a href="javascript:;" class="float-right">Forgot your password?</a>
                                </div>
                              </div>
                            </form>
                          </div>

                          <div class="tab-pane" id="Registration">
                          <form role="form" class="form-horizontal" id="userRegistration" autocomplete="off">
                      
                              <div class="row g-3" >
                                  <div class="col-6">
                                      <div class="row" >
                      
                                          <div class="col-sm-12">
                                              <div class="form-group">
                                                  <label for="name" class="col-sm-2 control-label">
                                                      Name</label>
                      
                                                  <input type="text" id="name" name="name" class="form-control" placeholder="Name" />
                      
                      
                                              </div>
                                          </div>
                                          <div class="col-sm-12">
                                              <div class="form-group">
                                                  <label for="email" class="col-sm-2 control-label">
                                                      Email</label>
                      
                                                  <input type="email" id="email" name="email" class="form-control" placeholder="Email" />
                      
                      
                                              </div>
                                          </div>
                      
                      
                                          <div class="col-sm-12">
                                              <div class="form-group">
                                                  <label for="mobile" class="col-sm-2 control-label">
                                                      Mobile</label>
                                                  <input type="text" id="mobile"   name="mobile" class="form-control" id="mobile" placeholder="Mobile" />
                                              </div>
                                          </div>
                      
                                          <div class="col-sm-12">
                                              <div class="form-group">
                                                  <label for="password" class="col-sm-2 control-label">
                                                      Password</label>
                                                  <input type="password"  class="form-control" id="password" placeholder="Password" />
                                              </div>
                                          </div>
                      
                                          <div class="col-sm-12">
                                              <div class="form-group">
                                                  <label for="cpassword" class="col-sm-6 control-label">
                                                      Confirm password</label>
                                                  <input type="password" name="password" class="form-control" id="cpassword" placeholder="Confirm Password" />
                                              </div>
                                          </div>
                      
                                      </div>
                                  </div>
                      
                      
                                  <div class="col-6">
                                      <div class="row">
                                          <div class="col-sm-12">
                      
                                              <div class="form-group">
                                                  <label for="states">State</label>
                                                  <select class="form-control states" id="state" name="state" onchange="fetchDist(this)" id="states">
                                                      <option value=''>--select--</option>
                                                      
                                                  </select>
                                              </div>
                                          </div>
                      
                                          <div class="col-sm-12">
                      
                                              <div class="form-group">
                                                  <label for="district">District</label>
                                                  <select class="form-control" name="dist" onchange="fetchConst(this)" id="district">
                                                      <option value=''>--select--</option>
                                                      
                                                  </select>
                                              </div>
                                          </div>
                      
                                          <div class="col-sm-12">
                      
                                              <div class="form-group">
                                                  <label for="constituency">Constituency</label>
                                                  <select class="form-control" name="constituency" id="constituency">
                                                      <option value=''>--select--</option>
                                                     
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-sm-12">
                      
                                              <div class="form-group">
                                                  <label for="pin">PIN No.</label>
                                                  <input type="text" name="pin" class="form-control" id="pin">
                                              </div>
                                          </div>
                      
                                          <div class="col-sm-12">
                      
                                              <div class="form-group">
                                                  <label for="address">Full Address</label>
                                                  <textarea name="address" id="address" class="form-control" rows="3" style="height: 87px; margin-top: 0px; margin-bottom: 0px;"></textarea>
                      
                                              </div>
                                          </div>
                      
                                      </div>
                      
                                  </div>
                      
                                  </div>
                      
                                  <div class="row">
                                      <div class="col-sm-2">
                                      </div>
                                      <div class="col-sm-10">
                                          <button type="button" id="signup" class="btn btn-primary btn-sm">
                                              Sign Up</button>
                                          <button type="reset" class="btn btn-default btn-sm">
                                              Cancel</button>
                      
                                      </div>
                                      </div>
                          </form>
                      </div>


                      <div class="tab-pane" id="VRegistration">
                      <form role="form" class="form-horizontal" id="vendorRegistration" autocomplete="off">
                  
                          <div class="row g-3">
                              <div class="col-6">
                                  <div class="row" >
                  
                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="name" class="col-sm-2 control-label">
                                                  Name</label>
                  
                                              <input type="text" id="name1" class="form-control" placeholder="Name" />
                  
                  
                                          </div>
                                      </div>
                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="email" class="col-sm-2 control-label">
                                                  Name</label>
                  
                                              <input type="email" id="email1" class="form-control" placeholder="Email" />
                  
                  
                                          </div>
                                      </div>
                  
                  
                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="mobile" class="col-sm-2 control-label">
                                                  Mobile</label>
                                              <input type="text" class="form-control" id="mobile1" placeholder="Mobile" />
                                          </div>
                                      </div>

                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="businessName" class="control-label">
                                                  Busniess Name</label>
                                              <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Mobile" />
                                          </div>
                                      </div>

                                      <div class="col-sm-12">
                                      <div class="form-group">
                                          <label for="businessName" class="control-label">
                                              Busniess Type</label>
                                          <input type="text" class="form-control" id="businessType" name="businessName" placeholder="Mobile" />
                                      </div>
                                  </div>
                  
                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="password" class="col-sm-2 control-label">
                                                  Password</label>
                                              <input type="password" class="form-control" id="password1" placeholder="Password" />
                                          </div>
                                      </div>
                  
                                      <div class="col-sm-12">
                                          <div class="form-group">
                                              <label for="cpassword" class="col-sm-6 control-label">
                                                  Confirm password</label>
                                              <input type="password" class="form-control" id="cpassword1" placeholder="Confirm Password" />
                                          </div>
                                      </div>
                  
                                  </div>
                              </div>
                  
                  
                              <div class="col-6">
                                  <div class="row">


                                  <div class="col-sm-12">
                  
                                  <div class="form-group" id="gstCheck">
                                  <label for="inlineRadioOptions">Do you have GST ?</label>&nbsp
                                  <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes">
                                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No">
                                  <label class="form-check-label" for="inlineRadio2">No</label>
                                </div>

                                  </div>
                              </div>

                              <div class="col-sm-12">
                              <div class="form-group">
                                  
                                  <input type="text" disabled class="form-control" id="gst" name="gst" placeholder="GST No." />
                              </div>
                          </div>

                              <div class="col-sm-12">
                              <div class="form-group">
                                  <label for="productservice" class="control-label">
                                      Product or Services</label>
                                  <input type="text" class="form-control" id="productservice" name="productservice" placeholder="Product/Services" />
                              </div>
                          </div>
                                      <div class="col-sm-12">
                  
                                          <div class="form-group">
                                              <label for="states">State</label>
                                              <select class="form-control  states" onchange="fetchDist1(this)" id="states1">
                                                  <option value=''>--select--</option>
                                              </select>
                                          </div>
                                      </div>
                  
                                      <div class="col-sm-12">
                  
                                          <div class="form-group">
                                              <label for="district">District</label>
                                              <select class="form-control district" onchange="fetchConst1(this)" id="district1">
                                                  <option value=''>--select--</option>
                                              </select>
                                          </div>
                                      </div>
                  
                                      <div class="col-sm-12">
                  
                                          <div class="form-group">
                                              <label for="constituency">Constituency</label>
                                              <select class="form-control constituency" id="constituency1">
                                                  <option value=''>--select--</option>
                            
                                              </select>
                                          </div>
                                      </div>
                                      <div class="col-sm-12">
                  
                                          <div class="form-group">
                                              <label for="pin">PIN No.</label>
                                              <input type="text" class="form-control" id="pin1">
                                          </div>
                                      </div>
                  
                                      <div class="col-sm-12">
                  
                                          <div class="form-group">
                                              <label for="address">Full Address</label>
                                              <textarea class="form-control" id="address1" rows="3" style="height: 75px; margin-top: 0px; margin-bottom: 0px;"></textarea>
                  
                                          </div>
                                      </div>
                  
                                  </div>
                  
                              </div>
                  
                              </div>
                  
                              <div class="row">
                                  <div class="col-sm-2">
                                  </div>
                                  <div class="col-sm-10">
                                      <button type="button" id="signup1" class="btn btn-primary btn-sm">Register</button>
                                      <button type="reset" class="btn btn-default btn-sm">
                                          Cancel</button>
                  
                                  </div>
                                  </div>
                      </form>
                  </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>`

            

    $('#loginnav').html($(login));

    var buyNow = `
    
    <button type="button" class="btn btn-fixed" data-toggle="modal" data-target="#calcModal"><i class="fa fa-calculator" aria-hidden="true"></i>Open Calculator</button>
    
    
    <div class="modal fade" id="calcModal" tabindex="-1" role="dialog" aria-labelledby="calcModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

            <div class="modal-body">
                <div class="row align-items-center text-center">
                    <div class="col-md-12">
                        <div class="form-group">
                        <input type="number" class="form-control" placeholder="Your number of invited members (Gen1) " id="A" placeholder="">
                        <br/>
                  <input type="number" class="form-control" placeholder =" Your number of invited members (Gen 2-5)" id="B" placeholder="">
                  <br/>
                <input type="button" id="calculate" class="btn btn-primary" value="calculate" >
                    </div>
                  
                <div id="result">
                        <!-- End of .member-details -->
                    </div>
                    <!-- End of .col-md-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .modal-body -->
        </div>
        <!-- End of .modal-content -->
    </div>
    <!-- End of .modal-dialogue -->
</div>
    

    
    
    `
    $('body').append($(buyNow));

    $('.btn-fixed').css({
        'position': 'fixed',
        'right': '25px',
        'bottom': '25px',
        'z-index': '9999'
    });

    $('#calculate').on('click', function () {

        var A = parseInt($('#A').val());
        var B = parseInt($('#B').val());
        var G1 = A
        var G2 = A * B
        var G3 = G2 * B
        var G4 = G3 * B
        var G5 = G4 * B
        $('#result').html('Your Potential Points ' + '<h3>' + (G1 + G2 + G3 + G4 + G5).toString() + '</h3>')

    })

$('.form-check-input').on('change', function(){  

var gst = $("input[class='form-check-input']:checked").val();

if(gst=='Yes'){  
    $('#gst').attr('disabled',false)
}
else{  
    $('#gst').attr('disabled',true)
}
})
   
    

    var _document = $(document),
        _window = $(window),
        _body = $("body");

    //animated navbar-toggler button
    _document.on('click', '.navbar .navbar-toggler', function () {
        $(this).toggleClass("change");
    });

    _document.on('click', function (e) {
        var _navMenu = $('.navbar-nav li');
        if ($('.navbar-collapse').hasClass('show')) {
            if (!_navMenu.is(e.target) && _navMenu.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass('show');
                $(".navbar-toggler").removeClass('change');
            }
        }
    });

    //script for box equal height
    var maxHeight = 0;
    $(".equalHeight").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".equalHeight").height(maxHeight);

    //Video modal
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }

    });

    //jQuery countdown plugin
    $('#clock').countdown('2020/10/10').on('update.countdown', function (event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });

    // Token slider 
    $('.token-slider .carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Highchart
    if ($('.pie-chart').length > 0) {
        Highcharts.chart('container', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Contents of Highsoft\'s weekly fruit delivery'
            },
            subtitle: {
                text: '3D donut in Highcharts'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Delivered amount',
                data: [
                    ['Presale 20%', 7.2],
                    ['Reserve 10%', 3.6],
                    ['Token Sale 50%', 18],
                    ['Bounties 10%', 3.6],
                    ['Dispensaries 5%', 1.8],
                    ['Advisory Board 5%', 1.8]
                ]
            }]
        });
    }

    //SVG Line animation
    $(".roadmap-to-success").each(function () {
        $(this).waypoint(function () {
            var _svgPath = $('.roadmap-line-path'),
                _svgPathLength = $('.roadmap-line-path').get(0).getTotalLength(),
                _labelLength = $('.roadmap-label').length;

            _svgPath.css({
                'opacity': '1',
                'stroke-dashoffset': _svgPathLength,
                'stroke-dasharray': _svgPathLength
            });

            setTimeout(function () {
                _svgPath.animate({
                    "stroke-dashoffset": _svgPathLength
                }, 0, function () {
                    _svgPath.animate({
                        "stroke-dashoffset": '0px'
                    }, {
                        duration: 1500,
                        // easing: 'linear',
                        step: function () {
                            var a = parseInt(_svgPath.css("stroke-dashoffset"));
                            for (var i = 0; i < _svgPathLength; i++) {
                                if (a < _svgPathLength * (_labelLength - i) / _labelLength) {
                                    $(".roadmap-label.l-" + (i + 1)).fadeIn().addClass("active");
                                }
                            }
                        }
                    }, function () {
                        //callback ...
                    });
                });
            });
            this.destroy();
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });


    //Show data on click event
    var _roadmapContainer = $('.roadmap-container'),
        _roadMapLabel = $('.roadmap-label');

    _roadmapContainer.on('click', '.roadmap-label', function () {
        if ($(this).find('.data.active').length === 0) {
            //remove
            _roadmapContainer.find('.data').removeClass('active');
            $(this).find('.data').addClass('active');
            _roadMapLabel.removeClass('glow');
            $(this).addClass('glow');

            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
                $(this).find('.data .card').slideDown(function () {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 90
                    }, 500);
                });

            } else {
                _roadmapContainer.find('.data .card').fadeOut("slow");
                $(this).find('.data .card').fadeIn("slow");
            }
        }
    });

    _document.on('click', function (e) {
        if (!_roadMapLabel.is(e.target) && _roadMapLabel.has(e.target).length === 0) {
            _roadmapContainer.find('.data').removeClass('active');
            _roadMapLabel.removeClass('glow');
            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
            } else {
                _roadmapContainer.find('.data .card').fadeOut();
            }
        }
    });



    $('#login').on('click', function(){
        var arr = ['loginEmail','loginPassword']
        var status = validateAndMsg(arr);

        if(status==true){
            var data = {
                'email':$('#loginEmail').val(),
                'password':$('#loginPassword').val()
            }
    
            $.ajax({
                url:'/users/login',
                method: 'post',
                data:data,
                dataType:'json',
                success:function (res) {
                    console.log(res)
                    if(res.type=='warning'){  
                        $('#loginCheck').html('')
                        $('#loginCheck').html(`
                        <div class="alert alert-${res.type}">
            <i class="fa fa-check"></i>
              <span>${res.message}</span>
        </div>
                        
                        `)

                    } else {  
                        
                        location.href = res.url;
                    }
                }
                ,error:function(e) {
                    console.log(e)
                }
            })
        }

    })

    $('#signup').on('click', function(){  
        var arr= ['name','email','mobile','password','pin','cpassword','state','district','constituency','address']
        var status = validateAndMsg(arr);
        var passcheck = passwordComp('password','cpassword');
        console.log(status,passcheck);

        if(status==true && passcheck==true){  
           var data = {  
                'name': $('#name').val(),
                'email': $('#email').val(),
                'mobile': $('#mobile').val(),
                'password': $('#cpassword').val(),
                'state':$('#state').val(),
                'dist': $('#district').val(),
                'pin': $('#pin').val(),
                'constituency': $('#constituency').val(),
                'address': $('#address').val(),
            }
            console.log(data)

          verifyEmail(data)
        }
           
    })

    $('#signup1').on('click', function(){  
        var arr= ['name1','email1','mobile1','pin1','password1','cpassword1','states1','district1','constituency1','businessName','businessType','productservice','address1']
        var status = validateAndMsg(arr);
        var passcheck = passwordComp('password1','cpassword1');
        console.log(status,passcheck);
            var gstCheck = true
        if($("input[class='form-check-input']:checked").length <= 0){  
            $("input[class='form-check-input']:first").focus();
            $('#gstCheck').after('<span style="color: red">This is a required field.</span>')
            gstCheck = false;
           }

        if(status==true && passcheck==true && gstCheck==true){  
           var data = {  
                'name': $('#name1').val(),
                'email': $('#email1').val(),
                'mobile': $('#mobile1').val(),
                'password': $('#cpassword1').val(),
                'state':$('#states1').val(),
                'dist': $('#district1').val(),
                'constituency': $('#constituency1').val(),
                'address': $('#address1').val(),
                'businessName': $('#businessName').val(),
                'businessType': $('#businessType').val(),
                'gst': $('#gst').val(),
                'pin1': $('#pin1').val(),
                'productservice': $('#productservice').val()
            }
            console.log(data)

          verifyEmail1(data)
        }
           
    })

    // Contact Form
    $('.contact-form').on('focus', 'input,textarea', function (e) {
        $(this).parent('.form-group').addClass('focused');
    });

    $('.contact-form').on('blur', 'input,textarea', function (e) {
        if (!$(this).val()) {
            $(this).parent('.form-group').removeClass('focused');
        }
    })

    //Global Form validation
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        var _self = $(this),
            data = $(this).serialize(),
            __selector = _self.closest('input,textarea');

        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.err-msg').remove();
        _self.find('.form-success').removeClass('form-success');

        $('.submit-loading-img').css('display', 'block');
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');

        $.ajax({
            url: 'email/email.php',
            type: "post",
            dataType: 'json',
            data: data,
            success: function (data) {
                $('.submit-loading-img').css('display', 'none');
                _self.closest('div').find('button[type="submit"]').removeAttr('disabled');

                if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]').addClass('form-success');
                    _self.closest('div').find('[name="' + data.field + '"]').parent().after('<div class="err-msg">*' + data.err + '</div>');
                } else {
                    _self.find('textarea:last-child').after('<div class="success-msg">' + data.success + '</div>');
                    _self[0].reset();
                    $('.contact-form .form-group').removeClass('focused');
                    setTimeout(function () {
                        $('.success-msg').fadeOut('slow');
                    }, 5000);
                }
            }
        });
    });

    //progress bar
    $(".progress").each(function () {
        $(this).waypoint(function () {
            $('.progress-bar').progressbar({
                transition_delay: 100
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    // Jump to bookmark
    var _anim = function () {
        $('html, body').animate({
            scrollTop: $('.ico-funding').offset().top
        }, 800, 'easeInOutExpo');
    }


    var _commonTab = $('.common-tab .nav li a'),
        _tabPane = $('.tab-pane'),
        _footerItem = $('.footer-nav li a');

    _window.on('load', function () {
        var loc = window.location.href;

        if (/tab-campaign/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if (/tab-faqs/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if (/tab-update/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    //test
    $('.footer-nav').on('click', 'li a', function () {
        if ($(this).attr('href') === "#tab-campaign") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-faqs") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-update") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    // Preloader js
    function loader(_success) {
        var obj = $('.o-preloader'),
            inner = $('.o-preloader_inner');
        var w = 0,
            t = setInterval(function () {
                w = w + 1;
                inner.text(w + '%');
                if (w === 100) {
                    obj.addClass('open-page');
                    obj.addClass('hide-loader');

                    clearInterval(t);
                    w = 0;
                    if (_success) {
                        return _success();
                    }
                }
            }, 20);
    }
    loader();


}(jQuery));


function verifyEmail1(data){  
    var email = $('#email1').val()
    $.ajax({
            url:'otpverify?email='+email,
            method: 'get',
            success:function (res) {
            
                $('#vendorRegistration').html('')
                $('#vendorRegistration').html(`
    
    
                <div class="col-sm-10">
                <div class="form-group">
                     <label for="email"  control-label">
                            Enter OTP sent to ${email}</label>
                          
                        <input type="text" id="otp" name="otp" class="form-control" placeholder="Enter OTP" />
                          
                          
                        </div>
                        </div>
                        <button type="button" id="verifyOTP" class="btn btn-primary" >Verify OTP</button>
                
                `)
                $('#verifyOTP').on('click',function(e) {
    
                    
                    
                    if($('#otp').val() == res){  
    
                        $.ajax({
                            url:'/users/createVendor',
                            method:'POST',
                            data:data,
                            dataType:'json',
                            success: function(res){  
    
                                $('#vendorRegistration').html('')
                                $('#vendorRegistration').html(`
                                <div class="col-sm-10">
                                <h4>Registration successfull</h4>
                                <a href="/"> click here</a> <p> to login</p>
                                `)
                            },
                            error: function(e){  
                                console.log(e)
                            }
            
                        })
    
                        
                    }
                 
                    else {  
    
    
                     $('#otp').after('<span style="color: red">Otp not matching</span>');
                     return false
                    }
                  
                })
             
            }

    })

   
}



function verifyEmail(data){  
    var email = $('#email').val()
    $.ajax({
            url:'otpverify?email='+email,
            method: 'get',
            success:function (res) {
              
                $('#userRegistration').html('')
                $('#userRegistration').html(`
    
    
                <div class="col-sm-10">
                <div class="form-group">
                     <label for="email"  control-label">
                            Enter OTP sent to ${email}</label>
                          
                        <input type="text" id="otp" name="otp" class="form-control" placeholder="Enter OTP" />
                          
                          
                        </div>
                        </div>
                        <button type="button" id="verifyOTP" class="btn btn-primary" >Verify OTP</button>
                
                `)
                $('#verifyOTP').on('click',function(e) {
    
                    
                    
                    if($('#otp').val() == res){  
    
                        $.ajax({
                            url:'/users/signup',
                            method:'POST',
                            data:data,
                            dataType:'json',
                            success: function(res){  
    
                                $('#userRegistration').html('')
                                $('#userRegistration').html(`
                    
                    
                                <div class="col-sm-10">
                                <h4>Registration successfull</h4>
                                <a href="/"> click here</a> <p> to login</p>
                                
                                `)
                            },
                            error: function(e){  
                                console.log(e)
                            }
            
                        })
    
                        
                    }
                 
                    else {  
    
    
                     $('#otp').after('<span style="color: red">Otp not matching</span>');
                     return false
                    }
                  
                })
             
            }

    })

   
}


function fetchDist(e){  
    console.log(e.value)
    $('#district').html(`<option value="">--select--</option>`)

    $.ajax({
    url:'/fetchDistByStateId?id='+e.value,
    method:'get',
    success:function (res) {
        res.forEach((d)=>{  
            $('#district').append(`<option value="${d.TDM_Dist}">${d.TDM_Dist_Name}</option>`)

        })
        
    }
    })
}



function fetchConst(e){  
    $('#constituency').html(`<option value="">--select--</option>`)
    console.log(e.value)

    $.ajax({
    url:'/fetchConstByDistId?id='+e.value,
    method:'get',
    success:function (res) {
        res.forEach((d)=>{  
            $('#constituency').append(`<option value="${d.TCM_Const}">${d.TCM_Const_Name}</option>`)

        })
        
    }
    })
}



function fetchDist1(e){  
    console.log(e.value)
    $('#district1').html(`<option value="">--select--</option>`)
    $.ajax({
    url:'/fetchDistByStateId?id='+e.value,
    method:'get',
    success:function (res) {
        res.forEach((d)=>{  
            $('#district1').append(`<option value="${d.TDM_Dist}">${d.TDM_Dist_Name}</option>`)

        })
        
    }
    })
}

function fetchConst1(e){  
    console.log(e.value)
    $('#constituency1').html(`<option value="">--select--</option>`)
    $.ajax({
    url:'/fetchConstByDistId?id='+e.value,
    method:'get',
    success:function (res) {
        res.forEach((d)=>{  
            $('#constituency1').append(`<option value="${d.TCM_Const}">${d.TCM_Const_Name}</option>`)

        })
        
    }
    })
}




function validateAndMsg(arr) {
    var status = true; 
    
    arr.forEach((id, i) => {
      if($('#'+id).val() == '' || $('#'+id).val() == null){
        let msg = '<span style="color: red">This is a required field.</span>';
        if(!($('#'+id).next()).is('span')){
          $('#'+id).after(msg);
        }
        status = false;
        let ar = [id];
        if($('#'+id).is('input')){
          $('#'+id).keyup(()=>{
            validateAndMsg(ar)
          })
        }else if($('#'+id).hasClass('wr-date')){
          //console.log('called');
          $('#'+id).onfocus(()=>{
            validateAndMsg(ar)
          })
        }else{
          $('#'+id).on('click',()=>{
            validateAndMsg(ar)
          })
        }
      }else{
        status = true;
        if(($('#'+id).next()).is('span')){
          $('#'+id).next("span").remove();
        }
      }
    });
    return status;
  }

function passwordComp(p,c){  
   if($('#'+p).val() == $('#'+c).val()){  
       return true
   }

   else {  
    $('#'+c).after('<span style="color: red">Password not matching.</span>');
    return false
   }
}



function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 91 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



