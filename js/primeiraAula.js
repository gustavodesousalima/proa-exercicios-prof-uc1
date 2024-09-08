function teste (x, y){
    let resullt = x + y
    console.log(resullt)
}

teste(1,3)


function removerImagem(){
    let img = document.getElementById("img3")

    img.style.visibility = "hidden"
}

function AddImagem(){
    let img = document.getElementById("img3")

    img.style.visibility = "visible"
}

function trocarFundo(){
    let main = document.getElementsByTagName("main")[0]

    if(main.style.backgroundColor == "black"){

        main.style.backgroundColor = "white"
    }else{
        main.style.backgroundColor = "black"
    }

}


function teste(){
    let img3 = document.getElementById("img3"
    )
}


function show_camada1(){
    document.getElementById("camada1").style.visibility = "visible"
    document.getElementById("camada2").style.visibility = "hidden"
    document.getElementById("camada3").style.visibility = "hidden"
}

function show_camada2(){
    document.getElementById("camada2").style.visibility = "visible"
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada3").style.visibility = "hidden"
}

function show_camada3(){
    document.getElementById("camada3").style.visibility = "visible"
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada2").style.visibility = "hidden"
}

function hidden_camadas(){
    document.getElementById("camada3").style.visibility = "hidden"
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada2").style.visibility = "hidden"
}