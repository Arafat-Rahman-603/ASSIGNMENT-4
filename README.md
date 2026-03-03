1.getElementById it get dom element by html tag id ,
getElementsByClassName it get dom element by html tag classname,
querySelector it get dom element by html tagname id and classname,
querySelectorAll it get dom element by html tagname id and classname but it get all element same tag name id and classname.

2.1st we create a new element like (let newElement = document.createElement("div");)
then add element contant like (newElement.innerHTML = "<b>Hello Arafat!</b>";) 
then select parent element like (let parent = document.getElementById("container");)
then Insert new Element DOM like ( parent.appendChild(newElement);)

3.Event Bubbling means when we click a dom element default we click all parent element by clicking this element it dafault auto click down to up.

4. Event Delegation means use on element handle for multiple elements it usefull for code clean ও scalable and performance. 

5.PreventDefault() use for stop element default behavior and stopPropagation() use for stop event bubbling
