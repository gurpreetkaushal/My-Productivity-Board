function addTask()
    {
        let input=document.getElementById("enter");
        let val=input.value;
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        if(val==="")
        {
            alert("Please enter the task!");
            return;
        }
        td1.innerHTML=val;
        td2.innerHTML=`<button type="button" id="edit" onclick="editTask(this)">Edit✍🏻</button>`;
        td3.innerHTML=`<button type="button" id="done" onclick="doneTask(this)">Done👍🏻</button>`;
        td4.innerHTML=`<button type="button" id="del" onclick="delTask(this)">Delete❗</button>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        document.getElementById("container").appendChild(tr);
        input.value="";
    }
function delTask(btn)
    {
        let row=btn.parentNode.parentNode;
        row.remove();
    }
function editTask(btn)
    {
        let row=btn.parentNode.parentNode;
        let taskcell=row.cells[0];
        document.getElementById("enter").value=taskcell.innerHTML;
        row.remove();
    }
function doneTask(btn)
    {
        let row=btn.parentNode.parentNode;
        let taskcell=row.cells[0];
        if(taskcell.style.textDecoration=="line-through")
            {
                taskcell.style.textDecoration="none";
            }
        else
            {
                taskcell.style.textDecoration="line-through";
            }
    }