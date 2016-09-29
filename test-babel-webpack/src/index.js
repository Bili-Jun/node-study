import style from "./css/style.css";
import $ from "jquery";

$(function(){
    const docunment = $(document);
    console.log("jquery is ready the document is "+document);
});
var { bar, foo } = { foo: "aaa", bar: "bbb" };

console.log(bar,foo);
