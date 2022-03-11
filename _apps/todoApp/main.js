const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
};
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(input.value);
    add();
});


function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }
    // todoText は型変換によって真偽値が入る
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");

        if (todo && todo.completed) {
            li.classList.add("text-decoration-line-through");
        }

        // listの要素をdeleteする（右クリック）
        li.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            li.remove();
            saveData();
        });

        // listの要素に打ち消し線をつける（左クリック）
        li.addEventListener("click", function () {
            // bootstrapの打ち消し線のクラス
            li.classList.toggle("text-decoration-line-through");
            saveData();
        });

        ul.appendChild(li)
        input.value = "";
        saveData();
    }
}

function saveData() {
    // 画面に表示されたリストの値をとる
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorage　データの保存
// localStorage.setItem("キー", "値");
// localStorage　データの取得
// localStorage.getItem("キー");

// localStorageへの保存時はJSON形式で行うのが良い
// 文字列で保存でき、持ってくるときにも扱いやすくなるから