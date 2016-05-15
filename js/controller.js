var app = angular.module('main', []);

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

	// $http.get('data.json').success(function (data, status, headers, config) {
	// 	$scope.works = data;
	// }).error(function () {});

	$scope.works = [
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 1",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 2",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 3",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 4",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 5",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 6",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 7",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 8",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 9",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
		{
			img: "img/01.jpg",
			title: "Lorem ipsum. 10",
			desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
			link: "#"
		},
	];

}]);