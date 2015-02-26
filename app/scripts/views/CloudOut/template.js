<div class="widgetAuthoring">
    <div class="widgetTop typeOut">
        <div class="title dragHandle">
        { widget:title } <div class="remove">×</div>
        </div>
    </div>

    <div class="widgetLeft">
        <div class='inlets'>
            <div rv-each-inlet="widget:ins" rv-alt="inlet.title" rv-data-field="inlet.to" class='inlet'>&middot;</div>
        </div>
    </div>

    <div class="widgetBody">
        <div class="dialwrapper" style="position:relative;">
            <input type="text" class="dial" rv-value="widget:in" rv-knob="widget:in"/>
            <div class="display invalue" rv-text="widget:in | rounded">100</div>
            <div class="display outvalue" rv-text="widget:out | rounded">1023</div>
        </div>
        <br><div class='timeLeft'>Send in: 10s</div>

    </div>

    <div class="widgetRight">
        <div class=rightTab><input id="sendToCloud" type="checkbox" rv-checked="widget:sendToCloud" /></div>
    </div>


    <div class="widgetBottom">
        <div class="tab"><p>more</p></div>
        <div class="content">
            <label for="avg">avg inputs</label> <input name="avg" type="checkbox" rv-checked="widget:averageInputs" /> <br>
            <label for="send">send every</label> <input name="send" type="text" rv-value="widget:sendPeriod"><br>
            <hr>
            <select id="cloudService" rv-value="widget:cloudService">
              <option value="sparkfun">Sparkfun Phant</option>
              <option value="spark">Spark.io</option>
            </select>
              <br>
                <div id="sparkfun">
                    <label for="dataField">data field</label> <input name="dataField" class="keys" type="text" rv-value="widget:dataField"><br>
                    <label for="pubKey">public key</label> <input name="pubKey" class="keys" type="text" placeholder="Public Key" rv-value="widget:publicKey"><br>
                    <label for="priKey">private key</label> <input name="priKey" class="keys" type="text" placeholder="Private Key" rv-value="widget:privateKey"><br>
                </div>
                <div id="spark">
                    <label>pin</label> <input class="keys" type="text" rv-value="widget:sparkPin"><br>
                    <label for="sparkDeviceId">device id</label> <input placeholder="Device ID" name="sparkDeviceId" class="keys" type="text" rv-value="widget:sparkDeviceId"><br>
                    <label>token</label> <input placeholder="Access Token" class="keys" type="text" rv-value="widget:sparkAccessToken"><br>
                </div>
        </div>
    </div>
</div>