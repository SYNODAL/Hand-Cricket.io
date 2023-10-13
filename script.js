let audio1 = new Audio('Audio/click.mp3');
let audio2 = new Audio('Audio/bgmi.wav');
let audio3 = new Audio('Audio/bgm.wav');
let audio4 = new Audio('Audio/coin toss.wav');
let audio5 = new Audio('Audio/8bit riser.wav');
let ic = document.getElementById("mut");
let help = document.getElementById("rls");
let help2 = document.getElementById("frz");
let help3 = document.getElementById("ovr");
let help4 = document.getElementById("ts");
let help5 = document.getElementById("hds");
let help6 = document.getElementById("tls");
let help7 = document.getElementById("rts");
let help8 = document.getElementById("ing");
let help9 = document.getElementById("cntr");
let help10 = document.getElementById("plrwnd")
let help11 = document.getElementById("comp")
let help12 = document.getElementById("babt");
let ims1 = document.getElementById("pim");
let ims2 = document.getElementById("cim");
let ims3 = document.getElementById("ra");
let ims4 = document.getElementById("rcty");
let ims5 = document.getElementById("ht");
let ims6 = document.getElementById("ft");
let ims7 = document.getElementById("t");
let abs1 = 0,abs2 = 0,abs3 = 0,button,vcheck = 0;
button = document.querySelector(".bn");
let balls,x,winner,choice,inni,wicket1 = 0,wicket2 = 0,b,trnp,trnc,run1 = 0,run2 = 0,val,check,c,isw = 0;
audio2.volume = 0.3;
audio3.volume = 0.3;
let abtc = 0;
function about(){
    audio1.play();
    if(abtc === 0){
        help12.style.setProperty('--scale_abt', '1');
        abtc = 1;
    }
    else{
        help12.style.setProperty('--scale_abt', '0');
        abtc = 0;
    }

}
function sound(){
    audio2.play();
    audio3.loop = true;
    setTimeout(function (){audio3.play()}, 21000);
}
function reload(){
    audio5.play();
   setTimeout(function (){window.location.reload()}, 2000) ;
}
function mute(){
    if(vcheck===0){
        audio2.muted = true;
        audio3.muted = true;
        vcheck = 1;
        ic.src = "./Image/mute.png";
    }
    else if(vcheck===1){
        audio2.muted = false;
        audio3.muted = false;
        vcheck = 0;
        ic.src = "./Image/volume.png";
    }

}
function overget(over){
    sound();
    audio1.play();
    balls = 6*over;
    help3.style.setProperty('--scale_Ovr', '0');
    help4.style.setProperty('--scale_toss', '1');
    b = balls;
    c = balls;
}
function change(){
    audio1.play();
    let rs = getComputedStyle(help);
    if (rs.getPropertyValue('--scale_rls')==='0')
    {
        help.style.setProperty('--scale_rls','1');
        help2.style.setProperty('--scale_frz','1');
    }

    else
    {
        help.style.setProperty('--scale_rls','0');
        help2.style.setProperty('--scale_frz','0');
    }

}
let absolute, ultcount;
let result,rr = 0,bc1 = 0,bc2 = 0;
function tossfunc(choice) {
    audio1.play();
    audio4.play();
    let dumb = parseInt(choice);
    let tossval = Math.floor(Math.random()*2);
    help5.style.setProperty('pointer-events','none');
    help6.style.setProperty('pointer-events','none');
    if (tossval === 1){
        document.getElementById("ml").style.animation = "motion-up 2s";
        document.getElementById("coin").style.animation = "flip-heads 2.5s forwards";
    }
    else{
        document.getElementById("ml").style.animation = "motion-up 2s";
        document.getElementById("coin").style.animation = "flip-tails 2.5s forwards";
    }
    if(dumb === tossval){setTimeout(function (){document.getElementById("hds").innerText = "YOU";
        document.getElementById("tls").innerText = "WIN!";},3000);
        result = 1;
        setTimeout(function (){decide()}, 4000) ;
    }
    else{
        setTimeout(function (){document.getElementById("hds").innerText = "YOU";
            document.getElementById("tls").innerText = "LOSE!";},3000);
        result = 0;
        setTimeout(function (){decide()}, 4000) ;
        }
}
let counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0,safety = 0,counter6 = 0,counter7 = 0;
function decide(){
    if(result === 1){
        help4.style.setProperty('--scale_toss', '0');
        help8.style.setProperty('--scale_ing', '1');
        winner = 1;
    }
    else{
        choice = Math.floor(Math.random()*2);
        winner = 0;
        if(choice === 1)
        {
            document.getElementById("rts").innerText = "Computer has chosen to bat.";
            inni = 1;
        }
        else
        {
            document.getElementById("rts").innerText = "Computer has chosen to bowl.";
            inni = 0;

        }
        if(inni === 1 && winner === 1 || inni === 0 && winner === 0){
            check = 0;
        }
        else{
            check = 1;
        }
        help7.style.setProperty('--scale_tosrlt', '1');
        setTimeout(function (){help9.style.setProperty('--scale_play', '1')}, 1750);
        setTimeout(function (){ims4.style.setProperty('--rowop', '1')
            ims5.style.setProperty('--htop', '0.95')
            ims6.style.setProperty('--ftop', '0.95')
            ims7.style.setProperty('--tarop', '1');}, 2000);
    }
}
function el(){
    document.getElementById("00").style.setProperty('pointer-events', 'none');
    document.getElementById("11").style.setProperty('pointer-events', 'none');
    document.getElementById("22").style.setProperty('pointer-events', 'none');
    document.getElementById("33").style.setProperty('pointer-events', 'none');
    document.getElementById("44").style.setProperty('pointer-events', 'none');
    document.getElementById("55").style.setProperty('pointer-events', 'none');
    document.getElementById("66").style.setProperty('pointer-events', 'none');
    setTimeout(function (){
        document.getElementById("00").style.setProperty('pointer-events', 'all');
        document.getElementById("11").style.setProperty('pointer-events', 'all');
        document.getElementById("22").style.setProperty('pointer-events', 'all');
        document.getElementById("33").style.setProperty('pointer-events', 'all');
        document.getElementById("44").style.setProperty('pointer-events', 'all');
        document.getElementById("55").style.setProperty('pointer-events', 'all');
        document.getElementById("66").style.setProperty('pointer-events', 'all');
    }, 4000)
    }
