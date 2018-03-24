// local web storage and ajax favorite film //

var favfilm = [];
$(document).ready(function () {
    favfilm = JSON.parse(window.localStorage.getItem("phimyeuthich"));
    var html = "";
    if (favfilm && favfilm.length > 0) {
        for (var i = 0; i < favfilm.length; i++) {
            html += '    <div class="box">';
            html += '    <div class="film-content">';
            html += '        <div class="box-content-info">';
            html += '            <div class="fc fl-left"><img class="poster" src="./media/' + favfilm[i].code + '.jpg" /></div>';
            html += '            <div class="fc fl-right"><div class="content-info">';
            html += '                <a href="./film.html?id=' + favfilm[i].id + '"><h1 class="title">' + favfilm[i].title + '</h1></a>';
            html += '                <h2 class="a-title">' + favfilm[i].atitle + '</h2>';
            html += '                <div class="info">';
            html += '                    <div>';
            html += '                        <p class="headding" style="padding: 10px 0px 0px; margin: 0px;">Nội dung phim</p>';
            html += '                        <p class="tomtat" style="padding-top: 0px; margin-top: 0px;">' + favfilm[i].tomtat + '</p>';
            html += '                    </div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Diễn viên</p>';
            html += '                            <p>';
            html += '                       <a class="actor n1">' + favfilm[i].n1 + '</a>,';
            html += '						<a class="actor n2">' + favfilm[i].n2 + '</a>,';
            html += '						<a class="actor n3">' + favfilm[i].n3 + '</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Đánh giá</p>';
            html += '                            <p>6.40 (4 lượt)</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="clearfix"></div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Thể loại</p>';
            html += '                            <p>';
            html += '                                <a>Phim Khoa Học Viễn Tưởng</a>,';
            html += '						<a>Phim Hoạt Hình</a>,';
            html += '						<a>Phim Hành Động Phiêu Lưu</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Năm sản xuất</p>';
            html += '                            <p>2017</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="clearfix"></div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Đạo diễn</p>';
            html += '                            <p>';
            html += '                                <a class="director">' + favfilm[i].director + '</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Quốc gia</p>';
            html += '                            <p class="nation">' + favfilm[i].nation + '</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="remove">';
            html += '                        <a class="rmfav" onclick="rmfavfilm(' + i + ')">';
            html += '                            <span class="rmfav-button">-</span>Xóa Khỏi Yêu Thích</a>';
            html += '                    </div>';
            html += '                </div>';
            html += '            </div>';
            html += '        </div>';
            html += '            <div class="clearfix"></div></div>';
            html += '    </div>';
            html += '    </div>';
        }

    } else {
        html += '<h1 class="title" style="padding:40px;">Danh sách trống</h1>';
    }
    $('.favfilm').html(html);
});

// local web storage and remove favorite film // -->

function rmfavfilm(index) {
    favfilm.splice(index, 1);
    var html = "";
    if (favfilm && favfilm.length > 0) {
        for (var i = 0; i < favfilm.length; i++) {
            html += '    <div class="box">';
            html += '    <div class="film-content">';
            html += '        <div class="box-content-info">';
            html += '            <div class="fc fl-left"><img class="poster" src="./media/' + favfilm[i].code + '.jpg" /></div>';
            html += '            <div class="fc fl-right"><div class="content-info">';
            html += '                <h1 class="title">' + favfilm[i].title + '</h1>';
            html += '                <h2 class="a-title">' + favfilm[i].atitle + '</h2>';
            html += '                <div class="info">';
            html += '                    <div>';
            html += '                        <p class="headding" style="padding: 10px 0px 0px; margin: 0px;">Nội dung phim</p>';
            html += '                        <p class="tomtat" style="padding-top: 0px; margin-top: 0px;">' + favfilm[i].tomtat + '</p>';
            html += '                    </div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Diễn viên</p>';
            html += '                            <p>';
            html += '                       <a class="actor n1">' + favfilm[i].n1 + '</a>,';
            html += '						<a class="actor n2">' + favfilm[i].n2 + '</a>,';
            html += '						<a class="actor n3">' + favfilm[i].n3 + '</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Đánh giá</p>';
            html += '                            <p>6.40 (4 lượt)</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="clearfix"></div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Thể loại</p>';
            html += '                            <p>';
            html += '                                <a>Phim Khoa Học Viễn Tưởng</a>,';
            html += '						<a>Phim Hoạt Hình</a>,';
            html += '						<a>Phim Hành Động Phiêu Lưu</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Năm sản xuất</p>';
            html += '                            <p>2017</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="clearfix"></div>';
            html += '                    <div class="mf">';
            html += '                        <div class="more-info fl-left">';
            html += '                            <p class="headding">Đạo diễn</p>';
            html += '                            <p>';
            html += '                                <a class="director">' + favfilm[i].director + '</a>';
            html += '                            </p>';
            html += '                        </div>';
            html += '                        <div class="more-info fl-right">';
            html += '                            <p class="headding">Quốc gia</p>';
            html += '                            <p class="nation">' + favfilm[i].nation + '</p>';
            html += '                        </div>';
            html += '                    </div>';
            html += '                    <div class="remove">';
            html += '                        <a class="rmfav" onclick="rmfavfilm(' + i + ')">';
            html += '                            <span class="rmfav-button">-</span>Xóa Khỏi Yêu Thích</a>';
            html += '                    </div>';
            html += '                </div>';
            html += '            </div>';
            html += '        </div>';
            html += '            <div class="clearfix"></div></div>';
            html += '    </div>';
            html += '    </div>';
        }
    } else {
        html += '<h1 class="title" style="padding:40px;">Danh sách trống</h1>';
    }
    window.localStorage.setItem("phimyeuthich", JSON.stringify(favfilm));
    $('.favfilm').html(html);
};

