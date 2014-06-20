
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>双色球快速投注</title>
<link rel="stylesheet" type="text/css" href="http://pimg1.126.net/caipiao_info/css/base.css?201404280326" />
<link rel="stylesheet" type="text/css" href="http://pimg1.126.net/caipiao_info/css/chart/newchart.css?201404280326" />
<script type="text/javascript">
        var gameId = "2010032416YX00000001";
</script>
<script type="text/javascript" src="http://pimg1.126.net/caipiao_info/js/chart/ssq/ssq_rapidbet.js?201404280326"></script>
<script type="text/javascript">document.domain="163.com";</script>
</head>

<body>
    <div class="redball_box clearfix">
    	<h3>红球</h3>
        <ul class="fs_red_area clearfix" id="redArea">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
          <li><span>17</span></li>
          <li><span>18</span></li>
          <li><span>19</span></li>
          <li><span>20</span></li>
          <li><span>21</span></li>
          <li><span>22</span></li>
          <li><span>23</span></li>
          <li><span>24</span></li>
          <li><span>25</span></li>
          <li><span>26</span></li>
          <li><span>27</span></li>
          <li><span>28</span></li>
          <li><span>29</span></li>
          <li><span>30</span></li>
          <li><span>31</span></li>
          <li><span>32</span></li>
          <li><span>33</span></li>
        </ul>
        <p class="ball_sele clearfix">
            <span class="f_left">
                    <select id="r_red_num">
                      <option value="6" selected="selected">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                    </select>
                    <input class="btn_pink" type="button" id="random_red" value="机选红球">
            </span>
            <span class="f_right">
                <a href="http://zx.caipiao.163.com/trend/ssq_basic.html" target="_blank">基本走势图</a> |
                <a href="javascript:void(0)" id="clrRed">清除红球</a>
            </span>
        </p>
    </div>
    <div class="blueball_box clearfix">
    	<h3>蓝球</h3>
        <ul class="fs_blue_area" id="blueArea">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
        </ul>
        <p class="ball_sele clearfix">
        	<span class="f_left">
                <select id="r_blue_num">
                  <option value="1" selected="selected">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                </select>
                <input class="btn_blue" type="button" id="random_blue" value="机选蓝球">
            </span>
        	<span class="f_right">
                <a href="http://zx.caipiao.163.com/trend/ssq_blueComposite.html" target="_blank">蓝球走势图</a> |
                <a href="javascript:void(0)" id="clrBlue">清除蓝球</a>
            </span>
        </p>
    </div>
    <div class="addbtn_box">
    	<input type="button" id="confirm_select" value="" class="btn addbtn_disabled">
    </div>
    <div class="selected_box clearfix">
      <!--选号列表 开始-->
      <div id="select_list_box" class="selected_list">
        <dl id="select_list">
        </dl>
      </div>
      <!--选号列表 开始-->
      <!--收藏+清空 开始-->
      <div class="selected_btnbox">
        <button type="button" class="btn_gray bd4" id="random1">机选1注</button>
        <button type="button" class="btn_gray bd4" id="random5">机选5注</button>
        <button type="button" class="btn_gray bd4" id="clear">清空选号</button>
      </div>
      <!--收藏+清空 结束-->
      <p>您选择了<strong class="c_ba2636" id="stake">0</strong>注，共<strong class="c_ba2636" id="money">0</strong>元&nbsp;&nbsp;&nbsp;&nbsp;
         <input type="radio" name="playmethod" id="daigou" checked="checked"/><label for="daigou">代购</label>
         <input type="radio" name="playmethod" id="hemai"/><label for="hemai">发起合买</label>
      </p>      
    </div>
    <div class="addbtn_box">
    	<input type="button" id="betData" value="" class="btn submit_btn">
    </div>
</body>
</html>
