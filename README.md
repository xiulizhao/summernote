# summernote
可内嵌与页面内，所见即所得的文本编辑器<br>
<img src="http://www.wware.org/img/rich_text1.png?_3e20" width="600px"><br>
普通属性<br>
data-snheight	设置富文本编辑器的初始化高度	150<br>
data-snminheight	设置富文本编辑器的最小高度。当该值设置时，通过拖拽，拖拽到设置的值时，富文本编辑器高度将不会再变小	100<br>
data-snmaxheight	设置富文本编辑器的最大高度。当该值设置时，通过拖拽，拖拽到设置的值时，富文本编辑器高度将不会再变大	200<br>
data-snfocus	是否自动聚焦富文本编辑器。开启时，当前富文本编辑器初始化时，处于聚焦模式	false<br>
data-snplaceholderon	与占位符设置项关联，该项设置为开启时，可以设置占位符	false<br>
data-snplaceholder	设置占位符，类似于文本输入框的占位符	占位符<br>
data-snfontnames	设置字体。这里的字体指的是：使用富文本编辑器编辑内容文字时，可以选择的字体	[ '微软雅黑','Arial', 'Arial Black' ]<br>
data-sndialogsfade	开启时，通过富文本编辑器弹出的对话框会带有淡入淡出效果	false<br>
data-snairmode	开启时，富文本编辑器为airmode状态。即：只显示内容信息，只有当某些内容选中时，富文本编辑器以工具条的形式出现	false<br>
data-lang	设置富文本编辑器提示信息的语言	zh-CN<br>
data-dialogsinbody	富文本元素在弹出框中使用时设置为true,否则默认为false	false/true<br>
控制属性<br>
data--snoteinit	本属性用来初始化富文本编辑器的内容	默认文字<br>
data--toolbar	本属性用来设置是否显示富文本编辑器的工具栏。设置为'false'时，不显示工具栏,直接手动将data--toolbar="false"复制到元素源码内即可	false<br>
data--insertimage	该属性可以实现在光标处添加一张图片，属性值为图片路径	/img/demo.jpg<br>
data--getcontent	该属性设置提交数据的类型,值有两个:html/text.如果设置为html,则`data-x-content`的值为html,此时请通过提交元素提交数据.如果设置为text,则`data-x-content`的值为html,,此时请通过提交data-x-content`的值提交数据	"html"<br>
输出属性<br>
data-x-content	输出富文本当前值	默认文字<br>
data-x-inited	当元素初始化完成之后,该属性值为true.初始值(默认)为false	true<br>
