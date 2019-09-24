$(".icons").hover(function () {
    $(this).addClass("animated tada");
});

$(".icons").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass("animated tada");
});