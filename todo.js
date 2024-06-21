document.addEventListener('DOMContentLoaded', function() {
    var enterbutton = document.getElementById('enter');
    var input = document.getElementById('userinput');
    var ul = document.getElementById('ul');

    function createListElement() {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        function crossout() {
            li.classList.toggle('done');
        }

        li.addEventListener('click', crossout);

        function deleteListItem() {
            li.classList.add('delete');
        }

        var dbtn = document.createElement('button');
        dbtn.appendChild(document.createTextNode('x'));
        li.appendChild(dbtn);
        dbtn.addEventListener('click', deleteListItem);
    }

    function inputLength() {
        return input.value.length;
    }

    function addListAfterClick() {
        if (inputLength() > 0) {
            createListElement();
        }
    }

    function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.key === 'Enter') {
            createListElement();
        }
    }

    enterbutton.addEventListener('click', addListAfterClick);
    input.addEventListener('keypress', addListAfterKeypress);
});