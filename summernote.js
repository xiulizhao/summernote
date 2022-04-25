(function (root, factory) {
  /* CommonJS */
  if (typeof exports == "object") module.exports = factory();
  /* AMD module */
  else if (typeof define == "function" && define.amd) define(factory);

  /* 修改: 将 wwclassName 改为元素标识 */
  else root.wwtemplate = factory();
}(this, function () {
  "use strict";

  /* 修改: 将 wwclassName 改为元素标识 */
  var wwclassName = /*INSBEGIN:WWCLSNAME*/
    "summernote"
    /*INSEND:WWCLSNAME*/
    ;

  // BEGIN: 加载依赖部分
  /* 无依赖资源请使用本函数
  function loadDependence(fncallback) {
    if (typeof fncallback === "function") {
      fncallback();
    }
  }
  // */
  // 有依赖资源使用本函数
  // 使用方式:
  //  - 将"summernote"设置为具体插件标识, 通常就是summernote称, 不可为中文. 如: swiper
  //  - 如libs中无该插件, 则申请添加该插件
  //  - 将"插件路径"设置为具体插件路径, 通常为js文件, 省略路径中, 开头的"/"和结尾的".js". 如: "/libs/qrcodejs/qrcode.js" 应写为 "libs/qrcodejs/qrcode"
  //  - require 函数第一个参数, 传入依赖资源数组. 通常为config中配置的`插件名`. 可能还包括css文件
  //   - css文件的格式, 以"css!"开头, 省略路径开头的"/"和路径结尾的".css". 如: "/libs/noty/lib/noty.css" 应写为 ""css!libs/noty/lib/noty""
  //  - require 函数第二个参数是个回调函数, 该函数可能会传入参数. 参数与前面数组位置对应. 如不清楚, 自行查阅 (requirejs)[http://requirejs.org/] 文档
  //*
  var loadDependence = function (fncallback) {
    // 本模板只支持一个依赖库，如果需要多个依赖库，需要改进。
    var language = $('[data-wwclass="tpl_summernote"]').attr("data-lang");
    var languagejs;
    if (language) {
      languagejs = "libs/summernote/dist/lang/summernote-" + language + ".min";
    } else {
      languagejs = "libs/summernote/dist/lang/summernote-zh-CN.min";
    }
    if (!window.wwload.summernote) {
      window.wwload.summernote = "wait";
      requirejs.config({
        paths: {
          "summernote": "libs/summernote/dist/summernote",
          "language": languagejs
        },
        "shim": {
          "language": {
            deps: ["summernote"]
          }
        }
      });
      require(["summernote", "language", "css!libs/font-awesome/css/font-awesome", "css!libs/summernote/dist/summernote"], function () {
        window.wwload.summernote = true;
        replace();
        fncallback();
      });
    } else if (window.wwload.summernote === "wait") {
      setTimeout(function () {
        loadDependence(fncallback);
      }, 100);
    } else {
      replace();
      fncallback();
    }

    function replace() {
      loadDependence = function (fncallback) {
        fncallback();
      };
    }
  };
  //*/
  // END: 加载依赖部分


  // BEGIN: 元素首次初始化处理
  var init = function () {
    // 重写初始化函数
    init = function () {
      return true;
    };
    $.wwclass.addEvtinHandler(wwclassName, evtInHandler);

    // 如有初始化动作, 请在下方添加
  };
  // END: 元素首次初始化处理
  //转换为bool类型
  function isTrue(data) {
    if (data == "false") {
      return false;
    }
    return !!data;
  }

  function getAttr($ele, tmp) {
    var config = {};
    config.dialogsInBody = isTrue($ele.attr("data-dialogsinbody"));
    config.snheight = $ele.attr("data-snheight");
    config.snminheight = $ele.attr("data-snminheight");
    config.snmaxheight = $ele.attr("data-snmaxheight");
    config.focus = isTrue($ele.attr("data-snfocus"));
    config.snpopover = $ele.attr("data-snpopover");
    config.snplaceholderon = $ele.attr("data-snplaceholderon");
    config.snplaceholder = $ele.attr("data-snplaceholder");
    config.fontNames = $ele.attr("data-snfontnames") ? JSON.parse($ele.attr("data-snfontnames")) : ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'];
    config.dialogsFade = isTrue($ele.attr("data-sndialogsfade"));
    config.disableDragAndDrop = isTrue($ele.attr("data-sndisabledraganddrop"));
    config.airMode = isTrue($ele.attr("data-snairmode"));
    config.language = $ele.attr("data-lang") || "zh-CN";
    config.sntoolbar = $ele.attr("data--toolbar") || "[[\"style\", [\"style\"]],[\"font\", [\"bold\", \"underline\", \"clear\"]],[\"fontname\", [\"fontname\"]],[\"color\", [\"color\"]],[\"para\", [\"ul\", \"ol\", \"paragraph\"]],[\"height\", [\"height\"]],[\"table\", [\"table\"]],[\"insert\", [\"link\", \"picture\", \"video\"]],[\"view\", [\"fullscreen\", \"codeview\", \"help\"]]]";
    config.lineHeights = $ele.attr("data-lineheights") ? JSON.parse($ele.attr("data-lineheights")) : ['0.5', '1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '2.5', '3.0'];
    return config;
  }

  function summernote_init($ele) {
    var options = getAttr($ele);
    // console.log(options);
    //初始化
    if (options.sntoolbar) {
      if (options.sntoolbar == "false") {
        options.sntoolbar = false;
      }
      if (options.sntoolbar && options.sntoolbar !== "" && options.sntoolbar != "undefined") {
        options.sntoolbar = JSON.parse(options.sntoolbar);
      }
    }
    $ele.summernote({
      //参数设置
      dialogsInBody: options.dialogsInBody,
      height: options.snheight,
      minheight: options.snminheight,
      maxHeight: options.snmaxheight,
      focus: options.focus,
      toolbar: options.sntoolbar,
      placeholder: options.snplaceholder,
      fontNames: options.fontNames,
      dialogsFade: options.dialogsFade,
      airMode: options.airMode,
      lang: options.language,
      lineHeights: options.lineHeights,
      callbacks: {
        //初始化回调
        onInit: function () {
          // $ele.summernote("destroy");
          // console.log('Summernote is launched');
          var makrup = $ele.summernote('code');
          //console.log(makrup);
          $ele.data("value", makrup);
          var snoteinit = $ele.attr("data--snoteinit");
          if (snoteinit !== undefined) {
            // console.log("snoteinit"+snoteinit);
            //console.log("snoteinit.length="+snoteinit.length);
            $ele.summernote("code", snoteinit);
          }
          $.wwclass.helper.updateProp($ele, "data-x-inited", true);
        },
        //输入回调
        onEnter: function () {
          // console.log('Enter/Return key pressed');
          var makrup = $ele.summernote('code');
          //console.log(makrup);
          $ele.data("value", makrup);
          var type = $ele.data("getcontent");
          if (type === "html") {
            $.wwclass.helper.updateProp($ele, "data-x-content", makrup);
          }
          if (type === "text") {
            var text = $(".note-editing-area").text();
            $.wwclass.helper.updateProp($ele, "data-x-content", text);
          }
        },
        //失去焦距时将data存入属性data-value
        onBlur: function (e) {
          //$ele.attr("data-x-content",""); //新添加1
          // console.log('Editable area loses focus');
          var makrup = $ele.summernote('code');
          //console.log(makrup);
          // $ele.data("value", makrup);
          //console.log(makrup);
          var type = $ele.data("getcontent");
          if (type === "html") {
            $.wwclass.helper.updateProp($ele, "data-x-content", makrup);
          }
          if (type === "text") {
            var text = $(".note-editing-area").text();
            $.wwclass.helper.updateProp($ele, "data-x-content", text);
          }
          //$ele.attr("data-x-content",makrup);  //新添加2
          $.wwclass.helper.anijsTrigger($ele, "onBlur");  
        },
        //获得焦距回调
        onFocus: function (e) {
          // console.log('Editable area is focused');

        },
        //内容变动回调
        onChange: function (contents, $editable) {
          // console.log('onChange:', contents, $editable);
          // $ele.attr("data-x-content",""); //新添加3
          $ele.data("value", contents);
          //console.log(contents);
          var type = $ele.data("getcontent");
          if (type === "html") {
            $.wwclass.helper.updateProp($ele, "data-x-content", contents);
          }
          if (type === "text") {
            var text = $(".note-editing-area").text();
            $.wwclass.helper.updateProp($ele, "data-x-content", text);
          }
          $ele.attr("data-x-content", contents); //新添加4
        },
        // //键盘按键被松开时回调
        // onKeyup: function(e) {
        // },
        // //按下一个键盘按键时回调
        // onKeydown: function(e) {
        // }
        onPaste: function (e) {
          var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
          e.preventDefault();
          document.execCommand('insertText', false, bufferText);
        }
      }
    });
  }

  /*
   * @description 初始化每个元素
   * @param {jQuery object} $ele - 需要初始化的元素
   */
  function processElement($ele) {
    // 对 $ele 元素做对应处理
    var options = getAttr($ele);
    //占位符设置
    if (options.nplaceholderon == "true") {
      $ele.empty();
    }
    if (options.sntoolbar && options.sntoolbar !== "" && options.sntoolbar != "undefined" && $ele.next(".note-editor").length === 0) {
      setTimeout(function () {
        summernote_init($ele);
      }, 500)
    }
  }

  /*
   * @description 析构每个元素, 也就是该元素该删除时的处理代码
   * @param {jQuery object} $ele - 需要处理的元素
   */
  function finalizeElement($ele) {
    // 对 $ele 元素做对应处理
  }

  // BEGIN: 监听属性处理
  /*
   * @description 监听函数, 元素的控制属性(data--)改变时处理
   * @param {jQuery object} $ele - 控制属性改变的元素
   * @param {string} attribute - 控制属性的名称$('#summernote').summernote('code', markupStr);
   * @param {string} value - 控制属性改变为何值
   */
  var evtInHandler = function ($ele, attribute, value) {
    switch (attribute) {
      case "data--snoteinit":
        // 添加处理动作

        if ($ele.data("summernote")) {   //.layoutInfo 添加上layoutInfo循环报错
          value = $ele.attr("data--snoteinit");
          if (value !== undefined && value !== $ele.attr('data-x-content') || value == "") {
            // console.log("snoteinit"+snoteinit);
            //console.log("value.length="+value.length);
            $ele.summernote("code", value);
          }
        }
        // console.log(value);
        break;
      case "data--toolbar":
        if (value) {
          if (value == "false") {
            $ele.find('.note-toolbar').hide();
          }
          if (value !== "" || value != "undefined") {
            value = JSON.parse(value);
            $ele.summernote({
              toolbar: value
            });
          }
        }
        break;
      case "data--insertimage":
        if (value) {
          $ele.summernote('insertImage', value, function ($image) {
            // $image.css('width', $image.width() / 3);
            $image.attr('data-filename', 'retriever');
            $.wwclass.helper.updateProp($ele, "data--insertimage", "");
          });
        }
        break;
      case "data--getcontent":
        if (value === "html") {
          $ele.data("getcontent", value);
        }
        if (value === "text") {
          $ele.data("getcontent", value);
        }
        setTimeout(function () {
          $.wwclass.helper.updateProp($ele, "data--getcontent", value);
        }, 500);
        break;
      case "finalize":
        finalizeElement($ele);
        break;
      default:
        console.info("监听到 " + attribute + " 属性值改变为 " + value + ", 但是没找到对应处理动作.");
    }
  };
  // END: 监听属性处理

  // 以下部分不需要修改
  if (!$.wwclass) {
    console.error("Can not use without wwclass.js");
    return false;
  }

  var ret = /*INSBEGIN:WWCLSHANDLER*/
    function (set) {
      if (set.length > 0) {
        loadDependence(function () {
          init();
          $(set).each(function (index, targetDom) {
            processElement($(targetDom));
          });
        });
      }
    }
    /*INSEND:WWCLSHANDLER*/
    ;

  return ret;

}));
