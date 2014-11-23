<div class="widgetTop typeProcess">
    <div class="title dragHandle">
        {widget:title} <div class="remove">×</div>
    </div>
</div>

<div class="widgetLeft">
    <div class='inlets'>
        <div rv-each-inlet="widget:ins" rv-alt="inlet.title" rv-data-field="inlet.to" class='inlet'>&middot;</div>
    </div>
</div>

<div class="widgetBody">
    <div class="widgetBodyLeft">
        <div class="inletValue"><span rv-text="widget:in1">0</span></div>
        <div class="inletValue"><span rv-text="widget:in2">0</span></div>
    </div>
    <div class="widgetBodyRight">
        <div class="inletValue"><span class="" rv-text="widget:out1">0</span></div>
    </div>
    
</div>

<div class="widgetRight">
    <div class='outlets'>
        <div class="outlet" rv-each-outlet="widget:outs" rv-alt="outlet.title" rv-data-field="outlet.to">&middot;</div>
    </div>
</div>
    
<div class="widgetBottom">
    <div class="tab"><p>more</p></div>
    <div class="content"><textarea class="filterFunction" rv-value="widget:filter"/></div>
</div>