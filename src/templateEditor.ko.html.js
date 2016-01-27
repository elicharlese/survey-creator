var templateEditor;
(function (templateEditor) {
    var ko;
    (function (ko) {
        ko.html = '<script type="text/html" id="objecteditor">    <div  data-bind="visible:koHasObject" style="margin:10px;width:100%">        <div style="background-color:lightgray">            <a href="#" data-bind="click: showProperties">                <span data-bind="text: koShowProperties() ? \'Hide\': \'Show\'"></span>            </a>            <span data-bind="text: koTitle"></span>        </div>        <div>            <table data-bind="visible:koShowProperties">                <tbody data-bind="foreach: koProperties">                    <tr data-bind="click: $parent.changeActiveProperty($data), style: {background: $parent.koActiveProperty() == $data ? \'lightgray\': \'\'}">                        <td data-bind="text: name"></td>                        <td>                            <span data-bind="text: koText, visible: $parent.koActiveProperty() != $data, attr: {title: koText}, style: {color: koIsDefault() ? \'gray\' : \'\'}" style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden"></span>                            <!-- ko if: editorType == \'text\' -->                            <input type="text" data-bind="value: koValue, visible: $parent.koActiveProperty() == $data" />                            <!-- /ko -->                            <!-- ko if: editorType == \'boolean\' -->                            <input type="checkbox" data-bind="checked: koValue, visible: $parent.koActiveProperty() == $data" />                            <!-- /ko -->                            <!-- ko if: editorType == \'dropdown\' -->                            <select data-bind="value: koValue, visible: $parent.koActiveProperty() == $data, options: choices"></select>                            <!-- /ko -->                            <!-- ko if: editorType == \'itemvalues\' -->                            <div data-bind="visible: $parent.koActiveProperty() == $data, with: itemValues" style="position:absolute; z-index:100; top:parentOffset.top;left:parentOffset.left - 100;background-color:lightgray">                                <table>                                    <thead>                                        <tr>                                            <th>Value</th>                                            <th>Text</th>                                            <th></th>                                        </tr>                                    </thead>                                    <tbody>                                        <!-- ko foreach: koItems -->                                        <tr>                                            <td><input type="text" data-bind="value:koValue" style="width:100px" /></td>                                            <td><input type="text" data-bind="value:koText" style="width:100px" /></td>                                            <td><input type="button" data-bind="click: $parent.onDeleteClick" value="Delete" /></td>                                        </tr>                                        <!-- /ko -->                                        <tr>                                            <td><input type="text" data-bind="value:koNewValue" style="width:100px" /></td>                                            <td><input type="text" data-bind="value:koNewText" style="width:100px" /></td>                                            <td><input type="button" data-bind="click: onAddClick" value="Add" /></td>                                        </tr>                                    </tbody>                                </table>                                <input type="button" value="Apply" data-bind="click: onApplyClick" />                            </div>                            <!-- /ko -->                        </td>                    </tr>                </tbody>            </table>        </div>    </div></script><script type="text/html" id="pageeditor">    <div data-bind="visible:koIsValid">        <!-- ko foreach: koPages -->            <div data-bind="text: title, style: {background: koSelected() ? \'darkgray\' : \'lightgray\'},click:$parent.selectPageClick" style="padding:2px;display:table-cell;white-space:nowrap;cursor:pointer"></div>        <!-- /ko  -->        <div style="display:table-cell;padding:2px">            <input type="button" data-bind="click:addNewPageClick" value="Add New Page" />        </div>    </div></script><div style="overflow:hidden;position:relative;display:table">    <div id="surveyjsPanel" style="display:table-cell;vertical-align:top">        <div style="width:300px;height:400px;overflow-y:auto;overflow-x:hidden">            <div data-bind="template: { name: \'objecteditor\', data: surveyEditor }"></div>            <div data-bind="visible: koSelectedPage() != null">                <div data-bind="template: { name: \'objecteditor\', data: pageEditor }"></div>                <div data-bind="template: { name: \'objecteditor\', data: questionEditor }"></div>            </div>        </div>        <div  data-bind="visible: koSelectedPage() != null">            <select data-bind="options: questionTypes, value: koSelectedQuestionType"></select>            <input type="button" value="Add Question" data-bind="click: addQuestion" />        </div>    </div>    <div style="display:table-cell;width:100%">        <div id="surveyjsEditor" style="height:400px;width:100%">        </div>        <div data-bind="template: { name: \'pageeditor\', data: pagesEditor }" style="width:20px"></div>    </div></div><p><a href="#" data-bind="click: showLiveSurveyClick">    <span data-bind="text: koShowLiveSurvey() ? \'Hide Live Survey\': \'Show Live Survey\'"></span></a></p><div data-bind="visible: koShowLiveSurvey()">    <div id="surveyjsExample" style="height:400px;width:100%"></div></div>';
    })(ko = templateEditor.ko || (templateEditor.ko = {}));
})(templateEditor || (templateEditor = {}));
