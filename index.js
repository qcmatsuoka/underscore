"use strict"

var func = {
	each: function(){
		// 繰り返し処理
			var result = 0;
			_.each(data, function(item, i){
				result += item.score;
			});
			return result;
		},
	
	map: function(){
		// 配列を返す
		var result = _.map(data, function(item, i){
			return item.id;
		});
		return result;
	},

	reduce: function(){
		// 合計
		var map = _.map(data, function(item){ return item.score; });
		var result = _.reduce(map, function(num1, num2){
			return num1 + num2;
		});
		return result;
	},

	find: function(){
		// returnの条件を満たすとループが終了しitemを返す
		var result = _.find(data, function(item){
			return item.age > 20;
		});
		return JSON.stringify(result);
	},

	filter: function(){
		// returnの条件を満たすものをすべて返す
		var result = _.filter(data, function(item){
			return item.age > 20;
		});
		return JSON.stringify(result);
	},

	where: function(){
		// 指定した値を持つすべての要素を返す
		var result = _.where(data, { gender:'male' });
		return JSON.stringify(result);
	},

	findWhere: function(){
		// 指定した値を持つ最初の要素を返す
		var result = _.findWhere(data, { gender:'male' });
		return JSON.stringify(result);
	},

	reject: function(){
		// 指定した条件に一致しないものを返す
		var result = _.reject(data, function(item){ 
			return item.age == 15;
		});
		return JSON.stringify(result);
	},

	every: function(){
		// すべて真かどうか返す
		return _.every([true,true,1,'yes'], _.identity);
	},

	some: function(){
		// 真が含まれるかを返す
		return _.some([false,false,'no',1]);
	},

	contains: function(){
		// 配列に値が含まれるかを返す
		return _.contains([100, 200, 300], 200);
	},

	pluck: function(){
		// 指定したプロパティを配列にして返す
		return _.pluck(data, 'name');
	},

	groupBy: function(){
		// ★指定条件でグループ化した配列を返す
		var result = _.groupBy(data, function(item){
			return item.age >= 20;
		});
		return JSON.stringify(result);
	},

	sortBy: function(){
		// 指定した順にソートして返す
		var result = _.sortBy(data, function(item){
			return item.age;
		});
		return JSON.stringify(result);
	},

	min: function(){
		// 最小値、イテレータの実行結果のうち最小のものを返す
		var result = _.min(data, function(item){
			// item.numの最小値を検索 
			return _.min(item.num, function(n){
				return n;
			});
		});
		return JSON.stringify(result);
	},

	max: function(){
		// 最大値、イテレータの実行結果のうち最大のものを返す
		var result = _.max(data, function(item){
			// item.numの最大値を検索 
			return _.max(item.num, function(n){
				return n;
			});
		});
		return JSON.stringify(result);
	},

	countBy: function(){
		// item.numが30以上の個数をカウント
		var result = [];
		_.each(data, function(item){
			result.push(
				_.countBy(item.num, function(n){
					return n > 30;
				})[true]
			);
		});

		return JSON.stringify(result);
	},

	shuffle: function(){
		// シャッフルする
		var result = _.shuffle(data);
		return JSON.stringify(result);
  },

	toArray: function(){
		// 配列にして返す
		return (function(){ return _.toArray(arguments); })(1,2,3);
	},

	size: function(){
		// コレクションの数を返す
		return _.size(data);
	},

	keys: function(){
		// オブジェクトのキーを列挙
		return _.keys(data[0]);
	},

	values: function(){
		// 値の列挙
		return _.values(data[0]);
	},

	pairs: function(){
		// [key, value]のペアにする
		var result = _.pairs(data[0]);
		return JSON.stringify(result);
	},

	invert: function(){
		// キーと値を入れ替える 
		var result = _.invert(data[0]);
		return JSON.stringify(result);
	},

	functions: function(){
		// オブジェクトに含まれる関数を列挙する
		return _.functions({
			add:function(){},
			remove:function(){},
			insert:function(){},
			value:1
		});
	},

	extend: function(){
		// 0番目の引数に、1番目以降の引数をコピーする
		var result = _.extend(data[0], { section_id:1 }, { area_id:1 });
		return JSON.stringify(result);
	},

	pick: function(){
		// 0番目の引数に対して、1番目以降の引数のプロパティだけ残す
		var result = _.pick(data[0], 'gender', 'age');
		return JSON.stringify(result);
	},

	omit: function(){
		// 0番目の引数に対して、1番目以降の引数のプロパティを削除する
		var result = _.omit(data[0], 'gender', 'age');
		return JSON.stringify(result);
	},

	defaults: function(){
		// 0番目の引数に対して、1番目以降の引数をコピー、すでにプロパティがある場合は無視
		var result = _.defaults(data[0], { section_id:100 });
		return JSON.stringify(result);
	},
	
	has: function(){
		// プロパティが存在するかを返す
		var result = _.map(data, function(item){
			return _.has(item, 'age');
		}); 
		return JSON.stringify(result);
	},

	isEqual: function(){
		// 等価かどうか
		var result = _.map(data, function(item){
			// a === bの比較、型が違う場合はfalseとなる
			return _.isEqual(item.age, 46);
		}); 
		return JSON.stringify(result);
	},

	isEmpty: function(){
		// 空かどうか
		return [_.isEmpty({}), _.isEmpty([]), _.isEmpty('')];
	},
	
	isObject: function(){
		// objectかどうかの判定
		return [
			_.isObject([1,2]), 
			_.isObject({ a:'b' }), 
			_.isObject('string'), 
			_.isObject(function(){}), 
			_.isObject(new Date()),
			_.isObject(null)
			];
	},

	isArray: function(){
		// arrayかどうかの判定
		return [
			_.isArray([1,2]), 
			_.isArray({ a:'b' }), 
			_.isArray('string'), 
			_.isArray(function(){}), 
			_.isArray(new Date()),
			_.isArray(null)
			];
	},

	isDate: function(){
		// dateかどうかの判定 
		return [
			_.isDate([1,2]), 
			_.isDate({ a:'b' }), 
			_.isDate('string'), 
			_.isDate(function(){}), 
			_.isDate(new Date()),
			_.isDate(null)
			];
	},

	isNull: function(){
		// Nullかどうかの判定 
		return [
			_.isNull([]), 
			_.isNull({ }), 
			_.isNull(''), 
			_.isNull(function(){}), 
			_.isNull(new Date()),
			_.isNull(null)
			];
	},

	isUndefined: function(){
		// undefinedかどうかの判定 
		return [
			_.isUndefined([]), 
			_.isUndefined({ }), 
			_.isUndefined(''), 
			_.isUndefined(function(){}), 
			_.isUndefined(new Date()),
			_.isUndefined(null),
			_.isUndefined(undefined)
			];
	},


























}
