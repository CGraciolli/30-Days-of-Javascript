const bands_list = document.querySelector("#bands")

const bands = ["Electric Light Orchestra", "The Replacements", "The Velvet Underground",
                "Big Star", "Led Zeppelin", "ABBA", "Bee Gees", "The Doors", "The Band", "Tim Buckley"];

function removeArticles(s){
    return s.replace(/^(a |the |an )/i, '').trim()
}

const bands_sorted = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1)


bands_list.innerHTML = bands_sorted.map(band => `<li>${band}</li>`).join("")