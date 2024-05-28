// document.addEventListener("DOMContentLoaded", function() {
//     var charToImage = {
//         'A': 'aa.jpg',
//         'B': 'bb.jpg',
//         'C': 'cc.jpg',
//         'D': 'dd.jpg',
//         'E': 'ee.jpg',
//         'F': 'ff.jpg',
//         'G': 'gg.jpg',
//         'H': 'he.jpg',
//         'I': 'ice.jpg',
//         'J': 'ja.jpg',
//         'K': 'ke.jpg',
//         'L': 'll.jpg',
//         'M': 'mm.jpg',
//         'N': 'nn.jpg',
//         'O': 'oo.jpg',
//         'P': 'pp.jpg',
//         'Q': 'qq.jpg',
//         'R': 'rr.jpg',
//         'S': 'ss.jpg',
//         'T': 'tt.jpg',
//         'U': 'uu.jpg',
//         'V': 'vv.jpg',
//         'W': 'ww.jpg',
//         'X': 'xx.jpg',
//         'Y': 'yy.jpg',
//         'Z': 'zz.jpg'
//     };

//     // Event delegation for performance
//     document.getElementById("characterDisplay").addEventListener("click", function(event) {
//         var target = event.target;
//         if (target.classList.contains("characterButton")) {
//             var char = target.dataset.char;
//             var characterImage = document.querySelector(".character-image");
//             if (characterImage) {
//                 characterImage.remove();
//             }
//             var imgSrc = charToImage[char];
//             target.parentNode.insertAdjacentHTML("afterend", "<img src='" + imgSrc + "' class='character-image'>");
//         }
//     });

//     document.getElementById("generateButton").addEventListener("click", function() {
//         var numberInput = parseInt(document.getElementById("numberInput").value);
//         if (isNaN(numberInput) || numberInput < 1 || numberInput > 26) {
//             alert("Please enter a number between 1 and 26.");
//             return;
//         }

//         var randomChars = "";
//         var generatedChars = [];

//         while (generatedChars.length < numberInput) {
//             var randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
//             if (!generatedChars.includes(randomChar)) {
//                 generatedChars.push(randomChar);
//                 randomChars += "<button class='characterButton' data-char='" + randomChar + "'>" + randomChar + "</button>";
//             }
//         }

//         document.getElementById("characterDisplay").innerHTML = randomChars;
//     });
// });


$(document).ready(function() {
    var charToImage = {
        'A': 'aa.jpg',
        'B': 'bb.jpg',
        'C': 'cc.jpg',
        'D': 'dd.jpg',
        'E': 'ee.jpg',
        'F': 'ff.jpg',
        'G': 'gg.jpg',
        'H': 'he.jpg',
        'I': 'ice.jpg',
        'J': 'ja.jpg',
        'K': 'ke.jpg',
        'L': 'll.jpg',
        'M': 'mm.jpg',
        'N': 'nn.jpg',
        'O': 'oo.jpg',
        'P': 'pp.jpg',
        'Q': 'qq.jpg',
        'R': 'rr.jpg',
        'S': 'ss.jpg',
        'T': 'tt.jpg',
        'U': 'uu.jpg',
        'V': 'vv.jpg',
        'W': 'ww.jpg',
        'X': 'xx.jpg',
        'Y': 'yy.jpg',
        'Z': 'zz.jpg'
    };

    var $characterDisplay = $("#characterDisplay");

    $("#generateButton").click(function() {
        var numberInput = parseInt($("#numberInput").val());
        if (isNaN(numberInput) || numberInput < 1 || numberInput > 26) {
            alert("Please enter a number between 1 and 26.");
            return;
        }

        var randomChars = "";
        var generatedChars = [];

        while (generatedChars.length < numberInput) {
            var randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            if (!generatedChars.includes(randomChar)) {
                generatedChars.push(randomChar);
                randomChars += "<button class='characterButton' data-char='" + randomChar + "'>" + randomChar + "</button>";
            }
        }

        $characterDisplay.html(randomChars);
    });

    $("#charInput").on("input", function() {
        var charInput = $(this).val().toUpperCase();
        if (charInput.length !== 1 || !/[A-Z]/.test(charInput)) {
            alert("Please enter a single letter character.");
            return;
        }

        var $button = $("<button>")
            .addClass("characterButton")
            .data("char", charInput)
            .text(charInput);
        $characterDisplay.html($button);
    });

    $characterDisplay.on("click", ".characterButton", function() {
        var char = $(this).data("char");
        $(".character-image").remove();
        var imgSrc = charToImage[char];
        $(this).parent().append("<img src='" + imgSrc + "' class='character-image' style='display:none;'>");
        $(".character-image").fadeIn(500);
    });
});