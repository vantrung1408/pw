var jsonIFData = [{"Time": "Ngày sinh", 	"Info": "14/08/1995"}, 
 				  {"Time": "Địa chỉ", 		"Info": "Yên Viên, Gia Lâm - Hà Nội"}, 
 				  {"Time": "Số điện thoại", "Info": "0962535551"}, 
 				  {"Time": "Email", 		"Info": "<a href='mailto:vantrung1408@gmail.com'>vantrung1408@gmail.com</a>"}, 
 				  {"Time": "Facebook", 		"Info": "<a href='https://fb.com/vantrung1408' target='_blank'>fb.com/vantrung1408</a>"}, 
 				  {"Time": "Skype", 		"Info": "<a href='skype:vantrung1408'>vantrung1408</a>"}, 
 				  {"Time": "Blogspot", 		"Info": "<a href='http://vantrung1408.blogspot.com' target='_blank'>vantrung1408.blogspot.com</a>"}];

var jsonTLData = [{"Time": "09/2010", 			"Info": "THPT Yên Viên"}, 
				 {"Time": "11/2011", 			"Info": "Viết ứng dụng đầu tay (PES2012 Menu Change Color)"},
				 {"Time": "11/2012", 			"Info": "Viết ứng dụng PES2013 Mega Selector (~40,000 lượt tải)"},
				 {"Time": "2011 ~ 2013", 		"Info": "~30 Ứng dụng WinForm (vantrung1408.blogspot.com)"},
				 {"Time": "08/2013", 			"Info": "Khoa Công Nghệ Thông Tin - Học Viện Nông Nghiệp Việt Nam"},
				 {"Time": "09/2013 ~ 02/2016", 	"Info": "Parttimer tại Lotteria Savico"},
				 {"Time": "08/2015", 			"Info": "Dự án Phần mềm Tổng Phụ Trách dành cho Giáo Viên Tiểu Học và Trung học cơ sở"},
				 {"Time": "11/2015", 			"Info": "Tham gia nhóm phát triển phần mềm của Thầy Ngô Công Thắng"},
				 {"Time": "12/2015", 			"Info": "Thiết kế Logo cho Công Ty TNHH Sản Xuất và Thương Mại Lộc Phát"},
				 {"Time": "01/2016", 			"Info": "Dự án KinhBacTech.vn Công Ty Cổ Phần Phát Triển Công Nghệ Kinh Bắc"},
				 {"Time": "04/2016", 			"Info": "Dự án Start up Facebookers Near Me - Faceneme"},
				 {"Time": "01/2016 ~ 05/2016", 	"Info": "Dự án Quản lý công việc trực tuyến và Quản lý văn bản Pháp Luật HVNNVN"},
				 {"Time": "07/2016", 			"Info": "Parttimer Dev tại Công Ty TNHH Phần mềm DTS Việt Nam"},
				 {"Time": "07/2016", 			"Info": "Dự án Walk In Home DTS Japan"},
				 {"Time": "09/2016", 			"Info": "Dự án Quản lý Giảng viên, Sinh viên đi thực tập HVNNVN"}];

var jsonTGData = [{"Time": "2011", 				"Info": "Định hướng trở thành Lập trình viên"}, 
 				  {"Time": "01/2016", 			"Info": "Định hướng trở thành Lập trình viên làm việc tại Nhật Bản"}];
 				  
$(document).ready(function(){
	//$('div.frame').slideDown(8000);

	var allTitle = $('p.label-title');
	
	$.each(jsonIFData, function(index, item){
		$('#table-basicInfo tbody').append('<tr><td>' + item.Time + '</td><td>' + item.Info + '</td></tr>');
	})
	
	$.each(jsonTLData, function(index, item){
		//$('#table-timeline tbody').append('<tr><td>' + item.Time + '</td><td>' + item.Info + '</td></tr>');
	})

	$.each(jsonTGData, function(index, item){
		$('#table-target tbody').append('<tr><td>' + item.Time + '</td><td>' + item.Info + '</td></tr>');
	})

	$.each(allTitle, function(index, item){
		if(index != 0)
		{
			if($(item).isOnScreen() && index == 1)
			{
				$(item).next().slideDown(1000 * (index + 1));
				$(item).attr('data-frame', 'show');
			}
			else
			{
				$(item).next().slideUp();
			}
		}
	})

	$(window).scroll(function(){
		$.each(allTitle, function(index, item){
			if(index != 0)
			{
				var data_frame = $(item).attr('data-frame');
				if(!data_frame)
				{
					if($(item).isOnScreen())
					{
						$(item).next().slideDown(1000 * (index + 1));
					}
				}
			}
		}) 
	})
})

$.fn.isOnScreen = function () {

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};