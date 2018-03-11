
        $(document).ready(function () {  
            
            var drawCanvas = $("#drawCanvas")[0];  
            var context = drawCanvas.getContext("2d");  
            var width = $("#drawCanvas").width();  
            var height = $("#drawCanvas").height(); 
            var name , actname;
            name = prompt("Enter your name ");
            actname=name;
            name = name + " is playing the game " ;

   
            var cell_width = 10;  
            var defaultRun;  
            var snake_food;  
            var userscore,max=0;  
            var mySnakeArray;  
             
           function start() {  
                defaultRun = "right";  
                createSnake();  
                createFood();  
                userscore = 0;  
                 
                if (typeof game_loop != "undefined") clearInterval(game_loop);  
                game_loop = setInterval(paintSnake, 60);  
            }  
              function cheat(x1,y1) {  
                defaultRun = "right";  
                createSnake1(x1,y1);
                 
                 
            }  
            start();  
   
           function createSnake() {  
                var snakeSize = 6; 
                mySnakeArray = [];  
                for (var m = 0; m<snakeSize-1;m++) {  
                    mySnakeArray.push({ x: 0, y: 50 });  

                }  

            }  function createSnake1() {  
                var snakeSize = 125;  
                userscore = 125;

                mySnakeArray = [];  
                for (var m = 0; m<snakeSize-1;m++) {  
                    mySnakeArray.push({ x: 0 , y: 0 }); 

                }  
                
            }  
   
            function createFood() {  
                snake_food = {  
                    x: Math.round(Math.random() * (width - cell_width) / cell_width),  
                    y: Math.round(Math.random() * (height - cell_width) / cell_width),  
                };  
             }  
             function createFood1() {  
                snake_food = {  
                    x: pop_x ,
                    y: pop_y ,
                    };
                    }   
            function paintSnake() {  
                context.fillStyle = "#fff";  
                context.fillRect(0, 0, width, height);  
                context.strokeStyle = "red";  
                context.strokeRect(0, 0, width, height);  
   
                var pop_x = mySnakeArray[0].x;  
                var pop_y = mySnakeArray[0].y;  
   
                if (defaultRun == "right") pop_x++;   
                else if (defaultRun == "left") pop_x--;  
                else if (defaultRun == "down") pop_y++;  
                else if (defaultRun == "up") pop_y--;  
                 
   
                 if (pop_x == -1 || pop_x == width / cell_width || pop_y == -1 || pop_y == height / cell_width || check_collision(pop_x, pop_y, mySnakeArray)) { 
                    if ( userscore > max )
                        name = prompt("Enter name as you have a new high score "); 
                     start();  
                     alert( actname + " Just died :(" );

                     

                     return;  
                }  
   
                 if (pop_x == snake_food.x && pop_y == snake_food.y) {  
                    var snake_tail = { x: pop_x, y: pop_y };  
                    userscore++;  
                    if(max < userscore )
                        max = userscore ;
                     createFood();  
                }  
                else {  
                    var snake_tail = mySnakeArray.pop();  
                    snake_tail.x = pop_x; snake_tail.y = pop_y;   
                }  
   
                mySnakeArray.unshift(snake_tail);   
   
                for (var i = 0; i < mySnakeArray.length; i++) {  
                    var k = mySnakeArray[i];  
                  
                    paintCell(k.x, k.y);  
                }  
   
                 
                paintCell(snake_food.x, snake_food.y);  
                 
                var score_text = "Score: " + userscore; 
                context.font = 'bold 20pt Calibri'  
                context.fillText(score_text, width-200, 30); 
                if(max<userscore) { max = userscore; }
                var max_score_text = "Max: " + max; 
                context.font = 'bold 20pt Calibri' 
                context.fillText(max_score_text, width-400, 30);  

                context.fillText(name, width -800 , 30 ) 
            }  
   
           function paintCell(x, y) {  
                context.fillStyle = "limegreen";  
                context.fillRect(x * cell_width, y * cell_width, cell_width, cell_width);  
                context.strokeStyle = "black";  
                context.strokeRect(x * cell_width, y * cell_width, cell_width, cell_width);  
            }  
   
            function check_collision(x, y, array) {  
                for (var i = 0; i < array.length; i++) {  
                    if (array[i].x == x && array[i].y == y)  
                        return true;  
                }  
                return false;  
            }  
   
          $(document).keydown(function (e) {  
                var keyInput = e.which;
                 
                if (keyInput == "40" && defaultRun != "up") {		 defaultRun = "down";}
                if (keyInput == "83" && defaultRun != "up") defaultRun = "down";  
                else if (keyInput == "39" && defaultRun != "left") defaultRun = "right";  
                else if (keyInput == "38" && defaultRun != "down") defaultRun = "up";  
                else if (keyInput == "65" && defaultRun != "right") defaultRun = "left";  
                else if (keyInput == "68" && defaultRun != "left") defaultRun = "right";  
                else if (keyInput == "87" && defaultRun != "down") defaultRun = "up";  
                else if (keyInput == "37" && defaultRun != "right") defaultRun = "left";  
                else if (keyInput == "46")  start();
                else if (keyInput == "45") createSnake1();
                else if (keyInput == "90")	{ userscore++;  cheat(pop_x,pop_y);}
                e.preventDefault();
            })  
        })  