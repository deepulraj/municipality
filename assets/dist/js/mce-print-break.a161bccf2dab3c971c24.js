!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=96)}({96:function(e,t){tinymce.PluginManager.add("print_break",function(e,t){e.addButton("printbreak",{text:"",icon:"wp_page",context:"insert",tooltip:"Print Break",onclick:function(t){e.execCommand("Print_Break")}}),e.addCommand("Print_Break",function(){var t,n,r=e.dom,a=e.selection.getNode();n='<img src="'+tinymce.Env.transparentSrc+'" alt="" title="Print Break" class="wp-print-break-tag mce-wp-printbreak" data-mce-resize="false" data-mce-placeholder="1" data-wp-more="printbreak" />',"BODY"===a.nodeName||"P"===a.nodeName&&"BODY"===a.parentNode.nodeName?e.insertContent(n):(t=r.getParent(a,function(e){return!(!e.parentNode||"BODY"!==e.parentNode.nodeName)},e.getBody()))&&("P"===t.nodeName?t.appendChild(r.create("p",null,n).firstChild):r.insertAfter(r.create("p",null,n),t),e.nodeChanged())}),e.on("BeforeSetContent",function(e){e.content&&-1!==e.content.indexOf("\x3c!--printbreak--\x3e")&&(e.content=e.content.replace(/<!--printbreak-->/g,'<img src="'+tinymce.Env.transparentSrc+'" class="wp-print-break-tag mce-wp-printbreak" alt="" title="Print Break" data-wp-more="printbreak" data-mce-resize="false" data-mce-placeholder="1" />'))}),e.on("PostProcess",function(e){e.get&&(e.content=e.content.replace(/<img[^>]+>/g,function(e){var t;return-1!==e.indexOf('data-wp-more="printbreak"')&&(t="\x3c!--printbreak--\x3e"),t||e}))})})}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NvdXJjZS9tY2UtanMvbWNlLXByaW50LWJyZWFrLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidGlueW1jZSIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJlZGl0b3IiLCJ1cmwiLCJhZGRCdXR0b24iLCJ0ZXh0IiwiaWNvbiIsImNvbnRleHQiLCJ0b29sdGlwIiwib25jbGljayIsImUiLCJleGVjQ29tbWFuZCIsImFkZENvbW1hbmQiLCJwYXJlbnQiLCJodG1sIiwiZG9tIiwibm9kZSIsInNlbGVjdGlvbiIsImdldE5vZGUiLCJFbnYiLCJ0cmFuc3BhcmVudFNyYyIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydENvbnRlbnQiLCJnZXRQYXJlbnQiLCJmb3VuZCIsImdldEJvZHkiLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRBZnRlciIsIm5vZGVDaGFuZ2VkIiwib24iLCJldmVudCIsImNvbnRlbnQiLCJpbmRleE9mIiwicmVwbGFjZSIsImltYWdlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNB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cEQsTUFDUG9ELEVBQU1DLFFBQVVELEVBQU1DLFFBQVFFLFFBQVEsY0FBZSxTQUFVQyxHQUMzRCxJQUNJQyxFQU9KLE9BSnFELElBQWhERCxFQUFNRixRQUFRLCtCQUNmRyxFQUFTLDJCQUdOQSxHQUFVRCIsImZpbGUiOiJqcy9tY2UtcHJpbnQtYnJlYWsuYTE2MWJjY2YyZGFiM2M5NzFjMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTYpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAgIHRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoJ3ByaW50X2JyZWFrJywgZnVuY3Rpb24oZWRpdG9yLCB1cmwpIHtcbiAgICAgICAgZWRpdG9yLmFkZEJ1dHRvbigncHJpbnRicmVhaycsIHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ3dwX3BhZ2UnLFxuICAgICAgICAgICAgY29udGV4dDogJ2luc2VydCcsXG4gICAgICAgICAgICB0b29sdGlwOiAnUHJpbnQgQnJlYWsnLFxuICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnUHJpbnRfQnJlYWsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdG9yLmFkZENvbW1hbmQoJ1ByaW50X0JyZWFrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50O1xuICAgICAgICAgICAgdmFyIGh0bWw7XG5cbiAgICAgICAgICAgIHZhciB0YWcgPSAncHJpbnRicmVhayc7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAnUHJpbnQgQnJlYWsnO1xuICAgICAgICAgICAgdmFyIGNsYXNzbmFtZSA9ICd3cC1wcmludC1icmVhay10YWcgbWNlLXdwLScgKyB0YWc7XG4gICAgICAgICAgICB2YXIgZG9tID0gZWRpdG9yLmRvbTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZWRpdG9yLnNlbGVjdGlvbi5nZXROb2RlKCk7XG5cbiAgICAgICAgICAgIGh0bWwgPSAnPGltZyBzcmM9XCInICsgdGlueW1jZS5FbnYudHJhbnNwYXJlbnRTcmMgKyAnXCIgYWx0PVwiXCIgdGl0bGU9XCInICsgdGl0bGUgKyAnXCIgY2xhc3M9XCInICsgY2xhc3NuYW1lICsgJ1wiICcgK1xuICAgICAgICAgICAgICAgICdkYXRhLW1jZS1yZXNpemU9XCJmYWxzZVwiIGRhdGEtbWNlLXBsYWNlaG9sZGVyPVwiMVwiIGRhdGEtd3AtbW9yZT1cInByaW50YnJlYWtcIiAvPic7XG5cbiAgICAgICAgICAgIC8vIE1vc3QgY29tbW9uIGNhc2VcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnQk9EWScgfHwgKG5vZGUubm9kZU5hbWUgPT09ICdQJyAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudChodG1sKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgdG9wIGxldmVsIHBhcmVudCBub2RlXG4gICAgICAgICAgICBwYXJlbnQgPSBkb20uZ2V0UGFyZW50KG5vZGUsIGZ1bmN0aW9uKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kLnBhcmVudE5vZGUgJiYgZm91bmQucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sIGVkaXRvci5nZXRCb2R5KCkpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlTmFtZSA9PT0gJ1AnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkb20uY3JlYXRlKCdwJywgbnVsbCwgaHRtbCkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmluc2VydEFmdGVyKCBkb20uY3JlYXRlKCdwJywgbnVsbCwgaHRtbCksIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWRpdG9yLm5vZGVDaGFuZ2VkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRvci5vbiggJ0JlZm9yZVNldENvbnRlbnQnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICB2YXIgdGl0bGU7XG5cbiAgICAgICAgICAgIGlmICggZXZlbnQuY29udGVudCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGV2ZW50LmNvbnRlbnQuaW5kZXhPZiggJzwhLS1wcmludGJyZWFrLS0+JyApICE9PSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnUHJpbnQgQnJlYWsnO1xuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRlbnQgPSBldmVudC5jb250ZW50LnJlcGxhY2UoIC88IS0tcHJpbnRicmVhay0tPi9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgc3JjPVwiJyArIHRpbnltY2UuRW52LnRyYW5zcGFyZW50U3JjICsgJ1wiIGNsYXNzPVwid3AtcHJpbnQtYnJlYWstdGFnIG1jZS13cC1wcmludGJyZWFrXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdD1cIlwiIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiIGRhdGEtd3AtbW9yZT1cInByaW50YnJlYWtcIiBkYXRhLW1jZS1yZXNpemU9XCJmYWxzZVwiIGRhdGEtbWNlLXBsYWNlaG9sZGVyPVwiMVwiIC8+JyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdG9yLm9uKCAnUG9zdFByb2Nlc3MnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICBpZiAoIGV2ZW50LmdldCApIHtcbiAgICAgICAgICAgICAgICBldmVudC5jb250ZW50ID0gZXZlbnQuY29udGVudC5yZXBsYWNlKC88aW1nW14+XSs+L2csIGZ1bmN0aW9uKCBpbWFnZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9yZXRleHQgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGltYWdlLmluZGV4T2YoJ2RhdGEtd3AtbW9yZT1cInByaW50YnJlYWtcIicpICE9PSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyA9ICc8IS0tcHJpbnRicmVhay0tPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nIHx8IGltYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=mce-print-break.a161bccf2dab3c971c24.js.map