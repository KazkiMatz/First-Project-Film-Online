$(document).ready(function () {
    $.ajax({
        url: "https://api.myjson.com/bins/12mgmd",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '<div class="item hover col-lg-2 col-md-2 col-sm-4 col-xs-12">';
                html += '        <div class="film-banner">';
                html += '            <a href="./film.html?id=' + data[i].id + '">';
                html += '                <img src="' + data[i].imageUrl + [i+1] +'.jpg" title="Phim' + data[i].name + '">';
                html += '                    </a>';
                html += '            <a href="./film.html?id=' + data[i].id + '">';
                html += '                <div class="hover-effect-1">';
                html += '                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>';
                html += '                    </div>';
                html += '                    </a>';
                html += '                    <div class="more-content">';
                html += '                       <div class="head">';
                html += '                           <a class="film-name">' + data[i].name + '</a>';
                html += '                       </div>';
                html += '                       <hr style="border-top: 1px solid black;">';
                html += '                       <div class="content">';
                html += '                        <p class="tomtat">' + data[i].tomtat +'</p>';
                html += '                        <span style="font-weight: bold;">';
                html += '                            Năm sản xuất:';
                html += '                        </span>';
                html += '                        <span class="year">' + data[i].year + '</span>';
                html += '                        <br>';
                html += '                        <span style="font-weight: bold;">';
                html += '                            Diễn viên:';
                html += '                        </span>';
                html += '                        <a class="actor n1">' + data[i].n1 + '</a>,';
                html += '                        <a class="actor n2">' + data[i].n2 + '</a>,';
                html += '                        <a class="actor n3">' + data[i].n3 + '</a>';
                html += '                        <br>';
                html += '                        <span style="font-weight: bold;">';
                html += '                            Đạo diễn:';
                html += '                        </span>';
                html += '                        <a class="director">' + data[i].director + '</a>';
                html += '                        <hr style="margin: 2px -10px; border-top: 1px solid black;">';
                html += '                        <span style="font-weight: bold;">';
                html += '                            Đánh giá IMDb:';
                html += '                        </span>';
                html += '                        <p class="IMDb">'+ data[i].imdb +'</p>';
                html += '                    </div>';
                html += '                </div>';
                html += '                </div>';
                html += '            <div class="description">';
                html += '            <a class="film-name" href="./film.html?id=' + data[i].id + '">'+ data[i].name +'</a>';
                html += '                </div>';
                html += '                    </div>';
            }
            $('.new-list').html(html);
        },
        error: function (errror) {

        }
    })
})