function press(unga){
    audio1.play();
    inni = unga;
    if(inni === 1 && winner === 1 || inni === 0 && winner === 0){
        check = 0;
    }
    else{
        check = 1;
    }
    help9.style.setProperty('--scale_play', '1');
    setTimeout(function (){ims4.style.setProperty('--rowop', '1')
        ims5.style.setProperty('--htop', '0.95')
        ims6.style.setProperty('--ftop', '0.95')
        ims7.style.setProperty('--tarop', '1');}, 250);
}
document.getElementById("00").addEventListener("click", function (){
    audio1.play();
    val = 0;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("11").addEventListener("click", function (){
    audio1.play();
    val = 1;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 1.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("22").addEventListener("click", function (){
    audio1.play();
    val = 2;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 2.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("33").addEventListener("click", function (){
    audio1.play();
    val = 3;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 3.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("44").addEventListener("click", function (){
    audio1.play();
    val = 4;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 4.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("55").addEventListener("click", function (){
    audio1.play();
    val = 5;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 5.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
document.getElementById("66").addEventListener("click", function (){
    audio1.play();
    val = 6;
    if(check === 0 && isw === 0){
        playerbat();
    }
    else if(check === 1 && isw === 0){
        playerbowl();
    }
    else if(check === 0 && isw === 1){
        playerbowl();
    }
    else if(check === 1 && isw === 1){
        playerbat();
    }
    help10.style.animation = "movement-player 1s forwards";
    help11.style.animation = "movement-computer 1s forwards";
    setTimeout(function (){ims1.src = "./Image/player 6.png";
        ims2.src = "./Image/computer "+trnc+".png";}, 900);
    setTimeout(function (){ims1.src = "./Image/player 0.png";
        ims2.src = "./Image/computer 0.png";}, 1750);
    setTimeout(function (){ help10.style.animation = "none";
        help11.style.animation = "none";
        ims3.style.animation = "fade-in 3s forwards";
        setTimeout(function (){ims3.style.animation = "none"}, 3000)
        setTimeout(function (){document.getElementById(""+ultcount).innerHTML = absolute;
            document.getElementById("run").innerText = abs1 + "/";
            document.getElementById("wckt").innerText = abs2;
            document.getElementById("rr").innerText = rr;
            }, 3000)}, 1000);
})
/*document.addEventListener("keydown",function (event){
    document.getElementById(""+event.key+""+event.key).click();
})*/
let history = 0, chkhist = 0;
function playerbat() {
    if(counter1 === 6){
        counter1 = 0;
        document.getElementById("his").innerText = "("+history+"/"+chkhist+")";
        history = 0;
        chkhist = 0;
        setTimeout(function (){for(let i=1;i<=6;i++)
            document.getElementById(""+i).innerHTML = "-";}, 3000);

    }
    counter1++;
    ultcount = counter1;
    counter6 = counter1;
    bc1++;
    trnp = val;
    trnc = Math.floor(Math.random() * 7);
    console.log("Computer's hand : " + trnc);
    b--;
    if (trnp === trnc) {
        wicket1++;
        chkhist++;
        document.getElementById("rns").innerHTML = "Wicket";
        abs1 = run1;
        abs2 = wicket1;
        absolute = "W";
    }
    if(wicket1 === 7){
        if(isw === 1){
            document.getElementById("ftt").innerText = "Computer won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
        chkhist = 0;
        history = 0;
        setTimeout(function (){for(let i=1;i<=6;i++)
            document.getElementById(""+i).innerHTML = "-";
            document.getElementById("his").innerText = "In last over";},5000);
        document.getElementById("htt").innerText = "Innings over.... Switching Sides";
        setTimeout(function (){document.getElementById("ht").style.setProperty('--scale_ht', '1');},4000);
        setTimeout(function (){
            document.getElementById("ht").style.setProperty('--scale_ht', '0')}, 6000);
        if(isw === 0){
            document.getElementById("sb").style.left = "var(--left_computer)";
            document.getElementById("rb").style.left = "var(--left_player)";
            document.getElementById("trgt").innerText = "Target : "+(run1+1);
            document.getElementById("t").style.setProperty('--scale_target', '1');
        }
        isw = 1;
    }
    if(trnp != trnc){
        history = history + trnp;
        document.getElementById("rns").innerHTML = "" + trnp + " RUNS!";
        absolute = ""+trnp;
        run1 = run1 + trnp;
        abs1 = run1;
    }
    if(counter1 === 6){
        counter2++;
        counter6 = 0;
    }
    rr = run1/(bc1/6);
    rr = rr.toFixed(2);
    if (check === 1) {
        if (run1 > run2) {
            document.getElementById("ftt").innerText = "You won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
    }
    if(b === 0){
        if(isw === 0){
            chkhist = 0;
            history = 0;
            setTimeout(function (){for(let i=1;i<=6;i++)
                document.getElementById(""+i).innerHTML = "-";
                document.getElementById("his").innerText = "In last over";},5000);
            document.getElementById("htt").innerText = "Innings over.... Switching Sides";
            setTimeout(function (){document.getElementById("ht").style.setProperty('--scale_ht', '1');},4000);
            setTimeout(function (){
                document.getElementById("ht").style.setProperty('--scale_ht', '0')}, 6000);
            document.getElementById("sb").style.left = "var(--left_computer)";
            document.getElementById("rb").style.left = "var(--left_player)";
            document.getElementById("trgt").innerText = "Target : "+(run1+1);
            document.getElementById("t").style.setProperty('--scale_target', '1');
        }
        isw = 1;
        if(check === 1){
            document.getElementById("ftt").innerText = "Computer won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
    }
    abs1 = run1;
    abs2 = wicket1;
    document.getElementById("ovrbls").innerHTML = counter2 + "(" + counter6 + ")";
    abs3 = rr;
    if(isw === 1 && safety === 0){
        document.getElementById("run").innerText = "RUNS";
        document.getElementById("wckt").innerText = "/WICKETS";
        document.getElementById("ovrbls").innerText = "OVERS(BALLS)";
        document.getElementById("rr").innerText = "RUNRATE";
        safety = 1;
    }
}
function playerbowl() {
    if(counter3 === 6){
        counter3 = 0;
        document.getElementById("his").innerText = "("+history+"/"+chkhist+")";
        history = 0;
        chkhist = 0;
        setTimeout(function (){for(let i=1;i<=6;i++)
            document.getElementById(""+i).innerHTML = "-";}, 3000);
    }
    bc2++;
    counter3++;
    counter7 = counter3;
    ultcount = counter3;
    trnp = val;
    trnc = Math.floor(Math.random() * 7);
    console.log("Computer's hand : " + trnc);
    c--;
    if (trnp === trnc) {
        chkhist++;
        wicket2++;
        document.getElementById("rns").innerHTML = "Wicket";
        abs1 = run2;
        abs2 = wicket2;
        absolute = "W";
    }
    if(wicket2 === 7){
        if(isw === 1){
            document.getElementById("ftt").innerText = "You won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
        chkhist = 0;
        history = 0;
        setTimeout(function (){for(let i=1;i<=6;i++)
            document.getElementById(""+i).innerHTML = "-";
            document.getElementById("his").innerText = "In last over";},5000);
        document.getElementById("htt").innerText = "Innings over.... Switching Sides";
        setTimeout(function (){document.getElementById("ht").style.setProperty('--scale_ht', '1');},4000);
        setTimeout(function (){
            document.getElementById("ht").style.setProperty('--scale_ht', '0')}, 6000);
        if(isw === 0){
            document.getElementById("sb").style.left = "var(--left_computer)";
            document.getElementById("rb").style.left = "var(--left_player)";
            document.getElementById("trgt").innerText = "Target : "+(run2+1);
            document.getElementById("t").style.setProperty('--scale_target', '1');
        }

        isw = 1;
    }
    if(trnp != trnc){
        history = history + trnc;
        document.getElementById("rns").innerHTML = "" + trnc + " RUNS!";
        absolute = ""+trnc;
        run2 = run2 + trnc;
        abs1 = run2;
    }
    if(counter3 === 6){
        counter4++;
        counter7 = 0;
    }
    rr = run2/(bc2/6);
    rr = rr.toFixed(2);
    if (check === 0) {
        if (run1 < run2) {
            document.getElementById("ftt").innerText = "Computer won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
    }
    if(c === 0){
        if(isw === 0){
            chkhist = 0;
            history = 0;
            setTimeout(function (){for(let i=1;i<=6;i++)
                document.getElementById(""+i).innerHTML = "-";
                document.getElementById("his").innerText = "In last over";},5000);
            document.getElementById("htt").innerText = "Innings over.... Switching Sides";
            setTimeout(function (){document.getElementById("ht").style.setProperty('--scale_ht', '1');},4000);
            setTimeout(function (){
                document.getElementById("ht").style.setProperty('--scale_ht', '0')}, 6000);
            document.getElementById("trgt").innerText = "Target : "+(run2+1);
            document.getElementById("t").style.setProperty('--scale_target', '1');
            document.getElementById("sb").style.left = "var(--left_computer)";
            document.getElementById("rb").style.left = "var(--left_player)";
        }
        isw = 1;
        if(check === 0){
            document.getElementById("ftt").innerText = "You won !!!!!";
            document.getElementById("ft").style.setProperty('--scale_ft', '1');
        }
    }
    abs1 = run2;
    abs2 = wicket2;
    document.getElementById("ovrbls").innerHTML = counter4 + "(" + counter7 + ")";
    abs3 = rr;
    if(isw === 1 && safety === 0){
        document.getElementById("run").innerText = "RUNS";
        document.getElementById("wckt").innerText = "/WICKETS";
        document.getElementById("ovrbls").innerText = "OVERS(BALLS)";
        document.getElementById("rr").innerText = "RUNRATE";
        safety = 1;
    }
}

