function load_news() {
    setInterval(getNews(), 10000);
}

function editString(s, n) {
    s = s.split(' - ')[0];
    if (s.length > n) {
        s = s.substring(0, n);
        s = s + "...";
    }
    return s;
}

function getNews() {
    const rss = "https://news.google.com/rss?hl=it&gl=IT&ceid=IT:it";
    $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + rss,
        dataType: 'jsonp',
        success: function(result) {
            var element = document.getElementById('first');
            docs = [];
            for (var i = 0; i < result['items'].length; i++) {
                var news = result['items'][i]['title'];
                if (i == 0) {
                    const div = document.createElement('div');
                    div.className = 'carousel-item text-center active p-4';
                    const p = document.createElement('p');
                    p.innerHTML = editString(news, 80);
                    div.appendChild(p);
                    element.appendChild(div)
                } else {
                    const div = document.createElement('div');
                    div.className = 'carousel-item text-center p-4';
                    const p = document.createElement('p');
                    p.innerHTML = editString(news, 80);
                    div.appendChild(p);
                    element.appendChild(div)
                }

                console.log(news);
            }
        }
    });
}