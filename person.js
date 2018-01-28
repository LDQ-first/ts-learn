var Choose;
(function (Choose) {
    Choose[Choose["Wife"] = 0] = "Wife";
    Choose[Choose["Mother"] = 1] = "Mother";
})(Choose || (Choose = {})); // 默认值为 Wife = 0，Mother = 1
var question = function (choose) {
    console.log('choose: ', choose);
    console.log('你老婆和妈妈同时掉水里你先救谁？');
    console.log('你的选择是：', choose);
};
question(Choose.Mother);
