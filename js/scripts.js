$('.main-form .form-control').on('focus', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});


$('.form-wrapper   .switches .btn').on('click', function () {
        if ($(this).hasClass('-right')) {

            $(this).parent().addClass('right');
            $('.form-container').css({transform: ' translate3d(0,0,0)'}).find('.right').removeClass('faded')
        }
        else {
            $(this).parent().removeClass('right');
            $('.form-container').css({transform: ' translate3d(-50%,0,0)'})
        }
    }
)
//form validation
//adding bootstrap tool tips
$('.main-form .form-group').each(function (i, el) {

    $(el).attr({
        "data-toggle": 'tooltip',
        "data-placement": "left"
    }).append('<span>')
});
//ading blur event for sigh up form

$('.main-form.left input[type="text"]').on('blur', function () {
    if ($(this).val() === '') {
        invaildFeild($(this), 'this field cannot be empty');
    } else if ($(this).val().length < 10) {
        invaildFeild($(this), 'make sure your user name is at least 10 characters long');
    } else if ($(this).val().includes(' ')) {
        invaildFeild($(this), 'user name can`t contain spaces');
    } else {
        vaildField($(this))
    }

});
$('.main-form.left input[type="password"]').first().on('blur', function () {
    if ($(this).val() === '') {
        invaildFeild($(this), 'this field cannot be empty');
    } else if ($(this).val().length < 10) {
        invaildFeild($(this), 'make sure your password is at least 10 characters long');
    } else if (!/(?=.*[a-z])/.test($(this).val())) {
        invaildFeild($(this), 'password should contain at least one lower case');
    } else if (!/(?=.*[A-Z])/.test($(this).val())) {
        invaildFeild($(this), 'password should contain at least one upper case');
    } else if (!/(?=.*[!@#\$%\^&\*])/.test($(this).val())) {
        invaildFeild($(this), 'password should  contain at least one special character ! @ # $ %^  & *');
    } else {
        vaildField($(this))
    }
});
$('.main-form.left input[type="password"]').eq(1).on('blur', function () {
    if ($(this).val().length ===0) {
        invaildFeild($(this), 'please fill the previous field first');
    } else if ($(this).val() !== $('.main-form.left input[type="password"]').first().val()) {
        invaildFeild($(this), 'make sure that ur password matches');
    } else {
        vaildField($(this))
    }

});
$('.main-form.left input[type="email"]').first().on('blur', function () {
    if ($(this).val() === '') {
        invaildFeild($(this), 'this field cannot be empty');
    } else if (!/(?=@)/.test($(this).val())) {
        invaildFeild($(this), 'you missed @ sign');
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test($(this).val())) {
        invaildFeild($(this), 'make sure you have entered a valid email');
    } else {
        vaildField($(this))
    }
});

function invaildFeild($el, error) {
    $el.parents('.form-group').attr("data-original-title", error).tooltip('show').find('span , i').addClass('error');
    setTimeout(() => {
            $el.parents('.form-group').tooltip('hide');
        }, 2000
    )
}

function vaildField($el) {
    $el.parents('.form-group').attr("data-original-title", '').tooltip('hide').find('span , i').removeClass('error').end().find('.not-valid').removeClass('not-valid').addClass('valid');
}

// show hide password
$('i.hide, i.show').on('click', function () {
    if ($(this).hasClass('show')) {
        $(this).fadeOut(() => {
                $(this).parent('.form-group').find('input').attr('type', 'text');

            }
        ).siblings('.hide').fadeIn();
    } else {
        $(this).fadeOut(() => {
                $(this).parent('.form-group').find('input').attr('type', 'password');
            }
        ).siblings('.show').fadeIn();
    }
})
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
