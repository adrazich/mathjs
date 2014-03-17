/**
* math.js - Javascript math library
* \version 1.0
* \author Anna Drazich Lewis
* \copyright (c) 2012-2014 Anna Drazich Lewis
* Dual licensed under the MIT and GPL licenses.
* MIT License: https://github.com/adrazich/mathjs/blob/master/MIT-License.txt
* GPL License: https://github.com/adrazich/mathjs/blob/master/GPL-License.txt
* Github: https://github.com/adrazich/mathjs
*/

function distance(x1, x2, y1, y2){
  return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
}

var vector = {
  add: function(v1, v2){
	return { x: v1.x+v2.x, y: v1.y+v2.y, z: v1.z+v2.z };
  },
  addConstant: function(v, c){
	return { x: v.x+c, y: v.y+c, z: v.z+c };
  },
  subtract: function(v1, v2){
	return { x: v1.x-v2.x, y: v1.y-v2.y, z: v1.z-v2.z };
  },
  subtractConstant: function(v, c){
	return { x: v.x-c, y: v.y-c,z: v.z-c };
  },
  multiply: function(v1, v2){
	return { x: v1.x*v2.x, y: v1.y*v2.y, z: v1.z*v2.z };
  },
  multiplyConstant: function(v, c){
	return { x: v.x*c, y: v.y*c, z: v.z*c };
  },
  divideConstant: function(v, c){
	if (c == 0) return 0;
	return { x: v.x / c, y: v.y / c, z: v.z / c };
  }
};

function rand(minn, maxx){ return Math.round(minn + Math.random()*(maxx-minn)); }
function randFloat(minn, maxx){ return minn + Math.random()*(maxx-minn); }
function randColor(base, offset){	
  return { r:rand(base.r - offset, base.r + offset), g: rand(base.g - offset, base.g + offset), b:rand(base.b - offset, base.b + offset), a:base.a };
}