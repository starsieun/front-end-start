
    var board = document.getElementById("board");

    for(var i=0; i<4; i++)
    { 
        if(i%2==0)
        {

          for(var j=0; j<4; j++)
          {
            if(j%2==0)
            {
              board.innerHTML += '<span class="black" onmouseout="ChangeColor1(this)" onclick="ChangeColor3(this)" ></span>';
            }
            else if(j%2==1)
            {
              board.innerHTML += '<span class="white" onmouseout="ChangeColor2(this)" onclick="ChangeColor3(this)"></span>';
            }
          }
         board.innerHTML += '<br>';
        }
        else if(i%2==1)
        {

          for(var j=0; j<4; j++)
          {
            if(j%2==0)
            {
              board.innerHTML += '<span class="white" onmouseout="ChangeColor2(this)" onclick="ChangeColor3(this)"></span>';
            }
            else if(j%2==1)
            {
              board.innerHTML += '<span class="black" onmouseout="ChangeColor1(this)" onclick="ChangeColor3(this)" ></span>';
            }
          }
          board.innerHTML += '<br>';
        }
    }

  function ChangeColor1(obj)
    {
          obj.style.background = 'black';
    }

  function ChangeColor2(obj)
    {
        obj.style.background = 'white';
    }

  function ChangeColor3(obj)
    {
        obj.style.background = 'red';
    }
