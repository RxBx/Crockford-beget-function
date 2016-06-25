

if (typeof Object.beget !== 'function') {
	Object.beget = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var stooge = {"profession": "actor"};
var another_stooge =Object.beget(stooge);
another_stooge['hair']="straight";
another_stooge.nickname = 'Moe';
console.log(another_stooge);
var yetanother_stooge =Object.beget(stooge);
yetanother_stooge['hair']="curly";
yetanother_stooge.nickname = 'joe';
console.log(yetanother_stooge.profession);
console.log(yetanother_stooge.location);
stooge.location = "hollywood";
console.log(yetanother_stooge.location);
yetanother_stooge.location = 'burbank';
console.log(yetanother_stooge.hasOwnProperty('location'));
console.log(another_stooge.hasOwnProperty('location'));

