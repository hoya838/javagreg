let num = 0;
        function show(){
            if (num==0) {
                document.getElementById("image").src = "img/cover4.png";
                num = 1;
            }
            else if(num==1) {
                document.getElementById("image").src = "img/cover1.png";
                num = 2;
            }
            else if(num==2) {
                document.getElementById("image").src = "img/cover2.png";
                num = 3;
            }
            else{
                document.getElementById("image").src = "img/cover3.png";
                num = 0;
            }
            setTimeout('show()',2000);
        }
        show();