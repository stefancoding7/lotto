var playerName = "";
var noList = new Array();

var cordX = [[1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10]];
var cordY = [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5]];


for (let i = 0; i < 9; i++) {
    noList[i] = new Array();
    for (let u = 0; u < 10; u++) {
        noList[i][u] = i * 10 + u + 1;
    }
}



function rand(num) {
    return Math.floor(Math.random() * (num));
}

function idSplit(bId) {
    return document.querySelector(bId).id.split("-");
}


function addNames() {
    const form = document.getElementById("tform");
    const fInput = document.querySelector("input");
    playerName = fInput.value;
    document.querySelector("#printable").style.display = "block";

    if (playerName) {

        const tbody = document.getElementById("printable");

        const header = document.createElement("header");
        const h1 = document.createElement("h1");
        const main = document.createElement("main");
        const table = document.createElement("table");
        const tableBody = document.createElement("tbody");
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");


        let myName = document.createTextNode(playerName);
        h1.appendChild(myName);
        header.appendChild(h1);
        tbody.appendChild(header);
        tbody.appendChild(main);
        table.classList.add("table", "table-bordered");

        //Construct the whole printable tables with Names

        for (let i = 0; i < 9; i++) {
            tableRow.appendChild(tableCell.cloneNode(true))
        }

        for (let i = 0; i < 3; i++) {
            tableBody.appendChild(tableRow.cloneNode(true))
        }

        for (let i = 0; i < 6; i++) {
            table.appendChild(tableBody);
            main.appendChild(table.cloneNode(true));
        }

        // Add ID-s to existing cells

        let tCell = document.getElementsByTagName("td");

        for (let i = 0; i < 18; i++) {
            for (let u = 0; u < 9; u++) {
                tCell[u + i * 9].setAttribute("class", "cx-" + (u + 1) + ' ' + "cy-" + (i + 1));
                tCell[u + i * 9].setAttribute("id", "x" + (u + 1) + "-y" + (i + 1));

            }
        }

        // Random box choice
        let allY = new Array();
        let allX = new Array();
        

        let blockedY = new Array();
        let blockedX = new Array();
        let blockedId = new Array();
        

        for(let y = 0; y < 18; y++){
            allY.push('cy-' + (y + 1));
        }
        console.log(allY);

        for(let x = 0; x < 9; x++){
            allX.push('cx-'+ (x + 1));
        }
        
        for(let y = 0; y < 18; y++){
            let n = randomUniqueNum(18, 5);
            
            for(let w = 0; w < n.length; w++){
                allY.filter(function(e) { return e !== 'cy-'+n[w] })
            }
            
            let rowY = document.querySelector('.cy-'+(y + 1));
            console.log(rowY);

            
        }
        console.log(allY);
        // let randColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        // for(let i = 0; i < cordY.length; i++) {
        //     let a = randColumn.sort(function () { return .5 - Math.random() });
            
        //     for (let u = 0; u < 5; u++) {



        //         let box = document.querySelector("#x" + cordX[randColumn[u] - 1][0] + "-y" + cordY[i][0]);
                

        //         cordX[randColumn[u] - 1][0] + "-y" + cordY[i][0];
        //         box.innerHTML = noList[randColumn[u] - 1][rand(noList[randColumn[u] - 1].length)];
        //         box.innerHTML;
        //         (randColumn[u] - 1) +  box.innerHTML;
        //         noList[randColumn[u] - 1] = noList[randColumn[u] - 1].filter(function(val) { return val != box.innerHTML; });
        //     }
        // }
    }
}

function randomUniqueNum(range, outputCount) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}