' Context
AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")

' Credentials
'AIUtil("text_box", "User: *").Type "S4H_SD_DEM"
'AIUtil("text_box", "Password").Type "Welcome1" + vbCrLf

' Search T-Code
AIUtil("combobox", "").Type "/nva03" + vbCrLf
AIUtil("text_box", "Order:").Type "4040"
AIUtil("button", "Continue").Click

' Text Validation
AIUtil.FindText("Delivery Block:").CheckExists True

' Navigate to Item detail
AIUtil.FindText("Reason for rejection").Click

' Grab value
Parameter ("searchValue") = AIUtil.FindText(micAnyText, micWithAnchorOnLeft, AIUtil("check_box", micAnyText)).GetValue

'MsgBox ("searchValue: " & searchValue)

' Exit
AIUtil.FindText("Exit").Click
AIUtil.FindText("Exit").Click
AIUtil("button", "Yes").Click

