// This dictionary contains 543 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization, defaultStrings } from "survey-creator-core";

export var koreanStrings = {
  // survey templates
  survey: {
    edit: "편집",
    // externalHelpLink: "Watch and learn how to create surveys",
    // externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "왼쪽 도구상자에서 질문을 여기에 놓으십시오.",
    // addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "복사",
    // duplicate: "Duplicate",
    addToToolbox: "도구상자에 추가",
    deletePanel: "패널 삭제",
    deleteQuestion: "질문 삭제",
    convertTo: "다음으로 변경",
    drag: "항목 끌어오기"
  },
  // Question types
  qt: {
    default: "기본값",
    checkbox: "체크박스",
    comment: "설명",
    // imagepicker: "Image Picker",
    // ranking: "Ranking",
    // image: "Image",
    dropdown: "드롭다운",
    // tagbox: "Multi-Select Dropdown",
    file: "파일",
    html: "HTML",
    matrix: "행렬 (단일 선택)",
    matrixdropdown: "행렬 (복수 선택)",
    matrixdynamic: "행렬 (동적 행)",
    multipletext: "텍스트 상자 그룹",
    panel: "패널",
    paneldynamic: "패널 (동적 패널)",
    radiogroup: "라디오 그룹",
    rating: "등급",
    text: "텍스트 상자",
    boolean: "불린(boolean)",
    expression: "표현식",
    // signaturepad: "Signature",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    // defaultLocale: "Default ({0})",
    survey: "설문지",
    settings: "설정",
    // settingsTooltip: "Open settings",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    // showPanel: "Show Panel",
    // hidePanel: "Hide Panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "새 페이지 추가",
    moveRight: "오른쪽으로 스크롤",
    moveLeft: "왼쪽으로 스크롤",
    deletePage: "페이지 삭제",
    editPage: "페이지 편집",
    edit: "편집",
    newPageName: "페이지",
    newQuestionName: "질문",
    newPanelName: "패널",
    // newTextItemName: "text",
    testSurvey: "테스트 설문지",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "테스트 설문지 다시하기",
    testSurveyWidth: "설문지 너비: ",
    // navigateToMsg: "You had to navigate to",
    // logic: "Logic",
    embedSurvey: "내장 설문지",
    // translation: "Translation",
    saveSurvey: "설문지 저장",
    // saveSurveyTooltip: "Save Survey",
    designer: "설문지 디자인",
    jsonEditor: "JSON 편집기",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "실행 취소",
    redo: "복원",
    // undoTooltip: "Undo last change",
    // redoTooltip: "Redo the change",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    // copy: "Copy",
    // cut: "Cut",
    // paste: "Paste",
    // copyTooltip: "Copy selection to clipboard",
    // cutTooltip: "Cut selection to clipboard",
    // pasteTooltip: "Paste from clipboard",
    options: "옵션",
    generateValidJSON: "JSON 데이터 생성",
    generateReadableJSON: "생성 JSON 데이터 읽기",
    toolbox: "도구상자",
    // "property-grid": "Properties",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "일반",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "JSON 데이터를 수정하십시오.",
    surveyResults: "설문 결과: ",
    // surveyResultsTable: "As Table",
    // surveyResultsJson: "As JSON",
    // resultsTitle: "Question Title",
    // resultsName: "Question Name",
    // resultsValue: "Answer Value",
    // resultsDisplayValue: "Display Value",
    modified: "수정됨",
    saving: "저장중",
    saved: "저장됨",
    // propertyEditorError: "Error",
    // saveError: "Error! Editor content is not saved.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    // translationAddLanguage: "Select language to translate",
    // translationShowAllStrings: "All Strings",
    // translationShowUsedStringsOnly: "Used Strings Only",
    // translationShowAllPages: "All Pages",
    // translationNoStrings: "No strings to translate. Please, change the filter.",
    // translationExportToSCVButton: "Export to CSV",
    // translationImportFromSCVButton: "Import from CSV",
    // translationMergeLocaleWithDefault: "Merge {0} with default locale",
    // translationPlaceHolder: "Translation...",
    // bold: "Bold",
    // italic: "Italic",
    // underline: "Underline",
    // addNewQuestion: "Add Question",
    // selectPage: "Select page...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      // page_visibilityName: "Show (hide) page",
      // page_enableName: "Enable (disable) page",
      // panel_visibilityName: "Show (hide) panel",
      // panel_enableName: "Enable (disable) panel",
      // question_visibilityName: "Show (hide) question",
      // question_enableName: "Enable (disable) question",
      // question_requireName: "Make question required",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      // trigger_completeName: "Complete survey",
      // trigger_setvalueName: "Set answer",
      // trigger_copyvalueName: "Copy answer",
      // trigger_skipName: "Skip to question",
      // trigger_runExpressionName: "Run expression",
      // completedHtmlOnConditionName: "Set \"Survey Complete\" page markup",
      // page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      // panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      // panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      // question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      // question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      // question_requireDescription: "Question becomes required when the logic expression returns true.",
      // trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      // trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      // trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      // trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question.",
      // trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      // completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      // itemExpressionText: "When expression: '{0}' returns true", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      // page_visibilityText: "make page {0} visible", //{0} page name
      // panel_visibilityText: "make panel {0} visible", //{0} panel name
      // panel_enableText: "make panel {0} enable", //{0} panel name
      // question_visibilityText: "make question {0} visible", //{0} question name
      // question_enableText: "make question {0} enable", //{0} question name
      // question_requireText: "make question {0} required", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      // trigger_completeText: "survey becomes completed",
      // trigger_setvalueText: "set into question: {0} value {1}", //{0} question name, {1} setValue
      // trigger_copyvalueText: "copy into question: {0} value from question {1}", //{0} and {1} question names
      // trigger_skipText: "survey skip to the question {0}", //{0} question name
      // trigger_runExpressionText1: "run expression: '{0}'", //{0} the expression
      // trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      // completedHtmlOnConditionText: "show custom text for the 'Thank you page'.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      // conditions: "Condition(s)",
      // actions: "Action(s)",
      // expressionEditorTitle: "Define condition(s)",
      // actionsEditorTitle: "Define action(s)",
      // deleteAction: "Delete Action",
      // addNewAction: "Add Action",
      // selectedActionCaption: "Select action...",
      // expressionInvalid: "The logic expression is empty or invalid. Please correct it.",
      // noActionError: "Please, add at least one action.",
      // actionInvalid: "Please, fix problems in your action(s).",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "적용",
    ok: "확인",
    // save: "Save",
    // clear: "Clear",
    // saveTooltip: "Save",
    cancel: "취소",
    // set: "Set",
    reset: "재설정",
    // change: "Change",
    // refresh: "Refresh",
    close: "닫기",
    delete: "삭제",
    // add: "Add",
    addNew: "새로 만들기",
    addItem: "항목을 추가하려면 클립하십시오.",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    // addOther: "Other",
    // addSelectAll: "Select All",
    // addNone: "None",
    removeAll: "모두 삭제",
    edit: "편집",
    // back: "Return without saving",
    // backTooltip: "Return without saving",
    // saveAndBack: "Save and return",
    // saveAndBackTooltip: "Save and return",
    // doneEditing: "Done",
    editChoices: "선택사항 편집",
    // showChoices: "Show Choices",
    move: "이동",
    empty: "<비어있음>",
    // emptyValue: "Value is empty",
    fastEntry: "빠른 입력",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "양식 입력",
    testService: "서비스 테스트",
    // itemSelectorEmpty: "Please select the element",
    // conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "질문 선택...",
    // conditionSelectPage: "Select page...",
    // conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
    expressionHelp: "식을 입력하십시오. 다음과 같은 질문 값에 접근하려면 중괄호를 이용하십시오: '{질문1} + {질문2}', '({가격}*{수량}) * (100 - {할인})'",
    aceEditorHelp: "ctrl+space를 눌러 완성된 수식에 대한 힌트를 얻으십시오",
    aceEditorRowTitle: "현재 행",
    aceEditorPanelTitle: "현재 패널",
    showMore: "자세한 내용은 설명서를 확인하십시오.",
    assistantTitle: "유효 질문:",
    cellsEmptyRowsColumns: "최소한 하나의 열 또는 행이 있어야 합니다.",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "값을 입력하십시오",
    // propertyIsNoUnique: "Please enter a unique value",
    // propertyNameIsNotUnique: "Please enter a unique name",
    // listIsEmpty: "No items have been added yet",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    // expressionIsEmpty: "Expression is empty",
    value: "값",
    text: "텍스트",
    // rowid: "Row ID",
    // imageLink: "Image or video URL",
    columnEdit: "열 편집: {0}",
    itemEdit: "항목 편집: {0}",
    url: "URL",
    path: "경로",
    valueName: "값 이름",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "제목 이름",
    // imageLinkName: "Get image URLs from the following JSON field",
    // allowEmptyResponse: "Allow empty response",
    // titlePlaceholder: "Title",
    // surveyTitlePlaceholder: "Survey Title",
    // pageTitlePlaceholder: "Page {num}",
    // descriptionPlaceholder: "Description",
    // surveyDescriptionPlaceholder: "Description",
    // pageDescriptionPlaceholder: "Description",
    showOtherItem: "다른 항목이 있습니다",
    otherText: "기타 항목 텍스트",
    // showNoneItem: "Allow the None option",
    // noneText: "None option text",
    // showSelectAllItem: "Allow the Select All option",
    // selectAllText: "Select All option text",
    // choicesMin: "Minimum value for auto-generated items",
    // choicesMax: "Maximum value for auto-generated items",
    // choicesStep: "Step for auto-generated items",
    name: "이름",
    title: "제목",
    cellType: "셀 유형",
    colCount: "열 개수",
    choicesOrder: "항목 순서 선택",
    visible: "보입니까??",
    isRequired: "필수입니까?",
    // isAllRowRequired: "Require answer for all rows",
    // requiredErrorText: "\"Required\" error message",
    startWithNewLine: "새 줄로 시작하겠습니까?",
    rows: "행 수",
    // cols: "Columns",
    placeholder: "입력 자리 표시자 ",
    showPreview: "이미지 미리보기가 표시됩니까?",
    storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
    maxSize: "최대 파일 크기(bytes)",
    imageHeight: "이미지 높이",
    imageWidth: "이미지 너비",
    rowCount: "행 수",
    columnLayout: "열 위치",
    addRowLocation: "행 버튼 위치 추가",
    addRowText: "행 버튼 텍스트 추가",
    removeRowText: "행 버튼 텍스트 제거",
    // rateMin: "Minimum rate value",
    // rateMax: "Maximum rate value",
    // rateStep: "Rate step",
    minRateDescription: "최소 설명 길이",
    maxRateDescription: "최대 설명 길이",
    inputType: "입력 유형",
    optionsCaption: "옵션 캡션",
    defaultValue: "기본값",
    cellsDefaultRow: "기본 셀 텍스트",
    surveyEditorTitle: "설문지 설정 편집",
    qEditorTitle: "편집: {0}",
    // maxLength: "Maximum length (in characters)",
    // buildExpression: "Build",
    // editExpression: "Edit",
    // and: "and",
    // or: "or",
    // remove: "Remove",
    // addCondition: "Add Condition",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "제목 표시/숨김",
    // expandCollapseTitle: "Expand/collapse title",
    locale: "기본 언어",
    // simulator: "Select device type",
    // landscapeOrientation: "Switch to landscape orientation",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "모드(편집/읽기전용)",
    clearInvisibleValues: "보이지 않는 값 지우기",
    cookieName: "쿠키 이름(로컬에서 설문 조사를 두 번 사용하지 않도록 설정)",
    sendResultOnPageNext: "다음 페이지에서 설문 조사 결과 보내기",
    storeOthersAsComment: "다른 사용자의 값을 별도의 필드에 저장",
    showPageTitles: "페이지 제목 표시",
    showPageNumbers: "페이지 번호 표시",
    pagePrevText: "이전 페이지 버튼 텍스트",
    pageNextText: "다음 페이지 버튼 텍스트",
    completeText: "완료 버튼 텍스트",
    // previewText: "Preview Answers button text",
    // editText: "Edit Answer button text",
    startSurveyText: "시작 버튼 텍스트",
    showNavigationButtons: "탐색 버튼 표시 (기본 탐색)",
    showPrevButton: "이전 버튼 표시 (사용자가 이전 페이지로 돌아갈 수 있음)",
    firstPageIsStarted: "설문지의 첫 번째 페이지는 시작 페이지입니다",
    showCompletedPage: "끝 부분에 완료된 페이지 표시 (완료된 HTML)",
    goNextPageAutomatic: "모든 질문에 응답 후 자동으로 다음 페이지로 이동",
    showProgressBar: "진행률 막대 표시",
    questionTitleLocation: "질문 제목 위치",
    requiredText: "질문에 필요한 기호",
    questionStartIndex: "질문 시작 색인 (1, 2 또는 'A', 'a')",
    showQuestionNumbers: "질문 번호 표시",
    questionTitleTemplate: "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
    questionErrorLocation: "질문 위치 오류",
    focusFirstQuestionAutomatic: "페이지 변경시 첫 번째 질문에 초점",
    questionsOrder: "페이지의 요소 순서",
    maxTimeToFinish: "설문 조사를 마칠 수있는 최대 시간",
    maxTimeToFinishPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "타이머 패널 표시",
    showTimerPanelMode: "타이머 패널 모드 표시",
    renderMode: "렌더링 모드",
    allowAddPanel: "패널 추가 허용",
    allowRemovePanel: "패널 제거 허용",
    // noEntriesText: "Empty entries text",
    panelAddText: "패널 텍스트 추가",
    panelRemoveText: "패널 텍스트 삭제",
    isSinglePage: "한 페이지에 모든 요소 표시",
    // html: "HTML markup",
    // expression: "Expression",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    // minValue: "Minimum value",
    // maxValue: "Maximum value",
    // minLength: "Minimum length (in characters)",
    // allowDigits: "Allow digits",
    // minCount: "Minimum count",
    // maxCount: "Maximum count",
    // regex: "Regular expression",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    // totalText: "Total row text",
    // totalType: "Total type",
    // totalExpression: "Total expression",
    // totalDisplayStyle: "Total value display style",
    // totalCurrency: "Currency",
    // totalFormat: "Formatted string",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    // allowClear: "Show the Clear button",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    // logoPosition: "Logo position",
    // addLogo: "Add logo...",
    // changeLogo: "Change logo...",
    logoPositions: {
      // none: "Remove logo",
      // left: "Left",
      // right: "Right",
      // top: "On the top",
      // bottom: "In the bottom"
    },
    tabs: {
      general: "일반",
      fileOptions: "옵션",
      html: "Html 편집기",
      columns: "열",
      rows: "행",
      choices: "선택",
      items: "항목",
      visibleIf: "조건 충족시 보기",
      enableIf: "조건 충족시 허용",
      // requiredIf: "Required If",
      rateValues: "길이 값",
      choicesByUrl: "웹에서 선택",
      matrixChoices: "기본 선택",
      multipleTextItems: "텍스트 입력",
      // numbering: "Numbering",
      validators: "유효성 검사기",
      navigation: "탐색",
      question: "질문",
      // pages: "Pages",
      timer: "타이머 / 퀴즈",
      // calculatedValues: "Calculated Values",
      triggers: "트리거",
      templateTitle: "템플릿 제목",
      // totals: "Totals",
      // logic: "Logic",
      // layout: "Layout",
      // data: "Data",
      // validation: "Validation",
      // cells: "Cell Texts",
      // showOnCompleted: "Survey Complete",
      // logo: "Logo in Survey Title",
      // slider: "Slider",
      // expression: "Expression",
      // others: "Others"
    },
    editProperty: "편집 속성 '{0}'",
    items: "[ 항목: {0} ]",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "값을 입력하십시오.",
    noquestions: "설문 조사에는 어떤 질문도 없습니다.",
    createtrigger: "트리거를 만드십시오",
    // titleKeyboardAdornerTip: "Press enter button to edit",
    // keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "트리거 켜기",
    triggerMakePagesVisible: "페이지 표시:",
    triggerMakeQuestionsVisible: "요소 표시:",
    triggerCompleteText: "조건 충족 시 설문 조사를 작성하십시오.",
    triggerNotSet: "트리거가 설정되지 않았습니다.",
    triggerRunIf: "다음 조건 충족 시 실행",
    triggerSetToName: "다음 값 변경: ",
    // triggerFromName: "Copy value from: ",
    // triggerRunExpression: "Run this Expression",
    triggerSetValue: "다음으로 수정: ",
    // triggerGotoName: "Go to the question",
    triggerIsVariable: "변수를 설문 결과에 넣지 마십시오.",
    // triggerRunExpressionEmpty: "Please enter a valid expression",
    // emptyExpressionPlaceHolder: "Type expression here...",
    // noFile: "No file choosen",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    // true: "true",
    // false: "false",
    inherit: "상속",
    show: "보기",
    hide: "숨기기",
    default: "기본값",
    initial: "초기값",
    random: "무작위",
    collapsed: "축소",
    expanded: "확장",
    none: "없음",
    asc: "오름차순",
    desc: "내림차순",
    indeterminate: "불확정",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    firstExpanded: "우선 확장",
    off: "꺼짐",
    // onpanel: "Start on each panel",
    onPanel: "패널에서",
    onSurvey: "설문에서",
    list: "목록",
    progressTop: "상단 진행률",
    progressBottom: "하단 진행률",
    progressTopBottom: "상하단 진행률",
    horizontal: "가로",
    vertical: "세로",
    top: "위",
    bottom: "아래",
    topBottom: "위아래",
    // both: "Both",
    left: "왼쪽",
    // right: "Right",
    // color: "color",
    // date: "date",
    // datetime: "datetime",
    // "datetime-local": "datetime-local",
    // email: "email",
    // month: "month",
    // number: "number",
    // password: "password",
    // range: "range",
    // tel: "tel",
    // text: "text",
    // time: "time",
    // url: "url",
    // week: "week",
    hidden: "숨김",
    on: "켜기",
    onPage: "페이지 켜기",
    edit: "편집",
    display: "디스플레이",
    onComplete: "완료",
    onHidden: "숨김",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "모두",
    page: "페이지",
    survey: "설문지",
    onNextPage: "다음 페이지로",
    onValueChanged: "값 변경",
    // onValueChanging: "Before an answer is changed",
    // standard: "Original structure",
    // singlePage: "All questions on a single page",
    // questionPerPage: "Each question on an individual page",
    // noPreview: "No preview",
    // showAllQuestions: "Show all questions",
    // showAnsweredQuestions: "Show answered questions only",
    // pages: "Completed pages",
    // questions: "Answered questions",
    // requiredQuestions: "Answered required questions",
    // correctQuestions: "Valid answers",
    // buttons: "Completed pages (button UI)",
    // underInput: "Under the input",
    // underTitle: "Under the title",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      // none: "Hidden"
    },
    showProgressBar: {
      // off: "Hidden"
    },
    showTimerPanel: {
      // none: "Hidden"
    },
    showTimerPanelMode: {
      // all: "Both"
    },
    detailPanelMode: {
      // none: "Hidden"
    },
    addRowLocation: {
      // default: "Depends on matrix layout"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "비어있습니다",
    notempty: "비어있지 않습니다",
    equal: "같습니다",
    notequal: "같지 않습니다",
    contains: "포함합니다",
    notcontains: "포함하지 않습니다",
    // anyof: "Any of",
    // allof: "All of",
    greater: "큰",
    less: "작은",
    greaterorequal: "크거나 같음",
    lessorequal: "작거나 같음",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "Angular 버전 사용",
    jquery: "jQuery 버전 사용",
    knockout: "Knockout 버전 사용",
    react: "React 버전 사용",
    vue: "Vue 버전 사용",
    bootstrap: "부트 스트랩 프레임",
    // modern: "Modern theme",
    // default: "Default theme",
    // orange: "Orange theme",
    // darkblue: "Darkblue theme",
    // darkrose: "Darkrose theme",
    // stone: "Stone theme",
    // winter: "Winter theme",
    // winterstone: "Winter-Stone theme",
    showOnPage: "페이지에서 설문조사 보기",
    showInWindow: "윈도우 창에서 설문조사 보기",
    loadFromServer: "서버에서 설문조사 JSON 실행",
    titleScript: "스크립트 및 스타일",
    titleHtml: "HTML",
    titleJavaScript: "자바스크립트"
  },
  // Preview (Survey)
  ts: {
    selectPage: "테스트 할 페이지를 선택하십시오:",
    // showInvisibleElements: "Show invisible elements",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "답 개수",
    emailvalidator: "이메일",
    expressionvalidator: "표현식",
    numericvalidator: "숫자",
    regexvalidator: "정규식",
    textvalidator: "텍스트"
  },
  triggers: {
    completetrigger: "설문 완료",
    setvaluetrigger: "값 설정",
    // copyvaluetrigger: "Copy answer",
    // skiptrigger: "Skip to question",
    // runexpressiontrigger: "Run expression",
    visibletrigger: "선명도 변경"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "제목",
      title: "'이름'과 같은 경우 비워 둡니다."
    },
    // multiSelect: "Allow multiple selection",
    // showLabel: "Show image captions",
    // value: "Value",
    visibleIf: "조건 충족시 보기",
    // attachOriginalItems: "attachOriginalItems",
    // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
    titleLocation: "제목 위치",
    description: "설명",
    // descriptionLocation: "descriptionLocation",
    // defaultValueExpression: "defaultValueExpression",
    // requiredIf: "requiredIf",
    validators: "유효성 검사기",
    // bindings: "bindings",
    // renderAs: "renderAs",
    currency: "화폐",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    columns: "열",
    // detailElements: "detailElements",
    choices: "선택",
    // allowAdaptiveActions: "allowAdaptiveActions",
    // defaultRowValue: "defaultRowValue",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // logoFit: "logoFit",
    // pages: "pages",
    // questions: "questions",
    triggers: "트리거",
    // calculatedValues: "calculatedValues",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    // questionDescriptionLocation: "questionDescriptionLocation",
    // progressBarType: "progressBarType",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "URL을 통한 선택",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    // min: "min",
    // max: "max",
    // minValueExpression: "minValueExpression",
    // maxValueExpression: "maxValueExpression",
    // step: "step",
    // dataList: "dataList",
    itemSize: "항목 크기",
    // elements: "elements",
    // content: "content",
    navigationButtonsVisibility: "탐색 버튼 선명도",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // autoGrow: "autoGrow",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    label: "라벨",
    // contentMode: "contentMode",
    // imageFit: "imageFit",
    // altText: "altText",
    // height: "height",
    // penColor: "penColor",
    // backgroundColor: "backgroundColor",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression",
    // showCaption: "showCaption",
    // iconName: "iconName",
    // iconSize: "iconSize"
  }
};
editorLocalization.locales["ko"] = koreanStrings;
