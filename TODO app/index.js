(function () {

    var task = "Task x "


    var inputTask;

    var add = function name(task,index) {
        let orderedList = document.getElementById('ol');
        let list = document.createElement('li');
        let span = document.createElement('span');
        let remove = document.createElement('button');
        list.id = index;
        remove.id = index; 
        remove.textContent = "X";
        remove.className = "btn btn-primary";
        remove.onclick = function () {
            console.log(index);
            document.getElementById(String(index)).remove();
        }
        list.innerHTML = task;
        orderedList.appendChild(list);
        list.appendChild(span);
        span.appendChild(remove);

        console.log(index);
    }


        var tasks = ["hi"];
    document.getElementById('addButton').onclick = function () {


        inputTask = document.getElementById('todo').value;
        tasks.push(inputTask);
        console.log(tasks);
        add(tasks[tasks.length-1],tasks.length-1);

    }





}());