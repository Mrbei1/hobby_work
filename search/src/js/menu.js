// 是否显示一级菜单折叠按钮
//var hsfoldIcon = false;
// 需要控制隐藏/显示的span元素
var hsSpanElement; // = hsfoldIcon ? 'ul.nav>li>a>span:not([class*="iconfont "])': 'ul.nav>li>a>span:not([class*=" "])';

/** 一级菜单绑定单击事件(折叠/展开二级菜单) */
$('ul.nav-first>li>a').click(function(event) {
    // 实现菜单折叠
    $(this).next('ul').slideToggle();
    $(this).children('span.icon-right').toggleClass('icon-xia').toggleClass('icon-you');
    hsSpanElement = hsfoldIcon ? 'ul.nav>li>a>span:not([class*="iconfont icon-you"])' : 'ul.nav>li>a>span:not([class*=" icon-you"])';
    $(hsSpanElement).each(function() {
        if (menuIsShow) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});
$('ul.nav-first>li').click(function(event) {
    menuClick1(this);
});
$('ul.nav-first>li>ul.nav-child>li').click(function(event) {
    menuClick2(this);
});

/** 一级菜单绑定单击事件(触发样式和链接),obj是一级菜单li */
function menuClick1(obj) {
    var objUl = $(obj).find('ul');
    var aHref = "/_xwq/content-wrapper/404.html ";
    if (objUl.html() == undefined || objUl.length <= 0) { // 无子菜单,触发单击事件
        // 去除所有二级菜单活动状态
        $('ul.nav-first>li>ul.nav-child>li').removeClass('borderLeft').removeClass('active');
        // 去除所有一级菜单活动状态
        $('ul.nav-first>li').removeClass('active');
        // 当前菜单(一级菜单)加上活动状态
        $(obj).addClass('active');
        // 获取a标签链接
        if (!($(obj).find('a').attr('aHref') == undefined || $(obj).find('a').attr('aHref') == '#' || $(obj).find('a').attr('aHref').trim() == '')) {
            aHref = $(obj).find('a').attr('aHref');
        }
        console.log("menuUrl: " + aHref);
        // $('.basepage_container_right_center').load(aHref);
    }
}

/** 二级菜单绑定单击事件(触发样式和链接),obj是二级菜单li */
function menuClick2(obj) {
    var aHref = "/_xwq/content-wrapper/404.html ";
    // 去除所有二级菜单活动状态
    $('ul.nav-first>li>ul.nav-child>li').removeClass('borderLeft').removeClass('active');
    // 当前菜单及其同级菜单(二级菜单)加上状态
    $(obj).parent().children().each(function(i, v) {
        if ($(this).children('a').html() != $(obj).children('a').html()) {
            $(this).addClass('borderLeft');
        } else {
            $(this).addClass('active');
            return false;
        }
    });
    // 去除所有一级菜单活动状态
    $('ul.nav-first>li').removeClass('active');
    // 当前菜单的上级菜单(一级菜单)加上活动状态
    $(obj).parent().parent().addClass('active');
    // 获取a标签链接
    if (!($(obj).find('a').attr('aHref') == undefined || $(obj).find('a').attr('aHref') == '#' || $(obj).find('a').attr('aHref').trim() == '')) {
        aHref = $(obj).find('a').attr('aHref');
    }
    console.log("menuUrl: " + aHref);
    // $('.basepage_container_right_center').load(aHref);
}

//var menuIsShow = true; // 菜单收缩标志
//var menuWidth; // 菜单宽度

/**
 * 菜单收缩/展开
 * element 菜单所在容器宽度设置,例如'#menuDiv'
 */
// function menuPullback(element) {
//     // 控制li>a>span隐藏状态
//     hsSpanElement = hsfoldIcon ? 'ul.nav>li>a>span:not([class*="iconfont "])' : 'ul.nav>li>a>span:not([class*=" "])';
//     $(hsSpanElement).each(function() {
//         if ($(this).is(':hidden')) {
//             $(this).show();
//         } else {
//             $(this).hide();
//         }
//     });
//     // 判断menuIsShow的状态
//     if (menuIsShow) {
//         menuWidth = 60;
//         $(element).width(menuWidth); // 设置宽度
//         // 修改标志位
//         menuIsShow = false;
//     } else {
//         menuWidth = 230;
//         $(element).width(menuWidth); // 设置宽度
//         menuIsShow = true;
//     }
// }

/**
 * 文字化菜单(菜单展开)
 * element 菜单所在容器宽度设置,例如'#menuDiv'
 */
// function menuExtend(element) {
//     // 控制li>a>span隐藏状态
//     hsSpanElement = hsfoldIcon ? 'ul.nav>li>a>span:not([class*="iconfont "])' : 'ul.nav>li>a>span:not([class*=" "])';
//     $(hsSpanElement).each(function() {
//         $(this).show();
//     });
//     // 判断menuIsShow的状态
//     menuWidth = 230;
//     $(element).width(menuWidth); // 设置宽度
//     menuIsShow = true;
// }

/**
 * 图标化菜单(菜单收缩)
 * element 菜单所在容器宽度设置,例如'#menuDiv'
 */
// function menushrink(element) {
//     // 控制li>a>span隐藏状态
//     hsSpanElement = hsfoldIcon ? 'ul.nav>li>a>span:not([class*="iconfont "])' : 'ul.nav>li>a>span:not([class*=" "])';
//     $(hsSpanElement).each(function() {
//         $(this).hide();
//     });
//     // 判断menuIsShow的状态
//     menuWidth = 60;
//     $(element).width(menuWidth); // 设置宽度
//     // 修改标志位
//     menuIsShow = false;
// }

// $(function() {
//     hsfoldIcon = true;
//
//     var element = '.menuDiv';
//     menuPullback(element); // 收缩菜单
//     // 鼠标经过(展开菜单)
//     $(element).mouseover(function() {
//         menuExtend(element);
//     });
//     // 鼠标离开(收缩菜单)
//     $(element).mouseout(function() {
//         menushrink(element);
//     });
// });